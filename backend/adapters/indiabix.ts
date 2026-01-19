// IndiaBix site adapter for aptitude questions
import * as cheerio from 'cheerio';
import { RawProblem, AptitudeQuestion, SiteAdapter } from '../types';
import { CRAWL_URLS, SITES } from '../config/sites';

export class IndiaBixAdapter implements SiteAdapter {
    name = 'IndiaBix';
    baseUrl = 'https://www.indiabix.com';
    crawlerType: 'http' = 'http';

    getUrls(): string[] {
        return CRAWL_URLS.indiabix || [];
    }

    extractProblems(html: string): RawProblem[] {
        // For IndiaBix, we convert aptitude questions to problem format
        const questions = this.extractQuestions(html);

        return questions.map(q => ({
            title: this.truncateQuestion(q.question),
            description: q.question,
            difficulty: 'medium' as const,
            categories: [q.category],
            source: this.name,
            sourceUrl: q.sourceUrl,
        }));
    }

    extractQuestions(html: string): AptitudeQuestion[] {
        const $ = cheerio.load(html);
        const questions: AptitudeQuestion[] = [];
        const config = SITES.indiabix;

        // Detect category from URL path in page
        const pagePath = $('meta[property="og:url"]').attr('content') || '';
        const category = this.detectCategory(pagePath);

        // Find question containers
        $('.bix-div-container, .question-container').each((idx, container) => {
            const $container = $(container);

            // Extract question text
            const questionText = $container.find(config.selectors.question).text().trim();
            if(!questionText || questionText.length < 10) {
                return;
            }

            // Extract options
            const options: string[] = [];
            $container.find(config.selectors.options + ', .flex-wrap span').each((_, opt) => {
                const optText = $(opt).text().trim();
                if(optText && optText.length > 0) {
                    options.push(optText);
                }
            });

            // Extract answer
            let correctAnswer = 0;
            const answerText = $container.find(config.selectors.answer + ', .answer').text().toLowerCase();
            if(answerText.includes('a')) correctAnswer = 0;
            else if(answerText.includes('b')) correctAnswer = 1;
            else if(answerText.includes('c')) correctAnswer = 2;
            else if(answerText.includes('d')) correctAnswer = 3;

            // Extract explanation
            const explanation = $container.find(config.selectors.explanation).text().trim();

            // Generate unique ID
            const id = `ibix-${category}-${idx + 1}`;

            questions.push({
                id,
                question: questionText,
                options: options.length >= 4 ? options.slice(0, 4) : options,
                correctAnswer,
                explanation: explanation || undefined,
                category,
                source: this.name,
                sourceUrl: `${this.baseUrl}/${category}/questions-and-answers/`,
            });
        });

        return questions;
    }

    private detectCategory(url: string): 'quantitative' | 'logical' | 'verbal' {
        const lower = url.toLowerCase();
        if(lower.includes('logical') || lower.includes('reasoning')) {
            return 'logical';
        }
        if(lower.includes('verbal') || lower.includes('english')) {
            return 'verbal';
        }
        return 'quantitative';
    }

    private truncateQuestion(question: string, maxLength: number = 80): string {
        if(question.length <= maxLength) {
            return question;
        }
        return question.substring(0, maxLength - 3) + '...';
    }
}

// Export singleton
export const indiabixAdapter = new IndiaBixAdapter();
