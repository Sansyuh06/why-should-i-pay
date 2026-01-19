'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Navigation, Footer } from '@/components/navigation';
import { allProblems, getCompanies, problemStats, CatalogProblem } from '@/lib/problemCatalog';
import { allIntegratedProblems, integratedStats, tcsAptitudeQuestions } from '@/lib/integratedCatalog';

export default function ProblemsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const companies = useMemo(() => getCompanies(), []);

  const topics = useMemo(() => {
    const topicSet = new Set<string>();
    allProblems.forEach(p => topicSet.add(p.topic));
    return Array.from(topicSet).sort();
  }, []);

  const filteredProblems = useMemo(() => {
    let filtered = [...allProblems];

    if(selectedDifficulty) {
      filtered = filtered.filter(p => p.difficulty === selectedDifficulty.toLowerCase());
    }
    if(selectedTopic) {
      filtered = filtered.filter(p => p.topic === selectedTopic);
    }
    if(selectedCompany) {
      filtered = filtered.filter(p => p.companies.includes(selectedCompany));
    }
    if(searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedDifficulty, selectedTopic, selectedCompany, searchQuery]);

  const clearFilters = () => {
    setSelectedDifficulty(null);
    setSelectedTopic(null);
    setSelectedCompany(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-12">
        <h1 className="text-3xl font-bold mb-2">Problems</h1>
        <p className="text-muted-foreground text-sm">
          {problemStats.total + integratedStats.totalProblems}+ problems. No fluff.
        </p>
      </section>

      {/* Search */}
      <section className="px-8 md:px-12 pb-8">
        <input
          type="text"
          placeholder="Search problems by name or tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-xl px-4 py-3 bg-muted border border-border/30 rounded-lg focus:outline-none focus:border-primary transition-colors"
        />
      </section>

      {/* Filters */}
      <section className="px-8 md:px-12 py-8 border-b border-border/30 space-y-8">
        {/* Difficulty Filter */}
        <div>
          <h3 className="text-lg md:text-xl font-black mb-4">Filter by Difficulty</h3>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedDifficulty === null
                ? 'border-foreground bg-foreground text-background'
                : 'border-border/30 hover:border-border/60'
                }`}
            >
              All ({problemStats.total})
            </button>
            <button
              onClick={() => setSelectedDifficulty('easy')}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedDifficulty === 'easy'
                ? 'border-green-500 bg-green-500/10 text-green-500'
                : 'border-border/30 hover:border-green-500/50 text-green-500'
                }`}
            >
              Easy ({problemStats.byDifficulty.easy})
            </button>
            <button
              onClick={() => setSelectedDifficulty('medium')}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedDifficulty === 'medium'
                ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
                : 'border-border/30 hover:border-yellow-500/50 text-yellow-500'
                }`}
            >
              Medium ({problemStats.byDifficulty.medium})
            </button>
            <button
              onClick={() => setSelectedDifficulty('hard')}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedDifficulty === 'hard'
                ? 'border-red-500 bg-red-500/10 text-red-500'
                : 'border-border/30 hover:border-red-500/50 text-red-500'
                }`}
            >
              Hard ({problemStats.byDifficulty.hard})
            </button>
          </div>
        </div>

        {/* Topic Filter */}
        <div>
          <h3 className="text-lg md:text-xl font-black mb-4">Filter by Topic</h3>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <button
              onClick={() => setSelectedTopic(null)}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedTopic === null
                ? 'border-foreground bg-foreground text-background'
                : 'border-border/30 hover:border-border/60'
                }`}
            >
              All Topics
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedTopic === topic
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border/30 hover:border-border/60'
                  }`}
              >
                {topic.replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Company Filter */}
        <div>
          <h3 className="text-lg md:text-xl font-black mb-4">Filter by Company</h3>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <button
              onClick={() => setSelectedCompany(null)}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedCompany === null
                ? 'border-foreground bg-foreground text-background'
                : 'border-border/30 hover:border-border/60'
                }`}
            >
              All Companies
            </button>
            {companies.slice(0, 10).map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest font-medium border transition-all duration-300 ${selectedCompany === company
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border/30 hover:border-primary/50'
                  }`}
              >
                {company}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section className="px-8 md:px-12 py-16 md:py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black">Problems ({filteredProblems.length})</h2>
          {(selectedDifficulty || selectedTopic || selectedCompany || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-xs md:text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition"
            >
              Clear Filters
            </button>
          )}
        </div>

        {filteredProblems.length > 0 ? (
          <div className="space-y-4 md:space-y-6">
            {filteredProblems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        ) : (
          <div className="py-16 md:py-24 px-8 text-center border border-border/30 rounded-lg">
            <div className="space-y-4 max-w-md mx-auto">
              <h3 className="text-xl md:text-2xl font-black">No Problems Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search to find problems.
              </p>
              <button
                onClick={clearFilters}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div>
            <div className="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-accent">{problemStats.total}+</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Total Problems</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-accent">{companies.length}</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Companies</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-accent">{topics.length}</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Topics</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-accent">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Free</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProblemCard({ problem }: { problem: CatalogProblem }) {
  return (
    <Link
      href={`/problems/${problem.id}`}
      className="block border border-border/30 p-6 md:p-8 hover:border-border/60 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-black mb-2 group-hover:translate-x-2 group-hover:text-primary transition-all duration-300">
            {problem.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {problem.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-muted rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 md:gap-3 flex-wrap flex-shrink-0 justify-end">
          <span className={`px-3 md:px-4 py-1 md:py-2 text-xs font-bold rounded-full whitespace-nowrap ${problem.difficulty === 'easy'
            ? 'bg-green-500/10 text-green-600 dark:text-green-400'
            : problem.difficulty === 'medium'
              ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
              : 'bg-red-500/10 text-red-600 dark:text-red-400'
            }`}>
            {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground flex-wrap">
        <span>Pattern: {problem.pattern.replace(/-/g, ' ')}</span>
        <span className="border-l border-border/30 pl-4">
          Companies: {problem.companies.slice(0, 3).join(', ')}
          {problem.companies.length > 3 && ` +${problem.companies.length - 3}`}
        </span>
      </div>
    </Link>
  );
}
