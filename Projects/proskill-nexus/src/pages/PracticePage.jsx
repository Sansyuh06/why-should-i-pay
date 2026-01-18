import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const problems = [
    {
        id: 'two-sum',
        title: 'Two Sum',
        difficulty: 'Easy',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        examples: 'Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: nums[0] + nums[1] = 2 + 7 = 9',
        template: {
            cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your code here
        
    }
};`,
            python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Your code here
        pass`,
            java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        
    }
}`
        }
    },
    {
        id: 'reverse-string',
        title: 'Reverse String',
        difficulty: 'Easy',
        description: 'Write a function that reverses a string. The input string is given as an array of characters.',
        examples: 'Input: s = ["h","e","l","l","o"]\nOutput: ["o","l","l","e","h"]',
        template: {
            cpp: `#include <vector>
using namespace std;

class Solution {
public:
    void reverseString(vector<char>& s) {
        // Your code here
        
    }
};`,
            python: `class Solution:
    def reverseString(self, s: list[str]) -> None:
        # Your code here (modify in-place)
        pass`,
            java: `class Solution {
    public void reverseString(char[] s) {
        // Your code here
        
    }
}`
        }
    },
    {
        id: 'max-subarray',
        title: 'Maximum Subarray',
        difficulty: 'Medium',
        description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
        examples: 'Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6',
        template: {
            cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Use Kadane's Algorithm
        
    }
};`,
            python: `class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        # Use Kadane's Algorithm
        pass`,
            java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Use Kadane's Algorithm
        
    }
}`
        }
    },
    {
        id: 'binary-search',
        title: 'Binary Search',
        difficulty: 'Easy',
        description: 'Given a sorted array of integers and a target, return the index of target. If not found, return -1.',
        examples: 'Input: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4',
        template: {
            cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Your code here
        
    }
};`,
            python: `class Solution:
    def search(self, nums: list[int], target: int) -> int:
        # Your code here
        pass`,
            java: `class Solution {
    public int search(int[] nums, int target) {
        // Your code here
        
    }
}`
        }
    }
];

const PracticePage = () => {
    const [activeProblem, setActiveProblem] = useState(0);
    const [lang, setLang] = useState('cpp');
    const [code, setCode] = useState(problems[0].template.cpp);
    const [output, setOutput] = useState('');

    const problem = problems[activeProblem];

    const handleProblemChange = (idx) => {
        setActiveProblem(idx);
        setCode(problems[idx].template[lang]);
        setOutput('');
    };

    const handleLangChange = (newLang) => {
        setLang(newLang);
        setCode(problem.template[newLang]);
    };

    const runCode = () => {
        setOutput('⏳ Running code...\n\n(Note: This is a demo. In production, code would be compiled and executed via a backend service like Judge0 API)');
    };

    return (
        <div className="ide-page">
            {/* Problem Panel */}
            <div style={{ width: '400px', borderRight: '1px solid #30363d', display: 'flex', flexDirection: 'column' }}>
                {/* Problem Selector */}
                <div style={{ padding: '16px', borderBottom: '1px solid #30363d' }}>
                    <select
                        value={activeProblem}
                        onChange={(e) => handleProblemChange(Number(e.target.value))}
                        style={{
                            width: '100%',
                            padding: '10px',
                            background: '#161b22',
                            border: '1px solid #30363d',
                            borderRadius: '6px',
                            color: 'white',
                            fontSize: '14px'
                        }}
                    >
                        {problems.map((p, idx) => (
                            <option key={p.id} value={idx}>
                                {p.title} ({p.difficulty})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Problem Description */}
                <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>
                            {problem.title}
                        </h2>
                        <span style={{
                            padding: '4px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            background: problem.difficulty === 'Easy' ? 'rgba(63,185,80,0.15)' : 'rgba(210,153,34,0.15)',
                            color: problem.difficulty === 'Easy' ? '#3fb950' : '#d29922'
                        }}>
                            {problem.difficulty}
                        </span>
                    </div>

                    <p style={{ color: '#c9d1d9', lineHeight: '1.7', marginBottom: '24px' }}>
                        {problem.description}
                    </p>

                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                            Example:
                        </h3>
                        <pre style={{
                            background: '#161b22',
                            padding: '16px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            color: '#8b949e',
                            whiteSpace: 'pre-wrap'
                        }}>
                            {problem.examples}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Editor Panel */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Toolbar */}
                <div className="ide-toolbar">
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {['cpp', 'python', 'java'].map(l => (
                            <button
                                key={l}
                                onClick={() => handleLangChange(l)}
                                className={`code-tab ${lang === l ? 'active' : ''}`}
                            >
                                {l === 'cpp' ? 'C++' : l.charAt(0).toUpperCase() + l.slice(1)}
                            </button>
                        ))}
                    </div>
                    <button onClick={runCode} className="btn btn-primary">
                        ▶ Run Code
                    </button>
                </div>

                {/* Editor */}
                <div style={{ flex: 1 }}>
                    <Editor
                        height="100%"
                        language={lang === 'cpp' ? 'cpp' : lang}
                        value={code}
                        onChange={(v) => setCode(v || '')}
                        theme="vs-dark"
                        options={{
                            fontSize: 14,
                            minimap: { enabled: false },
                            padding: { top: 16 },
                            scrollBeyondLastLine: false,
                        }}
                    />
                </div>

                {/* Output */}
                <div style={{
                    height: '150px',
                    background: '#161b22',
                    borderTop: '1px solid #30363d',
                    padding: '16px',
                    fontFamily: 'Source Code Pro, monospace',
                    fontSize: '13px',
                    color: '#8b949e',
                    overflowY: 'auto'
                }}>
                    <div style={{ marginBottom: '8px', color: '#58a6ff', fontWeight: '500' }}>Output:</div>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {output || 'Click "Run Code" to see output'}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default PracticePage;
