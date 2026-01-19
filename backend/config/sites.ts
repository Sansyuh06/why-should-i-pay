// Site-specific configurations
import { SiteConfig } from '../types';

export const SITES: Record<string, SiteConfig> = {
    leetcode: {
        name: 'LeetCode',
        baseUrl: 'https://leetcode.com',
        crawlerType: 'playwright',
        enabled: true,
        schedule: '0 2 * * 0', // Sunday 2 AM
        rateLimit: {
            requestsPerMinute: 10,
            crawlDelayMs: 3000,
            backoffMultiplier: 2,
            maxRetries: 3,
        },
        selectors: {
            problemTitle: '.truncate',
            difficulty: '[class*="difficulty"]',
            category: 'h4, .text-label-3',
            problemList: '[class*="problem"]',
        },
    },

    codechef: {
        name: 'CodeChef',
        baseUrl: 'https://www.codechef.com',
        crawlerType: 'playwright',
        enabled: true,
        schedule: '0 3 * * 6', // Saturday 3 AM
        rateLimit: {
            requestsPerMinute: 15,
            crawlDelayMs: 2000,
            backoffMultiplier: 2,
            maxRetries: 3,
        },
        selectors: {
            problemName: 'td.problem-name, [class*="problem"]',
            difficulty: 'td.difficulty, [class*="difficulty"]',
            section: 'h3, .section-header',
        },
    },

    indiabix: {
        name: 'IndiaBix',
        baseUrl: 'https://www.indiabix.com',
        crawlerType: 'http',
        enabled: true,
        schedule: '0 4 1,15 * *', // 1st and 15th of month, 4 AM
        rateLimit: {
            requestsPerMinute: 30,
            crawlDelayMs: 1000,
            backoffMultiplier: 1.5,
            maxRetries: 3,
        },
        selectors: {
            question: '.bix-td-qtxt',
            options: '.bix-row-option',
            answer: '.jq-hdiv2',
            explanation: '.bix-ans-description',
            questionNumber: '.bix-td-qno',
        },
    },

    naukri: {
        name: 'Naukri Campus',
        baseUrl: 'https://www.naukri.com/campus',
        crawlerType: 'http',
        enabled: true,
        schedule: '0 5 1 * *', // 1st of month, 5 AM
        rateLimit: {
            requestsPerMinute: 20,
            crawlDelayMs: 1500,
            backoffMultiplier: 2,
            maxRetries: 3,
        },
        selectors: {
            heading: 'h2, h3',
            question: '.question',
            content: '.article-content',
        },
    },

    geeksforgeeks: {
        name: 'GeeksforGeeks',
        baseUrl: 'https://www.geeksforgeeks.org',
        crawlerType: 'http',
        enabled: false, // Enable when adapter is ready
        schedule: '0 2 * * 3', // Wednesday 2 AM
        rateLimit: {
            requestsPerMinute: 20,
            crawlDelayMs: 2000,
            backoffMultiplier: 2,
            maxRetries: 3,
        },
        selectors: {
            problemTitle: '.problem-title, h1',
            difficulty: '.difficulty',
            tags: '.tag-list a',
            content: '.text',
        },
    },
};

export const CRAWL_URLS: Record<string, string[]> = {
    leetcode: [
        'https://leetcode.com/studyplan/top-interview-150/',
        'https://leetcode.com/studyplan/top-sql-50/',
        'https://leetcode.com/studyplan/leetcode-75/',
    ],
    codechef: [
        'https://www.codechef.com/practice/tcs-interview-questions',
    ],
    indiabix: [
        'https://www.indiabix.com/logical-reasoning/questions-and-answers/',
        'https://www.indiabix.com/aptitude/questions-and-answers/',
    ],
    naukri: [
        'https://www.naukri.com/campus/career-guidance/tcs-aptitude-questions',
    ],
};

export function getSiteConfig(siteName: string): SiteConfig | undefined {
    return SITES[siteName.toLowerCase()];
}

export function getEnabledSites(): SiteConfig[] {
    return Object.values(SITES).filter(site => site.enabled);
}
