// Global constants for the crawler system

export const BOT_USER_AGENT = 'WhyShouldIPay-Bot/1.0 (+https://github.com/why-should-i-pay; educational-use; contact@example.com)';

export const BROWSER_USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
];

export const ETHICAL_DEFAULTS = {
    respectRobotsTxt: true,
    maxRequestsPerMinute: 30,
    minCrawlDelayMs: 1000,
    identifyAsBot: true,
    skipLoginRequired: true,
    skipPremiumContent: true,
    userAgent: BOT_USER_AGENT,
};

export const TIMEOUT_DEFAULTS = {
    page: 30000,
    navigation: 60000,
    request: 15000,
};

export const RETRY_DEFAULTS = {
    maxRetries: 3,
    backoffMultiplier: 2,
    initialDelayMs: 1000,
    maxDelayMs: 30000,
};

export const CIRCUIT_BREAKER_DEFAULTS = {
    failureThreshold: 5,
    resetTimeoutMs: 60000,
};

// Content filtering
export const NOISE_KEYWORDS = [
    'advertisement',
    'sponsored',
    'subscribe',
    'newsletter',
    'cookie policy',
    'privacy policy',
    'terms of service',
    'login to continue',
    'sign up free',
    'premium only',
];

export const MIN_CONTENT_LENGTH = 20;

// Category mappings
export const CATEGORY_MAP: Record<string, string[]> = {
    // DSA Categories
    'array': ['array', 'arrays', 'array / string'],
    'string': ['string', 'strings', 'array / string'],
    'two-pointers': ['two pointers', 'two-pointers'],
    'sliding-window': ['sliding window', 'sliding-window'],
    'binary-search': ['binary search', 'binary-search'],
    'linked-list': ['linked list', 'linked-list'],
    'stack': ['stack', 'stacks'],
    'queue': ['queue', 'queues'],
    'tree': ['tree', 'trees', 'binary tree', 'bst'],
    'graph': ['graph', 'graphs', 'bfs', 'dfs'],
    'dp': ['dynamic programming', 'dp', '1d dp', '2d dp', 'multidimensional dp'],
    'backtracking': ['backtracking', 'recursion'],
    'greedy': ['greedy'],
    'sorting': ['sorting', 'sort'],
    'heap': ['heap', 'priority queue'],
    'trie': ['trie', 'prefix tree'],
    'bit-manipulation': ['bit manipulation', 'bitwise'],
    'math': ['math', 'mathematics'],
    'hash-table': ['hash table', 'hashmap', 'hash map'],
    'divide-conquer': ['divide and conquer', 'divide & conquer'],

    // Aptitude Categories
    'quantitative': ['quantitative', 'arithmetic', 'percentage', 'ratio', 'profit loss'],
    'logical': ['logical reasoning', 'logic', 'puzzles', 'patterns'],
    'verbal': ['verbal', 'english', 'vocabulary', 'comprehension'],
};

// Difficulty normalization
export const DIFFICULTY_MAP: Record<string, 'easy' | 'medium' | 'hard'> = {
    'easy': 'easy',
    'beginner': 'easy',
    'basic': 'easy',
    'simple': 'easy',
    'medium': 'medium',
    'intermediate': 'medium',
    'moderate': 'medium',
    'hard': 'hard',
    'difficult': 'hard',
    'advanced': 'hard',
    'expert': 'hard',
};
