// Playwright-based crawler for dynamic JavaScript sites
import { CrawlerInterface, CrawlResult, CrawlMetadata, CrawlerConfig } from '../types';
import { robotsParser, rateLimiter, userAgentManager } from '../compliance';
import { TIMEOUT_DEFAULTS, RETRY_DEFAULTS } from '../config/constants';

// Dynamic imports to avoid requiring Playwright in HTTP-only scenarios
let playwright: typeof import('playwright') | null = null;
let Browser: import('playwright').Browser | null = null;

async function initPlaywright() {
    if(!playwright) {
        try {
            playwright = await import('playwright');
        } catch(error) {
            throw new Error('Playwright is not installed. Run: npm install playwright');
        }
    }
    return playwright;
}

export class PlaywrightCrawler implements CrawlerInterface {
    private config: CrawlerConfig;
    private browser: import('playwright').Browser | null = null;

    constructor(config: CrawlerConfig) {
        this.config = {
            timeout: TIMEOUT_DEFAULTS.page,
            retries: RETRY_DEFAULTS.maxRetries,
            ...config,
        };
    }

    private async ensureBrowser(): Promise<import('playwright').Browser> {
        if(!this.browser) {
            const pw = await initPlaywright();
            this.browser = await pw.chromium.launch({
                headless: true,
                args: [
                    '--disable-blink-features=AutomationControlled',
                    '--disable-dev-shm-usage',
                    '--no-sandbox',
                ],
            });
        }
        return this.browser;
    }

    async crawl(url: string): Promise<CrawlResult> {
        const startTime = Date.now();
        const domain = new URL(url).origin;

        // Check robots.txt compliance
        const robotsAllowed = await robotsParser.isAllowed(url);
        if(!robotsAllowed) {
            return this.createErrorResult(url, 'Blocked by robots.txt', startTime, false);
        }

        // Apply rate limiting
        await rateLimiter.acquire(domain);

        let lastError: Error | null = null;
        const maxRetries = this.config.retries || RETRY_DEFAULTS.maxRetries;

        for(let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                const result = await this.fetchWithPlaywright(url, startTime);
                rateLimiter.reportSuccess(domain);
                return result;
            } catch(error) {
                lastError = error as Error;
                console.warn(`Playwright crawl attempt ${attempt + 1} failed for ${url}:`, lastError.message);

                if(attempt < maxRetries) {
                    await rateLimiter.backoff(domain, attempt);
                } else {
                    await rateLimiter.reportFailure(domain);
                }
            }
        }

        return this.createErrorResult(url, lastError?.message || 'Unknown error', startTime, true);
    }

    private async fetchWithPlaywright(url: string, startTime: number): Promise<CrawlResult> {
        const browser = await this.ensureBrowser();
        const context = await browser.newContext({
            userAgent: userAgentManager.getAgent(true), // Use stealth mode
            viewport: { width: 1920, height: 1080 },
            locale: 'en-US',
            timezoneId: 'America/New_York',
        });

        const page = await context.newPage();

        try {
            // Block unnecessary resources to speed up
            await page.route('**/*', (route) => {
                const resourceType = route.request().resourceType();
                if(['image', 'media', 'font', 'stylesheet'].includes(resourceType)) {
                    route.abort();
                } else {
                    route.continue();
                }
            });

            const response = await page.goto(url, {
                waitUntil: 'networkidle',
                timeout: this.config.timeout || TIMEOUT_DEFAULTS.navigation,
            });

            if(!response) {
                throw new Error('No response received');
            }

            // Wait for dynamic content
            await page.waitForTimeout(2000);

            // Auto-scroll to trigger lazy loading
            await this.autoScroll(page);

            const html = await page.content();
            const content = await page.evaluate(() => {
                // Remove non-content elements
                const elementsToRemove = document.querySelectorAll('script, style, noscript, iframe, nav, footer, header');
                elementsToRemove.forEach((el: Element) => el.remove());
                return document.body?.innerText || '';
            });

            const responseTime = Date.now() - startTime;

            const metadata: CrawlMetadata = {
                statusCode: response.status(),
                contentType: response.headers()['content-type'] || 'text/html',
                contentLength: html.length,
                responseTime,
                robotsAllowed: true,
            };

            return {
                url,
                content: content.replace(/\s+/g, ' ').trim(),
                html,
                metadata,
                timestamp: new Date(),
                success: true,
            };
        } finally {
            await page.close();
            await context.close();
        }
    }

    private async autoScroll(page: import('playwright').Page): Promise<void> {
        await page.evaluate(async () => {
            await new Promise<void>((resolve) => {
                let totalHeight = 0;
                const distance = 300;
                const maxScrolls = 10;
                let scrollCount = 0;

                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    scrollCount++;

                    if(totalHeight >= scrollHeight - window.innerHeight || scrollCount >= maxScrolls) {
                        clearInterval(timer);
                        window.scrollTo(0, 0); // Scroll back to top
                        resolve();
                    }
                }, 200);
            });
        });
    }

    private createErrorResult(
        url: string,
        error: string,
        startTime: number,
        robotsAllowed: boolean
    ): CrawlResult {
        return {
            url,
            content: '',
            metadata: {
                statusCode: 0,
                contentType: '',
                contentLength: 0,
                responseTime: Date.now() - startTime,
                robotsAllowed,
            },
            timestamp: new Date(),
            success: false,
            error,
        };
    }

    async close(): Promise<void> {
        if(this.browser) {
            await this.browser.close();
            this.browser = null;
        }
    }
}
