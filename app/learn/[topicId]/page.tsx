import { TopicDetailClient } from './TopicDetailClient';
import { dsaTopics } from '@/lib/data';

export function generateStaticParams() {
  return dsaTopics.map((topic) => ({
    topicId: topic.id,
  }));
}

export default async function TopicDetailPage({ params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  return <TopicDetailClient topicId={topicId} />;
}
