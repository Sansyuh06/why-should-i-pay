// Data cleaning and normalization
import { RawProblem, ProcessedProblem } from '../types';
import { DIFFICULTY_MAP, CATEGORY_MAP } from '../config/constants';
import { dataValidator } from '../validation';

/**
 * Clean HTML entities from text
 */
export function cleanHtml(text: string): string {
    if(!text) return '';

    return text
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Normalize whitespace
 */
export function normalizeSpacing(text: string): string {
    if(!text) return '';

    return text
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\t/g, ' ')
        .replace(/[ ]+/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

/**
 * Fix common encoding issues
 */
export function fixEncoding(text: string): string {
    if(!text) return '';

    return text
        .replace(/â€™/g, "'")
        .replace(/â€"/g, '-')
        .replace(/â€œ/g, '"')
        .replace(/â€/g, '"')
        .replace(/Ã©/g, 'é')
        .replace(/Ã¨/g, 'è')
        .replace(/Ã /g, 'à')
        .replace(/\uFFFD/g, ''); // Remove replacement character
}

/**
 * Normalize difficulty label
 */
export function normalizeDifficulty(raw: string | undefined): 'easy' | 'medium' | 'hard' | undefined {
    if(!raw) return undefined;

    const lower = raw.toLowerCase().trim();
    return DIFFICULTY_MAP[lower];
}

/**
 * Normalize categories
 */
export function normalizeCategories(raw: string[]): string[] {
    if(!raw || raw.length === 0) return [];

    const normalized = new Set<string>();

    for(const category of raw) {
        const lower = category.toLowerCase().trim();

        // Find matching normalized category
        for(const [normalizedName, aliases] of Object.entries(CATEGORY_MAP)) {
            if(aliases.some(alias => lower.includes(alias))) {
                normalized.add(normalizedName);
            }
        }
    }

    return Array.from(normalized).sort();
}

/**
 * Generate a unique ID from title
 */
export function generateId(title: string, source: string): string {
    const sanitized = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 50);

    const sourcePrefix = source.toLowerCase().substring(0, 3);
    return `${sourcePrefix}-${sanitized}`;
}

/**
 * Clean and process a raw problem
 */
export function cleanProblem(raw: RawProblem): RawProblem {
    return {
        ...raw,
        title: cleanHtml(normalizeSpacing(fixEncoding(raw.title))),
        description: raw.description
            ? cleanHtml(normalizeSpacing(fixEncoding(raw.description)))
            : undefined,
        difficulty: normalizeDifficulty(raw.difficulty),
        categories: normalizeCategories(raw.categories || []),
        constraints: raw.constraints?.map(c => cleanHtml(c)),
        hints: raw.hints?.map(h => cleanHtml(h)),
    };
}

/**
 * Process a raw problem into a complete processed problem
 */
export function processProblem(raw: RawProblem): ProcessedProblem {
    const cleaned = cleanProblem(raw);
    const hash = dataValidator.generateHash(cleaned);
    const id = cleaned.id || generateId(cleaned.title, cleaned.source);

    return {
        ...cleaned,
        id,
        hash,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
}

/**
 * Process a batch of raw problems
 */
export function processBatch(rawProblems: RawProblem[]): ProcessedProblem[] {
    return rawProblems.map(processProblem);
}
