import { ProblemDetailClient } from './ProblemDetailClient';
import { sampleProblems } from '@/lib/data';

export function generateStaticParams() {
  return sampleProblems.map((p) => ({
    problemId: p.id,
  }));
}

export default async function ProblemPage({ params }: { params: Promise<{ problemId: string }> }) {
  const { problemId } = await params;
  return <ProblemDetailClient problemId={problemId} />;
}
