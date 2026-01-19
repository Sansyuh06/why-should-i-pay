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
                id: 'array-intro', name: 'Introduction to Arrays', content: `Arrays are the most fundamental data structure in computer science. An array is a collection of elements stored in contiguous memory locations.

**Key Characteristics:**
- Fixed size (in most languages)
- Homogeneous elements (same type)
- Zero-indexed (first element at index 0)
- Random access in O(1) time

**Memory Layout:**
\`\`\`
Index:    0     1     2     3     4
Value:  [10]  [20]  [30]  [40]  [50]
Address: 100   104   108   112   116 (for 4-byte integers)
\`\`\`

**Declaration Examples:**
\`\`\`python
# Python
arr = [1, 2, 3, 4, 5]
arr = [0] * 10  # Array of 10 zeros

# Access by index
print(arr[0])   # First element
print(arr[-1])  # Last element (Python)
\`\`\`

\`\`\`java
// Java
int[] arr = new int[5];
int[] arr = {1, 2, 3, 4, 5};
\`\`\`

**Time Complexity:**
| Operation | Time |
|-----------|------|
| Access by index | O(1) |
| Search (unsorted) | O(n) |
| Search (sorted) | O(log n) |
| Insert at end | O(1) amortized |
| Insert at position | O(n) |
| Delete | O(n) |`, resources: [], problems: [], completed: false
            },
            {
                id: 'array-operations', name: 'Array Operations', content: `**Core Array Operations:**

**1. Traversal - Visit every element O(n)**
\`\`\`python
arr = [10, 20, 30, 40, 50]

# Forward traversal
for i in range(len(arr)):
    print(arr[i])

# Using enumerate
for index, value in enumerate(arr):
    print(f"Index {index}: {value}")
\`\`\`

**2. Insertion - Add element at position O(n)**
\`\`\`python
def insert_at(arr, index, value):
    arr.append(None)  # Make space
    for i in range(len(arr) - 1, index, -1):
        arr[i] = arr[i - 1]
    arr[index] = value
    return arr

# Python built-in
arr.insert(2, 25)  # Insert 25 at index 2
\`\`\`

**3. Deletion - Remove element O(n)**
\`\`\`python
def delete_at(arr, index):
    for i in range(index, len(arr) - 1):
        arr[i] = arr[i + 1]
    arr.pop()
    return arr

# Python built-in
arr.pop(2)    # Remove element at index 2
arr.remove(30)  # Remove first occurrence of 30
\`\`\`

**4. Search - Find element**
\`\`\`python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Python built-in
index = arr.index(30)  # Returns index of 30
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'array-2d', name: '2D Arrays & Matrix', content: `2D Arrays (Matrices) organize data in rows and columns.

**Declaration:**
\`\`\`python
# Python - List of lists
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access: matrix[row][col]
print(matrix[0][0])  # 1 (top-left)
print(matrix[2][2])  # 9 (bottom-right)
\`\`\`

**Traversal Patterns:**
\`\`\`python
rows, cols = len(matrix), len(matrix[0])

# Row-wise traversal
for i in range(rows):
    for j in range(cols):
        print(matrix[i][j], end=" ")
    print()

# Column-wise traversal
for j in range(cols):
    for i in range(rows):
        print(matrix[i][j], end=" ")
    print()
\`\`\`

**Spiral Traversal:**
\`\`\`python
def spiralOrder(matrix):
    result = []
    if not matrix: return result
    
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Right
        for i in range(left, right + 1):
            result.append(matrix[top][i])
        top += 1
        
        # Down
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        # Left
        if top <= bottom:
            for i in range(right, left - 1, -1):
                result.append(matrix[bottom][i])
            bottom -= 1
        
        # Up
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'prefix-sum', name: 'Prefix Sum Arrays', content: `Prefix Sum enables O(1) range sum queries after O(n) preprocessing.

**Building Prefix Sum:**
\`\`\`python
def build_prefix_sum(arr):
    n = len(arr)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + arr[i]
    return prefix

arr = [3, 1, 4, 1, 5, 9, 2, 6]
prefix = build_prefix_sum(arr)
# prefix = [0, 3, 4, 8, 9, 14, 23, 25, 31]
\`\`\`

**Range Sum Query:**
\`\`\`python
def range_sum(prefix, left, right):
    # Sum of arr[left..right] inclusive
    return prefix[right + 1] - prefix[left]

# Sum of arr[2..5] = 4 + 1 + 5 + 9 = 19
print(range_sum(prefix, 2, 5))  # 19
\`\`\`

**2D Prefix Sum:**
\`\`\`python
def build_2d_prefix(matrix):
    rows, cols = len(matrix), len(matrix[0])
    prefix = [[0] * (cols + 1) for _ in range(rows + 1)]
    
    for i in range(rows):
        for j in range(cols):
            prefix[i+1][j+1] = (prefix[i][j+1] + prefix[i+1][j] 
                               - prefix[i][j] + matrix[i][j])
    return prefix

def region_sum(prefix, r1, c1, r2, c2):
    return (prefix[r2+1][c2+1] - prefix[r1][c2+1] 
            - prefix[r2+1][c1] + prefix[r1][c1])
\`\`\`

**Applications:**
- Subarray sum equals K
- Count subarrays with given XOR
- Product of array except self`, resources: [], problems: [], completed: false
            },
            {
                id: 'two-pointer', name: 'Two Pointer Technique', content: `Two Pointer technique uses two indices to traverse array efficiently.

**Pattern 1: Opposite Direction**
\`\`\`python
# Two Sum (sorted array)
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return [-1, -1]
\`\`\`

**Pattern 2: Same Direction (Fast-Slow)**
\`\`\`python
# Remove Duplicates from Sorted Array
def remove_duplicates(nums):
    if not nums: return 0
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    return slow + 1
\`\`\`

**Container With Most Water:**
\`\`\`python
def maxArea(height):
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_water = max(max_water, width * h)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_water
\`\`\`

**3Sum Problem:**
\`\`\`python
def threeSum(nums):
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left+1]:
                    left += 1
                while left < right and nums[right] == nums[right-1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    
    return result
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'sliding-window', name: 'Sliding Window Pattern', content: `Sliding Window maintains a "window" of elements and slides it through the array.

**Fixed Size Window:**
\`\`\`python
# Maximum sum subarray of size k
def max_sum_subarray(arr, k):
    if len(arr) < k:
        return -1
    
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum + arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
\`\`\`

**Variable Size Window:**
\`\`\`python
# Longest substring with at most K distinct characters
def longest_substring_k_distinct(s, k):
    char_count = {}
    left = 0
    max_len = 0
    
    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1
        
        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1
        
        max_len = max(max_len, right - left + 1)
    
    return max_len
\`\`\`

**Minimum Window Substring:**
\`\`\`python
def minWindow(s, t):
    from collections import Counter
    need = Counter(t)
    window = {}
    have, need_count = 0, len(need)
    result = ""
    min_len = float('inf')
    left = 0
    
    for right in range(len(s)):
        c = s[right]
        window[c] = window.get(c, 0) + 1
        
        if c in need and window[c] == need[c]:
            have += 1
        
        while have == need_count:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                result = s[left:right+1]
            
            window[s[left]] -= 1
            if s[left] in need and window[s[left]] < need[s[left]]:
                have -= 1
            left += 1
    
    return result
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'kadanes', name: "Kadane's Algorithm", content: `Kadane's Algorithm finds the maximum sum contiguous subarray in O(n) time.

**The Algorithm:**
\`\`\`python
def kadane(arr):
    max_so_far = arr[0]
    max_ending_here = arr[0]
    
    for i in range(1, len(arr)):
        # Either extend previous subarray or start new
        max_ending_here = max(arr[i], max_ending_here + arr[i])
        max_so_far = max(max_so_far, max_ending_here)
    
    return max_so_far

# Example
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(kadane(arr))  # Output: 6 (subarray: [4, -1, 2, 1])
\`\`\`

**Finding the Subarray:**
\`\`\`python
def kadane_with_indices(arr):
    max_so_far = arr[0]
    max_ending_here = arr[0]
    start = end = temp_start = 0
    
    for i in range(1, len(arr)):
        if arr[i] > max_ending_here + arr[i]:
            max_ending_here = arr[i]
            temp_start = i
        else:
            max_ending_here = max_ending_here + arr[i]
        
        if max_ending_here > max_so_far:
            max_so_far = max_ending_here
            start = temp_start
            end = i
    
    return max_so_far, arr[start:end+1]
\`\`\`

**Variations:**
- Maximum Product Subarray
- Maximum Circular Subarray Sum
- Maximum Sum with No Two Adjacent Elements`, resources: [], problems: [], completed: false
            },
            {
                id: 'string-basics', name: 'String Fundamentals', content: `Strings are sequences of characters with special handling in most languages.

**String Properties:**
- Immutable in Python, Java, JavaScript
- Mutable in C++ (std::string), C (char arrays)

**Common Operations:**
\`\`\`python
s = "Hello World"

# Access
print(s[0])      # 'H'
print(s[-1])     # 'd'
print(s[0:5])    # 'Hello' (slicing)

# Methods
print(len(s))           # 11
print(s.lower())        # 'hello world'
print(s.upper())        # 'HELLO WORLD'
print(s.split())        # ['Hello', 'World']
print(s.replace('World', 'Python'))  # 'Hello Python'
print(s.find('World'))  # 6 (index of substring)
print('World' in s)     # True

# String building (efficient)
parts = []
for char in s:
    parts.append(char.upper())
result = ''.join(parts)  # More efficient than +=
\`\`\`

**Character Operations:**
\`\`\`python
# ASCII values
print(ord('A'))  # 65
print(chr(65))   # 'A'

# Check character type
char = 'A'
print(char.isalpha())   # True
print(char.isdigit())   # False
print(char.isalnum())   # True
print(char.isspace())   # False
\`\`\`

**Common Interview Patterns:**
- Reverse a string
- Check palindrome
- Find first non-repeating character
- String compression`, resources: [], problems: [], completed: false
            },
            {
                id: 'string-matching', name: 'String Matching Algorithms', content: `Pattern matching finds occurrences of a pattern in text.

**Naive Algorithm O(n*m):**
\`\`\`python
def naive_search(text, pattern):
    n, m = len(text), len(pattern)
    indices = []
    
    for i in range(n - m + 1):
        found = True
        for j in range(m):
            if text[i + j] != pattern[j]:
                found = False
                break
        if found:
            indices.append(i)
    
    return indices
\`\`\`

**KMP Algorithm O(n + m):**
\`\`\`python
def compute_lps(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps

def kmp_search(text, pattern):
    n, m = len(text), len(pattern)
    lps = compute_lps(pattern)
    indices = []
    i = j = 0
    
    while i < n:
        if text[i] == pattern[j]:
            i += 1
            j += 1
            if j == m:
                indices.append(i - j)
                j = lps[j - 1]
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return indices
\`\`\`

**Rabin-Karp (Rolling Hash):**
Uses hashing for average O(n + m) time complexity.`, resources: [], problems: [], completed: false
            },
            {
                id: 'palindrome', name: 'Palindrome Problems', content: `A palindrome reads the same forwards and backwards.

**Check Palindrome:**
\`\`\`python
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# Ignoring non-alphanumeric
def is_palindrome_clean(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]
\`\`\`

**Longest Palindromic Substring:**
\`\`\`python
def longestPalindrome(s):
    def expand_around_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]
    
    result = ""
    for i in range(len(s)):
        # Odd length palindrome
        p1 = expand_around_center(i, i)
        # Even length palindrome
        p2 = expand_around_center(i, i + 1)
        
        if len(p1) > len(result):
            result = p1
        if len(p2) > len(result):
            result = p2
    
    return result
\`\`\`

**Palindrome Partitioning:**
\`\`\`python
def partition(s):
    result = []
    
    def is_palindrome(sub):
        return sub == sub[::-1]
    
    def backtrack(start, path):
        if start == len(s):
            result.append(path[:])
            return
        
        for end in range(start + 1, len(s) + 1):
            if is_palindrome(s[start:end]):
                path.append(s[start:end])
                backtrack(end, path)
                path.pop()
    
    backtrack(0, [])
    return result
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'anagram', name: 'Anagram & Frequency', content: `Anagrams have the same characters with same frequencies.

**Check Anagram:**
\`\`\`python
def is_anagram(s1, s2):
    if len(s1) != len(s2):
        return False
    
    # Method 1: Sorting
    return sorted(s1) == sorted(s2)

def is_anagram_freq(s1, s2):
    if len(s1) != len(s2):
        return False
    
    # Method 2: Frequency count
    count = {}
    for c in s1:
        count[c] = count.get(c, 0) + 1
    for c in s2:
        count[c] = count.get(c, 0) - 1
        if count[c] < 0:
            return False
    return True
\`\`\`

**Group Anagrams:**
\`\`\`python
def group_anagrams(strs):
    groups = {}
    
    for s in strs:
        key = tuple(sorted(s))  # or use character frequency
        if key not in groups:
            groups[key] = []
        groups[key].append(s)
    
    return list(groups.values())

# Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
# Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
\`\`\`

**Find All Anagrams in String:**
\`\`\`python
def findAnagrams(s, p):
    from collections import Counter
    
    if len(p) > len(s):
        return []
    
    p_count = Counter(p)
    s_count = Counter(s[:len(p)])
    result = []
    
    if s_count == p_count:
        result.append(0)
    
    for i in range(len(p), len(s)):
        # Add new character
        s_count[s[i]] += 1
        # Remove old character
        old_char = s[i - len(p)]
        s_count[old_char] -= 1
        if s_count[old_char] == 0:
            del s_count[old_char]
        
        if s_count == p_count:
            result.append(i - len(p) + 1)
    
    return result
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'array-rotation', name: 'Array Rotation', content: `Rotating an array shifts elements by k positions.

**Left Rotation by k:**
\`\`\`python
# Method 1: Using slicing O(n) space
def rotate_left(arr, k):
    k = k % len(arr)  # Handle k > length
    return arr[k:] + arr[:k]

# Method 2: Reversal Algorithm O(1) space
def rotate_left_reversal(arr, k):
    n = len(arr)
    k = k % n
    
    def reverse(l, r):
        while l < r:
            arr[l], arr[r] = arr[r], arr[l]
            l += 1
            r -= 1
    
    reverse(0, k - 1)      # Reverse first k
    reverse(k, n - 1)      # Reverse remaining
    reverse(0, n - 1)      # Reverse all
    return arr
\`\`\`

**Right Rotation by k:**
\`\`\`python
def rotate_right(arr, k):
    n = len(arr)
    k = k % n
    return arr[-k:] + arr[:-k]

def rotate_right_reversal(arr, k):
    n = len(arr)
    k = k % n
    
    def reverse(l, r):
        while l < r:
            arr[l], arr[r] = arr[r], arr[l]
            l += 1
            r -= 1
    
    reverse(0, n - 1)      # Reverse all
    reverse(0, k - 1)      # Reverse first k
    reverse(k, n - 1)      # Reverse remaining
    return arr

# Example:
# [1, 2, 3, 4, 5] rotate right by 2 -> [4, 5, 1, 2, 3]
\`\`\`

**Search in Rotated Sorted Array:**
\`\`\`python
def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        
        # Left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1
\`\`\``, resources: [], problems: [], completed: false
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
                id: 'll-intro', name: 'Introduction to Linked Lists', content: `A Linked List is a linear data structure where elements (nodes) are stored in non-contiguous memory locations. Each node points to the next, forming a chain.

**Vs Arrays:**
| Feature | Array | Linked List |
|---------|-------|-------------|
| Memory | Contiguous | Non-contiguous |
| Access | O(1) Random | O(n) Sequential |
| Insertion/Deletion | O(n) | O(1) at pointer |
| Size | Fixed (Static) | Dynamic |

**Memory Layout:**
\`\`\`
[Data|Next] -> [Data|Next] -> [Data|Next] -> NULL
Addr: 100       Addr: 250       Addr: 050
\`\`\`

**When to use:**
- Constant time insertion/deletion is required
- Unknown size upfront
- No random access needed
- Implementing stacks/queues`, resources: [], problems: [], completed: false
            },
            {
                id: 'll-singly', name: 'Singly Linked Lists', content: `A Singly Linked List allows traversal in one direction (forward only).

**Node Structure:**
\`\`\`python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
\`\`\`

**Traversal:**
\`\`\`python
def traverse(head):
    current = head
    while current:
        print(current.val, end=" -> ")
        current = current.next
    print("None")
\`\`\`

**Implementation:**
\`\`\`python
class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, val):
        new_node = ListNode(val)
        if not self.head:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'll-insertion', name: 'Insertion Operations', content: `Inserting nodes in a linked list involves manipulating pointers.

**1. Insert at Head (Prepend) - O(1):**
\`\`\`python
def insert_at_beginning(head, val):
    new_node = ListNode(val)
    new_node.next = head
    return new_node  # New head
\`\`\`

**2. Insert at End (Append) - O(n):**
\`\`\`python
def insert_at_end(head, val):
    if not head:
        return ListNode(val)
    
    curr = head
    while curr.next:
        curr = curr.next
    curr.next = ListNode(val)
    return head
\`\`\`

**3. Insert After Node - O(1):**
\`\`\`python
def insert_after(prev_node, val):
    if not prev_node: return
    
    new_node = ListNode(val)
    new_node.next = prev_node.next
    prev_node.next = new_node
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'll-deletion', name: 'Deletion Operations', content: `Deletion involves re-linking the previous node to skip the target node.

**1. Delete Head - O(1):**
\`\`\`python
def delete_head(head):
    if not head: return None
    return head.next
\`\`\`

**2. Delete Node by Value - O(n):**
\`\`\`python
def delete_val(head, val):
    # Handle head deletion
    if head and head.val == val:
        return head.next
    
    curr = head
    while curr and curr.next:
        if curr.next.val == val:
            curr.next = curr.next.next
            return head
        curr = curr.next
    
    return head
\`\`\`

**3. Delete Tail - O(n):**
\`\`\`python
def delete_tail(head):
    if not head or not head.next:
        return None
    
    curr = head
    while curr.next.next:
        curr = curr.next
    curr.next = None
    return head
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'll-doubly', name: 'Doubly Linked Lists', content: `Nodes have pointers to both previous and next nodes.

**Node Structure:**
\`\`\`python
class DNode:
    def __init__(self, val=0, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next
\`\`\`

**Advantages:**
- Bidirectional traversal
- Delete a node in O(1) if you have the pointer (no need to scan for prev)
- Insert before a node in O(1)

**Disadvantages:**
- Extra memory for prev pointer
- More pointer updates (prone to bugs)

**Insertion Example:**
\`\`\`python
def insert_after(node, val):
    new_node = DNode(val)
    new_node.next = node.next
    new_node.prev = node
    
    if node.next:
        node.next.prev = new_node
    node.next = new_node
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'll-circular', name: 'Circular Linked Lists', content: `The last node points back to the first node instead of null.

**Types:**
1. **Circular Singly Linked List:** Last next -> Head
2. **Circular Doubly Linked List:** Last next -> Head, Head prev -> Last

**Traversal:**
\`\`\`python
def traverse_circular(head):
    if not head: return
    
    curr = head
    while True:
        print(curr.val, end=" -> ")
        curr = curr.next
        if curr == head:
            break
\`\`\`

**Applications:**
- Round Robin scheduling
- Multiplayer games (turn-based)
- Implementation of Fibonacci Heap`, resources: [], problems: [], completed: false
            },
            {
                id: 'll-reversal', name: 'Linked List Reversal', content: `Reversing a linked list is a classic interview problem.

**Iterative Approach - O(n) Time, O(1) Space:**
\`\`\`python
def reverse_list(head):
    prev = None
    current = head
    
    while current:
        next_temp = current.next  # Store next
        current.next = prev       # Reverse pointer
        prev = current            # Move prev
        current = next_temp       # Move current
    
    return prev  # New head
\`\`\`

**Recursive Approach - O(n) Time, O(n) Space:**
\`\`\`python
def reverse_recursive(head):
    if not head or not head.next:
        return head
    
    new_head = reverse_recursive(head.next)
    head.next.next = head
    head.next = None
    
    return new_head
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'll-cycles', name: 'Cycle Detection', content: `Detect loops in a linked list using Floyd's Tortoise and Hare algorithm.

**Cycle Detection - O(n):**
\`\`\`python
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
\`\`\`

**Find Start of Cycle:**
1. Detect cycle
2. Reset slow to head
3. Move both 1 step at a time until they meet

\`\`\`python
def detect_cycle_start(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return slow  # Start of cycle
    return None
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'll-merge', name: 'Merging Linked Lists', content: `Merging two sorted linked lists into one sorted list.

**Iterative Approach:**
\`\`\`python
def merge_two_lists(l1, l2):
    dummy = ListNode(0)
    current = dummy
    
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
        
    current.next = l1 if l1 else l2
    return dummy.next
\`\`\`

**Merge K Sorted Lists (Hard):**
- Use Min-Heap: Push heads of all lists
- Extract min, add to result, push next of extracted node
- Time Complexity: O(N log k) where N is total nodes, k is number of lists`, resources: [], problems: [], completed: false
            },
            {
                id: 'll-intersection', name: 'Finding Intersection', content: `Find the node where two linked lists intersect.

**Approach 1: Hash Set**
- Store nodes of list A in set
- Traverse list B, check if node in set
- Space: O(N)

**Approach 2: Two Pointers - O(1) Space**
- Calculate length of A and B
- Advance pointer of longer list by difference
- Move both one step until they match

**Approach 3: Optimal Two Pointers**
\`\`\`python
def get_intersection_node(headA, headB):
    if not headA or not headB: return None
    
    a, b = headA, headB
    while a != b:
        a = a.next if a else headB
        b = b.next if b else headA
    
    return a  # Either intersection or None
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'll-fast-slow', name: 'Fast & Slow Pointers', content: `Powerful technique for linked list problems.

**1. Middle of Linked List:**
\`\`\`python
def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
\`\`\`

**2. Nth Node From End:**
- Move fast n steps ahead
- Move both until fast reaches end
\`\`\`python
def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    slow = fast = dummy
    
    for _ in range(n + 1):
        fast = fast.next
        
    while fast:
        slow = slow.next
        fast = fast.next
        
    slow.next = slow.next.next
    return dummy.next
\`\`\`

**3. Palindrome Check:**
- Find middle
- Reverse second half
- Compare halves`, resources: [], problems: [], completed: false
            },
            {
                id: 'll-sort', name: 'Sorting Linked Lists', content: `Merge Sort is the preferred algorithm for sorting linked lists.
- **Merge Sort:** O(n log n) time, O(1) auxiliary space (unlike array merge sort)
- **Bottom-up Merge Sort:** Iterative approach
- **Quick Sort:** Possible but slow due to poor random access

**Why not Quick Sort?**
- Partitioning requires swapping
- Random access is costly (choosing pivot)
- Poor cache locality

**Merge Sort Implementation:**
1. Find middle (fast/slow)
2. Recursively sort both halves
3. Merge sorted halves (same as merge two lists)`, resources: [], problems: [], completed: false
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
                id: 'stack-intro', name: 'Stack Introduction', content: `A Stack is a linear data structure that follows the LIFO (Last In First Out) principle. The last element added is the first one to be removed.

**Key Characteristics:**
- Elements are added and removed from the same end (top)
- Only the top element is accessible
- Used in function call management, undo operations

**Real-world analogies:**
- Stack of plates
- Browser back button history
- Undo/Redo in text editors

**Basic Operations:**
- push(element): Add to top - O(1)
- pop(): Remove from top - O(1)
- peek()/top(): View top element - O(1)
- isEmpty(): Check if empty - O(1)

\`\`\`python
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
    
    def is_empty(self):
        return len(self.items) == 0
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'stack-impl', name: 'Stack Implementation', content: `Stacks can be implemented using arrays or linked lists.

**Array-based Implementation:**
\`\`\`python
class ArrayStack:
    def __init__(self, capacity=100):
        self.capacity = capacity
        self.stack = [None] * capacity
        self.top = -1
    
    def push(self, item):
        if self.top >= self.capacity - 1:
            raise Exception("Stack Overflow")
        self.top += 1
        self.stack[self.top] = item
    
    def pop(self):
        if self.top < 0:
            raise Exception("Stack Underflow")
        item = self.stack[self.top]
        self.top -= 1
        return item
\`\`\`

**Linked List Implementation:**
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedStack:
    def __init__(self):
        self.top = None
    
    def push(self, item):
        new_node = Node(item)
        new_node.next = self.top
        self.top = new_node
    
    def pop(self):
        if self.top is None:
            return None
        item = self.top.data
        self.top = self.top.next
        return item
\`\`\`

**Trade-offs:**
- Array: Fixed size, but better cache locality
- Linked List: Dynamic size, extra memory for pointers`, resources: [], problems: [], completed: false
            },
            {
                id: 'stack-ops', name: 'Stack Operations', content: `**Core Stack Operations with Time Complexity:**

| Operation | Description | Time | Space |
|-----------|-------------|------|-------|
| push(x) | Add element to top | O(1) | O(1) |
| pop() | Remove top element | O(1) | O(1) |
| peek() | View top element | O(1) | O(1) |
| isEmpty() | Check if empty | O(1) | O(1) |
| size() | Get number of elements | O(1) | O(1) |

**Example Usage:**
\`\`\`python
stack = []

# Push operations
stack.append(10)  # [10]
stack.append(20)  # [10, 20]
stack.append(30)  # [10, 20, 30]

# Peek - view top without removing
print(stack[-1])  # 30

# Pop operations
stack.pop()  # Returns 30, stack = [10, 20]
stack.pop()  # Returns 20, stack = [10]

# Check if empty
print(len(stack) == 0)  # False
\`\`\`

**Edge Cases to Handle:**
- Pop from empty stack (underflow)
- Push to full stack (overflow - for fixed size)
- Peek on empty stack`, resources: [], problems: [], completed: false
            },
            {
                id: 'stack-apps', name: 'Stack Applications', content: `**Real-world Applications of Stacks:**

**1. Function Call Stack:**
When a function calls another function, the current state is pushed onto the call stack. When the called function returns, control pops back.

**2. Undo/Redo Operations:**
- Each action is pushed to an undo stack
- Undo: pop from undo stack, push to redo stack
- Redo: pop from redo stack, push to undo stack

**3. Expression Evaluation:**
- Evaluate postfix expressions
- Convert infix to postfix

**4. Backtracking Algorithms:**
- Maze solving
- N-Queens problem
- DFS traversal

**5. Browser History:**
\`\`\`python
class BrowserHistory:
    def __init__(self):
        self.back_stack = []
        self.forward_stack = []
        self.current = None
    
    def visit(self, url):
        if self.current:
            self.back_stack.append(self.current)
        self.current = url
        self.forward_stack.clear()
    
    def back(self):
        if self.back_stack:
            self.forward_stack.append(self.current)
            self.current = self.back_stack.pop()
        return self.current
    
    def forward(self):
        if self.forward_stack:
            self.back_stack.append(self.current)
            self.current = self.forward_stack.pop()
        return self.current
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'balanced-parens', name: 'Balanced Parentheses', content: `**Problem:** Given a string containing brackets, determine if all brackets are balanced.

**Valid:** "()", "()[]{}", "{[()]}"
**Invalid:** "(]", "([)]", "((("

**Algorithm:**
1. For each opening bracket, push to stack
2. For each closing bracket, check if it matches the top of stack
3. At end, stack should be empty

\`\`\`python
def isValid(s: str) -> bool:
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            # Closing bracket
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
        else:
            # Opening bracket
            stack.append(char)
    
    return len(stack) == 0

# Test cases
print(isValid("()"))      # True
print(isValid("()[]{}"))  # True
print(isValid("(]"))      # False
print(isValid("([)]"))    # False
print(isValid("{[]}"))    # True
\`\`\`

**Time Complexity:** O(n) - single pass
**Space Complexity:** O(n) - worst case all opening brackets`, resources: [], problems: [], completed: false
            },
            {
                id: 'infix-postfix', name: 'Infix to Postfix', content: `**Infix:** Operators between operands: A + B
**Postfix:** Operators after operands: A B +
**Prefix:** Operators before operands: + A B

**Shunting Yard Algorithm (Infix to Postfix):**

\`\`\`python
def infix_to_postfix(expression):
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    output = []
    operator_stack = []
    
    for token in expression.split():
        if token.isalnum():
            output.append(token)
        elif token == '(':
            operator_stack.append(token)
        elif token == ')':
            while operator_stack and operator_stack[-1] != '(':
                output.append(operator_stack.pop())
            operator_stack.pop()  # Remove '('
        else:
            while (operator_stack and 
                   operator_stack[-1] != '(' and
                   precedence.get(operator_stack[-1], 0) >= precedence.get(token, 0)):
                output.append(operator_stack.pop())
            operator_stack.append(token)
    
    while operator_stack:
        output.append(operator_stack.pop())
    
    return ' '.join(output)

# Example: "A + B * C" -> "A B C * +"
\`\`\`

**Evaluate Postfix:**
\`\`\`python
def evaluate_postfix(expression):
    stack = []
    for token in expression.split():
        if token.isdigit():
            stack.append(int(token))
        else:
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            elif token == '/': stack.append(a // b)
    return stack[0]
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'queue-intro', name: 'Queue Introduction', content: `A Queue is a linear data structure that follows the FIFO (First In First Out) principle. The first element added is the first one to be removed.

**Key Characteristics:**
- Elements are added at the rear (enqueue)
- Elements are removed from the front (dequeue)
- Fair ordering - first come, first served

**Real-world analogies:**
- Line at a ticket counter
- Print queue
- Message queues in systems

**Basic Operations:**
- enqueue(element): Add to rear - O(1)
- dequeue(): Remove from front - O(1)
- front()/peek(): View front element - O(1)
- isEmpty(): Check if empty - O(1)

\`\`\`python
from collections import deque

# Using deque (efficient)
queue = deque()

queue.append(10)    # Enqueue: [10]
queue.append(20)    # Enqueue: [10, 20]
queue.append(30)    # Enqueue: [10, 20, 30]

queue.popleft()     # Dequeue: Returns 10
queue.popleft()     # Dequeue: Returns 20

# Using list (inefficient dequeue)
queue = []
queue.append(10)    # O(1)
queue.pop(0)        # O(n) - avoid this!
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'queue-impl', name: 'Queue Implementation', content: `**Circular Array Implementation:**

\`\`\`python
class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = 0
        self.rear = -1
        self.size = 0
    
    def enqueue(self, item):
        if self.size == self.capacity:
            raise Exception("Queue Full")
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = item
        self.size += 1
    
    def dequeue(self):
        if self.size == 0:
            raise Exception("Queue Empty")
        item = self.queue[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return item
    
    def peek(self):
        if self.size == 0:
            return None
        return self.queue[self.front]
\`\`\`

**Linked List Implementation:**
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedQueue:
    def __init__(self):
        self.front = None
        self.rear = None
    
    def enqueue(self, item):
        new_node = Node(item)
        if self.rear is None:
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node
    
    def dequeue(self):
        if self.front is None:
            return None
        item = self.front.data
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return item
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'deque', name: 'Deque (Double-Ended Queue)', content: `A Deque allows insertion and deletion at both ends.

**Operations (all O(1)):**
- addFront(x): Add to front
- addRear(x): Add to rear
- removeFront(): Remove from front
- removeRear(): Remove from rear

\`\`\`python
from collections import deque

d = deque()

# Add operations
d.append(1)        # Add to right: [1]
d.appendleft(2)    # Add to left: [2, 1]
d.append(3)        # [2, 1, 3]

# Remove operations
d.pop()            # Remove from right: returns 3
d.popleft()        # Remove from left: returns 2

# Access
print(d[0])        # First element
print(d[-1])       # Last element
\`\`\`

**Applications:**
1. Sliding window maximum/minimum
2. Palindrome checking
3. Implementing both stack and queue
4. A-Steal job scheduling

**Sliding Window Maximum Example:**
\`\`\`python
def maxSlidingWindow(nums, k):
    result = []
    dq = deque()  # Store indices
    
    for i in range(len(nums)):
        # Remove elements outside window
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        
        # Remove smaller elements
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        
        dq.append(i)
        
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'priority-queue', name: 'Priority Queue', content: `A Priority Queue serves elements based on priority, not arrival order.

**Operations:**
- insert(element, priority): Add element - O(log n)
- extractMax/extractMin(): Remove highest/lowest priority - O(log n)
- peek(): View highest priority - O(1)

**Implementation using Heap:**
\`\`\`python
import heapq

# Min Heap (default in Python)
min_heap = []
heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 1)
heapq.heappush(min_heap, 2)

print(heapq.heappop(min_heap))  # 1 (smallest)

# Max Heap (negate values)
max_heap = []
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -1)
heapq.heappush(max_heap, -2)

print(-heapq.heappop(max_heap))  # 3 (largest)
\`\`\`

**Applications:**
1. Dijkstra's shortest path algorithm
2. Huffman coding
3. K largest/smallest elements
4. Job scheduling by priority
5. Merge K sorted lists

**Finding K Largest Elements:**
\`\`\`python
def findKLargest(nums, k):
    # Use min-heap of size k
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap  # K largest elements
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'monotonic-stack', name: 'Monotonic Stack', content: `A Monotonic Stack maintains elements in sorted order (either increasing or decreasing).

**Use Cases:**
- Next Greater Element
- Previous Greater Element
- Stock Span Problem
- Largest Rectangle in Histogram

**Next Greater Element:**
\`\`\`python
def nextGreaterElement(nums):
    n = len(nums)
    result = [-1] * n
    stack = []  # Store indices
    
    for i in range(n):
        while stack and nums[stack[-1]] < nums[i]:
            idx = stack.pop()
            result[idx] = nums[i]
        stack.append(i)
    
    return result

# Example
nums = [4, 5, 2, 10, 8]
print(nextGreaterElement(nums))
# Output: [5, 10, 10, -1, -1]
\`\`\`

**Stock Span Problem:**
\`\`\`python
def stockSpan(prices):
    n = len(prices)
    span = [0] * n
    stack = []  # Store (price, span)
    
    for i in range(n):
        current_span = 1
        while stack and stack[-1][0] <= prices[i]:
            current_span += stack.pop()[1]
        stack.append((prices[i], current_span))
        span[i] = current_span
    
    return span

# prices = [100, 80, 60, 70, 60, 75, 85]
# span =   [1,   1,  1,  2,  1,  4,  6]
\`\`\`

**Time Complexity:** O(n) - each element pushed/popped once`, resources: [], problems: [], completed: false
            },
            {
                id: 'sliding-window-queue', name: 'Sliding Window Maximum', content: `**Problem:** Find maximum element in every sliding window of size k.

**Brute Force:** O(n*k) - check all k elements for each window
**Optimal (Deque):** O(n) - each element processed once

\`\`\`python
from collections import deque

def maxSlidingWindow(nums, k):
    if not nums:
        return []
    
    result = []
    dq = deque()  # Store indices of useful elements
    
    for i in range(len(nums)):
        # Remove indices outside current window
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        
        # Remove indices of smaller elements
        # They will never be maximum
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        
        dq.append(i)
        
        # Window is complete from index k-1
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result

# Example
nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3
print(maxSlidingWindow(nums, k))
# Windows:  [1,3,-1], [3,-1,-3], [-1,-3,5], [-3,5,3], [5,3,6], [3,6,7]
# Maximums: [3,       3,         5,         5,        6,       7]
\`\`\`

**Why Deque?**
- We need to add/remove from both ends efficiently
- Front: Remove elements outside window
- Rear: Remove smaller elements, add new element

**Related Problems:**
- Sliding Window Minimum (similar, compare with >)
- Maximum of all subarrays of size K
- Minimum Window Substring`, resources: [], problems: [], completed: false
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
                id: 'tree-intro', name: 'Tree Fundamentals', content: `A Tree is a non-linear data structure with a hierarchical relationship between elements.

**Terminology:**
- **Node:** Data element
- **Root:** Top-most node
- **Parent/Child:** Direct relationship
- **Leaf:** Node with no children
- **Height:** Longest path from root to leaf
- **Depth:** Distance from root

**Example Structure:**
\`\`\`
       A  (Root)
     /   \\
    B     C  (Children)
   / \\   /
  D   E F    (Leaves: D, E, F)
\`\`\`

**Applications:**
- File Systems (Directories)
- DOM (HTML structure)
- Network Routing
- Abstract Syntax Trees (Compilers)`, resources: [], problems: [], completed: false
            },
            {
                id: 'binary-tree', name: 'Binary Trees', content: `In a Binary Tree, each node has at most two children (left and right).

**Types:**
1. **Full:** Every node has 0 or 2 children
2. **Complete:** All levels filled, last level filled from left
3. **Perfect:** All internal nodes have 2 children, all leaves at same depth

**Implementation:**
\`\`\`python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
\`\`\`

**Max Nodes:** $2^{h+1} - 1$ where h is height.`, resources: [], problems: [], completed: false
            },
            {
                id: 'tree-traversal-dfs', name: 'DFS Traversals', content: `Depth-First Search explores as deep as possible before backtracking.

**1. Inorder (Left, Root, Right):** Sorted order for BST
\`\`\`python
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)
\`\`\`

**2. Preorder (Root, Left, Right):** Copy tree, prefix expression
\`\`\`python
def preorder(root):
    if root:
        print(root.val)
        preorder(root.left)
        preorder(root.right)
\`\`\`

**3. Postorder (Left, Right, Root):** Delete tree, postfix expression
\`\`\`python
def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val)
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'tree-traversal-bfs', name: 'BFS / Level Order', content: `BFS explores the tree level by level using a Queue.

**Algorithm:**
1. Push root to Queue
2. While Queue not empty:
   - Pop node, process it
   - Push left child if exists
   - Push right child if exists

**Implementation:**
\`\`\`python
from collections import deque

def level_order(root):
    if not root: return []
    result = []
    queue = deque([root])
    
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'bst-intro', name: 'BST Introduction', content: `Binary Search Tree (BST) property:
- Left child value < Root value
- Right child value > Root value
- Left and Right subtrees are also BSTs

**Search Complexity:**
- Average: O(log n)
- Worst (Skewed): O(n)

**Example:**
\`\`\`
      4
    /   \\
   2     6
  / \\   / \\
 1   3 5   7
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'bst-operations', name: 'BST Search & Insert', content: `**Search in BST:**
\`\`\`python
def search(root, val):
    if not root or root.val == val:
        return root
    if val < root.val:
        return search(root.left, val)
    return search(root.right, val)
\`\`\`

**Insert in BST:**
\`\`\`python
def insert(root, val):
    if not root:
        return TreeNode(val)
    
    if val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    return root
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'bst-delete', name: 'BST Deletion', content: `Deleting a node requires handling three cases:

1. **Leaf Node:** Simply remove it
2. **One Child:** Replace node with child
3. **Two Children:** Find Inorder Successor (min in right subtree), copy value, delete successor

\`\`\`python
def delete_node(root, key):
    if not root: return None
    
    if key < root.val:
        root.left = delete_node(root.left, key)
    elif key > root.val:
        root.right = delete_node(root.right, key)
    else:
        if not root.left: return root.right
        if not root.right: return root.left
        
        # Two children: get inorder successor
        temp = find_min(root.right)
        root.val = temp.val
        root.right = delete_node(root.right, temp.val)
    return root
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'bst-validation', name: 'BST Validation', content: `Check if a tree is a valid BST.
**Trick:** Pass range (min, max) down the recursion.

\`\`\`python
def isValidBST(root, min_val=float('-inf'), max_val=float('inf')):
    if not root: return True
    
    if not (min_val < root.val < max_val):
        return False
        
    return (isValidBST(root.left, min_val, root.val) and
            isValidBST(root.right, root.val, max_val))
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'tree-construction', name: 'Tree Construction', content: `Reconstruct tree from traversal arrays.

**From Preorder and Inorder:**
- Preorder[0] is Root
- Find Root in Inorder
- Left of Root in Inorder is Left Subtree
- Right of Root in Inorder is Right Subtree

\`\`\`python
def buildTree(preorder, inorder):
    if not preorder or not inorder:
        return None
        
    root_val = preorder[0]
    root = TreeNode(root_val)
    mid = inorder.index(root_val)
    
    root.left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])
    return root
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'lca', name: 'Lowest Common Ancestor', content: `Lowest Common Ancestor (LCA) of two nodes p and q.

**For BST:**
- If both < root, smooth left
- If both > root, move right
- Else, root is split point (LCA)

**For Binary Tree:**
\`\`\`python
def lowestCommonAncestor(root, p, q):
    if not root or root == p or root == q:
        return root
        
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    
    if left and right:
        return root
    return left if left else right
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'balanced-trees', name: 'Balanced Trees', content: `Self-balancing trees ensure O(log n) height.

**AVL Trees:**
- Height difference (balance factor) of left and right subtrees $\le 1$.
- Perform rotations (left, right) to fix imbalance.

**Red-Black Tree Properties:**
- Every node is Red or Black
- Root is Black
- No two adjacent Red nodes
- Same number of Black nodes on all paths from node to leaves`, resources: [], problems: [], completed: false
            },
            {
                id: 'tree-path', name: 'Path Problems', content: `**Maximum Path Sum:**
Path can start/end anywhere.

\`\`\`python
class Solution:
    def maxPathSum(self, root):
        self.max_sum = float('-inf')
        
        def max_gain(node):
            if not node: return 0
            
            # Recursively get max gain from left and right
            left = max(max_gain(node.left), 0)
            right = max(max_gain(node.right), 0)
            
            # Update global max with path through current node
            current_path = node.val + left + right
            self.max_sum = max(self.max_sum, current_path)
            
            # Return max gain contributing to parent
            return node.val + max(left, right)
            
        max_gain(root)
        return self.max_sum
\`\`\``, resources: [], problems: [], completed: false
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
                id: 'graph-intro', name: 'Graph Fundamentals', content: `A Graph consists of vertices (nodes) and edges (connections).

**Types:**
- **Directed:** Edges have direction (A -> B)
- **Undirected:** Edges are bidirectional (A - B)
- **Weighted:** Edges have cost/weight
- **Cyclic/Acyclic:** Contains cycles or not
- **DAG:** Directed Acyclic Graph

**Terminology:**
- **Degree:** Number of edges connected to vertex
- **In-degree/Out-degree:** Into/Out of vertex (Directed)
- **Path:** Sequence of vertices connected by edges

**Applications:**
- Social Networks
- Maps (GPS)
- Web Crawlers
- Dependency Chains`, resources: [], problems: [], completed: false
            },
            {
                id: 'graph-repr', name: 'Graph Representations', content: `How to store graphs in memory.

**1. Adjacency Matrix:**
2D array where \`grid[i][j] = 1\` if edge exists.
- Space: O(V^2)
- Query edge: O(1)
- Iterate neighbors: O(V)
- Good for: Dense graphs

**2. Adjacency List:**
Map or array of lists. \`graph[u] = [v1, v2]\`
- Space: O(V + E)
- Query edge: O(degree)
- Iterate neighbors: O(degree)
- Good for: Sparse graphs (Most common)

\`\`\`python
# Adjacency List
graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'graph-bfs', name: 'Breadth-First Search', content: `BFS explores neighbors first, then neighbors of neighbors.

**Use Cases:**
- Shortest Path in Unweighted Graph
- Level Order Traversal
- Connected Components
- Flood Fill

**Algorithm:**
\`\`\`python
def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex)
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\`\`\`

**Time Complexity:** O(V + E)`, resources: [], problems: [], completed: false
            },
            {
                id: 'graph-dfs', name: 'Depth-First Search', content: `DFS explores as deep as possible before backtracking.

**Use Cases:**
- Path Finding
- Cycle Detection
- Topological Sort
- Maze Solving

**Recursive Implementation:**
\`\`\`python
def dfs(graph, vertex, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(vertex)
    print(vertex)
    
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited
\`\`\`

**Time Complexity:** O(V + E)`, resources: [], problems: [], completed: false
            },
            {
                id: 'graph-cycles', name: 'Cycle Detection', content: `Detecting if a graph contains a cycle.

**Undirected Graph (DFS):**
If we see a visited neighbor that is NOT the parent, then cycle exists.

\`\`\`python
def has_cycle_undirected(graph, v, visited, parent):
    visited.add(v)
    for neighbor in graph[v]:
        if neighbor == parent:
            continue
        if neighbor in visited:
            return True
        if has_cycle_undirected(graph, neighbor, visited, v):
            return True
    return False
\`\`\`

**Directed Graph (DFS):**
Use recursion stack (path). If node is in current path, cycle exists.

\`\`\`python
def has_cycle_directed(graph, v, visited, path):
    visited.add(v)
    path.add(v)
    for neighbor in graph[v]:
        if neighbor in path: return True
        if neighbor not in visited:
            if has_cycle_directed(graph, neighbor, visited, path):
                return True
    path.remove(v)
    return False
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'topo-sort', name: 'Topological Sort', content: `Linear ordering of vertices such that for every edge u->v, u comes before v.
Only for **DAGs** (Directed Acyclic Graphs).

**Kahn's Algorithm (BFS):**
1. Calculate in-degree of all nodes
2. Add nodes with 0 in-degree to queue
3. Process queue: remove node, decrease neighbors' in-degree
4. If neighbor's in-degree becomes 0, add to queue

\`\`\`python
def topological_sort(graph, V):
    in_degree = {i: 0 for i in range(V)}
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
            
    queue = deque([v for v in in_degree if in_degree[v] == 0])
    result = []
    
    while queue:
        u = queue.popleft()
        result.append(u)
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    return result if len(result) == V else [] # Cycle check
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'dijkstra', name: "Dijkstra's Algorithm", content: `Shortest path from source to all nodes in weighted graph (non-negative weights).

**Algorithm:**
1. Priority Queue stores (distance, vertex)
2. Initialize distances to infinity, source to 0
3. Pop min distance vertex, relax neighbors

\`\`\`python
import heapq

def dijkstra(graph, start):
    # graph = {u: [(v, w), ...]}
    pq = [(0, start)]
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    
    while pq:
        d, u = heapq.heappop(pq)
        
        if d > distances[u]: continue
        
        for v, weight in graph[u]:
            if distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight
                heapq.heappush(pq, (distances[v], v))
                
    return distances
\`\`\`

**Complexity:** O(E log V)`, resources: [], problems: [], completed: false
            },
            {
                id: 'bellman-ford', name: 'Bellman-Ford Algorithm', content: `Shortest path with negative edge weights. Can detect negative cycles.

**Algorithm:**
1. Relax all edges V-1 times
2. If can relax again, negative cycle exists

\`\`\`python
def bellman_ford(edges, V, start):
    # edges = [(u, v, w)]
    dist = [float('inf')] * V
    dist[start] = 0
    
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                
    # Check negative cycle
    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            return "Negative Cycle Detected"
            
    return dist
\`\`\`

**Complexity:** O(V * E)`, resources: [], problems: [], completed: false
            },
            {
                id: 'union-find', name: 'Union-Find / DSU', content: `Disjoint Set Union (DSU) tracks elements partitioned into disjoint sets.

**Operations:**
- **Find:** Determine which set element belongs to
- **Union:** Join two subsets

**Optimizations:** Path Compression + Union by Rank -> O(alpha(n)) ~ O(1)

\`\`\`python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            # Path compression
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        if rootX != rootY:
            # Union by rank
            if self.rank[rootX] > self.rank[rootY]:
                self.parent[rootY] = rootX
            elif self.rank[rootX] < self.rank[rootY]:
                self.parent[rootX] = rootY
            else:
                self.parent[rootY] = rootX
                self.rank[rootX] += 1
            return True
        return False
\`\`\`

**Applications:**
- Kruskal's MST
- Cycle detection in undirected graph
- Connected components`, resources: [], problems: [], completed: false
            },
            {
                id: 'mst', name: 'Minimum Spanning Tree', content: `Subset of edges connecting all vertices with minimum total weight.

**Prim's Algorithm (Greedy):**
Grow tree from start node. Always add cheapest edge connected to tree.
- Similar to Dijkstra
- O(E log V)

**Kruskal's Algorithm (Greedy):**
Sort all edges by weight. Add edge if it doesn't form a cycle (use Union-Find).
- O(E log E)

\`\`\`python
def kruskal(edges, V):
    edges.sort(key=lambda x: x[2]) # (u, v, w)
    uf = UnionFind(V)
    mst = []
    
    for u, v, w in edges:
        if uf.union(u, v):
            mst.append((u, v, w))
            
    return mst
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'bipartite', name: 'Bipartite Graphs', content: `Graph where vertices can be divided into two independent sets.
Equivalent to: **Graph is 2-colorable** or **No odd length cycles**.

**Algorithm (BFS/DFS):**
Try to color nodes with 2 colors (0 and 1). Neighbor must always have different color.

\`\`\`python
def is_bipartite(graph):
    color = {}
    for node in range(len(graph)):
        if node not in color:
            queue = deque([node])
            color[node] = 0
            while queue:
                u = queue.popleft()
                for v in graph[u]:
                    if v not in color:
                        color[v] = 1 - color[u]
                        queue.append(v)
                    elif color[v] == color[u]:
                        return False
    return True
\`\`\``, resources: [], problems: [], completed: false
            },
            {
                id: 'grid-graphs', name: 'Grid as Graphs', content: `2D Grids often behave like graphs where cells are nodes and adjacent cells are bounded.

**Traversal (BFS/DFS):**
Use directions array for neighbors.

\`\`\`python
def num_islands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if (r < 0 or r >= rows or c < 0 or c >= cols 
            or grid[r][c] == '0'):
            return
        grid[r][c] = '0' # Mark visited
        for dr, dc in [(0,1), (0,-1), (1,0), (-1,0)]:
            dfs(r + dr, c + dc)
            
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count
\`\`\``, resources: [], problems: [], completed: false
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
                id: 'sort-intro', name: 'Sorting Introduction', content: `Sorting rearranges elements in a specific order (usually ascending or descending).

**Key Concepts:**
- **In-place:** Uses constant extra space O(1).
- **Stable:** Preserves relative order of equal elements.
- **Adaptive:** Faster for partially sorted data.

**Comparison vs Non-Comparison:**
- Comparison Sorts: Lower bound O(n log n)
- Non-Comparison Sorts: Can be O(n) (Counting, Radix)

**Selection Criteria:**
- Small data: Insertion Sort
- Large data: Quick Sort / Merge Sort
- Almost sorted: Insertion Sort
- Restricted range keys: Counting Sort`, resources: [], problems: [], completed: false
            },
            {
                id: 'bubble-sort', name: 'Bubble Sort', content: `Simple comparison-based algorithm.
Repeatedly steps through list, compares adjacent elements and swaps if in wrong order.

**Algorithm:**
\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break  # Optimized: stop if no swaps
    return arr
\`\`\`

**Complexity:**
- Time: O(n^2) worst/avg, O(n) best
- Space: O(1)
- Stable: Yes`, resources: [], problems: [], completed: false
            },
            {
                id: 'selection-sort', name: 'Selection Sort', content: `Repeatedly finds minimum element from unsorted part and puts it at beginning.

**Algorithm:**
\`\`\`python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
\`\`\`

**Complexity:**
- Time: O(n^2) always
- Space: O(1)
- Stable: No (depends on implementation)`, resources: [], problems: [], completed: false
            },
            {
                id: 'insertion-sort', name: 'Insertion Sort', content: `Builds sorted array one item at a time.
Efficient for small data sets and nearly sorted data.

**Algorithm:**
\`\`\`python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr
\`\`\`

**Complexity:**
- Time: O(n^2) worst/avg, O(n) best
- Space: O(1)
- Stable: Yes`, resources: [], problems: [], completed: false
            },
            {
                id: 'merge-sort', name: 'Merge Sort', content: `Divide and conquer algorithm.
Divides array into halves, sorts them, and merges sorted halves.

**Algorithm:**
\`\`\`python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
\`\`\`

**Complexity:**
- Time: O(n log n)
- Space: O(n)
- Stable: Yes`, resources: [], problems: [], completed: false
            },
            {
                id: 'quick-sort', name: 'Quick Sort', content: `Divide and conquer using a pivot.
Partitions array: elements < pivot to left, elements > pivot to right.

**Algorithm:**
\`\`\`python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quick_sort(left) + middle + quick_sort(right)
\`\`\`

**Complexity:**
- Time: O(n log n) avg, O(n^2) worst (rare with good pivot)
- Space: O(log n) stack space
- Stable: No`, resources: [], problems: [], completed: false
            },
            {
                id: 'heap-sort', name: 'Heap Sort', content: `Comparison-based sort using Heap data structure.

**Algorithm:**
1. Build Max Heap from array
2. Swap root (max) with last element
3. Reduce heap size and heapify root
4. Repeat

\`\`\`python
def heapify(arr, n, i):
    largest = i
    l, r = 2 * i + 1, 2 * i + 2
    
    if l < n and arr[l] > arr[largest]: largest = l
    if r < n and arr[r] > arr[largest]: largest = r
        
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extract elements
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
\`\`\`

**Complexity:**
- Time: O(n log n)
- Space: O(1)
- Stable: No`, resources: [], problems: [], completed: false
            },
            {
                id: 'counting-sort', name: 'Counting Sort', content: `Integer sorting algorithm.
Counts occurrences of each unique value.

**Algorithm:**
1. Find max value k
2. Create count array of size k+1
3. Store count of each element
4. Modify count array for actual position
5. Build output array

\`\`\`python
def counting_sort(arr):
    k = max(arr)
    count = [0] * (k + 1)
    output = [0] * len(arr)
    
    for num in arr:
        count[num] += 1
        
    for i in range(1, k + 1):
        count[i] += count[i - 1]
        
    for i in range(len(arr) - 1, -1, -1):
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1
        
    return output
\`\`\`

**Complexity:**
- Time: O(n + k)
- Space: O(k)`, resources: [], problems: [], completed: false
            },
            {
                id: 'radix-sort', name: 'Radix Sort', content: `Non-comparison sort for integers with d digits.
Sorts digit by digit (least significant to most significant) using stable sort (like Counting Sort).

**Complexity:** O(d * (n + k))
d = number of digits
k = base (usually 10)`, resources: [], problems: [], completed: false
            },
            {
                id: 'binary-search', name: 'Binary Search', content: `Efficient search in **sorted** array.

**Algorithm:**
\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1
\`\`\`

**Time:** O(log n)`, resources: [], problems: [], completed: false
            },
            {
                id: 'bs-variations', name: 'Binary Search Variations', content: `**1. First Occurrence:**
Keep searching in left half even after finding target.

**2. Last Occurrence:**
Keep searching in right half.

**3. Lower Bound:**
Smallest index where arr[i] >= target.

**4. Upper Bound:**
Smallest index where arr[i] > target.`, resources: [], problems: [], completed: false
            },
            {
                id: 'bs-on-answer', name: 'Binary Search on Answer', content: `Technique for optimization problems.
If answer is monotonic (e.g., if X works, all > X work), we can binary search the answer.

**Pattern:**
1. Define search space (min to max possible answer)
2. Define \`check(x)\` function usually O(n) or O(1)
3. Binary search for optimal x where \`check(x)\` is true

**Example:** Koko Eating Bananas, Allocate Books, Aggressive Cows`, resources: [], problems: [], completed: false
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
                content: `**Linear Search:**
Iterate through the array and compare each element.
- **Time:** O(n)
- **Space:** O(1)
- **Best for:** Unsorted or small datasets.

\`\`\`python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
\`\`\`

**Binary Search:**
Divide search space in half at each step.
- **Time:** O(log n)
- **Space:** O(1)
- **Constraint:** Array MUST be sorted.

\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\`

**Recursive Binary Search:**
\`\`\`python
def binary_search_recursive(arr, left, right, target):
    if left > right:
        return -1
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, mid + 1, right, target)
    else:
        return binary_search_recursive(arr, left, mid - 1, target)
\`\`\``,
                resources: [
                    {
                        id: 'search-guide',
                        type: 'article',
                        title: 'Searching Algorithms Guide',
                        source: 'Embedded Guide',
                        url: '/resources/notes/dsa-searching',
                        difficulty: 'beginner'
                    }
                ],
                problems: [],
                completed: false
            },
            {
                id: 'search-variations',
                name: 'Binary Search Variations',
                content: `Standard Binary Search finds *any* occurrence. Variations find specific ones.

**1. First Occurrence (Lower Bound):**
Find the first index where \`arr[i] >= target\`.

\`\`\`python
def lower_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left
\`\`\`

**2. Last Occurrence (Upper Bound):**
Find the first index where \`arr[i] > target\`.

\`\`\`python
def upper_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] <= target:
            left = mid + 1
        else:
            right = mid
    return left
\`\`\`

**3. Search in Rotated Sorted Array:**
Array rotated at some pivot: \`[4,5,6,7,0,1,2]\`

\`\`\`python
def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target: return mid
        
        # Left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
\`\`\``,
                resources: [], problems: [], completed: false
            },
            {
                id: 'ternary-search',
                name: 'Ternary Search',
                content: `Used to find maximum/minimum of a **Unimodal Function** (increases then decreases, or vice-versa).
Divides search space into 3 parts.

**Algorithm:**
1. \`m1 = l + (r-l)/3\`
2. \`m2 = r - (r-l)/3\`
3. Compare \`f(m1)\` and \`f(m2)\` to eliminate one third.

\`\`\`python
def ternary_search(l, r):
    while r - l > 1e-9:  # Precision limit
        m1 = l + (r - l) / 3
        m2 = r - (r - l) / 3
        if f(m1) < f(m2):
            l = m1
        else:
            r = m2
    return l  # Point of maximum
\`\`\`

**Time:** O(log3 n) -> slightly slower than Binary Search O(log2 n) for sorted arrays, but useful for functions.`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'exponential-search',
                name: 'Exponential Search',
                content: `Useful for unbounded/infinite lists or when target is near the beginning.

**Steps:**
1. Find range \`[2^k, 2^(k+1)]\` where target might exist.
2. Perform Binary Search in that range.

**Time:** O(log i) where i is the index of the element.
**Space:** O(1)`,
                resources: [], problems: [], completed: false
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
                id: 'hashing-intro',
                name: 'Hash Tables & Hash Maps',
                content: `A **Hash Table** maps keys to values for efficient lookup.
It uses a **Hash Function** to compute an index into an array of buckets.

**Key Concepts:**
- **Hash Function:** \`index = hash(key) % capacity\`
- **Collision:** When two keys map to the same index.
- **Load Factor:** \`n / capacity\`. High load factor -> more collisions -> slower.

**Time Complexity (Average):**
- Insert: O(1)
- Delete: O(1)
- Search: O(1)

**Worst Case:** O(n) (all keys collide to same bucket)

**Applications:**
- Caching (LRU Cache)
- Database Indexing
- Symbol Tables (Compilers)
- Counting Frequencies`,
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
            },
            {
                id: 'collision-resolution',
                name: 'Collision Resolution',
                content: `Techniques to handle collisions (when \`hash(k1) == hash(k2)\`).

**1. Separate Chaining:**
Each bucket stores a linked list (or dynamic array) of entries.
- Simple to implement.
- Tolerates high load factor.
- **Cache performance:** Poor (pointers).

**2. Open Addressing:**
All elements stored in the array itself. If collision, probe for next empty slot.
- **Linear Probing:** \`index, index+1, index+2...\`
- **Quadratic Probing:** \`index, index+1^2, index+2^2...\`
- **Double Hashing:** Use second hash function for step size.
- **Cache performance:** Excellent.
- **Problem:** Clustering.`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'hash-implementation',
                name: 'Hash Map Implementation',
                content: `Simple implementation using Chaining (List of Lists).

\`\`\`python
class MyHashMap:
    def __init__(self):
        self.size = 1000
        self.table = [[] for _ in range(self.size)]

    def _hash(self, key):
        return key % self.size

    def put(self, key, value):
        index = self._hash(key)
        for pair in self.table[index]:
            if pair[0] == key:
                pair[1] = value
                return
        self.table[index].append([key, value])

    def get(self, key):
        index = self._hash(key)
        for pair in self.table[index]:
            if pair[0] == key:
                return pair[1]
        return -1

    def remove(self, key):
        index = self._hash(key)
        for i, pair in enumerate(self.table[index]):
            if pair[0] == key:
                self.table[index].pop(i)
                return
\`\`\``,
                resources: [], problems: [], completed: false
            },
            {
                id: 'hashing-patterns',
                name: 'Common Hashing Patterns',
                content: `**1. Frequency Counting:**
Count occurrences of each element.
\`\`\`python
from collections import Counter
nums = [1, 1, 2, 3, 3, 3]
counts = Counter(nums) # {1: 2, 2: 1, 3: 3}
\`\`\`

**2. Two Sum Pattern (Check for Complement):**
Find if \`target - current\` exists in map.
\`\`\`python
def two_sum(nums, target):
    checked = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in checked:
            return [checked[diff], i]
        checked[num] = i
\`\`\`

**3. Group Anagrams:**
Sort string to use as key, or use character count tuple.
\`\`\`python
def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        key = tuple(sorted(s))
        groups[key].append(s)
    return list(groups.values())
\`\`\``,
                resources: [], problems: [], completed: false
            },
            {
                id: 'rolling-hash',
                name: 'Rolling Hash (Rabin-Karp)',
                content: `Efficiently calculate hash of a substring in O(1) using previous hash.
Used in string matching.

**Formula:**
\`H[i+1] = (H[i] - char[i]*R^(L-1)) * R + char[i+L]\`
where R is radix (base), L is length window.

**Application:**
- Rabin-Karp Algorithm for pattern matching.
- Longest Duplicate Substring.
- Repeated DNA Sequences.`,
                resources: [], problems: [], completed: false
            }
        ]
    },
    {
        id: 'dp-101',
        domain: 'dsa',
        name: 'Dynamic Programming',
        description: 'Master optimization techniques for complex problems.',
        difficulty: 'advanced',
        estimatedTime: 600,
        subtopics: [
            {
                id: 'dp-intro',
                name: 'Introduction to DP',
                content: `Dynamic Programming is an optimization technique for problems with **Overlapping Subproblems** and **Optimal Substructure**.

**Two Approaches:**
1. **Memoization (Top-Down):** Recursive + Caching.
2. **Tabulation (Bottom-Up):** Iterative + Table filling.

**Example: Fibonacci**
\`F(n) = F(n-1) + F(n-2)\`

**Memoization:**
\`\`\`python
memo = {}
def fib(n):
    if n <= 1: return n
    if n in memo: return memo[n]
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
\`\`\`

**Tabulation:**
\`\`\`python
def fib(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
\`\`\``,
                resources: [
                    {
                        id: 'dp-guide',
                        type: 'article',
                        title: 'Complete DP Guide',
                        source: 'Embedded Guide',
                        url: '/resources/notes/dsa-dp',
                        difficulty: 'advanced'
                    }
                ],
                problems: [],
                completed: false
            },
            {
                id: 'dp-1d',
                name: '1D Dynamic Programming',
                content: `Problems solvable with a linear DP array.

**Climbing Stairs:**
Count ways to reach nth step taking 1 or 2 steps.
\`dp[i] = dp[i-1] + dp[i-2]\` (Same as Fibonacci)

**House Robber:**
Maximize money without robbing adjacent houses.
\`dp[i] = max(dp[i-1], nums[i] + dp[i-2])\`

\`\`\`python
def rob(nums):
    if not nums: return 0
    dp1, dp2 = 0, 0
    for n in nums:
        temp = max(dp1 + n, dp2)
        dp1 = dp2
        dp2 = temp
    return dp2
\`\`\``,
                resources: [], problems: [], completed: false
            },
            {
                id: 'dp-2d',
                name: '2D Dynamic Programming',
                content: `Problems involving Grids or two sequences.

**Unique Paths (Grid):**
Count paths from top-left to bottom-right.
\`dp[i][j] = dp[i-1][j] + dp[i][j-1]\`

\`\`\`python
def uniquePaths(m, n):
    row = [1] * n
    for i in range(m - 1):
        newRow = [1] * n
        for j in range(1, n):
            newRow[j] = newRow[j-1] + row[j]
        row = newRow
    return row[-1]
\`\`\`

**Longest Common Subsequence (LCS):**
\`If text1[i] == text2[j]: dp[i][j] = 1 + dp[i-1][j-1]\`
\`Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\``,
                resources: [], problems: [], completed: false
            },
            {
                id: 'knapsack',
                name: '0/1 Knapsack Pattern',
                content: `Classic optimization problem: Select items with weight/value to max value within capacity W.
Items cannot be broken (0 or 1).

**State:** \`dp[i][w]\` = Max value using first i items with capacity w.
**Transition:**
\`dp[i][w] = max(dp[i-1][w], val[i] + dp[i-1][w-wt[i]])\`

**Space Optimized (1D Array):**
Iterate capacity backwards to avoid using same item twice in same step.
\`\`\`python
def knapsack(weights, values, W, n):
    dp = [0] * (W + 1)
    for i in range(n):
        for w in range(W, weights[i] - 1, -1):
            dp[w] = max(dp[w], values[i] + dp[w - weights[i]])
    return dp[W]
\`\`\``,
                resources: [], problems: [], completed: false
            },
            {
                id: 'unbounded-knapsack',
                name: 'Unbounded Knapsack',
                content: `Similar to 0/1, but allowed to pick infinite instances of an item.

**Examples:**
- Coin Change (Min coins)
- Rod Cutting

**Coin Change:**
\`dp[amount] = min(dp[amount], 1 + dp[amount - coin])\`
Iterate capacity forward (unlike 0/1 knapsack).

\`\`\`python
def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if a - c >= 0:
                dp[a] = min(dp[a], 1 + dp[a - c])
    return dp[amount] if dp[amount] != float('inf') else -1
\`\`\``,
                resources: [], problems: [], completed: false
            },
            {
                id: 'lis',
                name: 'Longest Increasing Subsequence',
                content: `Find length of longest subsequence (not substring) that is strictly increasing.

**O(n^2) Approach:**
\`dp[i] = 1 + max(dp[j])\` for all \`j < i\` where \`nums[j] < nums[i]\`

\`\`\`python
def lengthOfLIS(nums):
    if not nums: return 0
    dp = [1] * len(nums)
    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], 1 + dp[j])
    return max(dp)
\`\`\`

**O(n log n) Approach:**
Use Patience Sorting (Binary Search to append/replace).`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'mcm',
                name: 'Matrix Chain Multiplication',
                content: `Determine most efficient way to multiply chain of matrices.
Pattern for Partition DP (breaking range [i, j] at k).

**State:** \`dp[i][j]\` = Min cost to multiply A[i]...A[j]
**Transition:** 
\`dp[i][j] = min(dp[i][k] + dp[k+1][j] + dims)\` for k in i..j-1

**Applications:**
- Burst Balloons
- Palindrome Partitioning
- Optimal Binary Search Tree`,
                resources: [], problems: [], completed: false
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
                name: 'System Design Basics',
                content: `**System Design** is the process of defining architecture, interfaces, and data for a system to satisfy specific requirements.

**Key Goals:**
- **Reliability:** System works correctly even on failure.
- **Scalability:** Handle increased load (traffic/data).
- **Maintainability:** Easy to understand and modify.
- **Availability:** Uptime (e.g., 99.999%).

**High-Level Components:**
1. **Client** (Mobile/Web)
2. **Load Balancer** (Nginx, HAProxy)
3. **App Servers** (API Layer)
4. **Database** (SQL/NoSQL)
5. **Cache** (Redis, Memcached)
6. **Message Queue** (Kafka, RabbitMQ)`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'scalability',
                name: 'Scalability & Load Balancing',
                content: `**Scalability Patterns:**

1. **Vertical Scaling (Scale Up):**
   - Add more power (CPU, RAM) to existing server.
   - **Pros:** Simple.
   - **Cons:** Hard limit, Single point of failure.

2. **Horizontal Scaling (Scale Out):**
   - Add more servers to the pool.
   - **Pros:** Unlimited scaling, Resilient.
   - **Cons:** Complexity (data consistency, load balancing).

**Load Balancing Algorithms:**
- **Round Robin:** Sequential request distribution.
- **Least Connections:** Send to server with fewest active connections.
- **IP Hash:** Client IP determines server (sticky session).
- **Consistent Hashing:** For distributed caching/DBs to minimize remapping.`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'database-scaling',
                name: 'Database Scaling & CAP Theorem',
                content: `**Database Scaling Strategies:**

1. **Replication (Master-Slave):**
   - **Master:** Handles Writes.
   - **Slaves:** Handle Reads (Scale reads).
   - **Issue:** Replication lag (Consistency).

2. **Sharding (Partitioning):**
   - Split data across multiple DBs based on Shard Key (e.g., UserID).
   - **Pros:** Infinite write scaling.
   - **Cons:** Complex queries (Joins across shards), Hot partitions.

**CAP Theorem:**
In a distributed system, you can only pick 2:
- **Consistency:** Every read receives the most recent write or an error.
- **Availability:** Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
- **Partition Tolerance:** System continues to operate despite an arbitrary number of messages being dropped/delayed by the network.

*Note: In reality, P is mandatory. Choice is between CP (Consistency) and AP (Availability).*`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'caching',
                name: 'Caching Strategies',
                content: `Caching stores frequently accessed data in fast memory (RAM).

**Types:**
- **Client Caching:** Browser/Device.
- **CDN:** Content Delivery Network (Static assets).
- **Server Caching:** Redis/Memcached (API responses, DB queries).

**Caching Strategies:**
1. **Cache Aside (Lazy Loading):** App checks Cache -> Miss -> DB -> Update Cache.
2. **Write-Through:** Write to Cache and DB synchronously.
3. **Write-Back:** Write to Cache, async write to DB.

**Eviction Policies:**
- **LRU (Least Recently Used):** Remove oldest access.
- **LFU (Least Frequently Used):** Remove least popular.
- **FIFO:** First In First Out.`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'microservices',
                name: 'Microservices Architecture',
                content: `**Monolith:**
Single codebase/deployable unit.
- **Pros:** Simple dev/debugging.
- **Cons:** Tight coupling, hard to scale partially, technology lock-in.

**Microservices:**
Collection of small, autonomous services.
- **Pros:** Independent scaling, polyglot (different tech stacks), fault isolation.
- **Cons:** Complexity (network, data consistency), monitoring, distributed tracing.

**Communication:**
- **Synchronous:** HTTP/REST, gRPC.
- **Asynchronous:** Message Queues (Kafka, RabbitMQ) - Decoupling.`,
                resources: [], problems: [], completed: false
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
                content: `**Object-Oriented Programming (OOP)** organizes software around data (objects) rather than logic.

**Four Pillars:**
1. **Encapsulation:** Bundling data (fields) and methods. Hiding internal state (private).
2. **Inheritance:** Class acquires properties of another class (Parent -> Child). Reusability.
3. **Polymorphism:**
   - **Compile-time:** Method Overloading (Same name, diff params).
   - **Runtime:** Method Overriding (Child changes Parent method).
4. **Abstraction:** Hiding complex implementation details, showing only functionality (Abstract Classes / Interfaces).

**Class vs Object:**
- **Class:** Blueprint/Template.
- **Object:** Instance of the class.`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'oops-advanced',
                name: 'Advanced OOP Concepts',
                content: `**Abstract Class vs Interface:**
| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| Methods | Abstract + Concrete | Abstract (mostly) |
| Variables | Any | static final (constants) |
| Inheritance | Single (extends) | Multiple (implements) |
| Instructor | Can have constructor | No constructor |

**Access Modifiers:**
- **Public:** Accessible everywhere.
- **Private:** Accessible only within class.
- **Protected:** Accessible in package + subclasses.
- **Default:** Accessible only in package.

**Static Keyword:**
Belongs to class, not instance. Shared memory.`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'solid-principles',
                name: 'SOLID Principles',
                content: `Guidelines for maintainable code.

**S - Single Responsibility Principle (SRP):**
A class should have only one reason to change.

**O - Open/Closed Principle (OCP):**
Open for extension, closed for modification.

**L - Liskov Substitution Principle (LSP):**
Subtypes must be substitutable for their base types.

**I - Interface Segregation Principle (ISP):**
Many specific interfaces are better than one general-purpose interface.

**D - Dependency Inversion Principle (DIP):**
Depend on abstractions, not concretions.`,
                resources: [], problems: [], completed: false
            },
            {
                id: 'design-patterns',
                name: 'Common Design Patterns',
                content: `Reusable solutions to common problems.

**1. Singleton:**
Ensure a class has only one instance.
\`\`\`python
class Singleton:
    _instance = None
    def __new__(cls):
        if not cls._instance:
            cls._instance = super().__new__(cls)
        return cls._instance
\`\`\`

**2. Factory Method:**
Interface for creating objects, let subclasses decide which class to instantiate.

**3. Observer:**
notify many objects about state changes (Pub-Sub).

**4. Strategy:**
Define family of algorithms, put each in separate class, and make them interchangeable.`,
                resources: [], problems: [], completed: false
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
        topics: ['arrays-101', 'linkedlist-101', 'stack-queue', 'trees-101', 'graphs-101', 'sorting-101', 'searching-101', 'hashing-101', 'dp-101'],
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
