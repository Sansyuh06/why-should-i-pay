'use client';

// React Hook for Progress Tracking
// Use this in components to access and update user progress

import { useState, useEffect, useCallback } from 'react';
import {
    loadProgress,
    markProblemComplete,
    markProblemIncomplete,
    isProblemCompleted,
    saveQuizScore,
    getQuizScore,
    markVideoWatched,
    isVideoWatched,
    markTutorialComplete,
    isTutorialCompleted,
    toggleBookmark,
    isBookmarked,
    getBookmarks,
    saveNote,
    getNote,
    deleteNote,
    getStreak,
    getStats,
    resetProgress,
    UserProgress,
} from '@/lib/progressTracker';

export function useProgress() {
    const [progress, setProgress] = useState<UserProgress | null>(null);
    const [loading, setLoading] = useState(true);

    // Load progress on mount
    useEffect(() => {
        const loaded = loadProgress();
        setProgress(loaded);
        setLoading(false);
    }, []);

    // Refresh progress from storage
    const refresh = useCallback(() => {
        const loaded = loadProgress();
        setProgress(loaded);
    }, []);

    // Problem tracking
    const completeProblem = useCallback((problemId: string) => {
        const updated = markProblemComplete(problemId);
        setProgress(updated);
        return updated;
    }, []);

    const uncompleteProblem = useCallback((problemId: string) => {
        const updated = markProblemIncomplete(problemId);
        setProgress(updated);
        return updated;
    }, []);

    const checkProblemCompleted = useCallback((problemId: string) => {
        return isProblemCompleted(problemId);
    }, []);

    // Quiz tracking
    const submitQuizScore = useCallback((quizId: string, score: number) => {
        const updated = saveQuizScore(quizId, score);
        setProgress(updated);
        return updated;
    }, []);

    const getQuizResult = useCallback((quizId: string) => {
        return getQuizScore(quizId);
    }, []);

    // Video tracking
    const watchVideo = useCallback((videoId: string) => {
        const updated = markVideoWatched(videoId);
        setProgress(updated);
        return updated;
    }, []);

    const checkVideoWatched = useCallback((videoId: string) => {
        return isVideoWatched(videoId);
    }, []);

    // Tutorial tracking
    const completeTutorial = useCallback((tutorialId: string) => {
        const updated = markTutorialComplete(tutorialId);
        setProgress(updated);
        return updated;
    }, []);

    const checkTutorialCompleted = useCallback((tutorialId: string) => {
        return isTutorialCompleted(tutorialId);
    }, []);

    // Bookmarks
    const bookmark = useCallback((itemId: string) => {
        const updated = toggleBookmark(itemId);
        setProgress(updated);
        return updated;
    }, []);

    const checkBookmarked = useCallback((itemId: string) => {
        return isBookmarked(itemId);
    }, []);

    const getAllBookmarks = useCallback(() => {
        return getBookmarks();
    }, []);

    // Notes
    const addNote = useCallback((itemId: string, note: string) => {
        const updated = saveNote(itemId, note);
        setProgress(updated);
        return updated;
    }, []);

    const getNoteContent = useCallback((itemId: string) => {
        return getNote(itemId);
    }, []);

    const removeNote = useCallback((itemId: string) => {
        const updated = deleteNote(itemId);
        setProgress(updated);
        return updated;
    }, []);

    // Stats
    const getCurrentStreak = useCallback(() => {
        return getStreak();
    }, []);

    const getAllStats = useCallback(() => {
        return getStats();
    }, []);

    // Reset
    const reset = useCallback(() => {
        resetProgress();
        setProgress(loadProgress());
    }, []);

    return {
        progress,
        loading,
        refresh,
        // Problems
        completeProblem,
        uncompleteProblem,
        checkProblemCompleted,
        // Quizzes
        submitQuizScore,
        getQuizResult,
        // Videos
        watchVideo,
        checkVideoWatched,
        // Tutorials
        completeTutorial,
        checkTutorialCompleted,
        // Bookmarks
        bookmark,
        checkBookmarked,
        getAllBookmarks,
        // Notes
        addNote,
        getNoteContent,
        removeNote,
        // Stats
        getCurrentStreak,
        getAllStats,
        // Reset
        reset,
    };
}

// Simple hook for just stats display
export function useProgressStats() {
    const [stats, setStats] = useState({
        totalProblemsCompleted: 0,
        totalQuizzesTaken: 0,
        totalVideoWatched: 0,
        averageQuizScore: 0,
        streak: 0,
        longestStreak: 0,
        bookmarksCount: 0,
        notesCount: 0,
    });

    useEffect(() => {
        setStats(getStats());
    }, []);

    return stats;
}
