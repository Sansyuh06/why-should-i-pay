'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/navigation';
import { getCompanyList } from '@/lib/parseCompanies';
import { Search, Building2, ArrowRight, TrendingUp } from 'lucide-react';

const companies = getCompanyList();

// Group by "tier" based on known company sizes
const tier1 = ['google', 'amazon', 'meta-facebook', 'microsoft', 'apple'];
const tier2 = ['bloomberg', 'adobe', 'uber', 'goldman-sachs', 'linkedin', 'netflix', 'oracle', 'salesforce'];

function getTier(slug: string): number {
    if (tier1.includes(slug)) return 1;
    if (tier2.includes(slug)) return 2;
    return 3;
}

export default function CompaniesPage() {
    const [search, setSearch] = useState('');

    const filtered = useMemo(() => {
        if (!search.trim()) return companies;
        const q = search.toLowerCase();
        return companies.filter(c => c.name.toLowerCase().includes(q));
    }, [search]);

    const grouped = useMemo(() => {
        return {
            faang: filtered.filter(c => getTier(c.slug) === 1),
            top: filtered.filter(c => getTier(c.slug) === 2),
            others: filtered.filter(c => getTier(c.slug) === 3),
        };
    }, [filtered]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-12 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <Building2 className="w-8 h-8 text-accent" />
                        <span className="text-xs uppercase tracking-widest text-accent font-bold">Company Prep</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Company-Wise Problems
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mb-8">
                        Browse LeetCode problems frequently asked by top tech companies. Data sourced from real interview experiences across 187 companies.
                    </p>

                    {/* Search */}
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search companies..."
                            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="px-6 md:px-12 pb-8">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span><strong className="text-foreground">187</strong> Companies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>•</span>
                        <span><strong className="text-foreground">3000+</strong> Unique Problems</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>•</span>
                        <span>Sorted by <strong className="text-foreground">interview frequency</strong></span>
                    </div>
                </div>
            </section>

            {/* FAANG / Big 5 */}
            {grouped.faang.length > 0 && (
                <section className="px-6 md:px-12 pb-12 border-t border-border/20 pt-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-accent">★</span> FAANG / Big 5
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {grouped.faang.map((company) => (
                                <Link
                                    key={company.slug}
                                    href={`/companies/${company.slug}`}
                                    className="group p-6 border border-border/30 bg-card/50 hover:border-accent/50 hover:bg-card transition-all rounded-lg"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{company.icon}</span>
                                            <div>
                                                <h3 className="font-bold group-hover:text-accent transition">{company.name}</h3>
                                                <p className="text-xs text-muted-foreground">Most asked problems →</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Top Tier */}
            {grouped.top.length > 0 && (
                <section className="px-6 md:px-12 pb-12 border-t border-border/20 pt-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-xl font-bold mb-6">Top Tech Companies</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {grouped.top.map((company) => (
                                <Link
                                    key={company.slug}
                                    href={`/companies/${company.slug}`}
                                    className="group p-4 border border-border/20 hover:border-accent/40 hover:bg-card/80 transition-all rounded-lg flex items-center gap-3"
                                >
                                    <span className="text-xl">{company.icon}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-medium text-sm group-hover:text-accent transition truncate">{company.name}</h3>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Others */}
            {grouped.others.length > 0 && (
                <section className="px-6 md:px-12 pb-16 border-t border-border/20 pt-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-xl font-bold mb-6">More Companies</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                            {grouped.others.map((company) => (
                                <Link
                                    key={company.slug}
                                    href={`/companies/${company.slug}`}
                                    className="group p-3 border border-border/10 hover:border-accent/30 transition-all rounded flex items-center gap-2"
                                >
                                    <span>{company.icon}</span>
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition truncate">{company.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {filtered.length === 0 && (
                <section className="px-6 md:px-12 py-20 text-center">
                    <p className="text-muted-foreground">No companies found matching &quot;{search}&quot;</p>
                </section>
            )}

            <Footer />
        </div>
    );
}
