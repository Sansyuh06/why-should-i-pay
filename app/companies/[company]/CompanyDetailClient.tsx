'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/navigation';
import { CompanyData, CompanyProblem } from '@/lib/parseCompanies';
import { Search, ArrowLeft, ExternalLink, TrendingUp, BarChart3, Filter } from 'lucide-react';

interface Props {
    data: CompanyData | null;
    companies: { slug: string; name: string; icon: string }[];
    slug: string;
}

export function CompanyDetailClient({ data, companies, slug }: Props) {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState<'frequency' | 'name'>('frequency');

    if (!data) {
        return (
            <div className="min-h-screen bg-background text-foreground">
                <Navigation />
                <div className="pt-32 px-6 md:px-12 text-center">
                    <h1 className="text-3xl font-bold mb-4">Company Not Found</h1>
                    <p className="text-muted-foreground mb-8">No data available for this company.</p>
                    <Link href="/companies" className="text-accent hover:underline">
                        ← Back to Companies
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const filtered = useMemo(() => {
        let problems = data.problems;
        if (search.trim()) {
            const q = search.toLowerCase();
            problems = problems.filter(p => p.name.toLowerCase().includes(q));
        }
        if (sortBy === 'name') {
            problems = [...problems].sort((a, b) => a.name.localeCompare(b.name));
        }
        // frequency is default sort (already sorted from server)
        return problems;
    }, [data.problems, search, sortBy]);

    const maxFreq = data.problems.length > 0 ? data.problems[0].frequency : 1;

    // Company icon from list
    const companyInfo = companies.find(c => c.slug === slug);
    const icon = companyInfo?.icon || '🏢';

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Header */}
            <section className="pt-32 pb-8 px-6 md:px-12 border-b border-border/20">
                <div className="max-w-6xl mx-auto">
                    <Link href="/companies" className="text-sm text-muted-foreground hover:text-accent transition mb-6 inline-flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" /> All Companies
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{icon}</span>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">{data.name}</h1>
                            <p className="text-muted-foreground text-sm mt-1">
                                {data.problemCount} problems tracked from interviews
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mt-6">
                        <div className="flex items-center gap-2 text-sm">
                            <BarChart3 className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">Total Problems: <strong className="text-foreground">{data.problemCount}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">Most Asked: <strong className="text-foreground">{maxFreq}x</strong></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Controls */}
            <section className="px-6 md:px-12 py-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search problems..."
                            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-muted-foreground" />
                        <button
                            onClick={() => setSortBy('frequency')}
                            className={`px-3 py-1.5 text-xs rounded transition ${sortBy === 'frequency' ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
                        >
                            By Frequency
                        </button>
                        <button
                            onClick={() => setSortBy('name')}
                            className={`px-3 py-1.5 text-xs rounded transition ${sortBy === 'name' ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
                        >
                            By Name
                        </button>
                    </div>
                </div>
            </section>

            {/* Problem Table */}
            <section className="px-6 md:px-12 pb-16">
                <div className="max-w-6xl mx-auto">
                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr_80px_80px] gap-4 px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground border-b border-border/30 font-bold">
                        <span>Problem</span>
                        <span className="text-center">Freq</span>
                        <span className="text-center">Link</span>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-border/10">
                        {filtered.map((problem, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-[1fr_80px_80px] gap-4 px-4 py-3 hover:bg-card/50 transition group items-center"
                            >
                                <span className="text-sm font-medium group-hover:text-accent transition truncate">
                                    {problem.name}
                                </span>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-accent rounded-full transition-all"
                                            style={{ width: `${Math.min(100, (problem.frequency / maxFreq) * 100)}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-muted-foreground w-6 text-right">{problem.frequency}</span>
                                </div>
                                <div className="text-center">
                                    <a
                                        href={problem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:text-accent/80 transition inline-flex items-center gap-1 text-xs"
                                    >
                                        Solve <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="py-16 text-center text-muted-foreground">
                            No problems found matching your search.
                        </div>
                    )}

                    {/* Showing count */}
                    <div className="mt-6 text-xs text-muted-foreground text-center">
                        Showing {filtered.length} of {data.problemCount} problems
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
