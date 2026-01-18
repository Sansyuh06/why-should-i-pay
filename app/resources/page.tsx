'use client';

import Link from 'next/link';
import { Navigation, Footer } from '@/components/navigation';
import { youtubeResources, gfgQuizzes, gfgTutorials, interactivePlatforms, resourceStats, stlResources, externalCollections } from '@/lib/learningResources';

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Header */}
            <section className="pt-32 pb-8 px-6 md:px-12">
                <h1 className="text-3xl font-bold mb-2">Resources</h1>
                <p className="text-muted-foreground text-sm">
                    {resourceStats.totalResources} curated items.
                </p>
            </section>

            {/* Premier Collections */}
            <section className="py-8 px-6 md:px-12 border-t border-border/20">
                <h2 className="text-xl font-bold mb-6 text-accent">Premier Collections</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {externalCollections.map((col) => (
                        <a
                            key={col.id}
                            href={col.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 border border-border/20 hover:border-accent transition-colors bg-muted/5"
                        >
                            <h3 className="font-bold mb-2">{col.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{col.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {col.tags.map((t, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">{t}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* YouTube Videos */}
            <section className="py-12 px-8 md:px-16 border-t border-border/20">
                <h2 className="text-xl font-bold mb-6">YouTube Videos & Playlists</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {youtubeResources.map((video) => (
                        <a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border border-border/20 hover:border-accent transition-colors"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-accent">▶</span>
                                <span className="text-xs text-muted-foreground uppercase">{video.type}</span>
                            </div>
                            <h3 className="font-medium mb-1">{video.title}</h3>
                            <p className="text-sm text-muted-foreground">{video.topic} • {video.language}</p>
                        </a>
                    ))}
                </div>
            </section>

            {/* GFG Quizzes */}
            <section className="py-12 px-8 md:px-16 border-t border-border/20">
                <h2 className="text-xl font-bold mb-6">Java & OOP Quizzes</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gfgQuizzes.map((quiz) => (
                        <a
                            key={quiz.id}
                            href={quiz.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border border-border/20 hover:border-accent transition-colors"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs px-2 py-0.5 rounded ${quiz.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                                    quiz.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                        'bg-red-500/20 text-red-400'
                                    }`}>
                                    {quiz.difficulty}
                                </span>
                            </div>
                            <h3 className="font-medium mb-1">{quiz.title}</h3>
                            <p className="text-sm text-muted-foreground">{quiz.topic}</p>
                        </a>
                    ))}
                </div>
            </section>

            {/* Tutorials */}
            <section className="py-12 px-8 md:px-16 border-t border-border/20">
                <h2 className="text-xl font-bold mb-6">Tutorials & Notes</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {gfgTutorials.map((tutorial) => {
                        const isInternal = tutorial.url.startsWith('/');
                        const Component = isInternal ? Link : 'a';
                        const props = isInternal ? { href: tutorial.url } : { href: tutorial.url, target: '_blank', rel: 'noopener noreferrer' };

                        return (
                            <Component
                                key={tutorial.id}
                                {...props}
                                className="p-4 border border-border/20 hover:border-accent transition-colors flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="font-medium mb-1">{tutorial.title}</h3>
                                    <p className="text-sm text-muted-foreground">{tutorial.topic}</p>
                                </div>
                                <span className="text-xs text-muted-foreground uppercase">{tutorial.type}</span>
                            </Component>
                        )
                    })}
                </div>
            </section>

            {/* STL Resources */}
            <section className="py-12 px-8 md:px-16 border-t border-border/20">
                <h2 className="text-xl font-bold mb-6">Standard Template Library (STL)</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stlResources.map((res) => (
                        <a
                            key={res.id}
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border border-border/20 hover:border-accent transition-colors group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-accent group-hover:scale-110 transition-transform">📄</span>
                                <span className="text-xs text-muted-foreground uppercase">{res.type}</span>
                            </div>
                            <h3 className="font-medium mb-1">{res.title}</h3>
                            <p className="text-sm text-muted-foreground">{res.topic}</p>
                        </a>
                    ))}
                </div>
            </section>

            {/* Interactive Platforms */}
            <section className="py-12 px-8 md:px-16 border-t border-border/20">
                <h2 className="text-xl font-bold mb-6">Interactive Platforms</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {interactivePlatforms.map((platform) => (
                        <a
                            key={platform.id}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 border border-border/20 hover:border-accent transition-colors"
                        >
                            <h3 className="font-bold mb-2 text-accent">{platform.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {platform.features.slice(0, 2).map((f, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-muted/50 rounded">{f}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
