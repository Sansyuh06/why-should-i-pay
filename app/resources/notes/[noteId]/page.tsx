import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation, Footer } from '@/components/navigation';
import { getNoteById, offlineNotes } from '@/lib/offlineContent';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    return offlineNotes.map((note) => ({
        noteId: note.id,
    }));
}

function MarkdownRenderer({ content }: { content: string }) {
    // Simple markdown parser
    const lines = content.split('\n');

    return (
        <div className="space-y-6 text-foreground/90 leading-relaxed">
            {lines.map((line, i) => {
                // Headers
                if(line.startsWith('# ')) {
                    return <h1 key={i} className="text-4xl md:text-5xl font-bold mt-10 mb-6 text-accent">{line.substring(2)}</h1>;
                }
                if(line.startsWith('## ')) {
                    return <h2 key={i} className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-foreground">{line.substring(3)}</h2>;
                }
                if(line.startsWith('### ')) {
                    return <h3 key={i} className="text-2xl md:text-3xl font-bold mt-6 mb-3">{line.substring(4)}</h3>;
                }

                // List items
                if(line.trim().startsWith('- ')) {
                    return (
                        <div key={i} className="flex gap-3 ml-2 md:ml-4">
                            <span className="text-accent text-xl">•</span>
                            <span className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: parseBold(line.trim().substring(2)) }} />
                        </div>
                    );
                }

                // Ordered list (basic support)
                if(/^\d+\./.test(line.trim())) {
                    return (
                        <div key={i} className="flex gap-3 ml-2 md:ml-4">
                            <span className="text-accent font-mono text-lg">{line.trim().split('.')[0]}.</span>
                            <span className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: parseBold(line.trim().substring(line.indexOf('.') + 1)) }} />
                        </div>
                    );
                }

                // Horizontal Rule
                if(line.trim() === '---') {
                    return <hr key={i} className="border-border/30 my-8" />;
                }

                // Tables (Basic rendering as pre-wrap for now to ensure alignment)
                if(line.trim().startsWith('|')) {
                    return <div key={i} className="font-mono text-sm md:text-base whitespace-pre overflow-x-auto text-muted-foreground bg-muted/20 p-4 rounded-lg my-4">{line}</div>;
                }

                // Empty lines
                if(line.trim() === '') {
                    return <div key={i} className="h-4" />;
                }

                // Paragraphs with bold parsing
                return (
                    <p key={i} className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: parseBold(line) }} />
                );
            })}
        </div>
    );
}

function parseBold(text: string) {
    // Replace **text** with <strong>text</strong>
    // Safety: This is internal content, but in production use a sanitizer.
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
        .replace(/`(.*?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-base font-mono text-accent">$1</code>');
}

export default async function NotePage(props: { params: Promise<{ noteId: string }> }) {
    const params = await props.params;
    const note = getNoteById(params.noteId);

    if(!note) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Resources
                </Link>

                <div className="mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{note.topic}</span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6">{note.title}</h1>
                    <div className="h-1 w-20 bg-accent/50 rounded-full"></div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <MarkdownRenderer content={note.content} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
