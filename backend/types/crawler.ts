// Type definitions for the crawler system
import { RawProblem } from './problem';

export interface CrawlerConfig {
    type: 'http' | 'playwright' | 'puppeteer';
    baseUrl: string;
    headers?: Record<string, string>;
    timeout?: number;
    retries?: number;
    crawlDelay?: number;
}

export interface CrawlMetadata {
    statusCode: number;
    contentType: string;
    contentLength: number;
    responseTime: number;
    robotsAllowed: boolean;
}

export interface CrawlResult {
    url: string;
    content: string;
    html?: string;
    metadata: CrawlMetadata;
    timestamp: Date;
    success: boolean;
    error?: string;
}

export interface CrawlerInterface {
    crawl(url: string): Promise<CrawlResult>;
    close(): Promise<void>;
}

export interface SiteAdapter {
    name: string;
    baseUrl: string;
    crawlerType: 'http' | 'playwright' | 'puppeteer';
    extractProblems(html: string): RawProblem[];
    getUrls(): string[];
}

