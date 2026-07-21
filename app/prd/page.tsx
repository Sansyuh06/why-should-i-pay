'use client';

import React, { useState, useEffect } from 'react';
import { 
  Building2, Briefcase, Key, Database, Target, Brain, ExternalLink, ArrowRight, BookOpen, AlertTriangle, GitBranch, Shield, Zap, CheckCircle2, Cloud, Layout, Server, Network
} from 'lucide-react';
import Link from 'next/link';

export default function PRDPage() {
  const [activeSection, setActiveSection] = useState('executive-summary');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'executive-summary', num: '01', label: 'Executive Summary' },
    { id: 'problem-space', num: '02', label: 'Problem Space' },
    { id: 'user-personas', num: '03', label: 'User Personas' },
    { id: 'architecture', num: '04', label: 'Architecture' },
    { id: 'feature-specs', num: '05', label: 'Feature Specs' },
    { id: 'data-models', num: '06', label: 'Data Models' },
    { id: 'api-design', num: '07', label: 'API Design' },
    { id: 'security-model', num: '08', label: 'Security Model' },
    { id: 'infrastructure', num: '09', label: 'Infrastructure' },
    { id: 'roadmap', num: '10', label: 'Roadmap' },
    { id: 'success-metrics', num: '11', label: 'Success Metrics' },
    { id: 'references', num: '12', label: 'References' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-72 bg-[#040b16] border-r border-slate-800/60 p-6 hidden lg:flex flex-col">
        <div className="mb-10">
          <h1 className="font-display text-2xl font-black tracking-tight text-white mb-2">Placement<span className="text-cyan-400">Hub</span></h1>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Product Requirements</p>
        </div>
        
        <div className="space-y-1 flex-1 overflow-y-auto pr-2 scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-4 py-3 rounded-md text-sm transition-all duration-200 flex items-center gap-3
                ${activeSection === item.id 
                  ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-900/50 shadow-[0_0_15px_rgba(34,211,238,0.05)]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'}`}
            >
              <span className={`font-mono text-xs ${activeSection === item.id ? 'text-cyan-500' : 'text-slate-600'}`}>
                {item.num}
              </span>
              <span className="font-medium tracking-wide">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800/60">
          <Link href="/" className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-violet-400 transition-colors">
            <ArrowRight className="w-3 h-3" /> Back to Platform
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-72 p-6 md:p-12 lg:p-20 max-w-5xl">
        
        {/* Title Block */}
        <div className="mb-24 mt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-900/30 text-violet-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            LIVING DOCUMENT
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Next-Gen Placement Platform
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-12">
            A data-intensive, AI-powered one-stop placement preparation platform. Users supply their own Gemini API key — zero backend AI cost. Built on Martin Kleppmann's DDIA principles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Core Features', val: '12+' },
              { label: 'Target Companies', val: '50+' },
              { label: 'DSA Problems', val: '2,000+' },
              { label: 'Build Phases', val: '4' }
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-xl border border-slate-800/50 bg-slate-900/20">
                <div className="font-mono text-3xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 01. Executive Summary */}
        <section id="executive-summary" className="scroll-mt-24 mb-32">
          <SectionHeader num="01" title="Executive Summary" subtitle="Vision, value proposition, and differentiators" />
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-950/20 to-slate-900/20 border border-cyan-900/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" /> The Vision
              </h3>
              <p className="text-slate-400 leading-relaxed">
                One platform where every engineering student and professional prepares for placements end-to-end — no 5-subscription juggling. The user's Gemini key transforms a static resource library into a fully personalized AI mentor at zero operating cost to the platform.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Differentiators</h3>
              {[
                'User-managed Gemini key — zero AI operating cost to platform',
                'Real APIs only — no mock data, no stubs, no fake responses',
                'DDIA-grade: replicated, partitioned, event-driven architecture',
                'Company-specific tracks built from real interview frequency data',
                'Open-source core with self-hostable deployment option'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02. Problem Space */}
        <section id="problem-space" className="scroll-mt-24 mb-32">
          <SectionHeader num="02" title="Problem Space" subtitle="Why existing solutions fall short and the gap we fill" />
          
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { title: 'Fragmentation', impact: 'High', desc: 'Students juggle LeetCode, InterviewBit, GeeksForGeeks, Notion roadmaps, YouTube, and mock interview apps simultaneously. Context switching destroys momentum.' },
              { title: 'AI Cost Barrier', impact: 'High', desc: 'Platforms charging $30-50/month for AI features exclude most Indian college students. Shifting cost to the user\'s own API key breaks this barrier entirely.' },
              { title: 'No Company Focus', impact: 'Medium', desc: 'Generic DSA lists do not reflect what Amazon or Google actually ask in 2025. Frequency data is siloed in expensive paid courses.' },
              { title: 'Progress Blindness', impact: 'Medium', desc: 'Existing platforms show completion counts, not insight. Users cannot see which topics need attention or how they compare to peers.' }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-800/50 bg-slate-900/20 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-white">{p.title}</h4>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${p.impact === 'High' ? 'bg-red-950/50 text-red-400 border border-red-900/50' : 'bg-yellow-950/50 text-yellow-400 border border-yellow-900/50'}`}>
                    {p.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800/50">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900/50 text-slate-300 font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-medium">Platform</th>
                  <th className="px-6 py-4 font-medium">AI Mock</th>
                  <th className="px-6 py-4 font-medium">Job Board</th>
                  <th className="px-6 py-4 font-medium">Company Tracks</th>
                  <th className="px-6 py-4 font-medium">Price / mo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <tr className="bg-[#020617]"><td className="px-6 py-4">LeetCode</td><td className="px-6 py-4 text-slate-500">No</td><td className="px-6 py-4 text-slate-500">No</td><td className="px-6 py-4 text-yellow-400">Partial</td><td className="px-6 py-4">$35</td></tr>
                <tr className="bg-[#020617]"><td className="px-6 py-4">InterviewBit</td><td className="px-6 py-4 text-slate-500">No</td><td className="px-6 py-4 text-green-400">Yes</td><td className="px-6 py-4 text-green-400">Yes</td><td className="px-6 py-4">$30</td></tr>
                <tr className="bg-cyan-950/10 border-l-2 border-cyan-500"><td className="px-6 py-4 font-bold text-cyan-400">PlacementHub</td><td className="px-6 py-4 text-cyan-400 font-medium">Yes (user key)</td><td className="px-6 py-4 text-cyan-400 font-medium">Yes</td><td className="px-6 py-4 text-cyan-400 font-medium">Yes</td><td className="px-6 py-4 font-bold text-white">$0</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 03. User Personas */}
        <section id="user-personas" className="scroll-mt-24 mb-32">
          <SectionHeader num="03" title="User Personas" subtitle="Three primary user archetypes with distinct motivations" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Arjun', role: '3rd Year CSE', quote: 'I need to crack Google or Flipkart before graduation. I have no idea where to start.', focus: ['Company tracks', 'AI interviewer'] },
              { name: 'Priya', role: '2 YOE SWE', quote: 'I want to move from a service company to FAANG. I need targeted system design prep.', focus: ['System design', 'Job board'] },
              { name: 'Rahul', role: 'Career Switcher', quote: 'I taught myself coding. I need to understand what companies actually ask and fix my resume.', focus: ['Resume parser', 'DSA foundations'] },
            ].map((persona, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-800/50 bg-slate-900/20 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-display font-bold text-xl text-white">{persona.name}</h4>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{persona.role}</div>
                </div>
                <p className="text-sm text-slate-400 italic mb-6 flex-1">"{persona.quote}"</p>
                <div className="flex flex-wrap gap-2">
                  {persona.focus.map(f => (
                    <span key={f} className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] uppercase font-mono tracking-wider rounded">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Architecture */}
        <section id="architecture" className="scroll-mt-24 mb-32">
          <SectionHeader num="04" title="System Architecture" subtitle="DDIA-grade — replication, partitioning, event streaming" />
          
          <div className="p-8 rounded-2xl border border-slate-800 bg-[#040b16] mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <h3 className="font-mono text-sm uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-800 pb-2">System Topology</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-right pr-4 font-mono text-xs text-slate-500 uppercase">Client Layer</div>
                <div className="col-span-3 flex gap-3">
                  <div className="flex-1 py-3 bg-slate-900/80 border border-slate-700/50 text-center text-sm font-medium rounded text-slate-200">Next.js (Edge)</div>
                  <div className="flex-1 py-3 bg-slate-900/80 border border-slate-700/50 text-center text-sm font-medium rounded text-slate-200">Mobile PWA</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-right pr-4 font-mono text-xs text-slate-500 uppercase">API Gateway</div>
                <div className="col-span-3 py-3 bg-cyan-950/30 border border-cyan-900/50 text-center text-sm font-medium rounded text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.05)]">
                  Rate Limiter (Redis) + JWT Auth Middleware
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-right pr-4 font-mono text-xs text-slate-500 uppercase">Service Layer</div>
                <div className="col-span-3 grid grid-cols-4 gap-2">
                  {['User', 'Interview', 'Job', 'Analytics'].map(svc => (
                    <div key={svc} className="py-2 bg-slate-800/50 border border-slate-700 text-center text-xs font-medium rounded text-slate-300">{svc}</div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-right pr-4 font-mono text-xs text-slate-500 uppercase">Data Layer</div>
                <div className="col-span-3 grid grid-cols-4 gap-2">
                  <div className="col-span-2 py-3 bg-violet-950/30 border border-violet-900/50 text-center text-sm font-medium rounded text-violet-200">PostgreSQL (Primary + 2 Replicas)</div>
                  <div className="py-3 bg-orange-950/20 border border-orange-900/40 text-center text-sm font-medium rounded text-orange-200">Redis</div>
                  <div className="py-3 bg-emerald-950/20 border border-emerald-900/40 text-center text-sm font-medium rounded text-emerald-200">Kafka</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-6">DDIA Principles Mapping</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { t: 'Replication', d: 'PostgreSQL streaming replication: 1 primary + 2 async read replicas. Analytics queries routed to replicas via PgBouncer.' },
              { t: 'Partitioning', d: 'User progress data partitioned by user_id hash across 4 shards. Job listings use monthly range partitions on scraped_at.' },
              { t: 'Transactions', d: 'ACID for enrollment. Saga pattern with compensating transactions for multi-step AI session lifecycle to handle Gemini partial failures.' },
              { t: 'Event Streaming', d: 'Kafka topics: user-events, job-updates, crawler-results. Consumers update real-time analytics and feed the ML feature pipeline.' }
            ].map((ddia, i) => (
              <div key={i} className="p-5 border border-slate-800 bg-slate-900/20 rounded-lg">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-500" /> {ddia.t}
                </h4>
                <p className="text-sm text-slate-400">{ddia.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05. Feature Specs */}
        <section id="feature-specs" className="scroll-mt-24 mb-32">
          <SectionHeader num="05" title="Feature Specifications" subtitle="Core platform capabilities and API contracts" />
          
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/20">
              <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Key className="w-5 h-5 text-cyan-400" /> Gemini API Key Management (P0)
                </h3>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-1 bg-red-950/50 text-red-400 rounded">Critical Path</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Users upload their own Google Gemini API key. Encrypted client-side via AES-256-GCM using the Web Crypto API before being stored — never transmitted to the server in plaintext.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-500 mb-3 tracking-widest">User Stories</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• As a user, I can securely save my Gemini API key.</li>
                      <li>• As a user, I can revoke my API key at any time.</li>
                      <li>• As a user, I see real-time validation status of my key.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-500 mb-3 tracking-widest">Endpoints</h4>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex gap-2"><span className="text-green-400">POST</span> <span className="text-slate-300">/api/user/gemini-key</span></div>
                      <div className="flex gap-2"><span className="text-red-400">DEL</span> <span className="text-slate-300">/api/user/gemini-key</span></div>
                      <div className="flex gap-2"><span className="text-blue-400">GET</span> <span className="text-slate-300">/api/user/gemini-key/status</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/20">
              <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-violet-400" /> AI Mock Interviewer
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Real-time conversational mock interviews covering DSA, System Design, and Behavioral topics. Uses Server-Sent Events (SSE) for streaming Gemini 1.5 Pro responses directly to the client.
                </p>
                <p className="text-sm text-slate-400 mb-0">Includes a Monaco editor for live coding rounds and generates a comprehensive scored report within 30 seconds of session completion, persisted in PostgreSQL.</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/20">
              <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-400" /> Distributed Job Crawler & Board
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Playwright-based distributed workers crawl LinkedIn, Wellfound, and company career pages nightly. Circuit breakers prevent IP bans. Data is normalized and pumped into Elasticsearch for faceted searching on the frontend.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Data Models */}
        <section id="data-models" className="scroll-mt-24 mb-32">
          <SectionHeader num="06" title="Data Models & Crypto" subtitle="PostgreSQL schemas and client-side encryption implementation" />
          
          <div className="mb-8">
            <h4 className="text-sm font-bold text-white mb-3">User Table Schema</h4>
            <div className="overflow-x-auto rounded-lg border border-slate-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900/80 text-slate-400 font-mono text-xs">
                  <tr><th className="px-4 py-3">Column</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Note</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-[#020617]">
                  <tr><td className="px-4 py-3 font-mono text-cyan-400">id</td><td className="px-4 py-3 text-slate-400">uuid</td><td className="px-4 py-3 text-slate-500">PRIMARY KEY</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-cyan-400">email</td><td className="px-4 py-3 text-slate-400">varchar(255)</td><td className="px-4 py-3 text-slate-500">UNIQUE NOT NULL</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-cyan-400">gemini_key_cipher</td><td className="px-4 py-3 text-slate-400">text</td><td className="px-4 py-3 text-slate-500">AES-256-GCM ciphertext</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-cyan-400">gemini_key_iv</td><td className="px-4 py-3 text-slate-400">text</td><td className="px-4 py-3 text-slate-500">Encryption IV</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <h4 className="text-sm font-bold text-white mb-3">Client-Side Encryption Implementation (TypeScript)</h4>
          <div className="rounded-lg overflow-hidden border border-slate-800 bg-[#0d1117] p-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
            <pre><code>{`// Key NEVER leaves the browser in plaintext
async function encryptGeminiKey(plainKey: string, salt: string) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw", enc.encode(salt), { name: "PBKDF2" }, false, ["deriveKey"]
  );

  const aesKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: crypto.getRandomValues(new Uint8Array(16)),
      iterations: 100_000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const cipherBuf = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv }, aesKey, enc.encode(plainKey)
  );

  return {
    cipher: btoa(String.fromCharCode(...new Uint8Array(cipherBuf))),
    iv: btoa(String.fromCharCode(...iv)),
  };
}`}</code></pre>
          </div>
        </section>

        {/* 07. API Design */}
        <section id="api-design" className="scroll-mt-24 mb-32">
          <SectionHeader num="07" title="API Design" subtitle="REST + WebSocket contracts and response envelopes" />
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm">Conventions</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Base URL</span>
                  <span className="font-mono text-cyan-400">/api/v1</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Auth</span>
                  <span className="font-mono text-slate-300">Bearer JWT</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Rate Limit</span>
                  <span className="font-mono text-slate-300">100/min per user</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Pagination</span>
                  <span className="font-mono text-slate-300">Cursor-based</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Idempotency</span>
                  <span className="font-mono text-slate-300">Idempotency-Key Header</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm">WebSocket Channels</h4>
              <div className="space-y-3">
                <div className="p-3 bg-slate-900/50 border border-slate-800 rounded">
                  <div className="font-mono text-xs text-violet-400 mb-1">/ws/interview/:id</div>
                  <div className="text-xs text-slate-400">Bidirectional AI interview turn-by-turn stream</div>
                </div>
                <div className="p-3 bg-slate-900/50 border border-slate-800 rounded">
                  <div className="font-mono text-xs text-violet-400 mb-1">/ws/notifications/:uid</div>
                  <div className="text-xs text-slate-400">Real-time push notifications per authenticated user</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Security Model */}
        <section id="security-model" className="scroll-mt-24 mb-32">
          <SectionHeader num="08" title="Security Model" subtitle="Defense-in-depth, auth hardening, and RLS" />
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Row-Level Security (RLS)', lvl: 'Critical', d: 'PostgreSQL RLS policies on all user-data tables. Enforced at database level.' },
              { t: 'API Rate Limiting', lvl: 'High', d: 'Redis sliding window. 429 with Retry-After header. IP block list for abuse.' },
              { t: 'CSRF Protection', lvl: 'High', d: 'SameSite=Lax session cookies + per-request CSRF tokens for state mutations.' },
              { t: 'Content Security Policy', lvl: 'Medium', d: 'Strict CSP via next.config.js headers. Nonce-based inline script allowance only.' }
            ].map((s, i) => (
              <div key={i} className="p-5 border border-slate-800 bg-slate-900/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-500" /> {s.t}
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-slate-800 text-slate-300 rounded">{s.lvl}</span>
                </div>
                <p className="text-sm text-slate-400">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 09. Infrastructure */}
        <section id="infrastructure" className="scroll-mt-24 mb-32">
          <SectionHeader num="09" title="Infrastructure & CI/CD" subtitle="Full tech stack, pipelines, and observability" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-white mb-4">Core Technology Stack</h4>
              <div className="space-y-3">
                {[
                  { layer: 'Frontend', tech: 'Next.js 14 App Router, React 18, Tailwind CSS' },
                  { layer: 'Backend', tech: 'Node.js (Edge Runtime), NextAuth.js v5' },
                  { layer: 'Database', tech: 'PostgreSQL 16 (Primary) + Prisma ORM' },
                  { layer: 'Cache & Queue', tech: 'Redis 7, Apache Kafka (Confluent)' },
                  { layer: 'Search', tech: 'Elasticsearch 8 (Self-hosted/Managed)' },
                  { layer: 'Monitoring', tech: 'OpenTelemetry, Prometheus, Grafana' }
                ].map((t, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-slate-800 last:border-0">
                    <span className="w-32 font-mono text-xs text-slate-500 uppercase">{t.layer}</span>
                    <span className="text-sm text-slate-200 font-medium">{t.tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-white mb-4">CI/CD Pipeline</h4>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {[
                  'PR opened — ESLint + TS strict check',
                  'Tests run — Jest + Prisma integration',
                  'Security scan — Snyk SCA + npm audit',
                  'Preview deploy — Vercel URL posted',
                  'Merge to main — Auto-deploy to production'
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-slate-900 group-[.is-active]:bg-cyan-500 group-[.is-active]:border-transparent text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] p-3 rounded border border-slate-800 bg-slate-900/50 shadow text-xs text-slate-300">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. Roadmap */}
        <section id="roadmap" className="scroll-mt-24 mb-32">
          <SectionHeader num="10" title="Implementation Roadmap" subtitle="4-phase rollout from foundation to production-grade" />
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { p: 'Phase 1', w: 'Weeks 1-4', title: 'Foundation', tasks: ['Next.js 14 + Prisma + Auth', 'DSA Library seed (500 problems)', 'Gemini Key Upload + Encryption'] },
              { p: 'Phase 2', w: 'Weeks 5-10', title: 'AI Features', tasks: ['AI Mock Interviewer Streaming', 'Resume ATS parser', 'Company-wise tracks launch'] },
              { p: 'Phase 3', w: 'Weeks 11-16', title: 'Scale + Jobs', tasks: ['Live job board with crawlers', 'Progress analytics dashboard', 'Elasticsearch integration'] },
              { p: 'Phase 4', w: 'Weeks 17-22', title: 'Observability', tasks: ['OpenTelemetry tracing', 'Read replicas + partitioning', 'Incident runbooks setup'] }
            ].map((phase, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-800 bg-slate-900/20 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-700 group-hover:bg-cyan-500 transition-colors"></div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="font-mono text-xs text-cyan-400 mb-1">{phase.p}</div>
                    <h4 className="font-bold text-white text-lg">{phase.title}</h4>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">{phase.w}</div>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map(t => (
                    <li key={t} className="text-sm text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Success Metrics */}
        <section id="success-metrics" className="scroll-mt-24 mb-32">
          <SectionHeader num="11" title="Success Metrics" subtitle="KPIs and OKRs that define platform health" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { l: 'Monthly Signups', v: '2,000+' },
              { l: 'Active Learners', v: '> 60%' },
              { l: 'API P99 Latency', v: '< 400ms' },
              { l: 'Monthly Uptime', v: '> 99.9%' }
            ].map((m, i) => (
              <div key={i} className="p-4 border-b-2 border-slate-800 bg-slate-900/10 text-center">
                <div className="font-display font-bold text-2xl text-white mb-1">{m.v}</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">{m.l}</div>
              </div>
            ))}
          </div>
          
          <div className="p-6 rounded-lg bg-cyan-950/10 border border-cyan-900/30">
            <h4 className="font-bold text-white mb-2">North Star Metric: Monthly Active Learners</h4>
            <p className="text-sm text-slate-400">Users who complete at least 3 problems or 1 mock interview session in any 30-day rolling window.</p>
          </div>
        </section>

        {/* 12. References */}
        <section id="references" className="scroll-mt-24 mb-20">
          <SectionHeader num="12" title="References" subtitle="Integrated resources and underlying methodologies" />
          
          <div className="space-y-6">
            <div className="p-5 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider font-mono">Core Reading</h4>
              <div className="flex items-center justify-between py-2 border-b border-slate-800/50">
                <div>
                  <div className="text-sm font-medium text-slate-200">Designing Data-Intensive Applications</div>
                  <div className="text-xs text-slate-500">Martin Kleppmann (O'Reilly)</div>
                </div>
                <BookOpen className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="text-sm font-medium text-slate-200">Online Platform Architecture</div>
                  <div className="text-xs text-slate-500">AXISBITS Blog</div>
                </div>
                <BookOpen className="w-4 h-4 text-slate-600" />
              </div>
            </div>

            <div className="p-5 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider font-mono">Integrated Content (GitHub & Drive)</h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  'MadhavBahl/OOPS', 'mansikagrawal/STL-NOTES', 'AniruddhaDas/CollectionFramework',
                  'LeetCode Top 150', 'nishant-Tiwari24/coding-resources', 'AlgoMap.io',
                  'DeepLearning.AI', 'Interview Master 100', '1aCxkeqabWR...gflUN (Drive)'
                ].map(r => (
                  <div key={r} className="flex items-center gap-2 text-sm text-slate-400">
                    <ExternalLink className="w-3 h-3 text-cyan-500" /> {r}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-5 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider font-mono">Video Assets (YouTube)</h4>
              <div className="flex flex-wrap gap-2">
                {['KyQKTJhSIak', '3-4qAkFRpAk', 'PwwvZQORy1I', 'AjQPRomyd-k', 'UU1WVnMk4E8'].map(id => (
                  <span key={id} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs font-mono text-slate-300">
                    {id}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

function SectionHeader({ num, title, subtitle }: { num: string, title: string, subtitle: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-end gap-4 mb-3">
        <span className="font-mono text-4xl font-light text-cyan-900/50 leading-none">{num}</span>
        <h2 className="font-display text-3xl font-bold text-white leading-none pb-1">{title}</h2>
      </div>
      <p className="text-slate-400 ml-14">{subtitle}</p>
    </div>
  );
}
