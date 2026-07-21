const fs = require('fs');
const path = require('path');
const https = require('https');

const OUTPUT_DIR = path.join(__dirname, '..', '..', 'addi', 'coding-resources-main');

const targetLinks = [
    {
        name: 'OOPS Concepts',
        url: 'https://raw.githubusercontent.com/MadhavBahl/OOPS/master/README.md',
        filename: 'oops-concepts.md'
    },
    {
        name: 'STL Notes',
        url: 'https://raw.githubusercontent.com/mansikagrawal/STL-NOTES/master/README.md',
        filename: 'stl-notes.md'
    },
    {
        name: 'Collection Framework in Java',
        url: 'https://raw.githubusercontent.com/AnirudhDas/AniruddhaDas.github.io/master/Java/CollectionFrameworkInJava/CollectionFrameworkInJava.md',
        filename: 'java-collections.md'
    },
    {
        name: 'Project Based Learning',
        url: 'https://raw.githubusercontent.com/practical-tutorials/project-based-learning/master/README.md',
        filename: 'project-based-learning.md'
    },
    {
        name: '500 AI Projects',
        url: 'https://raw.githubusercontent.com/ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code/main/README.md',
        filename: '500-ai-projects.md'
    },
    {
        name: 'Company Wise Projects',
        url: 'https://raw.githubusercontent.com/nishant-Tiwari24/company-wise-projects/main/README.md',
        filename: 'company-wise-projects.md'
    },
    {
        name: 'Skills for Hackathon',
        url: 'https://raw.githubusercontent.com/nishant-Tiwari24/skills-for-hackathon/main/README.md',
        filename: 'skills-for-hackathon.md'
    },
    {
        name: 'Build Your Own X',
        url: 'https://raw.githubusercontent.com/codecrafters-io/build-your-own-x/master/README.md',
        filename: 'build-your-own-x.md'
    },
    // Google Docs (Export as text)
    {
        name: 'GDoc 1',
        url: 'https://docs.google.com/document/export?format=txt&id=1TjlpZH-LDgkua7s8rBgJ14SJQ4UEWdBncL3ZZACJMjU',
        filename: 'gdoc-resources-1.md'
    },
    {
        name: 'GDoc 2',
        url: 'https://docs.google.com/document/export?format=txt&id=1gOC_ozbVba1AcHOiDhXuPrFWznd7ffVwjcc6MuCedkQ',
        filename: 'gdoc-resources-2.md'
    },
    {
        name: 'GDoc 3',
        url: 'https://docs.google.com/document/export?format=txt&id=1SYPEAFvKgv9LpvCOeZ4JBcL11FfWh6Ab3ZlnkF_xSeo',
        filename: 'gdoc-resources-3.md'
    },
    {
        name: 'GDoc 4',
        url: 'https://docs.google.com/document/export?format=txt&id=1nHLOqbDW2rNW988LRTcIncfLkCNrtO5FtjFzCctS1n8',
        filename: 'gdoc-resources-4.md'
    }
];

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // If it's a relative redirect, resolve it
                let redirectUrl = response.headers.location;
                if (!redirectUrl.startsWith('http')) {
                    const parsedOriginal = new URL(url);
                    redirectUrl = `${parsedOriginal.protocol}//${parsedOriginal.host}${redirectUrl}`;
                }
                return downloadFile(redirectUrl, dest).then(resolve).catch(reject);
            }
            if (response.statusCode !== 200) {
                return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function main() {
    console.log('Starting content crawler...');
    
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let successCount = 0;
    
    for (const target of targetLinks) {
        console.log(`Fetching: ${target.name}`);
        const destPath = path.join(OUTPUT_DIR, target.filename);
        try {
            await downloadFile(target.url, destPath);
            console.log(`✅ Saved to ${target.filename}`);
            successCount++;
        } catch (e) {
            console.error(`❌ Failed: ${e.message}`);
        }
    }
    
    console.log(`\nCrawling complete! Successfully downloaded ${successCount}/${targetLinks.length} files.`);
}

main();
