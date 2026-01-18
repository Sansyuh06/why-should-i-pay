// INTEGRATED CONTENT CATALOG - All Scraped + Curated Content
// Combines: LeetCode Top 150, SQL 50, CodeChef TCS, TCS Aptitude

export interface IntegratedProblem {
    id: string;
    title: string;
    url: string;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
    source: string;
    tags: string[];
}

// Helper to create URL slug
const toSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// ============================================
// LEETCODE TOP 150 INTERVIEW PROBLEMS
// ============================================
export const leetcode150Problems: IntegratedProblem[] = [
    // Array / String
    { id: 'lc150-merge-sorted-array', title: 'Merge Sorted Array', url: 'https://leetcode.com/problems/merge-sorted-array/', difficulty: 'easy', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Two Pointers'] },
    { id: 'lc150-remove-element', title: 'Remove Element', url: 'https://leetcode.com/problems/remove-element/', difficulty: 'easy', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Two Pointers'] },
    { id: 'lc150-remove-duplicates', title: 'Remove Duplicates from Sorted Array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', difficulty: 'easy', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Two Pointers'] },
    { id: 'lc150-remove-duplicates-ii', title: 'Remove Duplicates from Sorted Array II', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Two Pointers'] },
    { id: 'lc150-majority-element', title: 'Majority Element', url: 'https://leetcode.com/problems/majority-element/', difficulty: 'easy', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'Divide and Conquer'] },
    { id: 'lc150-rotate-array', title: 'Rotate Array', url: 'https://leetcode.com/problems/rotate-array/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Math'] },
    { id: 'lc150-best-time-stock', title: 'Best Time to Buy and Sell Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', difficulty: 'easy', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'DP'] },
    { id: 'lc150-best-time-stock-ii', title: 'Best Time to Buy and Sell Stock II', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'DP', 'Greedy'] },
    { id: 'lc150-jump-game', title: 'Jump Game', url: 'https://leetcode.com/problems/jump-game/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'DP', 'Greedy'] },
    { id: 'lc150-jump-game-ii', title: 'Jump Game II', url: 'https://leetcode.com/problems/jump-game-ii/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'DP', 'Greedy'] },
    { id: 'lc150-h-index', title: 'H-Index', url: 'https://leetcode.com/problems/h-index/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Sorting'] },
    { id: 'lc150-insert-delete-random', title: 'Insert Delete GetRandom O(1)', url: 'https://leetcode.com/problems/insert-delete-getrandom-o1/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'Design'] },
    { id: 'lc150-product-except-self', title: 'Product of Array Except Self', url: 'https://leetcode.com/problems/product-of-array-except-self/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Prefix Sum'] },
    { id: 'lc150-gas-station', title: 'Gas Station', url: 'https://leetcode.com/problems/gas-station/', difficulty: 'medium', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Greedy'] },
    { id: 'lc150-candy', title: 'Candy', url: 'https://leetcode.com/problems/candy/', difficulty: 'hard', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Greedy'] },
    { id: 'lc150-trapping-rain', title: 'Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/', difficulty: 'hard', category: 'Array', source: 'LeetCode 150', tags: ['Array', 'Two Pointers', 'DP', 'Stack'] },
    // Strings
    { id: 'lc150-roman-to-int', title: 'Roman to Integer', url: 'https://leetcode.com/problems/roman-to-integer/', difficulty: 'easy', category: 'String', source: 'LeetCode 150', tags: ['String', 'Hash Table'] },
    { id: 'lc150-int-to-roman', title: 'Integer to Roman', url: 'https://leetcode.com/problems/integer-to-roman/', difficulty: 'medium', category: 'String', source: 'LeetCode 150', tags: ['String', 'Hash Table'] },
    { id: 'lc150-length-last-word', title: 'Length of Last Word', url: 'https://leetcode.com/problems/length-of-last-word/', difficulty: 'easy', category: 'String', source: 'LeetCode 150', tags: ['String'] },
    { id: 'lc150-longest-common-prefix', title: 'Longest Common Prefix', url: 'https://leetcode.com/problems/longest-common-prefix/', difficulty: 'easy', category: 'String', source: 'LeetCode 150', tags: ['String', 'Trie'] },
    { id: 'lc150-reverse-words', title: 'Reverse Words in a String', url: 'https://leetcode.com/problems/reverse-words-in-a-string/', difficulty: 'medium', category: 'String', source: 'LeetCode 150', tags: ['String', 'Two Pointers'] },
    { id: 'lc150-zigzag', title: 'Zigzag Conversion', url: 'https://leetcode.com/problems/zigzag-conversion/', difficulty: 'medium', category: 'String', source: 'LeetCode 150', tags: ['String'] },
    { id: 'lc150-strstr', title: 'Find the Index of the First Occurrence in a String', url: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/', difficulty: 'easy', category: 'String', source: 'LeetCode 150', tags: ['String', 'Two Pointers'] },
    { id: 'lc150-text-justify', title: 'Text Justification', url: 'https://leetcode.com/problems/text-justification/', difficulty: 'hard', category: 'String', source: 'LeetCode 150', tags: ['String', 'Simulation'] },
    // Two Pointers
    { id: 'lc150-valid-palindrome', title: 'Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/', difficulty: 'easy', category: 'Two Pointers', source: 'LeetCode 150', tags: ['Two Pointers', 'String'] },
    { id: 'lc150-is-subsequence', title: 'Is Subsequence', url: 'https://leetcode.com/problems/is-subsequence/', difficulty: 'easy', category: 'Two Pointers', source: 'LeetCode 150', tags: ['Two Pointers', 'String', 'DP'] },
    { id: 'lc150-two-sum-ii', title: 'Two Sum II - Input Array Is Sorted', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/', difficulty: 'medium', category: 'Two Pointers', source: 'LeetCode 150', tags: ['Array', 'Two Pointers', 'Binary Search'] },
    { id: 'lc150-container-water', title: 'Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'medium', category: 'Two Pointers', source: 'LeetCode 150', tags: ['Array', 'Two Pointers', 'Greedy'] },
    { id: 'lc150-3sum', title: '3Sum', url: 'https://leetcode.com/problems/3sum/', difficulty: 'medium', category: 'Two Pointers', source: 'LeetCode 150', tags: ['Array', 'Two Pointers', 'Sorting'] },
    // Sliding Window
    { id: 'lc150-min-size-subarray', title: 'Minimum Size Subarray Sum', url: 'https://leetcode.com/problems/minimum-size-subarray-sum/', difficulty: 'medium', category: 'Sliding Window', source: 'LeetCode 150', tags: ['Array', 'Sliding Window', 'Binary Search'] },
    { id: 'lc150-longest-substring', title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'medium', category: 'Sliding Window', source: 'LeetCode 150', tags: ['Hash Table', 'String', 'Sliding Window'] },
    { id: 'lc150-substring-concat', title: 'Substring with Concatenation of All Words', url: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/', difficulty: 'hard', category: 'Sliding Window', source: 'LeetCode 150', tags: ['Hash Table', 'String', 'Sliding Window'] },
    { id: 'lc150-min-window', title: 'Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/', difficulty: 'hard', category: 'Sliding Window', source: 'LeetCode 150', tags: ['Hash Table', 'String', 'Sliding Window'] },
    // Matrix
    { id: 'lc150-valid-sudoku', title: 'Valid Sudoku', url: 'https://leetcode.com/problems/valid-sudoku/', difficulty: 'medium', category: 'Matrix', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'Matrix'] },
    { id: 'lc150-spiral-matrix', title: 'Spiral Matrix', url: 'https://leetcode.com/problems/spiral-matrix/', difficulty: 'medium', category: 'Matrix', source: 'LeetCode 150', tags: ['Array', 'Matrix', 'Simulation'] },
    { id: 'lc150-rotate-image', title: 'Rotate Image', url: 'https://leetcode.com/problems/rotate-image/', difficulty: 'medium', category: 'Matrix', source: 'LeetCode 150', tags: ['Array', 'Math', 'Matrix'] },
    { id: 'lc150-set-matrix-zeroes', title: 'Set Matrix Zeroes', url: 'https://leetcode.com/problems/set-matrix-zeroes/', difficulty: 'medium', category: 'Matrix', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'Matrix'] },
    { id: 'lc150-game-of-life', title: 'Game of Life', url: 'https://leetcode.com/problems/game-of-life/', difficulty: 'medium', category: 'Matrix', source: 'LeetCode 150', tags: ['Array', 'Matrix', 'Simulation'] },
    // Hashmap
    { id: 'lc150-ransom-note', title: 'Ransom Note', url: 'https://leetcode.com/problems/ransom-note/', difficulty: 'easy', category: 'Hashmap', source: 'LeetCode 150', tags: ['Hash Table', 'String'] },
    { id: 'lc150-isomorphic', title: 'Isomorphic Strings', url: 'https://leetcode.com/problems/isomorphic-strings/', difficulty: 'easy', category: 'Hashmap', source: 'LeetCode 150', tags: ['Hash Table', 'String'] },
    { id: 'lc150-word-pattern', title: 'Word Pattern', url: 'https://leetcode.com/problems/word-pattern/', difficulty: 'easy', category: 'Hashmap', source: 'LeetCode 150', tags: ['Hash Table', 'String'] },
    { id: 'lc150-valid-anagram', title: 'Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/', difficulty: 'easy', category: 'Hashmap', source: 'LeetCode 150', tags: ['Hash Table', 'String', 'Sorting'] },
    { id: 'lc150-group-anagrams', title: 'Group Anagrams', url: 'https://leetcode.com/problems/group-anagrams/', difficulty: 'medium', category: 'Hashmap', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'String', 'Sorting'] },
    { id: 'lc150-two-sum', title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/', difficulty: 'easy', category: 'Hashmap', source: 'LeetCode 150', tags: ['Array', 'Hash Table'] },
    { id: 'lc150-happy-number', title: 'Happy Number', url: 'https://leetcode.com/problems/happy-number/', difficulty: 'easy', category: 'Hashmap', source: 'LeetCode 150', tags: ['Hash Table', 'Math', 'Two Pointers'] },
    { id: 'lc150-contains-duplicate-ii', title: 'Contains Duplicate II', url: 'https://leetcode.com/problems/contains-duplicate-ii/', difficulty: 'easy', category: 'Hashmap', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'Sliding Window'] },
    { id: 'lc150-longest-consecutive', title: 'Longest Consecutive Sequence', url: 'https://leetcode.com/problems/longest-consecutive-sequence/', difficulty: 'medium', category: 'Hashmap', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'Union Find'] },
    // Intervals
    { id: 'lc150-summary-ranges', title: 'Summary Ranges', url: 'https://leetcode.com/problems/summary-ranges/', difficulty: 'easy', category: 'Intervals', source: 'LeetCode 150', tags: ['Array'] },
    { id: 'lc150-merge-intervals', title: 'Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/', difficulty: 'medium', category: 'Intervals', source: 'LeetCode 150', tags: ['Array', 'Sorting'] },
    { id: 'lc150-insert-interval', title: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/', difficulty: 'medium', category: 'Intervals', source: 'LeetCode 150', tags: ['Array'] },
    { id: 'lc150-min-arrows', title: 'Minimum Number of Arrows to Burst Balloons', url: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/', difficulty: 'medium', category: 'Intervals', source: 'LeetCode 150', tags: ['Array', 'Greedy', 'Sorting'] },
    // Stack
    { id: 'lc150-valid-parentheses', title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/', difficulty: 'easy', category: 'Stack', source: 'LeetCode 150', tags: ['String', 'Stack'] },
    { id: 'lc150-simplify-path', title: 'Simplify Path', url: 'https://leetcode.com/problems/simplify-path/', difficulty: 'medium', category: 'Stack', source: 'LeetCode 150', tags: ['String', 'Stack'] },
    { id: 'lc150-min-stack', title: 'Min Stack', url: 'https://leetcode.com/problems/min-stack/', difficulty: 'medium', category: 'Stack', source: 'LeetCode 150', tags: ['Stack', 'Design'] },
    { id: 'lc150-eval-rpn', title: 'Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', difficulty: 'medium', category: 'Stack', source: 'LeetCode 150', tags: ['Array', 'Math', 'Stack'] },
    { id: 'lc150-basic-calc', title: 'Basic Calculator', url: 'https://leetcode.com/problems/basic-calculator/', difficulty: 'hard', category: 'Stack', source: 'LeetCode 150', tags: ['Math', 'String', 'Stack', 'Recursion'] },
    // Linked List
    { id: 'lc150-ll-cycle', title: 'Linked List Cycle', url: 'https://leetcode.com/problems/linked-list-cycle/', difficulty: 'easy', category: 'Linked List', source: 'LeetCode 150', tags: ['Hash Table', 'Linked List', 'Two Pointers'] },
    { id: 'lc150-add-two-numbers', title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/', difficulty: 'medium', category: 'Linked List', source: 'LeetCode 150', tags: ['Linked List', 'Math', 'Recursion'] },
    { id: 'lc150-merge-two-lists', title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'easy', category: 'Linked List', source: 'LeetCode 150', tags: ['Linked List', 'Recursion'] },
    { id: 'lc150-copy-random', title: 'Copy List with Random Pointer', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/', difficulty: 'medium', category: 'Linked List', source: 'LeetCode 150', tags: ['Hash Table', 'Linked List'] },
    { id: 'lc150-reverse-ll-ii', title: 'Reverse Linked List II', url: 'https://leetcode.com/problems/reverse-linked-list-ii/', difficulty: 'medium', category: 'Linked List', source: 'LeetCode 150', tags: ['Linked List'] },
    { id: 'lc150-reverse-k-group', title: 'Reverse Nodes in k-Group', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', difficulty: 'hard', category: 'Linked List', source: 'LeetCode 150', tags: ['Linked List', 'Recursion'] },
    { id: 'lc150-remove-nth', title: 'Remove Nth Node From End of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', difficulty: 'medium', category: 'Linked List', source: 'LeetCode 150', tags: ['Linked List', 'Two Pointers'] },
    { id: 'lc150-remove-dup-sorted', title: 'Remove Duplicates from Sorted List II', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/', difficulty: 'medium', category: 'Linked List', source: 'LeetCode 150', tags: ['Linked List', 'Two Pointers'] },
    { id: 'lc150-rotate-list', title: 'Rotate List', url: 'https://leetcode.com/problems/rotate-list/', difficulty: 'medium', category: 'Linked List', source: 'LeetCode 150', tags: ['Linked List', 'Two Pointers'] },
    { id: 'lc150-partition-list', title: 'Partition List', url: 'https://leetcode.com/problems/partition-list/', difficulty: 'medium', category: 'Linked List', source: 'LeetCode 150', tags: ['Linked List', 'Two Pointers'] },
    { id: 'lc150-lru-cache', title: 'LRU Cache', url: 'https://leetcode.com/problems/lru-cache/', difficulty: 'medium', category: 'Linked List', source: 'LeetCode 150', tags: ['Hash Table', 'Linked List', 'Design'] },
    // Binary Tree
    { id: 'lc150-max-depth-tree', title: 'Maximum Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', difficulty: 'easy', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'BFS', 'Binary Tree'] },
    { id: 'lc150-same-tree', title: 'Same Tree', url: 'https://leetcode.com/problems/same-tree/', difficulty: 'easy', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'BFS', 'Binary Tree'] },
    { id: 'lc150-invert-tree', title: 'Invert Binary Tree', url: 'https://leetcode.com/problems/invert-binary-tree/', difficulty: 'easy', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'BFS', 'Binary Tree'] },
    { id: 'lc150-symmetric-tree', title: 'Symmetric Tree', url: 'https://leetcode.com/problems/symmetric-tree/', difficulty: 'easy', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'BFS', 'Binary Tree'] },
    { id: 'lc150-construct-preorder', title: 'Construct Binary Tree from Preorder and Inorder Traversal', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', difficulty: 'medium', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Tree', 'Binary Tree'] },
    { id: 'lc150-construct-postorder', title: 'Construct Binary Tree from Inorder and Postorder Traversal', url: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/', difficulty: 'medium', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Tree', 'Binary Tree'] },
    { id: 'lc150-path-sum', title: 'Path Sum', url: 'https://leetcode.com/problems/path-sum/', difficulty: 'easy', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'BFS', 'Binary Tree'] },
    { id: 'lc150-sum-root-leaf', title: 'Sum Root to Leaf Numbers', url: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/', difficulty: 'medium', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'Binary Tree'] },
    { id: 'lc150-max-path-sum', title: 'Binary Tree Maximum Path Sum', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', difficulty: 'hard', category: 'Binary Tree', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'DP', 'Binary Tree'] },
    // BST
    { id: 'lc150-min-diff-bst', title: 'Minimum Absolute Difference in BST', url: 'https://leetcode.com/problems/minimum-absolute-difference-in-bst/', difficulty: 'easy', category: 'BST', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'BFS', 'BST'] },
    { id: 'lc150-kth-smallest-bst', title: 'Kth Smallest Element in a BST', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', difficulty: 'medium', category: 'BST', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'BST'] },
    { id: 'lc150-validate-bst', title: 'Validate Binary Search Tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/', difficulty: 'medium', category: 'BST', source: 'LeetCode 150', tags: ['Tree', 'DFS', 'BST'] },
    // Graph
    { id: 'lc150-num-islands', title: 'Number of Islands', url: 'https://leetcode.com/problems/number-of-islands/', difficulty: 'medium', category: 'Graph', source: 'LeetCode 150', tags: ['Array', 'DFS', 'BFS', 'Union Find', 'Matrix'] },
    { id: 'lc150-surrounded', title: 'Surrounded Regions', url: 'https://leetcode.com/problems/surrounded-regions/', difficulty: 'medium', category: 'Graph', source: 'LeetCode 150', tags: ['Array', 'DFS', 'BFS', 'Union Find', 'Matrix'] },
    { id: 'lc150-clone-graph', title: 'Clone Graph', url: 'https://leetcode.com/problems/clone-graph/', difficulty: 'medium', category: 'Graph', source: 'LeetCode 150', tags: ['Hash Table', 'DFS', 'BFS', 'Graph'] },
    { id: 'lc150-course-schedule', title: 'Course Schedule', url: 'https://leetcode.com/problems/course-schedule/', difficulty: 'medium', category: 'Graph', source: 'LeetCode 150', tags: ['DFS', 'BFS', 'Graph', 'Topological Sort'] },
    { id: 'lc150-course-schedule-ii', title: 'Course Schedule II', url: 'https://leetcode.com/problems/course-schedule-ii/', difficulty: 'medium', category: 'Graph', source: 'LeetCode 150', tags: ['DFS', 'BFS', 'Graph', 'Topological Sort'] },
    { id: 'lc150-word-ladder', title: 'Word Ladder', url: 'https://leetcode.com/problems/word-ladder/', difficulty: 'hard', category: 'Graph BFS', source: 'LeetCode 150', tags: ['Hash Table', 'String', 'BFS'] },
    // DP
    { id: 'lc150-climbing-stairs', title: 'Climbing Stairs', url: 'https://leetcode.com/problems/climbing-stairs/', difficulty: 'easy', category: 'DP', source: 'LeetCode 150', tags: ['Math', 'DP', 'Memoization'] },
    { id: 'lc150-house-robber', title: 'House Robber', url: 'https://leetcode.com/problems/house-robber/', difficulty: 'medium', category: 'DP', source: 'LeetCode 150', tags: ['Array', 'DP'] },
    { id: 'lc150-word-break', title: 'Word Break', url: 'https://leetcode.com/problems/word-break/', difficulty: 'medium', category: 'DP', source: 'LeetCode 150', tags: ['Hash Table', 'String', 'DP', 'Trie', 'Memoization'] },
    { id: 'lc150-coin-change', title: 'Coin Change', url: 'https://leetcode.com/problems/coin-change/', difficulty: 'medium', category: 'DP', source: 'LeetCode 150', tags: ['Array', 'DP', 'BFS'] },
    { id: 'lc150-lis', title: 'Longest Increasing Subsequence', url: 'https://leetcode.com/problems/longest-increasing-subsequence/', difficulty: 'medium', category: 'DP', source: 'LeetCode 150', tags: ['Array', 'Binary Search', 'DP'] },
    { id: 'lc150-edit-distance', title: 'Edit Distance', url: 'https://leetcode.com/problems/edit-distance/', difficulty: 'medium', category: 'DP', source: 'LeetCode 150', tags: ['String', 'DP'] },
    { id: 'lc150-maximal-square', title: 'Maximal Square', url: 'https://leetcode.com/problems/maximal-square/', difficulty: 'medium', category: 'DP', source: 'LeetCode 150', tags: ['Array', 'DP', 'Matrix'] },
];

// ============================================
// LEETCODE SQL 50 PROBLEMS
// ============================================
export const sqlProblems: IntegratedProblem[] = [
    { id: 'sql-recyclable-low-fat', title: 'Recyclable and Low Fat Products', url: 'https://leetcode.com/problems/recyclable-and-low-fat-products/', difficulty: 'easy', category: 'SQL Select', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-customer-referee', title: 'Find Customer Referee', url: 'https://leetcode.com/problems/find-customer-referee/', difficulty: 'easy', category: 'SQL Select', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-big-countries', title: 'Big Countries', url: 'https://leetcode.com/problems/big-countries/', difficulty: 'easy', category: 'SQL Select', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-article-views', title: 'Article Views I', url: 'https://leetcode.com/problems/article-views-i/', difficulty: 'easy', category: 'SQL Select', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-invalid-tweets', title: 'Invalid Tweets', url: 'https://leetcode.com/problems/invalid-tweets/', difficulty: 'easy', category: 'SQL Select', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-rising-temp', title: 'Rising Temperature', url: 'https://leetcode.com/problems/rising-temperature/', difficulty: 'easy', category: 'SQL Joins', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-employee-bonus', title: 'Employee Bonus', url: 'https://leetcode.com/problems/employee-bonus/', difficulty: 'easy', category: 'SQL Joins', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-managers-5', title: 'Managers with at Least 5 Direct Reports', url: 'https://leetcode.com/problems/managers-with-at-least-5-direct-reports/', difficulty: 'medium', category: 'SQL Joins', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-confirmation-rate', title: 'Confirmation Rate', url: 'https://leetcode.com/problems/confirmation-rate/', difficulty: 'medium', category: 'SQL Joins', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-not-boring-movies', title: 'Not Boring Movies', url: 'https://leetcode.com/problems/not-boring-movies/', difficulty: 'easy', category: 'SQL Aggregate', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-avg-selling-price', title: 'Average Selling Price', url: 'https://leetcode.com/problems/average-selling-price/', difficulty: 'easy', category: 'SQL Aggregate', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-consecutive-numbers', title: 'Consecutive Numbers', url: 'https://leetcode.com/problems/consecutive-numbers/', difficulty: 'medium', category: 'SQL Advanced', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-dept-top-3-salaries', title: 'Department Top Three Salaries', url: 'https://leetcode.com/problems/department-top-three-salaries/', difficulty: 'hard', category: 'SQL Advanced', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-second-highest-salary', title: 'Second Highest Salary', url: 'https://leetcode.com/problems/second-highest-salary/', difficulty: 'medium', category: 'SQL Subquery', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-delete-dup-emails', title: 'Delete Duplicate Emails', url: 'https://leetcode.com/problems/delete-duplicate-emails/', difficulty: 'easy', category: 'SQL String', source: 'LeetCode SQL 50', tags: ['SQL', 'Database'] },
    { id: 'sql-valid-emails', title: 'Find Users With Valid E-Mails', url: 'https://leetcode.com/problems/find-users-with-valid-e-mails/', difficulty: 'easy', category: 'SQL String', source: 'LeetCode SQL 50', tags: ['SQL', 'Database', 'Regex'] },
];

// ============================================
// CODECHEF TCS CODEVITA PROBLEMS
// ============================================
export const codechefTCSProblems: IntegratedProblem[] = [
    // 2020 Problems
    { id: 'cc-consecutive-prime', title: 'Consecutive Prime Sum', url: 'https://www.codechef.com/practice/tcs-interview-questions', difficulty: 'medium', category: 'TCS Codevita 2020', source: 'CodeChef TCS', tags: ['Math', 'Prime Numbers'] },
    { id: 'cc-constellation', title: 'Constellation Problem', url: 'https://www.codechef.com/practice/tcs-interview-questions', difficulty: 'medium', category: 'TCS Codevita 2020', source: 'CodeChef TCS', tags: ['Geometry', 'Graphs'] },
    { id: 'cc-beetle-distance', title: 'Distance Traveled by Beetle', url: 'https://www.codechef.com/practice/tcs-interview-questions', difficulty: 'medium', category: 'TCS Codevita 2020', source: 'CodeChef TCS', tags: ['Math', 'Simulation'] },
    { id: 'cc-rock-samples', title: 'Counting Rock Samples', url: 'https://www.codechef.com/practice/tcs-interview-questions', difficulty: 'medium', category: 'TCS Codevita 2020', source: 'CodeChef TCS', tags: ['Counting', 'Hash Table'] },
    { id: 'cc-cave', title: 'Maneuvering a Cave', url: 'https://www.codechef.com/practice/tcs-interview-questions', difficulty: 'medium', category: 'TCS Codevita 2020', source: 'CodeChef TCS', tags: ['BFS', 'Graph'] },
    { id: 'cc-prime-time', title: 'Prime Time Again', url: 'https://www.codechef.com/practice/tcs-interview-questions', difficulty: 'medium', category: 'TCS Codevita 2020', source: 'CodeChef TCS', tags: ['Math', 'Prime Numbers'] },
    { id: 'cc-min-gifts', title: 'Minimum Gifts', url: 'https://www.codechef.com/practice/tcs-interview-questions', difficulty: 'medium', category: 'TCS Codevita 2020', source: 'CodeChef TCS', tags: ['Greedy', 'Arrays'] },
];

// ============================================
// TCS NQT APTITUDE QUESTIONS
// ============================================
export const tcsAptitudeQuestions = [
    { id: 'apt-ratio-boys-girls', question: 'Average height of boys is 165cm, girls is 155cm. Class average is 160cm. Ratio of boys to girls?', answer: '3:2', topic: 'Ratios & Averages', formula: 'Weighted average formula' },
    { id: 'apt-linear-eq', question: 'If x + y = 10 and 3x – 2y = 4, find x', answer: '4', topic: 'Algebra', formula: 'Substitution method' },
    { id: 'apt-fractions', question: 'Difference between a number and its two-fifths is 400. Find the number.', answer: '1000', topic: 'Fractions', formula: 'N - 2/5N = 400' },
    { id: 'apt-speed-distance', question: 'Train travels 360km in 5 hours. Speed?', answer: '72 km/h', topic: 'Speed & Distance', formula: 'Speed = Distance/Time' },
    { id: 'apt-percentages-1', question: '20% of a number is 50, what is 40% of same number?', answer: '100', topic: 'Percentages', formula: 'N = 50/0.20 = 250, then 0.40 × 250' },
    { id: 'apt-profit-loss', question: 'Article sold for $450 with 10% loss. Cost price?', answer: '$500', topic: 'Profit & Loss', formula: 'SP = CP - 0.10CP' },
    { id: 'apt-square-root', question: 'Simplify: √(64 – 9) + √(25 + 16)', answer: '√55 + √41', topic: 'Square Roots', formula: 'Simplify inside first' },
    { id: 'apt-linear-eq-2', question: 'If 2x – 3 = 7, find x', answer: '5', topic: 'Algebra', formula: '2x = 10, x = 5' },
    { id: 'apt-area-rectangle', question: 'Rectangle base 12cm, height 8cm. Area?', answer: '96 cm²', topic: 'Geometry', formula: 'Area = length × width' },
    { id: 'apt-exponents', question: 'Find 2³ × 3²', answer: '72', topic: 'Exponents', formula: '8 × 9 = 72' },
    { id: 'apt-speed-ms', question: 'Car travels 540km in 6 hours. Speed in m/s?', answer: '25 m/s', topic: 'Unit Conversion', formula: '90 km/h × 1000/3600' },
    { id: 'apt-percentages-2', question: '25% of a number is 75, what is 50%?', answer: '150', topic: 'Percentages', formula: 'N = 300' },
    { id: 'apt-profit-cost', question: 'Shirt sold for $30 with 15% profit. Cost price?', answer: '$26.09', topic: 'Profit & Loss', formula: '30 = C + 0.15C' },
    { id: 'apt-linear-eq-3', question: '5x + 8 = 23. Find x', answer: '3', topic: 'Algebra', formula: '5x = 15' },
    { id: 'apt-square-side', question: 'Area of square is 121 sq units. Side length?', answer: '11 units', topic: 'Geometry', formula: 'Side = √Area' },
    { id: 'apt-percentages-3', question: '60% of a number is 120, what is 80%?', answer: '160', topic: 'Percentages', formula: 'N = 200' },
    { id: 'apt-circumference', question: 'Circle diameter 14cm. Circumference?', answer: '43.96 cm', topic: 'Geometry', formula: 'C = πd' },
    { id: 'apt-fractions-mult', question: 'Simplify: (2/5) × (5/8)', answer: '1/4', topic: 'Fractions', formula: 'Multiply numerators & denominators' },
    { id: 'apt-simultaneous', question: 'x – 3y = 7 and 4x + y = 19. Find x', answer: '10', topic: 'Algebra', formula: 'Substitution' },
    { id: 'apt-fractions-diff', question: 'Difference between number and its three-seventh is 200. Find number.', answer: '350', topic: 'Fractions', formula: 'N - 3/7N = 200' },
];

// ============================================
// COMBINE ALL PROBLEMS
// ============================================
export const allIntegratedProblems = [
    ...leetcode150Problems,
    ...sqlProblems,
    ...codechefTCSProblems,
];

export const integratedStats = {
    totalProblems: allIntegratedProblems.length,
    leetcode150: leetcode150Problems.length,
    sql50: sqlProblems.length,
    codechefTCS: codechefTCSProblems.length,
    aptitudeQuestions: tcsAptitudeQuestions.length,
    sources: ['LeetCode Top Interview 150', 'LeetCode SQL 50', 'CodeChef TCS Codevita', 'TCS NQT Aptitude']
};

// Filter by source
export function getProblemsBySource(source: string): IntegratedProblem[] {
    return allIntegratedProblems.filter(p => p.source === source);
}

// Get all categories
export function getCategories(): string[] {
    const cats = new Set(allIntegratedProblems.map(p => p.category));
    return Array.from(cats).sort();
}
