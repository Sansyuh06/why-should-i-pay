'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LoadingState, ErrorState, NoResultsState } from '@/components/error-states';

export default function ProblemsPage() {
  const [dsaTopics, setDsaTopics] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { dsaTopics: topics } = await import('@/lib/courseContent');
        
        if (!topics || !Array.isArray(topics) || topics.length === 0) {
          setError('No problems available. The content database may be empty.');
          console.error('[v0] Topics data is empty or invalid');
          return;
        }

        const hasProblems = topics.some(topic => topic?.problems && Array.isArray(topic.problems) && topic.problems.length > 0);
        if (!hasProblems) {
          setError('No problems found in the database.');
          console.error('[v0] No problems found in any topic');
          return;
        }
        
        setDsaTopics(topics || []);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load problems';
        console.error('[v0] Error loading problems:', error);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Get all problems from all topics with safety checks
  const allProblems = (dsaTopics || []).flatMap(topic => {
    if (!topic?.problems || !Array.isArray(topic.problems)) return [];
    return topic.problems.map(problem => ({
      ...problem,
      topicId: topic.id,
      topicTitle: topic.title
    }));
  });

  let filteredProblems = allProblems;
  if (selectedDifficulty) {
    filteredProblems = filteredProblems.filter(p => p?.difficulty === selectedDifficulty);
  }
  if (selectedTopic) {
    filteredProblems = filteredProblems.filter(p => p?.topicId === selectedTopic);
  }

  if (isLoading) {
    return <LoadingState message="Loading problems..." />;
  }

  if (error) {
    return <ErrorState 
      title="Failed to Load Problems"
      description={error}
      action="/problems"
      actionLabel="Retry"
    />;
  }

  if (!dsaTopics || dsaTopics.length === 0) {
    return <ErrorState 
      title="No Problems Available"
      description="The problems database is currently unavailable."
      action="/"
      actionLabel="Return Home"
    />;
  }

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

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-12">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8">
            Practice Problems
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            1000+ carefully curated problems with solutions in multiple programming languages. Learn by solving.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-8 md:px-12 py-16 md:py-20 border-b border-border/30 space-y-8">
        <div>
          <h3 className="text-lg md:text-xl font-black mb-4">Filter by Difficulty</h3>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${
                selectedDifficulty === null
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border/30 hover:border-border/60'
              }`}
            >
              All Levels
            </button>
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${
                  selectedDifficulty === level
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border/30 hover:border-border/60'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-black mb-4">Filter by Topic</h3>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <button
              onClick={() => setSelectedTopic(null)}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${
                selectedTopic === null
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border/30 hover:border-border/60'
              }`}
            >
              All Topics
            </button>
            {(dsaTopics || []).map((topic) => (
              <button
                key={topic?.id}
                onClick={() => setSelectedTopic(topic?.id)}
                className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${
                  selectedTopic === topic?.id
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border/30 hover:border-border/60'
                }`}
              >
                {topic?.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section className="px-8 md:px-12 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-black mb-8">Problems ({filteredProblems.length})</h2>

        {filteredProblems.length > 0 ? (
          <div className="space-y-4 md:space-y-6">
            {filteredProblems.map((problem) => (
              <Link key={`${problem.topicId}-${problem.id}`} href={`/problems/${problem.topicId}/${problem.id}`}>
                <div className="border border-border/30 p-6 md:p-8 hover:border-border/60 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-black mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {problem.title || 'Untitled Problem'}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">{problem.description || 'No description available'}</p>
                    </div>
                    <div className="flex gap-2 md:gap-3 flex-wrap flex-shrink-0 justify-end">
                      <span className={`px-3 md:px-4 py-1 md:py-2 text-xs font-bold rounded-full whitespace-nowrap ${
                        problem.difficulty === 'Easy'
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                          : problem.difficulty === 'Medium'
                          ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                          : 'bg-red-500/10 text-red-600 dark:text-red-400'
                      }`}>
                        {problem.difficulty || 'Unrated'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
                    <span className="border-l border-border/30 pl-4">Topic: {problem.topicTitle || 'Unknown'}</span>
                    {problem.complexity && (
                      <span className="border-l border-border/30 pl-4">Time: {problem.complexity.time || 'N/A'} | Space: {problem.complexity.space || 'N/A'}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 md:py-24 px-8 text-center border border-border/30 rounded-lg">
            <div className="space-y-4 max-w-md mx-auto">
              <h3 className="text-xl md:text-2xl font-black">No Problems Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or select different difficulty levels to see more problems.
              </p>
              <button
                onClick={() => {
                  setSelectedDifficulty(null);
                  setSelectedTopic(null);
                }}
                className="text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition duration-300 mt-4"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Stats */}
      <section className="px-8 md:px-12 py-16 md:py-20 border-t border-border/30">
        <div className="grid grid-cols-3 gap-6 md:gap-12">
          <div>
            <div className="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-accent">{allProblems.length}+</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Total Problems</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-accent">3+</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Languages</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-accent">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Free & Offline</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 md:py-16 px-8 md:px-12 mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-xs md:text-sm text-muted-foreground">
          <p>© 2025 Why Should I Pay. Free. Forever.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
