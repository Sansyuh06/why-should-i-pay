// Comprehensive Problem Catalog
// All 75+ Grind problems + additional interview problems organized by topic and pattern

export interface CatalogProblem {
    id: string;
    title: string;
    url: string;
    difficulty: 'easy' | 'medium' | 'hard';
    topic: string;
    pattern: string;
    companies: string[];
    tags: string[];
    acceptance?: number;
}

// ============================================
// ARRAYS & HASHING
// ============================================
export const arrayProblems: CatalogProblem[] = [
    {
        id: 'two-sum',
        title: 'Two Sum',
        url: 'https://leetcode.com/problems/two-sum/',
        difficulty: 'easy',
        topic: 'arrays',
        pattern: 'hash-table',
        companies: ['Google', 'Amazon', 'Meta', 'Apple', 'Microsoft'],
        tags: ['Array', 'Hash Table'],
        acceptance: 47.8
    },
    {
        id: 'best-time-buy-sell',
        title: 'Best Time to Buy and Sell Stock',
        url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
        difficulty: 'easy',
        topic: 'arrays',
        pattern: 'dynamic-programming',
        companies: ['Amazon', 'Meta', 'Goldman Sachs'],
        tags: ['Array', 'Dynamic Programming']
    },
    {
        id: 'contains-duplicate',
        title: 'Contains Duplicate',
        url: 'https://leetcode.com/problems/contains-duplicate/',
        difficulty: 'easy',
        topic: 'arrays',
        pattern: 'hash-table',
        companies: ['Google', 'Amazon', 'Apple'],
        tags: ['Array', 'Hash Table', 'Sorting']
    },
    {
        id: 'product-except-self',
        title: 'Product of Array Except Self',
        url: 'https://leetcode.com/problems/product-of-array-except-self/',
        difficulty: 'medium',
        topic: 'arrays',
        pattern: 'prefix-sum',
        companies: ['Amazon', 'Meta', 'Apple', 'Microsoft'],
        tags: ['Array', 'Prefix Sum']
    },
    {
        id: 'maximum-subarray',
        title: 'Maximum Subarray',
        url: 'https://leetcode.com/problems/maximum-subarray/',
        difficulty: 'medium',
        topic: 'arrays',
        pattern: 'kadanes-algorithm',
        companies: ['Amazon', 'Microsoft', 'LinkedIn'],
        tags: ['Array', 'Dynamic Programming', 'Divide and Conquer']
    },
    {
        id: 'maximum-product-subarray',
        title: 'Maximum Product Subarray',
        url: 'https://leetcode.com/problems/maximum-product-subarray/',
        difficulty: 'medium',
        topic: 'arrays',
        pattern: 'dynamic-programming',
        companies: ['Amazon', 'LinkedIn', 'Microsoft'],
        tags: ['Array', 'Dynamic Programming']
    },
    {
        id: 'find-min-rotated',
        title: 'Find Minimum in Rotated Sorted Array',
        url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
        difficulty: 'medium',
        topic: 'arrays',
        pattern: 'binary-search',
        companies: ['Amazon', 'Meta', 'Microsoft'],
        tags: ['Array', 'Binary Search']
    },
    {
        id: 'search-rotated',
        title: 'Search in Rotated Sorted Array',
        url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
        difficulty: 'medium',
        topic: 'arrays',
        pattern: 'binary-search',
        companies: ['Amazon', 'Meta', 'Microsoft', 'LinkedIn'],
        tags: ['Array', 'Binary Search']
    },
    {
        id: 'three-sum',
        title: '3Sum',
        url: 'https://leetcode.com/problems/3sum/',
        difficulty: 'medium',
        topic: 'arrays',
        pattern: 'two-pointers',
        companies: ['Amazon', 'Meta', 'Microsoft', 'Google'],
        tags: ['Array', 'Two Pointers', 'Sorting']
    },
    {
        id: 'container-water',
        title: 'Container With Most Water',
        url: 'https://leetcode.com/problems/container-with-most-water/',
        difficulty: 'medium',
        topic: 'arrays',
        pattern: 'two-pointers',
        companies: ['Amazon', 'Google', 'Meta'],
        tags: ['Array', 'Two Pointers', 'Greedy']
    }
];

// ============================================
// BIT MANIPULATION
// ============================================
export const bitProblems: CatalogProblem[] = [
    {
        id: 'sum-two-integers',
        title: 'Sum of Two Integers',
        url: 'https://leetcode.com/problems/sum-of-two-integers/',
        difficulty: 'medium',
        topic: 'bit-manipulation',
        pattern: 'bit-operations',
        companies: ['Amazon', 'Meta'],
        tags: ['Math', 'Bit Manipulation']
    },
    {
        id: 'number-1-bits',
        title: 'Number of 1 Bits',
        url: 'https://leetcode.com/problems/number-of-1-bits/',
        difficulty: 'easy',
        topic: 'bit-manipulation',
        pattern: 'bit-counting',
        companies: ['Microsoft', 'Apple'],
        tags: ['Divide and Conquer', 'Bit Manipulation']
    },
    {
        id: 'counting-bits',
        title: 'Counting Bits',
        url: 'https://leetcode.com/problems/counting-bits/',
        difficulty: 'easy',
        topic: 'bit-manipulation',
        pattern: 'dynamic-programming',
        companies: ['Google', 'Amazon'],
        tags: ['Dynamic Programming', 'Bit Manipulation']
    },
    {
        id: 'missing-number',
        title: 'Missing Number',
        url: 'https://leetcode.com/problems/missing-number/',
        difficulty: 'easy',
        topic: 'bit-manipulation',
        pattern: 'xor',
        companies: ['Amazon', 'Microsoft'],
        tags: ['Array', 'Hash Table', 'Bit Manipulation']
    },
    {
        id: 'reverse-bits',
        title: 'Reverse Bits',
        url: 'https://leetcode.com/problems/reverse-bits/',
        difficulty: 'easy',
        topic: 'bit-manipulation',
        pattern: 'bit-operations',
        companies: ['Apple', 'Amazon'],
        tags: ['Divide and Conquer', 'Bit Manipulation']
    }
];

// ============================================
// DYNAMIC PROGRAMMING
// ============================================
export const dpProblems: CatalogProblem[] = [
    {
        id: 'climbing-stairs',
        title: 'Climbing Stairs',
        url: 'https://leetcode.com/problems/climbing-stairs/',
        difficulty: 'easy',
        topic: 'dynamic-programming',
        pattern: 'fibonacci',
        companies: ['Amazon', 'Google', 'Apple'],
        tags: ['Math', 'Dynamic Programming', 'Memoization']
    },
    {
        id: 'coin-change',
        title: 'Coin Change',
        url: 'https://leetcode.com/problems/coin-change/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'unbounded-knapsack',
        companies: ['Amazon', 'Google', 'Microsoft'],
        tags: ['Array', 'Dynamic Programming', 'BFS']
    },
    {
        id: 'lis',
        title: 'Longest Increasing Subsequence',
        url: 'https://leetcode.com/problems/longest-increasing-subsequence/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'lis',
        companies: ['Amazon', 'Microsoft', 'Google'],
        tags: ['Array', 'Binary Search', 'Dynamic Programming']
    },
    {
        id: 'lcs',
        title: 'Longest Common Subsequence',
        url: 'https://leetcode.com/problems/longest-common-subsequence/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'lcs',
        companies: ['Amazon', 'Google'],
        tags: ['String', 'Dynamic Programming']
    },
    {
        id: 'word-break',
        title: 'Word Break',
        url: 'https://leetcode.com/problems/word-break/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'dp-string',
        companies: ['Amazon', 'Meta', 'Google', 'Microsoft'],
        tags: ['Hash Table', 'String', 'Dynamic Programming', 'Trie']
    },
    {
        id: 'combination-sum-iv',
        title: 'Combination Sum IV',
        url: 'https://leetcode.com/problems/combination-sum-iv/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'combinations',
        companies: ['Google', 'Meta'],
        tags: ['Array', 'Dynamic Programming']
    },
    {
        id: 'house-robber',
        title: 'House Robber',
        url: 'https://leetcode.com/problems/house-robber/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'linear-dp',
        companies: ['Amazon', 'Google', 'Microsoft'],
        tags: ['Array', 'Dynamic Programming']
    },
    {
        id: 'house-robber-ii',
        title: 'House Robber II',
        url: 'https://leetcode.com/problems/house-robber-ii/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'circular-dp',
        companies: ['Amazon', 'Google'],
        tags: ['Array', 'Dynamic Programming']
    },
    {
        id: 'decode-ways',
        title: 'Decode Ways',
        url: 'https://leetcode.com/problems/decode-ways/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'string-dp',
        companies: ['Meta', 'Microsoft', 'Amazon'],
        tags: ['String', 'Dynamic Programming']
    },
    {
        id: 'unique-paths',
        title: 'Unique Paths',
        url: 'https://leetcode.com/problems/unique-paths/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'grid-dp',
        companies: ['Google', 'Amazon', 'Meta'],
        tags: ['Math', 'Dynamic Programming', 'Combinatorics']
    },
    {
        id: 'jump-game',
        title: 'Jump Game',
        url: 'https://leetcode.com/problems/jump-game/',
        difficulty: 'medium',
        topic: 'dynamic-programming',
        pattern: 'greedy',
        companies: ['Amazon', 'Microsoft'],
        tags: ['Array', 'Dynamic Programming', 'Greedy']
    }
];

// ============================================
// INTERVALS
// ============================================
export const intervalProblems: CatalogProblem[] = [
    {
        id: 'merge-intervals',
        title: 'Merge Intervals',
        url: 'https://leetcode.com/problems/merge-intervals/',
        difficulty: 'medium',
        topic: 'intervals',
        pattern: 'interval-merge',
        companies: ['Google', 'Meta', 'Amazon', 'Microsoft'],
        tags: ['Array', 'Sorting']
    },
    {
        id: 'non-overlapping',
        title: 'Non-overlapping Intervals',
        url: 'https://leetcode.com/problems/non-overlapping-intervals/',
        difficulty: 'medium',
        topic: 'intervals',
        pattern: 'greedy',
        companies: ['Google', 'Amazon'],
        tags: ['Array', 'Dynamic Programming', 'Greedy', 'Sorting']
    },
    {
        id: 'meeting-rooms',
        title: 'Meeting Rooms',
        url: 'https://leetcode.com/problems/meeting-rooms/',
        difficulty: 'easy',
        topic: 'intervals',
        pattern: 'sorting',
        companies: ['Meta', 'Google', 'Amazon'],
        tags: ['Array', 'Sorting']
    },
    {
        id: 'meeting-rooms-ii',
        title: 'Meeting Rooms II',
        url: 'https://leetcode.com/problems/meeting-rooms-ii/',
        difficulty: 'medium',
        topic: 'intervals',
        pattern: 'heap',
        companies: ['Meta', 'Google', 'Amazon', 'Microsoft'],
        tags: ['Array', 'Two Pointers', 'Greedy', 'Sorting', 'Heap']
    },
    {
        id: 'insert-interval',
        title: 'Insert Interval',
        url: 'https://leetcode.com/problems/insert-interval/',
        difficulty: 'medium',
        topic: 'intervals',
        pattern: 'interval-insertion',
        companies: ['Google', 'Meta', 'LinkedIn'],
        tags: ['Array']
    }
];

// ============================================
// LINKED LISTS
// ============================================
export const linkedListProblems: CatalogProblem[] = [
    {
        id: 'reverse-list',
        title: 'Reverse Linked List',
        url: 'https://leetcode.com/problems/reverse-linked-list/',
        difficulty: 'easy',
        topic: 'linked-list',
        pattern: 'reversal',
        companies: ['Amazon', 'Microsoft', 'Apple'],
        tags: ['Linked List', 'Recursion']
    },
    {
        id: 'linked-list-cycle',
        title: 'Linked List Cycle',
        url: 'https://leetcode.com/problems/linked-list-cycle/',
        difficulty: 'easy',
        topic: 'linked-list',
        pattern: 'two-pointers',
        companies: ['Amazon', 'Microsoft'],
        tags: ['Hash Table', 'Linked List', 'Two Pointers']
    },
    {
        id: 'merge-two-lists',
        title: 'Merge Two Sorted Lists',
        url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
        difficulty: 'easy',
        topic: 'linked-list',
        pattern: 'merge',
        companies: ['Amazon', 'Microsoft', 'Apple'],
        tags: ['Linked List', 'Recursion']
    },
    {
        id: 'merge-k-lists',
        title: 'Merge k Sorted Lists',
        url: 'https://leetcode.com/problems/merge-k-sorted-lists/',
        difficulty: 'hard',
        topic: 'linked-list',
        pattern: 'heap',
        companies: ['Amazon', 'Meta', 'Microsoft', 'Google'],
        tags: ['Linked List', 'Divide and Conquer', 'Heap', 'Merge Sort']
    },
    {
        id: 'remove-nth',
        title: 'Remove Nth Node From End of List',
        url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
        difficulty: 'medium',
        topic: 'linked-list',
        pattern: 'two-pointers',
        companies: ['Amazon', 'Meta', 'Apple'],
        tags: ['Linked List', 'Two Pointers']
    },
    {
        id: 'reorder-list',
        title: 'Reorder List',
        url: 'https://leetcode.com/problems/reorder-list/',
        difficulty: 'medium',
        topic: 'linked-list',
        pattern: 'reversal',
        companies: ['Amazon', 'Meta'],
        tags: ['Linked List', 'Two Pointers', 'Stack', 'Recursion']
    }
];

// ============================================
// GRAPHS
// ============================================
export const graphProblems: CatalogProblem[] = [
    {
        id: 'clone-graph',
        title: 'Clone Graph',
        url: 'https://leetcode.com/problems/clone-graph/',
        difficulty: 'medium',
        topic: 'graph',
        pattern: 'dfs-bfs',
        companies: ['Meta', 'Amazon', 'Google'],
        tags: ['Hash Table', 'DFS', 'BFS', 'Graph']
    },
    {
        id: 'course-schedule',
        title: 'Course Schedule',
        url: 'https://leetcode.com/problems/course-schedule/',
        difficulty: 'medium',
        topic: 'graph',
        pattern: 'topological-sort',
        companies: ['Amazon', 'Microsoft', 'Google'],
        tags: ['DFS', 'BFS', 'Graph', 'Topological Sort']
    },
    {
        id: 'pacific-atlantic',
        title: 'Pacific Atlantic Water Flow',
        url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
        difficulty: 'medium',
        topic: 'graph',
        pattern: 'dfs',
        companies: ['Amazon', 'Google'],
        tags: ['Array', 'DFS', 'BFS', 'Matrix']
    },
    {
        id: 'number-of-islands',
        title: 'Number of Islands',
        url: 'https://leetcode.com/problems/number-of-islands/',
        difficulty: 'medium',
        topic: 'graph',
        pattern: 'dfs-bfs',
        companies: ['Amazon', 'Meta', 'Microsoft', 'Google'],
        tags: ['Array', 'DFS', 'BFS', 'Union Find', 'Matrix']
    },
    {
        id: 'longest-consecutive',
        title: 'Longest Consecutive Sequence',
        url: 'https://leetcode.com/problems/longest-consecutive-sequence/',
        difficulty: 'medium',
        topic: 'graph',
        pattern: 'union-find',
        companies: ['Google', 'Amazon', 'Meta'],
        tags: ['Array', 'Hash Table', 'Union Find']
    },
    {
        id: 'alien-dictionary',
        title: 'Alien Dictionary',
        url: 'https://leetcode.com/problems/alien-dictionary/',
        difficulty: 'hard',
        topic: 'graph',
        pattern: 'topological-sort',
        companies: ['Meta', 'Amazon', 'Google', 'Airbnb'],
        tags: ['Array', 'String', 'DFS', 'BFS', 'Graph', 'Topological Sort']
    },
    {
        id: 'valid-tree',
        title: 'Graph Valid Tree',
        url: 'https://leetcode.com/problems/graph-valid-tree/',
        difficulty: 'medium',
        topic: 'graph',
        pattern: 'union-find',
        companies: ['Google', 'Meta', 'Amazon'],
        tags: ['DFS', 'BFS', 'Union Find', 'Graph']
    },
    {
        id: 'connected-components',
        title: 'Number of Connected Components',
        url: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/',
        difficulty: 'medium',
        topic: 'graph',
        pattern: 'union-find',
        companies: ['Google', 'Amazon', 'LinkedIn'],
        tags: ['DFS', 'BFS', 'Union Find', 'Graph']
    }
];

// ============================================
// MATRIX
// ============================================
export const matrixProblems: CatalogProblem[] = [
    {
        id: 'set-matrix-zeroes',
        title: 'Set Matrix Zeroes',
        url: 'https://leetcode.com/problems/set-matrix-zeroes/',
        difficulty: 'medium',
        topic: 'matrix',
        pattern: 'in-place',
        companies: ['Amazon', 'Meta', 'Microsoft'],
        tags: ['Array', 'Hash Table', 'Matrix']
    },
    {
        id: 'spiral-matrix',
        title: 'Spiral Matrix',
        url: 'https://leetcode.com/problems/spiral-matrix/',
        difficulty: 'medium',
        topic: 'matrix',
        pattern: 'simulation',
        companies: ['Amazon', 'Microsoft', 'Apple'],
        tags: ['Array', 'Matrix', 'Simulation']
    },
    {
        id: 'rotate-image',
        title: 'Rotate Image',
        url: 'https://leetcode.com/problems/rotate-image/',
        difficulty: 'medium',
        topic: 'matrix',
        pattern: 'in-place-rotation',
        companies: ['Amazon', 'Microsoft', 'Apple', 'Google'],
        tags: ['Array', 'Math', 'Matrix']
    },
    {
        id: 'word-search',
        title: 'Word Search',
        url: 'https://leetcode.com/problems/word-search/',
        difficulty: 'medium',
        topic: 'matrix',
        pattern: 'backtracking',
        companies: ['Amazon', 'Microsoft', 'Meta'],
        tags: ['Array', 'Backtracking', 'Matrix']
    }
];

// ============================================
// STRINGS
// ============================================
export const stringProblems: CatalogProblem[] = [
    {
        id: 'longest-substring',
        title: 'Longest Substring Without Repeating Characters',
        url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
        difficulty: 'medium',
        topic: 'strings',
        pattern: 'sliding-window',
        companies: ['Amazon', 'Meta', 'Microsoft', 'Google', 'Apple'],
        tags: ['Hash Table', 'String', 'Sliding Window']
    },
    {
        id: 'longest-repeating-replacement',
        title: 'Longest Repeating Character Replacement',
        url: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
        difficulty: 'medium',
        topic: 'strings',
        pattern: 'sliding-window',
        companies: ['Google', 'Amazon'],
        tags: ['Hash Table', 'String', 'Sliding Window']
    },
    {
        id: 'min-window',
        title: 'Minimum Window Substring',
        url: 'https://leetcode.com/problems/minimum-window-substring/',
        difficulty: 'hard',
        topic: 'strings',
        pattern: 'sliding-window',
        companies: ['Meta', 'Amazon', 'Google', 'Microsoft', 'LinkedIn'],
        tags: ['Hash Table', 'String', 'Sliding Window']
    },
    {
        id: 'valid-anagram',
        title: 'Valid Anagram',
        url: 'https://leetcode.com/problems/valid-anagram/',
        difficulty: 'easy',
        topic: 'strings',
        pattern: 'hash-table',
        companies: ['Amazon', 'Microsoft', 'Google'],
        tags: ['Hash Table', 'String', 'Sorting']
    },
    {
        id: 'group-anagrams',
        title: 'Group Anagrams',
        url: 'https://leetcode.com/problems/group-anagrams/',
        difficulty: 'medium',
        topic: 'strings',
        pattern: 'hash-table',
        companies: ['Amazon', 'Meta', 'Microsoft', 'Google'],
        tags: ['Array', 'Hash Table', 'String', 'Sorting']
    },
    {
        id: 'valid-parentheses',
        title: 'Valid Parentheses',
        url: 'https://leetcode.com/problems/valid-parentheses/',
        difficulty: 'easy',
        topic: 'strings',
        pattern: 'stack',
        companies: ['Amazon', 'Meta', 'Microsoft', 'Google'],
        tags: ['String', 'Stack']
    },
    {
        id: 'valid-palindrome',
        title: 'Valid Palindrome',
        url: 'https://leetcode.com/problems/valid-palindrome/',
        difficulty: 'easy',
        topic: 'strings',
        pattern: 'two-pointers',
        companies: ['Meta', 'Microsoft'],
        tags: ['Two Pointers', 'String']
    },
    {
        id: 'longest-palindrome',
        title: 'Longest Palindromic Substring',
        url: 'https://leetcode.com/problems/longest-palindromic-substring/',
        difficulty: 'medium',
        topic: 'strings',
        pattern: 'expand-around-center',
        companies: ['Amazon', 'Microsoft', 'Google'],
        tags: ['String', 'Dynamic Programming']
    },
    {
        id: 'palindromic-substrings',
        title: 'Palindromic Substrings',
        url: 'https://leetcode.com/problems/palindromic-substrings/',
        difficulty: 'medium',
        topic: 'strings',
        pattern: 'expand-around-center',
        companies: ['Meta', 'Amazon'],
        tags: ['String', 'Dynamic Programming']
    },
    {
        id: 'encode-decode',
        title: 'Encode and Decode Strings',
        url: 'https://leetcode.com/problems/encode-and-decode-strings/',
        difficulty: 'medium',
        topic: 'strings',
        pattern: 'encoding',
        companies: ['Google', 'Meta'],
        tags: ['Array', 'String', 'Design']
    }
];

// ============================================
// TREES
// ============================================
export const treeProblems: CatalogProblem[] = [
    {
        id: 'max-depth',
        title: 'Maximum Depth of Binary Tree',
        url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
        difficulty: 'easy',
        topic: 'trees',
        pattern: 'dfs',
        companies: ['Amazon', 'Microsoft'],
        tags: ['Tree', 'DFS', 'BFS', 'Binary Tree']
    },
    {
        id: 'same-tree',
        title: 'Same Tree',
        url: 'https://leetcode.com/problems/same-tree/',
        difficulty: 'easy',
        topic: 'trees',
        pattern: 'dfs',
        companies: ['Amazon', 'Microsoft'],
        tags: ['Tree', 'DFS', 'BFS', 'Binary Tree']
    },
    {
        id: 'invert-tree',
        title: 'Invert Binary Tree',
        url: 'https://leetcode.com/problems/invert-binary-tree/',
        difficulty: 'easy',
        topic: 'trees',
        pattern: 'dfs',
        companies: ['Google', 'Amazon'],
        tags: ['Tree', 'DFS', 'BFS', 'Binary Tree']
    },
    {
        id: 'max-path-sum',
        title: 'Binary Tree Maximum Path Sum',
        url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
        difficulty: 'hard',
        topic: 'trees',
        pattern: 'dfs',
        companies: ['Meta', 'Google', 'Amazon', 'Microsoft'],
        tags: ['Dynamic Programming', 'Tree', 'DFS', 'Binary Tree']
    },
    {
        id: 'level-order',
        title: 'Binary Tree Level Order Traversal',
        url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
        difficulty: 'medium',
        topic: 'trees',
        pattern: 'bfs',
        companies: ['Amazon', 'Meta', 'Microsoft'],
        tags: ['Tree', 'BFS', 'Binary Tree']
    },
    {
        id: 'serialize-tree',
        title: 'Serialize and Deserialize Binary Tree',
        url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
        difficulty: 'hard',
        topic: 'trees',
        pattern: 'dfs',
        companies: ['Meta', 'Amazon', 'Microsoft', 'Google'],
        tags: ['String', 'Tree', 'DFS', 'BFS', 'Design', 'Binary Tree']
    },
    {
        id: 'subtree',
        title: 'Subtree of Another Tree',
        url: 'https://leetcode.com/problems/subtree-of-another-tree/',
        difficulty: 'easy',
        topic: 'trees',
        pattern: 'dfs',
        companies: ['Amazon', 'Meta'],
        tags: ['Tree', 'DFS', 'String Matching', 'Binary Tree', 'Hash Function']
    },
    {
        id: 'construct-tree',
        title: 'Construct Binary Tree from Preorder and Inorder Traversal',
        url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
        difficulty: 'medium',
        topic: 'trees',
        pattern: 'divide-conquer',
        companies: ['Amazon', 'Meta', 'Microsoft'],
        tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Tree', 'Binary Tree']
    },
    {
        id: 'validate-bst',
        title: 'Validate Binary Search Tree',
        url: 'https://leetcode.com/problems/validate-binary-search-tree/',
        difficulty: 'medium',
        topic: 'trees',
        pattern: 'dfs',
        companies: ['Amazon', 'Meta', 'Microsoft'],
        tags: ['Tree', 'DFS', 'BST', 'Binary Tree']
    },
    {
        id: 'kth-smallest-bst',
        title: 'Kth Smallest Element in a BST',
        url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
        difficulty: 'medium',
        topic: 'trees',
        pattern: 'inorder-traversal',
        companies: ['Amazon', 'Meta', 'Microsoft'],
        tags: ['Tree', 'DFS', 'BST', 'Binary Tree']
    },
    {
        id: 'lca-bst',
        title: 'Lowest Common Ancestor of a Binary Search Tree',
        url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
        difficulty: 'medium',
        topic: 'trees',
        pattern: 'bst-properties',
        companies: ['Amazon', 'Meta', 'Microsoft'],
        tags: ['Tree', 'DFS', 'BST', 'Binary Tree']
    }
];

// ============================================
// TRIES
// ============================================
export const trieProblems: CatalogProblem[] = [
    {
        id: 'implement-trie',
        title: 'Implement Trie (Prefix Tree)',
        url: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
        difficulty: 'medium',
        topic: 'trie',
        pattern: 'trie-construction',
        companies: ['Google', 'Amazon', 'Microsoft'],
        tags: ['Hash Table', 'String', 'Design', 'Trie']
    },
    {
        id: 'add-search-word',
        title: 'Design Add and Search Words Data Structure',
        url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
        difficulty: 'medium',
        topic: 'trie',
        pattern: 'trie-search',
        companies: ['Meta', 'Amazon'],
        tags: ['String', 'DFS', 'Design', 'Trie']
    },
    {
        id: 'word-search-ii',
        title: 'Word Search II',
        url: 'https://leetcode.com/problems/word-search-ii/',
        difficulty: 'hard',
        topic: 'trie',
        pattern: 'trie-backtracking',
        companies: ['Amazon', 'Microsoft', 'Google'],
        tags: ['Array', 'String', 'Backtracking', 'Trie', 'Matrix']
    }
];

// ============================================
// HEAPS
// ============================================
export const heapProblems: CatalogProblem[] = [
    {
        id: 'top-k-frequent',
        title: 'Top K Frequent Elements',
        url: 'https://leetcode.com/problems/top-k-frequent-elements/',
        difficulty: 'medium',
        topic: 'heap',
        pattern: 'heap-sorting',
        companies: ['Amazon', 'Meta', 'Google', 'Apple'],
        tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Sorting', 'Heap', 'Bucket Sort', 'Counting', 'Quickselect']
    },
    {
        id: 'find-median',
        title: 'Find Median from Data Stream',
        url: 'https://leetcode.com/problems/find-median-from-data-stream/',
        difficulty: 'hard',
        topic: 'heap',
        pattern: 'two-heaps',
        companies: ['Amazon', 'Meta', 'Microsoft', 'Google', 'Apple'],
        tags: ['Two Pointers', 'Design', 'Sorting', 'Heap', 'Data Stream']
    }
];

// ============================================
// ALL PROBLEMS COMBINED
// ============================================
export const allProblems: CatalogProblem[] = [
    ...arrayProblems,
    ...bitProblems,
    ...dpProblems,
    ...intervalProblems,
    ...linkedListProblems,
    ...graphProblems,
    ...matrixProblems,
    ...stringProblems,
    ...treeProblems,
    ...trieProblems,
    ...heapProblems
];

// Problem counts by topic
export const problemStats = {
    total: allProblems.length,
    byDifficulty: {
        easy: allProblems.filter(p => p.difficulty === 'easy').length,
        medium: allProblems.filter(p => p.difficulty === 'medium').length,
        hard: allProblems.filter(p => p.difficulty === 'hard').length
    },
    byTopic: {
        arrays: arrayProblems.length,
        'bit-manipulation': bitProblems.length,
        'dynamic-programming': dpProblems.length,
        intervals: intervalProblems.length,
        'linked-list': linkedListProblems.length,
        graph: graphProblems.length,
        matrix: matrixProblems.length,
        strings: stringProblems.length,
        trees: treeProblems.length,
        trie: trieProblems.length,
        heap: heapProblems.length
    }
};

// Get problems by filter
export function getProblems(options: {
    topic?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    company?: string;
    pattern?: string;
} = {}): CatalogProblem[] {
    let filtered = [...allProblems];

    if(options.topic) {
        filtered = filtered.filter(p => p.topic === options.topic);
    }
    if(options.difficulty) {
        filtered = filtered.filter(p => p.difficulty === options.difficulty);
    }
    if(options.company) {
        filtered = filtered.filter(p => p.companies.includes(options.company));
    }
    if(options.pattern) {
        filtered = filtered.filter(p => p.pattern === options.pattern);
    }

    return filtered;
}

// Get all unique companies
export function getCompanies(): string[] {
    const companies = new Set<string>();
    allProblems.forEach(p => p.companies.forEach(c => companies.add(c)));
    return Array.from(companies).sort();
}

// Get all unique patterns
export function getPatterns(): string[] {
    const patterns = new Set<string>();
    allProblems.forEach(p => patterns.add(p.pattern));
    return Array.from(patterns).sort();
}
