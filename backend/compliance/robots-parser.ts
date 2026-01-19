// robots.txt parser and compliance checker
import { ETHICAL_DEFAULTS, TIMEOUT_DEFAULTS } from '../config/constants';

interface RobotsRules {
    allowedPaths: string[];
    disallowedPaths: string[];
    crawlDelay: number | null;
    sitemaps: string[];
    fetchedAt: Date;
}

export class RobotsParser {
    private cache: Map<string, RobotsRules> = new Map();
    private cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours

    /**
     * Check if a URL is allowed to be crawled based on robots.txt
     */
    async isAllowed(url: string, userAgent: string = ETHICAL_DEFAULTS.userAgent): Promise<boolean> {
        if(!ETHICAL_DEFAULTS.respectRobotsTxt) {
            return true;
        }

        const domain = this.extractDomain(url);
        const path = this.extractPath(url);
        const rules = await this.getRules(domain);

        if(!rules) {
            // If we can't fetch robots.txt, be conservative
            return true;
        }

        // Check disallowed paths first (they take precedence)
        for(const disallowed of rules.disallowedPaths) {
            if(this.pathMatches(path, disallowed)) {
                return false;
            }
        }

        // Check allowed paths
        for(const allowed of rules.allowedPaths) {
            if(this.pathMatches(path, allowed)) {
                return true;
            }
        }

        // Default to allowed if no rules match
        return true;
    }

    /**
     * Get crawl delay for a domain
     */
    async getCrawlDelay(url: string): Promise<number> {
        const domain = this.extractDomain(url);
        const rules = await this.getRules(domain);

        if(rules?.crawlDelay) {
            return rules.crawlDelay * 1000; // Convert to ms
        }

        return ETHICAL_DEFAULTS.minCrawlDelayMs;
    }

    /**
     * Get sitemaps for a domain
     */
    async getSitemaps(url: string): Promise<string[]> {
        const domain = this.extractDomain(url);
        const rules = await this.getRules(domain);
        return rules?.sitemaps || [];
    }

    /**
     * Fetch and parse robots.txt for a domain
     */
    private async getRules(domain: string): Promise<RobotsRules | null> {
        // Check cache
        const cached = this.cache.get(domain);
        if(cached && Date.now() - cached.fetchedAt.getTime() < this.cacheExpiry) {
            return cached;
        }

        try {
            const robotsUrl = `${domain}/robots.txt`;
            const response = await fetch(robotsUrl, {
                signal: AbortSignal.timeout(TIMEOUT_DEFAULTS.request),
                headers: {
                    'User-Agent': ETHICAL_DEFAULTS.userAgent,
                },
            });

            if(!response.ok) {
                // No robots.txt or error - allow crawling
                return null;
            }

            const text = await response.text();
            const rules = this.parseRobotsTxt(text);

            this.cache.set(domain, rules);
            return rules;
        } catch(error) {
            console.warn(`Failed to fetch robots.txt for ${domain}:`, error);
            return null;
        }
    }

    /**
     * Parse robots.txt content
     */
    private parseRobotsTxt(content: string): RobotsRules {
        const rules: RobotsRules = {
            allowedPaths: [],
            disallowedPaths: [],
            crawlDelay: null,
            sitemaps: [],
            fetchedAt: new Date(),
        };

        let isRelevantUserAgent = false;
        const lines = content.split('\n');

        for(const line of lines) {
            const trimmed = line.trim();

            // Skip comments and empty lines
            if(!trimmed || trimmed.startsWith('#')) {
                continue;
            }

            const [directive, ...valueParts] = trimmed.split(':');
            const value = valueParts.join(':').trim();
            const directiveLower = directive.toLowerCase();

            switch(directiveLower) {
                case 'user-agent':
                    // Check if this applies to us or all bots
                    isRelevantUserAgent = value === '*' ||
                        ETHICAL_DEFAULTS.userAgent.toLowerCase().includes(value.toLowerCase());
                    break;

                case 'disallow':
                    if(isRelevantUserAgent && value) {
                        rules.disallowedPaths.push(value);
                    }
                    break;

                case 'allow':
                    if(isRelevantUserAgent && value) {
                        rules.allowedPaths.push(value);
                    }
                    break;

                case 'crawl-delay':
                    if(isRelevantUserAgent) {
                        const delay = parseFloat(value);
                        if(!isNaN(delay)) {
                            rules.crawlDelay = delay;
                        }
                    }
                    break;

                case 'sitemap':
                    if(value) {
                        rules.sitemaps.push(value);
                    }
                    break;
            }
        }

        return rules;
    }

    /**
     * Extract domain from URL
     */
    private extractDomain(url: string): string {
        const urlObj = new URL(url);
        return `${urlObj.protocol}//${urlObj.host}`;
    }

    /**
     * Extract path from URL
     */
    private extractPath(url: string): string {
        const urlObj = new URL(url);
        return urlObj.pathname + urlObj.search;
    }

    /**
     * Check if a path matches a robots.txt pattern
     */
    private pathMatches(path: string, pattern: string): boolean {
        // Handle wildcard patterns
        if(pattern.includes('*')) {
            const regex = new RegExp(
                '^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '\\?') + '$'
            );
            return regex.test(path);
        }

        // Handle $ end anchor
        if(pattern.endsWith('$')) {
            return path === pattern.slice(0, -1);
        }

        // Simple prefix match
        return path.startsWith(pattern);
    }

    /**
     * Clear the cache
     */
    clearCache(): void {
        this.cache.clear();
    }
}

// Singleton instance
export const robotsParser = new RobotsParser();
