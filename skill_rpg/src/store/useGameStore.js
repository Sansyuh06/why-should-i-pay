
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PROFESSIONS } from '../data/professions';

const BASE_XP = 100;
const XP_MULTIPLIER = 1.5;

export const useGameStore = create(
    persist(
        (set, get) => ({
            activeCharacterId: null, // 'python_specialist' etc.
            characters: {}, // { python_specialist: { level: 1, xp: 0, unlockedSkills: [], unlockedTitles: [] } }

            // Actions
            activateCharacter: (professionId) => set({ activeCharacterId: professionId }),

            unlockCharacter: (professionId) => set((state) => {
                if (state.characters[professionId]) return {}; // Already exists
                return {
                    characters: {
                        ...state.characters,
                        [professionId]: {
                            level: 1,
                            xp: 0,
                            unlockedSkills: [],
                            unlockedTitles: ['script_kiddie', 'div_aligner', 'db_novice'] // Grant first title
                        }
                    }
                };
            }),

            gainXP: (amount) => set((state) => {
                const charId = state.activeCharacterId;
                if (!charId) return {};

                const char = state.characters[charId];
                let newXp = char.xp + amount;
                let newLevel = char.level;
                let leveledUp = false;

                // Simple level curve: Level * BASE_XP * Multiplier
                const xpToNextLevel = Math.floor(newLevel * BASE_XP * XP_MULTIPLIER);

                if (newXp >= xpToNextLevel) {
                    newXp -= xpToNextLevel;
                    newLevel++;
                    leveledUp = true;
                }

                return {
                    characters: {
                        ...state.characters,
                        [charId]: {
                            ...char,
                            xp: newXp,
                            level: newLevel,
                        }
                    }
                };
            }),

            unlockSkill: (skillId) => set((state) => {
                const charId = state.activeCharacterId;
                if (!charId) return {};

                const char = state.characters[charId];
                if (char.unlockedSkills.includes(skillId)) return {};

                // Find skill XP value to add
                const profession = PROFESSIONS[charId.toUpperCase()];
                const skill = profession.skills.find(s => s.id === skillId);

                // Trigger XP gain separately (need to call the action, but inside setState we can just merge logi or call it after. 
                // Best approach in zustand is to call get().gainXP(amount) but we need to update state first for the skill)

                // We will just do it in one go for simplicity or separate
                const xpAmount = skill ? skill.xp : 0;

                // Recalculate level with new XP
                let newXp = char.xp + xpAmount;
                let newLevel = char.level;
                const xpToNextLevel = Math.floor(newLevel * BASE_XP * XP_MULTIPLIER);

                if (newXp >= xpToNextLevel) {
                    newXp -= xpToNextLevel;
                    newLevel++;
                }

                return {
                    characters: {
                        ...state.characters,
                        [charId]: {
                            ...char,
                            unlockedSkills: [...char.unlockedSkills, skillId],
                            xp: newXp,
                            level: newLevel
                        }
                    }
                };
            }),

            resetProgress: () => set({ characters: {}, activeCharacterId: null }),
        }),
        {
            name: 'skill-rpg-storage',
        }
    )
);
