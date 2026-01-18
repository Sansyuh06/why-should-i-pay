import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, BookOpen, Clock, Code, Play } from 'lucide-react';

// ============================================
// COMPREHENSIVE CONTENT DATABASE
// All tutorial content is written inline here
// ============================================

const contentDatabase = {
    // ============================================
    // DSA CONTENT
    // ============================================
    dsa: {
        arrays: {
            title: 'Arrays & Strings',
            readTime: '25 min',
            content: `
## Introduction to Arrays

An **array** is a contiguous block of memory that stores elements of the same data type. Arrays are the most fundamental data structure in computer science and form the basis for many advanced structures.

### Why Arrays Matter

Arrays are crucial because:
- **O(1) random access** - Access any element instantly using its index
- **Cache-friendly** - Contiguous memory improves CPU cache performance
- **Foundation for other structures** - Stacks, queues, heaps are often built on arrays

### Array Declaration

\`\`\`java
// Java
int[] arr = new int[5];           // Fixed size
int[] arr2 = {1, 2, 3, 4, 5};     // With initialization

// Python
arr = [1, 2, 3, 4, 5]             // Dynamic array (list)

// C++
int arr[5] = {1, 2, 3, 4, 5};     // Stack allocation
vector<int> vec = {1, 2, 3};      // Dynamic vector
\`\`\`

## Time Complexity Analysis

| Operation | Time Complexity |
|-----------|-----------------|
| Access by index | O(1) |
| Search (unsorted) | O(n) |
| Search (sorted) | O(log n) |
| Insert at end | O(1) amortized |
| Insert at beginning | O(n) |
| Delete | O(n) |

## Common Array Patterns

### 1. Two Pointer Technique

Used when you need to find pairs or process elements from both ends.

\`\`\`java
// Find if pair with given sum exists
public boolean hasPairWithSum(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    Arrays.sort(arr);  // Sort first
    
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        else if (sum < target) left++;
        else right--;
    }
    return false;
}
\`\`\`

### 2. Sliding Window

Used for finding subarrays with specific properties.

\`\`\`java
// Maximum sum subarray of size k
public int maxSumSubarray(int[] arr, int k) {
    int windowSum = 0, maxSum = 0;
    
    // First window
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
\`\`\`

### 3. Prefix Sum

Precompute cumulative sums for range queries.

\`\`\`java
// Build prefix sum array
int[] prefix = new int[n + 1];
for (int i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
}

// Range sum query [l, r] in O(1)
int rangeSum = prefix[r + 1] - prefix[l];
\`\`\`

## String Manipulation

Strings are essentially arrays of characters with additional operations.

### Common String Operations

\`\`\`java
// Reverse a string
public String reverse(String s) {
    char[] chars = s.toCharArray();
    int left = 0, right = chars.length - 1;
    while (left < right) {
        char temp = chars[left];
        chars[left++] = chars[right];
        chars[right--] = temp;
    }
    return new String(chars);
}

// Check if palindrome
public boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left++) != s.charAt(right--)) {
            return false;
        }
    }
    return true;
}
\`\`\`

## Practice Problems

1. **Two Sum** - Find indices of two numbers that add up to target
2. **Best Time to Buy and Sell Stock** - Maximum profit from one transaction
3. **Contains Duplicate** - Check if array has duplicates
4. **Maximum Subarray** - Find contiguous subarray with largest sum (Kadane's Algorithm)
5. **Product of Array Except Self** - Calculate products without division
      `,
            videos: [
                { title: 'Arrays Complete Tutorial', url: 'https://www.youtube.com/embed/n60Dn0UsbEk' },
            ],
            references: [
                { title: 'GeeksforGeeks - Arrays', url: 'https://www.geeksforgeeks.org/introduction-to-arrays-data-structure-and-algorithm-tutorials/' },
                { title: 'LeetCode Arrays Problems', url: 'https://leetcode.com/tag/array/' },
                { title: 'TakeUForward - Arrays Playlist', url: 'https://www.youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB' },
            ]
        },

        trees: {
            title: 'Trees & Binary Search Trees',
            readTime: '30 min',
            content: `
## Introduction to Trees

A **tree** is a hierarchical data structure consisting of nodes connected by edges. Unlike arrays and linked lists (linear structures), trees are non-linear and allow for efficient hierarchical data organization.

### Tree Terminology

- **Root**: The topmost node with no parent
- **Parent/Child**: Direct connection between nodes
- **Leaf**: Node with no children
- **Height**: Longest path from root to leaf
- **Depth**: Distance from root to a node
- **Subtree**: A node and all its descendants

## Binary Tree

A binary tree is a tree where each node has **at most two children** (left and right).

\`\`\`java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
\`\`\`

## Tree Traversals

### 1. Inorder (Left → Root → Right)

\`\`\`java
public void inorder(TreeNode root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}
\`\`\`

### 2. Preorder (Root → Left → Right)

\`\`\`java
public void preorder(TreeNode root) {
    if (root == null) return;
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}
\`\`\`

### 3. Postorder (Left → Right → Root)

\`\`\`java
public void postorder(TreeNode root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.val + " ");
}
\`\`\`

### 4. Level Order (BFS)

\`\`\`java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> level = new ArrayList<>();
        
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(level);
    }
    return result;
}
\`\`\`

## Binary Search Tree (BST)

A BST is a binary tree with the property:
- All nodes in left subtree < root
- All nodes in right subtree > root

### BST Operations

\`\`\`java
// Search in BST - O(log n) average
public TreeNode search(TreeNode root, int val) {
    if (root == null || root.val == val) return root;
    if (val < root.val) return search(root.left, val);
    return search(root.right, val);
}

// Insert in BST
public TreeNode insert(TreeNode root, int val) {
    if (root == null) return new TreeNode(val);
    if (val < root.val) root.left = insert(root.left, val);
    else root.right = insert(root.right, val);
    return root;
}
\`\`\`

## Common Tree Problems

1. **Maximum Depth of Binary Tree**
2. **Validate Binary Search Tree**
3. **Lowest Common Ancestor**
4. **Binary Tree Level Order Traversal**
5. **Serialize and Deserialize Binary Tree**
      `,
            videos: [
                { title: 'Binary Trees - Complete Guide', url: 'https://www.youtube.com/embed/fAAZixBzIAI' },
            ],
            references: [
                { title: 'GeeksforGeeks - Binary Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
                { title: 'VisualGo - Binary Search Tree', url: 'https://visualgo.net/en/bst' },
                { title: 'TakeUForward - Trees Playlist', url: 'https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk' },
            ]
        },

        dp: {
            title: 'Dynamic Programming',
            readTime: '40 min',
            content: `
## What is Dynamic Programming?

**Dynamic Programming (DP)** is an optimization technique that solves complex problems by breaking them into overlapping subproblems and storing their solutions to avoid redundant computation.

### When to Use DP

1. **Optimal Substructure**: Solution can be built from optimal solutions of subproblems
2. **Overlapping Subproblems**: Same subproblems are solved multiple times

## Two Approaches

### 1. Top-Down (Memoization)

Start from the main problem and recursively solve subproblems, caching results.

\`\`\`java
// Fibonacci with Memoization
int[] memo = new int[n + 1];
Arrays.fill(memo, -1);

public int fib(int n) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}
\`\`\`

### 2. Bottom-Up (Tabulation)

Solve smallest subproblems first, build up to the main problem.

\`\`\`java
// Fibonacci with Tabulation
public int fib(int n) {
    if (n <= 1) return n;
    int[] dp = new int[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
\`\`\`

## Classic DP Problems

### 1. 0/1 Knapsack

\`\`\`java
public int knapsack(int[] weights, int[] values, int W) {
    int n = weights.length;
    int[][] dp = new int[n + 1][W + 1];
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = Math.max(
                    dp[i-1][w],
                    values[i-1] + dp[i-1][w - weights[i-1]]
                );
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][W];
}
\`\`\`

### 2. Longest Common Subsequence

\`\`\`java
public int lcs(String s1, String s2) {
    int m = s1.length(), n = s2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1.charAt(i-1) == s2.charAt(j-1)) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}
\`\`\`

### 3. Longest Increasing Subsequence

\`\`\`java
public int lis(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);
    
    int maxLen = 1;
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
}
\`\`\`

## DP Patterns

1. **Linear DP**: Fibonacci, Climbing Stairs, House Robber
2. **Grid DP**: Unique Paths, Minimum Path Sum
3. **String DP**: LCS, Edit Distance, Palindromic Subsequence
4. **Interval DP**: Matrix Chain Multiplication
5. **State Machine DP**: Best Time to Buy/Sell Stock

## Practice Strategy

1. Start with 1D DP problems
2. Move to 2D DP (grids, two strings)
3. Practice pattern recognition
4. Optimize space when possible
      `,
            videos: [
                { title: 'Dynamic Programming Masterclass', url: 'https://www.youtube.com/embed/nqowUJzG-iM' },
            ],
            references: [
                { title: 'GeeksforGeeks - Dynamic Programming', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
                { title: 'AtCoder DP Contest', url: 'https://atcoder.jp/contests/dp' },
                { title: 'Striver DP Series', url: 'https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/' },
            ]
        },
    },

    // ============================================
    // OOPs CONTENT
    // ============================================
    oops: {
        'classes-objects': {
            title: 'Classes & Objects',
            readTime: '15 min',
            content: `
## What is Object-Oriented Programming?

**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of "objects" which contain data (attributes) and code (methods).

### Core Concepts

1. **Class**: A blueprint/template for creating objects
2. **Object**: An instance of a class
3. **Attributes**: Data stored in an object (variables)
4. **Methods**: Functions that belong to an object

## Defining a Class

\`\`\`java
// Java
public class Car {
    // Attributes (Instance Variables)
    private String brand;
    private String model;
    private int year;
    
    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Method
    public void displayInfo() {
        System.out.println(year + " " + brand + " " + model);
    }
    
    // Getters and Setters
    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }
}
\`\`\`

\`\`\`python
# Python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    
    def display_info(self):
        print(f"{self.year} {self.brand} {self.model}")
\`\`\`

## Creating Objects

\`\`\`java
// Java
Car myCar = new Car("Toyota", "Camry", 2023);
myCar.displayInfo();  // Output: 2023 Toyota Camry
\`\`\`

\`\`\`python
# Python
my_car = Car("Toyota", "Camry", 2023)
my_car.display_info()  # Output: 2023 Toyota Camry
\`\`\`

## Constructors

A **constructor** is a special method that initializes a new object.

### Types of Constructors

1. **Default Constructor**: No parameters
2. **Parameterized Constructor**: Takes parameters
3. **Copy Constructor**: Creates copy of existing object

\`\`\`java
public class Student {
    String name;
    int age;
    
    // Default constructor
    public Student() {
        name = "Unknown";
        age = 0;
    }
    
    // Parameterized constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Copy constructor
    public Student(Student other) {
        this.name = other.name;
        this.age = other.age;
    }
}
\`\`\`

## Static vs Instance Members

- **Instance members**: Belong to each object individually
- **Static members**: Shared across all objects of the class

\`\`\`java
public class Counter {
    private static int count = 0;  // Shared across all instances
    private int id;                // Unique to each instance
    
    public Counter() {
        count++;
        this.id = count;
    }
    
    public static int getCount() {
        return count;
    }
}
\`\`\`

## The 'this' Keyword

Refers to the current object instance.

\`\`\`java
public class Person {
    String name;
    
    public Person(String name) {
        this.name = name;  // 'this' distinguishes instance variable from parameter
    }
    
    public Person setName(String name) {
        this.name = name;
        return this;  // Method chaining
    }
}
\`\`\`
      `,
            videos: [
                { title: 'OOP Concepts Explained', url: 'https://www.youtube.com/embed/pTB0EiLXUC8' },
            ],
            references: [
                { title: 'GeeksforGeeks - OOP in Java', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
                { title: 'Oracle Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/java/concepts/' },
            ]
        },

        inheritance: {
            title: 'Inheritance',
            readTime: '18 min',
            content: `
## What is Inheritance?

**Inheritance** is a mechanism where a new class (child/derived) inherits properties and behaviors from an existing class (parent/base).

### Benefits of Inheritance

- **Code Reusability**: Avoid duplicate code
- **Hierarchical Classification**: Organize related classes
- **Extensibility**: Add new features without modifying existing code

## Types of Inheritance

### 1. Single Inheritance

One child class inherits from one parent class.

\`\`\`java
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Usage
Dog dog = new Dog();
dog.eat();   // Inherited method
dog.bark();  // Own method
\`\`\`

### 2. Multilevel Inheritance

A class inherits from a class that also inherits from another class.

\`\`\`java
class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Mammal extends Animal {
    void walk() { System.out.println("Walking..."); }
}

class Dog extends Mammal {
    void bark() { System.out.println("Barking..."); }
}
\`\`\`

### 3. Hierarchical Inheritance

Multiple classes inherit from a single parent class.

\`\`\`java
class Shape {
    void draw() { System.out.println("Drawing shape"); }
}

class Circle extends Shape {
    void draw() { System.out.println("Drawing circle"); }
}

class Rectangle extends Shape {
    void draw() { System.out.println("Drawing rectangle"); }
}
\`\`\`

## Method Overriding

Child class provides its own implementation of a method defined in the parent.

\`\`\`java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}
\`\`\`

## The 'super' Keyword

Used to access parent class members.

\`\`\`java
class Vehicle {
    int speed = 50;
    
    Vehicle() {
        System.out.println("Vehicle created");
    }
    
    void display() {
        System.out.println("Speed: " + speed);
    }
}

class Bike extends Vehicle {
    int speed = 100;
    
    Bike() {
        super();  // Calls parent constructor
        System.out.println("Bike created");
    }
    
    void display() {
        System.out.println("Bike speed: " + speed);
        System.out.println("Vehicle speed: " + super.speed);
        super.display();  // Calls parent method
    }
}
\`\`\`

## Java: Why No Multiple Inheritance?

Java doesn't support multiple inheritance with classes to avoid the **Diamond Problem**.

\`\`\`java
// This is NOT allowed in Java
class A { void show() { } }
class B { void show() { } }
class C extends A, B { }  // ERROR: Which show() to inherit?

// Solution: Use Interfaces
interface A { void showA(); }
interface B { void showB(); }
class C implements A, B {
    public void showA() { }
    public void showB() { }
}
\`\`\`
      `,
            videos: [
                { title: 'Inheritance in Java', url: 'https://www.youtube.com/embed/Zs342ePFvRI' },
            ],
            references: [
                { title: 'GeeksforGeeks - Inheritance', url: 'https://www.geeksforgeeks.org/inheritance-in-java/' },
                { title: 'JavaTPoint - Inheritance', url: 'https://www.javatpoint.com/inheritance-in-java' },
            ]
        },
    },

    // ============================================
    // OS CONTENT
    // ============================================
    os: {
        'process-management': {
            title: 'Process Management',
            readTime: '20 min',
            content: `
## What is a Process?

A **process** is a program in execution. When you run a program, the OS creates a process to manage its execution.

### Process vs Program

| Program | Process |
|---------|---------|
| Passive entity (stored on disk) | Active entity (in memory) |
| Single copy | Multiple instances possible |
| Static | Dynamic (has state) |

## Process States

A process transitions through several states:

1. **New**: Process is being created
2. **Ready**: Waiting to be assigned to CPU
3. **Running**: Currently executing
4. **Waiting/Blocked**: Waiting for I/O or event
5. **Terminated**: Finished execution

\`\`\`
       New
        |
        v
     Ready <----+
        |       |
        v       |
     Running ---+
        |
        v
  Waiting/Blocked
        |
        v
    Terminated
\`\`\`

## Process Control Block (PCB)

The OS maintains a **PCB** for each process containing:

- **Process ID (PID)**: Unique identifier
- **Process State**: Current state
- **Program Counter**: Address of next instruction
- **CPU Registers**: Register values
- **Memory Information**: Page tables, memory limits
- **I/O Information**: Open files, I/O devices

\`\`\`c
struct PCB {
    int pid;
    int state;
    int program_counter;
    int registers[NUM_REGISTERS];
    struct memory_info *mem;
    struct io_info *io;
};
\`\`\`

## Context Switching

When the CPU switches from one process to another:

1. Save the state of the current process in its PCB
2. Load the state of the next process from its PCB
3. Resume execution of the new process

**Cost of Context Switch**:
- Direct: Time to save/restore registers
- Indirect: Cache invalidation, TLB flush

## Process Creation

### fork() System Call

Creates a new process by duplicating the calling process.

\`\`\`c
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork();
    
    if (pid < 0) {
        // Error
        fprintf(stderr, "Fork failed\\n");
    } else if (pid == 0) {
        // Child process
        printf("Child process, PID: %d\\n", getpid());
    } else {
        // Parent process
        printf("Parent process, Child PID: %d\\n", pid);
    }
    return 0;
}
\`\`\`

### exec() System Call

Replaces the current process image with a new program.

\`\`\`c
#include <unistd.h>

int main() {
    char *args[] = {"ls", "-l", NULL};
    execvp("ls", args);  // Replace with 'ls -l'
    // This line only executes if exec fails
    printf("Exec failed\\n");
    return 1;
}
\`\`\`

## Process Termination

Processes terminate when:
- Normal exit (return from main, exit())
- Error exit
- Killed by another process (kill signal)

**Zombie Process**: Child terminated but parent hasn't read its exit status
**Orphan Process**: Parent terminated before child; adopted by init/systemd
      `,
            videos: [
                { title: 'Process Management - Neso Academy', url: 'https://www.youtube.com/embed/OrM7nZcxXZU' },
            ],
            references: [
                { title: 'GeeksforGeeks - Processes', url: 'https://www.geeksforgeeks.org/introduction-of-process-management/' },
                { title: 'OS Process States', url: 'https://www.geeksforgeeks.org/states-of-a-process-in-operating-systems/' },
            ]
        },

        scheduling: {
            title: 'CPU Scheduling',
            readTime: '25 min',
            content: `
## What is CPU Scheduling?

**CPU Scheduling** is the process of deciding which process runs on the CPU when multiple processes are ready to execute.

### Scheduling Criteria

- **CPU Utilization**: Keep CPU as busy as possible
- **Throughput**: Number of processes completed per unit time
- **Turnaround Time**: Total time from submission to completion
- **Waiting Time**: Time spent in ready queue
- **Response Time**: Time from submission to first response

## Scheduling Algorithms

### 1. First Come First Serve (FCFS)

The simplest algorithm - processes are executed in order of arrival.

| Process | Arrival | Burst Time | Completion | Turnaround | Waiting |
|---------|---------|------------|------------|------------|---------|
| P1 | 0 | 24 | 24 | 24 | 0 |
| P2 | 0 | 3 | 27 | 27 | 24 |
| P3 | 0 | 3 | 30 | 30 | 27 |

Average Waiting Time = (0 + 24 + 27) / 3 = 17

**Problem**: Convoy effect - short processes wait for long ones.

### 2. Shortest Job First (SJF)

Execute the process with the shortest burst time first.

**Non-preemptive SJF**: Once a process starts, it runs to completion.
**Preemptive SJF (SRTF)**: Switch to shorter job if it arrives.

\`\`\`
Optimal for minimizing average waiting time
Problem: Starvation of long processes
Problem: CPU burst time is hard to predict
\`\`\`

### 3. Priority Scheduling

Each process has a priority. Higher priority processes run first.

\`\`\`
Types:
- Preemptive: Higher priority process can interrupt
- Non-preemptive: Wait for current process to finish

Problem: Starvation (low priority may never run)
Solution: Aging - gradually increase priority of waiting processes
\`\`\`

### 4. Round Robin (RR)

Each process gets a fixed time quantum. If not finished, it goes to the back of the queue.

\`\`\`
Example with time quantum = 4:

Process   Burst Time
P1        24
P2        3
P3        3

Timeline: P1(4) -> P2(3) -> P3(3) -> P1(4) -> P1(4) -> P1(4) -> P1(4) -> P1(4)
\`\`\`

**Choosing Time Quantum**:
- Too small: Too many context switches
- Too large: Degenerates to FCFS
- Rule of thumb: 80% of CPU bursts should be shorter than quantum

### 5. Multilevel Queue

Ready queue is divided into separate queues:
- Foreground (interactive processes)
- Background (batch processes)

Each queue has its own scheduling algorithm.

### 6. Multilevel Feedback Queue

Similar to multilevel queue, but processes can move between queues based on their behavior.

\`\`\`
Queue 0: Time quantum = 8ms (highest priority)
Queue 1: Time quantum = 16ms
Queue 2: FCFS (lowest priority)

New process enters Queue 0
If not finished in 8ms, moved to Queue 1
If not finished in 16ms, moved to Queue 2
\`\`\`

## Comparison

| Algorithm | Preemptive | Starvation | Overhead |
|-----------|------------|------------|----------|
| FCFS | No | No | Low |
| SJF | Both | Yes | Medium |
| Priority | Both | Yes | Medium |
| Round Robin | Yes | No | High |
| MLFQ | Yes | No | High |
      `,
            videos: [
                { title: 'CPU Scheduling Algorithms', url: 'https://www.youtube.com/embed/Jkmy2YLUbUY' },
            ],
            references: [
                { title: 'GeeksforGeeks - CPU Scheduling', url: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/' },
                { title: 'OS Scheduling Algorithms', url: 'https://www.geeksforgeeks.org/preemptive-and-non-preemptive-scheduling/' },
            ]
        },
    },

    // ============================================
    // DBMS CONTENT  
    // ============================================
    dbms: {
        'sql-basics': {
            title: 'SQL Fundamentals',
            readTime: '20 min',
            content: `
## What is SQL?

**SQL (Structured Query Language)** is the standard language for interacting with relational databases. It allows you to:

- Create and modify database schemas
- Insert, update, and delete data
- Query data with complex filters and joins
- Control access and permissions

## Basic SQL Commands

### DDL (Data Definition Language)

\`\`\`sql
-- Create a table
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);

-- Alter a table
ALTER TABLE employees ADD COLUMN phone VARCHAR(20);
ALTER TABLE employees DROP COLUMN phone;

-- Drop a table
DROP TABLE employees;
\`\`\`

### DML (Data Manipulation Language)

\`\`\`sql
-- Insert data
INSERT INTO employees (name, email, department, salary, hire_date)
VALUES ('John Doe', 'john@company.com', 'Engineering', 75000, '2023-01-15');

-- Update data
UPDATE employees 
SET salary = 80000 
WHERE id = 1;

-- Delete data
DELETE FROM employees 
WHERE id = 1;
\`\`\`

### DQL (Data Query Language)

\`\`\`sql
-- Select all
SELECT * FROM employees;

-- Select specific columns
SELECT name, department, salary FROM employees;

-- With WHERE clause
SELECT * FROM employees WHERE department = 'Engineering';

-- With ORDER BY
SELECT * FROM employees ORDER BY salary DESC;

-- With LIMIT
SELECT * FROM employees LIMIT 10;
\`\`\`

## Filtering Data

### Comparison Operators

\`\`\`sql
SELECT * FROM employees WHERE salary > 50000;
SELECT * FROM employees WHERE salary >= 50000;
SELECT * FROM employees WHERE salary <> 50000;  -- Not equal
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;
\`\`\`

### Logical Operators

\`\`\`sql
-- AND
SELECT * FROM employees 
WHERE department = 'Engineering' AND salary > 70000;

-- OR
SELECT * FROM employees 
WHERE department = 'Engineering' OR department = 'Sales';

-- NOT
SELECT * FROM employees 
WHERE NOT department = 'HR';

-- IN
SELECT * FROM employees 
WHERE department IN ('Engineering', 'Sales', 'Marketing');
\`\`\`

### Pattern Matching

\`\`\`sql
-- LIKE with wildcards
SELECT * FROM employees WHERE name LIKE 'J%';      -- Starts with J
SELECT * FROM employees WHERE name LIKE '%son';    -- Ends with son
SELECT * FROM employees WHERE name LIKE '%oh%';    -- Contains oh
SELECT * FROM employees WHERE name LIKE 'J___';    -- J followed by 3 chars
\`\`\`

## Aggregate Functions

\`\`\`sql
SELECT COUNT(*) FROM employees;                          -- Count rows
SELECT AVG(salary) FROM employees;                       -- Average
SELECT SUM(salary) FROM employees;                       -- Sum
SELECT MIN(salary), MAX(salary) FROM employees;          -- Min and Max

-- GROUP BY
SELECT department, COUNT(*), AVG(salary) 
FROM employees 
GROUP BY department;

-- HAVING (filter groups)
SELECT department, AVG(salary) as avg_salary
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 60000;
\`\`\`

## NULL Handling

\`\`\`sql
-- Check for NULL
SELECT * FROM employees WHERE department IS NULL;
SELECT * FROM employees WHERE department IS NOT NULL;

-- COALESCE - return first non-null value
SELECT name, COALESCE(department, 'Unassigned') FROM employees;

-- NULLIF - return NULL if values are equal
SELECT NULLIF(department, 'None') FROM employees;
\`\`\`
      `,
            videos: [
                { title: 'SQL Tutorial for Beginners', url: 'https://www.youtube.com/embed/HXV3zeQKqGY' },
            ],
            references: [
                { title: 'W3Schools SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
                { title: 'LeetCode SQL 50', url: 'https://leetcode.com/studyplan/top-sql-50/' },
                { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' },
            ]
        },

        normalization: {
            title: 'Database Normalization',
            readTime: '18 min',
            content: `
## What is Normalization?

**Normalization** is the process of organizing data in a database to reduce redundancy and improve data integrity.

### Why Normalize?

- **Eliminate Redundancy**: Store data only once
- **Prevent Anomalies**: Avoid insert, update, delete anomalies
- **Improve Integrity**: Ensure data consistency
- **Optimize Storage**: Reduce disk space usage

## Normal Forms

### First Normal Form (1NF)

**Rules**:
- Each column contains atomic (indivisible) values
- Each row is unique (has a primary key)
- No repeating groups

\`\`\`
BAD (Not 1NF):
+----+--------+------------------+
| ID | Name   | Phone Numbers    |
+----+--------+------------------+
| 1  | John   | 123-456, 789-012 |
+----+--------+------------------+

GOOD (1NF):
+----+--------+-----------+
| ID | Name   | Phone     |
+----+--------+-----------+
| 1  | John   | 123-456   |
| 1  | John   | 789-012   |
+----+--------+-----------+
\`\`\`

### Second Normal Form (2NF)

**Rules**:
- Must be in 1NF
- No partial dependencies (non-key attributes depend on entire primary key)

\`\`\`
BAD (Not 2NF) - Composite key (StudentID, CourseID):
+-------+-------+--------+-------------+
| StuID | CrsID | Grade  | CourseName  |
+-------+-------+--------+-------------+
| 1     | 101   | A      | Math        |  <- CourseName depends only on CrsID
+-------+-------+--------+-------------+

GOOD (2NF):
Students_Courses:                Courses:
+-------+-------+-------+        +-------+------------+
| StuID | CrsID | Grade |        | CrsID | CourseName |
+-------+-------+-------+        +-------+------------+
| 1     | 101   | A     |        | 101   | Math       |
+-------+-------+-------+        +-------+------------+
\`\`\`

### Third Normal Form (3NF)

**Rules**:
- Must be in 2NF
- No transitive dependencies (non-key attribute depending on another non-key attribute)

\`\`\`
BAD (Not 3NF):
+-------+--------+--------+----------+
| EmpID | DeptID | Salary | DeptName |
+-------+--------+--------+----------+
| 1     | 10     | 50000  | Sales    |  <- DeptName depends on DeptID, not EmpID
+-------+--------+--------+----------+

GOOD (3NF):
Employees:                 Departments:
+-------+--------+--------+    +--------+----------+
| EmpID | DeptID | Salary |    | DeptID | DeptName |
+-------+--------+--------+    +--------+----------+
| 1     | 10     | 50000  |    | 10     | Sales    |
+-------+--------+--------+    +--------+----------+
\`\`\`

### Boyce-Codd Normal Form (BCNF)

**Rules**:
- Must be in 3NF
- For every functional dependency X → Y, X must be a superkey

\`\`\`
If a table has multiple candidate keys, and a non-prime attribute 
determines part of a candidate key, it violates BCNF.
\`\`\`

## Denormalization

Sometimes we intentionally add redundancy for:
- **Performance**: Reduce joins in read-heavy systems
- **Simplicity**: Easier queries
- **Caching**: Store computed values

\`\`\`sql
-- Denormalized: Store total_orders directly
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    total_orders INT DEFAULT 0  -- Redundant but fast to query
);
\`\`\`
      `,
            videos: [
                { title: 'Database Normalization Explained', url: 'https://www.youtube.com/embed/GFQaEYEc8_8' },
            ],
            references: [
                { title: 'GeeksforGeeks - Normalization', url: 'https://www.geeksforgeeks.org/normal-forms-in-dbms/' },
                { title: 'StudyTonight - DBMS Normalization', url: 'https://www.studytonight.com/dbms/database-normalization.php' },
            ]
        },
    },

    // ============================================
    // CN CONTENT
    // ============================================
    cn: {
        'osi-model': {
            title: 'OSI Model',
            readTime: '20 min',
            content: `
## What is the OSI Model?

The **OSI (Open Systems Interconnection) Model** is a conceptual framework that standardizes the functions of a communication system into seven abstraction layers.

## The Seven Layers

### Layer 7: Application Layer

The layer closest to the end user. It provides network services to applications.

**Protocols**: HTTP, HTTPS, FTP, SMTP, DNS, SSH, Telnet
**Examples**: Web browsers, email clients, file transfer applications

### Layer 6: Presentation Layer

Translates data between the application layer and the network. Handles encryption, compression, and data formatting.

**Functions**:
- Data encryption/decryption (SSL/TLS)
- Data compression
- Character encoding (ASCII, Unicode)
- Data formatting (JPEG, GIF, MPEG)

### Layer 5: Session Layer

Manages sessions between applications. Establishes, maintains, and terminates connections.

**Functions**:
- Session establishment and termination
- Authentication
- Session checkpointing and recovery

### Layer 4: Transport Layer

Provides reliable data transfer between end systems. Handles segmentation, flow control, and error correction.

**Protocols**: TCP, UDP
**Functions**:
- Segmentation and reassembly
- Flow control
- Error detection and correction
- Port addressing

\`\`\`
TCP (Transmission Control Protocol):
- Connection-oriented
- Reliable, ordered delivery
- Flow control, congestion control
- Used for: HTTP, FTP, SMTP, SSH

UDP (User Datagram Protocol):
- Connectionless
- Unreliable, unordered delivery
- No flow control
- Used for: DNS, VoIP, streaming, gaming
\`\`\`

### Layer 3: Network Layer

Handles logical addressing and routing of data packets between networks.

**Protocols**: IP, ICMP, ARP, RARP
**Devices**: Routers
**Functions**:
- Logical addressing (IP addresses)
- Routing
- Packet forwarding
- Fragmentation

### Layer 2: Data Link Layer

Provides node-to-node data transfer and handles error detection/correction from the physical layer.

**Protocols**: Ethernet, PPP, HDLC, MAC
**Devices**: Switches, Bridges
**Sub-layers**:
- LLC (Logical Link Control)
- MAC (Media Access Control)

### Layer 1: Physical Layer

Deals with the physical transmission of raw bits over a medium.

**Devices**: Hubs, Cables, NICs
**Functions**:
- Bit transmission
- Signal encoding
- Physical topology
- Transmission medium

## Data Encapsulation

As data moves down the layers, each layer adds its own header:

\`\`\`
Application: [Data]
Transport:   [TCP Header][Data]        -> Segment
Network:     [IP Header][TCP][Data]    -> Packet
Data Link:   [Frame Header][IP][TCP][Data][Frame Trailer] -> Frame
Physical:    101010101010101010...     -> Bits
\`\`\`

## OSI vs TCP/IP Model

| OSI Model | TCP/IP Model |
|-----------|--------------|
| 7 layers | 4 layers |
| Theoretical | Practical |
| Layer-by-layer approach | Protocol-oriented |
| Application, Presentation, Session | Application |
| Transport | Transport |
| Network | Internet |
| Data Link, Physical | Network Access |
      `,
            videos: [
                { title: 'OSI Model Explained', url: 'https://www.youtube.com/embed/vv4y_uOneC0' },
            ],
            references: [
                { title: 'GeeksforGeeks - OSI Model', url: 'https://www.geeksforgeeks.org/layers-of-osi-model/' },
                { title: 'Cloudflare - OSI Model', url: 'https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/' },
            ]
        },
    },
};

// ============================================
// CONTENT PAGE COMPONENT
// ============================================

const ContentPage = () => {
    const { topicId, subtopicId } = useParams();

    const topicContent = contentDatabase[topicId];
    const content = topicContent?.[subtopicId];

    if (!content) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-400 mb-4">Content not found</h2>
                    <Link to={`/topic/${topicId}`} className="text-violet-400 hover:underline">
                        Back to {topicId?.toUpperCase()}
                    </Link>
                </div>
            </div>
        );
    }

    // Simple markdown-like rendering
    const renderContent = (text) => {
        const lines = text.trim().split('\n');
        const elements = [];
        let inCodeBlock = false;
        let codeContent = [];
        let codeLanguage = '';

        lines.forEach((line, idx) => {
            // Code block start
            if (line.startsWith('```') && !inCodeBlock) {
                inCodeBlock = true;
                codeLanguage = line.slice(3).trim();
                return;
            }

            // Code block end
            if (line.startsWith('```') && inCodeBlock) {
                inCodeBlock = false;
                elements.push(
                    <pre key={idx} className="code-block my-6 overflow-x-auto">
                        <code>{codeContent.join('\n')}</code>
                    </pre>
                );
                codeContent = [];
                return;
            }

            // Inside code block
            if (inCodeBlock) {
                codeContent.push(line);
                return;
            }

            // Headers
            if (line.startsWith('## ')) {
                elements.push(<h2 key={idx} className="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">{line.slice(3)}</h2>);
                return;
            }
            if (line.startsWith('### ')) {
                elements.push(<h3 key={idx} className="text-xl font-semibold text-white mt-8 mb-3">{line.slice(4)}</h3>);
                return;
            }

            // Tables
            if (line.startsWith('|')) {
                elements.push(
                    <div key={idx} className="text-sm text-slate-400 font-mono my-1">{line}</div>
                );
                return;
            }

            // Empty lines
            if (line.trim() === '') {
                return;
            }

            // Regular paragraphs
            const formattedLine = line
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                .replace(/`([^`]+)`/g, '<code class="code-inline">$1</code>');

            elements.push(
                <p
                    key={idx}
                    className="text-slate-300 leading-relaxed my-3"
                    dangerouslySetInnerHTML={{ __html: formattedLine }}
                />
            );
        });

        return elements;
    };

    return (
        <div className="min-h-full bg-[#0a0a0f]">
            <div className="max-w-[1400px] mx-auto px-8 py-8">
                {/* Back Button */}
                <Link
                    to={`/topic/${topicId}`}
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span>Back to {topicId?.toUpperCase()}</span>
                </Link>

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-white mb-3">{content.title}</h1>
                    <div className="flex items-center gap-4 text-slate-400">
                        <span className="flex items-center gap-2">
                            <Clock size={16} />
                            {content.readTime} read
                        </span>
                        <span className="flex items-center gap-2">
                            <BookOpen size={16} />
                            Comprehensive Tutorial
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="topic-content">
                    {renderContent(content.content)}
                </div>

                {/* Embedded Videos */}
                {content.videos && content.videos.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Play className="text-violet-400" size={24} />
                            Video Tutorial
                        </h2>
                        <div className="grid gap-6">
                            {content.videos.map((video, idx) => (
                                <div key={idx} className="rounded-xl overflow-hidden border border-white/10">
                                    <div className="video-container">
                                        <iframe
                                            src={video.url}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <div className="p-4 bg-[#16161f]">
                                        <h4 className="font-medium text-white">{video.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* References Section */}
                <div className="reference-section mt-12">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <BookOpen className="text-violet-400" size={20} />
                        References & Further Reading
                    </h2>
                    <p className="text-slate-400 mb-6">
                        This content was compiled from the following sources. Click to explore the original materials:
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {content.references.map((ref, idx) => (
                            <a
                                key={idx}
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reference-link"
                            >
                                {ref.title}
                                <ExternalLink size={14} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-12 pt-8 border-t border-white/10 flex justify-between">
                    <Link
                        to={`/topic/${topicId}`}
                        className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                    >
                        ← Back to Topics
                    </Link>
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-500 transition-colors"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContentPage;
