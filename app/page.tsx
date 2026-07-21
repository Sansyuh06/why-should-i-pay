'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/navigation';
import { Code, Building2, Compass, Brain, Terminal, BookOpen, Map, FileQuestion, Library, ArrowRight } from 'lucide-react';

const sections = [
    {
        href: '/problems',
        title: 'DSA Problems',
        description: '320+ problems with real code execution',
        icon: Code,
        accent: true,
    },
    {
        href: '/companies',
        title: 'Company Prep',
        description: '187 companies, sorted by frequency',
        icon: Building2,
        accent: false,
    },
    {
        href: '/guides',
        title: 'Placement Guides',
        description: '17 in-depth guides for every stage',
        icon: Compass,
        accent: false,
    },
    {
        href: '/interview-prep',
        title: 'Interview Prep',
        description: 'Flashcards & practice for HR rounds',
        icon: Brain,
        accent: true,
    },
    {
        href: '/ide',
        title: 'Code Editor',
        description: 'Monaco-powered IDE with execution',
        icon: Terminal,
        accent: false,
    },
    {
        href: '/learn',
        title: 'Learn Topics',
        description: 'Structured courses & video content',
        icon: BookOpen,
        accent: false,
    },
    {
        href: '/roadmaps',
        title: 'Roadmaps',
        description: 'Step-by-step learning paths',
        icon: Map,
        accent: false,
    },
    {
        href: '/quizzes',
        title: 'Quizzes',
        description: 'Test your knowledge interactively',
        icon: FileQuestion,
        accent: false,
    },
    {
        href: '/resources',
        title: 'Resources',
        description: 'PDFs, notes, videos & more',
        icon: Library,
        accent: false,
    },
];

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero */}
            <section className="min-h-[80vh] flex items-center px-8 md:px-16">
                <div className={`max-w-4xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs uppercase tracking-widest text-accent font-bold">Placement Preparation Hub</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-8">
                        Why Should<br /><span className="text-accent">I Pay</span>
                    </h1>
                    <p className="text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                        Your one-stop platform for placement preparation. Real code editor, 320+ DSA problems, company-wise questions, guides, interview prep — all free.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/problems" className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded hover:bg-accent/90 transition flex items-center gap-2">
                            Start Solving <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/companies" className="px-6 py-3 border border-border hover:border-accent/50 font-medium rounded transition flex items-center gap-2">
                            Company Prep <Building2 className="w-4 h-4" />
                        </Link>
                        <Link href="/guides" className="px-6 py-3 border border-border hover:border-accent/50 font-medium rounded transition flex items-center gap-2">
                            Read Guides <Compass className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-16 px-8 md:px-16 border-t border-border/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2">Everything You Need</h2>
                    <p className="text-muted-foreground mb-10">All resources in one place. No subscriptions. No redirects.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <Link
                                    key={section.href}
                                    href={section.href}
                                    className={`group p-6 border rounded-lg transition-all hover:-translate-y-1 ${section.accent
                                        ? 'border-accent/30 bg-accent/5 hover:border-accent hover:bg-accent/10'
                                        : 'border-border/20 hover:border-border/50 hover:bg-card/50'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <Icon className={`w-6 h-6 ${section.accent ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'} transition`} />
                                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="font-bold mb-1 group-hover:text-accent transition">{section.title}</h3>
                                    <p className="text-sm text-muted-foreground">{section.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-8 md:px-16 border-t border-border/20">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: '320+', label: 'DSA Problems' },
                        { value: '187', label: 'Companies' },
                        { value: '17', label: 'Guides' },
                        { value: '5', label: 'Languages' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
