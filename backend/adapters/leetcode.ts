// LeetCode site adapter
import * as cheerio from 'cheerio';
import { RawProblem, SiteAdapter } from '../types';
import { CRAWL_URLS, SITES } from '../config/sites';
import { filterProblemTitle } from '../validation/filters';

export class LeetCodeAdapter implements SiteAdapter {
    name = 'LeetCode';
    baseUrl = 'https://leetcode.com';
    crawlerType: 'playwright' = 'playwright';

    getUrls(): string[] {
        return CRAWL_URLS.leetcode || [];
    }

    extractProblems(html: string): RawProblem[] {
        const $ = cheerio.load(html);
        const problems: RawProblem[] = [];
        const config = SITES.leetcode;

        // Find problem titles using configured selector
        const titleElements = $(config.selectors.problemTitle);

        titleElements.each((_, el) => {
            const title = $(el).text().trim();

            // Filter out non-problem titles
            if(!filterProblemTitle(title).passed) {
                return;
            }

            // Try to find difficulty (usually in sibling elements)
            let difficulty: 'easy' | 'medium' | 'hard' | undefined;
            const parent = $(el).closest('[class*="problem"], tr, div');
            const diffText = parent.find('[class*="difficulty"], [class*="Easy"], [class*="Medium"], [class*="Hard"]').text().toLowerCase();

            if(diffText.includes('easy')) difficulty = 'easy';
            else if(diffText.includes('medium')) difficulty = 'medium';
            else if(diffText.includes('hard')) difficulty = 'hard';

            // Try to find category from context
            const categories: string[] = [];
            const categoryHeader = $(el).closest('section, div').prevAll('h4, h3').first().text();
            if(categoryHeader) {
                categories.push(categoryHeader.trim());
            }

            // Generate source URL (approximate since we don't have slug)
            const slug = title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');

            problems.push({
                title,
                difficulty,
                categories,
                source: this.name,
                sourceUrl: `${this.baseUrl}/problems/${slug}/`,
            });
        });

        return problems;
    }
}

// Export singleton
export const leetcodeAdapter = new LeetCodeAdapter();
