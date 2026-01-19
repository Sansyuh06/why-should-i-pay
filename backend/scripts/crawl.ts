// Main crawl script - CLI entry point
import * as path from 'path';
import { crawlerFactory } from '../crawlers';
import { getAdapter, getAllAdapters } from '../adapters';
import { getSiteConfig, getEnabledSites, CRAWL_URLS } from '../config/sites';
import { dataValidator } from '../validation';
import { JsonStore } from '../storage';
import { logger, logCrawlStart, logCrawlComplete, logCrawlError } from '../monitoring';
import { RawProblem } from '../types';

interface CrawlOptions {
    source?: string;
    dryRun?: boolean;
    verbose?: boolean;
}

async function crawlSite(siteName: string, dryRun: boolean = false): Promise<RawProblem[]> {
    const config = getSiteConfig(siteName);
    if(!config) {
        throw new Error(`Unknown site: ${siteName}`);
    }

    if(!config.enabled) {
        logger.warn(`Site ${siteName} is disabled, skipping`);
        return [];
    }

    const adapter = getAdapter(siteName);
    if(!adapter) {
        throw new Error(`No adapter found for site: ${siteName}`);
    }

    const urls = CRAWL_URLS[siteName] || adapter.getUrls();
    if(urls.length === 0) {
        logger.warn(`No URLs configured for ${siteName}`);
        return [];
    }

    logCrawlStart(siteName, urls);
    const startTime = Date.now();
    const allProblems: RawProblem[] = [];

    const crawler = crawlerFactory.getCrawler(config);

    for(const url of urls) {
        try {
            logger.info(`Crawling: ${url}`);
            const result = await crawler.crawl(url);

            if(!result.success) {
                logCrawlError(siteName, url, result.error || 'Unknown error');
                continue;
            }

            // Extract problems using adapter
            const problems = adapter.extractProblems(result.html || result.content);
            logger.info(`Extracted ${problems.length} items from ${url}`);

            allProblems.push(...problems);
        } catch(error) {
            logCrawlError(siteName, url, (error as Error).message);
        }
    }

    // Close crawler
    await crawlerFactory.close(siteName);

    const durationMs = Date.now() - startTime;

    // Validate and filter problems
    const validProblems = allProblems.filter(p => {
        const validation = dataValidator.validateCompleteness(p);
        if(!validation.valid) {
            logger.debug(`Skipping invalid problem: ${p.title}`, { errors: validation.errors });
            return false;
        }
        if(!dataValidator.isRelevant(p.title)) {
            logger.debug(`Skipping irrelevant problem: ${p.title}`);
            return false;
        }
        return true;
    });

    logCrawlComplete(siteName, {
        itemsFound: allProblems.length,
        itemsNew: validProblems.length,
        durationMs,
    });

    return validProblems;
}

async function main(options: CrawlOptions): Promise<void> {
    // Configure logging
    logger.configure({
        level: options.verbose ? 'debug' : 'info',
        logFile: path.join(__dirname, '..', 'data', 'logs', 'crawl.log'),
    });

    logger.info('Starting crawl job', { options });

    const dataDir = path.join(__dirname, '..', 'data');
    const store = new JsonStore(dataDir);

    // Load existing catalog
    const existingCatalog = await store.load();
    logger.info(`Loaded ${existingCatalog.problems.length} existing problems`);

    // Determine which sites to crawl
    const sitesToCrawl = options.source
        ? [options.source]
        : getEnabledSites().map(s => s.name.toLowerCase());

    logger.info(`Sites to crawl: ${sitesToCrawl.join(', ')}`);

    // Crawl each site
    const allNewProblems: RawProblem[] = [];

    for(const site of sitesToCrawl) {
        try {
            const problems = await crawlSite(site, options.dryRun);
            allNewProblems.push(...problems);
        } catch(error) {
            logger.error(`Failed to crawl ${site}: ${(error as Error).message}`);
        }
    }

    logger.info(`Total new problems collected: ${allNewProblems.length}`);

    if(options.dryRun) {
        logger.info('Dry run mode - not saving to storage');
        console.log('\nProblems that would be saved:');
        for(const p of allNewProblems.slice(0, 10)) {
            console.log(`  - [${p.source}] ${p.title} (${p.difficulty || 'unknown'})`);
        }
        if(allNewProblems.length > 10) {
            console.log(`  ... and ${allNewProblems.length - 10} more`);
        }
        return;
    }

    // Merge with existing catalog
    const updatedCatalog = store.merge(existingCatalog, allNewProblems);

    // Save catalog
    await store.save(updatedCatalog);

    // Generate TypeScript exports
    store.generateTsExports(updatedCatalog);

    logger.info('Crawl job completed', {
        totalProblems: updatedCatalog.problems.length,
        sources: updatedCatalog.sources,
        stats: updatedCatalog.stats,
    });
}

// Parse CLI arguments
function parseArgs(): CrawlOptions {
    const args = process.argv.slice(2);
    const options: CrawlOptions = {};

    for(let i = 0; i < args.length; i++) {
        const arg = args[i];

        if(arg === '--source' && args[i + 1]) {
            options.source = args[++i];
        } else if(arg === '--dry-run') {
            options.dryRun = true;
        } else if(arg === '--verbose' || arg === '-v') {
            options.verbose = true;
        } else if(arg === '--help' || arg === '-h') {
            console.log(`
Usage: npx ts-node scripts/crawl.ts [options]

Options:
  --source <name>   Crawl only a specific site (leetcode, codechef, indiabix)
  --dry-run         Run without saving (preview mode)
  --verbose, -v     Enable debug logging
  --help, -h        Show this help message
`);
            process.exit(0);
        }
    }

    return options;
}

// Run
const options = parseArgs();
main(options).catch(error => {
    logger.error('Crawl job failed', { error: error.message });
    process.exit(1);
});
