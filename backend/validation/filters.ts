// Content filtering utilities
import { MIN_CONTENT_LENGTH, NOISE_KEYWORDS } from '../config/constants';

export interface FilterResult {
    passed: boolean;
    reason?: string;
}

/**
 * Filter by minimum text length
 */
export function filterByLength(text: string, minLength: number = MIN_CONTENT_LENGTH): FilterResult {
    if(!text || text.trim().length < minLength) {
        return {
            passed: false,
            reason: `Text too short (${text?.length || 0} < ${minLength})`,
        };
    }
    return { passed: true };
}

/**
 * Filter out noise content (ads, navigation, etc.)
 */
export function filterNoise(text: string): FilterResult {
    const lowerText = text.toLowerCase();

    for(const keyword of NOISE_KEYWORDS) {
        if(lowerText.includes(keyword.toLowerCase())) {
            return {
                passed: false,
                reason: `Contains noise keyword: ${keyword}`,
            };
        }
    }

    return { passed: true };
}

/**
 * Filter by language (basic English detection)
 */
export function filterByLanguage(text: string): FilterResult {
    // Simple heuristic: check for common English words
    const englishPatterns = /\b(the|is|are|was|were|have|has|had|been|be|will|would|could|should|may|might|can|must|shall|this|that|these|those|what|which|who|whom|whose|where|when|why|how)\b/i;

    if(!englishPatterns.test(text)) {
        return {
            passed: false,
            reason: 'Content does not appear to be in English',
        };
    }

    return { passed: true };
}

/**
 * Filter problem titles (must look like a problem, not UI text)
 */
export function filterProblemTitle(title: string): FilterResult {
    if(!title || title.trim().length === 0) {
        return { passed: false, reason: 'Empty title' };
    }

    const trimmed = title.trim();

    // Too short for a problem title
    if(trimmed.length < 3) {
        return { passed: false, reason: 'Title too short' };
    }

    // Looks like UI/navigation text
    const uiPatterns = /^(show|hide|expand|collapse|more|less|next|prev|previous|back|forward|login|sign|register|submit|cancel|close|open|view|see|click|tap|press|select|choose|all|none|home|menu|settings|profile|account|help|about|contact|terms|privacy|cookie)/i;

    if(uiPatterns.test(trimmed)) {
        return { passed: false, reason: 'Appears to be UI text' };
    }

    // Contains only numbers/special characters
    if(/^[\d\s.,!?-]+$/.test(trimmed)) {
        return { passed: false, reason: 'Contains only numbers/punctuation' };
    }

    // Likely a username
    if(/^@?\w+_?\w*$/.test(trimmed) && !trimmed.includes(' ')) {
        return { passed: false, reason: 'Appears to be a username' };
    }

    return { passed: true };
}

/**
 * Filter difficulty values
 */
export function filterDifficulty(difficulty: string): FilterResult {
    const validDifficulties = ['easy', 'medium', 'hard', 'beginner', 'intermediate', 'advanced', 'basic', 'simple', 'difficult', 'expert'];

    if(!difficulty) {
        return { passed: true }; // Not required
    }

    const lower = difficulty.toLowerCase().trim();
    if(!validDifficulties.includes(lower)) {
        return {
            passed: false,
            reason: `Invalid difficulty: ${difficulty}`,
        };
    }

    return { passed: true };
}

/**
 * Apply all filters to a text
 */
export function applyAllFilters(text: string): FilterResult {
    const filters = [
        filterByLength(text),
        filterNoise(text),
        filterByLanguage(text),
    ];

    for(const result of filters) {
        if(!result.passed) {
            return result;
        }
    }

    return { passed: true };
}

/**
 * Clean and filter a list of problem titles
 */
export function filterProblemTitles(titles: string[]): string[] {
    return titles.filter(title => {
        const result = filterProblemTitle(title);
        return result.passed;
    });
}
