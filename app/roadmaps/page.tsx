'use client';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2, Circle, ChevronRight, ChevronDown, Clock, Target, BookOpen } from 'lucide-react';
import { Navigation, Footer } from '@/components/navigation';
import { sdeRoadmap, roadmapStats, RoadmapPhase } from '@/lib/sdeRoadmap';
import { learningPaths } from '@/lib/courseContent';

export default function RoadmapsPage() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-12">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8">
            Learning Roadmaps
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Structured learning paths for interview preparation. Follow the 10-month SDE roadmap or choose a shorter path.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="px-8 md:px-12 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-muted/50 rounded-lg">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-primary">{roadmapStats.totalWeeks}</div>
            <div className="text-sm text-muted-foreground">Weeks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-primary">{roadmapStats.phases}</div>
            <div className="text-sm text-muted-foreground">Phases</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-primary">{roadmapStats.totalProblems}+</div>
            <div className="text-sm text-muted-foreground">Problems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-primary">{roadmapStats.estimatedHours}h</div>
            <div className="text-sm text-muted-foreground">Total Hours</div>
          </div>
        </div>
      </section>

      {/* 10-Month SDE Roadmap */}
      <section className="px-8 md:px-12 py-16 md:py-20 border-t border-border/30">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h2 className="text-3xl md:text-4xl font-black">{sdeRoadmap.name}</h2>
              <p className="text-muted-foreground">{sdeRoadmap.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span>{sdeRoadmap.dailyHours} hours/day recommended</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-muted-foreground" />
              <span>{sdeRoadmap.totalMonths} months total</span>
            </div>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-6">
          {sdeRoadmap.phases.map((phase, phaseIndex) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              index={phaseIndex}
              isExpanded={selectedPhase === phase.id}
              onToggle={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
              expandedWeek={expandedWeek}
              setExpandedWeek={setExpandedWeek}
            />
          ))}
        </div>
      </section>

      {/* Quick Paths */}
      <section className="px-8 md:px-12 py-16 md:py-20 border-t border-border/30">
        <h2 className="text-2xl md:text-3xl font-black mb-8">Quick Learning Paths</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {learningPaths.map((path) => (
            <Card key={path.id} className="p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📚</span>
                <h3 className="text-xl font-bold">{path.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span>{path.duration} weeks</span>
                <span className={`px-2 py-1 rounded-full text-xs ${path.difficulty === 'beginner' ? 'bg-green-500/10 text-green-500' :
                    path.difficulty === 'intermediate' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                  }`}>
                  {path.difficulty}
                </span>
              </div>
              <ul className="space-y-1 mb-6">
                {path.goals.slice(0, 3).map((goal, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href={`/learn/${path.topics[0]?.id || '#'}`}>
                  Start Path
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PhaseCard({
  phase,
  index,
  isExpanded,
  onToggle,
  expandedWeek,
  setExpandedWeek
}: {
  phase: RoadmapPhase;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  expandedWeek: number | null;
  setExpandedWeek: (week: number | null) => void;
}) {
  const phaseColors = [
    'border-l-green-500',
    'border-l-blue-500',
    'border-l-purple-500',
    'border-l-orange-500',
    'border-l-red-500'
  ];

  return (
    <Card className={`overflow-hidden border-l-4 ${phaseColors[index % phaseColors.length]}`}>
      {/* Phase Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${index === 0 ? 'bg-green-500/10 text-green-500' :
              index === 1 ? 'bg-blue-500/10 text-blue-500' :
                index === 2 ? 'bg-purple-500/10 text-purple-500' :
                  index === 3 ? 'bg-orange-500/10 text-orange-500' :
                    'bg-red-500/10 text-red-500'
            }`}>
            {index + 1}
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-black">{phase.name}</h3>
            <p className="text-sm text-muted-foreground">{phase.duration} • {phase.weeks.length} weeks</p>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Phase Content */}
      {isExpanded && (
        <div className="px-6 md:px-8 pb-8 border-t border-border/30">
          <p className="text-muted-foreground py-4">{phase.description}</p>

          {/* Milestones */}
          <div className="mb-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Phase Milestones
            </h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {phase.milestones.map((milestone, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weekly Breakdown */}
          <div className="space-y-3">
            <h4 className="font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Weekly Breakdown
            </h4>
            {phase.weeks.map((week) => (
              <WeekCard
                key={week.week}
                week={week}
                isExpanded={expandedWeek === week.week}
                onToggle={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

function WeekCard({
  week,
  isExpanded,
  onToggle
}: {
  week: any;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border/30 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold">
            {week.week}
          </div>
          <div className="text-left">
            <h5 className="font-bold">{week.theme}</h5>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{week.estimatedHours}h</span>
              <span>•</span>
              <span>{week.problems.length} problems</span>
            </div>
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-border/30 pt-4 space-y-4">
          {/* Topics */}
          <div>
            <h6 className="text-sm font-bold mb-2">Topics Covered</h6>
            <div className="flex flex-wrap gap-2">
              {week.topics.map((topic: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-muted rounded text-xs">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div>
            <h6 className="text-sm font-bold mb-2">Weekly Goals</h6>
            <ul className="space-y-1">
              {week.goals.map((goal: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problems */}
          {week.problems.length > 0 && (
            <div>
              <h6 className="text-sm font-bold mb-2">Practice Problems</h6>
              <div className="flex flex-wrap gap-2">
                {week.problems.map((problemId: string) => (
                  <Link
                    key={problemId}
                    href={`https://leetcode.com/problems/${problemId}/`}
                    target="_blank"
                    className="px-3 py-1 bg-primary/10 text-primary rounded text-xs hover:bg-primary/20 transition"
                  >
                    {problemId.replace(/-/g, ' ')} ↗
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
