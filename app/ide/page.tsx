'use client';

import Link from 'next/link';
import { useState } from 'react';

const LANGUAGES = [
  { id: 'python', label: 'Python', extension: '.py', defaultCode: 'print("Hello, World!")' },
  { id: 'javascript', label: 'JavaScript', extension: '.js', defaultCode: 'console.log("Hello, World!");' },
  { id: 'java', label: 'Java', extension: '.java', defaultCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}' },
];

export default function IDEPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(LANGUAGES[0]?.defaultCode || 'print("Hello, World!")');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const language = LANGUAGES.find(l => l?.id === selectedLanguage);

  if (!language) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-black">Language Not Found</h1>
          <p className="text-muted-foreground">The selected programming language is not available.</p>
        </div>
      </div>
    );
  }

  const handleLanguageChange = (langId: string) => {
    setSelectedLanguage(langId);
    const lang = LANGUAGES.find(l => l?.id === langId);
    if (lang) {
      setCode(lang.defaultCode);
      setOutput('');
      setError(null);
    } else {
      console.error('[v0] Language not found:', langId);
      setError('Failed to switch language. Please try again.');
    }
  };

  const runCode = async () => {
    setIsRunning(true);
    setError(null);
    setOutput('Executing code...');

    try {
      if (!selectedLanguage) {
        throw new Error('No language selected');
      }

      if (!code || code.trim() === '') {
        setOutput('Error: Code editor is empty. Please write some code.');
        setIsRunning(false);
        return;
      }

      if (selectedLanguage === 'python') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOutput('Note: Code execution requires a backend server.\nThis demo shows the UI layout.\n\nExample output would appear here.');
      } else if (selectedLanguage === 'javascript') {
        try {
          const result = eval(code);
          setOutput(`Output: ${result || '(no output)'}`);
        } catch (e) {
          setOutput(`Error: ${(e as Error)?.message || 'Unknown error occurred'}`);
        }
      } else {
        setOutput('Code execution for this language requires a backend service.');
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error occurred';
      setOutput(`Error: ${errorMsg}`);
      console.error('[v0] Code execution error:', error);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/90 border-b border-border/40">
        <div className="max-w-full mx-auto px-8 md:px-12 py-6 md:py-8 flex items-center justify-between">
          <Link href="/" className="text-xs font-black tracking-widest uppercase hover:opacity-60 transition">Why Should I Pay</Link>
          <div className="flex items-center gap-8 md:gap-16 hidden md:flex">
            <Link href="/learn" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition duration-300">Learn</Link>
            <Link href="/problems" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition duration-300">Problems</Link>
            <Link href="/quizzes" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition duration-300">Quizzes</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 mt-24 md:mt-20 flex flex-col md:flex-row">
        {/* Editor Panel */}
        <div className="flex-1 flex flex-col border-r border-border/30 md:min-h-screen">
          <div className="border-b border-border/30 px-6 md:px-8 py-4 md:py-6">
            <h2 className="text-lg md:text-xl font-black mb-4">Code Editor</h2>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {LANGUAGES.map(lang => (
                <button
                  key={lang.id}
                  onClick={() => handleLanguageChange(lang.id)}
                  className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${
                    selectedLanguage === lang.id
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border/30 hover:border-border/60'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 p-4 md:p-6 overflow-hidden">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full p-4 md:p-6 rounded-lg border border-border/30 bg-muted font-mono text-sm md:text-base resize-none focus:outline-none focus:ring-2 focus:ring-foreground"
              placeholder="Write your code here..."
              spellCheck="false"
            />
          </div>

          {/* Run Button */}
          <div className="border-t border-border/30 px-6 md:px-8 py-4 md:py-6">
            <button
              onClick={runCode}
              disabled={isRunning}
              className="w-full px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground bg-foreground text-background hover:opacity-90 disabled:opacity-50 transition-all duration-300"
            >
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-full md:w-1/3 flex flex-col border-t md:border-t-0 border-border/30">
          <div className="border-b border-border/30 px-6 md:px-8 py-4 md:py-6">
            <h2 className="text-lg md:text-xl font-black">Output</h2>
          </div>

          <div className={`flex-1 p-4 md:p-6 overflow-auto ${error ? 'bg-red-500/5' : ''}`}>
            {error ? (
              <pre className="font-mono text-xs md:text-sm text-red-600 dark:text-red-400 whitespace-pre-wrap break-words">
                {error}
              </pre>
            ) : (
              <pre className="font-mono text-xs md:text-sm text-muted-foreground whitespace-pre-wrap break-words">
                {output || 'Click "Run Code" to execute...'}
              </pre>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="border-t border-border/30 px-8 md:px-12 py-8 md:py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg md:text-xl font-black mb-4">About This IDE</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            This is a simple browser-based code editor. JavaScript code runs directly in your browser for instant feedback. Python, Java, and other languages would require a backend server integration. This demonstrates the offline-first capability of the platform - all code is executed locally without external dependencies.
          </p>
        </div>
      </div>
    </div>
  );
}
