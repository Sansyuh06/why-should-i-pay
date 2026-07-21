import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import crypto from 'crypto';

const execAsync = promisify(exec);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { language, code, stdin } = body;

        if (!code) {
            return NextResponse.json({ error: 'No code provided', exitCode: 1 }, { status: 400 });
        }

        // Create a temporary directory for this execution
        const tempDir = path.join(os.tmpdir(), `execute_${crypto.randomBytes(8).toString('hex')}`);
        await fs.mkdir(tempDir, { recursive: true });

        let output = '';
        let error = '';
        let exitCode = 0;
        let command = '';
        let filename = '';

        try {
            // Write stdin to a file if provided
            const stdinFile = path.join(tempDir, 'input.txt');
            if (stdin) {
                await fs.writeFile(stdinFile, stdin, 'utf-8');
            }
            const stdinRedirect = stdin ? ` < "${stdinFile}"` : '';

            // Setup language specifics
            switch (language) {
                case 'javascript':
                    filename = path.join(tempDir, 'solution.js');
                    await fs.writeFile(filename, code, 'utf-8');
                    command = `node "${filename}"${stdinRedirect}`;
                    break;
                case 'python':
                    filename = path.join(tempDir, 'solution.py');
                    await fs.writeFile(filename, code, 'utf-8');
                    command = `python "${filename}"${stdinRedirect}`;
                    break;
                case 'java': {
                    // Extract the class name from the code, default to 'Main' if not found
                    const match = code.match(/class\s+([A-Za-z0-9_]+)/);
                    const className = match ? match[1] : 'Main';
                    
                    filename = path.join(tempDir, `${className}.java`);
                    await fs.writeFile(filename, code, 'utf-8');
                    // Windows uses ; for classpath separator, others use :
                    command = `javac "${filename}" && java -cp "${tempDir}" ${className}${stdinRedirect}`;
                    break;
                }
                case 'c++':
                case 'cpp':
                    filename = path.join(tempDir, 'solution.cpp');
                    const exeName = path.join(tempDir, os.platform() === 'win32' ? 'solution.exe' : 'solution');
                    await fs.writeFile(filename, code, 'utf-8');
                    command = `g++ "${filename}" -o "${exeName}" && "${exeName}"${stdinRedirect}`;
                    break;
                case 'csharp':
                    filename = path.join(tempDir, 'solution.cs');
                    await fs.writeFile(filename, code, 'utf-8');
                    // Use csc on Windows, mono/mcs on Linux/Mac
                    if (os.platform() === 'win32') {
                        const exeName = path.join(tempDir, 'solution.exe');
                        command = `csc /out:"${exeName}" "${filename}" && "${exeName}"${stdinRedirect}`;
                    } else {
                        const exeName = path.join(tempDir, 'solution.exe');
                        command = `mcs -out:"${exeName}" "${filename}" && mono "${exeName}"${stdinRedirect}`;
                    }
                    break;
                default:
                    throw new Error(`Unsupported language: ${language}`);
            }

            // Execute the code with a timeout
            const { stdout, stderr } = await execAsync(command, { timeout: 10000 });
            output = stdout;
            error = stderr;
        } catch (err: any) {
            // execAsync throws on non-zero exit code or timeout
            error = err.stderr || err.message || 'Execution failed';
            output = err.stdout || '';
            exitCode = err.code || 1;
            
            if (err.killed && err.signal === 'SIGTERM') {
                error = 'Execution timed out (10 seconds limit)';
            }
        } finally {
            // Cleanup temp directory
            try {
                await fs.rm(tempDir, { recursive: true, force: true });
            } catch (cleanupErr) {
                console.error('Failed to cleanup temp dir:', cleanupErr);
            }
        }

        return NextResponse.json({
            output,
            error,
            exitCode,
        });
    } catch (e: any) {
        return NextResponse.json({ error: e.message, exitCode: 1 }, { status: 500 });
    }
}
