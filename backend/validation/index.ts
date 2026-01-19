// Data validation pipeline
import { RawProblem, ProcessedProblem, AptitudeQuestion } from '../types';
import { MIN_CONTENT_LENGTH, NOISE_KEYWORDS } from '../config/constants';
import crypto from 'crypto';

export interface ValidationResult {
    valid: boolean;
    errors: string[];
    warnings: string[];
}

export interface AnomalyReport {
    totalItems: number;
    validItems: number;
    duplicates: number;
    anomalies: AnomalyItem[];
}

export interface AnomalyItem {
    item: RawProblem;
    reason: string;
}

export class DataValidator {
    private existingHashes: Set<string> = new Set();

    /**
     * Load existing hashes for duplicate detection
     */
    loadExistingHashes(problems: ProcessedProblem[]): void {
        this.existingHashes.clear();
        for(const problem of problems) {
            if(problem.hash) {
                this.existingHashes.add(problem.hash);
            }
        }
    }

    /**
     * Validate completeness of a raw problem
     */
    validateCompleteness(data: RawProblem): ValidationResult {
        const errors: string[] = [];
        const warnings: string[] = [];

        // Required fields
        if(!data.title || data.title.trim().length === 0) {
            errors.push('Missing required field: title');
        }

        if(!data.source || data.source.trim().length === 0) {
            errors.push('Missing required field: source');
        }

        if(!data.sourceUrl || data.sourceUrl.trim().length === 0) {
            errors.push('Missing required field: sourceUrl');
        }

        // Validate URL format
        if(data.sourceUrl) {
            try {
                new URL(data.sourceUrl);
            } catch {
                errors.push('Invalid URL format for sourceUrl');
            }
        }

        // Optional but recommended fields
        if(!data.difficulty) {
            warnings.push('Missing recommended field: difficulty');
        }

        if(!data.description || data.description.length < MIN_CONTENT_LENGTH) {
            warnings.push('Description is missing or too short');
        }

        if(!data.categories || data.categories.length === 0) {
            warnings.push('No categories assigned');
        }

        return {
            valid: errors.length === 0,
            errors,
            warnings,
        };
    }

    /**
     * Check if a problem is a duplicate
     */
    isDuplicate(data: RawProblem): boolean {
        const hash = this.generateHash(data);
        return this.existingHashes.has(hash);
    }

    /**
     * Check if content is relevant (not noise)
     */
    isRelevant(text: string): boolean {
        if(!text || text.length < MIN_CONTENT_LENGTH) {
            return false;
        }

        const lowerText = text.toLowerCase();

        // Check for noise keywords
        for(const keyword of NOISE_KEYWORDS) {
            if(lowerText.includes(keyword.toLowerCase())) {
                return false;
            }
        }

        // Check if it looks like a problem title (not just UI text)
        const isUIText = /^(show|hide|expand|collapse|more|less|next|prev|back|login|sign|register)/i.test(text);
        if(isUIText) {
            return false;
        }

        return true;
    }

    /**
     * Detect anomalies in a batch of problems
     */
    detectAnomalies(batch: RawProblem[]): AnomalyReport {
        const report: AnomalyReport = {
            totalItems: batch.length,
            validItems: 0,
            duplicates: 0,
            anomalies: [],
        };

        const seenHashes = new Set<string>();

        for(const item of batch) {
            const hash = this.generateHash(item);

            // Check for duplicates within batch
            if(seenHashes.has(hash)) {
                report.duplicates++;
                report.anomalies.push({
                    item,
                    reason: 'Duplicate within batch',
                });
                continue;
            }

            // Check for duplicates against existing data
            if(this.existingHashes.has(hash)) {
                report.duplicates++;
                report.anomalies.push({
                    item,
                    reason: 'Duplicate of existing item',
                });
                continue;
            }

            // Validate completeness
            const validation = this.validateCompleteness(item);
            if(!validation.valid) {
                report.anomalies.push({
                    item,
                    reason: `Validation failed: ${validation.errors.join(', ')}`,
                });
                continue;
            }

            // Check relevance
            if(item.title && !this.isRelevant(item.title)) {
                report.anomalies.push({
                    item,
                    reason: 'Title appears to be noise/UI text',
                });
                continue;
            }

            seenHashes.add(hash);
            report.validItems++;
        }

        return report;
    }

    /**
     * Generate a unique hash for a problem
     */
    generateHash(data: RawProblem): string {
        const content = [
            data.title?.toLowerCase().trim(),
            data.source?.toLowerCase().trim(),
            data.difficulty?.toLowerCase().trim(),
        ].filter(Boolean).join('|');

        return crypto.createHash('sha256').update(content).digest('hex').substring(0, 16);
    }

    /**
     * Add a hash to the existing set (for newly processed items)
     */
    addHash(hash: string): void {
        this.existingHashes.add(hash);
    }

    /**
     * Get count of existing hashes
     */
    getHashCount(): number {
        return this.existingHashes.size;
    }
}

// Singleton instance
export const dataValidator = new DataValidator();
