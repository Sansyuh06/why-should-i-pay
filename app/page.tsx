'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/navigation';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero - Ultra minimal */}
      <section className="min-h-screen flex items-center px-8 md:px-16">
        <div className={`transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Why Should<br /><span className="text-accent">I Pay</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            The internet is free. Stop being lazy and find content yourself. Or just use this.
          </p>
          <Link href="/learn" className="text-lg text-accent hover:underline font-medium">
            Start Learning →
          </Link>
        </div>
      </section>

      {/* Just navigation links */}
      <section className="py-16 px-8 md:px-16 border-t border-border/20">
        <div className="flex flex-wrap gap-8">
          <Link href="/learn" className="text-xl text-muted-foreground hover:text-accent transition-colors">Learn</Link>
          <Link href="/problems" className="text-xl text-muted-foreground hover:text-accent transition-colors">Problems</Link>
          <Link href="/quizzes" className="text-xl text-muted-foreground hover:text-accent transition-colors">Quizzes</Link>
          <Link href="/resources" className="text-xl text-muted-foreground hover:text-accent transition-colors">Resources</Link>
          <Link href="/ide" className="text-xl text-muted-foreground hover:text-accent transition-colors">IDE</Link>
          <Link href="/roadmaps" className="text-xl text-muted-foreground hover:text-accent transition-colors">Roadmaps</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
