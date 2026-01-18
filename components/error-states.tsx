import Link from 'next/link';

export function LoadingState({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="animate-spin h-8 w-8 border-2 border-foreground border-t-transparent rounded-full"></div>
        </div>
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

export function EmptyState({ 
  title, 
  description, 
  action,
  actionLabel = 'Go Home'
}: { 
  title: string; 
  description: string; 
  action?: string;
  actionLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
      <div className="text-center space-y-6 max-w-md">
        <div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">{title}</h1>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href={action || '/'} 
            className="text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition duration-300"
          >
            {actionLabel}
          </Link>
          <Link 
            href="/" 
            className="text-xs md:text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition duration-300"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ErrorState({ 
  title = 'Oops, something went wrong',
  description = 'We encountered an error loading this content. Please try again or return home.',
  action = '/',
  actionLabel = 'Try Again'
}: { 
  title?: string; 
  description?: string; 
  action?: string;
  actionLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
      <div className="text-center space-y-6 max-w-md">
        <div>
          <div className="text-4xl md:text-5xl font-black text-destructive mb-4">!</div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">{title}</h1>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href={action} 
            className="text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition duration-300"
          >
            {actionLabel}
          </Link>
          <Link 
            href="/" 
            className="text-xs md:text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition duration-300"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function NoResultsState({ 
  title = 'No Results Found',
  description = 'We couldn\'t find what you\'re looking for. Try adjusting your filters or search terms.',
  actionLabel = 'Clear Filters'
}: { 
  title?: string; 
  description?: string;
  actionLabel?: string;
}) {
  return (
    <div className="py-16 md:py-24 px-8 md:px-12 text-center">
      <div className="space-y-6 max-w-md mx-auto">
        <div>
          <h2 className="text-2xl md:text-3xl font-black mb-3">{title}</h2>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function ContentNotFoundState({ 
  item = 'Content',
  suggestion = 'Start from the main learning page to explore available topics and problems.'
}: { 
  item?: string;
  suggestion?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
      <div className="text-center space-y-6 max-w-md">
        <div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">{item} Not Found</h1>
          <p className="text-muted-foreground leading-relaxed">{suggestion}</p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/learn" 
            className="text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition duration-300"
          >
            Browse Topics
          </Link>
          <Link 
            href="/" 
            className="text-xs md:text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition duration-300"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TopicNotFoundState({ 
  topicId,
  suggestedTopics = []
}: { 
  topicId?: string;
  suggestedTopics?: Array<{ id: string; title: string; difficulty: string }>;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-8">
          <div>
            <div className="text-5xl md:text-6xl font-black text-muted-foreground mb-4">?</div>
            <h1 className="text-3xl md:text-4xl font-black mb-3">Topic Not Found</h1>
            <p className="text-muted-foreground leading-relaxed">
              The topic you're looking for doesn't exist or may have been moved. But don't worry—there are plenty of other topics to explore!
            </p>
          </div>

          {suggestedTopics.length > 0 && (
            <div>
              <h2 className="text-lg font-black mb-6">Popular Topics to Explore</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {suggestedTopics.slice(0, 4).map(topic => (
                  <Link key={topic.id} href={`/learn/${topic.id}`}>
                    <div className="border border-border/30 p-4 md:p-6 hover:border-border/60 transition-all duration-300 group cursor-pointer text-left">
                      <h3 className="font-black mb-2 group-hover:translate-x-1 transition-transform duration-300">{topic.title}</h3>
                      <div className="text-xs text-muted-foreground">
                        <span className={`inline-block px-2 py-1 rounded ${
                          topic.difficulty === 'Beginner'
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                            : topic.difficulty === 'Intermediate'
                            ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                            : 'bg-red-500/10 text-red-600 dark:text-red-400'
                        }`}>
                          {topic.difficulty}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/learn" 
              className="text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition duration-300"
            >
              Browse All Topics
            </Link>
            <Link 
              href="/" 
              className="text-xs md:text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition duration-300"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProblemNotFoundState({ 
  problemId,
  suggestedProblems = []
}: { 
  problemId?: string;
  suggestedProblems?: Array<{ id: string; title: string; difficulty: string }>;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-8">
          <div>
            <div className="text-5xl md:text-6xl font-black text-muted-foreground mb-4">?</div>
            <h1 className="text-3xl md:text-4xl font-black mb-3">Problem Not Found</h1>
            <p className="text-muted-foreground leading-relaxed">
              The problem you're looking for doesn't exist or may have been archived. Try exploring other coding challenges below!
            </p>
          </div>

          {suggestedProblems.length > 0 && (
            <div>
              <h2 className="text-lg font-black mb-6">Similar Problems to Practice</h2>
              <div className="space-y-3 mb-8">
                {suggestedProblems.slice(0, 3).map(problem => (
                  <Link key={problem.id} href={`/problems/${problem.id}`}>
                    <div className="border border-border/30 p-4 md:p-6 hover:border-border/60 transition-all duration-300 group cursor-pointer text-left flex items-center justify-between">
                      <div>
                        <h3 className="font-black group-hover:translate-x-1 transition-transform duration-300">{problem.title}</h3>
                      </div>
                      <div className="text-xs text-muted-foreground flex-shrink-0 ml-4">
                        <span className={`inline-block px-2 py-1 rounded ${
                          problem.difficulty === 'easy'
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                            : problem.difficulty === 'medium'
                            ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                            : 'bg-red-500/10 text-red-600 dark:text-red-400'
                        }`}>
                          {problem.difficulty}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/problems" 
              className="text-xs md:text-sm uppercase tracking-widest font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition duration-300"
            >
              Browse All Problems
            </Link>
            <Link 
              href="/" 
              className="text-xs md:text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition duration-300"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
