// Problem schema types

export interface RawProblem {
    id?: string;
    title: string;
    description?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    categories?: string[];
    source: string;
    sourceUrl: string;
    examples?: ProblemExample[];
    constraints?: string[];
    hints?: string[];
    companies?: string[];
    acceptance?: number;
    rawHtml?: string;
}

export interface ProblemExample {
    input: string;
    output: string;
    explanation?: string;
}

export interface ProcessedProblem extends RawProblem {
    id: string;
    hash: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProblemCatalog {
    version: string;
    lastUpdated: Date;
    sources: string[];
    problems: ProcessedProblem[];
    stats: CatalogStats;
}

export interface CatalogStats {
    total: number;
    byDifficulty: Record<string, number>;
    bySource: Record<string, number>;
    byCategory: Record<string, number>;
}

export interface AptitudeQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
    category: 'quantitative' | 'logical' | 'verbal';
    source: string;
    sourceUrl: string;
}
