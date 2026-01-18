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

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-32 md:pb-48 px-8 md:px-12 overflow-hidden">
        <div className={`space-y-12 md:space-y-16 transform transition-all duration-1200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
            Why Should<br />I Pay
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
            When everything is free. Complete offline coding platform with 1000+ DSA problems, video tutorials, interactive IDE, quizzes, and learning roadmaps. No subscriptions. No redirects. All embedded.
          </p>

          <div className="flex gap-8 md:gap-12 pt-4 md:pt-8">
            <Link href="/learn" className="text-xs md:text-sm uppercase tracking-widest font-medium hover:opacity-60 transition duration-300">
              Start Learning
            </Link>
            <Link href="/problems" className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition duration-300">
              Browse Problems
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border/30 mx-8 md:mx-12"></div>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-8 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          <div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-accent">1000+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Problems</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-accent">50+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Topics</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-accent">20+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Quizzes</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-accent">100%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Offline</div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border/30 mx-8 md:mx-12"></div>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-8 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            Everything You<br />Need
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {[
            {
              num: '01',
              title: 'Complete DSA Curriculum',
              desc: 'Master 50+ topics from Arrays to Dynamic Programming with embedded tutorials, code examples in 3 languages, and 1000+ practice problems'
            },
            {
              num: '02',
              title: 'Interactive Code IDE',
              desc: 'Write and run code in Python, JavaScript, Java, C++, and C# directly in the browser with instant execution feedback'
            },
            {
              num: '03',
              title: 'Assessment System',
              desc: '20+ MCQ quizzes covering DSA fundamentals, advanced patterns, system design concepts with instant scoring and explanations'
            },
            {
              num: '04',
              title: 'Structured Roadmaps',
              desc: '3 personalized learning paths from beginner to advanced interview preparation with daily schedules and progress tracking'
            },
            {
              num: '05',
              title: 'Algorithm Visualizations',
              desc: 'Step-by-step visual demonstrations of sorting, searching, graph, and tree algorithms with interactive controls'
            },
            {
              num: '06',
              title: '100% Offline First',
              desc: 'Download once, learn forever. No internet required. All content embedded. No external dependencies or links.'
            }
          ].map((feature, i) => (
            <div key={i} className="group border-b border-border/30 pb-12 md:pb-16 hover:opacity-70 transition-opacity duration-300">
              <div className="flex gap-6 md:gap-12">
                <div className="min-w-fit md:min-w-12 flex-shrink-0">
                  <span className="text-xs text-muted-foreground font-light tracking-widest">{feature.num}</span>
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black group-hover:translate-x-2 transition-transform duration-300">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border/30 mx-8 md:mx-12"></div>

      {/* Learning Topics */}
      <section className="py-16 md:py-24 px-8 md:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8">
            Master These<br />Topics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { emoji: '📊', title: 'Arrays & Strings', problems: '150+' },
            { emoji: '🔗', title: 'Linked Lists', problems: '80+' },
            { emoji: '🌳', title: 'Trees & BST', problems: '120+' },
            { emoji: '📈', title: 'Graphs', problems: '100+' },
            { emoji: '🎯', title: 'Dynamic Programming', problems: '130+' },
            { emoji: '🔍', title: 'Sorting & Searching', problems: '90+' },
            { emoji: '🏗️', title: 'System Design', problems: '50+' },
            { emoji: '🎓', title: 'OOP Concepts', problems: '60+' },
            { emoji: '💾', title: 'Databases & SQL', problems: '80+' }
          ].map((topic, i) => (
            <Link key={i} href="/learn">
              <div className="border border-border/30 p-6 md:p-8 hover:border-border/60 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{topic.emoji}</div>
                <h3 className="text-base md:text-lg font-black mb-2 group-hover:translate-x-1 transition-transform duration-300">{topic.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{topic.problems} problems</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border/30 mx-8 md:mx-12"></div>

      {/* Why Free Section */}
      <section className="py-16 md:py-24 px-8 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-10">
              Why<br />Free?
            </h2>
            <div className="space-y-6 md:space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>Quality education shouldn't be locked behind paywalls. Everything you learn here is sourced from open resources, documented in open communities, and tested by thousands of developers.</p>
              <p>We aggregate, organize, and embed all content so you never leave the platform. No distractions. No friction. Pure learning.</p>
              <p>Download once. Own the knowledge forever. This platform is yours completely.</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="border border-border/30 p-6 md:p-8">
              <div className="text-3xl md:text-5xl font-black text-accent mb-3 md:mb-4">0</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Subscriptions Required</div>
            </div>
            <div className="border border-border/30 p-6 md:p-8">
              <div className="text-3xl md:text-5xl font-black text-accent mb-3 md:mb-4">0</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">External Links</div>
            </div>
            <div className="border border-border/30 p-6 md:p-8">
              <div className="text-3xl md:text-5xl font-black text-accent mb-3 md:mb-4">1</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">ZIP Download</div>
            </div>
            <div className="border border-border/30 p-6 md:p-8">
              <div className="text-3xl md:text-5xl font-black text-accent mb-3 md:mb-4">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Offline Capable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border/30 mx-8 md:mx-12"></div>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-8 md:px-12">
        <div className="space-y-8 md:space-y-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            Start<br />Learning
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Master coding. Prepare for interviews. Build real projects. Everything offline.
          </p>
          <div className="flex gap-6 md:gap-12 justify-center flex-wrap">
            <Link href="/learn" className="text-xs md:text-sm uppercase tracking-widest font-medium border-b border-foreground pb-2 md:pb-3 hover:opacity-60 transition duration-300">
              Explore Topics
            </Link>
            <Link href="/problems" className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground border-b border-transparent hover:border-foreground transition duration-300 pb-2 md:pb-3">
              Solve Problems
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
