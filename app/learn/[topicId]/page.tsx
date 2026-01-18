'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { dsaTopics, sampleProblems } from '@/lib/data';
import { TopicNotFoundState } from '@/components/error-states';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Code2, Video, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export default function TopicDetailPage({ params }: { params: { topicId: string } }) {
  const [allTopics, setAllTopics] = useState<any[]>([]);
  const topic = dsaTopics.find(t => t.id === params.topicId);
  const [activeSubtopic, setActiveSubtopic] = useState(0);

  useEffect(() => {
    // Load all topics for suggestions
    setAllTopics(dsaTopics);
  }, []);

  if (!topic) {
    // Get other topics as suggestions, excluding similar IDs
    const suggestedTopics = dsaTopics
      .filter(t => t.id !== params.topicId)
      .slice(0, 4);

    return <TopicNotFoundState topicId={params.topicId} suggestedTopics={suggestedTopics} />;
  }

  const subtopic = topic.subtopics?.[activeSubtopic];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'article':
        return <FileText className="w-4 h-4" />;
      case 'visualization':
        return <Code2 className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  // Safe access to subtopic with fallback
  if (!subtopic) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
        <div className="text-center space-y-6 max-w-md">
          <div>
            <h1 className="text-3xl md:text-4xl font-black mb-3">Section Not Available</h1>
            <p className="text-muted-foreground leading-relaxed">
              This section is currently unavailable. Please try another section or explore other topics.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/learn" 
              className="text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition duration-300"
            >
              Browse Topics
            </Link>
            <Link 
              href="/" 
              className="text-xs md:text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition duration-300"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="border-b border-border py-8 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <Link href="/learn" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Learning
          </Link>
          <h1 className="text-4xl font-bold mb-2">{topic.name}</h1>
          <p className="text-lg text-muted-foreground">{topic.description}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold">
              {topic.difficulty}
            </span>
            <span>📚 {topic.subtopics.length} sections</span>
            <span>⏱️ ~{Math.round(topic.estimatedTime / 60)}h</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Sections */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-bold mb-4">Sections</h3>
              <div className="space-y-2">
                {topic.subtopics.map((sub, idx) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubtopic(idx)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeSubtopic === idx
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {sub.completed ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                      )}
                      <span className="font-medium text-sm">{sub.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {subtopic && (
              <div className="space-y-8">
                {/* Content */}
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6">{subtopic.name}</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                      {subtopic.content}
                    </p>
                  </div>
                </Card>

                {/* Resources */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">📚 Resources</h3>
                  <div className="space-y-4">
                    {subtopic.resources.map(resource => (
                      <Card key={resource.id} className="p-4 hover:shadow-lg transition">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                                {getResourceIcon(resource.type)}
                              </div>
                              <div>
                                <h4 className="font-bold">{resource.title}</h4>
                                <p className="text-sm text-muted-foreground">{resource.source}</p>
                              </div>
                            </div>
                            {resource.content && (
                              <p className="text-sm text-muted-foreground mt-2">{resource.content}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            {resource.duration && (
                              <span className="text-xs bg-muted px-2 py-1 rounded">
                                {resource.duration}m
                              </span>
                            )}
                            <Button variant="ghost" size="sm" asChild>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                Open →
                              </a>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Practice Problems */}
                {sampleProblems.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">💪 Practice Problems</h3>
                    <div className="space-y-4">
                      {sampleProblems.slice(0, 2).map(problem => (
                        <Link key={problem.id} href={`/problems/${problem.id}`}>
                          <Card className="p-4 hover:shadow-lg hover:border-primary transition cursor-pointer">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-bold text-lg hover:text-primary transition">
                                  {problem.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {problem.description.substring(0, 100)}...
                                </p>
                                <div className="flex items-center gap-2 mt-3 flex-wrap">
                                  <span
                                    className={`px-2 py-1 text-xs font-bold rounded ${
                                      problem.difficulty === 'easy'
                                        ? 'bg-green-500/10 text-green-500'
                                        : problem.difficulty === 'medium'
                                          ? 'bg-yellow-500/10 text-yellow-500'
                                          : 'bg-red-500/10 text-red-500'
                                    }`}
                                  >
                                    {problem.difficulty}
                                  </span>
                                  {problem.category.map(cat => (
                                    <span
                                      key={cat}
                                      className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground"
                                    >
                                      {cat}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right ml-4">
                                <div className="text-sm font-bold text-primary">
                                  {problem.acceptance}%
                                </div>
                                <div className="text-xs text-muted-foreground">acceptance</div>
                                <ChevronRight className="w-5 h-5 mt-2 text-primary" />
                              </div>
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </div>
                    <Link href="/problems" className="mt-4 inline-block">
                      <Button variant="outline">View All Problems →</Button>
                    </Link>
                  </div>
                )}

                {/* Complete Button */}
                <div className="flex gap-4">
                  {activeSubtopic > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setActiveSubtopic(activeSubtopic - 1)}
                    >
                      ← Previous
                    </Button>
                  )}
                  {activeSubtopic < topic.subtopics.length - 1 && (
                    <Button onClick={() => setActiveSubtopic(activeSubtopic + 1)}>
                      Next →
                    </Button>
                  )}
                  {activeSubtopic === topic.subtopics.length - 1 && (
                    <Button className="flex-1">
                      ✓ Mark Section Complete
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
