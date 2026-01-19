// HTTP-based crawler using fetch and cheerio
import * as cheerio from 'cheerio';
import { CrawlerInterface, CrawlResult, CrawlMetadata, CrawlerConfig } from '../types';
import { robotsParser, rateLimiter, userAgentManager } from '../compliance';
import { TIMEOUT_DEFAULTS, RETRY_DEFAULTS } from '../config/constants';

export class HttpCrawler implements CrawlerInterface {
    private config: CrawlerConfig;

    constructor(config: CrawlerConfig) {
        this.config = {
            timeout: TIMEOUT_DEFAULTS.request,
            retries: RETRY_DEFAULTS.maxRetries,
            ...config,
        };
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
                const result = await this.fetchUrl(url, startTime);
                rateLimiter.reportSuccess(domain);
                return result;
            } catch(error) {
                lastError = error as Error;
                console.warn(`Crawl attempt ${attempt + 1} failed for ${url}:`, lastError.message);

                if(attempt < maxRetries) {
                    await rateLimiter.backoff(domain, attempt);
                } else {
                    await rateLimiter.reportFailure(domain);
                }
            }
        }

        return this.createErrorResult(url, lastError?.message || 'Unknown error', startTime, true);
    }

    private async fetchUrl(url: string, startTime: number): Promise<CrawlResult> {
        const headers: Record<string, string> = {
            'User-Agent': userAgentManager.getAgent(false),
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            ...this.config.headers,
        };

        const response = await fetch(url, {
            method: 'GET',
            headers,
            signal: AbortSignal.timeout(this.config.timeout || TIMEOUT_DEFAULTS.request),
            redirect: 'follow',
        });

        const responseTime = Date.now() - startTime;

        if(!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        // Extract text content
        $('script, style, noscript, iframe').remove();
        const content = $('body').text().replace(/\s+/g, ' ').trim();

        const metadata: CrawlMetadata = {
            statusCode: response.status,
            contentType: response.headers.get('content-type') || 'text/html',
            contentLength: parseInt(response.headers.get('content-length') || '0', 10) || html.length,
            responseTime,
            robotsAllowed: true,
        };

        return {
            url,
            content,
            html,
            metadata,
            timestamp: new Date(),
            success: true,
        };
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
        // No cleanup needed for HTTP crawler
    }
}

/**
 * Parse HTML with cheerio and return the object
 */
export function parseHtml(html: string): cheerio.CheerioAPI {
    return cheerio.load(html);
}
