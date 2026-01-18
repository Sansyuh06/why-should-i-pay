'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LoadingState, ErrorState, EmptyState } from '@/components/error-states';
import { Navigation, Footer } from '@/components/navigation';
import { gfgTutorials, gfgQuizzes, interactivePlatforms } from '@/lib/learningResources';
import { dsaTopics, sampleProblems, quizzes } from '@/lib/data';
import { allIntegratedProblems } from '@/lib/integratedCatalog';

// Helper to count problems
const getProblemCount = (topicId: string) => {
  const categoryMap: Record<string, string[]> = {
    'arrays': ['Array', 'String', 'Two Pointers', 'Sliding Window', 'Matrix', 'Hashmap', 'Intervals'],
    'linked-lists': ['Linked List'],
    'trees': ['Binary Tree', 'BST', 'Tree'],
    'graphs': ['Graph', 'BFS', 'DFS'],
    'dynamic-programming': ['DP']
  };

  const keywords = categoryMap[topicId] || [];
  if(keywords.length === 0) return 30; // Default high count if unknown

  return allIntegratedProblems.filter(p =>
    keywords.some(k => p.category.includes(k) || p.tags.includes(k))
  ).length;
};

export default function LearnPage() {
  const [dsaTopics, setDsaTopics] = useState<any[]>([]);
  const [learningPaths, setLearningPaths] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { dsaTopics: topics, learningPaths: paths } = await import('@/lib/courseContent');

        if(!topics || !Array.isArray(topics) || topics.length === 0) {
          setError('No learning content available. Please try again later.');
          console.error('[v0] Course topics data is empty or invalid');
          return;
        }

        if(!paths || !Array.isArray(paths)) {
          console.warn('[v0] Learning paths data is invalid');
        }

        setDsaTopics(topics || []);
        setLearningPaths(paths || []);
      } catch(error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load course content';
        console.error('[v0] Error loading course content:', error);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredTopics = selectedDifficulty
    ? dsaTopics.filter(t => t?.difficulty === selectedDifficulty)
    : dsaTopics;

  if(isLoading) {
    return <LoadingState message="Loading learning topics..." />;
  }

  if(error) {
    return <ErrorState
      title="Failed to Load Content"
      description={error}
      action="/learn"
      actionLabel="Retry"
    />;
  }

  if(!dsaTopics || dsaTopics.length === 0) {
    return <EmptyState
      title="No Topics Available"
      description="The learning content is currently unavailable. Please check back soon or download the latest version."
      action="/"
      actionLabel="Return Home"
    />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-12">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8">
            Learn Data Structures<br />& Algorithms
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Master 50+ topics with embedded tutorials, code examples in multiple languages, visualizations, and practice problems.
          </p>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="px-8 md:px-12 py-16 md:py-20 border-b border-border/30">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-2">Recommended Paths</h2>
          <p className="text-sm md:text-base text-muted-foreground">Choose a structured learning path</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {learningPaths.map((path) => (
            <div key={path.id} className="border border-border/30 p-6 md:p-8 hover:border-border/60 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-black mb-3">{path.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4">{path.description}</p>
              <div className="flex flex-col gap-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{path.duration} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Daily Commitment:</span>
                  <span className="font-medium">{path.dailyHours} hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Topics:</span>
                  <span className="font-medium">{path.topics?.length || 0}</span>
                </div>
              </div>
              <button className="w-full mt-6 px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border border-border/30 hover:border-border/60 transition-all duration-300">
                Explore Path
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-8 md:px-12 py-16 md:py-20 border-b border-border/30">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Filter by Difficulty</h2>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedDifficulty === null
                ? 'border-foreground bg-foreground text-background'
                : 'border-border/30 hover:border-border/60'
                }`}
            >
              All Topics
            </button>
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedDifficulty === level
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border/30 hover:border-border/60'
                  }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="px-8 md:px-12 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-black mb-8">Topics ({filteredTopics?.length || 0})</h2>

        <div className="space-y-6 md:space-y-8">
          {(filteredTopics || []).map((topic) => (
            <Link key={topic.id} href={`/learn/${topic.id}`}>
              <div className="border border-border/30 p-6 md:p-8 hover:border-border/60 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {topic.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">{topic.description}</p>
                  </div>
                  <span className={`px-3 md:px-4 py-1 md:py-2 text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0 ${topic.difficulty === 'Beginner'
                    ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                    : topic.difficulty === 'Intermediate'
                      ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                      : 'bg-red-500/10 text-red-600 dark:text-red-400'
                    }`}>
                    {topic.difficulty}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 md:gap-6 mt-6 pt-6 border-t border-border/20">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Estimated Hours</div>
                    <div className="text-lg md:text-xl font-black">{topic.estimatedHours || 0}h</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Subtopics</div>
                    <div className="text-lg md:text-xl font-black">{topic.subtopics?.length || 0}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Problems</div>
                    <div className="text-lg md:text-xl font-black">{getProblemCount(topic.id) || topic.problems?.length || 0}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GFG Tutorials Section */}
      <section className="px-8 md:px-12 py-16 md:py-20 border-t border-border/20">
        <h2 className="text-2xl md:text-3xl font-black mb-2">Quick Guides & Tutorials</h2>
        <p className="text-sm text-muted-foreground mb-8">Curated learning material</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gfgTutorials.map((tutorial) => {
            const isInternal = tutorial.url.startsWith('/');
            const content = (
              <>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-accent uppercase">{tutorial.type}</span>
                  <span className="text-xs text-muted-foreground">{tutorial.source}</span>
                </div>
                <h3 className="font-medium mb-1">{tutorial.title}</h3>
                <p className="text-sm text-muted-foreground">{tutorial.topic}</p>
              </>
            );

            return isInternal ? (
              <Link
                key={tutorial.id}
                href={tutorial.url}
                className="p-4 border border-border/20 hover:border-accent transition-colors block"
              >
                {content}
              </Link>
            ) : (
              <a
                key={tutorial.id}
                href={tutorial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border/20 hover:border-accent transition-colors block"
              >
                {content}
              </a>
            );
          })}
        </div>
      </section>

      {/* Practice Quizzes Section */}
      <section className="px-8 md:px-12 py-16 md:py-20 border-t border-border/20">
        <h2 className="text-2xl md:text-3xl font-black mb-2">Practice Quizzes</h2>
        <p className="text-sm text-muted-foreground mb-8">Test your knowledge with these assessments</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quizzes.map((quiz) => (
            <Link
              key={quiz.id}
              href={`/quizzes?id=${quiz.id}`}
              className="p-4 border border-border/20 hover:border-accent transition-colors block"
            >
              <span className={`text-xs px-2 py-0.5 rounded mb-2 inline-block ${quiz.difficulty === 'beginner' || quiz.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                quiz.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                {quiz.difficulty}
              </span>
              <h3 className="font-medium text-sm">{quiz.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{quiz.questions?.length || 0} Questions</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="px-8 md:px-12 py-16 md:py-20 border-t border-border/20">
        <h2 className="text-2xl md:text-3xl font-black mb-2">Interactive Platforms</h2>
        <p className="text-sm text-muted-foreground mb-8">Learn with visualizations</p>

        <div className="grid md:grid-cols-3 gap-6">
          {interactivePlatforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-border/20 hover:border-accent transition-colors"
            >
              <h3 className="font-bold text-accent mb-2">{platform.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
              <div className="flex flex-wrap gap-2">
                {platform.features.map((f, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-muted/30 rounded">{f}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section >

      <Footer />
    </div >
  );
}
