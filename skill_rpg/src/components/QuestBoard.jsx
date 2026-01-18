
import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/useGameStore';
import { PROFESSIONS } from '../data/professions';
import { Lock, CheckCircle, ArrowRight } from 'lucide-react';

export const QuestBoard = () => {
    const { activeCharacterId, characters, unlockSkill } = useGameStore();
    const char = characters[activeCharacterId];
    const profession = PROFESSIONS[activeCharacterId?.toUpperCase()];

    if (!char || !profession) return null;

    const handleLearn = (skillId) => {
        unlockSkill(skillId);
    };

    const getThemeColor = () => {
        if (profession.themeColor === 'emerald') return 'var(--accent-emerald)';
        if (profession.themeColor === 'cyan') return 'var(--accent-cyan)';
        if (profession.themeColor === 'violet') return 'var(--accent-violet)';
        return '#fff';
    };

    const themeColor = getThemeColor();

    return (
        <div className="h-full flex flex-col p-6" style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Quest Log <span style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 'normal' }}>(Skill Tree)</span>
                </h2>
                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                    Skills Mastered: <span style={{ color: 'white', fontWeight: 'bold' }}>{char.unlockedSkills.length}</span> / {profession.skills.length}
                </div>
            </div>

            <div className="custom-scrollbar" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', overflowY: 'auto', paddingRight: '8px' }}>
                {profession.skills.map((skill, index) => {
                    const isUnlocked = char.unlockedSkills.includes(skill.id);
                    const Icon = skill.icon;
                    const isNext = !isUnlocked && (index === 0 || char.unlockedSkills.includes(profession.skills[index - 1].id));
                    const isLocked = !isUnlocked && !isNext;

                    // Inline styles for dynamic coloring based on state
                    const nodeStyle = {
                        borderColor: isUnlocked ? themeColor : isLocked ? '#1e293b' : '#475569',
                        backgroundColor: isUnlocked ? `rgba(var(--theme-color-rgb), 0.1)` : isLocked ? 'rgba(15, 23, 42, 0.8)' : 'rgba(30, 41, 59, 1)', // Fallback approximation
                        opacity: isLocked ? 0.6 : 1,
                        cursor: isLocked || isUnlocked ? 'default' : 'pointer'
                    };

                    // Hacky way to inject the theme color into the style tag for this element specifically if needed, 
                    // or just use the variable approach.
                    // Since I can't easily set --theme-color inline on the node without a wrapper, I'll rely on the class logic or distinct styles.<bos>

                    return (
                        <motion.div
                            key={skill.id}
                            onClick={() => !isUnlocked && !isLocked && handleLearn(skill.id)}
                            whileHover={!isLocked && !isUnlocked ? { scale: 1.02 } : {}}
                            whileTap={!isLocked && !isUnlocked ? { scale: 0.98 } : {}}
                            className={`skill-node ${isUnlocked ? 'unlocked' : ''} ${isLocked ? 'locked' : ''}`}
                            style={{
                                '--theme-color': themeColor
                            }}
                        >
                            {/* Connecting Line */}
                            {index < profession.skills.length - 1 && (
                                <div style={{
                                    position: 'absolute', left: '39px', top: '100%', height: '16px', width: '2px', zIndex: 0,
                                    background: char.unlockedSkills.includes(skill.id) ? themeColor : '#1e293b'
                                }} />
                            )}

                            <div style={{
                                width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', zIndex: 10,
                                backgroundColor: isUnlocked ? themeColor : isLocked ? '#1e293b' : '#334155',
                                borderColor: isUnlocked ? themeColor : isLocked ? '#334155' : '#64748b',
                                color: isUnlocked ? '#fff' : isLocked ? '#475569' : '#cbd5e1'
                            }}>
                                {isUnlocked ? <CheckCircle size={24} /> : isLocked ? <Lock size={20} /> : <Icon size={24} />}
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', color: isUnlocked ? 'white' : isLocked ? '#64748b' : '#e2e8f0' }}>
                                        {skill.label}
                                    </h3>
                                    {/* XP Badge */}
                                    <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', background: '#0f172a', padding: '4px 8px', borderRadius: '4px', color: '#fbbf24', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                                        +{skill.xp} XP
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{skill.description}</p>
                            </div>

                            {!isUnlocked && !isLocked && (
                                <div style={{ position: 'absolute', right: '16px' }} className="animate-pulse">
                                    <div style={{ padding: '4px 12px', borderRadius: '9999px', background: themeColor, color: 'white', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Learn
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
