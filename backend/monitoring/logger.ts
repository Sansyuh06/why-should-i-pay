// Structured logging
import * as fs from 'fs';
import * as path from 'path';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
    timestamp: string;
    level: LogLevel;
    message: string;
    data?: Record<string, unknown>;
}

const LOG_LEVELS: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};

class Logger {
    private level: LogLevel = 'info';
    private logFile: string | null = null;

    configure(options: { level?: LogLevel; logFile?: string }): void {
        if(options.level) {
            this.level = options.level;
        }
        if(options.logFile) {
            this.logFile = options.logFile;
            // Ensure directory exists
            const dir = path.dirname(this.logFile);
            if(!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        }
    }

    debug(message: string, data?: Record<string, unknown>): void {
        this.log('debug', message, data);
    }

    info(message: string, data?: Record<string, unknown>): void {
        this.log('info', message, data);
    }

    warn(message: string, data?: Record<string, unknown>): void {
        this.log('warn', message, data);
    }

    error(message: string, data?: Record<string, unknown>): void {
        this.log('error', message, data);
    }

    private log(level: LogLevel, message: string, data?: Record<string, unknown>): void {
        if(LOG_LEVELS[level] < LOG_LEVELS[this.level]) {
            return;
        }

        const entry: LogEntry = {
            timestamp: new Date().toISOString(),
            level,
            message,
            data,
        };

        // Console output with colors
        const colors = {
            debug: '\x1b[36m',   // Cyan
            info: '\x1b[32m',    // Green
            warn: '\x1b[33m',    // Yellow
            error: '\x1b[31m',   // Red
        };
        const reset = '\x1b[0m';

        const prefix = `${colors[level]}[${level.toUpperCase()}]${reset}`;
        const timestamp = `\x1b[90m${entry.timestamp}${reset}`;

        console.log(`${timestamp} ${prefix} ${message}`);
        if(data) {
            console.log('  ', JSON.stringify(data, null, 2));
        }

        // File output
        if(this.logFile) {
            const line = JSON.stringify(entry) + '\n';
            fs.appendFileSync(this.logFile, line);
        }
    }
}

// Singleton instance
export const logger = new Logger();

// Crawl-specific logging utilities
export interface CrawlLog {
    source: string;
    action: 'start' | 'complete' | 'error' | 'skip';
    url?: string;
    itemsFound?: number;
    itemsNew?: number;
    durationMs?: number;
    error?: string;
}

export function logCrawlStart(source: string, urls: string[]): void {
    logger.info(`Starting crawl for ${source}`, {
        source,
        action: 'start',
        urlCount: urls.length,
        urls,
    });
}

export function logCrawlComplete(source: string, stats: {
    itemsFound: number;
    itemsNew: number;
    durationMs: number;
}): void {
    logger.info(`Crawl complete for ${source}`, {
        source,
        action: 'complete',
        ...stats,
    });
}

export function logCrawlError(source: string, url: string, error: string): void {
    logger.error(`Crawl error for ${source}`, {
        source,
        action: 'error',
        url,
        error,
    });
}

export function logCrawlSkip(source: string, url: string, reason: string): void {
    logger.warn(`Skipping URL for ${source}`, {
        source,
        action: 'skip',
        url,
        reason,
    });
}
