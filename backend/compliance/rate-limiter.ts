// Rate limiter with token bucket algorithm
import { RateLimitConfig } from '../types';
import { ETHICAL_DEFAULTS, RETRY_DEFAULTS, CIRCUIT_BREAKER_DEFAULTS } from '../config/constants';

interface BucketState {
    tokens: number;
    lastRefill: number;
    consecutiveFailures: number;
    circuitOpenUntil: number | null;
}

export class RateLimiter {
    private buckets: Map<string, BucketState> = new Map();
    private configs: Map<string, RateLimitConfig> = new Map();

    /**
     * Configure rate limit for a domain
     */
    configure(domain: string, config: RateLimitConfig): void {
        this.configs.set(domain, config);
        this.buckets.set(domain, {
            tokens: config.requestsPerMinute,
            lastRefill: Date.now(),
            consecutiveFailures: 0,
            circuitOpenUntil: null,
        });
    }

    /**
     * Acquire a token to make a request (blocks until available)
     */
    async acquire(domain: string): Promise<void> {
        const config = this.getConfig(domain);
        let bucket = this.getBucket(domain, config);

        // Check circuit breaker
        if(this.isCircuitOpen(domain)) {
            const waitTime = bucket.circuitOpenUntil! - Date.now();
            console.log(`Circuit open for ${domain}, waiting ${waitTime}ms`);
            await this.sleep(waitTime);
            bucket.circuitOpenUntil = null;
            bucket.consecutiveFailures = 0;
        }

        // Refill tokens based on time passed
        this.refillTokens(bucket, config);

        // Wait if no tokens available
        while(bucket.tokens < 1) {
            const waitTime = Math.ceil(60000 / config.requestsPerMinute);
            await this.sleep(waitTime);
            this.refillTokens(bucket, config);
        }

        // Consume a token
        bucket.tokens -= 1;

        // Apply crawl delay
        if(config.crawlDelayMs > 0) {
            await this.sleep(config.crawlDelayMs);
        }
    }

    /**
     * Report a successful request
     */
    reportSuccess(domain: string): void {
        const bucket = this.buckets.get(domain);
        if(bucket) {
            bucket.consecutiveFailures = 0;
        }
    }

    /**
     * Report a failed request and apply backoff
     */
    async reportFailure(domain: string): Promise<void> {
        const bucket = this.buckets.get(domain);
        if(!bucket) return;

        bucket.consecutiveFailures += 1;

        // Check if circuit should open
        if(bucket.consecutiveFailures >= CIRCUIT_BREAKER_DEFAULTS.failureThreshold) {
            bucket.circuitOpenUntil = Date.now() + CIRCUIT_BREAKER_DEFAULTS.resetTimeoutMs;
            console.log(`Circuit breaker opened for ${domain}`);
        }
    }

    /**
     * Apply exponential backoff after a failure
     */
    async backoff(domain: string, attempt: number): Promise<void> {
        const config = this.getConfig(domain);
        const delay = Math.min(
            RETRY_DEFAULTS.initialDelayMs * Math.pow(config.backoffMultiplier, attempt),
            RETRY_DEFAULTS.maxDelayMs
        );

        console.log(`Backoff for ${domain}: attempt ${attempt}, waiting ${delay}ms`);
        await this.sleep(delay);
    }

    /**
     * Check if circuit breaker is open for a domain
     */
    isCircuitOpen(domain: string): boolean {
        const bucket = this.buckets.get(domain);
        if(!bucket || !bucket.circuitOpenUntil) {
            return false;
        }
        return Date.now() < bucket.circuitOpenUntil;
    }

    /**
     * Get current rate limit status for a domain
     */
    getStatus(domain: string): { tokens: number; isOpen: boolean; failures: number } {
        const bucket = this.buckets.get(domain);
        if(!bucket) {
            return { tokens: 0, isOpen: false, failures: 0 };
        }
        return {
            tokens: Math.floor(bucket.tokens),
            isOpen: this.isCircuitOpen(domain),
            failures: bucket.consecutiveFailures,
        };
    }

    /**
     * Reset rate limiter for a domain
     */
    reset(domain: string): void {
        this.buckets.delete(domain);
    }

    /**
     * Reset all rate limiters
     */
    resetAll(): void {
        this.buckets.clear();
    }

    private getConfig(domain: string): RateLimitConfig {
        return this.configs.get(domain) || {
            requestsPerMinute: ETHICAL_DEFAULTS.maxRequestsPerMinute,
            crawlDelayMs: ETHICAL_DEFAULTS.minCrawlDelayMs,
            backoffMultiplier: RETRY_DEFAULTS.backoffMultiplier,
            maxRetries: RETRY_DEFAULTS.maxRetries,
        };
    }

    private getBucket(domain: string, config: RateLimitConfig): BucketState {
        let bucket = this.buckets.get(domain);
        if(!bucket) {
            bucket = {
                tokens: config.requestsPerMinute,
                lastRefill: Date.now(),
                consecutiveFailures: 0,
                circuitOpenUntil: null,
            };
            this.buckets.set(domain, bucket);
        }
        return bucket;
    }

    private refillTokens(bucket: BucketState, config: RateLimitConfig): void {
        const now = Date.now();
        const elapsed = now - bucket.lastRefill;
        const tokensToAdd = (elapsed / 60000) * config.requestsPerMinute;

        bucket.tokens = Math.min(config.requestsPerMinute, bucket.tokens + tokensToAdd);
        bucket.lastRefill = now;
    }

    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Singleton instance
export const rateLimiter = new RateLimiter();
