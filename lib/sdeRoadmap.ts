// Complete 10-Month SDE Interview Roadmap
// Structured learning path for comprehensive interview preparation

export interface RoadmapWeek {
    week: number;
    theme: string;
    topics: string[];
    problems: string[]; // Problem IDs from problemCatalog
    resources: string[]; // Resource IDs from resourceCatalog
    estimatedHours: number;
    goals: string[];
}

export interface RoadmapPhase {
    id: string;
    name: string;
    description: string;
    duration: string;
    weeks: RoadmapWeek[];
    milestones: string[];
}

export interface SDERoadmap {
    id: string;
    name: string;
    description: string;
    totalMonths: number;
    dailyHours: number;
    phases: RoadmapPhase[];
}

// ============================================
// 10-MONTH SDE INTERVIEW PREP ROADMAP
// ============================================
export const sdeRoadmap: SDERoadmap = {
    id: 'sde-10-month',
    name: 'SDE Interview Preparation - 10 Month Plan',
    description: 'Complete roadmap from fundamentals to interview-ready. Covers DSA, System Design, and mock interviews.',
    totalMonths: 10,
    dailyHours: 3,
    phases: [
        // ============================================
        // PHASE 1: FOUNDATIONS (2 MONTHS)
        // ============================================
        {
            id: 'foundations',
            name: 'Foundations',
            description: 'Build a strong foundation in programming and basic data structures',
            duration: '2 months',
            weeks: [
                {
                    week: 1,
                    theme: 'Programming Fundamentals',
                    topics: ['Variables', 'Data Types', 'Control Flow', 'Functions'],
                    problems: [],
                    resources: ['gfg-dsa-tutorial'],
                    estimatedHours: 15,
                    goals: ['Understand basic programming', 'Write clean code']
                },
                {
                    week: 2,
                    theme: 'Arrays - Part 1',
                    topics: ['Array basics', 'Array operations', 'Time complexity'],
                    problems: ['two-sum', 'contains-duplicate'],
                    resources: ['gfg-arrays', 'visualgo'],
                    estimatedHours: 18,
                    goals: ['Master array fundamentals', 'Understand O(n) operations']
                },
                {
                    week: 3,
                    theme: 'Arrays - Part 2',
                    topics: ['Two pointers', 'Sliding window basics'],
                    problems: ['best-time-buy-sell', 'container-water'],
                    resources: ['14-patterns'],
                    estimatedHours: 18,
                    goals: ['Learn two-pointer technique', 'Solve sliding window problems']
                },
                {
                    week: 4,
                    theme: 'Strings',
                    topics: ['String manipulation', 'Character arrays', 'Pattern matching'],
                    problems: ['valid-palindrome', 'valid-anagram', 'valid-parentheses'],
                    resources: ['gfg-dsa-tutorial'],
                    estimatedHours: 18,
                    goals: ['Master string operations', 'Handle edge cases']
                },
                {
                    week: 5,
                    theme: 'Linked Lists - Part 1',
                    topics: ['Singly linked lists', 'Node operations'],
                    problems: ['reverse-list', 'merge-two-lists'],
                    resources: ['gfg-linked-list', 'visualgo'],
                    estimatedHours: 18,
                    goals: ['Implement linked list from scratch', 'Understand pointer manipulation']
                },
                {
                    week: 6,
                    theme: 'Linked Lists - Part 2',
                    topics: ['Fast/slow pointers', 'Cycle detection'],
                    problems: ['linked-list-cycle', 'remove-nth', 'reorder-list'],
                    resources: ['gfg-linked-list'],
                    estimatedHours: 18,
                    goals: ['Master two-pointer technique for lists', 'Detect and handle cycles']
                },
                {
                    week: 7,
                    theme: 'Stacks',
                    topics: ['LIFO principle', 'Stack operations', 'Applications'],
                    problems: ['valid-parentheses'],
                    resources: ['gfg-stack', 'visualgo'],
                    estimatedHours: 15,
                    goals: ['Implement stack', 'Solve bracket matching problems']
                },
                {
                    week: 8,
                    theme: 'Queues & Review',
                    topics: ['FIFO principle', 'Queue operations', 'Circular queue'],
                    problems: [],
                    resources: ['gfg-queue'],
                    estimatedHours: 15,
                    goals: ['Implement queue', 'Review all Phase 1 concepts']
                }
            ],
            milestones: [
                'Complete 20+ easy problems',
                'Understand basic data structures',
                'Write clean, efficient code'
            ]
        },

        // ============================================
        // PHASE 2: CORE DSA (3 MONTHS)
        // ============================================
        {
            id: 'core-dsa',
            name: 'Core DSA',
            description: 'Master essential algorithms and intermediate data structures',
            duration: '3 months',
            weeks: [
                {
                    week: 9,
                    theme: 'Binary Search',
                    topics: ['Binary search algorithm', 'Search variations'],
                    problems: ['find-min-rotated', 'search-rotated'],
                    resources: ['gfg-searching', 'visualgo'],
                    estimatedHours: 18,
                    goals: ['Master binary search', 'Handle rotated arrays']
                },
                {
                    week: 10,
                    theme: 'Sorting Algorithms',
                    topics: ['Merge sort', 'Quick sort', 'Comparison sorts'],
                    problems: [],
                    resources: ['gfg-sorting', 'visualgo'],
                    estimatedHours: 18,
                    goals: ['Implement O(n log n) sorts', 'Understand stability']
                },
                {
                    week: 11,
                    theme: 'Hash Tables',
                    topics: ['Hash functions', 'Collision handling', 'Applications'],
                    problems: ['group-anagrams', 'longest-consecutive'],
                    resources: ['gfg-hashing'],
                    estimatedHours: 18,
                    goals: ['Master hash table operations', 'Solve frequency problems']
                },
                {
                    week: 12,
                    theme: 'Two Pointers Advanced',
                    topics: ['Three sum', 'Container problems'],
                    problems: ['three-sum', 'container-water'],
                    resources: ['14-patterns'],
                    estimatedHours: 18,
                    goals: ['Solve multi-pointer problems', 'Optimize brute force solutions']
                },
                {
                    week: 13,
                    theme: 'Sliding Window',
                    topics: ['Fixed window', 'Variable window'],
                    problems: ['longest-substring', 'longest-repeating-replacement'],
                    resources: ['14-patterns'],
                    estimatedHours: 18,
                    goals: ['Master sliding window technique', 'Handle string windows']
                },
                {
                    week: 14,
                    theme: 'Binary Trees - Basics',
                    topics: ['Tree traversals', 'DFS basics'],
                    problems: ['max-depth', 'same-tree', 'invert-tree'],
                    resources: ['gfg-binary-tree', 'visualgo'],
                    estimatedHours: 18,
                    goals: ['Implement tree traversals', 'Understand recursion in trees']
                },
                {
                    week: 15,
                    theme: 'Binary Trees - Advanced',
                    topics: ['Level order', 'Path problems'],
                    problems: ['level-order', 'subtree', 'max-path-sum'],
                    resources: ['gfg-binary-tree'],
                    estimatedHours: 18,
                    goals: ['Solve advanced tree problems', 'Handle complex paths']
                },
                {
                    week: 16,
                    theme: 'Binary Search Trees',
                    topics: ['BST operations', 'BST properties'],
                    problems: ['validate-bst', 'kth-smallest-bst', 'lca-bst'],
                    resources: ['gfg-bst'],
                    estimatedHours: 18,
                    goals: ['Master BST operations', 'Use BST properties efficiently']
                },
                {
                    week: 17,
                    theme: 'Heaps & Priority Queues',
                    topics: ['Heap operations', 'Top K problems'],
                    problems: ['top-k-frequent', 'merge-k-lists'],
                    resources: ['visualgo'],
                    estimatedHours: 18,
                    goals: ['Implement heap', 'Solve priority queue problems']
                },
                {
                    week: 18,
                    theme: 'Graphs - Basics',
                    topics: ['Graph representation', 'BFS', 'DFS'],
                    problems: ['number-of-islands', 'clone-graph'],
                    resources: ['gfg-graphs', 'visualgo'],
                    estimatedHours: 20,
                    goals: ['Implement graph traversals', 'Solve matrix problems']
                },
                {
                    week: 19,
                    theme: 'Graphs - Advanced',
                    topics: ['Topological sort', 'Union find'],
                    problems: ['course-schedule', 'valid-tree', 'connected-components'],
                    resources: ['gfg-graphs'],
                    estimatedHours: 20,
                    goals: ['Master advanced graph algorithms', 'Handle DAGs']
                },
                {
                    week: 20,
                    theme: 'Review & Practice',
                    topics: ['All DSA topics review'],
                    problems: [],
                    resources: ['grind75'],
                    estimatedHours: 20,
                    goals: ['Review all concepts', 'Complete 50+ medium problems']
                }
            ],
            milestones: [
                'Complete 60+ medium problems',
                'Master all core algorithms',
                'Handle graph and tree problems confidently'
            ]
        },

        // ============================================
        // PHASE 3: ADVANCED TOPICS (2 MONTHS)
        // ============================================
        {
            id: 'advanced',
            name: 'Advanced Topics',
            description: 'Master dynamic programming, tries, and advanced techniques',
            duration: '2 months',
            weeks: [
                {
                    week: 21,
                    theme: 'Dynamic Programming - Basics',
                    topics: ['Memoization', 'Tabulation', 'Fibonacci pattern'],
                    problems: ['climbing-stairs', 'house-robber'],
                    resources: ['gfg-dsa-tutorial'],
                    estimatedHours: 20,
                    goals: ['Understand DP principles', 'Master 1D DP']
                },
                {
                    week: 22,
                    theme: 'DP - Sequences',
                    topics: ['LIS', 'LCS', 'Subsequence problems'],
                    problems: ['lis', 'lcs', 'unique-paths'],
                    resources: ['14-patterns'],
                    estimatedHours: 20,
                    goals: ['Solve sequence DP', 'Handle 2D DP']
                },
                {
                    week: 23,
                    theme: 'DP - Knapsack',
                    topics: ['0/1 Knapsack', 'Unbounded knapsack'],
                    problems: ['coin-change', 'combination-sum-iv'],
                    resources: ['gfg-dsa-tutorial'],
                    estimatedHours: 20,
                    goals: ['Master knapsack variations', 'Handle partition problems']
                },
                {
                    week: 24,
                    theme: 'DP - Strings',
                    topics: ['String DP', 'Edit distance'],
                    problems: ['word-break', 'decode-ways', 'longest-palindrome'],
                    resources: [],
                    estimatedHours: 20,
                    goals: ['Solve string DP problems', 'Handle complex patterns']
                },
                {
                    week: 25,
                    theme: 'Tries',
                    topics: ['Trie implementation', 'Prefix search'],
                    problems: ['implement-trie', 'add-search-word'],
                    resources: ['visualgo'],
                    estimatedHours: 18,
                    goals: ['Implement trie from scratch', 'Solve prefix problems']
                },
                {
                    week: 26,
                    theme: 'Backtracking',
                    topics: ['Backtracking template', 'Permutations', 'Combinations'],
                    problems: ['word-search', 'word-search-ii'],
                    resources: ['14-patterns'],
                    estimatedHours: 18,
                    goals: ['Master backtracking patterns', 'Prune efficiently']
                },
                {
                    week: 27,
                    theme: 'Intervals & Greedy',
                    topics: ['Interval problems', 'Greedy algorithms'],
                    problems: ['merge-intervals', 'insert-interval', 'non-overlapping'],
                    resources: ['gfg-dsa-tutorial'],
                    estimatedHours: 18,
                    goals: ['Solve interval problems', 'Apply greedy approach']
                },
                {
                    week: 28,
                    theme: 'Bit Manipulation',
                    topics: ['Bit operations', 'XOR tricks'],
                    problems: ['number-1-bits', 'counting-bits', 'missing-number', 'sum-two-integers'],
                    resources: [],
                    estimatedHours: 15,
                    goals: ['Master bit manipulation', 'Handle binary problems']
                }
            ],
            milestones: [
                'Complete 40+ hard problems',
                'Master DP patterns',
                'Handle advanced algorithms confidently'
            ]
        },

        // ============================================
        // PHASE 4: SYSTEM DESIGN (2 MONTHS)
        // ============================================
        {
            id: 'system-design',
            name: 'System Design',
            description: 'Learn to design scalable distributed systems',
            duration: '2 months',
            weeks: [
                {
                    week: 29,
                    theme: 'System Design Basics',
                    topics: ['Scalability', 'Load balancing', 'Caching'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 20,
                    goals: ['Understand core concepts', 'Learn tradeoffs']
                },
                {
                    week: 30,
                    theme: 'Database Design',
                    topics: ['SQL vs NoSQL', 'Sharding', 'Replication'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 20,
                    goals: ['Choose right database', 'Design schemas']
                },
                {
                    week: 31,
                    theme: 'Microservices',
                    topics: ['Service-oriented architecture', 'API design'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 20,
                    goals: ['Design microservices', 'Handle communication']
                },
                {
                    week: 32,
                    theme: 'Design URL Shortener',
                    topics: ['Hashing', 'Database design', 'Scaling'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 20,
                    goals: ['Design complete system', 'Handle edge cases']
                },
                {
                    week: 33,
                    theme: 'Design Twitter',
                    topics: ['News feed', 'Follows', 'Real-time updates'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 20,
                    goals: ['Design social system', 'Handle real-time features']
                },
                {
                    week: 34,
                    theme: 'Design Chat System',
                    topics: ['WebSockets', 'Message queues', 'Presence'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 20,
                    goals: ['Design messaging system', 'Handle concurrency']
                },
                {
                    week: 35,
                    theme: 'Design E-commerce',
                    topics: ['Inventory', 'Payments', 'Search'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 20,
                    goals: ['Design commerce platform', 'Handle transactions']
                },
                {
                    week: 36,
                    theme: 'System Design Review',
                    topics: ['All designs review', 'Common patterns'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 20,
                    goals: ['Review all designs', 'Practice articulation']
                }
            ],
            milestones: [
                'Design 8+ systems',
                'Articulate designs clearly',
                'Handle scalability questions'
            ]
        },

        // ============================================
        // PHASE 5: FINAL SPRINT (1 MONTH)
        // ============================================
        {
            id: 'final-sprint',
            name: 'Final Sprint',
            description: 'Mock interviews, revision, and company-specific preparation',
            duration: '1 month',
            weeks: [
                {
                    week: 37,
                    theme: 'Company-Specific Prep',
                    topics: ['Company patterns', 'Recent questions'],
                    problems: [],
                    resources: ['github-company-problems', 'grind75'],
                    estimatedHours: 25,
                    goals: ['Practice company-specific problems', 'Study recent interviews']
                },
                {
                    week: 38,
                    theme: 'Mock Interviews - Coding',
                    topics: ['Timed practice', 'Communication'],
                    problems: [],
                    resources: ['interviewbit'],
                    estimatedHours: 25,
                    goals: ['Complete 10+ mock interviews', 'Improve communication']
                },
                {
                    week: 39,
                    theme: 'Mock Interviews - System Design',
                    topics: ['Design practice', 'Whiteboarding'],
                    problems: [],
                    resources: ['gfg-system-design'],
                    estimatedHours: 25,
                    goals: ['Complete 5+ design mocks', 'Articulate clearly']
                },
                {
                    week: 40,
                    theme: 'Final Review',
                    topics: ['All topics', 'Weak areas'],
                    problems: [],
                    resources: ['grind75'],
                    estimatedHours: 25,
                    goals: ['Review weak areas', 'Build confidence']
                }
            ],
            milestones: [
                'Complete 15+ mock interviews',
                'Review all topics',
                'Interview-ready confidence'
            ]
        }
    ]
};

// Get current week based on start date
export function getCurrentWeek(startDate: Date): number {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.min(Math.floor(diffDays / 7) + 1, 40);
}

// Get phase by week number
export function getPhaseByWeek(weekNumber: number): RoadmapPhase | undefined {
    let weekCount = 0;
    for(const phase of sdeRoadmap.phases) {
        weekCount += phase.weeks.length;
        if(weekNumber <= weekCount) {
            return phase;
        }
    }
    return sdeRoadmap.phases[sdeRoadmap.phases.length - 1];
}

// Calculate overall progress percentage
export function calculateProgress(completedWeeks: number): number {
    return Math.round((completedWeeks / 40) * 100);
}

// Export summary stats
export const roadmapStats = {
    totalWeeks: 40,
    totalMonths: 10,
    phases: sdeRoadmap.phases.length,
    totalProblems: sdeRoadmap.phases.reduce(
        (acc, phase) => acc + phase.weeks.reduce(
            (w, week) => w + week.problems.length, 0
        ), 0
    ),
    estimatedHours: sdeRoadmap.phases.reduce(
        (acc, phase) => acc + phase.weeks.reduce(
            (w, week) => w + week.estimatedHours, 0
        ), 0
    )
};
