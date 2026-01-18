// COMPREHENSIVE PROBLEM CATALOG - 200+ LeetCode Problems
// Full coverage: Grind 75, NeetCode 150, Top Interview Questions

export interface CatalogProblem {
    id: string;
    title: string;
    url: string;
    difficulty: 'easy' | 'medium' | 'hard';
    topic: string;
    pattern: string;
    companies: string[];
    tags: string[];
}

// ============================================
// ARRAYS & HASHING (25 problems)
// ============================================
export const arrayProblems: CatalogProblem[] = [
    { id: 'two-sum', title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/', difficulty: 'easy', topic: 'arrays', pattern: 'hash-table', companies: ['Google', 'Amazon', 'Meta', 'Apple', 'Microsoft'], tags: ['Array', 'Hash Table'] },
    { id: 'best-time-buy-sell', title: 'Best Time to Buy and Sell Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', difficulty: 'easy', topic: 'arrays', pattern: 'sliding-window', companies: ['Amazon', 'Meta', 'Goldman Sachs'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'contains-duplicate', title: 'Contains Duplicate', url: 'https://leetcode.com/problems/contains-duplicate/', difficulty: 'easy', topic: 'arrays', pattern: 'hash-table', companies: ['Google', 'Amazon', 'Apple'], tags: ['Array', 'Hash Table', 'Sorting'] },
    { id: 'product-except-self', title: 'Product of Array Except Self', url: 'https://leetcode.com/problems/product-of-array-except-self/', difficulty: 'medium', topic: 'arrays', pattern: 'prefix-sum', companies: ['Amazon', 'Meta', 'Apple', 'Microsoft'], tags: ['Array', 'Prefix Sum'] },
    { id: 'maximum-subarray', title: 'Maximum Subarray', url: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'medium', topic: 'arrays', pattern: 'kadanes', companies: ['Amazon', 'Microsoft', 'LinkedIn'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'maximum-product-subarray', title: 'Maximum Product Subarray', url: 'https://leetcode.com/problems/maximum-product-subarray/', difficulty: 'medium', topic: 'arrays', pattern: 'dynamic-programming', companies: ['Amazon', 'LinkedIn'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'find-min-rotated', title: 'Find Minimum in Rotated Sorted Array', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', difficulty: 'medium', topic: 'arrays', pattern: 'binary-search', companies: ['Amazon', 'Meta', 'Microsoft'], tags: ['Array', 'Binary Search'] },
    { id: 'search-rotated', title: 'Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', difficulty: 'medium', topic: 'arrays', pattern: 'binary-search', companies: ['Amazon', 'Meta', 'Microsoft'], tags: ['Array', 'Binary Search'] },
    { id: 'three-sum', title: '3Sum', url: 'https://leetcode.com/problems/3sum/', difficulty: 'medium', topic: 'arrays', pattern: 'two-pointers', companies: ['Amazon', 'Meta', 'Google'], tags: ['Array', 'Two Pointers', 'Sorting'] },
    { id: 'container-water', title: 'Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'medium', topic: 'arrays', pattern: 'two-pointers', companies: ['Amazon', 'Google', 'Meta'], tags: ['Array', 'Two Pointers'] },
    { id: 'majority-element', title: 'Majority Element', url: 'https://leetcode.com/problems/majority-element/', difficulty: 'easy', topic: 'arrays', pattern: 'boyer-moore', companies: ['Amazon', 'Google'], tags: ['Array', 'Hash Table', 'Divide and Conquer'] },
    { id: 'move-zeroes', title: 'Move Zeroes', url: 'https://leetcode.com/problems/move-zeroes/', difficulty: 'easy', topic: 'arrays', pattern: 'two-pointers', companies: ['Meta', 'Apple'], tags: ['Array', 'Two Pointers'] },
    { id: 'rotate-array', title: 'Rotate Array', url: 'https://leetcode.com/problems/rotate-array/', difficulty: 'medium', topic: 'arrays', pattern: 'reversal', companies: ['Microsoft', 'Amazon'], tags: ['Array', 'Math'] },
    { id: 'remove-duplicates', title: 'Remove Duplicates from Sorted Array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', difficulty: 'easy', topic: 'arrays', pattern: 'two-pointers', companies: ['Meta', 'Amazon'], tags: ['Array', 'Two Pointers'] },
    { id: 'plus-one', title: 'Plus One', url: 'https://leetcode.com/problems/plus-one/', difficulty: 'easy', topic: 'arrays', pattern: 'math', companies: ['Google', 'Amazon'], tags: ['Array', 'Math'] },
    { id: 'single-number', title: 'Single Number', url: 'https://leetcode.com/problems/single-number/', difficulty: 'easy', topic: 'arrays', pattern: 'xor', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Bit Manipulation'] },
    { id: 'intersection-two-arrays', title: 'Intersection of Two Arrays II', url: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/', difficulty: 'easy', topic: 'arrays', pattern: 'hash-table', companies: ['Meta', 'Amazon'], tags: ['Array', 'Hash Table', 'Sorting'] },
    { id: 'pascal-triangle', title: "Pascal's Triangle", url: 'https://leetcode.com/problems/pascals-triangle/', difficulty: 'easy', topic: 'arrays', pattern: 'simulation', companies: ['Amazon', 'Google'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'first-missing-positive', title: 'First Missing Positive', url: 'https://leetcode.com/problems/first-missing-positive/', difficulty: 'hard', topic: 'arrays', pattern: 'cyclic-sort', companies: ['Amazon', 'Google', 'Microsoft'], tags: ['Array', 'Hash Table'] },
    { id: 'trapping-rain-water', title: 'Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/', difficulty: 'hard', topic: 'arrays', pattern: 'two-pointers', companies: ['Amazon', 'Google', 'Meta', 'Microsoft'], tags: ['Array', 'Two Pointers', 'Stack'] },
    { id: 'next-permutation', title: 'Next Permutation', url: 'https://leetcode.com/problems/next-permutation/', difficulty: 'medium', topic: 'arrays', pattern: 'two-pointers', companies: ['Google', 'Meta', 'Amazon'], tags: ['Array', 'Two Pointers'] },
    { id: 'merge-sorted-array', title: 'Merge Sorted Array', url: 'https://leetcode.com/problems/merge-sorted-array/', difficulty: 'easy', topic: 'arrays', pattern: 'two-pointers', companies: ['Meta', 'Amazon', 'Microsoft'], tags: ['Array', 'Two Pointers', 'Sorting'] },
    { id: 'subarray-sum-k', title: 'Subarray Sum Equals K', url: 'https://leetcode.com/problems/subarray-sum-equals-k/', difficulty: 'medium', topic: 'arrays', pattern: 'prefix-sum', companies: ['Meta', 'Google', 'Amazon'], tags: ['Array', 'Hash Table', 'Prefix Sum'] },
    { id: 'top-k-frequent', title: 'Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/', difficulty: 'medium', topic: 'arrays', pattern: 'heap', companies: ['Amazon', 'Meta', 'Google'], tags: ['Array', 'Hash Table', 'Heap'] },
    { id: 'kth-largest', title: 'Kth Largest Element in an Array', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', difficulty: 'medium', topic: 'arrays', pattern: 'quickselect', companies: ['Meta', 'Amazon', 'Microsoft'], tags: ['Array', 'Heap', 'Quickselect'] },
];

// ============================================
// TWO POINTERS (15 problems)
// ============================================
export const twoPointerProblems: CatalogProblem[] = [
    { id: 'valid-palindrome', title: 'Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/', difficulty: 'easy', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Meta', 'Microsoft'], tags: ['Two Pointers', 'String'] },
    { id: 'two-sum-ii', title: 'Two Sum II - Input Array Is Sorted', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/', difficulty: 'medium', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Amazon', 'Meta'], tags: ['Array', 'Two Pointers', 'Binary Search'] },
    { id: 'three-sum-closest', title: '3Sum Closest', url: 'https://leetcode.com/problems/3sum-closest/', difficulty: 'medium', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Amazon', 'Meta', 'Google'], tags: ['Array', 'Two Pointers', 'Sorting'] },
    { id: 'squares-sorted-array', title: 'Squares of a Sorted Array', url: 'https://leetcode.com/problems/squares-of-a-sorted-array/', difficulty: 'easy', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Meta', 'Amazon'], tags: ['Array', 'Two Pointers', 'Sorting'] },
    { id: 'sort-colors', title: 'Sort Colors', url: 'https://leetcode.com/problems/sort-colors/', difficulty: 'medium', topic: 'two-pointers', pattern: 'dutch-flag', companies: ['Amazon', 'Microsoft', 'Meta'], tags: ['Array', 'Two Pointers', 'Sorting'] },
    { id: 'four-sum', title: '4Sum', url: 'https://leetcode.com/problems/4sum/', difficulty: 'medium', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Amazon', 'Meta'], tags: ['Array', 'Two Pointers', 'Sorting'] },
    { id: 'remove-element', title: 'Remove Element', url: 'https://leetcode.com/problems/remove-element/', difficulty: 'easy', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Two Pointers'] },
    { id: 'backspace-compare', title: 'Backspace String Compare', url: 'https://leetcode.com/problems/backspace-string-compare/', difficulty: 'easy', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Google', 'Meta'], tags: ['Two Pointers', 'String', 'Stack'] },
    { id: 'boats-save-people', title: 'Boats to Save People', url: 'https://leetcode.com/problems/boats-to-save-people/', difficulty: 'medium', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Amazon', 'Google'], tags: ['Array', 'Two Pointers', 'Greedy', 'Sorting'] },
    { id: 'partition-labels', title: 'Partition Labels', url: 'https://leetcode.com/problems/partition-labels/', difficulty: 'medium', topic: 'two-pointers', pattern: 'greedy', companies: ['Amazon', 'Google'], tags: ['Hash Table', 'Two Pointers', 'String', 'Greedy'] },
    { id: 'long-pressed-name', title: 'Long Pressed Name', url: 'https://leetcode.com/problems/long-pressed-name/', difficulty: 'easy', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Google'], tags: ['Two Pointers', 'String'] },
    { id: 'interval-list-intersections', title: 'Interval List Intersections', url: 'https://leetcode.com/problems/interval-list-intersections/', difficulty: 'medium', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Meta', 'Google'], tags: ['Array', 'Two Pointers'] },
    { id: 'is-subsequence', title: 'Is Subsequence', url: 'https://leetcode.com/problems/is-subsequence/', difficulty: 'easy', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Google', 'Apple'], tags: ['Two Pointers', 'String', 'Dynamic Programming'] },
    { id: 'shortest-unsorted-subarray', title: 'Shortest Unsorted Continuous Subarray', url: 'https://leetcode.com/problems/shortest-unsorted-continuous-subarray/', difficulty: 'medium', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Amazon', 'Meta'], tags: ['Array', 'Two Pointers', 'Stack', 'Sorting'] },
    { id: 'reverse-string', title: 'Reverse String', url: 'https://leetcode.com/problems/reverse-string/', difficulty: 'easy', topic: 'two-pointers', pattern: 'two-pointers', companies: ['Amazon', 'Microsoft'], tags: ['Two Pointers', 'String'] },
];

// ============================================
// SLIDING WINDOW (12 problems)
// ============================================
export const slidingWindowProblems: CatalogProblem[] = [
    { id: 'longest-substring', title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Amazon', 'Meta', 'Microsoft', 'Google'], tags: ['Hash Table', 'String', 'Sliding Window'] },
    { id: 'longest-repeating-replacement', title: 'Longest Repeating Character Replacement', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Google', 'Amazon'], tags: ['Hash Table', 'String', 'Sliding Window'] },
    { id: 'min-window', title: 'Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/', difficulty: 'hard', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Meta', 'Amazon', 'Google', 'Microsoft'], tags: ['Hash Table', 'String', 'Sliding Window'] },
    { id: 'permutation-string', title: 'Permutation in String', url: 'https://leetcode.com/problems/permutation-in-string/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Microsoft', 'Amazon'], tags: ['Hash Table', 'Two Pointers', 'String', 'Sliding Window'] },
    { id: 'max-consecutive-ones-iii', title: 'Max Consecutive Ones III', url: 'https://leetcode.com/problems/max-consecutive-ones-iii/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Meta', 'Google'], tags: ['Array', 'Binary Search', 'Sliding Window', 'Prefix Sum'] },
    { id: 'fruit-baskets', title: 'Fruit Into Baskets', url: 'https://leetcode.com/problems/fruit-into-baskets/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Google'], tags: ['Array', 'Hash Table', 'Sliding Window'] },
    { id: 'find-all-anagrams', title: 'Find All Anagrams in a String', url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Amazon', 'Meta'], tags: ['Hash Table', 'String', 'Sliding Window'] },
    { id: 'substring-concat', title: 'Substring with Concatenation of All Words', url: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/', difficulty: 'hard', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Amazon', 'Google'], tags: ['Hash Table', 'String', 'Sliding Window'] },
    { id: 'sliding-window-max', title: 'Sliding Window Maximum', url: 'https://leetcode.com/problems/sliding-window-maximum/', difficulty: 'hard', topic: 'sliding-window', pattern: 'monotonic-deque', companies: ['Amazon', 'Google', 'Meta'], tags: ['Array', 'Queue', 'Sliding Window', 'Heap', 'Monotonic Queue'] },
    { id: 'min-size-subarray', title: 'Minimum Size Subarray Sum', url: 'https://leetcode.com/problems/minimum-size-subarray-sum/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Meta', 'Amazon'], tags: ['Array', 'Binary Search', 'Sliding Window', 'Prefix Sum'] },
    { id: 'grumpy-bookstore', title: 'Grumpy Bookstore Owner', url: 'https://leetcode.com/problems/grumpy-bookstore-owner/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Amazon'], tags: ['Array', 'Sliding Window'] },
    { id: 'max-points-cards', title: 'Maximum Points You Can Obtain from Cards', url: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/', difficulty: 'medium', topic: 'sliding-window', pattern: 'sliding-window', companies: ['Google', 'Amazon'], tags: ['Array', 'Sliding Window', 'Prefix Sum'] },
];

// ============================================
// STACK (12 problems)
// ============================================
export const stackProblems: CatalogProblem[] = [
    { id: 'valid-parentheses', title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/', difficulty: 'easy', topic: 'stack', pattern: 'stack', companies: ['Amazon', 'Meta', 'Microsoft', 'Google'], tags: ['String', 'Stack'] },
    { id: 'min-stack', title: 'Min Stack', url: 'https://leetcode.com/problems/min-stack/', difficulty: 'medium', topic: 'stack', pattern: 'stack', companies: ['Amazon', 'Microsoft', 'Google'], tags: ['Stack', 'Design'] },
    { id: 'eval-rpn', title: 'Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', difficulty: 'medium', topic: 'stack', pattern: 'stack', companies: ['Amazon', 'LinkedIn'], tags: ['Array', 'Math', 'Stack'] },
    { id: 'generate-parentheses', title: 'Generate Parentheses', url: 'https://leetcode.com/problems/generate-parentheses/', difficulty: 'medium', topic: 'stack', pattern: 'backtracking', companies: ['Amazon', 'Google', 'Meta'], tags: ['String', 'Dynamic Programming', 'Backtracking'] },
    { id: 'daily-temperatures', title: 'Daily Temperatures', url: 'https://leetcode.com/problems/daily-temperatures/', difficulty: 'medium', topic: 'stack', pattern: 'monotonic-stack', companies: ['Meta', 'Amazon'], tags: ['Array', 'Stack', 'Monotonic Stack'] },
    { id: 'car-fleet', title: 'Car Fleet', url: 'https://leetcode.com/problems/car-fleet/', difficulty: 'medium', topic: 'stack', pattern: 'monotonic-stack', companies: ['Google'], tags: ['Array', 'Stack', 'Sorting', 'Monotonic Stack'] },
    { id: 'largest-rectangle', title: 'Largest Rectangle in Histogram', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', difficulty: 'hard', topic: 'stack', pattern: 'monotonic-stack', companies: ['Amazon', 'Google', 'Meta'], tags: ['Array', 'Stack', 'Monotonic Stack'] },
    { id: 'basic-calculator', title: 'Basic Calculator', url: 'https://leetcode.com/problems/basic-calculator/', difficulty: 'hard', topic: 'stack', pattern: 'stack', companies: ['Amazon', 'Meta', 'Google'], tags: ['Math', 'String', 'Stack', 'Recursion'] },
    { id: 'decode-string', title: 'Decode String', url: 'https://leetcode.com/problems/decode-string/', difficulty: 'medium', topic: 'stack', pattern: 'stack', companies: ['Google', 'Amazon', 'Meta'], tags: ['String', 'Stack', 'Recursion'] },
    { id: 'next-greater-element', title: 'Next Greater Element I', url: 'https://leetcode.com/problems/next-greater-element-i/', difficulty: 'easy', topic: 'stack', pattern: 'monotonic-stack', companies: ['Amazon'], tags: ['Array', 'Hash Table', 'Stack', 'Monotonic Stack'] },
    { id: 'asteroid-collision', title: 'Asteroid Collision', url: 'https://leetcode.com/problems/asteroid-collision/', difficulty: 'medium', topic: 'stack', pattern: 'stack', companies: ['Uber', 'Amazon'], tags: ['Array', 'Stack', 'Simulation'] },
    { id: 'remove-adjacent-duplicates', title: 'Remove All Adjacent Duplicates In String', url: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/', difficulty: 'easy', topic: 'stack', pattern: 'stack', companies: ['Meta', 'Amazon'], tags: ['String', 'Stack'] },
];

// ============================================
// BINARY SEARCH (15 problems)
// ============================================
export const binarySearchProblems: CatalogProblem[] = [
    { id: 'binary-search', title: 'Binary Search', url: 'https://leetcode.com/problems/binary-search/', difficulty: 'easy', topic: 'binary-search', pattern: 'binary-search', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Binary Search'] },
    { id: 'search-2d-matrix', title: 'Search a 2D Matrix', url: 'https://leetcode.com/problems/search-a-2d-matrix/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Amazon', 'Microsoft', 'Meta'], tags: ['Array', 'Binary Search', 'Matrix'] },
    { id: 'koko-bananas', title: 'Koko Eating Bananas', url: 'https://leetcode.com/problems/koko-eating-bananas/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Google', 'Meta'], tags: ['Array', 'Binary Search'] },
    { id: 'find-peak-element', title: 'Find Peak Element', url: 'https://leetcode.com/problems/find-peak-element/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Meta', 'Google', 'Amazon'], tags: ['Array', 'Binary Search'] },
    { id: 'time-based-kv', title: 'Time Based Key-Value Store', url: 'https://leetcode.com/problems/time-based-key-value-store/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Google', 'Amazon'], tags: ['Hash Table', 'String', 'Binary Search', 'Design'] },
    { id: 'median-two-arrays', title: 'Median of Two Sorted Arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', difficulty: 'hard', topic: 'binary-search', pattern: 'binary-search', companies: ['Amazon', 'Google', 'Meta', 'Microsoft'], tags: ['Array', 'Binary Search', 'Divide and Conquer'] },
    { id: 'first-last-position', title: 'Find First and Last Position of Element in Sorted Array', url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Meta', 'Google', 'Amazon'], tags: ['Array', 'Binary Search'] },
    { id: 'search-2d-matrix-ii', title: 'Search a 2D Matrix II', url: 'https://leetcode.com/problems/search-a-2d-matrix-ii/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Binary Search', 'Divide and Conquer', 'Matrix'] },
    { id: 'sqrt-x', title: 'Sqrt(x)', url: 'https://leetcode.com/problems/sqrtx/', difficulty: 'easy', topic: 'binary-search', pattern: 'binary-search', companies: ['Amazon', 'Microsoft', 'Apple'], tags: ['Math', 'Binary Search'] },
    { id: 'guess-number', title: 'Guess Number Higher or Lower', url: 'https://leetcode.com/problems/guess-number-higher-or-lower/', difficulty: 'easy', topic: 'binary-search', pattern: 'binary-search', companies: ['Apple', 'Google'], tags: ['Binary Search', 'Interactive'] },
    { id: 'capacity-ship', title: 'Capacity To Ship Packages Within D Days', url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Amazon', 'Google'], tags: ['Array', 'Binary Search'] },
    { id: 'split-array-largest', title: 'Split Array Largest Sum', url: 'https://leetcode.com/problems/split-array-largest-sum/', difficulty: 'hard', topic: 'binary-search', pattern: 'binary-search', companies: ['Google', 'Amazon'], tags: ['Array', 'Binary Search', 'Dynamic Programming', 'Greedy'] },
    { id: 'min-days-bouquets', title: 'Minimum Number of Days to Make m Bouquets', url: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Google', 'Amazon'], tags: ['Array', 'Binary Search'] },
    { id: 'single-element-sorted', title: 'Single Element in a Sorted Array', url: 'https://leetcode.com/problems/single-element-in-a-sorted-array/', difficulty: 'medium', topic: 'binary-search', pattern: 'binary-search', companies: ['Amazon', 'Google', 'Meta'], tags: ['Array', 'Binary Search'] },
    { id: 'search-insert-position', title: 'Search Insert Position', url: 'https://leetcode.com/problems/search-insert-position/', difficulty: 'easy', topic: 'binary-search', pattern: 'binary-search', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Binary Search'] },
];

// ============================================
// LINKED LIST (15 problems)
// ============================================
export const linkedListProblems: CatalogProblem[] = [
    { id: 'reverse-list', title: 'Reverse Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/', difficulty: 'easy', topic: 'linked-list', pattern: 'reversal', companies: ['Amazon', 'Microsoft', 'Apple'], tags: ['Linked List', 'Recursion'] },
    { id: 'merge-two-lists', title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'easy', topic: 'linked-list', pattern: 'merge', companies: ['Amazon', 'Microsoft', 'Apple'], tags: ['Linked List', 'Recursion'] },
    { id: 'linked-list-cycle', title: 'Linked List Cycle', url: 'https://leetcode.com/problems/linked-list-cycle/', difficulty: 'easy', topic: 'linked-list', pattern: 'two-pointers', companies: ['Amazon', 'Microsoft'], tags: ['Hash Table', 'Linked List', 'Two Pointers'] },
    { id: 'reorder-list', title: 'Reorder List', url: 'https://leetcode.com/problems/reorder-list/', difficulty: 'medium', topic: 'linked-list', pattern: 'reversal', companies: ['Amazon', 'Meta'], tags: ['Linked List', 'Two Pointers', 'Stack'] },
    { id: 'remove-nth', title: 'Remove Nth Node From End of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', difficulty: 'medium', topic: 'linked-list', pattern: 'two-pointers', companies: ['Amazon', 'Meta'], tags: ['Linked List', 'Two Pointers'] },
    { id: 'copy-random', title: 'Copy List with Random Pointer', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/', difficulty: 'medium', topic: 'linked-list', pattern: 'hash-table', companies: ['Meta', 'Amazon', 'Microsoft'], tags: ['Hash Table', 'Linked List'] },
    { id: 'add-two-numbers', title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/', difficulty: 'medium', topic: 'linked-list', pattern: 'math', companies: ['Amazon', 'Microsoft', 'Google', 'Meta'], tags: ['Linked List', 'Math', 'Recursion'] },
    { id: 'linked-list-cycle-ii', title: 'Linked List Cycle II', url: 'https://leetcode.com/problems/linked-list-cycle-ii/', difficulty: 'medium', topic: 'linked-list', pattern: 'two-pointers', companies: ['Amazon', 'Microsoft'], tags: ['Hash Table', 'Linked List', 'Two Pointers'] },
    { id: 'find-duplicate', title: 'Find the Duplicate Number', url: 'https://leetcode.com/problems/find-the-duplicate-number/', difficulty: 'medium', topic: 'linked-list', pattern: 'floyd', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Two Pointers', 'Binary Search', 'Bit Manipulation'] },
    { id: 'lru-cache', title: 'LRU Cache', url: 'https://leetcode.com/problems/lru-cache/', difficulty: 'medium', topic: 'linked-list', pattern: 'design', companies: ['Amazon', 'Meta', 'Microsoft', 'Google'], tags: ['Hash Table', 'Linked List', 'Design', 'Doubly-Linked List'] },
    { id: 'merge-k-lists', title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/', difficulty: 'hard', topic: 'linked-list', pattern: 'heap', companies: ['Amazon', 'Meta', 'Microsoft', 'Google'], tags: ['Linked List', 'Divide and Conquer', 'Heap'] },
    { id: 'reverse-nodes-k', title: 'Reverse Nodes in k-Group', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', difficulty: 'hard', topic: 'linked-list', pattern: 'reversal', companies: ['Amazon', 'Meta', 'Microsoft'], tags: ['Linked List', 'Recursion'] },
    { id: 'middle-linked-list', title: 'Middle of the Linked List', url: 'https://leetcode.com/problems/middle-of-the-linked-list/', difficulty: 'easy', topic: 'linked-list', pattern: 'two-pointers', companies: ['Amazon', 'Meta'], tags: ['Linked List', 'Two Pointers'] },
    { id: 'palindrome-list', title: 'Palindrome Linked List', url: 'https://leetcode.com/problems/palindrome-linked-list/', difficulty: 'easy', topic: 'linked-list', pattern: 'two-pointers', companies: ['Amazon', 'Meta'], tags: ['Linked List', 'Two Pointers', 'Stack', 'Recursion'] },
    { id: 'intersection-two-lists', title: 'Intersection of Two Linked Lists', url: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', difficulty: 'easy', topic: 'linked-list', pattern: 'two-pointers', companies: ['Amazon', 'Microsoft'], tags: ['Hash Table', 'Linked List', 'Two Pointers'] },
];


// ============================================
// TREES (20 problems)
// ============================================
export const treeProblems: CatalogProblem[] = [
    { id: 'invert-tree', title: 'Invert Binary Tree', url: 'https://leetcode.com/problems/invert-binary-tree/', difficulty: 'easy', topic: 'trees', pattern: 'dfs', companies: ['Google', 'Amazon'], tags: ['Tree', 'DFS', 'BFS'] },
    { id: 'max-depth', title: 'Maximum Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', difficulty: 'easy', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Microsoft'], tags: ['Tree', 'DFS', 'BFS'] },
    { id: 'same-tree', title: 'Same Tree', url: 'https://leetcode.com/problems/same-tree/', difficulty: 'easy', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Meta'], tags: ['Tree', 'DFS', 'BFS'] },
    { id: 'subtree', title: 'Subtree of Another Tree', url: 'https://leetcode.com/problems/subtree-of-another-tree/', difficulty: 'easy', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Meta'], tags: ['Tree', 'DFS'] },
    { id: 'lca-bst', title: 'Lowest Common Ancestor of a BST', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', difficulty: 'medium', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Meta'], tags: ['Tree', 'DFS', 'BST'] },
    { id: 'level-order', title: 'Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', difficulty: 'medium', topic: 'trees', pattern: 'bfs', companies: ['Amazon', 'Meta', 'Microsoft'], tags: ['Tree', 'BFS'] },
    { id: 'right-side-view', title: 'Binary Tree Right Side View', url: 'https://leetcode.com/problems/binary-tree-right-side-view/', difficulty: 'medium', topic: 'trees', pattern: 'bfs', companies: ['Meta', 'Amazon'], tags: ['Tree', 'DFS', 'BFS'] },
    { id: 'count-good-nodes', title: 'Count Good Nodes in Binary Tree', url: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/', difficulty: 'medium', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Microsoft'], tags: ['Tree', 'DFS', 'BFS'] },
    { id: 'validate-bst', title: 'Validate Binary Search Tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/', difficulty: 'medium', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Meta', 'Microsoft'], tags: ['Tree', 'DFS', 'BST'] },
    { id: 'kth-smallest-bst', title: 'Kth Smallest Element in a BST', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', difficulty: 'medium', topic: 'trees', pattern: 'inorder', companies: ['Amazon', 'Meta'], tags: ['Tree', 'DFS', 'BST'] },
    { id: 'construct-tree', title: 'Construct Binary Tree from Preorder and Inorder', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', difficulty: 'medium', topic: 'trees', pattern: 'divide-conquer', companies: ['Amazon', 'Meta'], tags: ['Array', 'Tree', 'Divide and Conquer'] },
    { id: 'max-path-sum', title: 'Binary Tree Maximum Path Sum', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', difficulty: 'hard', topic: 'trees', pattern: 'dfs', companies: ['Meta', 'Google', 'Amazon'], tags: ['Tree', 'DFS', 'Dynamic Programming'] },
    { id: 'serialize-tree', title: 'Serialize and Deserialize Binary Tree', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', difficulty: 'hard', topic: 'trees', pattern: 'dfs', companies: ['Meta', 'Amazon', 'Google'], tags: ['Tree', 'DFS', 'BFS', 'Design'] },
    { id: 'diameter-tree', title: 'Diameter of Binary Tree', url: 'https://leetcode.com/problems/diameter-of-binary-tree/', difficulty: 'easy', topic: 'trees', pattern: 'dfs', companies: ['Meta', 'Amazon'], tags: ['Tree', 'DFS'] },
    { id: 'balanced-tree', title: 'Balanced Binary Tree', url: 'https://leetcode.com/problems/balanced-binary-tree/', difficulty: 'easy', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Google'], tags: ['Tree', 'DFS'] },
    { id: 'path-sum', title: 'Path Sum', url: 'https://leetcode.com/problems/path-sum/', difficulty: 'easy', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Microsoft'], tags: ['Tree', 'DFS', 'BFS'] },
    { id: 'path-sum-ii', title: 'Path Sum II', url: 'https://leetcode.com/problems/path-sum-ii/', difficulty: 'medium', topic: 'trees', pattern: 'backtracking', companies: ['Amazon', 'Meta'], tags: ['Tree', 'DFS', 'Backtracking'] },
    { id: 'populating-next-right', title: 'Populating Next Right Pointers', url: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/', difficulty: 'medium', topic: 'trees', pattern: 'bfs', companies: ['Meta', 'Amazon'], tags: ['Tree', 'DFS', 'BFS'] },
    { id: 'flatten-tree', title: 'Flatten Binary Tree to Linked List', url: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/', difficulty: 'medium', topic: 'trees', pattern: 'dfs', companies: ['Meta', 'Amazon'], tags: ['Tree', 'DFS', 'Stack'] },
    { id: 'sum-root-leaf', title: 'Sum Root to Leaf Numbers', url: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/', difficulty: 'medium', topic: 'trees', pattern: 'dfs', companies: ['Amazon', 'Meta'], tags: ['Tree', 'DFS'] },
];

// ============================================
// GRAPHS (20 problems)
// ============================================
export const graphProblems: CatalogProblem[] = [
    { id: 'number-of-islands', title: 'Number of Islands', url: 'https://leetcode.com/problems/number-of-islands/', difficulty: 'medium', topic: 'graphs', pattern: 'dfs-bfs', companies: ['Amazon', 'Meta', 'Microsoft', 'Google'], tags: ['Array', 'DFS', 'BFS', 'Union Find'] },
    { id: 'clone-graph', title: 'Clone Graph', url: 'https://leetcode.com/problems/clone-graph/', difficulty: 'medium', topic: 'graphs', pattern: 'dfs', companies: ['Meta', 'Amazon', 'Google'], tags: ['Hash Table', 'DFS', 'BFS', 'Graph'] },
    { id: 'max-area-island', title: 'Max Area of Island', url: 'https://leetcode.com/problems/max-area-of-island/', difficulty: 'medium', topic: 'graphs', pattern: 'dfs', companies: ['Amazon', 'Meta'], tags: ['Array', 'DFS', 'BFS', 'Matrix'] },
    { id: 'pacific-atlantic', title: 'Pacific Atlantic Water Flow', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', difficulty: 'medium', topic: 'graphs', pattern: 'dfs', companies: ['Amazon', 'Google'], tags: ['Array', 'DFS', 'BFS', 'Matrix'] },
    { id: 'surrounded-regions', title: 'Surrounded Regions', url: 'https://leetcode.com/problems/surrounded-regions/', difficulty: 'medium', topic: 'graphs', pattern: 'dfs', companies: ['Amazon', 'Google'], tags: ['Array', 'DFS', 'BFS', 'Matrix'] },
    { id: 'rotting-oranges', title: 'Rotting Oranges', url: 'https://leetcode.com/problems/rotting-oranges/', difficulty: 'medium', topic: 'graphs', pattern: 'bfs', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'BFS', 'Matrix'] },
    { id: 'walls-and-gates', title: 'Walls and Gates', url: 'https://leetcode.com/problems/walls-and-gates/', difficulty: 'medium', topic: 'graphs', pattern: 'bfs', companies: ['Meta', 'Google'], tags: ['Array', 'BFS', 'Matrix'] },
    { id: 'course-schedule', title: 'Course Schedule', url: 'https://leetcode.com/problems/course-schedule/', difficulty: 'medium', topic: 'graphs', pattern: 'topological-sort', companies: ['Amazon', 'Microsoft', 'Google'], tags: ['DFS', 'BFS', 'Graph', 'Topological Sort'] },
    { id: 'course-schedule-ii', title: 'Course Schedule II', url: 'https://leetcode.com/problems/course-schedule-ii/', difficulty: 'medium', topic: 'graphs', pattern: 'topological-sort', companies: ['Amazon', 'Meta'], tags: ['DFS', 'BFS', 'Graph', 'Topological Sort'] },
    { id: 'redundant-connection', title: 'Redundant Connection', url: 'https://leetcode.com/problems/redundant-connection/', difficulty: 'medium', topic: 'graphs', pattern: 'union-find', companies: ['Google', 'Amazon'], tags: ['DFS', 'BFS', 'Union Find', 'Graph'] },
    { id: 'connected-components', title: 'Number of Connected Components', url: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/', difficulty: 'medium', topic: 'graphs', pattern: 'union-find', companies: ['Google', 'Amazon'], tags: ['DFS', 'BFS', 'Union Find', 'Graph'] },
    { id: 'valid-tree', title: 'Graph Valid Tree', url: 'https://leetcode.com/problems/graph-valid-tree/', difficulty: 'medium', topic: 'graphs', pattern: 'union-find', companies: ['Google', 'Meta'], tags: ['DFS', 'BFS', 'Union Find', 'Graph'] },
    { id: 'word-ladder', title: 'Word Ladder', url: 'https://leetcode.com/problems/word-ladder/', difficulty: 'hard', topic: 'graphs', pattern: 'bfs', companies: ['Amazon', 'Meta', 'Microsoft'], tags: ['Hash Table', 'String', 'BFS'] },
    { id: 'alien-dictionary', title: 'Alien Dictionary', url: 'https://leetcode.com/problems/alien-dictionary/', difficulty: 'hard', topic: 'graphs', pattern: 'topological-sort', companies: ['Meta', 'Amazon', 'Google'], tags: ['Array', 'String', 'DFS', 'BFS', 'Graph', 'Topological Sort'] },
    { id: 'min-height-trees', title: 'Minimum Height Trees', url: 'https://leetcode.com/problems/minimum-height-trees/', difficulty: 'medium', topic: 'graphs', pattern: 'topological-sort', companies: ['Google', 'Amazon'], tags: ['DFS', 'BFS', 'Graph', 'Topological Sort'] },
    { id: 'network-delay', title: 'Network Delay Time', url: 'https://leetcode.com/problems/network-delay-time/', difficulty: 'medium', topic: 'graphs', pattern: 'dijkstra', companies: ['Google', 'Amazon'], tags: ['DFS', 'BFS', 'Graph', 'Heap', 'Shortest Path'] },
    { id: 'swim-rising-water', title: 'Swim in Rising Water', url: 'https://leetcode.com/problems/swim-in-rising-water/', difficulty: 'hard', topic: 'graphs', pattern: 'dijkstra', companies: ['Google', 'Amazon'], tags: ['Array', 'Binary Search', 'DFS', 'BFS', 'Union Find', 'Heap'] },
    { id: 'reconstruct-itinerary', title: 'Reconstruct Itinerary', url: 'https://leetcode.com/problems/reconstruct-itinerary/', difficulty: 'hard', topic: 'graphs', pattern: 'dfs', companies: ['Google', 'Meta'], tags: ['DFS', 'Graph', 'Eulerian Circuit'] },
    { id: 'cheapest-flights', title: 'Cheapest Flights Within K Stops', url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', difficulty: 'medium', topic: 'graphs', pattern: 'bellman-ford', companies: ['Amazon', 'Google'], tags: ['DFS', 'BFS', 'Graph', 'Dynamic Programming', 'Heap', 'Shortest Path'] },
    { id: 'accounts-merge', title: 'Accounts Merge', url: 'https://leetcode.com/problems/accounts-merge/', difficulty: 'medium', topic: 'graphs', pattern: 'union-find', companies: ['Meta', 'Google'], tags: ['Array', 'Hash Table', 'String', 'DFS', 'BFS', 'Union Find'] },
];

// ============================================
// DYNAMIC PROGRAMMING (25 problems)
// ============================================
export const dpProblems: CatalogProblem[] = [
    { id: 'climbing-stairs', title: 'Climbing Stairs', url: 'https://leetcode.com/problems/climbing-stairs/', difficulty: 'easy', topic: 'dynamic-programming', pattern: 'fibonacci', companies: ['Amazon', 'Google', 'Apple'], tags: ['Math', 'Dynamic Programming', 'Memoization'] },
    { id: 'min-cost-climbing', title: 'Min Cost Climbing Stairs', url: 'https://leetcode.com/problems/min-cost-climbing-stairs/', difficulty: 'easy', topic: 'dynamic-programming', pattern: 'linear-dp', companies: ['Amazon', 'Google'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'house-robber', title: 'House Robber', url: 'https://leetcode.com/problems/house-robber/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'linear-dp', companies: ['Amazon', 'Google', 'Microsoft'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'house-robber-ii', title: 'House Robber II', url: 'https://leetcode.com/problems/house-robber-ii/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'circular-dp', companies: ['Amazon', 'Google'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'longest-palindrome', title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'expand-around-center', companies: ['Amazon', 'Microsoft', 'Google'], tags: ['String', 'Dynamic Programming'] },
    { id: 'palindromic-substrings', title: 'Palindromic Substrings', url: 'https://leetcode.com/problems/palindromic-substrings/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'dp', companies: ['Meta', 'Amazon'], tags: ['String', 'Dynamic Programming'] },
    { id: 'decode-ways', title: 'Decode Ways', url: 'https://leetcode.com/problems/decode-ways/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'string-dp', companies: ['Meta', 'Microsoft', 'Amazon'], tags: ['String', 'Dynamic Programming'] },
    { id: 'coin-change', title: 'Coin Change', url: 'https://leetcode.com/problems/coin-change/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'unbounded-knapsack', companies: ['Amazon', 'Google', 'Microsoft'], tags: ['Array', 'Dynamic Programming', 'BFS'] },
    { id: 'coin-change-ii', title: 'Coin Change II', url: 'https://leetcode.com/problems/coin-change-ii/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'unbounded-knapsack', companies: ['Amazon', 'Google'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'unique-paths', title: 'Unique Paths', url: 'https://leetcode.com/problems/unique-paths/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'grid-dp', companies: ['Google', 'Amazon', 'Meta'], tags: ['Math', 'Dynamic Programming', 'Combinatorics'] },
    { id: 'unique-paths-ii', title: 'Unique Paths II', url: 'https://leetcode.com/problems/unique-paths-ii/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'grid-dp', companies: ['Amazon', 'Google'], tags: ['Array', 'Dynamic Programming', 'Matrix'] },
    { id: 'lis', title: 'Longest Increasing Subsequence', url: 'https://leetcode.com/problems/longest-increasing-subsequence/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'lis', companies: ['Amazon', 'Microsoft', 'Google'], tags: ['Array', 'Binary Search', 'Dynamic Programming'] },
    { id: 'lcs', title: 'Longest Common Subsequence', url: 'https://leetcode.com/problems/longest-common-subsequence/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'lcs', companies: ['Amazon', 'Google'], tags: ['String', 'Dynamic Programming'] },
    { id: 'word-break', title: 'Word Break', url: 'https://leetcode.com/problems/word-break/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'dp-string', companies: ['Amazon', 'Meta', 'Google', 'Microsoft'], tags: ['Hash Table', 'String', 'Dynamic Programming', 'Trie'] },
    { id: 'combination-sum-iv', title: 'Combination Sum IV', url: 'https://leetcode.com/problems/combination-sum-iv/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'combinations', companies: ['Google', 'Meta'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'partition-equal', title: 'Partition Equal Subset Sum', url: 'https://leetcode.com/problems/partition-equal-subset-sum/', difficulty: 'medium', topic: 'dynamic-programming', pattern: '0-1-knapsack', companies: ['Amazon', 'Meta'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'target-sum', title: 'Target Sum', url: 'https://leetcode.com/problems/target-sum/', difficulty: 'medium', topic: 'dynamic-programming', pattern: '0-1-knapsack', companies: ['Meta', 'Amazon'], tags: ['Array', 'Dynamic Programming', 'Backtracking'] },
    { id: 'interleaving-string', title: 'Interleaving String', url: 'https://leetcode.com/problems/interleaving-string/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'string-dp', companies: ['Amazon', 'Google'], tags: ['String', 'Dynamic Programming'] },
    { id: 'edit-distance', title: 'Edit Distance', url: 'https://leetcode.com/problems/edit-distance/', difficulty: 'hard', topic: 'dynamic-programming', pattern: 'lcs', companies: ['Amazon', 'Google', 'Microsoft'], tags: ['String', 'Dynamic Programming'] },
    { id: 'distinct-subsequences', title: 'Distinct Subsequences', url: 'https://leetcode.com/problems/distinct-subsequences/', difficulty: 'hard', topic: 'dynamic-programming', pattern: 'string-dp', companies: ['Amazon', 'Google'], tags: ['String', 'Dynamic Programming'] },
    { id: 'burst-balloons', title: 'Burst Balloons', url: 'https://leetcode.com/problems/burst-balloons/', difficulty: 'hard', topic: 'dynamic-programming', pattern: 'interval-dp', companies: ['Google', 'Amazon'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'regular-expression', title: 'Regular Expression Matching', url: 'https://leetcode.com/problems/regular-expression-matching/', difficulty: 'hard', topic: 'dynamic-programming', pattern: 'string-dp', companies: ['Meta', 'Google', 'Amazon'], tags: ['String', 'Dynamic Programming', 'Recursion'] },
    { id: 'jump-game', title: 'Jump Game', url: 'https://leetcode.com/problems/jump-game/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'greedy', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Dynamic Programming', 'Greedy'] },
    { id: 'jump-game-ii', title: 'Jump Game II', url: 'https://leetcode.com/problems/jump-game-ii/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'greedy', companies: ['Amazon', 'Google'], tags: ['Array', 'Dynamic Programming', 'Greedy'] },
    { id: 'maximal-square', title: 'Maximal Square', url: 'https://leetcode.com/problems/maximal-square/', difficulty: 'medium', topic: 'dynamic-programming', pattern: 'grid-dp', companies: ['Google', 'Amazon', 'Apple'], tags: ['Array', 'Dynamic Programming', 'Matrix'] },
];

// ============================================
// GREEDY (10 problems)  
// ============================================
export const greedyProblems: CatalogProblem[] = [
    { id: 'max-subarray-greedy', title: 'Maximum Subarray', url: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'medium', topic: 'greedy', pattern: 'kadanes', companies: ['Amazon', 'Microsoft', 'LinkedIn'], tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'] },
    { id: 'gas-station', title: 'Gas Station', url: 'https://leetcode.com/problems/gas-station/', difficulty: 'medium', topic: 'greedy', pattern: 'greedy', companies: ['Amazon', 'Google'], tags: ['Array', 'Greedy'] },
    { id: 'hand-of-straights', title: 'Hand of Straights', url: 'https://leetcode.com/problems/hand-of-straights/', difficulty: 'medium', topic: 'greedy', pattern: 'greedy', companies: ['Google', 'Amazon'], tags: ['Array', 'Hash Table', 'Greedy', 'Sorting'] },
    { id: 'merge-triplets', title: 'Merge Triplets to Form Target Triplet', url: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/', difficulty: 'medium', topic: 'greedy', pattern: 'greedy', companies: ['Google'], tags: ['Array', 'Greedy'] },
    { id: 'valid-parenthesis-string', title: 'Valid Parenthesis String', url: 'https://leetcode.com/problems/valid-parenthesis-string/', difficulty: 'medium', topic: 'greedy', pattern: 'greedy', companies: ['Amazon', 'Meta'], tags: ['String', 'Dynamic Programming', 'Stack', 'Greedy'] },
    { id: 'task-scheduler', title: 'Task Scheduler', url: 'https://leetcode.com/problems/task-scheduler/', difficulty: 'medium', topic: 'greedy', pattern: 'greedy', companies: ['Meta', 'Amazon', 'Google'], tags: ['Array', 'Hash Table', 'Greedy', 'Sorting', 'Heap'] },
    { id: 'candy', title: 'Candy', url: 'https://leetcode.com/problems/candy/', difficulty: 'hard', topic: 'greedy', pattern: 'greedy', companies: ['Amazon', 'Google'], tags: ['Array', 'Greedy'] },
    { id: 'assign-cookies', title: 'Assign Cookies', url: 'https://leetcode.com/problems/assign-cookies/', difficulty: 'easy', topic: 'greedy', pattern: 'greedy', companies: ['Amazon'], tags: ['Array', 'Two Pointers', 'Greedy', 'Sorting'] },
    { id: 'lemonade-change', title: 'Lemonade Change', url: 'https://leetcode.com/problems/lemonade-change/', difficulty: 'easy', topic: 'greedy', pattern: 'greedy', companies: ['Amazon'], tags: ['Array', 'Greedy'] },
];

// ============================================
// INTERVALS (8 problems)
// ============================================
export const intervalProblems: CatalogProblem[] = [
    { id: 'merge-intervals', title: 'Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/', difficulty: 'medium', topic: 'intervals', pattern: 'merge', companies: ['Google', 'Meta', 'Amazon', 'Microsoft'], tags: ['Array', 'Sorting'] },
    { id: 'insert-interval', title: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/', difficulty: 'medium', topic: 'intervals', pattern: 'merge', companies: ['Google', 'Meta', 'LinkedIn'], tags: ['Array'] },
    { id: 'non-overlapping', title: 'Non-overlapping Intervals', url: 'https://leetcode.com/problems/non-overlapping-intervals/', difficulty: 'medium', topic: 'intervals', pattern: 'greedy', companies: ['Google', 'Amazon'], tags: ['Array', 'Dynamic Programming', 'Greedy', 'Sorting'] },
    { id: 'meeting-rooms', title: 'Meeting Rooms', url: 'https://leetcode.com/problems/meeting-rooms/', difficulty: 'easy', topic: 'intervals', pattern: 'sorting', companies: ['Meta', 'Google', 'Amazon'], tags: ['Array', 'Sorting'] },
    { id: 'meeting-rooms-ii', title: 'Meeting Rooms II', url: 'https://leetcode.com/problems/meeting-rooms-ii/', difficulty: 'medium', topic: 'intervals', pattern: 'heap', companies: ['Meta', 'Google', 'Amazon', 'Microsoft'], tags: ['Array', 'Two Pointers', 'Greedy', 'Sorting', 'Heap'] },
    { id: 'min-interval-query', title: 'Minimum Interval to Include Each Query', url: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/', difficulty: 'hard', topic: 'intervals', pattern: 'sorting', companies: ['Google'], tags: ['Array', 'Binary Search', 'Sorting', 'Heap', 'Line Sweep'] },
    { id: 'employee-free-time', title: 'Employee Free Time', url: 'https://leetcode.com/problems/employee-free-time/', difficulty: 'hard', topic: 'intervals', pattern: 'merge', companies: ['Google', 'Meta'], tags: ['Array', 'Sorting', 'Heap'] },
    { id: 'interval-intersections', title: 'Interval List Intersections', url: 'https://leetcode.com/problems/interval-list-intersections/', difficulty: 'medium', topic: 'intervals', pattern: 'two-pointers', companies: ['Meta', 'Google'], tags: ['Array', 'Two Pointers'] },
];

// ============================================
// MATH & GEOMETRY (10 problems)
// ============================================
export const mathProblems: CatalogProblem[] = [
    { id: 'rotate-image', title: 'Rotate Image', url: 'https://leetcode.com/problems/rotate-image/', difficulty: 'medium', topic: 'math', pattern: 'matrix', companies: ['Amazon', 'Microsoft', 'Apple', 'Google'], tags: ['Array', 'Math', 'Matrix'] },
    { id: 'spiral-matrix', title: 'Spiral Matrix', url: 'https://leetcode.com/problems/spiral-matrix/', difficulty: 'medium', topic: 'math', pattern: 'simulation', companies: ['Amazon', 'Microsoft', 'Apple'], tags: ['Array', 'Matrix', 'Simulation'] },
    { id: 'set-matrix-zeroes', title: 'Set Matrix Zeroes', url: 'https://leetcode.com/problems/set-matrix-zeroes/', difficulty: 'medium', topic: 'math', pattern: 'in-place', companies: ['Amazon', 'Meta', 'Microsoft'], tags: ['Array', 'Hash Table', 'Matrix'] },
    { id: 'happy-number', title: 'Happy Number', url: 'https://leetcode.com/problems/happy-number/', difficulty: 'easy', topic: 'math', pattern: 'hash-set', companies: ['Google', 'Apple'], tags: ['Hash Table', 'Math', 'Two Pointers'] },
    { id: 'plus-one-math', title: 'Plus One', url: 'https://leetcode.com/problems/plus-one/', difficulty: 'easy', topic: 'math', pattern: 'math', companies: ['Google', 'Amazon'], tags: ['Array', 'Math'] },
    { id: 'pow-x-n', title: 'Pow(x, n)', url: 'https://leetcode.com/problems/powx-n/', difficulty: 'medium', topic: 'math', pattern: 'binary-exponentiation', companies: ['Meta', 'Amazon', 'Google'], tags: ['Math', 'Recursion'] },
    { id: 'multiply-strings', title: 'Multiply Strings', url: 'https://leetcode.com/problems/multiply-strings/', difficulty: 'medium', topic: 'math', pattern: 'math', companies: ['Meta', 'Google', 'Amazon'], tags: ['Math', 'String', 'Simulation'] },
    { id: 'detect-squares', title: 'Detect Squares', url: 'https://leetcode.com/problems/detect-squares/', difficulty: 'medium', topic: 'math', pattern: 'geometry', companies: ['Google'], tags: ['Array', 'Hash Table', 'Design'] },
    { id: 'game-of-life', title: 'Game of Life', url: 'https://leetcode.com/problems/game-of-life/', difficulty: 'medium', topic: 'math', pattern: 'simulation', companies: ['Google', 'Amazon'], tags: ['Array', 'Matrix', 'Simulation'] },
    { id: 'reverse-integer', title: 'Reverse Integer', url: 'https://leetcode.com/problems/reverse-integer/', difficulty: 'medium', topic: 'math', pattern: 'math', companies: ['Amazon', 'Google'], tags: ['Math'] },
];

// ============================================
// BIT MANIPULATION (8 problems)
// ============================================
export const bitProblems: CatalogProblem[] = [
    { id: 'single-number-bit', title: 'Single Number', url: 'https://leetcode.com/problems/single-number/', difficulty: 'easy', topic: 'bit-manipulation', pattern: 'xor', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Bit Manipulation'] },
    { id: 'number-1-bits', title: 'Number of 1 Bits', url: 'https://leetcode.com/problems/number-of-1-bits/', difficulty: 'easy', topic: 'bit-manipulation', pattern: 'bit-counting', companies: ['Microsoft', 'Apple'], tags: ['Divide and Conquer', 'Bit Manipulation'] },
    { id: 'counting-bits', title: 'Counting Bits', url: 'https://leetcode.com/problems/counting-bits/', difficulty: 'easy', topic: 'bit-manipulation', pattern: 'dynamic-programming', companies: ['Google', 'Amazon'], tags: ['Dynamic Programming', 'Bit Manipulation'] },
    { id: 'reverse-bits', title: 'Reverse Bits', url: 'https://leetcode.com/problems/reverse-bits/', difficulty: 'easy', topic: 'bit-manipulation', pattern: 'bit-operations', companies: ['Apple', 'Amazon'], tags: ['Divide and Conquer', 'Bit Manipulation'] },
    { id: 'missing-number', title: 'Missing Number', url: 'https://leetcode.com/problems/missing-number/', difficulty: 'easy', topic: 'bit-manipulation', pattern: 'xor', companies: ['Amazon', 'Microsoft'], tags: ['Array', 'Hash Table', 'Bit Manipulation'] },
    { id: 'sum-two-integers', title: 'Sum of Two Integers', url: 'https://leetcode.com/problems/sum-of-two-integers/', difficulty: 'medium', topic: 'bit-manipulation', pattern: 'bit-operations', companies: ['Amazon', 'Meta'], tags: ['Math', 'Bit Manipulation'] },
    { id: 'power-of-two', title: 'Power of Two', url: 'https://leetcode.com/problems/power-of-two/', difficulty: 'easy', topic: 'bit-manipulation', pattern: 'bit-count', companies: ['Amazon'], tags: ['Math', 'Bit Manipulation', 'Recursion'] },
];

// ============================================
// TRIE (5 problems)
// ============================================
export const trieProblems: CatalogProblem[] = [
    { id: 'implement-trie', title: 'Implement Trie (Prefix Tree)', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/', difficulty: 'medium', topic: 'trie', pattern: 'trie', companies: ['Google', 'Amazon', 'Microsoft'], tags: ['Hash Table', 'String', 'Design', 'Trie'] },
    { id: 'add-search-word', title: 'Design Add and Search Words Data Structure', url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', difficulty: 'medium', topic: 'trie', pattern: 'trie', companies: ['Meta', 'Amazon'], tags: ['String', 'DFS', 'Design', 'Trie'] },
    { id: 'word-search-ii', title: 'Word Search II', url: 'https://leetcode.com/problems/word-search-ii/', difficulty: 'hard', topic: 'trie', pattern: 'trie-backtracking', companies: ['Amazon', 'Microsoft', 'Google'], tags: ['Array', 'String', 'Backtracking', 'Trie', 'Matrix'] },
    { id: 'replace-words', title: 'Replace Words', url: 'https://leetcode.com/problems/replace-words/', difficulty: 'medium', topic: 'trie', pattern: 'trie', companies: ['Uber', 'Amazon'], tags: ['Array', 'Hash Table', 'String', 'Trie'] },
    { id: 'longest-word-dictionary', title: 'Longest Word in Dictionary', url: 'https://leetcode.com/problems/longest-word-in-dictionary/', difficulty: 'medium', topic: 'trie', pattern: 'trie', companies: ['Google'], tags: ['Array', 'Hash Table', 'String', 'Trie', 'Sorting'] },
];

// ============================================
// HEAP / PRIORITY QUEUE (10 problems)
// ============================================
export const heapProblems: CatalogProblem[] = [
    { id: 'kth-largest-stream', title: 'Kth Largest Element in a Stream', url: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', difficulty: 'easy', topic: 'heap', pattern: 'heap', companies: ['Amazon', 'Google'], tags: ['Tree', 'Design', 'BST', 'Heap', 'Data Stream'] },
    { id: 'last-stone-weight', title: 'Last Stone Weight', url: 'https://leetcode.com/problems/last-stone-weight/', difficulty: 'easy', topic: 'heap', pattern: 'heap', companies: ['Amazon'], tags: ['Array', 'Heap'] },
    { id: 'k-closest-points', title: 'K Closest Points to Origin', url: 'https://leetcode.com/problems/k-closest-points-to-origin/', difficulty: 'medium', topic: 'heap', pattern: 'heap', companies: ['Meta', 'Amazon', 'Google'], tags: ['Array', 'Math', 'Divide and Conquer', 'Sorting', 'Heap', 'Quickselect'] },
    { id: 'kth-largest-heap', title: 'Kth Largest Element in an Array', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', difficulty: 'medium', topic: 'heap', pattern: 'quickselect', companies: ['Meta', 'Amazon', 'Microsoft'], tags: ['Array', 'Divide and Conquer', 'Sorting', 'Heap', 'Quickselect'] },
    { id: 'design-twitter', title: 'Design Twitter', url: 'https://leetcode.com/problems/design-twitter/', difficulty: 'medium', topic: 'heap', pattern: 'design', companies: ['Amazon', 'Twitter'], tags: ['Hash Table', 'Linked List', 'Design', 'Heap'] },
    { id: 'find-median-stream', title: 'Find Median from Data Stream', url: 'https://leetcode.com/problems/find-median-from-data-stream/', difficulty: 'hard', topic: 'heap', pattern: 'two-heaps', companies: ['Amazon', 'Meta', 'Microsoft', 'Google'], tags: ['Two Pointers', 'Design', 'Sorting', 'Heap', 'Data Stream'] },
    { id: 'top-k-frequent-heap', title: 'Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/', difficulty: 'medium', topic: 'heap', pattern: 'heap', companies: ['Amazon', 'Meta', 'Google'], tags: ['Array', 'Hash Table', 'Divide and Conquer', 'Sorting', 'Heap'] },
    { id: 'reorganize-string', title: 'Reorganize String', url: 'https://leetcode.com/problems/reorganize-string/', difficulty: 'medium', topic: 'heap', pattern: 'heap', companies: ['Amazon', 'Google'], tags: ['Hash Table', 'String', 'Greedy', 'Sorting', 'Heap'] },
    { id: 'ugly-number-ii', title: 'Ugly Number II', url: 'https://leetcode.com/problems/ugly-number-ii/', difficulty: 'medium', topic: 'heap', pattern: 'heap', companies: ['Amazon'], tags: ['Hash Table', 'Math', 'Dynamic Programming', 'Heap'] },
];

// ============================================
// BACKTRACKING (10 problems)
// ============================================
export const backtrackingProblems: CatalogProblem[] = [
    { id: 'subsets', title: 'Subsets', url: 'https://leetcode.com/problems/subsets/', difficulty: 'medium', topic: 'backtracking', pattern: 'backtracking', companies: ['Meta', 'Amazon', 'Google'], tags: ['Array', 'Backtracking', 'Bit Manipulation'] },
    { id: 'combination-sum', title: 'Combination Sum', url: 'https://leetcode.com/problems/combination-sum/', difficulty: 'medium', topic: 'backtracking', pattern: 'backtracking', companies: ['Amazon', 'Meta'], tags: ['Array', 'Backtracking'] },
    { id: 'permutations', title: 'Permutations', url: 'https://leetcode.com/problems/permutations/', difficulty: 'medium', topic: 'backtracking', pattern: 'backtracking', companies: ['Meta', 'Amazon', 'Google'], tags: ['Array', 'Backtracking'] },
    { id: 'subsets-ii', title: 'Subsets II', url: 'https://leetcode.com/problems/subsets-ii/', difficulty: 'medium', topic: 'backtracking', pattern: 'backtracking', companies: ['Amazon', 'Meta'], tags: ['Array', 'Backtracking', 'Bit Manipulation'] },
    { id: 'combination-sum-ii', title: 'Combination Sum II', url: 'https://leetcode.com/problems/combination-sum-ii/', difficulty: 'medium', topic: 'backtracking', pattern: 'backtracking', companies: ['Amazon'], tags: ['Array', 'Backtracking'] },
    { id: 'word-search', title: 'Word Search', url: 'https://leetcode.com/problems/word-search/', difficulty: 'medium', topic: 'backtracking', pattern: 'backtracking', companies: ['Amazon', 'Microsoft', 'Meta'], tags: ['Array', 'Backtracking', 'Matrix'] },
    { id: 'palindrome-partition', title: 'Palindrome Partitioning', url: 'https://leetcode.com/problems/palindrome-partitioning/', difficulty: 'medium', topic: 'backtracking', pattern: 'backtracking', companies: ['Amazon', 'Meta'], tags: ['String', 'Dynamic Programming', 'Backtracking'] },
    { id: 'letter-combinations', title: 'Letter Combinations of a Phone Number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/', difficulty: 'medium', topic: 'backtracking', pattern: 'backtracking', companies: ['Meta', 'Amazon', 'Google'], tags: ['Hash Table', 'String', 'Backtracking'] },
    { id: 'n-queens', title: 'N-Queens', url: 'https://leetcode.com/problems/n-queens/', difficulty: 'hard', topic: 'backtracking', pattern: 'backtracking', companies: ['Amazon', 'Meta', 'Google'], tags: ['Array', 'Backtracking'] },
    { id: 'sudoku-solver', title: 'Sudoku Solver', url: 'https://leetcode.com/problems/sudoku-solver/', difficulty: 'hard', topic: 'backtracking', pattern: 'backtracking', companies: ['Amazon', 'Google', 'Microsoft'], tags: ['Array', 'Hash Table', 'Backtracking', 'Matrix'] },
];

// ============================================
// 1-D DYNAMIC PROGRAMMING (5 more problems)
// ============================================
export const dp1DProblems: CatalogProblem[] = [
    { id: 'max-product-subarray', title: 'Maximum Product Subarray', url: 'https://leetcode.com/problems/maximum-product-subarray/', difficulty: 'medium', topic: '1d-dp', pattern: 'dp', companies: ['Amazon', 'LinkedIn'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'longest-consecutive', title: 'Longest Consecutive Sequence', url: 'https://leetcode.com/problems/longest-consecutive-sequence/', difficulty: 'medium', topic: '1d-dp', pattern: 'hash-set', companies: ['Google', 'Amazon', 'Meta'], tags: ['Array', 'Hash Table', 'Union Find'] },
    { id: 'best-time-iv', title: 'Best Time to Buy and Sell Stock IV', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/', difficulty: 'hard', topic: '1d-dp', pattern: 'dp', companies: ['Amazon', 'Google'], tags: ['Array', 'Dynamic Programming'] },
    { id: 'word-break-ii', title: 'Word Break II', url: 'https://leetcode.com/problems/word-break-ii/', difficulty: 'hard', topic: '1d-dp', pattern: 'backtracking', companies: ['Meta', 'Amazon', 'Google'], tags: ['Hash Table', 'String', 'Dynamic Programming', 'Backtracking', 'Trie'] },
    { id: 'perfect-squares', title: 'Perfect Squares', url: 'https://leetcode.com/problems/perfect-squares/', difficulty: 'medium', topic: '1d-dp', pattern: 'dp', companies: ['Google', 'Amazon'], tags: ['Math', 'Dynamic Programming', 'BFS'] },
];

// ============================================
// COMBINE ALL PROBLEMS
// ============================================
export const allProblems: CatalogProblem[] = [
    ...arrayProblems,
    ...twoPointerProblems,
    ...slidingWindowProblems,
    ...stackProblems,
    ...binarySearchProblems,
    ...linkedListProblems,
    ...treeProblems,
    ...graphProblems,
    ...dpProblems,
    ...greedyProblems,
    ...intervalProblems,
    ...mathProblems,
    ...bitProblems,
    ...trieProblems,
    ...heapProblems,
    ...backtrackingProblems,
    ...dp1DProblems,
];

// Problem stats
export const problemStats = {
    total: allProblems.length,
    byDifficulty: {
        easy: allProblems.filter(p => p.difficulty === 'easy').length,
        medium: allProblems.filter(p => p.difficulty === 'medium').length,
        hard: allProblems.filter(p => p.difficulty === 'hard').length
    },
    byTopic: Object.entries(
        allProblems.reduce((acc, p) => {
            acc[p.topic] = (acc[p.topic] || 0) + 1;
            return acc;
        }, {} as Record<string, number>)
    ).sort((a, b) => b[1] - a[1])
};

// Get unique companies
export function getCompanies(): string[] {
    const companies = new Set<string>();
    allProblems.forEach(p => p.companies.forEach(c => companies.add(c)));
    return Array.from(companies).sort();
}

// Get unique patterns
export function getPatterns(): string[] {
    const patterns = new Set<string>();
    allProblems.forEach(p => patterns.add(p.pattern));
    return Array.from(patterns).sort();
}

// Filter problems
export function getProblems(options: {
    topic?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    company?: string;
    pattern?: string;
} = {}): CatalogProblem[] {
    let filtered = [...allProblems];
    if(options.topic) filtered = filtered.filter(p => p.topic === options.topic);
    if(options.difficulty) filtered = filtered.filter(p => p.difficulty === options.difficulty);
    if(options.company) filtered = filtered.filter(p => p.companies.includes(options.company!));
    if(options.pattern) filtered = filtered.filter(p => p.pattern === options.pattern);
    return filtered;
}

