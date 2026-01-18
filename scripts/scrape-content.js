// Web Scraper for TCS/Aptitude Content
// Uses Puppeteer with Edge browser
// Run: node scripts/scrape-content.js

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const URLS_TO_SCRAPE = [
    {
        name: 'LeetCode Top Interview 150',
        url: 'https://leetcode.com/studyplan/top-interview-150/',
        selector: '.truncate' // Problem titles
    },
    {
        name: 'LeetCode Top SQL 50',
        url: 'https://leetcode.com/studyplan/top-sql-50/',
        selector: '.truncate'
    },
    {
        name: 'CodeChef TCS Interview',
        url: 'https://www.codechef.com/practice/tcs-interview-questions',
        selector: '[class*="problem"]'
    },
    {
        name: 'Naukri TCS Aptitude',
        url: 'https://www.naukri.com/campus/career-guidance/tcs-aptitude-questions',
        selector: 'h2, h3, .question'
    },
    {
        name: 'IndiaBix Logical Reasoning',
        url: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/',
        selector: '.bix-td-qno, .bix-td-qtxt'
    }
];

async function scrapeContent() {
    console.log('🚀 Starting content scraper...');
    console.log('📍 Using Microsoft Edge browser\n');

    // Launch Edge (Chromium-based)
    const browser = await puppeteer.launch({
        headless: false, // Set to true later
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        defaultViewport: null
    });

    const results = {};

    for (const site of URLS_TO_SCRAPE) {
        console.log(`\n📄 Scraping: ${site.name}`);
        console.log(`   URL: ${site.url}`);

        try {
            const page = await browser.newPage();

            // Set a realistic user agent
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0');

            await page.goto(site.url, {
                waitUntil: 'networkidle2',
                timeout: 30000
            });

            // Wait for content to load
            await new Promise(r => setTimeout(r, 3000));

            // Scroll to load dynamic content
            await autoScroll(page);

            // Extract text content
            const content = await page.evaluate((selector) => {
                const elements = document.querySelectorAll(selector);
                const texts = [];
                elements.forEach(el => {
                    if (el.textContent.trim()) {
                        texts.push(el.textContent.trim());
                    }
                });
                return texts;
            }, site.selector);

            // Also get all visible text as backup
            const allText = await page.evaluate(() => {
                return document.body.innerText;
            });

            results[site.name] = {
                url: site.url,
                extractedItems: content,
                itemCount: content.length,
                fullText: allText.substring(0, 10000) // First 10k chars
            };

            console.log(`   ✅ Found ${content.length} items`);

            await page.close();
        } catch (error) {
            console.log(`   ❌ Error: ${error.message}`);
            results[site.name] = {
                url: site.url,
                error: error.message
            };
        }
    }

    await browser.close();

    // Save results
    const outputPath = path.join(__dirname, '..', 'lib', 'scraped-content.json');
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`\n✅ Results saved to: ${outputPath}`);

    // Also create a TypeScript file
    generateTypeScriptFile(results);
}

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

function generateTypeScriptFile(results) {
    let tsContent = `// AUTO-GENERATED: Scraped content from external sources
// Generated on: ${new Date().toISOString()}

export const scrapedProblems = {
`;

    for (const [name, data] of Object.entries(results)) {
        if (data.extractedItems && data.extractedItems.length > 0) {
            tsContent += `  "${name}": [\n`;
            data.extractedItems.slice(0, 100).forEach(item => {
                const escaped = item.replace(/"/g, '\\"').replace(/\n/g, ' ');
                tsContent += `    "${escaped}",\n`;
            });
            tsContent += `  ],\n`;
        }
    }

    tsContent += `};

export const scrapedSources = ${JSON.stringify(Object.keys(results))};
`;

    const outputPath = path.join(__dirname, '..', 'lib', 'scrapedContent.ts');
    fs.writeFileSync(outputPath, tsContent);
    console.log(`✅ TypeScript file saved to: ${outputPath}`);
}

// Run the scraper
scrapeContent().catch(console.error);
