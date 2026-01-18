// Comprehensive Resource Catalog
// All curated learning resources from the specification

export interface LearningResource {
    id: string;
    title: string;
    url: string;
    platform: string;
    type: 'tutorial' | 'video' | 'practice' | 'visualization' | 'article' | 'roadmap' | 'github' | 'documentation';
    topics: string[];
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    isFree: boolean;
    description?: string;
}

// ============================================
// TUTORIALS & LEARNING
// ============================================
export const tutorials: LearningResource[] = [
    {
        id: 'gfg-dsa-tutorial',
        title: 'DSA Tutorial - Complete Guide',
        url: 'https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['all DSA topics'],
        difficulty: 'beginner',
        isFree: true,
        description: 'Comprehensive DSA tutorial covering all major data structures and algorithms'
    },
    {
        id: 'hackerearth-linear-search',
        title: 'Linear Search Tutorial',
        url: 'https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/',
        platform: 'HackerEarth',
        type: 'tutorial',
        topics: ['searching', 'linear search'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'hackerearth-number-theory',
        title: 'Number Theory Basics',
        url: 'https://www.hackerearth.com/practice/math/number-theory/basic-number-theory-1/tutorial/',
        platform: 'HackerEarth',
        type: 'tutorial',
        topics: ['number theory', 'mathematics'],
        difficulty: 'intermediate',
        isFree: true
    },
    {
        id: 'gfg-arrays',
        title: 'Arrays in Data Structures',
        url: 'https://www.geeksforgeeks.org/array-data-structure/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['arrays'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'gfg-linked-list',
        title: 'Linked List Introduction',
        url: 'https://www.geeksforgeeks.org/linked-list-set-1-introduction/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['linked lists'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'gfg-stack',
        title: 'Stack Data Structure',
        url: 'https://www.geeksforgeeks.org/stack-data-structure-introduction-program/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['stacks'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'gfg-queue',
        title: 'Queue Data Structure',
        url: 'https://www.geeksforgeeks.org/queue-data-structure/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['queues'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'gfg-binary-tree',
        title: 'Binary Tree Introduction',
        url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['trees', 'binary trees'],
        difficulty: 'intermediate',
        isFree: true
    },
    {
        id: 'gfg-bst',
        title: 'Binary Search Tree',
        url: 'https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['trees', 'BST'],
        difficulty: 'intermediate',
        isFree: true
    },
    {
        id: 'gfg-graphs',
        title: 'Graph Data Structure',
        url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['graphs'],
        difficulty: 'intermediate',
        isFree: true
    },
    {
        id: 'gfg-sorting',
        title: 'Sorting Algorithms',
        url: 'https://www.geeksforgeeks.org/sorting-algorithms/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['sorting'],
        difficulty: 'intermediate',
        isFree: true
    },
    {
        id: 'gfg-searching',
        title: 'Searching Algorithms',
        url: 'https://www.geeksforgeeks.org/searching-algorithms/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['searching'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'gfg-hashing',
        title: 'Hashing Introduction',
        url: 'https://www.geeksforgeeks.org/hashing-set-1-introduction/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['hashing', 'hash tables'],
        difficulty: 'intermediate',
        isFree: true
    },
    {
        id: 'gfg-system-design',
        title: 'System Design Tutorial',
        url: 'https://www.geeksforgeeks.org/system-design-tutorial/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['system design'],
        difficulty: 'advanced',
        isFree: true
    },
    {
        id: 'gfg-oops',
        title: 'OOP Concepts in Java',
        url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/',
        platform: 'GeeksforGeeks',
        type: 'tutorial',
        topics: ['OOP', 'Java'],
        difficulty: 'beginner',
        isFree: true
    }
];

// ============================================
// VISUALIZATIONS
// ============================================
export const visualizations: LearningResource[] = [
    {
        id: 'visualgo',
        title: 'VisualGo - Algorithm Visualizations',
        url: 'https://visualgo.net/en',
        platform: 'VisualGo',
        type: 'visualization',
        topics: ['all algorithms', 'data structures'],
        difficulty: 'beginner',
        isFree: true,
        description: 'Interactive step-by-step visualizations for sorting, searching, graphs, trees and more'
    }
];

// ============================================
// PRACTICE PLATFORMS & PROBLEM SETS
// ============================================
export const practicePlatforms: LearningResource[] = [
    {
        id: 'leetcode-150',
        title: 'LeetCode Top Interview 150',
        url: 'https://leetcode.com/studyplan/top-interview-150/',
        platform: 'LeetCode',
        type: 'practice',
        topics: ['interview prep', 'DSA'],
        difficulty: 'intermediate',
        isFree: true,
        description: '150 curated problems for interview preparation'
    },
    {
        id: 'leetcode-sql-50',
        title: 'LeetCode Top SQL 50',
        url: 'https://leetcode.com/studyplan/top-sql-50/',
        platform: 'LeetCode',
        type: 'practice',
        topics: ['SQL', 'databases'],
        difficulty: 'beginner',
        isFree: true,
        description: '50 essential SQL problems'
    },
    {
        id: 'algomap',
        title: 'AlgoMap Roadmap',
        url: 'https://algomap.io/roadmap',
        platform: 'AlgoMap',
        type: 'roadmap',
        topics: ['DSA', 'structured learning'],
        difficulty: 'beginner',
        isFree: true,
        description: 'Progressive difficulty roadmap for DSA mastery'
    },
    {
        id: 'grind75',
        title: 'Grind 75',
        url: 'https://www.techinterviewhandbook.org/grind75/',
        platform: 'Tech Interview Handbook',
        type: 'practice',
        topics: ['interview prep', 'DSA'],
        difficulty: 'intermediate',
        isFree: true,
        description: '75 curated problems for efficient interview prep'
    },
    {
        id: 'interviewbit',
        title: 'InterviewBit',
        url: 'https://www.interviewbit.com',
        platform: 'InterviewBit',
        type: 'practice',
        topics: ['interview prep', 'mock interviews'],
        difficulty: 'intermediate',
        isFree: true,
        description: 'Mock interviews and structured courses'
    },
    {
        id: 'gfg-must-do',
        title: 'Must-Do Coding Questions for Product Companies',
        url: 'https://www.geeksforgeeks.org/dsa/must-do-coding-questions-for-product-based-companies/',
        platform: 'GeeksforGeeks',
        type: 'practice',
        topics: ['interview prep', 'product companies'],
        difficulty: 'intermediate',
        isFree: true
    },
    {
        id: 'codechef-tcs',
        title: 'CodeChef TCS Interview Questions',
        url: 'https://www.codechef.com/practice/tcs-interview-questions',
        platform: 'CodeChef',
        type: 'practice',
        topics: ['TCS', 'company specific'],
        difficulty: 'beginner',
        isFree: true
    }
];

// ============================================
// ARTICLES & GUIDES
// ============================================
export const articles: LearningResource[] = [
    {
        id: '14-patterns',
        title: '14 Patterns to Ace Coding Interviews',
        url: 'https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed',
        platform: 'HackerNoon',
        type: 'article',
        topics: ['coding patterns', 'problem-solving'],
        difficulty: 'intermediate',
        isFree: true,
        description: 'Essential patterns for solving any coding interview question'
    },
    {
        id: 'prepinsta-coding',
        title: 'Most Asked Coding Questions in Placements',
        url: 'https://prepinsta.com/interview-preparation/technical-interview-questions/most-asked-coding-questions-in-placements/',
        platform: 'PrepInsta',
        type: 'article',
        topics: ['placement prep', 'coding'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'instabyte-100',
        title: 'Interview Master 100',
        url: 'https://instabyte.io/p/interview-master-100',
        platform: 'Instabyte',
        type: 'article',
        topics: ['interview prep'],
        difficulty: 'intermediate',
        isFree: true
    }
];

// ============================================
// APTITUDE & REASONING
// ============================================
export const aptitudeResources: LearningResource[] = [
    {
        id: 'tcs-aptitude',
        title: 'TCS Aptitude Questions PDF',
        url: 'https://www.naukri.com/campus/career-guidance/tcs-aptitude-questions#TCS_Aptitude_Questions_PDF_–_Solved',
        platform: 'Naukri',
        type: 'practice',
        topics: ['aptitude', 'TCS'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'prepinsta-aptitude',
        title: 'PrepInsta Aptitude Learning',
        url: 'https://prepinsta.com/learn-aptitude/',
        platform: 'PrepInsta',
        type: 'tutorial',
        topics: ['aptitude'],
        difficulty: 'beginner',
        isFree: true
    },
    {
        id: 'indiabix-lr',
        title: 'IndiaBix Logical Reasoning',
        url: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/',
        platform: 'IndiaBix',
        type: 'practice',
        topics: ['logical reasoning', 'aptitude'],
        difficulty: 'beginner',
        isFree: true
    }
];

// ============================================
// COMPANY-SPECIFIC RESOURCES
// ============================================
export const companyResources: LearningResource[] = [
    {
        id: 'github-company-problems',
        title: 'Company-Wise LeetCode Problems 2022',
        url: 'https://github.com/hxu296/leetcode-company-wise-problems-2022',
        platform: 'GitHub',
        type: 'github',
        topics: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple'],
        difficulty: 'intermediate',
        isFree: true,
        description: '1000+ problems organized by company'
    },
    {
        id: 'tcs-codevita',
        title: 'TCS CodeVita Questions',
        url: 'https://www.geeksforgeeks.org/interview-experiences/tcs-codevita-9-pre-qualifier-round-questions/',
        platform: 'GeeksforGeeks',
        type: 'practice',
        topics: ['TCS', 'CodeVita'],
        difficulty: 'intermediate',
        isFree: true
    },
    {
        id: 'tcs-prep-sheet',
        title: 'TCS Interview Preparation Sheet',
        url: 'https://docs.google.com/spreadsheets/d/15Tx6T1tcKh09EdPjqC0PlSG52zikJXM5/edit?gid=559983178#gid=559983178',
        platform: 'Google Sheets',
        type: 'documentation',
        topics: ['TCS', 'interview prep'],
        difficulty: 'beginner',
        isFree: true
    }
];

// ============================================
// ALL RESOURCES COMBINED
// ============================================
export const allResources: LearningResource[] = [
    ...tutorials,
    ...visualizations,
    ...practicePlatforms,
    ...articles,
    ...aptitudeResources,
    ...companyResources
];

// Resource counts
export const resourceStats = {
    total: allResources.length,
    byType: {
        tutorial: tutorials.length,
        visualization: visualizations.length,
        practice: practicePlatforms.length,
        article: articles.length,
        aptitude: aptitudeResources.length,
        company: companyResources.length
    }
};

// Get resources by topic
export function getResourcesByTopic(topic: string): LearningResource[] {
    return allResources.filter(r =>
        r.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
    );
}

// Get resources by platform
export function getResourcesByPlatform(platform: string): LearningResource[] {
    return allResources.filter(r =>
        r.platform.toLowerCase() === platform.toLowerCase()
    );
}

// Get resources by difficulty
export function getResourcesByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): LearningResource[] {
    return allResources.filter(r => r.difficulty === difficulty);
}
