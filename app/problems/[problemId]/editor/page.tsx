'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { sampleProblems } from '@/lib/data';
import { ProblemNotFoundState } from '@/components/error-states';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Copy, Check, ChevronRight } from 'lucide-react';

const codeTemplates: Record<string, string> = {
  javascript: `function solve(input) {
  // Write your solution here
  
  return output;
}`,
  python: `def solve(input):
    # Write your solution here
    
    return output`,
  java: `public class Solution {
    public void solve() {
        // Write your solution here
    }
}`,
  cpp: `#include <iostream>
using namespace std;

int main() {
    // Write your solution here
    
    return 0;
}`,
  csharp: `public class Solution {
    public void Solve() {
        // Write your solution here
    }
}`
};

export default function CodeEditorPage({ params }: { params: Promise<{ problemId: string }> }) {
  const { problemId } = use(params);
  const problem = sampleProblems.find(p => p.id === problemId);
  const [language, setLanguage] = useState<string>('javascript');
  const [code, setCode] = useState(codeTemplates.javascript);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitted' | 'accepted'>('idle');
  const [copied, setCopied] = useState(false);

  if(!problem) {
    // Get other problems as suggestions
    const suggestedProblems = sampleProblems
      .filter(p => p.id !== problemId)
      .slice(0, 3);

    return <ProblemNotFoundState problemId={problemId} suggestedProblems={suggestedProblems} />;
  }

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    setCode(codeTemplates[newLang as keyof typeof codeTemplates] || '');
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setOutput(`Execution output:\n✓ Compiled successfully\n→ All test cases passed!\n\nExecution time: 45ms\nMemory used: 12.3 MB`);
      setStatus('accepted');
      setIsRunning(false);
    }, 1500);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    setTimeout(() => {
      setStatus('submitted');
      setOutput('✅ Accepted! Your solution is correct.\n\nExecution time: 45ms (beats 95% of submissions)\nMemory: 12.3MB (beats 87% of submissions)');
      setIsRunning(false);
    }, 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="border-b border-border py-6 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <Link href="/problems" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Problems
          </Link>
          <h1 className="text-3xl font-bold">{problem.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Problem Details */}
          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
            {/* Problem Info */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`font-bold px-3 py-1 rounded text-sm ${problem.difficulty === 'easy'
                  ? 'bg-green-500/10 text-green-500'
                  : problem.difficulty === 'medium'
                    ? 'bg-yellow-500/10 text-yellow-500'
                    : 'bg-red-500/10 text-red-500'
                  }`}>
                  {problem.difficulty}
                </span>
                <span className="text-sm text-muted-foreground">{problem.acceptance}% acceptance</span>
              </div>

              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {problem.description}
              </p>

              <h4 className="font-bold mb-3">Constraints:</h4>
              <ul className="space-y-1 mb-6 text-sm text-muted-foreground">
                {problem.constraints.map((constraint, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {constraint}
                  </li>
                ))}
              </ul>

              <h4 className="font-bold mb-3">Examples:</h4>
              {problem.examples.map((example, i) => (
                <div key={i} className="p-3 bg-muted rounded mb-3 text-sm">
                  <p className="font-mono text-xs mb-2"><span className="font-bold">Input:</span> {example.input}</p>
                  <p className="font-mono text-xs mb-2"><span className="font-bold">Output:</span> {example.output}</p>
                  <p className="text-muted-foreground"><span className="font-bold text-foreground">Explanation:</span> {example.explanation}</p>
                </div>
              ))}
            </Card>

            {/* Topics */}
            <Card className="p-6">
              <h4 className="font-bold mb-3">Related Topics</h4>
              <div className="flex flex-wrap gap-2">
                {problem.category.map(cat => (
                  <span key={cat} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Right - Code Editor */}
          <div className="space-y-4">
            {/* Language Selector */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Select Language</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(codeTemplates).map(lang => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`py-2 px-3 rounded text-sm font-medium transition ${language === lang
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                      }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </Card>

            {/* Code Editor */}
            <Card className="p-4 flex flex-col h-96">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold">Code</span>
                <button
                  onClick={handleCopyCode}
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 p-4 bg-muted rounded font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your code here..."
              />
            </Card>

            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                className="flex-1 bg-transparent"
                variant="outline"
                onClick={handleRunCode}
                disabled={isRunning}
              >
                <Play className="w-4 h-4 mr-2" />
                {isRunning ? 'Running...' : 'Run Code'}
              </Button>
              <Button
                className="flex-1"
                onClick={handleSubmit}
                disabled={isRunning}
              >
                Submit Solution
              </Button>
            </div>

            {/* Output */}
            <Card className="p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">Output</h4>
                {status === 'accepted' && (
                  <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold">
                    ✓ Accepted
                  </span>
                )}
                {status === 'submitted' && (
                  <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold">
                    Submitted
                  </span>
                )}
              </div>
              <pre className="bg-muted p-3 rounded text-sm overflow-auto text-muted-foreground font-mono whitespace-pre-wrap break-words">
                {output || 'Output will appear here after running your code'}
              </pre>
            </Card>

            {/* Hints */}
            <Card className="p-4">
              <h4 className="font-bold mb-2">💡 Hints</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>1.</span>
                  <span>Think about what data structure would be most efficient</span>
                </li>
                <li className="flex gap-2">
                  <span>2.</span>
                  <span>Consider edge cases like empty input or single element</span>
                </li>
                <li className="flex gap-2">
                  <span>3.</span>
                  <span>Check your solution against the provided examples</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
