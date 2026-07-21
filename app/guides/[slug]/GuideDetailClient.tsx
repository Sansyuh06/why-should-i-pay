'use client';

import Link from 'next/link';
import { Navigation, Footer } from '@/components/navigation';
import { Guide } from '@/lib/guides';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';

interface Props {
    guide: Guide | null;
    content: string;
}

// ─── Simple Markdown Renderer ───────────────────────────────────────
// We render markdown without external deps. Handles: headers, links,
// tables, bold, italic, lists, code blocks, horizontal rules.
function renderMarkdown(md: string): string {
    let html = md
        // Escape HTML entities
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        // Restore <br> tags
        .replace(/&lt;br&gt;/g, '<br/>')
        // Code blocks (```...```)
        .replace(/```(\w*)\n([\s\S]*?)```/g, (_match, _lang, code) => {
            return `<pre class="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 overflow-x-auto my-4 text-sm"><code>${code.trim()}</code></pre>`;
        })
        // Headers
        .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-bold mt-8 mb-3 text-foreground">$1</h4>')
        .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-10 mb-4 text-foreground border-b border-[#262626] pb-2">$1</h3>')
        .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-12 mb-4 text-foreground">$2</h2>')
        .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-6 text-accent">$1</h1>')
        // Bold & Italic
        .replace(/\*\*\*(.+?)\*\*\*/g, '<strong class="text-foreground"><em>$1</em></strong>')
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="bg-[#1a1a1a] px-1.5 py-0.5 rounded text-accent text-sm">$1</code>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">$1</a>')
        // Horizontal rules
        .replace(/^\*\*\*$/gm, '<hr class="border-[#262626] my-8" />')
        .replace(/^---$/gm, '<hr class="border-[#262626] my-8" />')
        // Unordered lists
        .replace(/^- (.+)$/gm, '<li class="ml-4 text-[#888888] list-disc list-inside mb-1">$1</li>')
        // Checkmarks (🟢)
        .replace(/🟢/g, '<span class="text-green-500">✓</span>')
        // Paragraphs - add spacing between blocks
        .replace(/\n\n/g, '</p><p class="text-[#888888] leading-relaxed mb-4">');

    // Handle tables
    html = html.replace(/(\|.+\|[\s\S]*?)(?=\n(?:[^|]|$))/g, (tableBlock) => {
        const rows = tableBlock.trim().split('\n').filter(r => r.trim());
        if (rows.length < 2) return tableBlock;

        let tableHtml = '<div class="overflow-x-auto my-6"><table class="w-full border-collapse text-sm">';

        rows.forEach((row, idx) => {
            // Skip separator row (|---|---|)
            if (/^\|[\s-:|]+\|$/.test(row.trim())) return;

            const cells = row.split('|').filter(c => c.trim() !== '');
            const tag = idx === 0 ? 'th' : 'td';
            const cellClass = idx === 0
                ? 'px-4 py-3 text-left font-bold text-foreground bg-[#1a1a1a] border border-[#262626]'
                : 'px-4 py-3 text-left text-[#888888] border border-[#262626]';

            tableHtml += '<tr>';
            cells.forEach(cell => {
                tableHtml += `<${tag} class="${cellClass}">${cell.trim()}</${tag}>`;
            });
            tableHtml += '</tr>';
        });

        tableHtml += '</table></div>';
        return tableHtml;
    });

    return html;
}

export function GuideDetailClient({ guide, content }: Props) {
    if (!guide) {
        return (
            <div className="min-h-screen bg-background text-foreground">
                <Navigation />
                <div className="pt-32 px-6 md:px-12 text-center">
                    <h1 className="text-3xl font-bold mb-4">Guide Not Found</h1>
                    <Link href="/guides" className="text-accent hover:underline">← Back to Guides</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const renderedContent = renderMarkdown(content);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Header */}
            <section className="pt-32 pb-8 px-6 md:px-12 border-b border-border/20">
                <div className="max-w-4xl mx-auto">
                    <Link href="/guides" className="text-sm text-muted-foreground hover:text-accent transition mb-6 inline-flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" /> All Guides
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{guide.icon}</span>
                        <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                            {guide.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-3">{guide.title}</h1>
                    <p className="text-muted-foreground max-w-2xl">{guide.description}</p>
                </div>
            </section>

            {/* Content */}
            <section className="px-6 md:px-12 py-12">
                <div className="max-w-4xl mx-auto">
                    <article
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: renderedContent }}
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}
