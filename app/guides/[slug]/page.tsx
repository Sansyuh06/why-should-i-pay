import { guides } from '@/lib/guides';
import { GuideDetailClient } from './GuideDetailClient';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    return guides.map(g => ({ slug: g.slug }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const guide = guides.find(g => g.slug === slug);

    let content = '';
    if (guide) {
        try {
            const filePath = path.join(process.cwd(), 'addi', 'coding-resources-main', guide.filename);
            content = fs.readFileSync(filePath, 'utf-8');
        } catch {
            content = '# Content Not Found\n\nThe guide content could not be loaded.';
        }
    }

    return <GuideDetailClient guide={guide || null} content={content} />;
}
