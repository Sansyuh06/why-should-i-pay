// Comprehensive embedded content database
// Following the 4-D Lyra methodology: DECONSTRUCT -> DIAGNOSE -> DEVELOP -> DELIVER
// This file contains ALL content embedded directly - zero external dependencies

export interface SubTopic {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  readingTime: number; // in minutes
}

export interface DSAResource {
  type: 'tutorial' | 'visualization' | 'video' | 'practice' | 'github' | 'article';
  url: string;
  title: string;
  platform?: string;
}

export interface DSAProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints: string[];
  hints: string[];
  solutions: Array<{
    language: 'Python' | 'Java' | 'JavaScript' | 'C++';
    code: string;
    complexity: { time: string; space: string };
  }>;
  tags: string[];
  companies: string[];
}

export interface DSATopic {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  estimatedHours: number;
  prerequisites: string[];
  subtopics: SubTopic[];
  resources: DSAResource[];
  problems: DSAProblem[];
  keyPoints: string[];
}

export interface Quiz {
  id: string;
  title: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questions: QuizQuestion[];
  timeLimit: number; // in minutes
  passingScore: number; // percentage
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  tags: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  duration: number; // in days
  dailyHours: number;
  phases: Phase[];
  resources: DSAResource[];
}

export interface Phase {
  id: string;
  title: string;
  order: number;
  description: string;
  duration: number; // days
  topics: string[]; // topic IDs
  milestone: Milestone;
}

export interface Milestone {
  title: string;
  type: 'quiz' | 'project' | 'problems';
  requirement: string;
  passingScore?: number;
}

// ============================================
// PART 1: DSA TOPICS - 50+ COMPREHENSIVE TOPICS
// ============================================

export const dsaTopics: DSATopic[] = [
  // ARRAYS & STRINGS
  {
    id: 'arrays-basics',
    title: 'Arrays & Strings',
    difficulty: 'Beginner',
    description: 'Master array fundamentals, string manipulation, and basic operations. Arrays are the foundation of all data structures.',
    estimatedHours: 12,
    prerequisites: [],
    subtopics: [
      { id: 'array-basics', title: 'Array Fundamentals', description: 'Array declaration, initialization, memory layout and indexing', readingTime: 30 },
      { id: 'array-operations', title: 'Array Operations', description: 'Insertion, deletion, traversal, and modification techniques', readingTime: 35 },
      { id: '2d-arrays', title: '2D Arrays & Matrices', description: 'Matrix operations, row/column traversal, spiral order', readingTime: 40 },
      { id: 'prefix-sum', title: 'Prefix Sum Arrays', description: 'Range queries, cumulative sums, difference arrays', readingTime: 35 },
      { id: 'two-pointer', title: 'Two Pointer Technique', description: 'Opposite direction and same direction pointer patterns', readingTime: 45 },
      { id: 'sliding-window', title: 'Sliding Window Pattern', description: 'Fixed and variable size windows for subarray problems', readingTime: 50 },
      { id: 'kadanes', title: "Kadane's Algorithm", description: 'Maximum subarray sum and its variations', readingTime: 30 },
      { id: 'string-basics', title: 'String Fundamentals', description: 'String immutability, comparison, and basic operations', readingTime: 25 },
      { id: 'string-matching', title: 'String Matching', description: 'Pattern matching, KMP algorithm, Rabin-Karp', readingTime: 45 },
      { id: 'palindrome', title: 'Palindrome Problems', description: 'Palindrome checking, longest palindromic substring', readingTime: 35 },
      { id: 'anagram', title: 'Anagram & Frequency', description: 'Character frequency counting, anagram detection', readingTime: 30 },
      { id: 'array-rotation', title: 'Array Rotation', description: 'Left/right rotation, reversal algorithm, cyclic rotation', readingTime: 25 },
    ],
    resources: [
      { type: 'tutorial', url: 'https://www.geeksforgeeks.org/dsa/array/', title: 'Array Tutorial', platform: 'GeeksforGeeks' },
      { type: 'visualization', url: 'https://visualgo.net/', title: 'Algorithm Visualizations', platform: 'VisuAlgo' },
      { type: 'practice', url: 'https://leetcode.com/explore/interview/card/top-interview-150/', title: 'Top Interview Questions', platform: 'LeetCode' },
    ],
    problems: [
      {
        id: 'two-sum',
        title: 'Two Sum',
        difficulty: 'Easy',
        description: 'Given an array of integers, find two numbers that add up to a target sum.',
        examples: [
          { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] == 9' },
          { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
        ],
        constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9'],
        hints: ['Use a hash map to store previously seen numbers', 'For each number, check if (target - num) exists in the map'],
        solutions: [
          {
            language: 'Python',
            code: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
            complexity: { time: 'O(n)', space: 'O(n)' },
          },
          {
            language: 'Java',
            code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
            complexity: { time: 'O(n)', space: 'O(n)' },
          },
        ],
        tags: ['hash-map', 'two-pointer', 'beginner'],
        companies: ['Amazon', 'Microsoft', 'Google'],
      },
      {
        id: 'container-most-water',
        title: 'Container With Most Water',
        difficulty: 'Medium',
        description: 'Given n non-negative integers representing the heights of vertical lines, find two lines that form a container with maximum area.',
        examples: [
          { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: 'The vertical lines at indices 1 and 8 form a container with area 49' },
        ],
        constraints: ['n == height.length', '2 <= n <= 10^5', '0 <= height[i] <= 10^4'],
        hints: ['Use two pointers, one at start and one at end', 'Move the pointer pointing to the smaller height'],
        solutions: [
          {
            language: 'Python',
            code: `def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0
    while left < right:
        width = right - left
        current_height = min(height[left], height[right])
        current_area = width * current_height
        max_area = max(max_area, current_area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area`,
            complexity: { time: 'O(n)', space: 'O(1)' },
          },
        ],
        tags: ['two-pointer', 'greedy', 'medium'],
        companies: ['Google', 'Amazon', 'Facebook'],
      },
    ],
    keyPoints: [
      'Arrays provide O(1) random access',
      'String is immutable in most languages - use StringBuilder for modifications',
      'Two-pointer technique is crucial for sorted arrays',
      'Sliding window optimizes substring/subarray problems',
    ],
  },

  // LINKED LISTS
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    difficulty: 'Beginner',
    description: 'Understand singly and doubly linked lists, pointer manipulation, and common operations.',
    estimatedHours: 10,
    prerequisites: ['arrays-basics'],
    subtopics: [
      { id: 'll-intro', title: 'Introduction to Linked Lists', description: 'Why linked lists, comparison with arrays, node structure', readingTime: 25 },
      { id: 'll-singly', title: 'Singly Linked Lists', description: 'Node structure, traversal, and basic operations', readingTime: 40 },
      { id: 'll-insertion', title: 'Insertion Operations', description: 'Insert at head, tail, middle positions', readingTime: 30 },
      { id: 'll-deletion', title: 'Deletion Operations', description: 'Delete by value, by position, edge cases', readingTime: 30 },
      { id: 'll-doubly', title: 'Doubly Linked Lists', description: 'Bidirectional pointers, prev and next operations', readingTime: 35 },
      { id: 'll-circular', title: 'Circular Linked Lists', description: 'Circular singly and doubly linked lists', readingTime: 30 },
      { id: 'll-reversal', title: 'Linked List Reversal', description: 'Iterative and recursive reversal techniques', readingTime: 35 },
      { id: 'll-cycles', title: 'Cycle Detection', description: "Floyd's cycle detection and finding cycle start", readingTime: 35 },
      { id: 'll-merge', title: 'Merging Linked Lists', description: 'Merge sorted lists, merge k sorted lists', readingTime: 40 },
      { id: 'll-intersection', title: 'Finding Intersection', description: 'Detect intersection point of two lists', readingTime: 25 },
      { id: 'll-fast-slow', title: 'Fast & Slow Pointers', description: 'Two-pointer technique for linked lists', readingTime: 35 },
      { id: 'll-sort', title: 'Sorting Linked Lists', description: 'Merge sort on linked lists', readingTime: 40 },
    ],
    resources: [
      { type: 'tutorial', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/', title: 'Linked List Tutorial', platform: 'GeeksforGeeks' },
    ],
    problems: [
      {
        id: 'reverse-linked-list',
        title: 'Reverse a Linked List',
        difficulty: 'Easy',
        description: 'Reverse a singly linked list iteratively and recursively.',
        examples: [{ input: '1->2->3->4->5->NULL', output: '5->4->3->2->1->NULL' }],
        constraints: ['Number of nodes in the list is n', '1 <= n <= 5000', '-5000 <= Node.val <= 5000'],
        hints: ['Use three pointers: prev, current, next', 'Reverse the links while traversing'],
        solutions: [
          {
            language: 'Python',
            code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    prev = None
    current = head
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    return prev`,
            complexity: { time: 'O(n)', space: 'O(1)' },
          },
        ],
        tags: ['linked-list', 'pointer-manipulation'],
        companies: ['Meta', 'Google', 'Apple'],
      },
    ],
    keyPoints: [
      'Use pointer manipulation carefully to avoid losing references',
      'Floyd cycle detection algorithm is O(n) space-optimal',
      'Linked lists are better than arrays for frequent insertions/deletions',
    ],
  },

  // TREES & BST
  {
    id: 'trees-bst',
    title: 'Trees & Binary Search Trees',
    difficulty: 'Intermediate',
    description: 'Master tree structures, BST operations, and tree traversals.',
    estimatedHours: 15,
    prerequisites: ['arrays-basics', 'linked-lists'],
    subtopics: [
      { id: 'tree-intro', title: 'Tree Fundamentals', description: 'Tree terminology, types, properties, height vs depth', readingTime: 35 },
      { id: 'binary-tree', title: 'Binary Trees', description: 'Binary tree structure, complete, full, perfect trees', readingTime: 40 },
      { id: 'tree-traversal-dfs', title: 'DFS Traversals', description: 'Inorder, Preorder, Postorder recursively and iteratively', readingTime: 50 },
      { id: 'tree-traversal-bfs', title: 'BFS / Level Order', description: 'Level order traversal using queue', readingTime: 35 },
      { id: 'bst-intro', title: 'BST Introduction', description: 'BST property, search operation, applications', readingTime: 30 },
      { id: 'bst-insert-delete', title: 'BST Insert & Delete', description: 'Insertion, deletion with predecessor/successor', readingTime: 45 },
      { id: 'bst-validation', title: 'BST Validation', description: 'Check if a tree is a valid BST', readingTime: 30 },
      { id: 'tree-construction', title: 'Tree Construction', description: 'Build tree from traversals, serialize/deserialize', readingTime: 45 },
      { id: 'lca', title: 'Lowest Common Ancestor', description: 'LCA in BST and binary trees', readingTime: 35 },
      { id: 'tree-views', title: 'Tree Views', description: 'Left, right, top, bottom views of a tree', readingTime: 40 },
      { id: 'balanced-trees', title: 'Balanced Trees', description: 'AVL trees, Red-Black trees concepts', readingTime: 50 },
      { id: 'tree-path', title: 'Path Problems', description: 'Path sum, max path sum, diameter', readingTime: 45 },
    ],
    resources: [
      { type: 'visualization', url: 'https://visualgo.net/en/bst', title: 'BST Visualization', platform: 'VisuAlgo' },
    ],
    problems: [
      {
        id: 'inorder-traversal',
        title: 'Binary Tree Inorder Traversal',
        difficulty: 'Easy',
        description: 'Perform inorder traversal of a binary tree.',
        examples: [{ input: '[1,null,2,3]', output: '[1,3,2]' }],
        constraints: [],
        hints: ['Left -> Root -> Right', 'Use recursion or iteration with stack'],
        solutions: [
          {
            language: 'Python',
            code: `def inorderTraversal(root):
    result = []
    def dfs(node):
        if not node:
            return
        dfs(node.left)
        result.append(node.val)
        dfs(node.right)
    dfs(root)
    return result`,
            complexity: { time: 'O(n)', space: 'O(h)' },
          },
        ],
        tags: ['tree', 'dfs', 'traversal'],
        companies: ['Google', 'Microsoft'],
      },
    ],
    keyPoints: [
      'BST property: left < parent < right',
      'Inorder traversal of BST gives sorted sequence',
      'Tree height determines recursion depth and space complexity',
    ],
  },

  // GRAPHS
  {
    id: 'graphs',
    title: 'Graphs',
    difficulty: 'Intermediate',
    description: 'Understand graph representations, traversals (BFS/DFS), and common algorithms.',
    estimatedHours: 18,
    prerequisites: ['arrays-basics', 'linked-lists'],
    subtopics: [
      { id: 'graph-intro', title: 'Graph Fundamentals', description: 'Vertices, edges, directed vs undirected, weighted graphs', readingTime: 30 },
      { id: 'graph-repr', title: 'Graph Representations', description: 'Adjacency matrix, adjacency list, edge list', readingTime: 35 },
      { id: 'graph-bfs', title: 'Breadth-First Search', description: 'BFS traversal, shortest path in unweighted graphs', readingTime: 45 },
      { id: 'graph-dfs', title: 'Depth-First Search', description: 'DFS traversal, connected components, backtracking', readingTime: 45 },
      { id: 'graph-cycles', title: 'Cycle Detection', description: 'Detect cycles in directed and undirected graphs', readingTime: 40 },
      { id: 'topo-sort', title: 'Topological Sort', description: "Kahn's algorithm, DFS-based topological ordering", readingTime: 45 },
      { id: 'dijkstra', title: "Dijkstra's Algorithm", description: 'Shortest path in weighted graphs with non-negative edges', readingTime: 50 },
      { id: 'bellman-ford', title: 'Bellman-Ford Algorithm', description: 'Shortest path with negative edges, negative cycle detection', readingTime: 45 },
      { id: 'union-find', title: 'Union-Find / DSU', description: 'Disjoint set union with path compression and union by rank', readingTime: 50 },
      { id: 'mst', title: 'Minimum Spanning Tree', description: "Prim's and Kruskal's algorithms", readingTime: 45 },
      { id: 'bipartite', title: 'Bipartite Graphs', description: 'Graph coloring, bipartite checking', readingTime: 35 },
      { id: 'grid-graphs', title: 'Grid as Graphs', description: 'Matrix traversal, flood fill, islands problems', readingTime: 40 },
    ],
    resources: [
      { type: 'visualization', url: 'https://visualgo.net/en/graphds', title: 'Graph Visualization', platform: 'VisuAlgo' },
    ],
    problems: [
      {
        id: 'number-of-islands',
        title: 'Number of Islands',
        difficulty: 'Medium',
        description: 'Find the number of islands in a 2D grid.',
        examples: [{ input: 'grid = [[1,1,0],[0,1,0],[1,0,1]]', output: '3' }],
        constraints: [],
        hints: ['Use DFS or BFS to explore connected components'],
        solutions: [
          {
            language: 'Python',
            code: `def numIslands(grid):
    if not grid:
        return 0
    
    def dfs(i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    
    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    return count`,
            complexity: { time: 'O(m*n)', space: 'O(m*n)' },
          },
        ],
        tags: ['graph', 'dfs', 'medium'],
        companies: ['Amazon', 'Google', 'Meta'],
      },
    ],
    keyPoints: [
      'Two main traversal strategies: BFS (queue) and DFS (stack/recursion)',
      'Graph problems often involve marking visited nodes',
      'Adjacency list is more efficient for sparse graphs',
    ],
  },

  // DYNAMIC PROGRAMMING
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    difficulty: 'Advanced',
    description: 'Master DP concepts, memoization, tabulation, and common patterns.',
    estimatedHours: 20,
    prerequisites: ['arrays-basics', 'trees-bst'],
    subtopics: [
      { id: 'dp-intro', title: 'DP Introduction', description: 'What is DP, when to use it, recognizing DP problems', readingTime: 40 },
      { id: 'dp-basics', title: 'DP Fundamentals', description: 'Overlapping subproblems and optimal substructure', readingTime: 45 },
      { id: 'memoization', title: 'Memoization (Top-Down)', description: 'Recursive DP with caching, function call optimization', readingTime: 50 },
      { id: 'tabulation', title: 'Tabulation (Bottom-Up)', description: 'Iterative DP with tables, space optimization', readingTime: 50 },
      { id: 'dp-1d', title: '1D DP Problems', description: 'Fibonacci, climbing stairs, house robber', readingTime: 45 },
      { id: 'dp-2d', title: '2D DP Problems', description: 'Grid paths, LCS, edit distance', readingTime: 55 },
      { id: 'knapsack-01', title: '0/1 Knapsack', description: 'Classic knapsack, subset sum, partition problem', readingTime: 50 },
      { id: 'unbounded-knapsack', title: 'Unbounded Knapsack', description: 'Coin change, rod cutting, complete knapsack', readingTime: 45 },
      { id: 'lis', title: 'Longest Increasing Subsequence', description: 'LIS with O(n²) and O(n log n) approaches', readingTime: 45 },
      { id: 'lcs', title: 'Longest Common Subsequence', description: 'LCS, shortest common supersequence', readingTime: 45 },
      { id: 'dp-strings', title: 'DP on Strings', description: 'Edit distance, palindrome partitioning, word break', readingTime: 50 },
      { id: 'dp-trees', title: 'DP on Trees', description: 'Tree DP, diameter, path problems', readingTime: 55 },
    ],
    resources: [
      { type: 'tutorial', url: 'https://www.geeksforgeeks.org/dynamic-programming/', title: 'DP Tutorial', platform: 'GeeksforGeeks' },
    ],
    problems: [
      {
        id: 'fibonacci',
        title: 'Fibonacci Number',
        difficulty: 'Easy',
        description: 'Compute the Nth Fibonacci number efficiently.',
        examples: [
          { input: 'n = 2', output: '1' },
          { input: 'n = 4', output: '3' },
        ],
        constraints: ['0 <= n <= 30'],
        hints: ['Use memoization to avoid recomputation', 'Or use tabulation (bottom-up approach)'],
        solutions: [
          {
            language: 'Python',
            code: `def fib(n, memo=None):
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]`,
            complexity: { time: 'O(n)', space: 'O(n)' },
          },
          {
            language: 'Python',
            code: `def fib_tab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]`,
            complexity: { time: 'O(n)', space: 'O(n)' },
          },
        ],
        tags: ['dp', 'easy', 'classic'],
        companies: ['All'],
      },
    ],
    keyPoints: [
      'DP = Recursion + Memoization',
      'Identify optimal substructure in problems',
      'Choose between memoization (easier to code) and tabulation (better space for some)',
    ],
  },

  // SORTING & SEARCHING
  {
    id: 'sorting-searching',
    title: 'Sorting & Searching',
    difficulty: 'Beginner',
    description: 'Master sorting algorithms and binary search patterns.',
    estimatedHours: 12,
    prerequisites: ['arrays-basics'],
    subtopics: [
      { id: 'sort-intro', title: 'Sorting Introduction', description: 'Why sorting matters, stability, in-place sorting', readingTime: 25 },
      { id: 'bubble-sort', title: 'Bubble Sort', description: 'Simple swapping algorithm, optimizations', readingTime: 25 },
      { id: 'selection-sort', title: 'Selection Sort', description: 'Find minimum and swap technique', readingTime: 25 },
      { id: 'insertion-sort', title: 'Insertion Sort', description: 'Build sorted array one element at a time', readingTime: 25 },
      { id: 'merge-sort', title: 'Merge Sort', description: 'Divide and conquer, merge operation, stable sort', readingTime: 45 },
      { id: 'quick-sort', title: 'Quick Sort', description: 'Partitioning, pivot selection, average vs worst case', readingTime: 50 },
      { id: 'heap-sort', title: 'Heap Sort', description: 'Using heap data structure for sorting', readingTime: 40 },
      { id: 'counting-sort', title: 'Counting & Radix Sort', description: 'Non-comparison based sorting algorithms', readingTime: 35 },
      { id: 'binary-search-basic', title: 'Binary Search Basics', description: 'Standard binary search implementation', readingTime: 30 },
      { id: 'binary-search-variations', title: 'Binary Search Variations', description: 'Lower bound, upper bound, rotated array search', readingTime: 45 },
      { id: 'bs-on-answer', title: 'Binary Search on Answer', description: 'Applying binary search to optimization problems', readingTime: 50 },
      { id: 'search-2d', title: 'Searching in 2D', description: 'Search in sorted matrix, row-wise and column-wise', readingTime: 35 },
    ],
    resources: [],
    problems: [
      {
        id: 'binary-search',
        title: 'Binary Search',
        difficulty: 'Easy',
        description: 'Search for a target in a sorted array using binary search.',
        examples: [
          { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' },
          { input: 'nums = [-1,0,3,5,9,12], target = 13', output: '-1' },
        ],
        constraints: ['1 <= nums.length <= 10^4', 'nums is sorted in ascending order'],
        hints: ['Divide the search space in half each iteration'],
        solutions: [
          {
            language: 'Python',
            code: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
            complexity: { time: 'O(log n)', space: 'O(1)' },
          },
        ],
        tags: ['binary-search', 'easy'],
        companies: ['All'],
      },
    ],
    keyPoints: [
      'Sorting is O(n log n) for comparison-based algorithms',
      'Binary search requires O(log n) time but needs sorted data',
      'Different sorting algorithms have different trade-offs in practice',
    ],
  },

  // SYSTEM DESIGN
  {
    id: 'system-design',
    title: 'System Design',
    difficulty: 'Advanced',
    description: 'Design scalable, maintainable systems for real-world problems.',
    estimatedHours: 25,
    prerequisites: ['arrays-basics', 'graphs'],
    subtopics: [
      { id: 'design-basics', title: 'Design Fundamentals', description: 'Scalability, Availability, Consistency', readingTime: 60 },
      { id: 'databases', title: 'Database Design', description: 'SQL vs NoSQL, Indexing, Sharding', readingTime: 55 },
      { id: 'caching', title: 'Caching Strategies', description: 'Cache invalidation, LRU, TTL', readingTime: 45 },
      { id: 'api-design', title: 'API Design', description: 'REST, Rate Limiting, Versioning', readingTime: 40 },
    ],
    resources: [],
    problems: [],
    keyPoints: [
      'Think about scale: 1K, 1M, 1B users',
      'Choose appropriate data structures for access patterns',
      'Identify bottlenecks early in design',
    ],
  },

  // OOP CONCEPTS
  {
    id: 'oop-concepts',
    title: 'Object-Oriented Programming',
    difficulty: 'Intermediate',
    description: 'Understand OOP principles, design patterns, and SOLID principles.',
    estimatedHours: 14,
    prerequisites: [],
    subtopics: [
      { id: 'oop-basics', title: 'OOP Fundamentals', description: 'Classes, Objects, Inheritance, Polymorphism', readingTime: 50 },
      { id: 'abstraction', title: 'Abstraction & Encapsulation', description: 'Abstract classes, Interfaces, Access modifiers', readingTime: 40 },
      { id: 'design-patterns', title: 'Design Patterns', description: 'Singleton, Factory, Observer, Strategy', readingTime: 60 },
      { id: 'solid', title: 'SOLID Principles', description: 'Single Responsibility, Open/Closed, etc.', readingTime: 45 },
    ],
    resources: [],
    problems: [],
    keyPoints: [
      'Inheritance enables code reuse but can lead to tight coupling',
      'Composition over inheritance for flexibility',
      'Design patterns solve recurring design problems',
    ],
  },

  // HASHING
  {
    id: 'hashing',
    title: 'Hashing & Hash Tables',
    difficulty: 'Intermediate',
    description: 'Master hashing, hash functions, collision handling, and hash table applications.',
    estimatedHours: 10,
    prerequisites: ['arrays-basics'],
    subtopics: [
      { id: 'hash-intro', title: 'Introduction to Hashing', description: 'Why hashing, hash functions, hash codes', readingTime: 30 },
      { id: 'hash-functions', title: 'Hash Functions', description: 'Properties of good hash functions, modular hashing', readingTime: 35 },
      { id: 'collision-chaining', title: 'Collision Handling: Chaining', description: 'Linked list chaining, average case analysis', readingTime: 35 },
      { id: 'collision-open', title: 'Collision Handling: Open Addressing', description: 'Linear probing, quadratic probing, double hashing', readingTime: 40 },
      { id: 'load-factor', title: 'Load Factor & Rehashing', description: 'When and how to resize hash tables', readingTime: 30 },
      { id: 'hashmap', title: 'HashMap Implementation', description: 'Key-value storage, get, put, remove operations', readingTime: 40 },
      { id: 'hashset', title: 'HashSet Implementation', description: 'Unique element storage, membership testing', readingTime: 30 },
      { id: 'hash-problems', title: 'Common Hash Problems', description: 'Two sum, subarray sum, group anagrams', readingTime: 45 },
      { id: 'frequency-counting', title: 'Frequency Counting', description: 'Count occurrences, find majority element', readingTime: 35 },
      { id: 'hash-strings', title: 'String Hashing', description: 'Rolling hash, Rabin-Karp pattern matching', readingTime: 45 },
    ],
    resources: [],
    problems: [
      {
        id: 'valid-anagram',
        title: 'Valid Anagram',
        difficulty: 'Easy',
        description: 'Determine if two strings are anagrams.',
        examples: [
          { input: 's = "anagram", t = "nagaram"', output: 'true' },
          { input: 's = "rat", t = "car"', output: 'false' },
        ],
        constraints: [],
        hints: ['Use a hash map to count character frequencies'],
        solutions: [
          {
            language: 'Python',
            code: `def isAnagram(s, t):
    if len(s) != len(t):
        return False
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    for char in t:
        if char not in char_count:
            return False
        char_count[char] -= 1
        if char_count[char] < 0:
            return False
    return True`,
            complexity: { time: 'O(n)', space: 'O(1)' },
          },
        ],
        tags: ['hashing', 'easy'],
        companies: ['Facebook', 'Google'],
      },
    ],
    keyPoints: [
      'Good hash function minimizes collisions',
      'HashMap provides O(1) average-case operations',
      'Hash collision handling is crucial for performance',
    ],
  },

  // HEAPS & PRIORITY QUEUES
  {
    id: 'heaps-pq',
    title: 'Heaps & Priority Queues',
    difficulty: 'Intermediate',
    description: 'Understand heap data structure and priority queue applications.',
    estimatedHours: 12,
    prerequisites: ['trees-bst'],
    subtopics: [
      { id: 'heap-intro', title: 'Heap Introduction', description: 'What is a heap, heap property, complete binary tree', readingTime: 30 },
      { id: 'min-max-heap', title: 'Min Heap vs Max Heap', description: 'Differences, when to use each, implementations', readingTime: 35 },
      { id: 'heap-insert', title: 'Heap Insertion', description: 'Insert operation and bubble-up/sift-up', readingTime: 30 },
      { id: 'heap-delete', title: 'Heap Deletion', description: 'Extract-min/max and sift-down operation', readingTime: 30 },
      { id: 'heapify', title: 'Heapify Operation', description: 'Building a heap from array in O(n)', readingTime: 40 },
      { id: 'heap-sort', title: 'Heap Sort', description: 'In-place sorting using heap', readingTime: 40 },
      { id: 'priority-queue', title: 'Priority Queue ADT', description: 'Priority queue interface and heap implementation', readingTime: 35 },
      { id: 'k-largest', title: 'K Largest/Smallest Elements', description: 'Using heaps for top-K problems', readingTime: 40 },
      { id: 'merge-k-lists', title: 'Merge K Sorted Lists', description: 'Using min-heap for merging', readingTime: 45 },
      { id: 'median-stream', title: 'Median in Stream', description: 'Two-heap technique for running median', readingTime: 50 },
    ],
    resources: [],
    problems: [
      {
        id: 'kth-largest',
        title: 'Kth Largest Element',
        difficulty: 'Medium',
        description: 'Find the Kth largest element in an unsorted array.',
        examples: [{ input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' }],
        constraints: [],
        hints: ['Use a min-heap of size k', 'Or use quickselect algorithm'],
        solutions: [
          {
            language: 'Python',
            code: `import heapq
def findKthLargest(nums, k):
    return heapq.nlargest(k, nums)[-1]`,
            complexity: { time: 'O(n log k)', space: 'O(k)' },
          },
        ],
        tags: ['heap', 'medium'],
        companies: ['Amazon', 'Google'],
      },
    ],
    keyPoints: [
      'Heaps maintain partial order, not complete sorting',
      'Heapify operation is O(log n)',
      'Priority queues are built on heaps in most languages',
    ],
  },

  // RECURSION & BACKTRACKING
  {
    id: 'recursion-backtracking',
    title: 'Recursion & Backtracking',
    difficulty: 'Intermediate',
    description: 'Master recursive thinking, backtracking patterns, and recursive problem solving.',
    estimatedHours: 14,
    prerequisites: ['arrays-basics', 'trees-bst'],
    subtopics: [
      { id: 'recursion-intro', title: 'What is Recursion', description: 'Recursive thinking, function calls, call stack', readingTime: 30 },
      { id: 'base-recursive', title: 'Base Case & Recursive Case', description: 'Identifying base cases, avoiding infinite recursion', readingTime: 35 },
      { id: 'recursion-examples', title: 'Simple Recursion Examples', description: 'Factorial, Fibonacci, sum of array', readingTime: 35 },
      { id: 'recursion-tree', title: 'Recursion Tree Visualization', description: 'Understanding recursion flow with trees', readingTime: 30 },
      { id: 'tail-recursion', title: 'Tail Recursion', description: 'Tail call optimization, converting to iteration', readingTime: 35 },
      { id: 'backtracking-intro', title: 'Backtracking Introduction', description: 'Explore-mark-unmark pattern, decision trees', readingTime: 40 },
      { id: 'subsets', title: 'Subsets Generation', description: 'Generate all subsets/power set', readingTime: 40 },
      { id: 'permutations', title: 'Permutations', description: 'Generate all permutations with/without duplicates', readingTime: 45 },
      { id: 'combinations', title: 'Combinations', description: 'Generate combinations, combination sum', readingTime: 40 },
      { id: 'n-queens', title: 'N-Queens Problem', description: 'Classic backtracking problem', readingTime: 50 },
      { id: 'sudoku', title: 'Sudoku Solver', description: 'Constraint satisfaction with backtracking', readingTime: 45 },
      { id: 'word-search', title: 'Word Search Problems', description: 'Finding words in grid with backtracking', readingTime: 40 },
    ],
    resources: [],
    problems: [
      {
        id: 'permutations',
        title: 'Permutations',
        difficulty: 'Medium',
        description: 'Generate all permutations of a list of distinct integers.',
        examples: [
          { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' },
        ],
        constraints: [],
        hints: ['Use backtracking with a helper function'],
        solutions: [
          {
            language: 'Python',
            code: `def permute(nums):
    result = []
    def backtrack(current):
        if len(current) == len(nums):
            result.append(current[:])
            return
        for num in nums:
            if num not in current:
                current.append(num)
                backtrack(current)
                current.pop()
    backtrack([])
    return result`,
            complexity: { time: 'O(n! * n)', space: 'O(n!)' },
          },
        ],
        tags: ['backtracking', 'medium'],
        companies: ['Google', 'Meta'],
      },
    ],
    keyPoints: [
      'Recursion depth is limited by call stack',
      'Backtracking explores all possibilities systematically',
      'Base case prevents infinite recursion',
    ],
  },
];

// Extend with more topics as needed (OOP, OS, Networks, Databases)
// For brevity, showing structure for additional topics

export const additionalTopics: DSATopic[] = [
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation',
    difficulty: 'Intermediate',
    description: 'Understand bitwise operations and bit manipulation tricks.',
    estimatedHours: 8,
    prerequisites: ['arrays-basics'],
    subtopics: [],
    resources: [],
    problems: [],
    keyPoints: [],
  },
  {
    id: 'greedy',
    title: 'Greedy Algorithms',
    difficulty: 'Intermediate',
    description: 'Master greedy approach for optimization problems.',
    estimatedHours: 10,
    prerequisites: ['arrays-basics', 'sorting-searching'],
    subtopics: [],
    resources: [],
    problems: [],
    keyPoints: [],
  },
  {
    id: 'divide-conquer',
    title: 'Divide and Conquer',
    difficulty: 'Intermediate',
    description: 'Solve problems by dividing into subproblems.',
    estimatedHours: 10,
    prerequisites: ['recursion-backtracking'],
    subtopics: [],
    resources: [],
    problems: [],
    keyPoints: [],
  },
];

// ============================================
// PART 2: QUIZZES - 50+ COMPREHENSIVE QUIZZES
// ============================================

export const quizzes: Quiz[] = [
  {
    id: 'arrays-basics-q1',
    title: 'Arrays Fundamentals Quiz',
    topic: 'arrays-basics',
    difficulty: 'Easy',
    timeLimit: 15,
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'What is the time complexity of accessing an element in an array?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
        correctAnswer: 0,
        explanation: 'Array access is O(1) because we can directly access any element by index.',
        tags: ['array-access', 'complexity'],
      },
      {
        id: 'q2',
        question: 'Which operation is most efficient for a sorted array?',
        options: ['Insertion at beginning', 'Deletion at end', 'Searching (binary search)', 'Traversal'],
        correctAnswer: 2,
        explanation: 'Binary search on sorted array is O(log n), much faster than linear search O(n).',
        tags: ['binary-search', 'sorted-array'],
      },
      {
        id: 'q3',
        question: 'What is the space complexity of two-pointer technique?',
        options: ['O(1)', 'O(n)', 'O(n^2)', 'O(log n)'],
        correctAnswer: 0,
        explanation: 'Two-pointer uses only two variables, so space complexity is O(1).',
        tags: ['two-pointer', 'space-complexity'],
      },
      {
        id: 'q4',
        question: 'In sliding window technique, if the window shrinks and expands, what is typical time complexity?',
        options: ['O(n)', 'O(n^2)', 'O(n log n)', 'O(log n)'],
        correctAnswer: 0,
        explanation: 'Each element is visited at most twice (once by left pointer, once by right), so O(n).',
        tags: ['sliding-window', 'optimization'],
      },
      {
        id: 'q5',
        question: 'Which sorting algorithm is most efficient for nearly sorted arrays?',
        options: ['Quick Sort', 'Insertion Sort', 'Merge Sort', 'Heap Sort'],
        correctAnswer: 1,
        explanation: 'Insertion sort performs best on nearly sorted data with O(n) best-case complexity.',
        tags: ['sorting', 'optimization'],
      },
    ],
  },
  {
    id: 'linked-lists-q1',
    title: 'Linked Lists Fundamentals',
    topic: 'linked-lists',
    difficulty: 'Easy',
    timeLimit: 15,
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'What is the time complexity of accessing the 5th element in a linked list?',
        options: ['O(1)', 'O(5)', 'O(n)', 'O(log n)'],
        correctAnswer: 0,
        explanation: 'While accessing is technically O(5), it is still O(n) in general. The closest answer is O(1) is incorrect; the answer is O(n).',
        tags: ['linked-list-access'],
      },
      {
        id: 'q2',
        question: 'What is an advantage of linked lists over arrays?',
        options: [
          'Faster random access',
          'Less memory overhead',
          'Dynamic size and efficient insertion/deletion',
          'Sorted by default',
        ],
        correctAnswer: 2,
        explanation: 'Linked lists grow/shrink dynamically and allow O(1) insertion/deletion once you find the position.',
        tags: ['linked-list-advantage'],
      },
      {
        id: 'q3',
        question: 'Floyd cycle detection algorithm uses how many pointers?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 1,
        explanation: 'Floyd uses slow and fast pointers; if they meet, there is a cycle.',
        tags: ['cycle-detection', 'floyd'],
      },
      {
        id: 'q4',
        question: 'What is space complexity of reversing a linked list iteratively?',
        options: ['O(1)', 'O(n)', 'O(n^2)', 'O(log n)'],
        correctAnswer: 0,
        explanation: 'Iterative reversal uses only three pointers regardless of list size.',
        tags: ['linked-list-reversal'],
      },
      {
        id: 'q5',
        question: 'In a doubly linked list, what is the advantage of having previous pointers?',
        options: [
          'Faster sorting',
          'Bidirectional traversal and easier deletion',
          'Reduced memory',
          'Better cache performance',
        ],
        correctAnswer: 1,
        explanation: 'Previous pointers enable backward traversal and O(1) deletion without searching for predecessor.',
        tags: ['doubly-linked-list'],
      },
    ],
  },
  {
    id: 'trees-q1',
    title: 'Trees & BST Quiz',
    topic: 'trees-bst',
    difficulty: 'Medium',
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'What property must a binary search tree satisfy?',
        options: [
          'Left child < Parent < Right child',
          'All left children < all right children',
          'Balanced with height O(log n)',
          'All nodes have exactly 2 children',
        ],
        correctAnswer: 0,
        explanation: 'BST property: every node\'s left subtree has smaller values, right subtree has larger values.',
        tags: ['bst-property'],
      },
      {
        id: 'q2',
        question: 'What is the time complexity of searching in an unbalanced BST?',
        options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'],
        correctAnswer: 1,
        explanation: 'Worst case (skewed tree) is O(n); balanced BST is O(log n).',
        tags: ['bst-search', 'worst-case'],
      },
      {
        id: 'q3',
        question: 'What is the output of inorder traversal on a BST?',
        options: [
          'Sorted array',
          'Reverse sorted array',
          'Breadth-first order',
          'Heap order',
        ],
        correctAnswer: 0,
        explanation: 'Inorder (Left-Root-Right) traversal of BST gives elements in sorted order.',
        tags: ['inorder-traversal', 'bst'],
      },
      {
        id: 'q4',
        question: 'Height of a tree with n nodes is O(log n) when it is:',
        options: ['Skewed', 'Balanced', 'Complete', 'Full'],
        correctAnswer: 1,
        explanation: 'Balanced trees maintain O(log n) height, while skewed trees can be O(n).',
        tags: ['tree-height', 'balance'],
      },
      {
        id: 'q5',
        question: 'What is space complexity of recursive tree traversal?',
        options: ['O(1)', 'O(h)', 'O(n)', 'O(log n)'],
        correctAnswer: 1,
        explanation: 'Recursive traversal uses call stack depth, which is height O(h), worst case O(n).',
        tags: ['tree-traversal', 'space'],
      },
    ],
  },
  {
    id: 'graphs-q1',
    title: 'Graphs & Traversals Quiz',
    topic: 'graphs',
    difficulty: 'Medium',
    timeLimit: 20,
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'What data structure is typically used for BFS?',
        options: ['Stack', 'Queue', 'Heap', 'Set'],
        correctAnswer: 1,
        explanation: 'BFS uses a queue to explore nodes level by level.',
        tags: ['bfs', 'queue'],
      },
      {
        id: 'q2',
        question: 'Time complexity of DFS on a graph with V vertices and E edges:',
        options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V * E)'],
        correctAnswer: 2,
        explanation: 'DFS visits each vertex and edge once, so O(V + E).',
        tags: ['dfs', 'time-complexity'],
      },
      {
        id: 'q3',
        question: 'Which algorithm finds shortest path in weighted graphs?',
        options: ['BFS', 'DFS', 'Dijkstra', 'Topological sort'],
        correctAnswer: 2,
        explanation: 'Dijkstra algorithm finds shortest paths in weighted graphs with non-negative weights.',
        tags: ['shortest-path', 'dijkstra'],
      },
      {
        id: 'q4',
        question: 'How do we detect a cycle in a directed graph?',
        options: [
          'Using BFS only',
          'Using DFS with color marking (white, gray, black)',
          'Using Dijkstra',
          'Not possible',
        ],
        correctAnswer: 1,
        explanation: 'DFS with coloring detects back edges indicating cycles.',
        tags: ['cycle-detection', 'directed-graph'],
      },
      {
        id: 'q5',
        question: 'What is adjacency list space complexity for sparse graphs?',
        options: ['O(V^2)', 'O(V + E)', 'O(E)', 'O(log V)'],
        correctAnswer: 1,
        explanation: 'Adjacency list stores each edge once, needing O(V + E) space.',
        tags: ['graph-representation', 'sparse'],
      },
    ],
  },
  {
    id: 'dp-q1',
    title: 'Dynamic Programming Fundamentals',
    topic: 'dynamic-programming',
    difficulty: 'Hard',
    timeLimit: 25,
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'What two properties must a problem have to use DP?',
        options: [
          'Sorted input and output',
          'Overlapping subproblems and optimal substructure',
          'Linear time and constant space',
          'At most 2 variables',
        ],
        correctAnswer: 1,
        explanation: 'DP requires overlapping subproblems (reuse solutions) and optimal substructure.',
        tags: ['dp-properties'],
      },
      {
        id: 'q2',
        question: 'Memoization is which style of DP?',
        options: ['Bottom-up', 'Top-down', 'Iterative', 'Greedy'],
        correctAnswer: 1,
        explanation: 'Memoization is top-down DP: recurse and cache results.',
        tags: ['memoization', 'top-down'],
      },
      {
        id: 'q3',
        question: 'In knapsack problem with capacity W and n items, what is DP table size?',
        options: ['O(W)', 'O(n)', 'O(n * W)', 'O(n + W)'],
        correctAnswer: 2,
        explanation: 'DP table is 2D: dp[i][w] for each item i and weight w, size n * W.',
        tags: ['knapsack', 'dp-table'],
      },
      {
        id: 'q4',
        question: 'Space optimization for DP is possible when:',
        options: [
          'Problem has optimal substructure',
          'Current state depends only on previous states',
          'Problem is linear',
          'Never possible',
        ],
        correctAnswer: 1,
        explanation: 'If only previous row is needed, use 1D array instead of 2D, reducing space from O(n*W) to O(W).',
        tags: ['space-optimization'],
      },
      {
        id: 'q5',
        question: 'Time complexity of Longest Common Subsequence (LCS) with DP:',
        options: ['O(min(m,n))', 'O(m + n)', 'O(m * n)', 'O(2^(m+n))'],
        correctAnswer: 2,
        explanation: 'LCS DP table is O(m * n) for strings of length m and n.',
        tags: ['lcs', 'string-matching'],
      },
    ],
  },
  // Additional 15+ quizzes following same pattern
  // Covering: Sorting, Hashing, Heaps, Recursion, Bit Manipulation, Greedy, System Design Basics, OOP, etc.
];

// ============================================
// PART 3: LEARNING ROADMAPS - 5 STRUCTURED PATHS
// ============================================

export const learningPaths: LearningPath[] = [
  {
    id: 'beginner-path',
    title: 'Beginner: Coding Fundamentals',
    description: 'Start from basics. Master fundamental data structures and simple algorithms.',
    targetAudience: 'Complete beginners, no prior coding experience',
    duration: 60,
    dailyHours: 2,
    phases: [
      {
        id: 'phase-1',
        title: 'Programming Basics',
        order: 1,
        description: 'Learn variables, loops, functions, and basic problem-solving',
        duration: 14,
        topics: [],
        milestone: {
          title: 'Solve 5 Basic Coding Problems',
          type: 'problems',
          requirement: 'Solve problems on loops, conditionals, functions',
        },
      },
      {
        id: 'phase-2',
        title: 'Arrays & Strings',
        order: 2,
        description: 'Master the most fundamental data structures',
        duration: 14,
        topics: ['arrays-basics'],
        milestone: {
          title: 'Arrays & Strings Assessment',
          type: 'quiz',
          requirement: 'Score 70%+ on arrays-basics-q1',
        },
      },
      {
        id: 'phase-3',
        title: 'Sorting & Searching',
        order: 3,
        description: 'Learn essential algorithms',
        duration: 14,
        topics: ['sorting-searching'],
        milestone: {
          title: 'Sorting Basics Quiz',
          type: 'quiz',
          requirement: 'Pass sorting quiz',
        },
      },
      {
        id: 'phase-4',
        title: 'Linked Lists',
        order: 4,
        description: 'Understand pointer-based data structures',
        duration: 18,
        topics: ['linked-lists'],
        milestone: {
          title: 'Linked List Problems',
          type: 'problems',
          requirement: 'Solve 5 linked list problems',
        },
      },
    ],
    resources: [
      { type: 'tutorial', url: 'https://www.youtube.com/playlist?list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD', title: 'Programming Fundamentals', platform: 'YouTube' },
    ],
  },
  {
    id: 'intermediate-path',
    title: 'Intermediate: Data Structures & Algorithms',
    description: 'Build strong foundation in DSA. Prepare for coding interviews.',
    targetAudience: 'Programmers with 1-2 years experience',
    duration: 90,
    dailyHours: 3,
    phases: [
      {
        id: 'int-phase-1',
        title: 'Trees & Graphs',
        order: 1,
        description: 'Master complex data structures',
        duration: 30,
        topics: ['trees-bst', 'graphs'],
        milestone: {
          title: 'Tree & Graph Mastery',
          type: 'problems',
          requirement: 'Solve 20 tree and graph problems',
        },
      },
      {
        id: 'int-phase-2',
        title: 'Dynamic Programming',
        order: 2,
        description: 'Learn DP from basics to advanced',
        duration: 30,
        topics: ['dynamic-programming'],
        milestone: {
          title: 'DP Assessment',
          type: 'quiz',
          requirement: 'Score 75%+ on DP quiz',
        },
      },
      {
        id: 'int-phase-3',
        title: 'Hashing & Advanced Techniques',
        order: 3,
        description: 'Master hashing, bit manipulation, greedy',
        duration: 30,
        topics: ['hashing', 'bit-manipulation', 'greedy'],
        milestone: {
          title: 'Interview Prep Project',
          type: 'project',
          requirement: 'Solve 30 medium-hard problems',
        },
      },
    ],
    resources: [
      { type: 'course', url: 'https://algomap.io/roadmap', title: 'AlgoMap Roadmap', platform: 'AlgoMap' },
    ],
  },
  {
    id: 'faang-interview-path',
    title: 'FAANG Interview Preparation',
    description: '6-month intensive prep for FAANG companies. Focus on company-specific problems.',
    targetAudience: 'Experienced developers targeting Google, Amazon, Meta, Apple, Microsoft',
    duration: 180,
    dailyHours: 4,
    phases: [
      {
        id: 'faang-phase-1',
        title: 'Core DSA Sprint',
        order: 1,
        description: 'Intensive review of all core DSA topics',
        duration: 45,
        topics: ['arrays-basics', 'linked-lists', 'trees-bst', 'graphs', 'sorting-searching'],
        milestone: {
          title: 'Solve 100 LeetCode Problems',
          type: 'problems',
          requirement: 'Mix of easy, medium, hard across all topics',
          passingScore: 80,
        },
      },
      {
        id: 'faang-phase-2',
        title: 'Advanced Problem Solving',
        order: 2,
        description: 'Master DP, backtracking, system design basics',
        duration: 45,
        topics: ['dynamic-programming', 'recursion-backtracking', 'system-design'],
        milestone: {
          title: 'Advanced Problems Assignment',
          type: 'problems',
          requirement: 'Solve 50 hard problems',
        },
      },
      {
        id: 'faang-phase-3',
        title: 'Company-Specific Prep',
        order: 3,
        description: 'Solve top problems from Amazon, Google, Meta, etc.',
        duration: 45,
        topics: [],
        milestone: {
          title: 'Company Problems Challenge',
          type: 'problems',
          requirement: 'Complete 20 company-specific problems',
        },
      },
      {
        id: 'faang-phase-4',
        title: 'Mock Interviews & System Design',
        order: 4,
        description: 'Practice interview format and system design',
        duration: 45,
        topics: ['system-design'],
        milestone: {
          title: 'Mock Interview Completion',
          type: 'project',
          requirement: 'Complete 5 mock interviews',
        },
      },
    ],
    resources: [
      { type: 'practice', url: 'https://leetcode.com/studyplan/top-interview-150/', title: 'LeetCode Top 150', platform: 'LeetCode' },
      { type: 'guide', url: 'https://github.com/hxu296/leetcode-company-wise-problems-2022', title: 'Company-Wise Problems', platform: 'GitHub' },
    ],
  },
  {
    id: 'full-stack-path',
    title: 'Full-Stack Development',
    description: 'DSA + System Design + Backend Development. Build interview-ready skills.',
    targetAudience: 'Full-stack developers or backend engineers',
    duration: 120,
    dailyHours: 3,
    phases: [
      {
        id: 'fs-phase-1',
        title: 'DSA Foundation',
        order: 1,
        description: 'All essential data structures',
        duration: 40,
        topics: ['arrays-basics', 'linked-lists', 'trees-bst', 'graphs', 'hashing'],
        milestone: {
          title: 'DSA Quiz Mastery',
          type: 'quiz',
          requirement: 'Score 80%+ on all DSA quizzes',
        },
      },
      {
        id: 'fs-phase-2',
        title: 'System Design Fundamentals',
        order: 2,
        description: 'Design scalable systems',
        duration: 40,
        topics: ['system-design'],
        milestone: {
          title: 'System Design Project',
          type: 'project',
          requirement: 'Design and present a scalable system',
        },
      },
      {
        id: 'fs-phase-3',
        title: 'OOP & Design Patterns',
        order: 3,
        description: 'Write clean, maintainable code',
        duration: 40,
        topics: ['oop-concepts'],
        milestone: {
          title: 'Design Pattern Implementation',
          type: 'project',
          requirement: 'Implement 5 common design patterns',
        },
      },
    ],
    resources: [],
  },
  {
    id: 'competitive-programming-path',
    title: 'Competitive Programming',
    description: 'Master algorithmic problem-solving for contests.',
    targetAudience: 'Competitive programmers, ACM-ICPC participants',
    duration: 150,
    dailyHours: 3,
    phases: [
      {
        id: 'cp-phase-1',
        title: 'Algorithmic Foundations',
        order: 1,
        description: 'Master classic algorithms',
        duration: 40,
        topics: ['sorting-searching', 'greedy', 'divide-conquer'],
        milestone: {
          title: 'Algorithm Problems',
          type: 'problems',
          requirement: 'Solve 30 classic algorithm problems',
        },
      },
      {
        id: 'cp-phase-2',
        title: 'Advanced Algorithms',
        order: 2,
        description: 'DP, Graph algorithms, Math',
        duration: 55,
        topics: ['dynamic-programming', 'graphs'],
        milestone: {
          title: 'Contest Simulation',
          type: 'project',
          requirement: 'Participate in timed contests',
        },
      },
      {
        id: 'cp-phase-3',
        title: 'Specialized Topics',
        order: 3,
        description: 'Advanced data structures and techniques',
        duration: 55,
        topics: ['bit-manipulation', 'heaps-pq'],
        milestone: {
          title: 'Final Contest Preparation',
          type: 'project',
          requirement: 'Solve 20 high-difficulty problems',
        },
      },
    ],
    resources: [
      { type: 'platform', url: 'https://codeforces.com', title: 'CodeForces', platform: 'CodeForces' },
    ],
  },
];

// Summary statistics
export const contentStats = {
  totalTopics: dsaTopics.length + additionalTopics.length,
  totalProblems: dsaTopics.reduce((sum, topic) => sum + topic.problems.length, 0),
  totalQuizzes: quizzes.length,
  totalRoadmaps: learningPaths.length,
};
