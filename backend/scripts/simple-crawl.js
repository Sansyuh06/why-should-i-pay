// Simplified standalone crawl script
// Run with: node scripts/simple-crawl.js

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const SITES = {
    leetcode: {
        name: 'LeetCode',
        urls: [
            'https://leetcode.com/studyplan/top-interview-150/',
            'https://leetcode.com/studyplan/top-sql-50/',
        ],
        enabled: true,
    },
    indiabix: {
        name: 'IndiaBix',
        urls: [
            'https://www.indiabix.com/logical-reasoning/questions-and-answers/',
        ],
        enabled: true,
    },
};

const CRAWL_DELAY_MS = 2000;
const USER_AGENT = 'WhyShouldIPay-Bot/1.0 (+educational-use)';

// Simple HTTP fetch
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;

        const options = {
            headers: {
                'User-Agent': USER_AGENT,
                'Accept': 'text/html,application/xhtml+xml',
                'Accept-Language': 'en-US,en;q=0.9',
            },
        };

        protocol.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // Follow redirect
                fetchUrl(res.headers.location).then(resolve).catch(reject);
                return;
            }

            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode}`));
                return;
            }

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

// Extract problem titles from HTML
function extractProblems(html, source) {
    const problems = [];

    // Simple regex-based extraction for problem titles
    // LeetCode format: truncated titles in specific elements
    const titlePatterns = [
        /<span[^>]*class="[^"]*truncate[^"]*"[^>]*>([^<]+)<\/span>/gi,
        /<a[^>]*>([^<]{5,100})<\/a>/gi,
    ];

    for (const pattern of titlePatterns) {
        let match;
        while ((match = pattern.exec(html)) !== null) {
            const title = match[1].trim();

            // Filter out noise
            if (title.length < 5) continue;
            if (title.length > 100) continue;
            if (/^(show|hide|login|sign|more|less|next|prev)/i.test(title)) continue;
            if (/^[0-9.\s]+$/.test(title)) continue;

            // Check if it looks like a problem title
            if (/^[A-Z]/.test(title) && title.includes(' ')) {
                problems.push({
                    title,
                    source,
                    sourceUrl: '',
                    difficulty: 'medium',
                    categories: [],
                });
            }
        }
    }

    // Deduplicate
    const seen = new Set();
    return problems.filter(p => {
        if (seen.has(p.title)) return false;
        seen.add(p.title);
        return true;
    });
}

// Sleep helper
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main crawl function
async function crawl(options = {}) {
    const dryRun = options.dryRun || false;
    const verbose = options.verbose || false;

    console.log('🚀 Starting web crawler...');
    console.log(`   Mode: ${dryRun ? 'DRY RUN (preview only)' : 'LIVE'}`);
    console.log('');

    const allProblems = [];
    const results = {};

    for (const [key, site] of Object.entries(SITES)) {
        if (!site.enabled) {
            console.log(`⏭️  Skipping ${site.name} (disabled)`);
            continue;
        }

        console.log(`\n📄 Crawling: ${site.name}`);
        results[site.name] = { urls: [], problems: [], errors: [] };

        for (const url of site.urls) {
            console.log(`   🔗 ${url}`);

            try {
                // Respect rate limits
                await sleep(CRAWL_DELAY_MS);

                const html = await fetchUrl(url);
                const problems = extractProblems(html, site.name);

                console.log(`   ✅ Found ${problems.length} potential items`);

                results[site.name].urls.push(url);
                results[site.name].problems.push(...problems);
                allProblems.push(...problems);

                if (verbose && problems.length > 0) {
                    console.log('   Sample items:');
                    problems.slice(0, 3).forEach(p => {
                        console.log(`      - ${p.title}`);
                    });
                }
            } catch (error) {
                console.log(`   ❌ Error: ${error.message}`);
                results[site.name].errors.push({ url, error: error.message });
            }
        }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 CRAWL SUMMARY');
    console.log('='.repeat(50));

    for (const [name, data] of Object.entries(results)) {
        console.log(`\n${name}:`);
        console.log(`   URLs crawled: ${data.urls.length}`);
        console.log(`   Items found: ${data.problems.length}`);
        console.log(`   Errors: ${data.errors.length}`);
    }

    console.log(`\n📦 Total items collected: ${allProblems.length}`);

    // Save results if not dry run
    if (!dryRun && allProblems.length > 0) {
        const outputDir = path.join(__dirname, '..', 'data');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputFile = path.join(outputDir, 'crawled-problems.json');
        const output = {
            version: '2.0.0',
            crawledAt: new Date().toISOString(),
            sources: Object.keys(results),
            totalProblems: allProblems.length,
            problems: allProblems,
        };

        fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));
        console.log(`\n💾 Saved to: ${outputFile}`);
    } else if (dryRun) {
        console.log('\n📝 Dry run complete - no files saved');
    }

    return results;
}

// Parse CLI args
const args = process.argv.slice(2);
const options = {
    dryRun: args.includes('--dry-run'),
    verbose: args.includes('--verbose') || args.includes('-v'),
};

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: node scripts/simple-crawl.js [options]

Options:
  --dry-run    Preview mode, don't save results
  --verbose    Show more details
  --help       Show this help
`);
    process.exit(0);
}

// Run
crawl(options)
    .then(() => {
        console.log('\n✨ Crawl complete!');
        process.exit(0);
    })
    .catch(err => {
        console.error('\n💥 Crawl failed:', err.message);
        process.exit(1);
    });
