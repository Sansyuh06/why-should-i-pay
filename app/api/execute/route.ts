import { NextResponse } from 'next/server';

// Map our frontend language strings to Piston API language strings and versions
const PISTON_LANGUAGE_MAP: Record<string, { language: string, version: string }> = {
    'javascript': { language: 'javascript', version: '18.15.0' },
    'python': { language: 'python', version: '3.10.0' },
    'java': { language: 'java', version: '15.0.2' },
    'c++': { language: 'c++', version: '10.2.0' },
    'cpp': { language: 'c++', version: '10.2.0' },
    'csharp': { language: 'csharp', version: '6.12.0' },
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { language, code, stdin } = body;

        if (!code) {
            return NextResponse.json({ error: 'No code provided', exitCode: 1 }, { status: 400 });
        }

        const mappedLang = PISTON_LANGUAGE_MAP[language];
        
        if (!mappedLang) {
            return NextResponse.json({ error: `Unsupported language: ${language}`, exitCode: 1 }, { status: 400 });
        }

        // We use the Piston API to execute code because Vercel Serverless environments 
        // do not have Python, Java, or GCC compilers installed locally.
        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language: mappedLang.language,
                version: mappedLang.version,
                files: [
                    {
                        name: `main.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : language === 'csharp' ? 'cs' : 'cpp'}`,
                        content: code,
                    }
                ],
                stdin: stdin || "",
            }),
        });

        if (!response.ok) {
            throw new Error(`Piston API returned ${response.status}`);
        }

        const data = await response.json();

        // Standardize output format to match our previous local execution format
        if (data.compile && data.compile.code !== 0) {
            return NextResponse.json({
                output: '',
                error: data.compile.stderr || data.compile.output,
                exitCode: data.compile.code
            });
        }

        return NextResponse.json({
            output: data.run.stdout,
            error: data.run.stderr,
            exitCode: data.run.code
        });

    } catch (error: any) {
        console.error('Execution Error:', error);
        return NextResponse.json({ 
            output: '',
            error: error.message || 'Execution failed on the server', 
            exitCode: 1 
        }, { status: 500 });
    }
}
