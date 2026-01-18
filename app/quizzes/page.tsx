'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LoadingState, ErrorState, EmptyState } from '@/components/error-states';
import { Navigation, Footer } from '@/components/navigation';

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { quizzes: loadedQuizzes } = await import('@/lib/courseContent');
        
        if (!loadedQuizzes || !Array.isArray(loadedQuizzes) || loadedQuizzes.length === 0) {
          setError('No quizzes available.');
          console.error('[v0] Quizzes data is empty or invalid');
          return;
        }

        const hasValidQuestions = loadedQuizzes.every(q => 
          q?.questions && Array.isArray(q.questions) && q.questions.length > 0
        );

        if (!hasValidQuestions) {
          setError('Quiz questions are incomplete or missing.');
          console.error('[v0] Some quizzes have invalid questions');
          return;
        }

        setQuizzes(loadedQuizzes || []);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load quizzes';
        console.error('[v0] Error loading quizzes:', error);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const quiz = selectedQuiz ? quizzes.find(q => q?.id === selectedQuiz) : null;
  const currentQuestion = quiz && quiz.questions ? quiz.questions[currentQuestionIndex] : null;

  const handleAnswerSelect = (answerId: string) => {
    if (!currentQuestion?.id) {
      console.warn('[v0] Current question is missing an ID');
      return;
    }
    
    setAnswers({
      ...answers,
      [currentQuestion.id]: answerId
    });
  };

  const handleNext = () => {
    if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getScore = () => {
    if (!quiz || !quiz.questions || quiz.questions.length === 0) return 0;
    let correct = 0;
    quiz.questions.forEach(q => {
      if (answers[q?.id] === q?.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const score = getScore();
  const isPassed = score >= (quiz?.passingScore || 70);

  if (isLoading) {
    return <LoadingState message="Loading quizzes..." />;
  }

  if (error) {
    return <ErrorState 
      title="Failed to Load Quizzes"
      description={error}
      action="/quizzes"
      actionLabel="Retry"
    />;
  }

  if (!quizzes || quizzes.length === 0) {
    return <EmptyState 
      title="No Quizzes Available"
      description="Assessment content is currently unavailable. Please check back later."
      action="/"
      actionLabel="Return Home"
    />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {!selectedQuiz ? (
        <>
          {/* Hero Section */}
          <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-12">
            <div className="max-w-5xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8">
                Assessment Quizzes
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Test your knowledge with 20+ MCQ quizzes covering DSA, algorithms, system design, and more. Instant feedback and explanations included.
              </p>
            </div>
          </section>

          {/* Quizzes Grid */}
          <section className="px-8 md:px-12 py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-black mb-8">Available Quizzes ({quizzes?.length || 0})</h2>

            {quizzes && quizzes.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {quizzes.map((q) => {
                  const isValidQuiz = q?.id && q?.title && q?.questions && Array.isArray(q.questions) && q.questions.length > 0;
                  
                  return (
                    <div
                      key={q?.id || Math.random()}
                      onClick={() => {
                        if (isValidQuiz) {
                          setSelectedQuiz(q.id);
                          setCurrentQuestionIndex(0);
                          setAnswers({});
                          setShowResults(false);
                        }
                      }}
                      className={`border p-6 md:p-8 transition-all duration-300 group ${
                        isValidQuiz
                          ? 'border-border/30 hover:border-border/60 cursor-pointer'
                          : 'border-red-500/30 bg-red-500/5 cursor-not-allowed'
                      }`}
                    >
                      <h3 className="text-lg md:text-xl font-black mb-3 group-hover:translate-x-2 transition-transform duration-300">
                        {q?.title || 'Untitled Quiz'}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-6">
                        {q?.description || 'No description available'}
                      </p>

                      {isValidQuiz ? (
                        <>
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/20">
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">Questions</div>
                              <div className="text-lg md:text-xl font-black">{q.questions?.length || 0}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">Pass Score</div>
                              <div className="text-lg md:text-xl font-black">{q.passingScore || 70}%</div>
                            </div>
                          </div>

                          <button className="w-full mt-6 px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-medium border border-border/30 hover:border-border/60 transition-all duration-300">
                            Start Quiz
                          </button>
                        </>
                      ) : (
                        <div className="pt-4 border-t border-red-500/20">
                          <p className="text-xs md:text-sm text-red-600 dark:text-red-400">
                            This quiz is unavailable due to missing or corrupted data.
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-16 md:py-24 px-8 text-center border border-border/30 rounded-lg">
                <div className="space-y-4 max-w-md mx-auto">
                  <h3 className="text-xl md:text-2xl font-black">No Quizzes Available</h3>
                  <p className="text-muted-foreground">Check back later for assessment quizzes.</p>
                </div>
              </div>
            )}
          </section>
        </>
      ) : !quiz || !quiz.questions || quiz.questions.length === 0 ? (
        // Quiz missing or invalid
        <ErrorState 
          title="Quiz Not Found"
          description="The selected quiz is no longer available or has been corrupted. Please try selecting another quiz."
          action="/quizzes"
          actionLabel="Back to Quizzes"
        />
      ) : !currentQuestion ? (
        // Current question missing
        <ErrorState 
          title="Question Unavailable"
          description="The current question is missing or corrupted. Please restart the quiz."
          action="/quizzes"
          actionLabel="Restart"
        />
      ) : showResults ? (
        // Results Screen
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8">
              Quiz Complete
            </h1>

            <div className={`text-6xl md:text-8xl font-black mb-8 ${isPassed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {score}%
            </div>

            <p className="text-xl md:text-2xl font-black mb-4">
              {isPassed ? 'You Passed!' : 'Try Again'}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-12">
              You answered {Object.keys(answers).length} out of {quiz?.questions?.length || 0} questions correctly.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                }}
                className="w-full px-8 py-4 text-sm md:text-base uppercase tracking-widest font-medium border border-foreground bg-foreground text-background hover:opacity-90 transition-all duration-300"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => {
                  setSelectedQuiz(null);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="w-full px-8 py-4 text-sm md:text-base uppercase tracking-widest font-medium border border-border/30 hover:border-border/60 transition-all duration-300"
              >
                Back to Quizzes
              </button>
            </div>
          </div>

          {/* Answer Review */}
          <section className="mt-20 md:mt-32 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-12">Review Answers</h2>

            <div className="space-y-8 md:space-y-12">
              {quiz?.questions.map((question, idx) => {
                const selectedAnswer = answers[question.id];
                const isCorrect = selectedAnswer === question.correctAnswer;

                return (
                  <div key={question.id} className="border border-border/30 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <h3 className="text-lg md:text-xl font-black flex-1">
                        Q{idx + 1}: {question.question}
                      </h3>
                      <span className={`px-4 py-2 text-xs font-black rounded-full whitespace-nowrap flex-shrink-0 ${
                        isCorrect
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                          : 'bg-red-500/10 text-red-600 dark:text-red-400'
                      }`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {question.options.map((option) => {
                        const isSelected = selectedAnswer === option.id;
                        const isCorrectOption = option.id === question.correctAnswer;

                        return (
                          <div
                            key={option.id}
                            className={`p-4 rounded-lg border transition-all duration-300 ${
                              isCorrectOption
                                ? 'border-green-500/50 bg-green-500/10'
                                : isSelected && !isCorrect
                                ? 'border-red-500/50 bg-red-500/10'
                                : 'border-border/30'
                            }`}
                          >
                            <p className="text-sm md:text-base">{option.text}</p>
                            {isCorrectOption && <p className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Correct Answer</p>}
                            {isSelected && !isCorrect && <p className="text-xs text-red-600 dark:text-red-400 mt-1">✗ Your Answer</p>}
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm md:text-base text-muted-foreground">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      ) : (
        // Quiz Screen
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Progress */}
            <div className="mb-12 md:mb-16">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-black">{quiz?.title}</h2>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {quiz?.questions.length}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 md:h-3">
                <div
                  className="bg-foreground h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / (quiz?.questions.length || 1)) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-black mb-8">
                {currentQuestion?.question}
              </h3>

              <div className="space-y-4 md:space-y-6">
                {currentQuestion?.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.id;

                  return (
                    <label
                      key={option.id}
                      className={`flex items-start p-6 md:p-8 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? 'border-foreground bg-foreground/5'
                          : 'border-border/30 hover:border-border/60'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={option.id}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(option.id)}
                        className="mt-1 mr-4 md:mr-6"
                      />
                      <span className="text-base md:text-lg">{option.text}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 md:gap-6">
              <button
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest font-medium border border-border/30 hover:border-border/60 disabled:opacity-50 transition-all duration-300"
              >
                Previous
              </button>

              {currentQuestionIndex === (quiz?.questions.length || 0) - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length !== quiz?.questions.length}
                  className="flex-1 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground bg-foreground text-background hover:opacity-90 disabled:opacity-50 transition-all duration-300"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion?.id || '']}
                  className="flex-1 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground bg-foreground text-background hover:opacity-90 disabled:opacity-50 transition-all duration-300"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {!selectedQuiz && <Footer />}
    </div>
  );
}
