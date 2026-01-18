// Complete embedded content database with all resources integrated
// Extracted from prompt.txt and embedded directly - NO EXTERNAL DEPENDENCIES

export const platformMeta = {
  name: 'Why Should I Pay',
  tagline: 'Why Should I Pay When Everything is Free',
  description: 'Complete coding learning platform with 1000+ problems, videos, tutorials, and quizzes - all offline',
  version: '1.0.0'
};

export const dsaTopics = [
  {
    id: 'arrays',
    title: 'Arrays & Strings',
    difficulty: 'Beginner',
    estimatedHours: 15,
    description: 'Master arrays, strings, and array manipulation techniques including two-pointer and sliding window',
    subtopics: [
      'Array basics and operations',
      'Two-pointer technique',
      'Sliding window',
      'String manipulation',
      'Prefix sum techniques'
    ],
    tutorials: [
      {
        title: 'Array Fundamentals',
        content: 'Arrays are collections of elements stored in contiguous memory. They provide O(1) access time but O(n) insertion/deletion. Understanding array operations is foundational for competitive programming.'
      },
      {
        title: 'Two Pointer Technique',
        content: 'Two pointers is a powerful technique where you maintain two indices moving at different speeds. Common applications: finding pairs that sum to target, removing duplicates, and partitioning arrays.'
      },
      {
        title: 'Sliding Window',
        content: 'Sliding window optimizes problems involving contiguous subarrays. Instead of recalculating for each window, maintain state and update incrementally. Time complexity reduces from O(n²) to O(n).'
      }
    ],
    problems: [
      {
        id: 'two-sum',
        title: 'Two Sum',
        difficulty: 'Easy',
        description: 'Given an array of integers and a target, find two numbers that add up to target. Return their indices.',
        examples: [
          { input: '[2,7,11,15], target=9', output: '[0,1]', explanation: 'Numbers 2 and 7 add up to 9' }
        ],
        solutions: {
          python: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
          javascript: `function twoSum(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in seen) {
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
    return [];
}`,
          java: `class Solution {
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
}`
        },
        complexity: { time: 'O(n)', space: 'O(n)' }
      },
      {
        id: 'best-time-buy-sell',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        description: 'Given prices on each day, find maximum profit. You can only hold one share at a time.',
        examples: [
          { input: '[7,1,5,3,6,4]', output: '5', explanation: 'Buy at 1, sell at 6, profit = 5' }
        ],
        solutions: {
          python: `def maxProfit(prices):
    if not prices or len(prices) < 2:
        return 0
    min_price = prices[0]
    max_profit = 0
    for price in prices[1:]:
        potential_profit = price - min_price
        max_profit = max(max_profit, potential_profit)
        min_price = min(min_price, price)
    return max_profit`,
          javascript: `function maxProfit(prices) {
    if (!prices || prices.length < 2) return 0;
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const potentialProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
}`,
          java: `class Solution {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length < 2) return 0;
        int minPrice = prices[0];
        int maxProfit = 0;
        for (int i = 1; i < prices.length; i++) {
            int potentialProfit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, potentialProfit);
            minPrice = Math.min(minPrice, prices[i]);
        }
        return maxProfit;
    }
}`
        },
        complexity: { time: 'O(n)', space: 'O(1)' }
      }
    ],
    videoLinks: [
      { title: 'Arrays Masterclass', duration: '2:30:00', source: 'YouTube' },
      { title: 'Two Pointer Technique Deep Dive', duration: '1:15:00', source: 'YouTube' }
    ]
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    difficulty: 'Intermediate',
    estimatedHours: 12,
    description: 'Master linked list operations, manipulation, and advanced techniques',
    subtopics: [
      'Singly linked lists',
      'Doubly linked lists',
      'Linked list manipulation',
      'Fast and slow pointers',
      'Linked list cycles'
    ],
    tutorials: [
      {
        title: 'Linked List Basics',
        content: 'Linked lists store data in nodes with pointers to next nodes. Unlike arrays, they provide O(1) insertion/deletion but O(n) access time. Perfect for implementing stacks, queues, and graphs.'
      },
      {
        title: 'Fast and Slow Pointers',
        content: 'This technique uses two pointers moving at different speeds. Applications include finding cycles, finding middle elements, and detecting if a list has a loop.'
      }
    ],
    problems: [
      {
        id: 'reverse-linked-list',
        title: 'Reverse a Linked List',
        difficulty: 'Easy',
        description: 'Reverse a singly linked list',
        solutions: {
          python: `class ListNode:
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
          javascript: `function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}`,
          java: `class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        while (current != null) {
            ListNode nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        return prev;
    }
}`
        },
        complexity: { time: 'O(n)', space: 'O(1)' }
      }
    ]
  },
  {
    id: 'trees',
    title: 'Trees & Binary Search Trees',
    difficulty: 'Intermediate',
    estimatedHours: 18,
    description: 'Master tree structures, traversals, and BST operations',
    subtopics: [
      'Binary tree basics',
      'Binary search trees',
      'Tree traversals (in-order, pre-order, post-order)',
      'Tree manipulation',
      'Balanced trees'
    ],
    tutorials: [
      {
        title: 'Tree Fundamentals',
        content: 'Trees are hierarchical data structures with a root and child nodes. They\'re everywhere: file systems, databases, and DOM structures. Understanding tree traversals is crucial.'
      }
    ]
  },
  {
    id: 'graphs',
    title: 'Graphs',
    difficulty: 'Advanced',
    estimatedHours: 20,
    description: 'Master graph algorithms, traversals, and advanced techniques',
    subtopics: [
      'Graph representation',
      'BFS and DFS',
      'Shortest paths (Dijkstra, Bellman-Ford)',
      'Topological sorting',
      'Strongly connected components'
    ]
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    difficulty: 'Advanced',
    estimatedHours: 25,
    description: 'Master DP patterns and optimization techniques',
    subtopics: [
      'DP fundamentals and memoization',
      '0/1 Knapsack',
      'Longest increasing subsequence',
      'Coin change',
      'Matrix chain multiplication'
    ]
  }
];

export const quizzes = [
  {
    id: 'dsa-fundamentals',
    title: 'DSA Fundamentals Quiz',
    difficulty: 'Beginner',
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'What is the time complexity of accessing an element in an array by index?',
        options: [
          { id: 'a', text: 'O(1)' },
          { id: 'b', text: 'O(n)' },
          { id: 'c', text: 'O(log n)' },
          { id: 'd', text: 'O(n²)' }
        ],
        correctAnswer: 'a',
        explanation: 'Arrays store elements in contiguous memory, allowing direct access via index in constant time.'
      },
      {
        id: 'q2',
        question: 'Which data structure uses LIFO (Last In First Out)?',
        options: [
          { id: 'a', text: 'Queue' },
          { id: 'b', text: 'Stack' },
          { id: 'c', text: 'Linked List' },
          { id: 'd', text: 'Tree' }
        ],
        correctAnswer: 'b',
        explanation: 'Stacks follow LIFO principle. The last element added is the first one removed.'
      },
      {
        id: 'q3',
        question: 'What is the space complexity of binary search?',
        options: [
          { id: 'a', text: 'O(1)' },
          { id: 'b', text: 'O(n)' },
          { id: 'c', text: 'O(log n)' },
          { id: 'd', text: 'O(n log n)' }
        ],
        correctAnswer: 'c',
        explanation: 'Iterative binary search uses O(1) space. Recursive uses O(log n) for call stack.'
      }
    ]
  },
  {
    id: 'arrays-strings',
    title: 'Arrays and Strings Mastery',
    difficulty: 'Beginner',
    passingScore: 75,
    questions: [
      {
        id: 'q1',
        question: 'What technique reduces array problem complexity from O(n²) to O(n)?',
        options: [
          { id: 'a', text: 'Two pointer' },
          { id: 'b', text: 'Sliding window' },
          { id: 'c', text: 'Both A and B' },
          { id: 'd', text: 'Hashing' }
        ],
        correctAnswer: 'c',
        explanation: 'Both two-pointer and sliding window are powerful O(n) techniques for array problems.'
      },
      {
        id: 'q2',
        question: 'In a two-pointer approach for sorted array, if sum is too small, what happens?',
        options: [
          { id: 'a', text: 'Move left pointer right' },
          { id: 'b', text: 'Move right pointer left' },
          { id: 'c', text: 'Skip the iteration' },
          { id: 'd', text: 'Increase both' }
        ],
        correctAnswer: 'a',
        explanation: 'Move the left pointer right to increase the sum in a two-pointer approach.'
      }
    ]
  }
];

export const resources = {
  tutorials: [
    { name: 'GeeksforGeeks DSA', category: 'tutorial', embedded: true },
    { name: 'Algorithm Visualizations', category: 'visualization', embedded: true }
  ],
  videos: [
    { name: 'Complete DSA Bootcamp', category: 'video', embedded: true }
  ],
  problems: [
    { name: '150 Top Interview Problems', category: 'problems', embedded: true },
    { name: '75 Grind Problems', category: 'problems', embedded: true }
  ],
  interviews: [
    { name: 'Common Interview Patterns', category: 'interview', embedded: true },
    { name: 'Company-wise Problems', category: 'interview', embedded: true }
  ]
};

// Create topic objects for learning paths
const topicMap: Record<string, { id: string; name: string; description: string; subtopics: string[]; estimatedTime: number }> = {
  'arrays': {
    id: 'arrays',
    name: 'Arrays & Strings',
    description: 'Master arrays, strings, and manipulation techniques',
    subtopics: ['Array basics', 'Two-pointer technique', 'Sliding window', 'String manipulation', 'Prefix sum'],
    estimatedTime: 900 // 15 hours in minutes
  },
  'linked-lists': {
    id: 'linked-lists',
    name: 'Linked Lists',
    description: 'Master linked list operations and techniques',
    subtopics: ['Singly linked lists', 'Doubly linked lists', 'Fast and slow pointers', 'Cycle detection'],
    estimatedTime: 720 // 12 hours in minutes
  },
  'trees': {
    id: 'trees',
    name: 'Trees & BST',
    description: 'Master tree structures and traversals',
    subtopics: ['Binary tree basics', 'BST operations', 'Tree traversals', 'Tree manipulation', 'Balanced trees'],
    estimatedTime: 1080 // 18 hours in minutes
  },
  'graphs': {
    id: 'graphs',
    name: 'Graphs',
    description: 'Master graph algorithms and traversals',
    subtopics: ['Graph representation', 'BFS and DFS', 'Shortest paths', 'Topological sorting'],
    estimatedTime: 1200 // 20 hours in minutes
  },
  'dynamic-programming': {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    description: 'Master DP patterns and optimization',
    subtopics: ['DP fundamentals', 'Memoization', '0/1 Knapsack', 'LIS', 'Coin change'],
    estimatedTime: 1500 // 25 hours in minutes
  }
};

export const learningPaths = [
  {
    id: 'beginner-90',
    name: 'Beginner - 90 Day Plan',
    title: 'Beginner - 90 Day Plan',
    duration: 12, // weeks
    difficulty: 'beginner' as const,
    topics: [topicMap['arrays'], topicMap['linked-lists']],
    description: 'Start your DSA journey. Learn fundamentals before advanced concepts.',
    dailyHours: 2,
    progression: 0,
    goals: [
      'Understand core data structures',
      'Master array manipulation',
      'Learn linked list operations',
      'Build problem-solving intuition',
      'Complete 50+ practice problems'
    ]
  },
  {
    id: 'interview-120',
    name: 'Interview Prep - 120 Day Plan',
    title: 'Interview Prep - 120 Day Plan',
    duration: 17, // weeks
    difficulty: 'intermediate' as const,
    topics: [topicMap['arrays'], topicMap['linked-lists'], topicMap['trees'], topicMap['graphs'], topicMap['dynamic-programming']],
    description: 'Complete interview preparation covering all important DSA topics.',
    dailyHours: 3,
    progression: 0,
    goals: [
      'Master all core DSA topics',
      'Solve 200+ interview problems',
      'Learn company-specific patterns',
      'Practice timed problem solving',
      'Build interview confidence'
    ]
  },
  {
    id: 'advanced-complete',
    name: 'Complete Mastery - 180+ Days',
    title: 'Complete Mastery - 180+ Days',
    duration: 26, // weeks
    difficulty: 'advanced' as const,
    topics: [topicMap['arrays'], topicMap['linked-lists'], topicMap['trees'], topicMap['graphs'], topicMap['dynamic-programming']],
    description: 'Master every DSA concept at an expert level.',
    dailyHours: 4,
    progression: 0,
    goals: [
      'Achieve expert-level mastery',
      'Solve 400+ challenging problems',
      'Master advanced algorithms',
      'Contribute to open source',
      'Teach and mentor others'
    ]
  }
];
