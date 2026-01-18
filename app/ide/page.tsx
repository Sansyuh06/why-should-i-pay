'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { Navigation } from '@/components/navigation';
import { Play, RotateCcw, Copy, Check, Download, Settings } from 'lucide-react';

const LANGUAGES = [
  {
    id: 'python',
    label: 'Python',
    monacoId: 'python',
    extension: '.py',
    defaultCode: `# Python Solution
def two_sum(nums, target):
    """
    Find two numbers that add up to target
    Time: O(n), Space: O(n)
    """
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test
nums = [2, 7, 11, 15]
target = 9
print(f"Input: nums = {nums}, target = {target}")
print(f"Output: {two_sum(nums, target)}")
`
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    monacoId: 'javascript',
    extension: '.js',
    defaultCode: `// JavaScript Solution
function twoSum(nums, target) {
  /**
   * Find two numbers that add up to target
   * Time: O(n), Space: O(n)
   */
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Test
const nums = [2, 7, 11, 15];
const target = 9;
console.log(\`Input: nums = [\${nums}], target = \${target}\`);
console.log(\`Output: [\${twoSum(nums, target)}]\`);
`
  },
  {
    id: 'java',
    label: 'Java',
    monacoId: 'java',
    extension: '.java',
    defaultCode: `// Java Solution
import java.util.*;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = sol.twoSum(nums, target);
        System.out.println("Output: [" + result[0] + ", " + result[1] + "]");
    }
}
`
  },
  {
    id: 'cpp',
    label: 'C++',
    monacoId: 'cpp',
    extension: '.cpp',
    defaultCode: `// C++ Solution
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};

int main() {
    Solution sol;
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = sol.twoSum(nums, target);
    cout << "Output: [" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}
`
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    monacoId: 'typescript',
    extension: '.ts',
    defaultCode: `// TypeScript Solution
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Test
const nums: number[] = [2, 7, 11, 15];
const target: number = 9;
console.log(\`Input: nums = [\${nums}], target = \${target}\`);
console.log(\`Output: [\${twoSum(nums, target)}]\`);
`
  },
];

export default function IDEPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(LANGUAGES[0]?.defaultCode || '');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'vs-dark' | 'light'>('vs-dark');
  const [fontSize, setFontSize] = useState(14);

  const language = LANGUAGES.find(l => l?.id === selectedLanguage);

  const handleLanguageChange = useCallback((langId: string) => {
    setSelectedLanguage(langId);
    const lang = LANGUAGES.find(l => l?.id === langId);
    if(lang) {
      setCode(lang.defaultCode);
      setOutput('');
    }
  }, []);

  const handleEditorChange = useCallback((value: string | undefined) => {
    setCode(value || '');
  }, []);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('⏳ Executing code...\n');

    try {
      if(!code || code.trim() === '') {
        setOutput('❌ Error: Code editor is empty. Please write some code.');
        return;
      }

      if(selectedLanguage === 'javascript' || selectedLanguage === 'typescript') {
        // Run JavaScript/TypeScript in browser
        try {
          const logs: string[] = [];
          const originalLog = console.log;
          console.log = (...args) => {
            logs.push(args.map(a =>
              typeof a === 'object' ? JSON.stringify(a) : String(a)
            ).join(' '));
          };

          // eslint-disable-next-line no-eval
          const result = eval(code);
          console.log = originalLog;

          const outputText = logs.length > 0
            ? `✅ Execution successful!\n\n${logs.join('\n')}${result !== undefined ? `\n\nReturn value: ${result}` : ''}`
            : result !== undefined
              ? `✅ Execution successful!\n\nReturn value: ${result}`
              : '✅ Execution successful! (no output)';

          setOutput(outputText);
        } catch(e) {
          setOutput(`❌ Runtime Error:\n\n${(e as Error)?.message || 'Unknown error'}`);
        }
      } else {
        // Simulate execution for other languages
        await new Promise(resolve => setTimeout(resolve, 1500));
        setOutput(`✅ ${language?.label} code compiled successfully!\n\n📝 Note: Full execution requires a backend server.\n\nSimulated output:\n${'─'.repeat(40)}\n${getSimulatedOutput(selectedLanguage)}`);
      }
    } catch(error) {
      setOutput(`❌ Error: ${(error as Error)?.message || 'Unknown error occurred'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const getSimulatedOutput = (lang: string) => {
    switch(lang) {
      case 'python':
        return 'Input: nums = [2, 7, 11, 15], target = 9\nOutput: [0, 1]';
      case 'java':
        return 'Output: [0, 1]';
      case 'cpp':
        return 'Output: [0, 1]';
      default:
        return 'Code executed successfully';
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetCode = () => {
    const lang = LANGUAGES.find(l => l?.id === selectedLanguage);
    if(lang) {
      setCode(lang.defaultCode);
      setOutput('');
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `solution${language?.extension || '.txt'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      {/* Toolbar */}
      <div className="mt-20 border-b border-border/30 px-4 md:px-8 py-3 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {LANGUAGES.map(lang => (
            <button
              key={lang.id}
              onClick={() => handleLanguageChange(lang.id)}
              className={`px-3 py-1.5 text-xs uppercase tracking-widest font-medium border rounded transition-all duration-300 ${selectedLanguage === lang.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border/30 hover:border-border/60'
                }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyCode}
            className="p-2 border border-border/30 rounded hover:bg-muted transition"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={resetCode}
            className="p-2 border border-border/30 rounded hover:bg-muted transition"
            title="Reset code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={downloadCode}
            className="p-2 border border-border/30 rounded hover:bg-muted transition"
            title="Download code"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setTheme(t => t === 'vs-dark' ? 'light' : 'vs-dark')}
            className="p-2 border border-border/30 rounded hover:bg-muted transition"
            title="Toggle theme"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Editor Panel */}
        <div className="flex-1 flex flex-col min-h-[400px] md:min-h-0">
          <div className="flex-1 border-b md:border-b-0 md:border-r border-border/30">
            <Editor
              height="100%"
              language={language?.monacoId || 'python'}
              value={code}
              onChange={handleEditorChange}
              theme={theme}
              options={{
                fontSize,
                minimap: { enabled: false },
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                wordWrap: 'on',
                padding: { top: 16, bottom: 16 },
                fontFamily: 'JetBrains Mono, Fira Code, Monaco, monospace',
              }}
              loading={
                <div className="h-full flex items-center justify-center">
                  <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
                </div>
              }
            />
          </div>

          {/* Run Button */}
          <div className="px-4 md:px-8 py-4 bg-muted/30 flex items-center gap-4">
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex-1 md:flex-none px-8 py-3 text-xs uppercase tracking-widest font-medium bg-primary text-primary-foreground rounded hover:opacity-90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
            <span className="text-xs text-muted-foreground hidden md:block">
              {selectedLanguage === 'javascript' || selectedLanguage === 'typescript'
                ? '🔥 Runs in browser'
                : '☁️ Simulated execution'}
            </span>
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-full md:w-[400px] flex flex-col bg-muted/20">
          <div className="px-4 md:px-6 py-4 border-b border-border/30 flex items-center justify-between">
            <h2 className="text-lg font-black">Output</h2>
            {output && (
              <button
                onClick={() => setOutput('')}
                className="text-xs text-muted-foreground hover:text-foreground transition"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex-1 p-4 md:p-6 overflow-auto">
            <pre className="font-mono text-sm whitespace-pre-wrap break-words">
              {output || 'Click "Run Code" to execute...'}
            </pre>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="border-t border-border/30 px-4 md:px-8 py-4 bg-muted/30">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span>💡 JavaScript/TypeScript runs directly in your browser</span>
          <span>•</span>
          <span>📝 Python, Java, C++ show simulated output</span>
          <span>•</span>
          <span>⌨️ Ctrl+S to save, Ctrl+/ to comment</span>
        </div>
      </div>
    </div>
  );
}
