import { EditorClient } from './EditorClient';
import { allProblems } from '@/lib/problemCatalog';

export function generateStaticParams() {
  return allProblems.map((p) => ({
    problemId: p.id,
  }));
}

export default async function CodeEditorPage({ params }: { params: Promise<{ problemId: string }> }) {
  const { problemId } = await params;
  return <EditorClient problemId={problemId} />;
}
