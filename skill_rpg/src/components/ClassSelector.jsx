
import React from 'react';
import { motion } from 'framer-motion';
import { PROFESSIONS } from '../data/professions';
import { useGameStore } from '../store/useGameStore';
import { ChevronRight, Shield, Terminal, Zap, Code, Search, Layout, Palette, Server, Cloud, BarChart } from 'lucide-react';

export const ClassSelector = ({ onSelect }) => {
    const { unlockCharacter, activateCharacter, characters } = useGameStore();

    const handleSelect = (profId) => {
        if (!characters[profId]) {
            unlockCharacter(profId);
        }
        activateCharacter(profId);
        if (onSelect) onSelect();
    };

    const getIcon = (prof) => {
        // If avatar image exists, return simple placeholder or just use CSS to show it
        // But here we return the Lucide icon as fallback or overlay
        const id = prof.id;
        if (prof.avatarImage) return null; // We will handle image separately

        // Fallbacks
        switch (id) {
            case 'python_specialist': return <Terminal size={48} className="mb-4" />;
            case 'frontend_dev': return <Zap size={48} className="mb-4" />;
            case 'backend_dev': return <Shield size={48} className="mb-4" />;
            case 'csharp_master': return <Code size={48} className="mb-4" />;
            case 'sdet_specialist': return <Search size={48} className="mb-4" />;
            case 'graphic_designer': return <Palette size={48} className="mb-4" />;
            case 'devops_engineer': return <Server size={48} className="mb-4" />;
            case 'data_scientist': return <BarChart size={48} className="mb-4" />;
            default: return <Terminal size={48} className="mb-4" />;
        }
    };

    const getThemeClass = (color) => {
        if (color === 'emerald') return 'theme-emerald';
        if (color === 'cyan') return 'theme-cyan';
        if (color === 'violet') return 'theme-violet';
        if (color === 'amber') return 'theme-amber'; // Need to add this to index.css
        return 'theme-emerald'; // default
    };

    return (
        <div className="flex flex-col items-center justify-center" style={{ minHeight: '100vh', padding: '32px', background: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)' }}></div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center relative"
                style={{ marginBottom: '48px', zIndex: 10 }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(to right, #22d3ee, #34d399)', WebkitBackgroundClip: 'text', color: 'transparent', marginBottom: '16px' }}>
                    CHOOSE YOUR ORIGIN
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
                    Select your specialized path to begin the simulation.
                </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', maxWidth: '1400px', width: '100%', position: 'relative', zIndex: 10 }}>
                {Object.values(PROFESSIONS).map((prof, index) => (
                    <motion.div
                        key={prof.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`cyber-card group ${getThemeClass(prof.themeColor)}`}
                        onClick={() => handleSelect(prof.id)}
                        style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                    >
                        {/* Avatar / Icon Area */}
                        <div style={{ marginBottom: '16px', position: 'relative', width: '120px', height: '120px' }}>
                            {prof.avatarImage ? (
                                <img
                                    src={prof.avatarImage}
                                    alt={prof.heroName}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--theme-color)', boxShadow: '0 0 15px var(--theme-color)' }}
                                    className="group-hover:scale-110 transition-transform duration-300"
                                />
                            ) : (
                                <div className="text-theme group-hover:scale-110 transition-transform duration-300" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--theme-color)', borderRadius: '50%' }}>
                                    {getIcon(prof)}
                                </div>
                            )}
                        </div>

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>{prof.label}</h2>
                        <div className="text-theme" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '4px' }}>
                            &ldquo;{prof.heroName}&rdquo;
                        </div>
                        <div className="text-theme" style={{ fontSize: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: '16px' }}>
                            Class: {prof.rpgClass}
                        </div>

                        <p style={{ color: '#94a3b8', marginBottom: '24px', lineHeight: '1.5', fontSize: '0.875rem' }}>
                            {prof.description}
                        </p>

                        <div style={{ width: '100%', marginTop: 'auto' }}>
                            <div style={{ borderTop: '1px solid #334155', paddingTop: '16px' }}>
                                <button className={`cyber-btn btn-theme`}>
                                    Initialize <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
