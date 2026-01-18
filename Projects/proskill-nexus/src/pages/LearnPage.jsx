import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ChevronRight, Clock, BookOpen, Code, Play, ExternalLink,
    CheckCircle, ArrowRight, Lightbulb
} from 'lucide-react';

// ============================================
// TUTORIAL CONTENT DATABASE
// ============================================
const tutorialContent = {
    dsa: {
        arrays: {
            title: 'Arrays - Complete Guide',
            readTime: '15 min',
            content: `
# Arrays in Programming

An **array** is a collection of elements stored at contiguous memory locations. It's the most fundamental data structure that forms the building block for more complex structures.

## Why Learn Arrays?

- **Foundation**: Arrays are the base for stacks, queues, heaps, and more
- **Interview Essential**: 40% of coding interview questions involve arrays
- **Performance**: O(1) access time makes them extremely efficient

## Declaring Arrays

### Java
\`\`\`java
// Declaration and initialization
int[] numbers = new int[5];
int[] values = {1, 2, 3, 4, 5};

// Accessing elements
int first = values[0];  // 1
int last = values[values.length - 1];  // 5
\`\`\`

### Python
\`\`\`python
# Python lists (dynamic arrays)
numbers = [1, 2, 3, 4, 5]

# Accessing elements
first = numbers[0]   # 1
last = numbers[-1]   # 5 (negative indexing)
\`\`\`

### C++
\`\`\`cpp
// Static array
int arr[5] = {1, 2, 3, 4, 5};

// Dynamic array (vector)
vector<int> vec = {1, 2, 3, 4, 5};
\`\`\`

## Time Complexity

| Operation | Complexity |
|-----------|------------|
| Access by index | O(1) |
| Search (unsorted) | O(n) |
| Insert at end | O(1) |
| Insert at beginning | O(n) |
| Delete | O(n) |

## Common Patterns

### Two Pointers
Used to find pairs or process from both ends simultaneously.

\`\`\`java
public boolean hasPairWithSum(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    Arrays.sort(arr);
    
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}
\`\`\`

### Sliding Window
Used for finding subarrays with specific properties.

\`\`\`java
public int maxSum(int[] arr, int k) {
    int windowSum = 0, maxSum = 0;
    
    for (int i = 0; i < k; i++) 
        windowSum += arr[i];
    maxSum = windowSum;
    
    for (int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
\`\`\`

## Try It Yourself!

Open the IDE on the right and try solving this problem:

**Problem**: Find the maximum element in an array.

\`\`\`java
public int findMax(int[] arr) {
    // Your code here
}
\`\`\`
      `,
            starterCode: {
                java: `public class Main {
    public static int findMax(int[] arr) {
        // Write your code here
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    public static void main(String[] args) {
        int[] arr = {3, 7, 2, 9, 1, 5};
        System.out.println("Maximum: " + findMax(arr));
    }
}`,
                python: `def find_max(arr):
    # Write your code here
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val

# Test
arr = [3, 7, 2, 9, 1, 5]
print(f"Maximum: {find_max(arr)}")`,
                cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMax(vector<int>& arr) {
    // Write your code here
    int maxVal = arr[0];
    for (int num : arr) {
        if (num > maxVal) {
            maxVal = num;
        }
    }
    return maxVal;
}

int main() {
    vector<int> arr = {3, 7, 2, 9, 1, 5};
    cout << "Maximum: " << findMax(arr) << endl;
    return 0;
}`
            },
            references: [
                { title: 'GeeksforGeeks - Arrays', url: 'https://www.geeksforgeeks.org/introduction-to-arrays/' },
                { title: 'LeetCode Array Problems', url: 'https://leetcode.com/tag/array/' },
                { title: 'TakeUForward - Arrays', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/' },
            ]
        },

        trees: {
            title: 'Trees - Complete Guide',
            readTime: '20 min',
            content: `
# Trees in Data Structures

A **tree** is a hierarchical data structure consisting of nodes connected by edges. Unlike linear structures, trees allow for efficient hierarchical data organization.

## Key Terminology

- **Root**: The topmost node
- **Parent/Child**: Connected nodes
- **Leaf**: Node with no children
- **Height**: Longest path from root to leaf
- **Depth**: Distance from root to a node

## Binary Tree

A tree where each node has at most 2 children (left and right).

\`\`\`java
class TreeNode {
    int val;
    TreeNode left, right;
    
    TreeNode(int val) {
        this.val = val;
    }
}
\`\`\`

## Tree Traversals

### Inorder (Left → Root → Right)
\`\`\`java
void inorder(TreeNode root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}
\`\`\`

### Preorder (Root → Left → Right)
\`\`\`java
void preorder(TreeNode root) {
    if (root == null) return;
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}
\`\`\`

### Postorder (Left → Right → Root)
\`\`\`java
void postorder(TreeNode root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.val + " ");
}
\`\`\`

## Binary Search Tree (BST)

A BST maintains the property: Left < Root < Right

\`\`\`java
TreeNode search(TreeNode root, int val) {
    if (root == null || root.val == val) return root;
    if (val < root.val) return search(root.left, val);
    return search(root.right, val);
}
\`\`\`
      `,
            starterCode: {
                java: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public class Main {
    public static void inorder(TreeNode root) {
        // Write your inorder traversal here
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.print("Inorder: ");
        inorder(root);
    }
}`,
                python: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def inorder(root):
    # Write your inorder traversal here
    if root is None:
        return
    inorder(root.left)
    print(root.val, end=" ")
    inorder(root.right)

# Test
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print("Inorder:", end=" ")
inorder(root)`,
            },
            references: [
                { title: 'GeeksforGeeks - Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
                { title: 'VisualGo - BST', url: 'https://visualgo.net/en/bst' },
            ]
        },
    },

    oops: {
        classes: {
            title: 'Classes & Objects',
            readTime: '12 min',
            content: `
# Classes and Objects in OOP

A **class** is a blueprint for creating objects. An **object** is an instance of a class.

## Defining a Class

### Java
\`\`\`java
public class Car {
    // Attributes
    private String brand;
    private int year;
    
    // Constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    // Method
    public void displayInfo() {
        System.out.println(year + " " + brand);
    }
}

// Creating an object
Car myCar = new Car("Toyota", 2023);
myCar.displayInfo();  // Output: 2023 Toyota
\`\`\`

### Python
\`\`\`python
class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year
    
    def display_info(self):
        print(f"{self.year} {self.brand}")

# Creating an object
my_car = Car("Toyota", 2023)
my_car.display_info()  # Output: 2023 Toyota
\`\`\`

## Key Concepts

### Constructors
Special methods that initialize objects when created.

### Access Modifiers
- **public**: Accessible everywhere
- **private**: Only within the class
- **protected**: Within class and subclasses

### The 'this' Keyword
Refers to the current object instance.
      `,
            starterCode: {
                java: `public class Main {
    public static void main(String[] args) {
        // Create a Student class and instantiate it
        Student s1 = new Student("Alice", 20);
        s1.displayInfo();
    }
}

class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}`,
                python: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def display_info(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Create and use a Student object
s1 = Student("Alice", 20)
s1.display_info()`,
            },
            references: [
                { title: 'GeeksforGeeks - OOP', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
                { title: 'Oracle Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/java/concepts/' },
            ]
        },
    },

    os: {
        processes: {
            title: 'Process Management',
            readTime: '15 min',
            content: `
# Process Management in Operating Systems

A **process** is a program in execution. When you run a program, the OS creates a process.

## Process vs Program

| Program | Process |
|---------|---------|
| Passive (on disk) | Active (in memory) |
| Single copy | Multiple instances |
| Static | Dynamic (has state) |

## Process States

1. **New**: Being created
2. **Ready**: Waiting for CPU
3. **Running**: Executing
4. **Waiting**: Waiting for I/O
5. **Terminated**: Finished

## Process Control Block (PCB)

The OS maintains a PCB for each process:
- Process ID (PID)
- Process State
- Program Counter
- CPU Registers
- Memory Information

## Context Switching

When CPU switches from one process to another:
1. Save current process state to PCB
2. Load new process state from its PCB
3. Resume new process

\`\`\`c
// Fork example in C
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork();
    
    if (pid == 0) {
        printf("Child process\\n");
    } else {
        printf("Parent process\\n");
    }
    return 0;
}
\`\`\`
      `,
            references: [
                { title: 'GeeksforGeeks - Processes', url: 'https://www.geeksforgeeks.org/introduction-of-process-management/' },
                { title: 'Neso Academy - OS', url: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O' },
            ]
        },
    },
};

// ============================================
// LEARN PAGE COMPONENT
// ============================================
const LearnPage = ({ topics }) => {
    const { topicId, sectionId } = useParams();
    const [selectedLanguage, setSelectedLanguage] = useState('java');

    const topic = topics[topicId];
    const section = sectionId ? topic?.sections.find(s => s.id === sectionId) : null;
    const content = tutorialContent[topicId]?.[sectionId];

    // If no section selected, show topic overview
    if (!sectionId) {
        return (
            <div className="content-area">
                <div className="tutorial-pane">
                    <div className="max-w-4xl">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <ChevronRight size={14} />
                            <span className="text-white">{topic?.title}</span>
                        </div>

                        <h1 className="text-4xl font-bold text-white mb-4">{topic?.title}</h1>
                        <p className="text-xl text-gray-400 mb-8">
                            Select a section below to start learning
                        </p>

                        <div className="grid gap-4">
                            {topic?.sections.map((section, idx) => (
                                <Link
                                    key={section.id}
                                    to={`/learn/${topicId}/${section.id}`}
                                    className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all group flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-white font-bold">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                                                {section.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">{section.lessons.length} lessons</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-gray-500 group-hover:text-green-400 transition-colors" size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Show tutorial content
    if (!content) {
        return (
            <div className="content-area">
                <div className="tutorial-pane">
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-gray-400 mb-4">Content Coming Soon</h2>
                        <p className="text-gray-500 mb-6">This section is being written. Check back soon!</p>
                        <Link to={`/learn/${topicId}`} className="text-green-400 hover:underline">
                            ← Back to {topic?.title}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Render markdown-like content
    const renderContent = (text) => {
        const lines = text.trim().split('\n');
        const elements = [];
        let inCodeBlock = false;
        let codeContent = [];
        let codeLanguage = '';

        lines.forEach((line, idx) => {
            if (line.startsWith('```') && !inCodeBlock) {
                inCodeBlock = true;
                codeLanguage = line.slice(3).trim();
                return;
            }

            if (line.startsWith('```') && inCodeBlock) {
                inCodeBlock = false;
                elements.push(
                    <pre key={idx} className="bg-[#1e1e2e] border border-gray-700 rounded-lg p-5 my-6 overflow-x-auto font-mono text-sm">
                        <code>{codeContent.join('\n')}</code>
                    </pre>
                );
                codeContent = [];
                return;
            }

            if (inCodeBlock) {
                codeContent.push(line);
                return;
            }

            if (line.startsWith('# ')) {
                elements.push(<h1 key={idx} className="text-3xl font-bold text-white mt-8 mb-4">{line.slice(2)}</h1>);
                return;
            }
            if (line.startsWith('## ')) {
                elements.push(<h2 key={idx} className="text-2xl font-semibold text-white mt-10 mb-4 pb-3 border-b border-gray-700">{line.slice(3)}</h2>);
                return;
            }
            if (line.startsWith('### ')) {
                elements.push(<h3 key={idx} className="text-xl font-semibold text-white mt-8 mb-3">{line.slice(4)}</h3>);
                return;
            }

            if (line.startsWith('|')) {
                elements.push(<div key={idx} className="text-sm text-gray-400 font-mono my-1">{line}</div>);
                return;
            }

            if (line.startsWith('- ')) {
                elements.push(<li key={idx} className="text-gray-300 ml-4 my-1">{line.slice(2)}</li>);
                return;
            }

            if (line.trim() === '') return;

            const formatted = line
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-0.5 rounded text-purple-300 text-sm font-mono">$1</code>');

            elements.push(
                <p key={idx} className="text-gray-300 leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: formatted }} />
            );
        });

        return elements;
    };

    return (
        <div className="content-area">
            <div className="split-pane">
                {/* Tutorial Side */}
                <div className="tutorial-pane">
                    <div className="max-w-3xl">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <ChevronRight size={14} />
                            <Link to={`/learn/${topicId}`}>{topic?.title}</Link>
                            <ChevronRight size={14} />
                            <span className="text-white">{section?.title}</span>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <Clock size={16} className="text-gray-500" />
                            <span className="text-gray-500 text-sm">{content.readTime} read</span>
                        </div>

                        <div className="tutorial-content">
                            {renderContent(content.content)}
                        </div>

                        {/* Try It Box */}
                        <div className="try-it-box">
                            <div className="try-it-title">
                                <Lightbulb size={20} />
                                Try It Yourself!
                            </div>
                            <p className="text-gray-400 text-sm">
                                Use the code editor on the right to practice. The starter code is already loaded.
                            </p>
                        </div>

                        {/* References */}
                        {content.references && (
                            <div className="references">
                                <h3 className="references-title">📚 References & Further Reading</h3>
                                <div className="reference-links">
                                    {content.references.map((ref, idx) => (
                                        <a key={idx} href={ref.url} target="_blank" rel="noopener noreferrer" className="reference-link">
                                            {ref.title}
                                            <ExternalLink size={14} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Editor Side */}
                <div className="editor-pane">
                    <div className="editor-header">
                        <div className="editor-tabs">
                            {['java', 'python', 'cpp'].map(lang => (
                                <button
                                    key={lang}
                                    className={`editor-tab ${selectedLanguage === lang ? 'active text-white' : 'text-gray-400'}`}
                                    onClick={() => setSelectedLanguage(lang)}
                                >
                                    {lang === 'cpp' ? 'C++' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </button>
                            ))}
                        </div>
                        <button className="run-button">
                            <Play size={16} />
                            Run Code
                        </button>
                    </div>

                    <div className="editor-container bg-[#1e1e1e] p-4">
                        <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                            {content.starterCode?.[selectedLanguage] || '// No starter code available for this language'}
                        </pre>
                    </div>

                    <div className="output-panel">
                        <div className="output-header">
                            <span>Output</span>
                        </div>
                        <div className="output-content">
                            <span className="text-gray-500">Click "Run Code" to see output here...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnPage;
