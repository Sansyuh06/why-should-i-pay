// JSON storage with incremental updates
import * as fs from 'fs';
import * as path from 'path';
import { ProblemCatalog, ProcessedProblem, CatalogStats, RawProblem } from '../types';
import { processProblem } from '../processing/cleaner';
import { dataValidator } from '../validation';

export class JsonStore {
    private basePath: string;

    constructor(basePath: string) {
        this.basePath = basePath;
        this.ensureDirectory();
    }

    private ensureDirectory(): void {
        if(!fs.existsSync(this.basePath)) {
            fs.mkdirSync(this.basePath, { recursive: true });
        }
    }

    /**
     * Load existing catalog from JSON
     */
    async load(filename: string = 'problems.json'): Promise<ProblemCatalog> {
        const filepath = path.join(this.basePath, filename);

        if(!fs.existsSync(filepath)) {
            return this.createEmptyCatalog();
        }

        try {
            const content = fs.readFileSync(filepath, 'utf-8');
            return JSON.parse(content) as ProblemCatalog;
        } catch(error) {
            console.error(`Failed to load catalog from ${filepath}:`, error);
            return this.createEmptyCatalog();
        }
    }

    /**
     * Merge new problems into existing catalog (upsert)
     */
    merge(existing: ProblemCatalog, incoming: RawProblem[]): ProblemCatalog {
        // Load existing hashes for duplicate detection
        dataValidator.loadExistingHashes(existing.problems);

        const problemMap = new Map<string, ProcessedProblem>();

        // Add existing problems to map
        for(const problem of existing.problems) {
            problemMap.set(problem.hash, problem);
        }

        // Process and merge incoming problems
        let newCount = 0;
        let updatedCount = 0;

        for(const raw of incoming) {
            const processed = processProblem(raw);

            if(problemMap.has(processed.hash)) {
                // Update existing problem
                const existing = problemMap.get(processed.hash)!;
                problemMap.set(processed.hash, {
                    ...processed,
                    createdAt: existing.createdAt,
                    updatedAt: new Date(),
                });
                updatedCount++;
            } else {
                // Add new problem
                problemMap.set(processed.hash, processed);
                newCount++;
            }
        }

        console.log(`Merge complete: ${newCount} new, ${updatedCount} updated`);

        // Build updated catalog
        const problems = Array.from(problemMap.values());

        return {
            version: '2.0.0',
            lastUpdated: new Date(),
            sources: this.extractSources(problems),
            problems,
            stats: this.calculateStats(problems),
        };
    }

    /**
     * Save catalog to JSON (atomic write with backup)
     */
    async save(catalog: ProblemCatalog, filename: string = 'problems.json'): Promise<void> {
        const filepath = path.join(this.basePath, filename);
        const backupPath = path.join(this.basePath, `${filename}.backup`);
        const tempPath = path.join(this.basePath, `${filename}.tmp`);

        // Create backup of existing file
        if(fs.existsSync(filepath)) {
            fs.copyFileSync(filepath, backupPath);
        }

        // Write to temp file first
        const content = JSON.stringify(catalog, null, 2);
        fs.writeFileSync(tempPath, content, 'utf-8');

        // Atomic rename
        fs.renameSync(tempPath, filepath);

        console.log(`Saved ${catalog.problems.length} problems to ${filepath}`);
    }

    /**
     * Generate TypeScript exports from catalog
     */
    generateTsExports(catalog: ProblemCatalog, filename: string = 'problemCatalog.ts'): string {
        const filepath = path.join(this.basePath, '..', 'lib', filename);

        const content = `// AUTO-GENERATED: Problem catalog from crawled content
// Generated on: ${new Date().toISOString()}
// Total problems: ${catalog.problems.length}

import { ProcessedProblem, ProblemCatalog } from './types';

export const problemCatalog: ProblemCatalog = ${JSON.stringify(catalog, null, 2)};

export const problems: ProcessedProblem[] = problemCatalog.problems;

export const problemsByDifficulty = {
  easy: problems.filter(p => p.difficulty === 'easy'),
  medium: problems.filter(p => p.difficulty === 'medium'),
  hard: problems.filter(p => p.difficulty === 'hard'),
};

export const problemsBySource = problems.reduce((acc, p) => {
  if (!acc[p.source]) acc[p.source] = [];
  acc[p.source].push(p);
  return acc;
}, {} as Record<string, ProcessedProblem[]>);

export function getProblemById(id: string): ProcessedProblem | undefined {
  return problems.find(p => p.id === id);
}

export function searchProblems(query: string): ProcessedProblem[] {
  const lower = query.toLowerCase();
  return problems.filter(p => 
    p.title.toLowerCase().includes(lower) ||
    p.description?.toLowerCase().includes(lower) ||
    p.categories?.some(c => c.includes(lower))
  );
}
`;

        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`Generated TypeScript exports to ${filepath}`);

        return content;
    }

    private createEmptyCatalog(): ProblemCatalog {
        return {
            version: '2.0.0',
            lastUpdated: new Date(),
            sources: [],
            problems: [],
            stats: {
                total: 0,
                byDifficulty: {},
                bySource: {},
                byCategory: {},
            },
        };
    }

    private extractSources(problems: ProcessedProblem[]): string[] {
        const sources = new Set<string>();
        for(const problem of problems) {
            sources.add(problem.source);
        }
        return Array.from(sources).sort();
    }

    private calculateStats(problems: ProcessedProblem[]): CatalogStats {
        const stats: CatalogStats = {
            total: problems.length,
            byDifficulty: {},
            bySource: {},
            byCategory: {},
        };

        for(const problem of problems) {
            // Count by difficulty
            if(problem.difficulty) {
                stats.byDifficulty[problem.difficulty] =
                    (stats.byDifficulty[problem.difficulty] || 0) + 1;
            }

            // Count by source
            stats.bySource[problem.source] =
                (stats.bySource[problem.source] || 0) + 1;

            // Count by category
            for(const category of problem.categories || []) {
                stats.byCategory[category] =
                    (stats.byCategory[category] || 0) + 1;
            }
        }

        return stats;
    }
}
