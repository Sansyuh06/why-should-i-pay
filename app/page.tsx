'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { ArrowRight, Code2, Database, BrainCircuit, Terminal, Sparkles, Building2, Server, Key } from 'lucide-react';

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

                <div className={`flex-1 relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-900/50 text-cyan-400 text-xs font-mono mb-8 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        PRODUCTION READY v1.0
                    </div>
                    
                    <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                        The Developer's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                            Placement Hub
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                        A data-intensive, AI-powered platform for placement preparation. Real IDE, real APIs, and zero AI cost — just bring your own Gemini key.
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/problems" className="group px-6 py-3.5 bg-cyan-950/40 text-cyan-400 border border-cyan-900/50 font-mono tracking-wider font-bold rounded shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:bg-cyan-900/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all flex items-center gap-3">
                            START SOLVING 
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/prd" className="px-6 py-3.5 bg-slate-900/50 text-slate-300 border border-slate-800 hover:bg-slate-800 transition-colors rounded font-mono tracking-wider text-sm flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-slate-400" /> READ PRD
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-8 border-t border-slate-800/60 pt-8">
                        <div>
                            <div className="font-mono text-2xl font-bold text-white mb-1">2,000+</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">DSA Problems</div>
                        </div>
                        <div>
                            <div className="font-mono text-2xl font-bold text-white mb-1">50+</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Target Companies</div>
                        </div>
                        <div>
                            <div className="font-mono text-2xl font-bold text-white mb-1">0¢</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">AI Operating Cost</div>
                        </div>
                    </div>
                </div>

                {/* Right Side Mock Terminal */}
                <div className={`flex-1 w-full max-w-xl relative z-10 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#040b16] shadow-2xl">
                        <div className="flex items-center px-4 py-3 border-b border-slate-800/80 bg-[#020617]">
                            <div className="flex gap-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                            </div>
                            <div className="font-mono text-xs text-slate-500 flex-1 text-center pr-10">api/execute/route.ts</div>
                        </div>
                        <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
                            <div className="text-violet-400">import</div> <div className="text-slate-300 inline">{'{ '}</div><div className="text-cyan-400 inline">NextResponse</div><div className="text-slate-300 inline">{' }'}</div> <div className="text-violet-400 inline">from</div> <div className="text-green-400 inline">'next/server'</div>;
                            <br/><br/>
                            <div className="text-violet-400 inline">export async function</div> <div className="text-blue-400 inline">POST</div><div className="text-slate-300 inline">(req: Request) {'{'}</div>
                            <br/>
                            <div className="pl-4">
                                <div className="text-slate-500 mb-1">// Execute code via Docker container</div>
                                <div className="text-violet-400 inline">const</div> <div className="text-slate-300 inline">{'{ code, language } = '}</div><div className="text-violet-400 inline">await</div> <div className="text-slate-300 inline">req.json();</div>
                                <br/><br/>
                                <div className="text-violet-400 inline">const</div> <div className="text-slate-300 inline">result =</div> <div className="text-violet-400 inline">await</div> <div className="text-cyan-400 inline">DockerService</div><div className="text-slate-300 inline">.run({'{'}</div>
                                <br/>
                                <div className="pl-4 text-slate-300">image: <div className="text-green-400 inline">{'`code-runner-${language}`'}</div>,</div>
                                <div className="pl-4 text-slate-300">timeoutMs: <div className="text-orange-400 inline">5000</div>,</div>
                                <div className="text-slate-300 inline">{'}'});</div>
                                <br/><br/>
                                <div className="text-violet-400 inline">return</div> <div className="text-cyan-400 inline">NextResponse</div><div className="text-slate-300 inline">.json(result);</div>
                            </div>
                            <div className="text-slate-300">{'}'}</div>
                        </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -bottom-6 -left-6 px-4 py-3 bg-cyan-950/40 border border-cyan-900/50 rounded shadow-lg backdrop-blur-md flex items-center gap-3 animate-[bounce_4s_infinite]">
                        <Key className="w-5 h-5 text-cyan-400" />
                        <div className="font-mono text-xs text-cyan-200">User Gemini Key Active</div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 border-t border-slate-800/50 bg-[#040b16]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Enterprise-Grade Prep.</h2>
                        <p className="text-slate-400 max-w-2xl">Not a toy project. Built on event-driven architecture, caching layers, and real distributed crawlers to give you the most accurate placement data.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Code2,
                                title: "Real Execution Environment",
                                desc: "No mocked outputs. Your code runs in isolated containers against hidden test cases with execution time analytics.",
                                bgClass: "bg-cyan-950/30", borderClass: "border-cyan-900/30", textClass: "text-cyan-400"
                            },
                            {
                                icon: BrainCircuit,
                                title: "AI Mock Interviewer",
                                desc: "Turn-by-turn conversational interviews using your own Gemini API key via WebSockets. Zero extra subscription costs.",
                                bgClass: "bg-violet-950/30", borderClass: "border-violet-900/30", textClass: "text-violet-400"
                            },
                            {
                                icon: Building2,
                                title: "Company-Wise Tracks",
                                desc: "Distributed Playwright crawlers update frequency data nightly so you know exactly what Amazon asked yesterday.",
                                bgClass: "bg-emerald-950/30", borderClass: "border-emerald-900/30", textClass: "text-emerald-400"
                            },
                            {
                                icon: Database,
                                title: "Data-Intensive Backend",
                                desc: "PostgreSQL streaming replication, hash partitioning, and Redis caching layers ensure 99.9% uptime and <400ms latency.",
                                bgClass: "bg-orange-950/30", borderClass: "border-orange-900/30", textClass: "text-orange-400"
                            },
                            {
                                icon: Sparkles,
                                title: "Resume ATS Parser",
                                desc: "Upload your PDF. We extract the text, analyze keyword density against job descriptions, and suggest AI rewrites.",
                                bgClass: "bg-pink-950/30", borderClass: "border-pink-900/30", textClass: "text-pink-400"
                            },
                            {
                                icon: Server,
                                title: "Self-Hostable Core",
                                desc: "Want full control? Clone the repo, supply your DB strings, and deploy your own instance. Open source foundation.",
                                bgClass: "bg-blue-950/30", borderClass: "border-blue-900/30", textClass: "text-blue-400"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:bg-slate-900/60 transition-colors group">
                                <div className={`w-12 h-12 rounded-lg ${feature.bgClass} ${feature.borderClass} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={`w-6 h-6 ${feature.textClass}`} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
