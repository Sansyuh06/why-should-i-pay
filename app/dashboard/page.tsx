import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { BookOpen, Code, Trophy, Target } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  // Fetch progress stats
  const totalSolved = await prisma.progress.count({
    where: {
      userId: session.user.id,
      status: "SOLVED"
    }
  });

  const recentProgress = await prisma.progress.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    take: 5
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-8 border-b border-border/20 pb-6">
          <h1 className="text-3xl font-bold">Welcome back, {session.user.name || "Student"}!</h1>
          <p className="text-muted-foreground mt-2">Here is an overview of your placement preparation.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-card border-border/20 hover:border-accent transition flex flex-col items-center text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mb-3" />
            <h3 className="text-2xl font-black">{totalSolved}</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Problems Solved</p>
          </Card>
          
          <Card className="p-6 bg-card border-border/20 hover:border-accent transition flex flex-col items-center text-center">
            <BookOpen className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-2xl font-black">0</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Guides Read</p>
          </Card>

          <Card className="p-6 bg-card border-border/20 hover:border-accent transition flex flex-col items-center text-center">
            <Code className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="text-2xl font-black">0</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Interviews Mocked</p>
          </Card>

          <Card className="p-6 bg-card border-border/20 hover:border-accent transition flex flex-col items-center text-center">
            <Target className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="text-2xl font-black">0%</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">SDE Roadmap</p>
          </Card>
        </div>

        {/* Recent Activity */}
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <Card className="p-6 bg-card border-border/20">
          {recentProgress.length > 0 ? (
            <ul className="space-y-4">
              {recentProgress.map((p) => (
                <li key={p.id} className="flex items-center justify-between border-b border-border/10 pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{p.problemId}</p>
                    <p className="text-xs text-muted-foreground">{new Date(p.updatedAt).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${p.status === 'SOLVED' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No activity recorded yet.</p>
              <p className="text-sm mt-2">Start solving problems to see your progress here!</p>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}
