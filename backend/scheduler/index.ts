// Scheduler for automated crawling
import { getEnabledSites } from '../config/sites';
import { logger } from '../monitoring';

interface ScheduledJob {
    siteName: string;
    cronPattern: string;
    lastRun?: Date;
    nextRun?: Date;
}

export class CrawlScheduler {
    private jobs: Map<string, ScheduledJob> = new Map();
    private running: boolean = false;

    constructor() {
        this.initializeJobs();
    }

    private initializeJobs(): void {
        const sites = getEnabledSites();

        for(const site of sites) {
            this.jobs.set(site.name.toLowerCase(), {
                siteName: site.name,
                cronPattern: site.schedule,
                nextRun: this.calculateNextRun(site.schedule),
            });
        }
    }

    /**
     * Register a crawl job
     */
    schedule(source: string, cronPattern: string): void {
        this.jobs.set(source.toLowerCase(), {
            siteName: source,
            cronPattern,
            nextRun: this.calculateNextRun(cronPattern),
        });
        logger.info(`Scheduled crawl for ${source}`, { pattern: cronPattern });
    }

    /**
     * Get all scheduled jobs
     */
    getJobs(): ScheduledJob[] {
        return Array.from(this.jobs.values());
    }

    /**
     * Get a specific job
     */
    getJob(source: string): ScheduledJob | undefined {
        return this.jobs.get(source.toLowerCase());
    }

    /**
     * Start the scheduler
     */
    start(): void {
        if(this.running) {
            logger.warn('Scheduler is already running');
            return;
        }

        this.running = true;
        logger.info('Scheduler started', { jobs: this.jobs.size });

        // Check every minute for jobs to run
        this.checkLoop();
    }

    /**
     * Stop the scheduler
     */
    stop(): void {
        this.running = false;
        logger.info('Scheduler stopped');
    }

    private async checkLoop(): Promise<void> {
        while(this.running) {
            await this.checkAndRunDueJobs();
            await this.sleep(60000); // Check every minute
        }
    }

    private async checkAndRunDueJobs(): Promise<void> {
        const now = new Date();

        for(const [source, job] of this.jobs) {
            if(job.nextRun && now >= job.nextRun) {
                logger.info(`Running scheduled crawl for ${source}`);

                try {
                    // Scheduled crawls are handled by the CLI script
                    // This just updates the schedule tracking
                    logger.info(`Scheduled crawl triggered for ${source} — run via: npx ts-node scripts/crawl.ts --source ${source}`);

                    job.lastRun = new Date();
                    job.nextRun = this.calculateNextRun(job.cronPattern);

                    logger.info(`Scheduled crawl noted for ${source}`, {
                        nextRun: job.nextRun?.toISOString(),
                    });
                } catch(error) {
                    logger.error(`Scheduled crawl failed for ${source}`, {
                        error: (error as Error).message,
                    });
                }
            }
        }
    }

    /**
     * Calculate next run time from cron pattern
     * Simplified parser - supports: minute hour dayOfMonth month dayOfWeek
     */
    private calculateNextRun(cronPattern: string): Date {
        // Simple implementation - just adds 1 week for demo
        // In production, use a proper cron parser like 'cron-parser'
        const parts = cronPattern.split(' ');
        const now = new Date();
        const next = new Date(now);

        // Parse hour and minute
        const minute = parts[0] === '*' ? 0 : parseInt(parts[0], 10);
        const hour = parts[1] === '*' ? 0 : parseInt(parts[1], 10);

        next.setHours(hour, minute, 0, 0);

        // If it's in the past, add appropriate interval
        if(next <= now) {
            // Check day of week
            if(parts[4] !== '*') {
                // Weekly schedule
                const targetDay = parseInt(parts[4], 10);
                const currentDay = now.getDay();
                let daysToAdd = targetDay - currentDay;
                if(daysToAdd <= 0) daysToAdd += 7;
                next.setDate(next.getDate() + daysToAdd);
            } else if(parts[2] !== '*') {
                // Monthly schedule
                next.setMonth(next.getMonth() + 1);
                next.setDate(parseInt(parts[2], 10));
            } else {
                // Daily - add 1 day
                next.setDate(next.getDate() + 1);
            }
        }

        return next;
    }

    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export singleton
export const scheduler = new CrawlScheduler();
