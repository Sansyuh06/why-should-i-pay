
import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/useGameStore';
import { PROFESSIONS } from '../data/professions';
import { Shield, Sparkles } from 'lucide-react';

export const HeroDisplay = () => {
    const { activeCharacterId, characters } = useGameStore();
    const char = characters[activeCharacterId];
    const profession = PROFESSIONS[activeCharacterId?.toUpperCase()];

    if (!char || !profession) return null;

    // Calculate XP Percentage
    const BASE_XP = 100;
    const XP_MULTIPLIER = 1.5;
    const xpToNextLevel = Math.floor(char.level * BASE_XP * XP_MULTIPLIER);
    const xpPercentage = (char.xp / xpToNextLevel) * 100;

    const currentTitleObj = [...profession.titles]
        .reverse()
        .find(t => char.unlockedTitles.includes(t.id));

    const currentTitle = currentTitleObj ? currentTitleObj.label : 'Novice';

    const getThemeColor = () => {
        // Basic mapping, assuming CSS vars are set
        if (profession.themeColor === 'emerald') return 'var(--accent-emerald)';
        if (profession.themeColor === 'cyan') return 'var(--accent-cyan)';
        if (profession.themeColor === 'violet') return 'var(--accent-violet)';
        if (profession.themeColor === 'amber') return '#f59e0b'; // Fallback
        return '#fff';
    };

    const themeColor = getThemeColor();

    return (
        <div className="h-full flex flex-col">
            <div className="cyber-card" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none' }}>
                {/* Avatar Circle */}
                <div style={{ position: 'relative', width: '256px', height: '256px', marginBottom: '32px' }}>
                    {/* Spinning Rings */}
                    <div className="animate-spin" style={{ position: 'absolute', inset: 0, border: `4px solid ${themeColor}`, opacity: 0.2, borderRadius: '50%' }} />
                    <div className="animate-spin-reverse" style={{ position: 'absolute', inset: '8px', border: `2px dashed ${themeColor}`, opacity: 0.3, borderRadius: '50%' }} />

                    {/* Avatar Image */}
                    <div style={{ position: 'absolute', inset: '16px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #334155', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {profession.avatarImage ? (
                            <img src={profession.avatarImage} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <span className="animate-bounce" style={{ fontSize: '4rem' }}>?</span>
                        )}
                    </div>

                    {/* Level Badge */}
                    <div style={{ position: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)', background: '#0f172a', border: '2px solid #f59e0b', color: '#f59e0b', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem', boxShadow: '0 0 15px rgba(245,158,11,0.5)', zIndex: 10 }}>
                        {char.level}
                    </div>
                </div>

                {/* Character Info */}
                <div className="text-center w-full" style={{ maxWidth: '28rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: themeColor, fontWeight: 'bold' }}>{profession.heroName}</h2>
                    <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '8px', textShadow: '0 0 10px currentColor' }}>{profession.rpgClass}</h1>

                    <div style={{ fontSize: '1.25rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <Sparkles size={20} />
                        {currentTitle}
                    </div>

                    {/* XP Bar */}
                    <div style={{ position: 'relative', height: '24px', background: '#1e293b', borderRadius: '9999px', overflow: 'hidden', border: '1px solid #334155', marginBottom: '8px' }}>
                        <motion.div
                            style={{
                                position: 'absolute', top: 0, left: 0, bottom: 0,
                                background: `linear-gradient(to right, ${themeColor}, rgba(255,255,255,0.2))`,
                                boxShadow: `0 0 10px ${themeColor}`
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${xpPercentage}%` }}
                            transition={{ type: 'spring', damping: 20 }}
                        />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px black' }}>
                            {char.xp} / {xpToNextLevel} XP
                        </div>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Experience to next level</p>
                </div>

                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '32px', width: '100%' }}>
                    {Object.entries(profession.stats).map(([stat, val]) => (
                        <div key={stat} style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '12px', borderRadius: '4px', border: '1px solid #1e293b', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>{stat}</div>
                            <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: themeColor }}>
                                {val + Math.floor(char.level / 2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
