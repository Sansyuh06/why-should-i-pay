// TCS CODEVITA & INTERVIEW PROBLEMS
// Scraped from GeeksforGeeks and HackerEarth

export interface TCSProblem {
    id: string;
    title: string;
    source: string;
    difficulty: 'easy' | 'medium' | 'hard';
    type: 'coding' | 'aptitude' | 'tutorial';
    description: string;
    topics: string[];
}

// ============================================
// TCS CODEVITA 9 PRE-QUALIFIER QUESTIONS
// Source: https://www.geeksforgeeks.org/interview-experiences/tcs-codevita-9-pre-qualifier-round-questions/
// ============================================
export const tcsCodevitaProblems: TCSProblem[] = [
    {
        id: 'tcs-string-pair',
        title: 'String Pair',
        source: 'TCS Codevita 9',
        difficulty: 'medium',
        type: 'coding',
        description: `Convert digits to textual representation, count vowels to get digit D, then find unordered pairs summing to D.
Rules: 100 = "hundred" (2 vowels). Output as text representation of pair count.`,
        topics: ['String', 'Number Theory', 'Pairs']
    },
    {
        id: 'tcs-elections',
        title: 'Elections',
        source: 'TCS Codevita 9',
        difficulty: 'medium',
        type: 'coding',
        description: `Voter queue with A supporters, B supporters, and neutral (-). 
A moves left, B moves right simultaneously. Neutral joins whoever reaches first.
Equal time = stays neutral. Output winner or "Coalition government".`,
        topics: ['Simulation', 'Two Pointers', 'Array']
    },
    {
        id: 'tcs-moving-average',
        title: 'Moving Average',
        source: 'TCS Codevita 9',
        difficulty: 'hard',
        type: 'coding',
        description: `Calculate X-day and Y-day moving averages from stock prices.
Count uptrends (faster MA cuts slower from below) and downtrends (opposite).
Accuracy: 6 decimal places.`,
        topics: ['Sliding Window', 'Math', 'Finance']
    },
    {
        id: 'tcs-jogging-ground',
        title: 'Jogging Ground',
        source: 'TCS Codevita 9',
        difficulty: 'hard',
        type: 'coding',
        description: `4 circular grounds with joggers starting at positions a,b,c,d (0°,90°,180°,270°).
Given radius, distances, velocities, directions - find sum of 3 segments between joggers after N seconds.`,
        topics: ['Geometry', 'Circle', 'Simulation', 'Trigonometry']
    },
    {
        id: 'tcs-zoo-design',
        title: 'Zoo Design',
        source: 'TCS Codevita 9',
        difficulty: 'hard',
        type: 'coding',
        description: `Minimize zoo building cost with constraints:
- Min X herbivores, Y carnivores, Z aquatics
- Different costs per sq meter for each type
- Maximum area limits per type
- Total area constraint`,
        topics: ['Optimization', 'Greedy', 'Linear Programming']
    }
];

// ============================================
// ALGORITHM TUTORIALS FROM HACKEREARTH
// Source: https://www.hackerearth.com/practice/algorithms/
// ============================================
export const algorithmTutorials = [
    {
        id: 'linear-search',
        title: 'Linear Search',
        source: 'HackerEarth',
        type: 'tutorial',
        content: `Linear search traverses a list from start to end, comparing each element.
Time Complexity: O(N) - each element compared only once.
Use case: Finding positions of all elements equal to x in an array.`,
        topics: ['Searching', 'Arrays', 'Basics']
    },
    {
        id: 'binary-search',
        title: 'Binary Search',
        source: 'HackerEarth',
        type: 'tutorial',
        content: `Binary search works on sorted arrays, dividing search space in half each step.
Time Complexity: O(log N).
Prerequisite: Array must be sorted.`,
        topics: ['Searching', 'Divide and Conquer', 'Arrays']
    },
    {
        id: 'number-theory-basics',
        title: 'Basic Number Theory',
        source: 'HackerEarth',
        type: 'tutorial',
        content: `Covers: Divisibility, Prime numbers, GCD/LCM, Modular arithmetic, Sieve of Eratosthenes.
Essential for competitive programming and interview aptitude.`,
        topics: ['Math', 'Number Theory', 'Competitive Programming']
    }
];

// ============================================
// TCS NQT APTITUDE TOPICS (Common patterns)
// ============================================
export const tcsAptitudeTopics = [
    'Quantitative Aptitude: Percentages, Profit & Loss, Time & Work, Ratios',
    'Logical Reasoning: Blood Relations, Coding-Decoding, Seating Arrangement',
    'Verbal Ability: Reading Comprehension, Grammar, Synonyms/Antonyms',
    'Data Interpretation: Tables, Graphs, Charts',
    'Programming Logic: Pseudocode, Output Prediction, Debugging'
];

// ============================================
// EXPORT ALL COMBINED
// ============================================
export const allTCSContent = {
    codevitaProblems: tcsCodevitaProblems,
    tutorials: algorithmTutorials,
    aptitudeTopics: tcsAptitudeTopics,
    totalProblems: tcsCodevitaProblems.length,
    sources: [
        'GeeksforGeeks TCS Codevita 9',
        'HackerEarth Tutorials',
        'TCS NQT Syllabus'
    ]
};

// Get all TCS problems
export function getAllTCSProblems(): TCSProblem[] {
    return tcsCodevitaProblems;
}
