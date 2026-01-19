// Crawler factory - creates appropriate crawler based on site configuration
import { CrawlerInterface, CrawlerConfig } from '../types';
import { SiteConfig } from '../types/config';
import { HttpCrawler } from './http-crawler';
import { PlaywrightCrawler } from './playwright-crawler';
import { rateLimiter } from '../compliance';

export class CrawlerFactory {
    private crawlers: Map<string, CrawlerInterface> = new Map();

    /**
     * Create or get a crawler for a site
     */
    getCrawler(siteConfig: SiteConfig): CrawlerInterface {
        const key = `${siteConfig.name}-${siteConfig.crawlerType}`;

        if(this.crawlers.has(key)) {
            return this.crawlers.get(key)!;
        }

        // Configure rate limiter for this site
        const domain = new URL(siteConfig.baseUrl).origin;
        rateLimiter.configure(domain, siteConfig.rateLimit);

        const config: CrawlerConfig = {
            type: siteConfig.crawlerType,
            baseUrl: siteConfig.baseUrl,
            headers: siteConfig.headers,
            crawlDelay: siteConfig.rateLimit.crawlDelayMs,
        };

        let crawler: CrawlerInterface;

        switch(siteConfig.crawlerType) {
            case 'http':
                crawler = new HttpCrawler(config);
                break;

            case 'playwright':
                crawler = new PlaywrightCrawler(config);
                break;

            case 'puppeteer':
                // Fall back to Playwright for now
                console.warn('Puppeteer not implemented, using Playwright');
                crawler = new PlaywrightCrawler(config);
                break;

            default:
                throw new Error(`Unknown crawler type: ${siteConfig.crawlerType}`);
        }

        this.crawlers.set(key, crawler);
        return crawler;
    }

    /**
     * Create a crawler by type directly
     */
    createCrawler(type: 'http' | 'playwright' | 'puppeteer', config: CrawlerConfig): CrawlerInterface {
        switch(type) {
            case 'http':
                return new HttpCrawler(config);
            case 'playwright':
            case 'puppeteer':
                return new PlaywrightCrawler(config);
            default:
                throw new Error(`Unknown crawler type: ${type}`);
        }
    }

    /**
     * Close all crawlers
     */
    async closeAll(): Promise<void> {
        const closePromises = Array.from(this.crawlers.values()).map(c => c.close());
        await Promise.all(closePromises);
        this.crawlers.clear();
    }

    /**
     * Close a specific crawler
     */
    async close(siteName: string): Promise<void> {
        for(const [key, crawler] of this.crawlers) {
            if(key.startsWith(siteName)) {
                await crawler.close();
                this.crawlers.delete(key);
            }
        }
    }
}

// Export singleton factory
export const crawlerFactory = new CrawlerFactory();

// Export individual crawlers
export { HttpCrawler } from './http-crawler';
export { PlaywrightCrawler } from './playwright-crawler';
