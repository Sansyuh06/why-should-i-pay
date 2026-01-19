// Comprehensive Problem Solutions in Multiple Languages
// Each problem includes: multiple approaches, code in Python/Java/JavaScript/C++, complexity analysis

export interface ProblemSolution {
    problemId: string;
    title: string;
    approaches: {
        name: string;
        description: string;
        timeComplexity: string;
        spaceComplexity: string;
        code: {
            python: string;
            javascript: string;
            java: string;
            cpp: string;
        };
    }[];
    hints: string[];
    relatedProblems: string[];
}

export const problemSolutions: Record<string, ProblemSolution> = {
    'two-sum': {
        problemId: 'two-sum',
        title: 'Two Sum',
        approaches: [
            {
                name: 'Brute Force',
                description: 'Check every pair of numbers to find the target sum.',
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                code: {
                    python: `def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
                    javascript: `function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}`,
                    java: `public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return new int[]{i, j};
            }
        }
    }
    return new int[]{};
}`,
                    cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    for (int i = 0; i < nums.size(); i++) {
        for (int j = i + 1; j < nums.size(); j++) {
            if (nums[i] + nums[j] == target) {
                return {i, j};
            }
        }
    }
    return {};
}`
                }
            },
            {
                name: 'Hash Map (Optimal)',
                description: 'Use a hash map to store seen numbers. For each number, check if its complement exists.',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                code: {
                    python: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
                    javascript: `function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}`,
                    java: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (seen.containsKey(complement)) {
            return new int[]{seen.get(complement), i};
        }
        seen.put(nums[i], i);
    }
    return new int[]{};
}`,
                    cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}`
                }
            }
        ],
        hints: [
            'Think about what value you need to find for each element.',
            'A hash map can give you O(1) lookup time.',
            'Can you do this in a single pass through the array?'
        ],
        relatedProblems: ['three-sum', 'two-sum-ii', 'four-sum']
    },

    'best-time-buy-sell': {
        problemId: 'best-time-buy-sell',
        title: 'Best Time to Buy and Sell Stock',
        approaches: [
            {
                name: 'Track Minimum Price',
                description: 'Track the minimum price seen so far and calculate profit at each step.',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                code: {
                    python: `def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        min_price = min(min_price, price)
        profit = price - min_price
        max_profit = max(max_profit, profit)
    
    return max_profit`,
                    javascript: `function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        const profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    
    return maxProfit;
}`,
                    java: `public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    
    for (int price : prices) {
        minPrice = Math.min(minPrice, price);
        int profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    
    return maxProfit;
}`,
                    cpp: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX;
    int maxProfit = 0;
    
    for (int price : prices) {
        minPrice = min(minPrice, price);
        int profit = price - minPrice;
        maxProfit = max(maxProfit, profit);
    }
    
    return maxProfit;
}`
                }
            }
        ],
        hints: [
            'You need to buy before you sell.',
            'Track the minimum price seen so far.',
            'At each day, calculate the profit if you sold today.'
        ],
        relatedProblems: ['best-time-buy-sell-ii', 'best-time-iv']
    },

    'contains-duplicate': {
        problemId: 'contains-duplicate',
        title: 'Contains Duplicate',
        approaches: [
            {
                name: 'Hash Set',
                description: 'Use a hash set to track seen numbers.',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                code: {
                    python: `def containsDuplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

# One-liner alternative
def containsDuplicate(nums):
    return len(nums) != len(set(nums))`,
                    javascript: `function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

// One-liner alternative
const containsDuplicate = (nums) => nums.length !== new Set(nums).size;`,
                    java: `public boolean containsDuplicate(int[] nums) {
    Set<Integer> seen = new HashSet<>();
    for (int num : nums) {
        if (seen.contains(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}`,
                    cpp: `bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    for (int num : nums) {
        if (seen.count(num)) {
            return true;
        }
        seen.insert(num);
    }
    return false;
}`
                }
            },
            {
                name: 'Sorting',
                description: 'Sort the array and check adjacent elements.',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(1) if in-place sort',
                code: {
                    python: `def containsDuplicate(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i-1]:
            return True
    return False`,
                    javascript: `function containsDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return true;
        }
    }
    return false;
}`,
                    java: `public boolean containsDuplicate(int[] nums) {
    Arrays.sort(nums);
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i-1]) {
            return true;
        }
    }
    return false;
}`,
                    cpp: `bool containsDuplicate(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] == nums[i-1]) {
            return true;
        }
    }
    return false;
}`
                }
            }
        ],
        hints: [
            'A hash set allows O(1) lookup.',
            'Sorting brings duplicates next to each other.',
            'Compare the length of array vs length of set.'
        ],
        relatedProblems: ['contains-duplicate-ii', 'single-number']
    },

    'valid-parentheses': {
        problemId: 'valid-parentheses',
        title: 'Valid Parentheses',
        approaches: [
            {
                name: 'Stack',
                description: 'Use a stack to match opening and closing brackets.',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                code: {
                    python: `def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return len(stack) == 0`,
                    javascript: `function isValid(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };
    
    for (const char of s) {
        if (char in mapping) {
            if (!stack.length || stack.pop() !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}`,
                    java: `public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    Map<Character, Character> mapping = Map.of(
        ')', '(',
        '}', '{',
        ']', '['
    );
    
    for (char c : s.toCharArray()) {
        if (mapping.containsKey(c)) {
            if (stack.isEmpty() || stack.pop() != mapping.get(c)) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    
    return stack.isEmpty();
}`,
                    cpp: `bool isValid(string s) {
    stack<char> stk;
    unordered_map<char, char> mapping = {
        {')', '('},
        {'}', '{'},
        {']', '['}
    };
    
    for (char c : s) {
        if (mapping.count(c)) {
            if (stk.empty() || stk.top() != mapping[c]) {
                return false;
            }
            stk.pop();
        } else {
            stk.push(c);
        }
    }
    
    return stk.empty();
}`
                }
            }
        ],
        hints: [
            'A stack is perfect for matching pairs.',
            'Push opening brackets, pop for closing.',
            'Check that the popped bracket matches.'
        ],
        relatedProblems: ['generate-parentheses', 'longest-valid-parentheses']
    },

    'reverse-list': {
        problemId: 'reverse-list',
        title: 'Reverse Linked List',
        approaches: [
            {
                name: 'Iterative',
                description: 'Reverse pointers one by one while traversing.',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                code: {
                    python: `def reverseList(head):
    prev = None
    current = head
    
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    
    return prev`,
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
}`,
                    java: `public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
}`,
                    cpp: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* current = head;
    
    while (current) {
        ListNode* nextNode = current->next;
        current->next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
}`
                }
            },
            {
                name: 'Recursive',
                description: 'Recursively reverse the rest of the list and adjust pointers.',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n) - call stack',
                code: {
                    python: `def reverseList(head):
    if not head or not head.next:
        return head
    
    new_head = reverseList(head.next)
    head.next.next = head
    head.next = None
    
    return new_head`,
                    javascript: `function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}`,
                    java: `public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    ListNode newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}`,
                    cpp: `ListNode* reverseList(ListNode* head) {
    if (!head || !head->next) {
        return head;
    }
    
    ListNode* newHead = reverseList(head->next);
    head->next->next = head;
    head->next = nullptr;
    
    return newHead;
}`
                }
            }
        ],
        hints: [
            'You need three pointers: prev, current, next.',
            'Save the next node before changing the pointer.',
            'Think about what happens at the base case for recursion.'
        ],
        relatedProblems: ['reverse-nodes-k', 'reverse-list-ii', 'palindrome-list']
    },

    'climbing-stairs': {
        problemId: 'climbing-stairs',
        title: 'Climbing Stairs',
        approaches: [
            {
                name: 'Dynamic Programming',
                description: 'The number of ways to reach step n is the sum of ways to reach step n-1 and n-2.',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                code: {
                    python: `def climbStairs(n):
    if n <= 2:
        return n
    
    prev1, prev2 = 2, 1
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    
    return prev1`,
                    javascript: `function climbStairs(n) {
    if (n <= 2) return n;
    
    let prev1 = 2, prev2 = 1;
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
                    java: `public int climbStairs(int n) {
    if (n <= 2) return n;
    
    int prev1 = 2, prev2 = 1;
    for (int i = 3; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
                    cpp: `int climbStairs(int n) {
    if (n <= 2) return n;
    
    int prev1 = 2, prev2 = 1;
    for (int i = 3; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`
                }
            }
        ],
        hints: [
            'This is essentially the Fibonacci sequence.',
            'dp[n] = dp[n-1] + dp[n-2]',
            'You only need to track the last two values.'
        ],
        relatedProblems: ['min-cost-climbing', 'house-robber', 'fibonacci']
    },

    'maximum-subarray': {
        problemId: 'maximum-subarray',
        title: 'Maximum Subarray',
        approaches: [
            {
                name: "Kadane's Algorithm",
                description: 'Track the maximum sum ending at each position.',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                code: {
                    python: `def maxSubArray(nums):
    max_sum = nums[0]
    current_sum = nums[0]
    
    for i in range(1, len(nums)):
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum`,
                    javascript: `function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}`,
                    java: `public int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}`,
                    cpp: `int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    
    return maxSum;
}`
                }
            }
        ],
        hints: [
            'At each position, decide: start fresh or extend the current subarray?',
            "If current sum becomes negative, it's better to start fresh.",
            'Track both the current sum and the maximum seen so far.'
        ],
        relatedProblems: ['maximum-product-subarray', 'max-sum-circular']
    },

    'number-of-islands': {
        problemId: 'number-of-islands',
        title: 'Number of Islands',
        approaches: [
            {
                name: 'DFS',
                description: 'When we find land, do DFS to mark all connected land as visited.',
                timeComplexity: 'O(m×n)',
                spaceComplexity: 'O(m×n) - recursion stack',
                code: {
                    python: `def numIslands(grid):
    if not grid:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'  # Mark as visited
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    
    return count`,
                    javascript: `function numIslands(grid) {
    if (!grid.length) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '1') {
            return;
        }
        grid[r][c] = '0';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }
    
    return count;
}`,
                    java: `public int numIslands(char[][] grid) {
    if (grid.length == 0) return 0;
    
    int rows = grid.length;
    int cols = grid[0].length;
    int count = 0;
    
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    
    return count;
}

private void dfs(char[][] grid, int r, int c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] != '1') {
        return;
    }
    grid[r][c] = '0';
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
}`,
                    cpp: `int numIslands(vector<vector<char>>& grid) {
    if (grid.empty()) return 0;
    
    int rows = grid.size();
    int cols = grid[0].size();
    int count = 0;
    
    function<void(int, int)> dfs = [&](int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != '1') {
            return;
        }
        grid[r][c] = '0';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };
    
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(r, c);
            }
        }
    }
    
    return count;
}`
                }
            }
        ],
        hints: [
            'Think of this as a graph traversal problem.',
            'Each land cell is connected to its 4 neighbors.',
            'Mark visited cells to avoid counting twice.'
        ],
        relatedProblems: ['max-area-island', 'surrounded-regions', 'pacific-atlantic']
    },

    'coin-change': {
        problemId: 'coin-change',
        title: 'Coin Change',
        approaches: [
            {
                name: 'Bottom-Up DP',
                description: 'Build up the solution from amount 0 to target amount.',
                timeComplexity: 'O(amount × coins)',
                spaceComplexity: 'O(amount)',
                code: {
                    python: `def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i and dp[i - coin] != float('inf'):
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1`,
                    javascript: `function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i && dp[i - coin] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}`,
                    java: `public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}`,
                    cpp: `int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}`
                }
            }
        ],
        hints: [
            'This is a classic unbounded knapsack problem.',
            'dp[i] = minimum coins needed to make amount i.',
            'For each amount, try using each coin denomination.'
        ],
        relatedProblems: ['coin-change-ii', 'perfect-squares', 'combination-sum-iv']
    }
};

// Helper functions
export function getSolutionById(problemId: string): ProblemSolution | undefined {
    return problemSolutions[problemId];
}

export function getAllSolutionIds(): string[] {
    return Object.keys(problemSolutions);
}
