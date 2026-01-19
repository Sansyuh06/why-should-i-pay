// Adapter registry and exports
import { SiteAdapter } from '../types';
import { LeetCodeAdapter } from './leetcode';
import { CodeChefAdapter } from './codechef';
import { IndiaBixAdapter } from './indiabix';

// Registry of all available adapters
const adapters: Map<string, SiteAdapter> = new Map();

// Register built-in adapters
adapters.set('leetcode', new LeetCodeAdapter());
adapters.set('codechef', new CodeChefAdapter());
adapters.set('indiabix', new IndiaBixAdapter());

/**
 * Get adapter by name
 */
export function getAdapter(name: string): SiteAdapter | undefined {
    return adapters.get(name.toLowerCase());
}

/**
 * Get all registered adapters
 */
export function getAllAdapters(): SiteAdapter[] {
    return Array.from(adapters.values());
}

/**
 * Register a new adapter
 */
export function registerAdapter(adapter: SiteAdapter): void {
    adapters.set(adapter.name.toLowerCase(), adapter);
}

/**
 * Check if adapter exists
 */
export function hasAdapter(name: string): boolean {
    return adapters.has(name.toLowerCase());
}

// Export individual adapters
export { LeetCodeAdapter } from './leetcode';
export { CodeChefAdapter } from './codechef';
export { IndiaBixAdapter } from './indiabix';
