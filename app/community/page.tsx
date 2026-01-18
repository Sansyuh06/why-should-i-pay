'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, MessageCircle, Share2, Plus, Search, Filter } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const communityPosts = [
  {
    id: '1',
    userName: 'Alex Kumar',
    userAvatar: '👨‍💻',
    title: 'Tips for solving Two Sum problem efficiently',
    content: 'I just solved the Two Sum problem using a hash map approach. Here\'s what I learned:\n\n1. Hash maps provide O(1) lookup\n2. Store elements as you iterate\n3. Check complement before adding new element',
    category: 'solution' as const,
    tags: ['arrays', 'hash-table', 'beginner'],
    likes: 234,
    replies: 12,
    createdAt: new Date('2024-01-15'),
    isLiked: false
  },
  {
    id: '2',
    userName: 'Sarah Chen',
    userAvatar: '👩‍💻',
    title: 'Anyone struggling with Binary Search Trees?',
    content: 'I\'m having trouble understanding how to maintain the BST property during insertion and deletion. Can someone explain or share resources?',
    category: 'question' as const,
    tags: ['trees', 'bst', 'help-needed'],
    likes: 156,
    replies: 24,
    createdAt: new Date('2024-01-14'),
    isLiked: false
  },
  {
    id: '3',
    userName: 'Jordan Davis',
    userAvatar: '🧑‍💻',
    title: 'Best resources for learning System Design',
    content: 'Check out these amazing resources I found:\n- System Design Primer (GitHub)\n- Designing Data-Intensive Applications (Book)\n- YouTube videos by Gaurav Sen\n\nReally helpful for interviews!',
    category: 'resource' as const,
    tags: ['system-design', 'learning-resources'],
    likes: 342,
    replies: 18,
    createdAt: new Date('2024-01-13'),
    isLiked: false
  }
];

const studyGroups = [
  {
    id: 'g1',
    name: 'DSA Daily Challenge',
    members: 245,
    description: 'Solve one problem daily together',
    activeNow: 34
  },
  {
    id: 'g2',
    name: 'System Design Masters',
    members: 156,
    description: 'Weekly design discussions',
    activeNow: 12
  },
  {
    id: 'g3',
    name: 'Interview Prep Group',
    members: 389,
    description: 'Prepare for tech interviews',
    activeNow: 67
  }
];

const Loading = () => null;

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'trending'>('trending');

  const filteredPosts = communityPosts.filter(post => {
    const matchCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-background pt-20">
        {/* Header */}
        <div className="border-b border-border py-8 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Community</h1>
            <p className="text-lg text-muted-foreground">
              Connect with learners, share solutions, and grow together
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Create Post */}
              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="text-2xl">👤</div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Ask a question or share your solution..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-3"
                    />
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Filters */}
              <Card className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedCategory === 'all'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    All
                  </button>
                  {['question', 'solution', 'discussion', 'resource'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition capitalize ${
                        selectedCategory === cat
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'trending')}
                  className="px-3 py-2 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="trending">Trending</option>
                  <option value="newest">Newest</option>
                </select>
              </Card>

              {/* Posts */}
              <div className="space-y-4">
                {filteredPosts.map(post => (
                  <Card key={post.id} className="p-6 hover:shadow-lg transition">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{post.userAvatar}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold">{post.userName}</p>
                        <p className="text-xs text-muted-foreground">
                          {Math.floor((Date.now() - post.createdAt.getTime()) / (1000 * 60 * 60))} hours ago
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                        post.category === 'question'
                          ? 'bg-blue-500/10 text-blue-500'
                          : post.category === 'solution'
                            ? 'bg-green-500/10 text-green-500'
                            : post.category === 'resource'
                              ? 'bg-purple-500/10 text-purple-500'
                              : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 hover:text-primary cursor-pointer">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.content}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 hover:text-primary transition">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition">
                          <MessageCircle className="w-4 h-4" />
                          {post.replies}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      <Button variant="ghost" size="sm">Read More</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </Card>

              {/* Study Groups */}
              <Card className="p-6">
                <h3 className="font-bold mb-4">👥 Study Groups</h3>
                <div className="space-y-3">
                  {studyGroups.map(group => (
                    <div
                      key={group.id}
                      className="p-3 rounded-lg border border-border hover:bg-muted transition cursor-pointer"
                    >
                      <p className="font-bold text-sm mb-1">{group.name}</p>
                      <p className="text-xs text-muted-foreground mb-2">{group.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{group.members} members</span>
                        <span className="text-green-500">• {group.activeNow} online</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">View All Groups</Button>
              </Card>

              {/* Trending Tags */}
              <Card className="p-6">
                <h3 className="font-bold mb-4">🔥 Trending Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['arrays', 'trees', 'system-design', 'dynamic-programming', 'graph', 'sorting', 'interview-prep', 'solutions'].map(tag => (
                    <button
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </Card>

              {/* Leaderboard */}
              <Card className="p-6">
                <h3 className="font-bold mb-4">🏆 Top Contributors</h3>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: 'Alex Kumar', points: 2450 },
                    { rank: 2, name: 'Sarah Chen', points: 2180 },
                    { rank: 3, name: 'Jordan Davis', points: 1950 }
                  ].map(user => (
                    <div key={user.rank} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{user.rank}</span>
                        <span className="text-sm">{user.name}</span>
                      </div>
                      <span className="text-xs font-bold text-primary">{user.points} pts</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">View Leaderboard</Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
