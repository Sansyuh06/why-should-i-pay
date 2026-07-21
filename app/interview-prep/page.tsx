'use client';

import { useState } from 'react';
import { Navigation, Footer } from '@/components/navigation';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Brain, Lightbulb, RotateCcw, CheckCircle2 } from 'lucide-react';

// ─── Interview Questions Data ───────────────────────────────────────
// Sourced from addi/10 Interview QnA.txt + addi/64 Toughest Interview Questions.pdf
const interviewQuestions = [
    {
        id: 1,
        question: 'Tell me about yourself.',
        answer: 'Describe the key experiences in your career that qualify you for the position. Avoid disclosing age or going too far back in your history, and keep it focused on your professional life. Structure it as: Present → Past → Future.',
        category: 'Introduction',
        tips: ['Keep it under 2 minutes', 'Focus on relevant experience', 'End with why you\'re excited about this role'],
    },
    {
        id: 2,
        question: 'Why are you interested in our company?',
        answer: 'Before your interview, browse the company\'s website and social media pages as well as any news articles or company reviews. Share what interests you about the company\'s products, services, culture, or values.',
        category: 'Company Fit',
        tips: ['Research the company thoroughly', 'Mention specific products or values', 'Show genuine enthusiasm'],
    },
    {
        id: 3,
        question: 'Why are you interested in this position?',
        answer: 'Review the job description and identify several responsibilities or factors that attract you to the role. Connect your skills and career goals to the specific opportunity.',
        category: 'Role Fit',
        tips: ['Reference the job description', 'Align with your career goals', 'Show how you can add value'],
    },
    {
        id: 4,
        question: 'What are your strengths?',
        answer: 'Read through the job description to see what skills the company wants. Match 2-3 of those skills with specific examples of how you\'ve demonstrated that skill successfully in the past.',
        category: 'Self-Assessment',
        tips: ['Use the STAR method for examples', 'Pick strengths relevant to the role', 'Be specific, not generic'],
    },
    {
        id: 5,
        question: 'What are your weaknesses?',
        answer: 'Share one trait that doesn\'t affect your ability to do the core responsibilities of your job but could use improvement. Describe your awareness of the trait and how you manage it or intend to improve upon it.',
        category: 'Self-Assessment',
        tips: ['Never say "I have no weaknesses"', 'Show self-awareness', 'Explain how you\'re working on it'],
    },
    {
        id: 6,
        question: 'Why should we hire you over other qualified candidates?',
        answer: 'Consider the unique experiences you have that may stand out to an employer. This could be specific industry knowledge, experience working in a similar environment, or training in a certain skill area.',
        category: 'Value Proposition',
        tips: ['Highlight what makes you unique', 'Reference your relevant achievements', 'Be confident but not arrogant'],
    },
    {
        id: 7,
        question: 'Where do you see yourself in 5 years?',
        answer: 'Outlining a few key areas that you feel are interesting, achievable and relevant to the role can provide sufficient information for the employer while also communicating that you\'re flexible about the future.',
        category: 'Career Goals',
        tips: ['Show ambition but be realistic', 'Align with the company\'s growth', 'Don\'t mention leaving the company'],
    },
    {
        id: 8,
        question: 'Tell me about a time you failed.',
        answer: 'When choosing an instance of failure to discuss, think hard about the outcome of the failure and whether it will boost your chances of getting the job. Choose a story that highlights some of your key qualities relevant to the position.',
        category: 'Behavioral',
        tips: ['Focus on what you learned', 'Show growth and resilience', 'Keep it professional'],
    },
    {
        id: 9,
        question: 'What are your salary expectations?',
        answer: 'Prospective employers may ask you about your salary expectations at any stage during the hiring process. Researching the average salary for your position and experience can help you come up with a realistic figure.',
        category: 'Negotiation',
        tips: ['Research market rates first', 'Give a range, not a fixed number', 'Consider the full compensation package'],
    },
    {
        id: 10,
        question: 'What questions do you have for us?',
        answer: 'By asking thoughtful questions, this gives you the opportunity to not only learn more about the role and company, but it also lets you leave a strong impression. Always have 2-3 questions prepared.',
        category: 'Closing',
        tips: ['Ask about team culture', 'Inquire about growth opportunities', 'Ask about the company\'s biggest challenges'],
    },
    {
        id: 11,
        question: 'Explain a complex technical concept to a non-technical person.',
        answer: 'Use analogies from everyday life. For example, explain a database as "a really organized filing cabinet" or an API as "a waiter in a restaurant who takes your order to the kitchen and brings back food."',
        category: 'Communication',
        tips: ['Use relatable analogies', 'Avoid jargon', 'Check for understanding'],
    },
    {
        id: 12,
        question: 'How do you handle disagreements with team members?',
        answer: 'Describe your approach: listen actively to understand their perspective, find common ground, present your reasoning with data or examples, and if needed, escalate constructively while maintaining respect.',
        category: 'Behavioral',
        tips: ['Show empathy and listening skills', 'Give a real example', 'Emphasize collaboration over winning'],
    },
    {
        id: 13,
        question: 'Describe a project you\'re most proud of.',
        answer: 'Choose a project that\'s relevant to the role. Describe the problem, your approach, technologies used, challenges faced, and the impact/results. Quantify outcomes when possible.',
        category: 'Technical',
        tips: ['Use the STAR method', 'Quantify your impact', 'Show ownership and leadership'],
    },
    {
        id: 14,
        question: 'How do you stay updated with technology trends?',
        answer: 'Mention specific resources: tech blogs (HackerNews, Dev.to), podcasts, YouTube channels, open-source contributions, side projects, and online communities you\'re part of.',
        category: 'Growth',
        tips: ['Be specific about resources', 'Mention recent learnings', 'Show genuine curiosity'],
    },
    {
        id: 15,
        question: 'How do you prioritize tasks when everything seems urgent?',
        answer: 'Explain your framework: categorize tasks by impact and urgency (Eisenhower Matrix), communicate with stakeholders about trade-offs, and focus on delivering value incrementally.',
        category: 'Problem Solving',
        tips: ['Mention a specific framework', 'Give a real example', 'Show communication skills'],
    },
];

const categories = [...new Set(interviewQuestions.map(q => q.category))];

export default function InterviewPrepPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isFlashcardMode, setIsFlashcardMode] = useState(false);
    const [currentFlashcard, setCurrentFlashcard] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const filtered = activeCategory
        ? interviewQuestions.filter(q => q.category === activeCategory)
        : interviewQuestions;

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const toggleComplete = (id: number) => {
        const next = new Set(completedIds);
        if (next.has(id)) {
            next.delete(id);
        } else {
            next.add(id);
        }
        setCompletedIds(next);
    };

    const resetProgress = () => {
        setCompletedIds(new Set());
    };

    const nextFlashcard = () => {
        setShowAnswer(false);
        setCurrentFlashcard((prev) => (prev + 1) % filtered.length);
    };

    const prevFlashcard = () => {
        setShowAnswer(false);
        setCurrentFlashcard((prev) => (prev - 1 + filtered.length) % filtered.length);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-12 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <Brain className="w-8 h-8 text-accent" />
                        <span className="text-xs uppercase tracking-widest text-accent font-bold">Interview Prep</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Interview Questions
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mb-6">
                        Master the most frequently asked interview questions with detailed answers, expert tips, and flashcard practice mode.
                    </p>

                    {/* Progress */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 max-w-xs">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="text-accent font-bold">{completedIds.size}/{interviewQuestions.length}</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-accent rounded-full transition-all duration-500"
                                    style={{ width: `${(completedIds.size / interviewQuestions.length) * 100}%` }}
                                />
                            </div>
                        </div>
                        <button onClick={resetProgress} className="text-xs text-muted-foreground hover:text-foreground transition flex items-center gap-1">
                            <RotateCcw className="w-3 h-3" /> Reset
                        </button>
                    </div>

                    {/* Mode Toggle */}
                    <div className="flex gap-3 mb-6">
                        <button
                            onClick={() => setIsFlashcardMode(false)}
                            className={`px-4 py-2 text-sm rounded-lg font-medium transition ${!isFlashcardMode ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}
                        >
                            📋 List View
                        </button>
                        <button
                            onClick={() => { setIsFlashcardMode(true); setShowAnswer(false); setCurrentFlashcard(0); }}
                            className={`px-4 py-2 text-sm rounded-lg font-medium transition ${isFlashcardMode ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}
                        >
                            🃏 Flashcard Mode
                        </button>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => { setActiveCategory(null); setCurrentFlashcard(0); }}
                            className={`px-3 py-1.5 text-xs rounded-full transition ${!activeCategory ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
                        >
                            All
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(activeCategory === cat ? null : cat); setCurrentFlashcard(0); }}
                                className={`px-3 py-1.5 text-xs rounded-full transition ${activeCategory === cat ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="px-6 md:px-12 pb-16 border-t border-border/20 pt-8">
                <div className="max-w-4xl mx-auto">
                    {isFlashcardMode ? (
                        /* ─── Flashcard Mode ─── */
                        <div className="flex flex-col items-center">
                            <div className="text-sm text-muted-foreground mb-4">
                                {currentFlashcard + 1} / {filtered.length}
                            </div>
                            <Card
                                className="w-full max-w-2xl p-8 min-h-[300px] flex flex-col items-center justify-center cursor-pointer transition-all hover:border-accent/40"
                                onClick={() => setShowAnswer(!showAnswer)}
                            >
                                {!showAnswer ? (
                                    <div className="text-center">
                                        <span className="text-xs text-accent mb-4 block">{filtered[currentFlashcard]?.category}</span>
                                        <h3 className="text-2xl font-bold mb-6">{filtered[currentFlashcard]?.question}</h3>
                                        <p className="text-sm text-muted-foreground">Click to reveal answer</p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <span className="text-xs text-accent mb-4 block">Answer</span>
                                        <p className="text-muted-foreground leading-relaxed mb-6">{filtered[currentFlashcard]?.answer}</p>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {filtered[currentFlashcard]?.tips.map((tip, i) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full flex items-center gap-1">
                                                    <Lightbulb className="w-3 h-3" /> {tip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </Card>
                            <div className="flex gap-4 mt-6">
                                <button onClick={prevFlashcard} className="px-6 py-2 bg-muted rounded hover:bg-muted/80 transition text-sm">
                                    ← Previous
                                </button>
                                <button onClick={nextFlashcard} className="px-6 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition text-sm">
                                    Next →
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* ─── List Mode ─── */
                        <div className="space-y-3">
                            {filtered.map((q) => (
                                <div
                                    key={q.id}
                                    className={`border rounded-lg transition-all ${completedIds.has(q.id) ? 'border-green-500/30 bg-green-500/5' : 'border-border/20 hover:border-border/50'}`}
                                >
                                    <div
                                        className="flex items-center gap-3 p-4 cursor-pointer"
                                        onClick={() => toggleExpand(q.id)}
                                    >
                                        <button
                                            onClick={(e) => { e.stopPropagation(); toggleComplete(q.id); }}
                                            className={`flex-shrink-0 w-5 h-5 rounded-full border transition ${completedIds.has(q.id)
                                                ? 'bg-green-500 border-green-500 text-white'
                                                : 'border-muted-foreground/30 hover:border-accent'
                                                } flex items-center justify-center`}
                                        >
                                            {completedIds.has(q.id) && <CheckCircle2 className="w-3.5 h-3.5" />}
                                        </button>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">{q.category}</span>
                                            </div>
                                            <h3 className="font-medium">{q.question}</h3>
                                        </div>
                                        {expandedId === q.id
                                            ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                            : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                        }
                                    </div>

                                    {expandedId === q.id && (
                                        <div className="px-4 pb-4 pt-0 pl-12 animate-fade-in-up">
                                            <p className="text-muted-foreground leading-relaxed mb-4">{q.answer}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {q.tips.map((tip, i) => (
                                                    <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full flex items-center gap-1">
                                                        <Lightbulb className="w-3 h-3" /> {tip}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
