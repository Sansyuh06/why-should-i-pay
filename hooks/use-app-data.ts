'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Topic, Problem, Quiz } from '@/lib/types';

// Unified app state and data management
interface AppData {
  topics: any[];
  problems: any[];
  quizzes: any[];
  learningPaths: any[];
  domains: any[];
  isLoading: boolean;
  error: string | null;
}

interface UseAppDataReturn extends AppData {
  getTopicById: (id: string) => any | undefined;
  getProblemById: (id: string) => any | undefined;
  getQuizById: (id: string) => any | undefined;
  getTopicsByDifficulty: (difficulty: string) => any[];
  getProblemsByDifficulty: (difficulty: string) => any[];
  searchContent: (query: string) => { topics: any[]; problems: any[]; quizzes: any[] };
  refreshData: () => Promise<void>;
}

export function useAppData(): UseAppDataReturn {
  const [data, setData] = useState<AppData>({
    topics: [],
    problems: [],
    quizzes: [],
    learningPaths: [],
    domains: [],
    isLoading: true,
    error: null,
  });

  const loadData = useCallback(async () => {
    try {
      setData(prev => ({ ...prev, isLoading: true, error: null }));

      // Load from both data sources
      const [courseContent, dataModule] = await Promise.all([
        import('@/lib/courseContent').catch(() => ({})),
        import('@/lib/data').catch(() => ({})),
      ]);

      // Merge topics from both sources
      const mergedTopics = [
        ...(courseContent.dsaTopics || []),
        ...(dataModule.dsaTopics || []),
        ...(dataModule.systemDesignTopics || []),
        ...(dataModule.oopTopics || []),
      ];

      // Extract all problems
      const allProblems = [
        ...(dataModule.sampleProblems || []),
        ...mergedTopics.flatMap((topic: any) => 
          (topic.problems || []).map((p: any) => ({
            ...p,
            topicId: topic.id,
            topicTitle: topic.title || topic.name,
          }))
        ),
      ];

      // Merge quizzes
      const mergedQuizzes = [
        ...(courseContent.quizzes || []),
        ...(dataModule.quizzes || []),
      ];

      setData({
        topics: mergedTopics,
        problems: allProblems,
        quizzes: mergedQuizzes,
        learningPaths: [
          ...(courseContent.learningPaths || []),
          ...(dataModule.learningRoadmaps || []),
        ],
        domains: dataModule.domains || [],
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error('[v0] Error loading app data:', error);
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to load data',
      }));
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const getTopicById = useCallback((id: string) => {
    return data.topics.find((t: any) => t.id === id);
  }, [data.topics]);

  const getProblemById = useCallback((id: string) => {
    return data.problems.find((p: any) => p.id === id);
  }, [data.problems]);

  const getQuizById = useCallback((id: string) => {
    return data.quizzes.find((q: any) => q.id === id);
  }, [data.quizzes]);

  const getTopicsByDifficulty = useCallback((difficulty: string) => {
    return data.topics.filter((t: any) => 
      t.difficulty?.toLowerCase() === difficulty.toLowerCase()
    );
  }, [data.topics]);

  const getProblemsByDifficulty = useCallback((difficulty: string) => {
    return data.problems.filter((p: any) => 
      p.difficulty?.toLowerCase() === difficulty.toLowerCase()
    );
  }, [data.problems]);

  const searchContent = useCallback((query: string) => {
    const lowerQuery = query.toLowerCase();
    return {
      topics: data.topics.filter((t: any) =>
        t.title?.toLowerCase().includes(lowerQuery) ||
        t.name?.toLowerCase().includes(lowerQuery) ||
        t.description?.toLowerCase().includes(lowerQuery)
      ),
      problems: data.problems.filter((p: any) =>
        p.title?.toLowerCase().includes(lowerQuery) ||
        p.description?.toLowerCase().includes(lowerQuery)
      ),
      quizzes: data.quizzes.filter((q: any) =>
        q.title?.toLowerCase().includes(lowerQuery) ||
        q.description?.toLowerCase().includes(lowerQuery)
      ),
    };
  }, [data]);

  return {
    ...data,
    getTopicById,
    getProblemById,
    getQuizById,
    getTopicsByDifficulty,
    getProblemsByDifficulty,
    searchContent,
    refreshData: loadData,
  };
}

// Export a simpler hook for just topics
export function useTopics() {
  const { topics, isLoading, error, getTopicById, getTopicsByDifficulty } = useAppData();
  return { topics, isLoading, error, getTopicById, getTopicsByDifficulty };
}

// Export a simpler hook for just problems
export function useProblems() {
  const { problems, isLoading, error, getProblemById, getProblemsByDifficulty } = useAppData();
  return { problems, isLoading, error, getProblemById, getProblemsByDifficulty };
}

// Export a simpler hook for just quizzes  
export function useQuizzes() {
  const { quizzes, isLoading, error, getQuizById } = useAppData();
  return { quizzes, isLoading, error, getQuizById };
}
