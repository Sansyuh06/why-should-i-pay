'use client';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from 'next/link';
import { learningPaths, dsaTopics } from '@/lib/courseContent';
import { useState } from 'react';
import { CheckCircle2, Circle, ChevronRight } from 'lucide-react';

export default function RoadmapsPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const path = selectedPath ? learningPaths.find(p => p.id === selectedPath) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
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

      {!selectedPath && (
        <div>
          {/* Hero Section */}
          <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-12">
            <div className="max-w-5xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8">
                Learning Roadmaps
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Choose a structured learning path tailored to your goals. Each path includes daily schedules, milestones, and all necessary resources.
              </p>
            </div>
          </section>

          {/* Roadmaps Grid */}
          <section className="px-8 md:px-12 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {learningPaths.map((roadmap) => (
                <Card key={roadmap.id} className="p-8 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">🗺️</span>
                        <div>
                          <h2 className="text-3xl font-bold">{roadmap.name}</h2>
                          <p className="text-sm text-muted-foreground">{roadmap.description}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-bold whitespace-nowrap ml-4 ${
                      roadmap.difficulty === 'beginner' ? 'bg-green-500/10 text-green-500' :
                      roadmap.difficulty === 'intermediate' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {roadmap.difficulty}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-6 mb-8 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-bold text-lg">{roadmap.duration} weeks</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Topics</p>
                      <p className="font-bold text-lg">{roadmap.topics.length} topics</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Progress</p>
                      <p className="font-bold text-lg">{roadmap.progression}% completed</p>
                    </div>
                  </div>

                  {/* Goals */}
                  <div className="mb-8">
                    <h3 className="font-bold mb-3">Learning Goals</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {roadmap.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">Progress</span>
                      <span className="text-sm text-muted-foreground">{roadmap.progression}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all"
                        style={{ width: `${roadmap.progression}%` }}
                      />
                    </div>
                  </div>

                  {/* Topics Timeline */}
                  <div className="mb-8">
                    <h3 className="font-bold mb-4">Topics to Master</h3>
                    <div className="space-y-3">
                      {roadmap.topics.map((topic, i) => (
                        <Link key={topic.id} href={`/learn/${topic.id}`}>
                          <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted hover:border-primary transition cursor-pointer group">
                            <div className="flex-shrink-0">
                              {i < Math.floor(roadmap.topics.length * roadmap.progression / 100) ? (
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                              ) : i === Math.floor(roadmap.topics.length * roadmap.progression / 100) ? (
                                <Circle className="w-6 h-6 text-primary border-2 border-primary" />
                              ) : (
                                <Circle className="w-6 h-6 border-2 border-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium">{topic.name}</p>
                              <p className="text-sm text-muted-foreground">{topic.description}</p>
                              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                <span>📚 {topic.subtopics.length} sections</span>
                                <span>⏱️ {Math.round(topic.estimatedTime / 60)}h</span>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Button className="flex-1" asChild>
                      <Link href={`/learn/${roadmap.topics[0]?.id || '#'}`}>
                        {roadmap.progression > 0 ? 'Continue Learning' : 'Start Learning'}
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Share Roadmap
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Custom Roadmap CTA */}
          <Card className="p-8 mt-12 text-center border-dashed border-2">
            <h3 className="text-2xl font-bold mb-2">Create Custom Roadmap</h3>
            <p className="text-muted-foreground mb-4">
              Build your own personalized learning path based on your goals
            </p>
            <Button>Create Custom Path →</Button>
          </Card>
        </div>
      )}
    </div>
  );
}
