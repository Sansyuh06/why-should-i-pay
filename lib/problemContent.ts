export interface ProblemContent {
    id: string;
    description: string;
    examples: {
        input: string;
        output: string;
        explanation?: string;
    }[];
    constraints: string[];
}

export const problemContent: Record<string, ProblemContent> = {
    'two-sum': {
        id: 'two-sum',
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have **exactly one solution**, and you may not use the same element twice. You can return the answer in any order.",
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]"
            },
            {
                input: "nums = [3,3], target = 6",
                output: "[0,1]"
            }
        ],
        constraints: [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "-10^9 <= target <= 10^9",
            "Only one valid answer exists."
        ]
    },
    'valid-parentheses': {
        id: 'valid-parentheses',
        description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
        examples: [
            {
                input: "s = \"()\"",
                output: "true"
            },
            {
                input: "s = \"()[]{}\"",
                output: "true"
            },
            {
                input: "s = \"(]\"",
                output: "false"
            }
        ],
        constraints: [
            "1 <= s.length <= 10^4",
            "s consists of parentheses only '()[]{}'."
        ]
    },
    'best-time-buy-sell': {
        id: 'best-time-buy-sell',
        description: "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
                explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell."
            },
            {
                input: "prices = [7,6,4,3,1]",
                output: "0",
                explanation: "In this case, no transactions are done and the max profit = 0."
            }
        ],
        constraints: [
            "1 <= prices.length <= 10^5",
            "0 <= prices[i] <= 10^4"
        ]
    },
    'contains-duplicate': {
        id: 'contains-duplicate',
        description: "Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.",
        examples: [
            {
                input: "nums = [1,2,3,1]",
                output: "true"
            },
            {
                input: "nums = [1,2,3,4]",
                output: "false"
            },
            {
                input: "nums = [1,1,1,3,3,4,3,2,4,2]",
                output: "true"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10^5",
            "-10^9 <= nums[i] <= 10^9"
        ]
    },
    'valid-palindrome': {
        id: 'valid-palindrome',
        description: "A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
        examples: [
            {
                input: "s = \"A man, a plan, a canal: Panama\"",
                output: "true",
                explanation: "\"amanaplanacanalpanama\" is a palindrome."
            },
            {
                input: "s = \"race a car\"",
                output: "false",
                explanation: "\"raceacar\" is not a palindrome."
            }
        ],
        constraints: [
            "1 <= s.length <= 2 * 10^5",
            "s consists only of printable ASCII characters."
        ]
    },
    'reverse-linked-list': {
        id: 'reverse-linked-list',
        description: "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
        examples: [
            {
                input: "head = [1,2,3,4,5]",
                output: "[5,4,3,2,1]"
            },
            {
                input: "head = [1,2]",
                output: "[2,1]"
            },
            {
                input: "head = []",
                output: "[]"
            }
        ],
        constraints: [
            "The number of nodes in the list is the range [0, 5000].",
            "-5000 <= Node.val <= 5000"
        ]
    },
    'merge-sorted-array': {
        id: 'merge-sorted-array',
        description: "You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.\n\nMerge `nums1` and `nums2` into a single array sorted in **non-decreasing order**.\n\nThe final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.",
        examples: [
            {
                input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
                output: "[1,2,2,3,5,6]",
                explanation: "The arrays we are merging are [1,2,3] and [2,5,6].\nThe result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1."
            },
            {
                input: "nums1 = [1], m = 1, nums2 = [], n = 0",
                output: "[1]",
                explanation: "The arrays we are merging are [1] and [].\nThe result of the merge is [1]."
            }
        ],
        constraints: [
            "nums1.length == m + n",
            "nums2.length == n",
            "0 <= m, n <= 200",
            "1 <= m + n <= 200",
            "-10^9 <= nums1[i], nums2[j] <= 10^9"
        ]
    },
    'maximum-product-subarray': {
        id: 'maximum-product-subarray',
        description: "Given an integer array `nums`, find a subarray that has the largest product, and return the product.\n\nThe test cases are generated so that the answer will fit in a **32-bit** integer.",
        examples: [
            {
                input: "nums = [2,3,-2,4]",
                output: "6",
                explanation: "[2,3] has the largest product 6."
            },
            {
                input: "nums = [-2,0,-1]",
                output: "0",
                explanation: "The result cannot be 2, because [-2,-1] is not a subarray."
            }
        ],
        constraints: [
            "1 <= nums.length <= 2 * 10^4",
            "-10 <= nums[i] <= 10",
            "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."
        ]
    }
};
