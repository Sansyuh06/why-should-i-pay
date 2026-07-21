// Server-only utilities for reading company CSV data from the filesystem
// This file should only be imported in server components / generateStaticParams
import fs from 'fs';
import path from 'path';

interface CompanyProblem {
    link: string;
    name: string;
    frequency: number;
}

export interface CompanyData {
    slug: string;
    name: string;
    problemCount: number;
    problems: CompanyProblem[];
}

// Top companies mapping: [display name, csv filename stem]
const TOP_COMPANIES: [string, string][] = [
    ['Google', 'Google'],
    ['Amazon', 'Amazon'],
    ['Meta (Facebook)', 'Facebook'],
    ['Microsoft', 'Microsoft'],
    ['Apple', 'Apple'],
    ['Bloomberg', 'Bloomberg'],
    ['Adobe', 'Adobe'],
    ['Uber', 'Uber'],
    ['Goldman Sachs', 'Goldman Sachs'],
    ['LinkedIn', 'LinkedIn'],
    ['Oracle', 'Oracle'],
    ['Salesforce', 'Salesforce'],
    ['ByteDance', 'ByteDance'],
    ['TikTok', 'tiktok'],
    ['Snapchat', 'Snapchat'],
    ['Twitter', 'Twitter'],
    ['Netflix', 'Netflix'],
    ['Nvidia', 'Nvidia'],
    ['Cisco', 'Cisco'],
    ['VMware', 'VMware'],
    ['Walmart', 'Walmart Global Tech'],
    ['Spotify', 'Spotify'],
    ['DoorDash', 'DoorDash'],
    ['Intuit', 'Intuit'],
    ['Yahoo', 'Yahoo'],
    ['Flipkart', 'Flipkart'],
    ['Expedia', 'Expedia'],
    ['PayPal', 'Paypal'],
    ['Visa', 'Visa'],
    ['Samsung', 'Samsung'],
    ['Tesla', 'Tesla'],
    ['Lyft', 'Lyft'],
    ['Robinhood', 'Robinhood'],
    ['JPMorgan', 'JPMorgan'],
    ['Morgan Stanley', 'Morgan Stanley'],
    ['Infosys', 'Infosys'],
    ['TCS', 'tcs'],
    ['Zoho', 'Zoho'],
    ['Swiggy', 'Swiggy'],
    ['Airbnb', 'Airbnb'],
];

function slugify(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function parseCSV(csvContent: string): CompanyProblem[] {
    const lines = csvContent.trim().split('\n');
    if (lines.length <= 1) return [];

    return lines.slice(1).map(line => {
        const firstComma = line.indexOf(',');
        const lastComma = line.lastIndexOf(',');
        if (firstComma === -1 || lastComma === firstComma) return null;

        const link = line.substring(0, firstComma).trim();
        const name = line.substring(firstComma + 1, lastComma).trim();
        const freq = parseInt(line.substring(lastComma + 1).trim(), 10) || 1;

        return { link, name, frequency: freq };
    }).filter(Boolean) as CompanyProblem[];
}

export async function getCompanyData(companySlug: string): Promise<CompanyData | null> {
    const entry = TOP_COMPANIES.find(([name]) => slugify(name) === companySlug);
    if (!entry) return null;

    const [displayName, csvStem] = entry;

    try {
        const csvPath = path.join(process.cwd(), 'addi', 'leetcode-company-wise-problems-2022-main', 'companies', `${csvStem}.csv`);
        const csvContent = fs.readFileSync(csvPath, 'utf-8');
        const problems = parseCSV(csvContent);
        problems.sort((a, b) => b.frequency - a.frequency);

        return {
            slug: companySlug,
            name: displayName,
            problemCount: problems.length,
            problems,
        };
    } catch {
        return {
            slug: companySlug,
            name: displayName,
            problemCount: 0,
            problems: [],
        };
    }
}

export function getAllCompanySlugs(): string[] {
    return TOP_COMPANIES.map(([name]) => slugify(name));
}
