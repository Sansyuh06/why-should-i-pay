'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/navigation';
import { guides, guideCategories } from '@/lib/guides';
import { BookOpen, Search, ArrowRight, Compass } from 'lucide-react';

export default function GuidesPage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filtered = useMemo(() => {
        let list = guides;
        if (activeCategory) {
            list = list.filter(g => g.category === activeCategory);
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter(g =>
                g.title.toLowerCase().includes(q) ||
                g.description.toLowerCase().includes(q) ||
                g.category.toLowerCase().includes(q)
            );
        }
        return list;
    }, [search, activeCategory]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-12 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <Compass className="w-8 h-8 text-accent" />
                        <span className="text-xs uppercase tracking-widest text-accent font-bold">Guides</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Placement Guides
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mb-8">
                        Comprehensive guides covering everything from DSA fundamentals to placement strategy, career development, and technical specializations.
                    </p>

                    {/* Search */}
                    <div className="relative max-w-md mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search guides..."
                            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-2 text-xs rounded-full font-medium transition-all ${!activeCategory
                                ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                                : 'bg-muted text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            All ({guides.length})
                        </button>
                        {guideCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                                className={`px-4 py-2 text-xs rounded-full font-medium transition-all ${activeCategory === cat
                                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                                    : 'bg-muted text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="px-6 md:px-12 pb-16 border-t border-border/20 pt-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filtered.map((guide) => (
                            <Link
                                key={guide.slug}
                                href={`/guides/${guide.slug}`}
                                className="group p-6 border border-border/20 bg-card/30 hover:border-accent/40 hover:bg-card/60 transition-all rounded-lg"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-3xl">{guide.icon}</span>
                                    <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                                        {guide.category}
                                    </span>
                                </div>
                                <h3 className="font-bold mb-2 group-hover:text-accent transition">
                                    {guide.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                    {guide.description}
                                </p>
                                <div className="flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition">
                                    Read Guide <ArrowRight className="w-3 h-3" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="py-20 text-center text-muted-foreground">
                            No guides found matching your criteria.
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
