import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Compass, Clock, ChevronRight, CheckCircle, Circle,
    Calendar, Target, BookOpen, ArrowRight
} from 'lucide-react';
import resources from '../data/resources.json';

const RoadmapPage = () => {
    const [selectedRoadmap, setSelectedRoadmap] = useState(resources.roadmaps[0]);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Learning Roadmaps</h1>
                    <p className="text-lg text-slate-400 max-w-3xl">
                        Structured learning paths designed to take you from beginner to interview-ready.
                        Each roadmap is carefully crafted with a logical progression of topics.
                    </p>
                </div>

                {/* Roadmap Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {resources.roadmaps.map((roadmap) => (
                        <button
                            key={roadmap.id}
                            onClick={() => setSelectedRoadmap(roadmap)}
                            className={`p-5 rounded-xl text-left transition-all ${selectedRoadmap.id === roadmap.id
                                    ? 'bg-violet-500/20 border-2 border-violet-500/50'
                                    : 'bg-slate-900/50 border border-white/5 hover:border-white/10'
                                }`}
                        >
                            <div className="flex items-center gap-2 text-violet-400 text-sm font-medium mb-2">
                                <Clock size={14} />
                                <span>{roadmap.duration}</span>
                            </div>
                            <h3 className="font-semibold text-white mb-1">{roadmap.title}</h3>
                            <p className="text-sm text-slate-500 line-clamp-2">{roadmap.description}</p>
                        </button>
                    ))}
                </div>

                {/* Selected Roadmap Details */}
                <motion.div
                    key={selectedRoadmap.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Roadmap Header */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">{selectedRoadmap.title}</h2>
                                <p className="text-slate-400">{selectedRoadmap.description}</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-violet-400">{selectedRoadmap.phases.length}</div>
                                    <div className="text-xs text-slate-500">Phases</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-violet-400">{selectedRoadmap.duration}</div>
                                    <div className="text-xs text-slate-500">Duration</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phases Timeline */}
                    <div className="space-y-6">
                        {selectedRoadmap.phases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative"
                            >
                                {/* Timeline Line */}
                                {idx < selectedRoadmap.phases.length - 1 && (
                                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-slate-700" />
                                )}

                                <div className="flex gap-6">
                                    {/* Phase Number */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/25">
                                            {phase.phase}
                                        </div>
                                    </div>

                                    {/* Phase Content */}
                                    <div className="flex-1 pb-8">
                                        <div className="p-6 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white mb-1">{phase.name}</h3>
                                                    <p className="text-slate-400">{phase.focus}</p>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {phase.duration}
                                                    </span>
                                                    {phase.weeklyHours && (
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={14} />
                                                            {phase.weeklyHours}h/week
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Topics in this phase */}
                                            {phase.topics && (
                                                <div className="mt-4">
                                                    <h4 className="text-sm font-medium text-slate-400 mb-3">Topics covered:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {phase.topics.map((topic, tIdx) => (
                                                            <span
                                                                key={tIdx}
                                                                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm"
                                                            >
                                                                {topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Button */}
                                            <div className="mt-6 flex items-center gap-4">
                                                <button className="px-4 py-2 rounded-lg bg-violet-500/20 text-violet-300 text-sm font-medium hover:bg-violet-500/30 transition-colors flex items-center gap-2">
                                                    <Target size={16} />
                                                    Start Phase {phase.phase}
                                                </button>
                                                <span className="text-sm text-slate-500">
                                                    Begin your journey through this phase
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Related Resources CTA */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/50 border border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <BookOpen className="text-emerald-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Ready to dive deeper?</h3>
                                <p className="text-sm text-slate-400">Explore all resources organized by topic</p>
                            </div>
                        </div>
                        <Link
                            to="/"
                            className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2"
                        >
                            Browse All Topics
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapPage;
