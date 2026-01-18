import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, CheckCircle, XCircle, Clock, Award,
    RefreshCw, ArrowRight, BookOpen
} from 'lucide-react';
import resources from '../data/resources.json';

const QuizPage = () => {
    const { quizId } = useParams();
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [quizComplete, setQuizComplete] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);

    const quiz = resources.quizzes[quizId];

    useEffect(() => {
        if (!quizComplete && quiz) {
            const timer = setInterval(() => setTimeElapsed(t => t + 1), 1000);
            return () => clearInterval(timer);
        }
    }, [quizComplete, quiz]);

    if (!quiz) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-400 mb-4">Quiz not found</h2>
                    <Link to="/practice" className="text-violet-400 hover:underline">Return to Practice</Link>
                </div>
            </div>
        );
    }

    const question = quiz[currentQuestion];
    const totalQuestions = quiz.length;
    const correctAnswers = answers.filter((a, i) => a === quiz[i].correct).length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);

    const handleAnswer = (index) => {
        if (showExplanation) return;
        setSelectedAnswer(index);
        setShowExplanation(true);
        setAnswers([...answers, index]);
    };

    const nextQuestion = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizComplete(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAnswers([]);
        setQuizComplete(false);
        setTimeElapsed(0);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Quiz Complete Screen
    if (quizComplete) {
        return (
            <div className="min-h-screen py-8">
                <div className="max-w-2xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        {/* Result Card */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-8">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                                <Award className="text-white" size={40} />
                            </div>

                            <h1 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h1>
                            <p className="text-slate-400 mb-6">
                                {quizId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </p>

                            <div className="text-6xl font-bold text-white mb-2">{score}%</div>
                            <p className="text-slate-400">
                                {correctAnswers} out of {totalQuestions} correct
                            </p>

                            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                    <Clock size={14} />
                                    Time: {formatTime(timeElapsed)}
                                </span>
                            </div>
                        </div>

                        {/* Performance Message */}
                        <div className={`p-4 rounded-xl mb-8 ${score >= 80 ? 'bg-emerald-500/10 text-emerald-400' :
                                score >= 60 ? 'bg-yellow-500/10 text-yellow-400' :
                                    'bg-red-500/10 text-red-400'
                            }`}>
                            {score >= 80 ? '🎉 Excellent! You have a strong grasp of this topic.' :
                                score >= 60 ? '👍 Good job! Review the concepts you missed.' :
                                    '📚 Keep practicing! Review the fundamentals again.'}
                        </div>

                        {/* Review Answers */}
                        <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 mb-8 text-left">
                            <h3 className="font-semibold text-white mb-4">Review Your Answers</h3>
                            <div className="space-y-4">
                                {quiz.map((q, idx) => {
                                    const isCorrect = answers[idx] === q.correct;
                                    return (
                                        <div key={idx} className="flex items-start gap-3">
                                            {isCorrect ? (
                                                <CheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={18} />
                                            ) : (
                                                <XCircle className="text-red-500 mt-0.5 flex-shrink-0" size={18} />
                                            )}
                                            <div>
                                                <p className="text-sm text-slate-300">{q.question.split('\n')[0]}</p>
                                                {!isCorrect && (
                                                    <p className="text-xs text-slate-500 mt-1">
                                                        Correct: {q.options[q.correct]}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={restartQuiz}
                                className="px-6 py-3 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors flex items-center justify-center gap-2"
                            >
                                <RefreshCw size={18} />
                                Try Again
                            </button>
                            <Link
                                to="/practice"
                                className="px-6 py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <BookOpen size={18} />
                                More Practice
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Quiz Question Screen
    return (
        <div className="min-h-screen py-8">
            <div className="max-w-3xl mx-auto px-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        to="/practice"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span>Exit Quiz</span>
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {formatTime(timeElapsed)}
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                        <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                        <span>{Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                            className="h-full bg-violet-500 rounded-full"
                        />
                    </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="rounded-2xl bg-slate-900/50 border border-white/5 overflow-hidden"
                    >
                        {/* Question */}
                        <div className="p-6 border-b border-white/5">
                            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider mb-2 block">
                                {question.topic}
                            </span>
                            <p className="text-lg text-white whitespace-pre-wrap">{question.question}</p>
                        </div>

                        {/* Options */}
                        <div className="p-6 space-y-3">
                            {question.options.map((option, idx) => {
                                const isSelected = selectedAnswer === idx;
                                const isCorrect = idx === question.correct;
                                const showResult = showExplanation;

                                let bgClass = 'bg-slate-800/50 hover:bg-slate-800';
                                let borderClass = 'border-white/5 hover:border-white/10';
                                let textClass = 'text-slate-300';

                                if (showResult) {
                                    if (isCorrect) {
                                        bgClass = 'bg-emerald-500/20';
                                        borderClass = 'border-emerald-500/50';
                                        textClass = 'text-emerald-300';
                                    } else if (isSelected && !isCorrect) {
                                        bgClass = 'bg-red-500/20';
                                        borderClass = 'border-red-500/50';
                                        textClass = 'text-red-300';
                                    }
                                } else if (isSelected) {
                                    bgClass = 'bg-violet-500/20';
                                    borderClass = 'border-violet-500/50';
                                    textClass = 'text-violet-300';
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(idx)}
                                        disabled={showExplanation}
                                        className={`w-full p-4 rounded-xl border ${bgClass} ${borderClass} ${textClass} text-left transition-all flex items-center gap-3`}
                                    >
                                        <span className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-sm font-medium">
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="flex-1">{option}</span>
                                        {showResult && isCorrect && <CheckCircle className="text-emerald-500" size={20} />}
                                        {showResult && isSelected && !isCorrect && <XCircle className="text-red-500" size={20} />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation */}
                        <AnimatePresence>
                            {showExplanation && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="border-t border-white/5"
                                >
                                    <div className="p-6">
                                        <div className={`p-4 rounded-xl ${selectedAnswer === question.correct
                                                ? 'bg-emerald-500/10 border border-emerald-500/20'
                                                : 'bg-red-500/10 border border-red-500/20'
                                            }`}>
                                            <p className={`font-medium mb-2 ${selectedAnswer === question.correct ? 'text-emerald-400' : 'text-red-400'
                                                }`}>
                                                {selectedAnswer === question.correct ? '✓ Correct!' : '✗ Incorrect'}
                                            </p>
                                            <p className="text-slate-400 text-sm">{question.explanation}</p>
                                        </div>

                                        <button
                                            onClick={nextQuestion}
                                            className="w-full mt-4 px-6 py-3 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors flex items-center justify-center gap-2"
                                        >
                                            {currentQuestion < totalQuestions - 1 ? (
                                                <>
                                                    Next Question
                                                    <ArrowRight size={18} />
                                                </>
                                            ) : (
                                                <>
                                                    See Results
                                                    <Award size={18} />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default QuizPage;
