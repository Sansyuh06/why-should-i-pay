import { ProblemDetailClient } from './ProblemDetailClient';
import { allProblems } from '@/lib/problemCatalog';

export function generateStaticParams() {
  return allProblems.map((p) => ({
    problemId: p.id,
  }));
}

export default async function ProblemPage({ params }: { params: Promise<{ problemId: string }> }) {
  const { problemId } = await params;
  return <ProblemDetailClient problemId={problemId} />;
}
