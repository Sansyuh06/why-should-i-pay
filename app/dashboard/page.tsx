'use client';

import { TooltipProvider, Tooltip } from "@/components/ui/tooltip";
import { TabsContent } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import { Tabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LoadingState } from '@/components/error-states';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Target from '@/components/icons/Target';
import Trophy from '@/components/icons/Trophy';
import { Navigation, Footer } from '@/components/navigation';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([
    { day: 'Mon', problems: 3, time: 120 },
    { day: 'Tue', problems: 5, time: 180 },
    { day: 'Wed', problems: 2, time: 90 },
    { day: 'Thu', problems: 6, time: 240 },
    { day: 'Fri', problems: 4, time: 160 },
    { day: 'Sat', problems: 8, time: 320 },
    { day: 'Sun', problems: 5, time: 200 }
  ]);

  const userStats = {
    problemsSolved: 145,
    streak: 7,
    totalTime: 2890,
    contests: 12,
    points: 3450,
    rank: 245
  };

  const recentActivity = [
    { date: 'Today', action: 'Solved "Reverse String"', difficulty: 'easy', points: 10 },
    { date: 'Yesterday', action: 'Completed "Arrays" section', difficulty: 'beginner', points: 50 },
    { date: '2 days ago', action: 'Solved "Two Sum"', difficulty: 'easy', points: 10 },
    { date: '3 days ago', action: 'Completed Quiz: "Sorting"', difficulty: 'intermediate', points: 30 }
  ];

  const achievements = [
    { icon: '🚀', name: 'Fast Learner', desc: 'Solved 10 problems' },
    { icon: '🔥', name: 'On Fire', desc: '7 day streak' },
    { icon: '💯', name: 'Perfect Score', desc: '100% quiz accuracy' },
    { icon: '🏆', name: 'Top 100', desc: 'Ranked in top 100' }
  ];

  const nextGoals = [
    { title: 'Master Binary Trees', progress: 65 },
    { title: 'Solve 200 Problems', progress: 72 },
    { title: 'Complete System Design', progress: 30 }
  ];

  useEffect(() => {
    // Simulate loading complete data
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingState message="Loading your dashboard..." />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="border-b border-border py-8 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex! Keep up the amazing progress 🎉</p>
          </div>
          <Button asChild>
            <Link href="/learn">Continue Learning</Link>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="p-6">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm text-muted-foreground">Solved</p>
            <p className="text-2xl font-bold">{userStats.problemsSolved}</p>
          </Card>
          <Card className="p-6">
            <div className="text-3xl mb-2">🔥</div>
            <p className="text-sm text-muted-foreground">Streak</p>
            <p className="text-2xl font-bold">{userStats.streak} days</p>
          </Card>
          <Card className="p-6">
            <div className="text-3xl mb-2">⏱️</div>
            <p className="text-sm text-muted-foreground">Learned</p>
            <p className="text-2xl font-bold">{Math.round(userStats.totalTime / 60)}h</p>
          </Card>
          <Card className="p-6">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-sm text-muted-foreground">Points</p>
            <p className="text-2xl font-bold">{userStats.points}</p>
          </Card>
          <Card className="p-6">
            <div className="text-3xl mb-2">📊</div>
            <p className="text-sm text-muted-foreground">Rank</p>
            <p className="text-2xl font-bold">#{userStats.rank}</p>
          </Card>
          <Card className="p-6">
            <div className="text-3xl mb-2">🎪</div>
            <p className="text-sm text-muted-foreground">Contests</p>
            <p className="text-2xl font-bold">{userStats.contests}</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Activity Tab */}
              <TabsContent value="activity" className="mt-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">📈 This Week</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" />
                      <TooltipProvider>
                        <Tooltip contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }} />
                      </TooltipProvider>
                      <Bar dataKey="problems" fill="var(--color-primary)" name="Problems Solved" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-6 mt-6">
                  <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                        <div>
                          <p className="font-medium text-sm">{item.action}</p>
                          <p className="text-xs text-muted-foreground">{item.date}</p>
                        </div>
                        <div className="text-right">
                          <span className="block text-sm font-bold text-primary">+{item.points} pts</span>
                          <span className={`text-xs capitalize px-2 py-1 rounded ${
                            item.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' :
                            item.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-500' :
                            'bg-red-500/10 text-red-500'
                          }`}>
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="mt-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">📊 Learning Progress</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" />
                      <TooltipProvider>
                        <Tooltip contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }} />
                      </TooltipProvider>
                      <Line type="monotone" dataKey="time" stroke="var(--color-primary)" name="Time Spent (min)" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h4 className="font-bold mb-4">By Difficulty</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm mb-1">Easy: 45%</p>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }} />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm mb-1">Medium: 40%</p>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }} />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm mb-1">Hard: 15%</p>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }} />
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-4">By Category</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Arrays</span>
                        <span className="font-bold">35</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trees</span>
                        <span className="font-bold">28</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Graphs</span>
                        <span className="font-bold">22</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dynamic Programming</span>
                        <span className="font-bold">18</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Others</span>
                        <span className="font-bold">42</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Goals */}
            <Card className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Next Goals
              </h3>
              <div className="space-y-4">
                {nextGoals.map((goal, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium mb-2">{goal.title}</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{goal.progress}% complete</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, i) => (
                  <div key={i} className="p-3 text-center rounded-lg bg-muted hover:bg-muted/80 transition cursor-pointer">
                    <p className="text-2xl mb-1">{achievement.icon}</p>
                    <p className="text-xs font-bold">{achievement.name}</p>
                    <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">View All</Button>
            </Card>

            {/* Recommendations */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">💡 Recommended</h3>
              <div className="space-y-3">
                <Link href="/learn/arrays-101" className="p-3 rounded-lg border border-border hover:bg-muted transition block">
                  <p className="font-medium text-sm">Master Dynamic Programming</p>
                  <p className="text-xs text-muted-foreground">5h • Intermediate</p>
                </Link>
                <Link href="/problems" className="p-3 rounded-lg border border-border hover:bg-muted transition block">
                  <p className="font-medium text-sm">Weekly Contest</p>
                  <p className="text-xs text-muted-foreground">Starts in 2 days</p>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
