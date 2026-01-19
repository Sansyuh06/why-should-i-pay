import { EditorClient } from './EditorClient';
import { sampleProblems } from '@/lib/data';

export function generateStaticParams() {
  return sampleProblems.map((p) => ({
    problemId: p.id,
  }));
}

export default async function CodeEditorPage({ params }: { params: Promise<{ problemId: string }> }) {
  const { problemId } = await params;
  return <EditorClient problemId={problemId} />;
}
