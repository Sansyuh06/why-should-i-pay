'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { sampleProblems } from '@/lib/data';
import { allProblems } from '@/lib/problemCatalog';
import { problemContent } from '@/lib/problemContent';
import { ProblemNotFoundState } from '@/components/error-states';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Copy, Check, ExternalLink, Send, Loader2, RotateCcw, ChevronDown } from 'lucide-react';

// Dynamically import Monaco to avoid SSR issues
const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

// ─── Language Config ────────────────────────────────────────────────
interface LangConfig {
    id: string;
    label: string;
    monacoLang: string;
    pistonLang: string;
    pistonVersion: string;
    template: string;
}

const languages: LangConfig[] = [
    {
        id: 'javascript',
        label: 'JavaScript',
        monacoLang: 'javascript',
        pistonLang: 'javascript',
        pistonVersion: '18.15.0',
        template: `// JavaScript Solution
function solve(input) {
  // Write your solution here

  return output;
}

// Example usage:
console.log(solve([2, 7, 11, 15]));`,
    },
    {
        id: 'python',
        label: 'Python',
        monacoLang: 'python',
        pistonLang: 'python',
        pistonVersion: '3.10.0',
        template: `# Python Solution
def solve(input_data):
    # Write your solution here

    return output

# Example usage:
print(solve([2, 7, 11, 15]))`,
    },
    {
        id: 'java',
        label: 'Java',
        monacoLang: 'java',
        pistonLang: 'java',
        pistonVersion: '15.0.2',
        template: `public class Main {
    public static void main(String[] args) {
        // Write your solution here
        System.out.println("Hello, World!");
    }
}`,
    },
    {
        id: 'cpp',
        label: 'C++',
        monacoLang: 'cpp',
        pistonLang: 'c++',
        pistonVersion: '10.2.0',
        template: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Write your solution here
    cout << "Hello, World!" << endl;
    return 0;
}`,
    },
    {
        id: 'csharp',
        label: 'C#',
        monacoLang: 'csharp',
        pistonLang: 'csharp',
        pistonVersion: '6.12.0',
        template: `using System;

class Program {
    static void Main(string[] args) {
        // Write your solution here
        Console.WriteLine("Hello, World!");
    }
}`,
    },
];

// ─── Local API Execution ───────────────────────────────────────────
async function executeCode(language: string, version: string, code: string, stdin: string = ''): Promise<{ output: string; error: string; exitCode: number }> {
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                language,
                code,
                stdin,
            }),
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || `API returned ${response.status}`);
        }

        const data = await response.json();
        return {
            output: data.output || '',
            error: data.error || '',
            exitCode: data.exitCode ?? 0,
        };
    } catch (err: any) {
        return {
            output: '',
            error: `Execution failed: ${err.message}\n\nTip: Make sure you have the required compiler/runtime (Node, Python, GCC, Java, etc.) installed on your local machine.`,
            exitCode: 1,
        };
    }
}

// ─── Component ──────────────────────────────────────────────────────
export function EditorClient({ problemId }: { problemId: string }) {
    // Data Resolution
    const sampleProblem = sampleProblems.find(p => p.id === problemId);
    const manualContent = problemContent[problemId];
    const catalogProblem = allProblems.find(p => p.id === problemId);

    let problem: any = sampleProblem;
    let hasContent = true;

    if (!problem && manualContent && catalogProblem) {
        problem = { ...catalogProblem, ...manualContent, acceptance: 85 };
    } else if (!problem && catalogProblem) {
        problem = { ...catalogProblem, description: null, examples: [], constraints: [], acceptance: 0 };
        hasContent = false;
    }

    const [langIdx, setLangIdx] = useState(0);
    const [code, setCode] = useState(languages[0].template);
    const [output, setOutput] = useState<string>('');
    const [isRunning, setIsRunning] = useState(false);
    const [executionTime, setExecutionTime] = useState<number | null>(null);
    const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
    const [copied, setCopied] = useState(false);
    const [stdin, setStdin] = useState('');
    const [showStdin, setShowStdin] = useState(false);
    const editorRef = useRef<any>(null);

    if (!problem) {
        const suggestedProblems = allProblems.filter(p => p.id !== problemId).slice(0, 3);
        return <ProblemNotFoundState problemId={problemId} suggestedProblems={suggestedProblems} />;
    }

    const currentLang = languages[langIdx];

    const handleLanguageChange = (idx: number) => {
        setLangIdx(idx);
        setCode(languages[idx].template);
        setOutput('');
        setStatus('idle');
        setExecutionTime(null);
    };

    const handleEditorMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleRunCode = useCallback(async () => {
        setIsRunning(true);
        setStatus('running');
        setOutput('⏳ Compiling and executing...');
        const start = performance.now();

        const result = await executeCode(currentLang.pistonLang, currentLang.pistonVersion, code, stdin);
        const elapsed = Math.round(performance.now() - start);
        setExecutionTime(elapsed);

        if (result.exitCode !== 0 || result.error) {
            setStatus('error');
            setOutput(
                (result.error ? `❌ Error:\n${result.error}\n` : '') +
                (result.output ? `\nOutput:\n${result.output}` : '')
            );
        } else {
            setStatus('success');
            setOutput(
                `✅ Execution successful (${elapsed}ms)\n\n` +
                `Output:\n${result.output || '(no output)'}`
            );
        }

        setIsRunning(false);
    }, [code, currentLang, stdin]);

    const handleSubmit = useCallback(async () => {
        setIsRunning(true);
        setStatus('running');
        setOutput('📤 Submitting solution...');
        const start = performance.now();

        const result = await executeCode(currentLang.pistonLang, currentLang.pistonVersion, code, stdin);
        const elapsed = Math.round(performance.now() - start);
        setExecutionTime(elapsed);

        if (result.exitCode !== 0 || result.error) {
            setStatus('error');
            setOutput(
                `❌ Submission Failed\n\n` +
                (result.error ? `Error:\n${result.error}\n` : '') +
                (result.output ? `Output:\n${result.output}` : '')
            );
        } else {
            setStatus('success');
            setOutput(
                `✅ Accepted!\n\n` +
                `Execution time: ${elapsed}ms\n` +
                `Language: ${currentLang.label}\n\n` +
                `Output:\n${result.output || '(no output)'}`
            );
        }

        setIsRunning(false);
    }, [code, currentLang, stdin]);

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleResetCode = () => {
        setCode(currentLang.template);
        setOutput('');
        setStatus('idle');
        setExecutionTime(null);
    };

    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Header */}
            <div className="border-b border-border py-6 px-4 sm:px-6 lg:px-8 bg-card/50">
                <div className="max-w-7xl mx-auto">
                    <Link href="/problems" className="text-primary hover:underline mb-4 inline-block text-sm">
                        ← Back to Problems
                    </Link>
                    <h1 className="text-3xl font-bold">{problem.title}</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left — Problem Details */}
                    <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
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
                                {problem.acceptance > 0 && (
                                    <span className="text-sm text-muted-foreground">{problem.acceptance}% acceptance</span>
                                )}
                            </div>

                            {hasContent ? (
                                <>
                                    <h3 className="text-xl font-bold mb-4">Description</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-wrap">
                                        {problem.description}
                                    </p>

                                    <h4 className="font-bold mb-3">Constraints:</h4>
                                    <ul className="space-y-1 mb-6 text-sm text-muted-foreground font-mono bg-muted/50 p-3 rounded">
                                        {problem.constraints.map((constraint: string, i: number) => (
                                            <li key={i} className="flex gap-2">
                                                • {constraint}
                                            </li>
                                        ))}
                                    </ul>

                                    <h4 className="font-bold mb-3">Examples:</h4>
                                    {problem.examples.map((example: any, i: number) => (
                                        <div key={i} className="p-3 bg-muted rounded mb-3 text-sm">
                                            <p className="font-mono text-xs mb-2"><span className="font-bold">Input:</span> {example.input}</p>
                                            <p className="font-mono text-xs mb-2"><span className="font-bold">Output:</span> {example.output}</p>
                                            {example.explanation && (
                                                <p className="text-muted-foreground"><span className="font-bold text-foreground">Explanation:</span> {example.explanation}</p>
                                            )}
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="py-6">
                                    <Button size="sm" asChild className="w-full gap-2 mb-6">
                                        <a href={problem.url} target="_blank" rel="noopener noreferrer">
                                            Open Problem Statement <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </Button>

                                    <div className="mt-6">
                                        <h4 className="font-bold text-sm mb-3">Checklist</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex gap-2 items-center">
                                                <span className="w-4 h-4 rounded-full border border-primary flex items-center justify-center text-[10px] text-primary">1</span>
                                                Read requirements externally
                                            </li>
                                            <li className="flex gap-2 items-center">
                                                <span className="w-4 h-4 rounded-full border border-primary flex items-center justify-center text-[10px] text-primary">2</span>
                                                Write solution in this editor
                                            </li>
                                            <li className="flex gap-2 items-center">
                                                <span className="w-4 h-4 rounded-full border border-primary flex items-center justify-center text-[10px] text-primary">3</span>
                                                Run tests & Submit
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </Card>

                        {/* Topics */}
                        <Card className="p-6">
                            <h4 className="font-bold mb-3">Related Topics</h4>
                            <div className="flex flex-wrap gap-2">
                                {problem.tags?.map((cat: string) => (
                                    <span key={cat} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                        {cat}
                                    </span>
                                ))}
                                {problem.category?.map((cat: string) => (
                                    <span key={cat} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Right — Code Editor */}
                    <div className="space-y-4">
                        {/* Language Selector */}
                        <Card className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-sm">Select Language</h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleResetCode}
                                        className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition"
                                        title="Reset code"
                                    >
                                        <RotateCcw className="w-3.5 h-3.5" />
                                        Reset
                                    </button>
                                    <button
                                        onClick={handleCopyCode}
                                        className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition"
                                    >
                                        {copied ? (
                                            <><Check className="w-3.5 h-3.5" /> Copied</>
                                        ) : (
                                            <><Copy className="w-3.5 h-3.5" /> Copy</>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((lang, idx) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => handleLanguageChange(idx)}
                                        className={`py-2 px-4 rounded text-sm font-medium transition-all ${langIdx === idx
                                            ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                                            : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                                            }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Monaco Editor */}
                        <Card className="overflow-hidden border border-border">
                            <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
                                <span className="text-xs font-mono text-muted-foreground">
                                    {currentLang.label} • solution.{currentLang.id === 'python' ? 'py' : currentLang.id === 'cpp' ? 'cpp' : currentLang.id === 'csharp' ? 'cs' : currentLang.id === 'java' ? 'java' : 'js'}
                                </span>
                                {executionTime !== null && (
                                    <span className="text-xs text-muted-foreground">
                                        Last run: {executionTime}ms
                                    </span>
                                )}
                            </div>
                            <Editor
                                height="400px"
                                language={currentLang.monacoLang}
                                value={code}
                                onChange={(val) => setCode(val || '')}
                                onMount={handleEditorMount}
                                theme="vs-dark"
                                options={{
                                    fontSize: 14,
                                    fontFamily: "'Geist Mono', 'Fira Code', 'Consolas', monospace",
                                    minimap: { enabled: false },
                                    scrollBeyondLastLine: false,
                                    padding: { top: 16, bottom: 16 },
                                    lineNumbers: 'on',
                                    renderLineHighlight: 'all',
                                    automaticLayout: true,
                                    tabSize: 4,
                                    wordWrap: 'on',
                                    suggestOnTriggerCharacters: true,
                                    quickSuggestions: true,
                                    bracketPairColorization: { enabled: true },
                                    cursorBlinking: 'smooth',
                                    cursorSmoothCaretAnimation: 'on',
                                    smoothScrolling: true,
                                }}
                            />
                        </Card>

                        {/* Stdin Toggle */}
                        <button
                            onClick={() => setShowStdin(!showStdin)}
                            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition"
                        >
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showStdin ? 'rotate-180' : ''}`} />
                            Custom Input (stdin)
                        </button>
                        {showStdin && (
                            <Card className="p-3">
                                <textarea
                                    value={stdin}
                                    onChange={(e) => setStdin(e.target.value)}
                                    placeholder="Enter custom input here..."
                                    className="w-full h-20 bg-muted rounded p-3 font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                                />
                            </Card>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <Button
                                className="flex-1 bg-transparent border-accent/50 hover:bg-accent/10 hover:border-accent"
                                variant="outline"
                                onClick={handleRunCode}
                                disabled={isRunning}
                            >
                                {isRunning ? (
                                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Running...</>
                                ) : (
                                    <><Play className="w-4 h-4 mr-2" /> Run Code</>
                                )}
                            </Button>
                            <Button
                                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                                onClick={handleSubmit}
                                disabled={isRunning}
                            >
                                {isRunning ? (
                                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
                                ) : (
                                    <><Send className="w-4 h-4 mr-2" /> Submit</>
                                )}
                            </Button>
                        </div>

                        {/* Output */}
                        <Card className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-sm">Output</h4>
                                {status === 'success' && (
                                    <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold">
                                        ✓ Success
                                    </span>
                                )}
                                {status === 'error' && (
                                    <span className="px-2 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold">
                                        ✗ Error
                                    </span>
                                )}
                                {status === 'running' && (
                                    <span className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold flex items-center gap-1">
                                        <Loader2 className="w-3 h-3 animate-spin" /> Running
                                    </span>
                                )}
                            </div>
                            <pre className={`bg-muted p-4 rounded text-sm overflow-auto max-h-64 font-mono whitespace-pre-wrap break-words ${status === 'error' ? 'text-red-400' : status === 'success' ? 'text-green-400' : 'text-muted-foreground'
                                }`}>
                                {output || 'Output will appear here after running your code'}
                            </pre>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
