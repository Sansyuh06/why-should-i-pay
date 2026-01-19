// Configuration types

export interface SiteConfig {
    name: string;
    baseUrl: string;
    crawlerType: 'http' | 'playwright' | 'puppeteer';
    enabled: boolean;
    schedule: string; // cron pattern
    rateLimit: RateLimitConfig;
    selectors: Record<string, string>;
    headers?: Record<string, string>;
}

export interface RateLimitConfig {
    requestsPerMinute: number;
    crawlDelayMs: number;
    backoffMultiplier: number;
    maxRetries: number;
}

export interface GlobalConfig {
    ethical: EthicalConfig;
    storage: StorageConfig;
    logging: LoggingConfig;
}

export interface EthicalConfig {
    respectRobotsTxt: boolean;
    maxRequestsPerMinute: number;
    minCrawlDelayMs: number;
    identifyAsBot: boolean;
    skipLoginRequired: boolean;
    skipPremiumContent: boolean;
    userAgent: string;
}

export interface StorageConfig {
    type: 'json' | 'sqlite' | 'both';
    jsonPath: string;
    sqlitePath: string;
    backupEnabled: boolean;
    backupPath: string;
}

export interface LoggingConfig {
    level: 'debug' | 'info' | 'warn' | 'error';
    console: boolean;
    file: boolean;
    filePath: string;
}
