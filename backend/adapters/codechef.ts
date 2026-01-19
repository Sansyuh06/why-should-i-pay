// CodeChef site adapter
import * as cheerio from 'cheerio';
import { RawProblem, SiteAdapter } from '../types';
import { CRAWL_URLS, SITES } from '../config/sites';
import { filterProblemTitle } from '../validation/filters';

export class CodeChefAdapter implements SiteAdapter {
    name = 'CodeChef';
    baseUrl = 'https://www.codechef.com';
    crawlerType: 'playwright' = 'playwright';

    getUrls(): string[] {
        return CRAWL_URLS.codechef || [];
    }

    extractProblems(html: string): RawProblem[] {
        const $ = cheerio.load(html);
        const problems: RawProblem[] = [];
        const config = SITES.codechef;

        // Extract from TCS practice page
        let currentYear: string | undefined;

        // Look for section headers to get year
        $('h3, .section-header').each((_, el) => {
            const text = $(el).text().trim();
            const yearMatch = text.match(/20\d{2}/);
            if(yearMatch) {
                currentYear = yearMatch[0];
            }
        });

        // Find problem names
        $(config.selectors.problemName).each((_, el) => {
            const title = $(el).text().trim();

            // Filter out non-problem titles
            if(!filterProblemTitle(title).passed) {
                return;
            }

            // Skip premium/Pro locked problems
            if($(el).closest('tr, div').find('[class*="Pro"], [class*="locked"]').length > 0) {
                return;
            }

            // Try to extract difficulty
            let difficulty: 'easy' | 'medium' | 'hard' | undefined;
            const row = $(el).closest('tr, div');
            const diffText = row.find(config.selectors.difficulty).text().toLowerCase();

            if(diffText.includes('easy') || diffText.includes('beginner')) difficulty = 'easy';
            else if(diffText.includes('medium') || diffText.includes('intermediate')) difficulty = 'medium';
            else if(diffText.includes('hard') || diffText.includes('advanced')) difficulty = 'hard';

            const categories: string[] = ['tcs-interview'];
            if(currentYear) {
                categories.push(`codevita-${currentYear}`);
            }

            // Generate problem URL
            const problemCode = title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '')
                .substring(0, 20);

            problems.push({
                title,
                difficulty,
                categories,
                source: this.name,
                sourceUrl: `${this.baseUrl}/problems/${problemCode}`,
            });
        });

        return problems;
    }
}

// Export singleton
export const codechefAdapter = new CodeChefAdapter();
