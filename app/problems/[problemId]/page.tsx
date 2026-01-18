'use client';

import Link from 'next/link';
import { sampleProblems } from '@/lib/data';
import { ProblemNotFoundState } from '@/components/error-states';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, MessageCircle, Share2, BookmarkIcon } from 'lucide-react';

export default function ProblemPage({ params }: { params: { problemId: string } }) {
  const problem = sampleProblems.find(p => p.id === params.problemId);

  if (!problem) {
    // Get other problems as suggestions
    const suggestedProblems = sampleProblems
      .filter(p => p.id !== params.problemId)
      .slice(0, 3);

    return <ProblemNotFoundState problemId={params.problemId} suggestedProblems={suggestedProblems} />;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="border-b border-border py-6 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <Link href="/problems" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Problems
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{problem.title}</h1>
              <div className="flex items-center gap-4 flex-wrap">
                <span className={`font-bold px-3 py-1 rounded text-sm ${
                  problem.difficulty === 'easy'
                    ? 'bg-green-500/10 text-green-500'
                    : problem.difficulty === 'medium'
                      ? 'bg-yellow-500/10 text-yellow-500'
                      : 'bg-red-500/10 text-red-500'
                }`}>
                  {problem.difficulty.toUpperCase()}
                </span>
                <span className="text-sm text-muted-foreground">{problem.acceptance}% acceptance rate</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {problem.likes} likes
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <BookmarkIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="solutions">Solutions</TabsTrigger>
            <TabsTrigger value="discuss">Discuss ({problem.likes})</TabsTrigger>
          </TabsList>

          {/* Description Tab */}
          <TabsContent value="description" className="mt-6 space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Problem Description</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {problem.description}
              </p>

              <h3 className="text-xl font-bold mb-3">Constraints</h3>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {problem.constraints.map((constraint, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {constraint}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">Examples</h3>
              <div className="space-y-4">
                {problem.examples.map((example, i) => (
                  <div key={i} className="border border-border rounded-lg p-4 bg-muted/50">
                    <div className="mb-3">
                      <p className="font-bold text-sm mb-1">Example {i + 1}:</p>
                      <div className="font-mono text-sm bg-background rounded p-2">
                        <p className="mb-2"><span className="text-primary">Input:</span> {example.input}</p>
                        <p><span className="text-primary">Output:</span> {example.output}</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="font-bold mb-1">Explanation:</p>
                      <p className="text-muted-foreground">{example.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Solve Button */}
            <Link href={`/problems/${problem.id}/editor`}>
              <Button className="w-full" size="lg">
                → Solve in Code Editor
              </Button>
            </Link>
          </TabsContent>

          {/* Solutions Tab */}
          <TabsContent value="solutions" className="mt-6 space-y-4">
            {problem.solutions.map(solution => (
              <Card key={solution.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{solution.language.toUpperCase()}</h3>
                    <p className="text-sm text-muted-foreground">Time: {solution.complexity.time} | Space: {solution.complexity.space}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{solution.votes} upvotes</p>
                  </div>
                </div>

                <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm font-mono">{solution.code}</code>
                </pre>

                <div>
                  <h4 className="font-bold mb-2">Explanation</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.explanation}
                  </p>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Discuss Tab */}
          <TabsContent value="discuss" className="mt-6">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">💬 Community Discussions</h3>
              <p className="text-muted-foreground mb-4">
                Join {problem.likes} people discussing this problem
              </p>
              <Button variant="outline">View Discussions</Button>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Problems */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Problems</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {sampleProblems.slice(0, 2).map(p => (
              <Link key={p.id} href={`/problems/${p.id}`}>
                <Card className="p-4 hover:shadow-lg hover:border-primary transition cursor-pointer">
                  <h3 className="font-bold hover:text-primary transition">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.description.substring(0, 80)}...</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      p.difficulty === 'easy'
                        ? 'bg-green-500/10 text-green-500'
                        : p.difficulty === 'medium'
                          ? 'bg-yellow-500/10 text-yellow-500'
                          : 'bg-red-500/10 text-red-500'
                    }`}>
                      {p.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{p.acceptance}% accept rate</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
