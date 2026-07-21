import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { Code2, Target, BrainCircuit, Activity, Clock, Trophy, Flame } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const totalSolved = await prisma.progress.count({
    where: { userId: session.user.id, status: "SOLVED" }
  });

  const recentProgress = await prisma.progress.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    take: 5
  });

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navigation />
      
      <main className="pt-28 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Profile Header */}
        <header className="mb-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-slate-800/60 pb-8">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-[#040b16] ring-2 ring-cyan-900/50 shadow-2xl">
              <AvatarImage src={session.user.image || ""} />
              <AvatarFallback className="bg-cyan-950 text-cyan-400 font-display text-3xl font-black">
                {session.user.name?.charAt(0) || session.user.email?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-violet-950/40 border border-violet-900/50 text-violet-400 text-[10px] font-mono tracking-widest uppercase mb-3">
                <Flame className="w-3 h-3 text-orange-500" /> 3 Day Streak
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-black text-white leading-none tracking-tight mb-2">
                {session.user.name || "Student"}
              </h1>
              <p className="text-sm font-mono text-slate-500">{session.user.email}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Global Rank</div>
              <div className="text-2xl font-bold font-mono text-cyan-400">#4,281</div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Heatmap / Activity Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-400" /> Recent Activity
                </h2>
                <span className="text-xs font-mono text-slate-500">Last 30 Days</span>
              </div>
              <div className="p-6 rounded-xl border border-slate-800/60 bg-[#040b16]">
                <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-2 mb-4 opacity-70">
                  {/* Mock Heatmap Generation */}
                  {Array.from({ length: 45 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-sm ${
                        Math.random() > 0.7 
                          ? 'bg-cyan-500/80' 
                          : Math.random() > 0.4 
                            ? 'bg-cyan-900/40' 
                            : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Less</span>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-slate-800"></div>
                    <div className="w-3 h-3 rounded-sm bg-cyan-900/40"></div>
                    <div className="w-3 h-3 rounded-sm bg-cyan-500/80"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </section>

            {/* In Progress Tracks */}
            <section>
              <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-orange-400" /> Active Tracks
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-slate-800/60 bg-[#040b16] hover:border-cyan-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-mono text-cyan-400 mb-1">COMPANY PREP</div>
                      <h3 className="font-bold text-white">Amazon SDE Track</h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">42%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[42%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-800/60 bg-[#040b16] hover:border-violet-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-mono text-violet-400 mb-1">DSA FOUNDATIONS</div>
                      <h3 className="font-bold text-white">Blind 75 Curated</h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">18%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-500 w-[18%] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {/* Stats Summary */}
            <div className="p-6 rounded-xl border border-slate-800/60 bg-[#040b16] space-y-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-slate-800/60 pb-3">Performance</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-cyan-950/30 border border-cyan-900/30 flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-white leading-none">{totalSolved}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Problems Solved</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-violet-950/30 border border-violet-900/30 flex items-center justify-center shrink-0">
                  <BrainCircuit className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-white leading-none">0</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">AI Mock Sessions</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-emerald-950/30 border border-emerald-900/30 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-white leading-none">0</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Contest Rating</div>
                </div>
              </div>
            </div>

            {/* Recent Solves List */}
            <div className="p-6 rounded-xl border border-slate-800/60 bg-[#040b16]">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-slate-800/60 pb-3 mb-4">Recent Solves</h3>
              {recentProgress.length > 0 ? (
                <div className="space-y-3">
                  {recentProgress.map((prog) => (
                    <div key={prog.id} className="flex justify-between items-center text-sm">
                      <span className="text-slate-300 truncate pr-4">{prog.problemId}</span>
                      <span className="text-emerald-400 font-mono text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Solved
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500 italic">No problems solved yet. Time to get to work!</p>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
