// 14 Essential Coding Patterns for Interview Preparation
// Each pattern includes: description, when to use, code template, and example problems

export interface CodingPattern {
    id: string;
    name: string;
    description: string;
    whenToUse: string[];
    codeTemplate: {
        python: string;
        javascript: string;
    };
    exampleProblems: string[];
    timeComplexity: string;
    spaceComplexity: string;
}

export const codingPatterns: CodingPattern[] = [
    // 1. SLIDING WINDOW
    {
        id: 'sliding-window',
        name: 'Sliding Window',
        description: 'Used to perform operations on a specific window size of an array or linked list. The window slides from start to end, maintaining a subset of elements.',
        whenToUse: [
            'Problems involving contiguous subarrays or substrings',
            'Finding max/min sum of a subarray of size k',
            'Longest substring with k distinct characters',
            'String permutations or anagrams'
        ],
        codeTemplate: {
            python: `def sliding_window(arr, k):
    window_start = 0
    window_sum = 0
    max_sum = 0
    
    for window_end in range(len(arr)):
        window_sum += arr[window_end]
        
        if window_end >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[window_start]
            window_start += 1
    
    return max_sum`,
            javascript: `function slidingWindow(arr, k) {
    let windowStart = 0;
    let windowSum = 0;
    let maxSum = 0;
    
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        
        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return maxSum;
}`
        },
        exampleProblems: [
            'longest-substring',
            'min-window',
            'permutation-string',
            'max-consecutive-ones-iii'
        ],
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1) or O(k)'
    },

    // 2. TWO POINTERS
    {
        id: 'two-pointers',
        name: 'Two Pointers',
        description: 'Use two pointers to iterate through data structure in tandem until one or both pointers reach a certain condition.',
        whenToUse: [
            'Sorted arrays or linked lists',
            'Finding pairs with a target sum',
            'Comparing strings',
            'Removing duplicates in-place'
        ],
        codeTemplate: {
            python: `def two_pointers(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return [-1, -1]`,
            javascript: `function twoPointers(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        
        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1];
}`
        },
        exampleProblems: [
            'two-sum-ii',
            'three-sum',
            'container-water',
            'valid-palindrome'
        ],
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },

    // 3. FAST & SLOW POINTERS (Floyd's Cycle)
    {
        id: 'fast-slow-pointers',
        name: 'Fast & Slow Pointers',
        description: 'Also known as the Hare and Tortoise algorithm. Two pointers move at different speeds through a sequence to detect cycles or find middle elements.',
        whenToUse: [
            'Detecting cycles in linked lists or arrays',
            'Finding the middle of a linked list',
            'Finding the start of a cycle',
            'Palindrome linked list verification'
        ],
        codeTemplate: {
            python: `def has_cycle(head):
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            return True
    
    return False

def find_middle(head):
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow`,
            javascript: `function hasCycle(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

function findMiddle(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}`
        },
        exampleProblems: [
            'linked-list-cycle',
            'linked-list-cycle-ii',
            'middle-linked-list',
            'palindrome-list'
        ],
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },

    // 4. MERGE INTERVALS
    {
        id: 'merge-intervals',
        name: 'Merge Intervals',
        description: 'Deal with overlapping intervals. Sort intervals by start time, then merge overlapping ones.',
        whenToUse: [
            'Merging overlapping intervals',
            'Inserting new intervals',
            'Finding gaps between intervals',
            'Scheduling problems'
        ],
        codeTemplate: {
            python: `def merge_intervals(intervals):
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        last = merged[-1]
        
        if current[0] <= last[1]:
            last[1] = max(last[1], current[1])
        else:
            merged.append(current)
    
    return merged`,
            javascript: `function mergeIntervals(intervals) {
    if (!intervals.length) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];
        
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    return merged;
}`
        },
        exampleProblems: [
            'merge-intervals',
            'insert-interval',
            'non-overlapping',
            'meeting-rooms-ii'
        ],
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)'
    },

    // 5. CYCLIC SORT
    {
        id: 'cyclic-sort',
        name: 'Cyclic Sort',
        description: 'Efficient algorithm to sort arrays containing numbers in a given range. Each number is placed at its correct index.',
        whenToUse: [
            'Arrays with numbers in range [1, n] or [0, n]',
            'Finding missing numbers',
            'Finding duplicates',
            'Finding the smallest missing positive'
        ],
        codeTemplate: {
            python: `def cyclic_sort(nums):
    i = 0
    while i < len(nums):
        correct_idx = nums[i] - 1
        
        if nums[i] != nums[correct_idx]:
            nums[i], nums[correct_idx] = nums[correct_idx], nums[i]
        else:
            i += 1
    
    return nums

def find_missing(nums):
    cyclic_sort(nums)
    for i in range(len(nums)):
        if nums[i] != i + 1:
            return i + 1
    return len(nums) + 1`,
            javascript: `function cyclicSort(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIdx = nums[i] - 1;
        
        if (nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        } else {
            i++;
        }
    }
    return nums;
}

function findMissing(nums) {
    cyclicSort(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
}`
        },
        exampleProblems: [
            'missing-number',
            'find-duplicate',
            'first-missing-positive'
        ],
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },

    // 6. IN-PLACE LINKED LIST REVERSAL
    {
        id: 'linked-list-reversal',
        name: 'In-place Linked List Reversal',
        description: 'Reverse links between nodes in a linked list without using extra space.',
        whenToUse: [
            'Reversing entire linked list',
            'Reversing a portion of linked list',
            'Reversing in groups of k',
            'Alternating reversal'
        ],
        codeTemplate: {
            python: `def reverse_list(head):
    prev = None
    current = head
    
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    
    return prev

def reverse_between(head, left, right):
    if not head or left == right:
        return head
    
    dummy = ListNode(0, head)
    prev = dummy
    
    for _ in range(left - 1):
        prev = prev.next
    
    current = prev.next
    for _ in range(right - left):
        next_node = current.next
        current.next = next_node.next
        next_node.next = prev.next
        prev.next = next_node
    
    return dummy.next`,
            javascript: `function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

function reverseBetween(head, left, right) {
    if (!head || left === right) return head;
    
    const dummy = { val: 0, next: head };
    let prev = dummy;
    
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }
    
    let current = prev.next;
    for (let i = 0; i < right - left; i++) {
        const nextNode = current.next;
        current.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }
    return dummy.next;
}`
        },
        exampleProblems: [
            'reverse-list',
            'reverse-nodes-k',
            'reorder-list'
        ],
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
    },

    // 7. TREE BFS (Level Order Traversal)
    {
        id: 'tree-bfs',
        name: 'Tree Breadth-First Search',
        description: 'Traverse tree level by level using a queue. Process all nodes at current level before moving to the next.',
        whenToUse: [
            'Level order traversal',
            'Finding minimum depth',
            'Level averages',
            'Connecting level nodes'
        ],
        codeTemplate: {
            python: `from collections import deque

def level_order(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
    
    return result`,
            javascript: `function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    return result;
}`
        },
        exampleProblems: [
            'level-order',
            'right-side-view',
            'populating-next-right'
        ],
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)'
    },

    // 8. TREE DFS
    {
        id: 'tree-dfs',
        name: 'Tree Depth-First Search',
        description: 'Traverse tree by going deep first. Can be done recursively or with a stack. Three types: preorder, inorder, postorder.',
        whenToUse: [
            'Path sum problems',
            'Tree validation (BST)',
            'Finding leaf nodes',
            'Tree serialization'
        ],
        codeTemplate: {
            python: `def has_path_sum(root, target_sum):
    if not root:
        return False
    
    if not root.left and not root.right:
        return root.val == target_sum
    
    remaining = target_sum - root.val
    return (has_path_sum(root.left, remaining) or 
            has_path_sum(root.right, remaining))

def all_paths(root, target_sum):
    result = []
    
    def dfs(node, current_sum, path):
        if not node:
            return
        
        path.append(node.val)
        
        if not node.left and not node.right and current_sum == node.val:
            result.append(list(path))
        else:
            dfs(node.left, current_sum - node.val, path)
            dfs(node.right, current_sum - node.val, path)
        
        path.pop()
    
    dfs(root, target_sum, [])
    return result`,
            javascript: `function hasPathSum(root, targetSum) {
    if (!root) return false;
    
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    
    const remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || 
           hasPathSum(root.right, remaining);
}

function allPaths(root, targetSum) {
    const result = [];
    
    function dfs(node, currentSum, path) {
        if (!node) return;
        
        path.push(node.val);
        
        if (!node.left && !node.right && currentSum === node.val) {
            result.push([...path]);
        } else {
            dfs(node.left, currentSum - node.val, path);
            dfs(node.right, currentSum - node.val, path);
        }
        
        path.pop();
    }
    
    dfs(root, targetSum, []);
    return result;
}`
        },
        exampleProblems: [
            'path-sum',
            'path-sum-ii',
            'max-path-sum',
            'validate-bst'
        ],
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h) where h is height'
    },

    // 9. TWO HEAPS
    {
        id: 'two-heaps',
        name: 'Two Heaps',
        description: 'Use two heaps (min and max) to efficiently track median or divide elements into two parts.',
        whenToUse: [
            'Finding median in a stream',
            'Scheduling problems',
            'Maximizing capital'
        ],
        codeTemplate: {
            python: `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # max heap (inverted)
        self.large = []  # min heap
    
    def add_num(self, num):
        heapq.heappush(self.small, -num)
        
        if self.small and self.large and -self.small[0] > self.large[0]:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        
        if len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        
        if len(self.large) > len(self.small) + 1:
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)
    
    def find_median(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        if len(self.large) > len(self.small):
            return self.large[0]
        return (-self.small[0] + self.large[0]) / 2`,
            javascript: `class MedianFinder {
    constructor() {
        this.small = new MaxHeap(); // max heap
        this.large = new MinHeap(); // min heap
    }
    
    addNum(num) {
        this.small.push(num);
        
        if (this.small.size() && this.large.size() && 
            this.small.peek() > this.large.peek()) {
            this.large.push(this.small.pop());
        }
        
        if (this.small.size() > this.large.size() + 1) {
            this.large.push(this.small.pop());
        }
        
        if (this.large.size() > this.small.size() + 1) {
            this.small.push(this.large.pop());
        }
    }
    
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.peek();
        }
        if (this.large.size() > this.small.size()) {
            return this.large.peek();
        }
        return (this.small.peek() + this.large.peek()) / 2;
    }
}`
        },
        exampleProblems: [
            'find-median-stream'
        ],
        timeComplexity: 'O(log n) for insert, O(1) for median',
        spaceComplexity: 'O(n)'
    },

    // 10. SUBSETS / BACKTRACKING
    {
        id: 'subsets-backtracking',
        name: 'Subsets / Backtracking',
        description: 'Generate all possible subsets or permutations by making choices and backtracking when a choice does not lead to a solution.',
        whenToUse: [
            'Generating all subsets',
            'Generating permutations',
            'Combination sum problems',
            'N-Queens, Sudoku solver'
        ],
        codeTemplate: {
            python: `def subsets(nums):
    result = []
    
    def backtrack(start, current):
        result.append(list(current))
        
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    
    backtrack(0, [])
    return result

def permutations(nums):
    result = []
    
    def backtrack(current):
        if len(current) == len(nums):
            result.append(list(current))
            return
        
        for num in nums:
            if num not in current:
                current.append(num)
                backtrack(current)
                current.pop()
    
    backtrack([])
    return result`,
            javascript: `function subsets(nums) {
    const result = [];
    
    function backtrack(start, current) {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

function permutations(nums) {
    const result = [];
    
    function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (const num of nums) {
            if (!current.includes(num)) {
                current.push(num);
                backtrack(current);
                current.pop();
            }
        }
    }
    
    backtrack([]);
    return result;
}`
        },
        exampleProblems: [
            'subsets',
            'permutations',
            'combination-sum',
            'n-queens'
        ],
        timeComplexity: 'O(2^n) for subsets, O(n!) for permutations',
        spaceComplexity: 'O(n)'
    },

    // 11. MODIFIED BINARY SEARCH
    {
        id: 'modified-binary-search',
        name: 'Modified Binary Search',
        description: 'Variations of binary search for rotated arrays, finding boundaries, or searching in 2D matrices.',
        whenToUse: [
            'Rotated sorted array',
            'Finding first/last occurrence',
            'Search in 2D matrix',
            'Finding minimum in rotated array'
        ],
        codeTemplate: {
            python: `def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        
        # Left side is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right side is sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1

def find_first_last(nums, target):
    def find_bound(is_first):
        left, right = 0, len(nums) - 1
        result = -1
        
        while left <= right:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                result = mid
                if is_first:
                    right = mid - 1
                else:
                    left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return result
    
    return [find_bound(True), find_bound(False)]`,
            javascript: `function searchRotated(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}`
        },
        exampleProblems: [
            'search-rotated',
            'find-min-rotated',
            'first-last-position',
            'search-2d-matrix'
        ],
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)'
    },

    // 12. TOP K ELEMENTS
    {
        id: 'top-k-elements',
        name: 'Top K Elements',
        description: 'Find top K largest/smallest/frequent elements using a heap.',
        whenToUse: [
            'K largest/smallest elements',
            'K most frequent elements',
            'K closest points',
            'Kth largest element'
        ],
        codeTemplate: {
            python: `import heapq

def top_k_frequent(nums, k):
    count = {}
    for num in nums:
        count[num] = count.get(num, 0) + 1
    
    return heapq.nlargest(k, count.keys(), key=count.get)

def kth_largest(nums, k):
    heap = []
    
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    
    return heap[0]

def k_closest_points(points, k):
    heap = []
    
    for x, y in points:
        dist = x*x + y*y
        heapq.heappush(heap, (-dist, x, y))
        if len(heap) > k:
            heapq.heappop(heap)
    
    return [[x, y] for _, x, y in heap]`,
            javascript: `function topKFrequent(nums, k) {
    const count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    return [...count.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => num);
}

function kthLargest(nums, k) {
    const minHeap = new MinPriorityQueue();
    
    for (const num of nums) {
        minHeap.enqueue(num);
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    
    return minHeap.front().element;
}`
        },
        exampleProblems: [
            'top-k-frequent',
            'kth-largest',
            'k-closest-points'
        ],
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(k)'
    },

    // 13. K-WAY MERGE
    {
        id: 'k-way-merge',
        name: 'K-way Merge',
        description: 'Merge K sorted lists using a min heap to always get the smallest element.',
        whenToUse: [
            'Merge K sorted lists',
            'Kth smallest in sorted matrix',
            'Find smallest range'
        ],
        codeTemplate: {
            python: `import heapq

def merge_k_lists(lists):
    min_heap = []
    
    # Add first element from each list
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(min_heap, (lst[0].val, i, lst[0]))
    
    dummy = ListNode(0)
    current = dummy
    
    while min_heap:
        val, list_idx, node = heapq.heappop(min_heap)
        current.next = node
        current = current.next
        
        if node.next:
            heapq.heappush(min_heap, (node.next.val, list_idx, node.next))
    
    return dummy.next

def kth_smallest_matrix(matrix, k):
    n = len(matrix)
    min_heap = [(matrix[0][0], 0, 0)]
    visited = {(0, 0)}
    
    for _ in range(k - 1):
        val, row, col = heapq.heappop(min_heap)
        
        if row + 1 < n and (row + 1, col) not in visited:
            heapq.heappush(min_heap, (matrix[row + 1][col], row + 1, col))
            visited.add((row + 1, col))
        
        if col + 1 < n and (row, col + 1) not in visited:
            heapq.heappush(min_heap, (matrix[row][col + 1], row, col + 1))
            visited.add((row, col + 1))
    
    return min_heap[0][0]`,
            javascript: `function mergeKLists(lists) {
    const minHeap = new MinPriorityQueue({ priority: x => x.val });
    
    for (const list of lists) {
        if (list) minHeap.enqueue(list);
    }
    
    const dummy = { val: 0, next: null };
    let current = dummy;
    
    while (!minHeap.isEmpty()) {
        const node = minHeap.dequeue().element;
        current.next = node;
        current = current.next;
        
        if (node.next) {
            minHeap.enqueue(node.next);
        }
    }
    
    return dummy.next;
}`
        },
        exampleProblems: [
            'merge-k-lists'
        ],
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(k)'
    },

    // 14. TOPOLOGICAL SORT
    {
        id: 'topological-sort',
        name: 'Topological Sort',
        description: 'Linear ordering of vertices in a DAG such that for every directed edge u→v, u comes before v.',
        whenToUse: [
            'Task scheduling with dependencies',
            'Course prerequisites',
            'Build system dependencies',
            'Detecting cycles in directed graph'
        ],
        codeTemplate: {
            python: `from collections import deque, defaultdict

def topological_sort(num_courses, prerequisites):
    graph = defaultdict(list)
    in_degree = [0] * num_courses
    
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        in_degree[course] += 1
    
    queue = deque([i for i in range(num_courses) if in_degree[i] == 0])
    result = []
    
    while queue:
        node = queue.popleft()
        result.append(node)
        
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return result if len(result) == num_courses else []

def can_finish(num_courses, prerequisites):
    return len(topological_sort(num_courses, prerequisites)) == num_courses`,
            javascript: `function topologicalSort(numCourses, prerequisites) {
    const graph = new Map();
    const inDegree = new Array(numCourses).fill(0);
    
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
    }
    
    for (const [course, prereq] of prerequisites) {
        graph.get(prereq).push(course);
        inDegree[course]++;
    }
    
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    const result = [];
    
    while (queue.length) {
        const node = queue.shift();
        result.push(node);
        
        for (const neighbor of graph.get(node)) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result.length === numCourses ? result : [];
}`
        },
        exampleProblems: [
            'course-schedule',
            'course-schedule-ii',
            'alien-dictionary'
        ],
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V + E)'
    }
];

// Helper function to get pattern by ID
export function getPatternById(id: string): CodingPattern | undefined {
    return codingPatterns.find(p => p.id === id);
}

// Get patterns by problem ID
export function getPatternsForProblem(problemId: string): CodingPattern[] {
    return codingPatterns.filter(p => p.exampleProblems.includes(problemId));
}

// Get all pattern names
export function getAllPatternNames(): string[] {
    return codingPatterns.map(p => p.name);
}
