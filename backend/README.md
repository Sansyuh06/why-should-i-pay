# Automated Web Data Collection System

A production-ready backend system for automated crawling and collecting coding problems, aptitude questions, and learning resources from external educational websites.

## Features

- **Multi-Crawler Architecture**: HTTP (Cheerio) and Playwright (Stealth) crawlers
- **Site-Specific Adapters**: LeetCode, CodeChef, IndiaBix with customizable extraction rules
- **Ethical Compliance**: robots.txt parsing, rate limiting, crawl delays
- **Data Validation**: Completeness checks, duplicate detection, noise filtering
- **Incremental Updates**: Merge new content with existing data without duplicates
- **Scheduling**: Automated cron-based crawling with retry strategies
- **Monitoring**: Structured logging with file and console output

## Quick Start

```bash
# Install dependencies
cd backend
npm install

# Run a dry-run crawl (preview mode)
npm run crawl:dry-run

# Crawl a specific site
npm run crawl:leetcode
npm run crawl:codechef
npm run crawl:indiabix

# Crawl all enabled sites
npm run crawl
```

## Project Structure

```
backend/
├── adapters/           # Site-specific extraction rules
│   ├── leetcode.ts
│   ├── codechef.ts
│   └── indiabix.ts
│
├── compliance/         # Ethical crawling layer
│   ├── robots-parser.ts
│   ├── rate-limiter.ts
│   └── user-agent.ts
│
├── config/             # Configuration
│   ├── constants.ts
│   └── sites.ts
│
├── crawlers/           # Crawler implementations
│   ├── http-crawler.ts
│   └── playwright-crawler.ts
│
├── monitoring/         # Logging
│   └── logger.ts
│
├── processing/         # Data cleaning
│   └── cleaner.ts
│
├── scheduler/          # Job scheduling
│   └── index.ts
│
├── scripts/            # CLI entry points
│   └── crawl.ts
│
├── storage/            # Data persistence
│   └── json-store.ts
│
├── types/              # TypeScript definitions
│   ├── config.ts
│   ├── crawler.ts
│   └── problem.ts
│
├── validation/         # Data validation
│   ├── index.ts
│   └── filters.ts
│
└── data/               # Output directory
    ├── problems.json
    └── logs/
```

## CLI Usage

```bash
# Full usage
npx ts-node scripts/crawl.ts [options]

Options:
  --source <name>   Crawl only a specific site (leetcode, codechef, indiabix)
  --dry-run         Run without saving (preview mode)
  --verbose, -v     Enable debug logging
  --help, -h        Show help message
```

## Configuration

### Adding a New Site

1. Create adapter in `adapters/newsite.ts`
2. Add site config to `config/sites.ts`
3. Register adapter in `adapters/index.ts`

### Rate Limiting

Each site has configurable rate limits in `config/sites.ts`:

```typescript
rateLimit: {
  requestsPerMinute: 10,
  crawlDelayMs: 3000,
  backoffMultiplier: 2,
  maxRetries: 3,
}
```

### Scheduling

Default schedules (cron format):
- LeetCode: Weekly (Sunday 2 AM)
- CodeChef: Weekly (Saturday 3 AM)
- IndiaBix: Bi-weekly (1st and 15th, 4 AM)

## Ethical Compliance

- **robots.txt**: Automatically parsed and respected
- **Rate Limiting**: Token bucket algorithm with circuit breaker
- **User-Agent**: Identifies as bot with contact info
- **Crawl Delay**: Configurable per-site delays

## Data Flow

```
URL → Crawler → Raw HTML → Adapter → RawProblem → Validator → Cleaner → ProcessedProblem → Storage
```

## Output

- `data/problems.json`: All crawled problems
- `data/problems.json.backup`: Automatic backup
- `data/logs/crawl.log`: Structured logs
- `lib/problemCatalog.ts`: Auto-generated TypeScript exports

## Dependencies

Required:
- `cheerio` - HTML parsing

Optional (for dynamic sites):
- `playwright` - Browser automation
