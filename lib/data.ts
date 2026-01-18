import { Domain, Topic, Problem, Resource, LearningRoadmap, DomainType, Quiz } from './types';

// MCQ Quiz Questions embedded in the system
export const quizzes: Quiz[] = [
  {
    id: 'arrays-quiz-1',
    topicId: 'arrays-101',
    title: 'Arrays Fundamentals Quiz',
    description: 'Test your knowledge of array basics',
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
        explanation: 'Array access by index is constant time O(1) because arrays store elements in contiguous memory locations, allowing direct calculation of the memory address.'
      },
      {
        id: 'q2',
        question: 'What is the time complexity of searching an unsorted array?',
        options: [
          { id: 'a', text: 'O(1)' },
          { id: 'b', text: 'O(n)' },
          { id: 'c', text: 'O(log n)' },
          { id: 'd', text: 'O(n log n)' }
        ],
        correctAnswer: 'b',
        explanation: 'Searching an unsorted array requires linear search, checking each element one by one, resulting in O(n) time complexity.'
      },
      {
        id: 'q3',
        question: 'Which operation is most efficient for arrays?',
        options: [
          { id: 'a', text: 'Insertion at beginning' },
          { id: 'b', text: 'Deletion from middle' },
          { id: 'c', text: 'Access by index' },
          { id: 'd', text: 'Searching' }
        ],
        correctAnswer: 'c',
        explanation: 'Accessing elements by index is the most efficient operation for arrays with O(1) time complexity.'
      },
      {
        id: 'q4',
        question: 'What is the space complexity of an array of size n?',
        options: [
          { id: 'a', text: 'O(1)' },
          { id: 'b', text: 'O(log n)' },
          { id: 'c', text: 'O(n)' },
          { id: 'd', text: 'O(n²)' }
        ],
        correctAnswer: 'c',
        explanation: 'An array of size n requires O(n) space to store n elements.'
      }
    ],
    difficulty: 'beginner',
    passingScore: 75
  },
  {
    id: 'linkedlist-quiz-1',
    topicId: 'linkedlist-101',
    title: 'Linked Lists Fundamentals',
    description: 'Test your knowledge of linked lists',
    questions: [
      {
        id: 'q1',
        question: 'What is the main advantage of linked lists over arrays?',
        options: [
          { id: 'a', text: 'Faster random access' },
          { id: 'b', text: 'Dynamic memory allocation' },
          { id: 'c', text: 'No need for memory' },
          { id: 'd', text: 'Better cache performance' }
        ],
        correctAnswer: 'b',
        explanation: 'Linked lists can grow and shrink dynamically, allocating memory as needed, unlike arrays which have fixed size.'
      },
      {
        id: 'q2',
        question: 'What is the time complexity of insertion after a known node in a linked list?',
        options: [
          { id: 'a', text: 'O(1)' },
          { id: 'b', text: 'O(n)' },
          { id: 'c', text: 'O(log n)' },
          { id: 'd', text: 'O(n²)' }
        ],
        correctAnswer: 'a',
        explanation: 'Insertion after a known node is O(1) because we only need to update a few pointers.'
      },
      {
        id: 'q3',
        question: 'What is the time complexity of searching in a linked list?',
        options: [
          { id: 'a', text: 'O(1)' },
          { id: 'b', text: 'O(n)' },
          { id: 'c', text: 'O(log n)' },
          { id: 'd', text: 'O(n log n)' }
        ],
        correctAnswer: 'b',
        explanation: 'Linked lists don\'t support random access, so searching requires traversing from the head, resulting in O(n) time.'
      }
    ],
    difficulty: 'beginner',
    passingScore: 75
  },
  {
    id: 'stack-quiz-1',
    topicId: 'stack-queue',
    title: 'Stack and Queue Fundamentals',
    description: 'Test your knowledge of LIFO and FIFO structures',
    questions: [
      {
        id: 'q1',
        question: 'What does LIFO stand for in the context of stacks?',
        options: [
          { id: 'a', text: 'Last In First Out' },
          { id: 'b', text: 'Last In, Few Operations' },
          { id: 'c', text: 'Linear Information Flow Output' },
          { id: 'd', text: 'List Implementation For Operations' }
        ],
        correctAnswer: 'a',
        explanation: 'LIFO (Last In First Out) means the last element added to the stack is the first one to be removed.'
      },
      {
        id: 'q2',
        question: 'Which of the following is a real-world application of stacks?',
        options: [
          { id: 'a', text: 'Browser back button' },
          { id: 'b', text: 'Printer queue' },
          { id: 'c', text: 'Traffic flow' },
          { id: 'd', text: 'Banking system' }
        ],
        correctAnswer: 'a',
        explanation: 'The browser back button uses a stack to store visited pages in LIFO order.'
      },
      {
        id: 'q3',
        question: 'What is the time complexity of push and pop operations in a stack?',
        options: [
          { id: 'a', text: 'O(n)' },
          { id: 'b', text: 'O(log n)' },
          { id: 'c', text: 'O(1)' },
          { id: 'd', text: 'O(n²)' }
        ],
        correctAnswer: 'c',
        explanation: 'Both push and pop operations in a stack are O(1) constant time operations.'
      }
    ],
    difficulty: 'beginner',
    passingScore: 75
  },
  {
    id: 'trees-quiz-1',
    topicId: 'trees-101',
    title: 'Binary Trees Fundamentals',
    description: 'Test your knowledge of tree structures',
    questions: [
      {
        id: 'q1',
        question: 'What is the maximum number of nodes in a complete binary tree of height h?',
        options: [
          { id: 'a', text: '2^h - 1' },
          { id: 'b', text: '2^(h+1) - 1' },
          { id: 'c', text: '2^h' },
          { id: 'd', text: 'h²' }
        ],
        correctAnswer: 'b',
        explanation: 'A complete binary tree of height h can have at most 2^(h+1) - 1 nodes when all levels are completely filled.'
      },
      {
        id: 'q2',
        question: 'In-order traversal of a Binary Search Tree gives elements in which order?',
        options: [
          { id: 'a', text: 'Random order' },
          { id: 'b', text: 'Sorted (ascending) order' },
          { id: 'c', text: 'Reverse sorted order' },
          { id: 'd', text: 'Level order' }
        ],
        correctAnswer: 'b',
        explanation: 'In-order traversal (Left, Root, Right) of a BST gives elements in ascending sorted order.'
      }
    ],
    difficulty: 'intermediate',
    passingScore: 75
  },
  {
    id: 'sorting-quiz-1',
    topicId: 'sorting-101',
    title: 'Sorting Algorithms Quiz',
    description: 'Test your knowledge of sorting techniques',
    questions: [
      {
        id: 'q1',
        question: 'Which sorting algorithm is most efficient for small datasets?',
        options: [
          { id: 'a', text: 'Quick Sort' },
          { id: 'b', text: 'Merge Sort' },
          { id: 'c', text: 'Insertion Sort' },
          { id: 'd', text: 'Heap Sort' }
        ],
        correctAnswer: 'c',
        explanation: 'Insertion Sort performs well on small datasets because of its low overhead and adaptive nature.'
      },
      {
        id: 'q2',
        question: 'What is the average time complexity of Quick Sort?',
        options: [
          { id: 'a', text: 'O(n)' },
          { id: 'b', text: 'O(n log n)' },
          { id: 'c', text: 'O(n²)' },
          { id: 'd', text: 'O(log n)' }
        ],
        correctAnswer: 'b',
        explanation: 'Quick Sort has an average time complexity of O(n log n) with good performance in practice.'
      },
      {
        id: 'q3',
        question: 'Which sorting algorithm is stable?',
        options: [
          { id: 'a', text: 'Bubble Sort' },
          { id: 'b', text: 'Heap Sort' },
          { id: 'c', text: 'Quick Sort' },
          { id: 'd', text: 'All of the above' }
        ],
        correctAnswer: 'a',
        explanation: 'Bubble Sort is stable - it maintains the relative order of equal elements. Heap Sort and Quick Sort are typically unstable.'
      }
    ],
    difficulty: 'intermediate',
    passingScore: 75
  }
];

// DSA Topics with comprehensive content
export const dsaTopics: Topic[] = [
  {
    id: 'arrays-101',
    domain: 'dsa',
    name: 'Arrays',
    description: 'Master arrays, the fundamental data structure',
    difficulty: 'beginner',
    estimatedTime: 240,
    subtopics: [
      {
        id: 'array-intro',
        name: 'Introduction to Arrays',
        content: `Arrays are the most fundamental data structure in computer science. An array is a collection of elements stored in contiguous memory locations. Arrays allow quick access to elements using indexes.

Key concepts:
- Fixed size allocation in memory
- O(1) access time using index
- O(n) search time for unsorted arrays
- Common operations: insert, delete, search, sort`,
        resources: [
          {
            id: 'arr-gfg-1',
            type: 'article',
            title: 'Arrays in Data Structures',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/array-data-structure/',
            difficulty: 'beginner',
            content: 'Comprehensive guide to arrays covering basics, operations, and time complexity analysis.'
          },
          {
            id: 'arr-w3-1',
            type: 'documentation',
            title: 'JavaScript Arrays',
            source: 'W3Schools',
            url: 'https://www.w3schools.com/js/js_arrays.asp',
            difficulty: 'beginner',
            content: 'Complete reference for JavaScript array methods and operations.'
          }
        ],
        problems: [],
        completed: false
      },
      {
        id: 'array-2d',
        name: '2D Arrays & Matrix',
        content: `2D Arrays (Matrices) extend 1D arrays to represent data in rows and columns format.

Applications:
- Image representation (pixel grids)
- Game boards (chess, tic-tac-toe)
- Graph adjacency matrices
- Matrix mathematical operations

Key operations:
- Row-wise traversal: O(m*n)
- Column-wise traversal: O(m*n)
- Diagonal traversal: O(min(m,n))
- Spiral traversal: O(m*n)`,
        resources: [
          {
            id: '2d-arr-1',
            type: 'article',
            title: '2D Array/Matrix',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/multidimensional-arrays-c-cpp/',
            difficulty: 'beginner'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  },
  {
    id: 'linkedlist-101',
    domain: 'dsa',
    name: 'Linked Lists',
    description: 'Learn about linked lists and their variants',
    difficulty: 'beginner',
    estimatedTime: 300,
    subtopics: [
      {
        id: 'll-basics',
        name: 'Singly Linked Lists',
        content: `Linked Lists are linear data structures where elements are stored in nodes. Each node contains data and a reference (link) to the next node.

Advantages over arrays:
- Dynamic size allocation
- Efficient insertion/deletion (O(1) if pointer is known)
- No memory wastage

Disadvantages:
- No random access (O(n) search)
- Extra memory for storing references
- Cache unfriendly`,
        resources: [
          {
            id: 'll-gfg-1',
            type: 'article',
            title: 'Singly Linked List Introduction',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/linked-list-set-1-introduction/',
            difficulty: 'beginner'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  },
  {
    id: 'stack-queue',
    domain: 'dsa',
    name: 'Stacks & Queues',
    description: 'Master LIFO and FIFO data structures',
    difficulty: 'beginner',
    estimatedTime: 280,
    subtopics: [
      {
        id: 'stack-intro',
        name: 'Stack (LIFO)',
        content: `Stack is a LIFO (Last In First Out) data structure. The last element added is the first one to be removed.

Real-world applications:
- Function call stack in programming
- Undo/Redo functionality
- Backtracking algorithms
- Expression evaluation (infix to postfix)

Key operations:
- Push: O(1)
- Pop: O(1)
- Peek: O(1)`,
        resources: [
          {
            id: 'stack-gfg-1',
            type: 'article',
            title: 'Stack Data Structure',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/stack-data-structure-introduction-program/',
            difficulty: 'beginner'
          }
        ],
        problems: [],
        completed: false
      },
      {
        id: 'queue-intro',
        name: 'Queue (FIFO)',
        content: `Queue is a FIFO (First In First Out) data structure. The first element added is the first one to be removed.

Real-world applications:
- Printer queue
- BFS (Breadth First Search)
- Message queues
- Load balancing

Key operations:
- Enqueue: O(1)
- Dequeue: O(1)
- Peek: O(1)`,
        resources: [
          {
            id: 'queue-gfg-1',
            type: 'article',
            title: 'Queue Data Structure',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/queue-data-structure/',
            difficulty: 'beginner'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  },
  {
    id: 'trees-101',
    domain: 'dsa',
    name: 'Trees',
    description: 'Understand tree structures and traversals',
    difficulty: 'intermediate',
    estimatedTime: 420,
    subtopics: [
      {
        id: 'tree-basics',
        name: 'Binary Trees',
        content: `A tree is a hierarchical data structure consisting of nodes connected by edges. Binary trees have at most 2 children per node.

Types:
- Full Binary Tree: Every node has 0 or 2 children
- Complete Binary Tree: All levels filled except possibly last
- Perfect Binary Tree: All internal nodes have 2 children
- Balanced Binary Tree: Height difference ≤ 1

Applications:
- File systems
- DOM in browsers
- Expression trees
- Huffman coding`,
        resources: [
          {
            id: 'tree-gfg-1',
            type: 'article',
            title: 'Binary Tree Introduction',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
            difficulty: 'intermediate'
          }
        ],
        problems: [],
        completed: false
      },
      {
        id: 'bst',
        name: 'Binary Search Trees',
        content: `BST is a binary tree where for each node:
- All values in left subtree < node value
- All values in right subtree > node value
- Left and right subtrees are also BSTs

Properties:
- In-order traversal gives sorted sequence
- Search: O(log n) average, O(n) worst
- Insertion: O(log n) average, O(n) worst
- Deletion: O(log n) average, O(n) worst

Balancing:
- AVL Trees: Height balanced
- Red-Black Trees: Color balanced`,
        resources: [
          {
            id: 'bst-gfg-1',
            type: 'article',
            title: 'Binary Search Tree',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/',
            difficulty: 'intermediate'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  },
  {
    id: 'graphs-101',
    domain: 'dsa',
    name: 'Graphs',
    description: 'Master graph theory and algorithms',
    difficulty: 'intermediate',
    estimatedTime: 480,
    subtopics: [
      {
        id: 'graph-basics',
        name: 'Graph Representation',
        content: `Graphs consist of vertices (nodes) and edges (connections). They model real-world relationships.

Types:
- Directed vs Undirected
- Weighted vs Unweighted
- Dense vs Sparse
- Cyclic vs Acyclic (DAG)

Representations:
- Adjacency Matrix: O(V²) space, O(1) edge lookup
- Adjacency List: O(V+E) space, O(degree) edge lookup
- Edge List: O(E) space`,
        resources: [
          {
            id: 'graph-gfg-1',
            type: 'article',
            title: 'Graph Representation',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
            difficulty: 'intermediate'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  },
  {
    id: 'sorting-101',
    domain: 'dsa',
    name: 'Sorting Algorithms',
    description: 'Learn all major sorting techniques',
    difficulty: 'intermediate',
    estimatedTime: 360,
    subtopics: [
      {
        id: 'sorting-basics',
        name: 'Sorting Fundamentals',
        content: `Sorting arranges elements in order. Key metrics:
- Time Complexity
- Space Complexity
- Stability: Do equal elements maintain relative order?
- In-place: Extra space O(1)?

Major Algorithms:
- Bubble Sort: O(n²), stable, in-place
- Insertion Sort: O(n²), stable, in-place
- Merge Sort: O(n log n), stable, not in-place
- Quick Sort: O(n log n) avg, unstable, in-place
- Heap Sort: O(n log n), unstable, in-place
- Counting Sort: O(n+k), stable, not in-place`,
        resources: [
          {
            id: 'sort-gfg-1',
            type: 'article',
            title: 'Sorting Algorithms',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/sorting-algorithms/',
            difficulty: 'intermediate'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  },
  {
    id: 'searching-101',
    domain: 'dsa',
    name: 'Searching Algorithms',
    description: 'Master search techniques',
    difficulty: 'beginner',
    estimatedTime: 200,
    subtopics: [
      {
        id: 'linear-binary',
        name: 'Linear & Binary Search',
        content: `Linear Search:
- Time: O(n)
- Works on unsorted arrays
- Simplest approach

Binary Search:
- Time: O(log n)
- Requires sorted array
- Efficient for large datasets

Variations:
- Search first/last occurrence
- Search in rotated array
- Search insert position`,
        resources: [
          {
            id: 'search-gfg-1',
            type: 'article',
            title: 'Searching Algorithms',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/searching-algorithms/',
            difficulty: 'beginner'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  },
  {
    id: 'hashing-101',
    domain: 'dsa',
    name: 'Hashing',
    description: 'Learn hash tables and hash functions',
    difficulty: 'intermediate',
    estimatedTime: 280,
    subtopics: [
      {
        id: 'hash-tables',
        name: 'Hash Tables & Hash Maps',
        content: `Hash tables use hash functions to map keys to values.

Key concepts:
- Hash function: Map key → index
- Collision handling: Chaining, Open addressing
- Load factor: n/capacity
- Resize: Double capacity when needed

Time Complexity (average):
- Insert: O(1)
- Delete: O(1)
- Search: O(1)

Applications:
- Caching
- Database indexing
- Count frequencies
- Detecting duplicates`,
        resources: [
          {
            id: 'hash-gfg-1',
            type: 'article',
            title: 'Hashing Introduction',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/hashing-set-1-introduction/',
            difficulty: 'intermediate'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  }
];

// System Design Topics
export const systemDesignTopics: Topic[] = [
  {
    id: 'system-design-intro',
    domain: 'system-design',
    name: 'System Design Fundamentals',
    description: 'Core concepts for designing scalable systems',
    difficulty: 'advanced',
    estimatedTime: 500,
    subtopics: [
      {
        id: 'sd-basics',
        name: 'Core Concepts',
        content: `Fundamental principles:
- Scalability: Horizontal vs Vertical
- Load Balancing
- Caching strategies
- Database design
- Message queues
- Microservices architecture

Key metrics:
- Latency: Response time
- Throughput: Requests per second
- Availability: Uptime percentage
- Consistency: Data accuracy`,
        resources: [
          {
            id: 'sd-gfg-1',
            type: 'article',
            title: 'System Design',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/system-design-tutorial/',
            difficulty: 'advanced'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  }
];

// OOP Concepts
export const oopTopics: Topic[] = [
  {
    id: 'oops-intro',
    domain: 'oops',
    name: 'OOP Fundamentals',
    description: 'Object-Oriented Programming concepts',
    difficulty: 'beginner',
    estimatedTime: 300,
    subtopics: [
      {
        id: 'oops-basics',
        name: 'Basics of OOP',
        content: `Four Pillars of OOP:
1. Encapsulation: Bundle data + methods, hide internal details
2. Inheritance: Reuse code through hierarchies
3. Polymorphism: Same interface, different implementations
4. Abstraction: Hide complexity, show essential features

Concepts:
- Classes and Objects
- Methods and Attributes
- Access modifiers: public, private, protected
- Static vs Instance members
- Constructors and Destructors`,
        resources: [
          {
            id: 'oops-gfg-1',
            type: 'article',
            title: 'OOP Concepts',
            source: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/',
            difficulty: 'beginner'
          }
        ],
        problems: [],
        completed: false
      }
    ]
  }
];

// Complete domains list
export const domains: Domain[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: '📊',
    description: 'Master arrays, linked lists, trees, graphs, and essential algorithms',
    topics: ['arrays-101', 'linkedlist-101', 'stack-queue', 'trees-101', 'graphs-101', 'sorting-101', 'searching-101', 'hashing-101'],
    difficulty: 'beginner'
  },
  {
    id: 'oops',
    name: 'Object-Oriented Programming',
    icon: '🎯',
    description: 'Learn OOP principles, design patterns, and best practices',
    topics: ['oops-intro'],
    difficulty: 'beginner'
  },
  {
    id: 'system-design',
    name: 'System Design',
    icon: '🏗️',
    description: 'Design large-scale distributed systems',
    topics: ['system-design-intro'],
    difficulty: 'advanced'
  },
  {
    id: 'os',
    name: 'Operating Systems',
    icon: '💻',
    description: 'Understand processes, threads, memory management, and scheduling',
    topics: [],
    difficulty: 'intermediate'
  },
  {
    id: 'dbms',
    name: 'Database Management',
    icon: '🗄️',
    description: 'SQL, NoSQL, indexing, and query optimization',
    topics: [],
    difficulty: 'intermediate'
  },
  {
    id: 'networking',
    name: 'Computer Networks',
    icon: '🌐',
    description: 'TCP/IP, HTTP, DNS, and network protocols',
    topics: [],
    difficulty: 'intermediate'
  },
  {
    id: 'web',
    name: 'Web Development',
    icon: '🌍',
    description: 'Frontend, Backend, Full-stack development',
    topics: [],
    difficulty: 'beginner'
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    icon: '☁️',
    description: 'Docker, Kubernetes, CI/CD, Cloud platforms',
    topics: [],
    difficulty: 'intermediate'
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: '🤖',
    description: 'ML fundamentals, algorithms, and applications',
    topics: [],
    difficulty: 'advanced'
  }
];

// Sample problems for practice
export const sampleProblems: Problem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target. You may assume that each input has exactly one solution, and you may not use the same element twice.',
    difficulty: 'easy',
    constraints: [
      '2 <= nums.length <= 10⁴',
      '-10⁹ <= nums[i] <= 10⁹',
      '-10⁹ <= target <= 10⁹'
    ],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'The sum of 2 and 7 is 9. Therefore, index0 and index 1 are returned.'
      }
    ],
    solutions: [
      {
        id: 'sol-1',
        language: 'javascript',
        code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
        complexity: {
          time: 'O(n)',
          space: 'O(n)'
        },
        explanation: 'Use a hash map to store elements and their indices. For each element, check if complement exists in map.',
        votes: 1250
      }
    ],
    acceptance: 47.8,
    likes: 2340,
    category: ['Array', 'Hash Table'],
    companies: ['Google', 'Facebook', 'Amazon', 'Apple', 'Microsoft'],
    isLiked: false,
    isSolved: false,
    attempts: 0
  },
  {
    id: 'reverse-string',
    title: 'Reverse String',
    description: 'Write a function that reverses a string. The input string is given as an array of characters s.',
    difficulty: 'easy',
    constraints: [
      '1 <= s.length <= 10⁵',
      's[i] is a printable ascii character.'
    ],
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
        explanation: 'Reversed array of characters'
      }
    ],
    solutions: [
      {
        id: 'sol-2',
        language: 'javascript',
        code: `function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}`,
        complexity: {
          time: 'O(n)',
          space: 'O(1)'
        },
        explanation: 'Use two pointers approach to reverse the array in-place.',
        votes: 890
      }
    ],
    acceptance: 86.2,
    likes: 1560,
    category: ['String', 'Two Pointers'],
    companies: ['Microsoft', 'Google', 'Amazon'],
    isLiked: false,
    isSolved: false,
    attempts: 0
  }
];

// Learning Roadmaps
export const learningRoadmaps: LearningRoadmap[] = [
  {
    id: 'beginner-roadmap',
    name: 'Complete Beginner Path',
    description: 'Start your coding journey from scratch',
    goals: [
      'Understand fundamental data structures',
      'Learn basic algorithms',
      'Solve easy-level problems',
      'Build problem-solving confidence'
    ],
    topics: dsaTopics.slice(0, 3),
    duration: 8,
    difficulty: 'beginner',
    progression: 0
  },
  {
    id: 'intermediate-roadmap',
    name: 'Intermediate Interview Prep',
    description: 'Prepare for technical interviews with medium-level problems',
    goals: [
      'Master advanced data structures',
      'Solve medium problems efficiently',
      'Understand time/space complexity',
      'Learn optimization techniques'
    ],
    topics: dsaTopics,
    duration: 12,
    difficulty: 'intermediate',
    progression: 0
  },
  {
    id: 'advanced-roadmap',
    name: 'Advanced System Design',
    description: 'Design large-scale systems',
    goals: [
      'Learn system design principles',
      'Design real-world systems',
      'Handle scalability challenges',
      'Make architectural decisions'
    ],
    topics: systemDesignTopics,
    duration: 16,
    difficulty: 'advanced',
    progression: 0
  }
];
