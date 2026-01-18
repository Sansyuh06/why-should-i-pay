import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Layers, Cpu, Server, Database, Wifi, FileText, Briefcase,
    Clock, ChevronRight, BookOpen, Code, Play, Zap
} from 'lucide-react';

const topics = [
    {
        id: 'dsa',
        title: 'Data Structures & Algorithms',
        description: 'Master the foundation of technical interviews. Arrays, Trees, Graphs, Dynamic Programming, and more.',
        icon: Layers,
        color: '#8B5CF6',
        modules: 12,
        hours: 200,
        subtopics: ['arrays', 'linked-lists', 'stacks-queues', 'trees', 'graphs', 'dp', 'sorting', 'searching']
    },
    {
        id: 'oops',
        title: 'Object-Oriented Programming',
        description: 'Classes, Inheritance, Polymorphism, Abstraction, and Design Patterns in Java, C++, and Python.',
        icon: Code,
        color: '#3B82F6',
        modules: 8,
        hours: 60,
        subtopics: ['classes-objects', 'inheritance', 'polymorphism', 'abstraction', 'encapsulation', 'design-patterns']
    },
    {
        id: 'os',
        title: 'Operating Systems',
        description: 'Process Management, Memory Management, File Systems, Scheduling, and Concurrency.',
        icon: Server,
        color: '#10B981',
        modules: 10,
        hours: 80,
        subtopics: ['process-management', 'memory-management', 'scheduling', 'deadlocks', 'file-systems', 'synchronization']
    },
    {
        id: 'dbms',
        title: 'Database Management Systems',
        description: 'SQL, Normalization, Transactions, Indexing, and Database Design principles.',
        icon: Database,
        color: '#F59E0B',
        modules: 8,
        hours: 50,
        subtopics: ['sql-basics', 'normalization', 'transactions', 'indexing', 'joins', 'acid-properties']
    },
    {
        id: 'cn',
        title: 'Computer Networks',
        description: 'OSI Model, TCP/IP, HTTP, DNS, Network Security, and Protocol Deep-dives.',
        icon: Wifi,
        color: '#EF4444',
        modules: 9,
        hours: 60,
        subtopics: ['osi-model', 'tcp-ip', 'http', 'dns', 'network-security', 'protocols']
    },
    {
        id: 'interview',
        title: 'Interview Preparation',
        description: 'System Design, Behavioral Questions, Resume Building, and Company-specific preparation.',
        icon: Briefcase,
        color: '#EC4899',
        modules: 6,
        hours: 40,
        subtopics: ['system-design', 'behavioral', 'resume', 'aptitude', 'company-prep']
    }
];

const Dashboard = () => {
    return (
        <div className="min-h-full bg-[#0a0a0f]">
            {/* Hero Section */}
            <section className="relative py-20 px-8 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />

                <div className="relative max-w-[1600px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium mb-8">
                            <Zap size={16} />
                            <span>Complete CS Fundamentals • Interview Ready • All Content Inline</span>
                        </div>

                        <h1 className="heading-1 text-white mb-6">
                            Master Computer Science
                            <br />
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                From First Principles
                            </span>
                        </h1>

                        <p className="body-large text-slate-400 max-w-3xl mx-auto mb-10">
                            Comprehensive tutorials with original written content. No redirects—everything you need
                            to learn DSA, OOPs, OS, DBMS, and Networks is right here.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Topics Grid */}
            <section className="px-8 pb-20">
                <div className="max-w-[1600px] mx-auto">
                    <h2 className="heading-3 text-white mb-8">Choose a Topic to Begin</h2>

                    <div className="grid grid-cols-3 gap-6">
                        {topics.map((topic, idx) => {
                            const Icon = topic.icon;
                            return (
                                <motion.div
                                    key={topic.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        to={`/topic/${topic.id}`}
                                        className="block h-full p-8 card group"
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: `${topic.color}15` }}
                                            >
                                                <Icon size={28} style={{ color: topic.color }} />
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <Clock size={14} />
                                                <span>{topic.hours}h content</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                                            {topic.title}
                                        </h3>

                                        <p className="body-text mb-6 line-clamp-2">
                                            {topic.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <span className="text-sm text-slate-500">{topic.modules} modules</span>
                                            <span className="text-sm text-violet-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Start Learning
                                                <ChevronRight size={16} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="px-8 pb-20">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-4 gap-6">
                        {[
                            { label: 'Topics Covered', value: '6', icon: BookOpen },
                            { label: 'Tutorial Hours', value: '500+', icon: Clock },
                            { label: 'Code Examples', value: '200+', icon: Code },
                            { label: 'Video Embeds', value: '50+', icon: Play },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-6 card text-center">
                                <stat.icon className="w-8 h-8 mx-auto mb-3 text-violet-400" />
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
