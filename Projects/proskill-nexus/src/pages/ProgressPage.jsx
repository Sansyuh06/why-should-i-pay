import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    TrendingUp, BookOpen, CheckCircle, Clock, Award,
    Target, Calendar, Flame, ChevronRight, RotateCcw
} from 'lucide-react';
import resources from '../data/resources.json';

const ProgressPage = () => {
    const [progress, setProgress] = useState({});
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem('proskill-progress');
        if (saved) setProgress(JSON.parse(saved));

        // Calculate streak (simplified)
        const lastVisit = localStorage.getItem('proskill-lastVisit');
        const today = new Date().toDateString();
        if (lastVisit === today) {
            setStreak(parseInt(localStorage.getItem('proskill-streak') || '1'));
        } else {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (lastVisit === yesterday) {
                const newStreak = parseInt(localStorage.getItem('proskill-streak') || '0') + 1;
                setStreak(newStreak);
                localStorage.setItem('proskill-streak', newStreak.toString());
            } else {
                setStreak(1);
                localStorage.setItem('proskill-streak', '1');
            }
            localStorage.setItem('proskill-lastVisit', today);
        }
    }, []);

    const getTotalCompleted = () => {
        let total = 0;
        Object.values(progress).forEach(section => {
            total += Object.values(section).filter(Boolean).length;
        });
        return total;
    };

    const getTotalResources = () => {
        let total = 0;
        resources.sections.forEach(section => {
            section.modules.forEach(module => {
                total += module.resources.length;
            });
        });
        return total;
    };

    const getSectionProgress = (sectionId) => {
        const section = resources.sections.find(s => s.id === sectionId);
        if (!section) return { completed: 0, total: 0, percent: 0 };

        let total = 0;
        section.modules.forEach(m => total += m.resources.length);

        const sectionProgress = progress[sectionId] || {};
        const completed = Object.values(sectionProgress).filter(Boolean).length;

        return {
            completed,
            total,
            percent: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    };

    const clearProgress = () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.removeItem('proskill-progress');
            setProgress({});
        }
    };

    const totalCompleted = getTotalCompleted();
    const totalResources = getTotalResources();
    const overallPercent = Math.round((totalCompleted / totalResources) * 100);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Your Progress</h1>
                    <p className="text-lg text-slate-400">
                        Track your learning journey across all topics and modules.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                <TrendingUp className="text-violet-400" size={20} />
                            </div>
                            <span className="text-sm text-slate-400">Overall Progress</span>
                        </div>
                        <div className="text-3xl font-bold text-white">{overallPercent}%</div>
                        <p className="text-sm text-slate-500 mt-1">{totalCompleted} / {totalResources} completed</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-2xl bg-slate-900/50 border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <CheckCircle className="text-emerald-400" size={20} />
                            </div>
                            <span className="text-sm text-slate-400">Resources Completed</span>
                        </div>
                        <div className="text-3xl font-bold text-white">{totalCompleted}</div>
                        <p className="text-sm text-slate-500 mt-1">Keep going!</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl bg-slate-900/50 border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                <Flame className="text-orange-400" size={20} />
                            </div>
                            <span className="text-sm text-slate-400">Current Streak</span>
                        </div>
                        <div className="text-3xl font-bold text-white">{streak} day{streak !== 1 ? 's' : ''}</div>
                        <p className="text-sm text-slate-500 mt-1">Keep learning daily!</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-6 rounded-2xl bg-slate-900/50 border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                <BookOpen className="text-blue-400" size={20} />
                            </div>
                            <span className="text-sm text-slate-400">Topics Started</span>
                        </div>
                        <div className="text-3xl font-bold text-white">{Object.keys(progress).length}</div>
                        <p className="text-sm text-slate-500 mt-1">of {resources.sections.length} sections</p>
                    </motion.div>
                </div>

                {/* Section Progress */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-white">Progress by Section</h2>
                        <button
                            onClick={clearProgress}
                            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-sm hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-2"
                        >
                            <RotateCcw size={14} />
                            Reset Progress
                        </button>
                    </div>

                    <div className="space-y-4">
                        {resources.sections.map((section, idx) => {
                            const { completed, total, percent } = getSectionProgress(section.id);

                            return (
                                <motion.div
                                    key={section.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        to={`/topic/${section.id}`}
                                        className="block p-5 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all group"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                    style={{ backgroundColor: `${section.color}20` }}
                                                >
                                                    <BookOpen size={18} style={{ color: section.color }} />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-white group-hover:text-violet-300 transition-colors">
                                                        {section.title}
                                                    </h3>
                                                    <p className="text-xs text-slate-500">{section.modules.length} modules</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <div className="text-lg font-semibold text-white">{percent}%</div>
                                                    <div className="text-xs text-slate-500">{completed}/{total}</div>
                                                </div>
                                                <ChevronRight className="text-slate-500 group-hover:text-violet-400 transition-colors" size={20} />
                                            </div>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-500"
                                                style={{ width: `${percent}%`, backgroundColor: section.color }}
                                            />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Motivation Section */}
                <div className="p-8 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-center">
                    <Award className="w-16 h-16 mx-auto mb-4 text-violet-400" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {overallPercent < 25 ? "You're just getting started!" :
                            overallPercent < 50 ? "Great progress! Keep it up!" :
                                overallPercent < 75 ? "Halfway there! Amazing work!" :
                                    overallPercent < 100 ? "Almost done! Final push!" :
                                        "🎉 Congratulations! You completed everything!"}
                    </h3>
                    <p className="text-slate-400 max-w-md mx-auto">
                        {overallPercent < 100
                            ? "Consistency is key. Complete at least one resource daily to build momentum."
                            : "You've mastered all the content. Time to apply your knowledge!"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProgressPage;
