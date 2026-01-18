import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';

// Clean chapter data
const chapters = [
    {
        id: 'arrays',
        title: 'Introduction to Arrays',
        content: `An array is a collection of elements stored at contiguous memory locations. It's the most fundamental data structure and forms the foundation for more complex structures.

Arrays allow O(1) random access using indices, making them extremely efficient for accessing elements. However, insertion and deletion can be O(n) since elements may need to be shifted.`,
        code: {
            cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Static array
    int arr[5] = {10, 20, 30, 40, 50};
    
    // Dynamic array
    vector<int> vec = {1, 2, 3, 4, 5};
    
    // Access - O(1)
    cout << arr[2] << endl;  // 30
    
    // Add to vector
    vec.push_back(6);
    
    return 0;
}`,
            python: `# Python list (dynamic array)
arr = [10, 20, 30, 40, 50]

# Access - O(1)
print(arr[2])  # 30

# Add element
arr.append(60)

# Negative indexing
print(arr[-1])  # 60`
        },
        problems: ['Find Maximum Element', 'Reverse Array', 'Check if Sorted']
    },
    {
        id: 'two-pointers',
        title: 'Two Pointers Technique',
        content: `The two pointers technique uses two pointers to iterate through data, often from opposite ends. It's commonly used with sorted arrays.

This technique converts O(n²) brute force solutions to O(n) by eliminating redundant comparisons.`,
        code: {
            cpp: `// Two Sum - Sorted Array
vector<int> twoSum(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) return {left, right};
        else if (sum < target) left++;
        else right--;
    }
    return {};
}`,
            python: `def two_sum(nums, target):
    left, right = 0, len(nums) - 1
    
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1
        else:
            right -= 1
    return []`
        },
        problems: ['Two Sum II', 'Valid Palindrome', 'Container With Most Water']
    },
    {
        id: 'sliding-window',
        title: 'Sliding Window',
        content: `The sliding window technique maintains a window of elements and slides it across the data structure. It's useful for finding subarrays with specific properties.

Fixed window: window size is constant. Variable window: expands/shrinks based on conditions.`,
        code: {
            cpp: `// Max sum subarray of size k
int maxSum(vector<int>& arr, int k) {
    int sum = 0;
    for (int i = 0; i < k; i++) sum += arr[i];
    
    int maxS = sum;
    for (int i = k; i < arr.size(); i++) {
        sum += arr[i] - arr[i-k];
        maxS = max(maxS, sum);
    }
    return maxS;
}`,
            python: `def max_sum(arr, k):
    window = sum(arr[:k])
    max_s = window
    
    for i in range(k, len(arr)):
        window += arr[i] - arr[i-k]
        max_s = max(max_s, window)
    
    return max_s`
        },
        problems: ['Maximum Sum Subarray of Size K', 'Longest Substring Without Repeating']
    },
    {
        id: 'binary-search',
        title: 'Binary Search',
        content: `Binary search finds elements in a sorted array in O(log n) time by repeatedly dividing the search interval in half.

Always use mid = left + (right - left) / 2 to avoid integer overflow.`,
        code: {
            cpp: `int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
            python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`
        },
        problems: ['Binary Search', 'Search in Rotated Array', 'First and Last Position']
    },
    {
        id: 'sorting',
        title: 'Sorting Algorithms',
        content: `Quick Sort: Divide using pivot, average O(n log n), in-place.

Merge Sort: Divide, sort, merge. Always O(n log n), stable, uses O(n) extra space.`,
        code: {
            cpp: `void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) swap(arr[++i], arr[j]);
        }
        swap(arr[i+1], arr[high]);
        int pi = i + 1;
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
            python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    mid = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)`
        },
        problems: ['Sort an Array', 'Kth Largest Element']
    }
];

const DsaTutorialPage = () => {
    const [active, setActive] = useState(0);
    const [lang, setLang] = useState('cpp');
    const ch = chapters[active];

    return (
        <div className="tutorial-page">
            {/* Sidebar */}
            <nav className="tutorial-nav">
                <h2>DSA Tutorial</h2>
                {chapters.map((c, i) => (
                    <button
                        key={c.id}
                        onClick={() => setActive(i)}
                        className={active === i ? 'active' : ''}
                    >
                        {c.title}
                    </button>
                ))}
            </nav>

            {/* Content */}
            <div className="tutorial-content">
                <article className="article">
                    <h1>{ch.title}</h1>
                    <div className="article-meta">
                        <span>📚 DSA</span>
                        <span>⏱️ 5 min read</span>
                    </div>

                    {ch.content.split('\n\n').map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}

                    <h2>Implementation</h2>
                    <div className="code-block">
                        <div className="code-header">
                            <span></span>
                            <div className="code-tabs">
                                <button
                                    className={`code-tab ${lang === 'cpp' ? 'active' : ''}`}
                                    onClick={() => setLang('cpp')}
                                >
                                    C++
                                </button>
                                <button
                                    className={`code-tab ${lang === 'python' ? 'active' : ''}`}
                                    onClick={() => setLang('python')}
                                >
                                    Python
                                </button>
                            </div>
                        </div>
                        <Editor
                            height="280px"
                            language={lang === 'cpp' ? 'cpp' : 'python'}
                            value={ch.code[lang]}
                            theme="vs-dark"
                            options={{
                                readOnly: false,
                                fontSize: 14,
                                minimap: { enabled: false },
                                padding: { top: 16 },
                                scrollBeyondLastLine: false,
                            }}
                        />
                    </div>

                    <div className="problems-list">
                        <h3>Practice Problems</h3>
                        {ch.problems.map((p, i) => (
                            <div key={i} className="problem-item">
                                <span>{p}</span>
                                <span className="badge badge-easy">Easy</span>
                            </div>
                        ))}
                    </div>

                    <div className="article-nav">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setActive(Math.max(0, active - 1))}
                            disabled={active === 0}
                        >
                            ← Previous
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => setActive(Math.min(chapters.length - 1, active + 1))}
                            disabled={active === chapters.length - 1}
                        >
                            Next →
                        </button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default DsaTutorialPage;
