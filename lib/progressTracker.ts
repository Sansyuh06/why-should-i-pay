// PROGRESS TRACKING SYSTEM
// Uses localStorage for persistence without backend
// Tracks: completed problems, quiz scores, watched videos, streak

export interface UserProgress {
    completedProblems: string[];
    quizScores: Record<string, number>;
    watchedVideos: string[];
    completedTutorials: string[];
    bookmarks: string[];
    notes: Record<string, string>;
    streak: {
        current: number;
        longest: number;
        lastActiveDate: string;
    };
    stats: {
        totalProblemsCompleted: number;
        totalQuizzesTaken: number;
        totalVideoWatched: number;
        averageQuizScore: number;
    };
}

const STORAGE_KEY = 'why-should-i-pay-progress';

// Initialize empty progress
const getEmptyProgress = (): UserProgress => ({
    completedProblems: [],
    quizScores: {},
    watchedVideos: [],
    completedTutorials: [],
    bookmarks: [],
    notes: {},
    streak: {
        current: 0,
        longest: 0,
        lastActiveDate: '',
    },
    stats: {
        totalProblemsCompleted: 0,
        totalQuizzesTaken: 0,
        totalVideoWatched: 0,
        averageQuizScore: 0,
    },
});

// Load progress from localStorage
export function loadProgress(): UserProgress {
    if(typeof window === 'undefined') return getEmptyProgress();

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if(saved) {
            return JSON.parse(saved);
        }
    } catch(error) {
        console.error('Error loading progress:', error);
    }
    return getEmptyProgress();
}

// Save progress to localStorage
export function saveProgress(progress: UserProgress): void {
    if(typeof window === 'undefined') return;

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch(error) {
        console.error('Error saving progress:', error);
    }
}

// Update streak based on activity
function updateStreak(progress: UserProgress): UserProgress {
    const today = new Date().toISOString().split('T')[0];
    const lastActive = progress.streak.lastActiveDate;

    if(lastActive === today) {
        // Already active today
        return progress;
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if(lastActive === yesterday) {
        // Consecutive day - increase streak
        progress.streak.current += 1;
        progress.streak.longest = Math.max(progress.streak.longest, progress.streak.current);
    } else if(lastActive !== today) {
        // Streak broken - reset to 1
        progress.streak.current = 1;
    }

    progress.streak.lastActiveDate = today;
    return progress;
}

// ============================================
// PROBLEM TRACKING
// ============================================
export function markProblemComplete(problemId: string): UserProgress {
    const progress = loadProgress();

    if(!progress.completedProblems.includes(problemId)) {
        progress.completedProblems.push(problemId);
        progress.stats.totalProblemsCompleted = progress.completedProblems.length;
        updateStreak(progress);
        saveProgress(progress);
    }

    return progress;
}

export function markProblemIncomplete(problemId: string): UserProgress {
    const progress = loadProgress();
    progress.completedProblems = progress.completedProblems.filter(id => id !== problemId);
    progress.stats.totalProblemsCompleted = progress.completedProblems.length;
    saveProgress(progress);
    return progress;
}

export function isProblemCompleted(problemId: string): boolean {
    const progress = loadProgress();
    return progress.completedProblems.includes(problemId);
}

// ============================================
// QUIZ TRACKING
// ============================================
export function saveQuizScore(quizId: string, score: number): UserProgress {
    const progress = loadProgress();
    progress.quizScores[quizId] = score;
    progress.stats.totalQuizzesTaken = Object.keys(progress.quizScores).length;

    // Calculate average
    const scores = Object.values(progress.quizScores);
    progress.stats.averageQuizScore = Math.round(
        scores.reduce((a, b) => a + b, 0) / scores.length
    );

    updateStreak(progress);
    saveProgress(progress);
    return progress;
}

export function getQuizScore(quizId: string): number | null {
    const progress = loadProgress();
    return progress.quizScores[quizId] ?? null;
}

// ============================================
// VIDEO TRACKING
// ============================================
export function markVideoWatched(videoId: string): UserProgress {
    const progress = loadProgress();

    if(!progress.watchedVideos.includes(videoId)) {
        progress.watchedVideos.push(videoId);
        progress.stats.totalVideoWatched = progress.watchedVideos.length;
        updateStreak(progress);
        saveProgress(progress);
    }

    return progress;
}

export function isVideoWatched(videoId: string): boolean {
    const progress = loadProgress();
    return progress.watchedVideos.includes(videoId);
}

// ============================================
// TUTORIAL TRACKING
// ============================================
export function markTutorialComplete(tutorialId: string): UserProgress {
    const progress = loadProgress();

    if(!progress.completedTutorials.includes(tutorialId)) {
        progress.completedTutorials.push(tutorialId);
        updateStreak(progress);
        saveProgress(progress);
    }

    return progress;
}

export function isTutorialCompleted(tutorialId: string): boolean {
    const progress = loadProgress();
    return progress.completedTutorials.includes(tutorialId);
}

// ============================================
// BOOKMARKS
// ============================================
export function toggleBookmark(itemId: string): UserProgress {
    const progress = loadProgress();

    if(progress.bookmarks.includes(itemId)) {
        progress.bookmarks = progress.bookmarks.filter(id => id !== itemId);
    } else {
        progress.bookmarks.push(itemId);
    }

    saveProgress(progress);
    return progress;
}

export function isBookmarked(itemId: string): boolean {
    const progress = loadProgress();
    return progress.bookmarks.includes(itemId);
}

export function getBookmarks(): string[] {
    const progress = loadProgress();
    return progress.bookmarks;
}

// ============================================
// NOTES
// ============================================
export function saveNote(itemId: string, note: string): UserProgress {
    const progress = loadProgress();
    progress.notes[itemId] = note;
    saveProgress(progress);
    return progress;
}

export function getNote(itemId: string): string {
    const progress = loadProgress();
    return progress.notes[itemId] ?? '';
}

export function deleteNote(itemId: string): UserProgress {
    const progress = loadProgress();
    delete progress.notes[itemId];
    saveProgress(progress);
    return progress;
}

// ============================================
// STATS & STREAK
// ============================================
export function getStreak(): { current: number; longest: number } {
    const progress = loadProgress();
    return {
        current: progress.streak.current,
        longest: progress.streak.longest,
    };
}

export function getStats() {
    const progress = loadProgress();
    return {
        ...progress.stats,
        streak: progress.streak.current,
        longestStreak: progress.streak.longest,
        bookmarksCount: progress.bookmarks.length,
        notesCount: Object.keys(progress.notes).length,
    };
}

// ============================================
// RESET & EXPORT
// ============================================
export function resetProgress(): void {
    if(typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
}

export function exportProgress(): string {
    const progress = loadProgress();
    return JSON.stringify(progress, null, 2);
}

export function importProgress(json: string): boolean {
    try {
        const progress = JSON.parse(json) as UserProgress;
        saveProgress(progress);
        return true;
    } catch {
        return false;
    }
}
