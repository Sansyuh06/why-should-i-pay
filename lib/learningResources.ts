// COMPREHENSIVE LEARNING RESOURCES
// YouTube Playlists, GFG Quizzes, Interactive Platforms, Tutorials

export interface VideoResource {
    id: string;
    title: string;
    url: string;
    type: 'video' | 'playlist';
    channel?: string;
    topic: string;
    language: string;
}

export interface QuizResource {
    id: string;
    title: string;
    url: string;
    topic: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    questionCount?: number;
}

export interface TutorialResource {
    id: string;
    title: string;
    url: string;
    topic: string;
    type: 'tutorial' | 'notes' | 'interview-prep';
    source: string;
}

export interface InteractivePlatform {
    id: string;
    title: string;
    url: string;
    description: string;
    features: string[];
}

// ============================================
// YOUTUBE VIDEO RESOURCES
// ============================================
export const youtubeResources: VideoResource[] = [
    // Individual Videos
    { id: 'yt-dsa-basics-1', title: 'DSA Complete Course', url: 'https://www.youtube.com/watch?v=KyQKTJhSIak', type: 'video', topic: 'DSA', language: 'Hindi/English' },
    { id: 'yt-dsa-basics-2', title: 'Data Structures Tutorial', url: 'https://www.youtube.com/watch?v=3-4qAkFRpAk', type: 'video', topic: 'DSA', language: 'Hindi/English' },
    { id: 'yt-algorithms-1', title: 'Algorithms Explained', url: 'https://www.youtube.com/watch?v=PwwvZQORy1I', type: 'video', topic: 'Algorithms', language: 'English' },
    { id: 'yt-coding-interview', title: 'Coding Interview Prep', url: 'https://www.youtube.com/watch?v=AjQPRomyd-k', type: 'video', topic: 'Interview Prep', language: 'English' },
    { id: 'yt-problem-solving', title: 'Problem Solving Techniques', url: 'https://www.youtube.com/watch?v=UU1WVnMk4E8', type: 'video', topic: 'Problem Solving', language: 'English' },

    // Playlists
    { id: 'yt-playlist-python', title: 'Python Full Course (CodeWithHarry)', url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg', type: 'playlist', channel: 'CodeWithHarry', topic: 'Python', language: 'Hindi' },
    { id: 'yt-playlist-web-dev', title: 'Web Development Complete', url: 'https://www.youtube.com/playlist?list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD', type: 'playlist', topic: 'Web Development', language: 'Hindi/English' },
    { id: 'yt-playlist-gate', title: 'GATE Preparation Playlist', url: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_', type: 'playlist', topic: 'GATE Prep', language: 'English' },
    { id: 'yt-playlist-os', title: 'Operating Systems Complete', url: 'https://www.youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV', type: 'playlist', topic: 'Operating Systems', language: 'Hindi/English' },
];

// ============================================
// GEEKSFORGEEKS QUIZZES
// ============================================
export const gfgQuizzes: QuizResource[] = [
    // Java Quizzes
    { id: 'gfg-java-abstract', title: 'Abstract Class & Interface Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/abstract-class-and-interface-in-java-gq/', topic: 'Java OOP', difficulty: 'intermediate' },
    { id: 'gfg-java-arrays', title: 'Java Arrays Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/arrays-gq/', topic: 'Java Arrays', difficulty: 'beginner' },
    { id: 'gfg-java-datatypes', title: 'Java Data Types Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/data-types-2-gq/', topic: 'Java Basics', difficulty: 'beginner' },
    { id: 'gfg-java-constructors', title: 'Java Constructors Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/constructors-2-gq/', topic: 'Java OOP', difficulty: 'intermediate' },
    { id: 'gfg-java-exceptions', title: 'Exception Handling Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/exception-handling-2-gq/', topic: 'Java Exceptions', difficulty: 'intermediate' },
    { id: 'gfg-java-packages', title: 'Java Packages Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/packages-gq/', topic: 'Java Packages', difficulty: 'beginner' },
    { id: 'gfg-java-class-object', title: 'Class & Object Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/class-and-object-2-gq/', topic: 'Java OOP', difficulty: 'beginner' },
    { id: 'gfg-java-functions', title: 'Java Functions Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/functions-2-gq/', topic: 'Java Methods', difficulty: 'beginner' },
    { id: 'gfg-java-final', title: 'Final Keyword Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/final-keyword-gq/', topic: 'Java Keywords', difficulty: 'intermediate' },
    { id: 'gfg-java-operators', title: 'Java Operators Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/operators-gq/', topic: 'Java Basics', difficulty: 'beginner' },
    { id: 'gfg-java-output', title: 'Java Output Questions', url: 'https://www.geeksforgeeks.org/tag/java-output/', topic: 'Java Output', difficulty: 'intermediate' },
    { id: 'gfg-java-inheritance', title: 'Inheritance Quiz', url: 'https://www.geeksforgeeks.org/quizzes/inheritance-2-gq/', topic: 'Java OOP', difficulty: 'intermediate' },
];

// ============================================
// GFG TUTORIALS & NOTES
// ============================================
export const gfgTutorials: TutorialResource[] = [
    // DSA (Internal Notes)
    { id: 'dsa-arrays-guide', title: 'Arrays & Strings Complete Guide', url: '/resources/notes/dsa-arrays', topic: 'DSA', type: 'notes', source: 'Embedded' },
    { id: 'dsa-ll-guide', title: 'Linked Lists Complete Guide', url: '/resources/notes/dsa-linked-list', topic: 'DSA', type: 'notes', source: 'Embedded' },
    { id: 'dsa-trees-guide', title: 'Trees & BST Complete Guide', url: '/resources/notes/dsa-trees', topic: 'DSA', type: 'notes', source: 'Embedded' },
    { id: 'dsa-graphs-guide', title: 'Graph Algorithms Guide', url: '/resources/notes/dsa-graphs', topic: 'DSA', type: 'notes', source: 'Embedded' },
    { id: 'dsa-dp-guide', title: 'Dynamic Programming Guide', url: '/resources/notes/dsa-dp', topic: 'DSA', type: 'notes', source: 'Embedded' },

    // Operating Systems
    { id: 'gfg-os-notes', title: 'Last Minute Notes - OS', url: '/resources/notes/os-notes', topic: 'Operating Systems', type: 'notes', source: 'Embedded' },

    // Computer Networks
    { id: 'gfg-cn-notes', title: 'Last Minute Notes - CN', url: '/resources/notes/cn-notes', topic: 'Computer Networks', type: 'notes', source: 'Embedded' },

    // DBMS
    { id: 'gfg-dbms-notes', title: 'Last Minute Notes - DBMS', url: '/resources/notes/dbms-notes', topic: 'DBMS', type: 'notes', source: 'Embedded' },

    // C++
    { id: 'cpp-basics-pdf', title: 'C++ Basics (PDF)', url: '/pdfs/stl/C++ BASIC .pdf', topic: 'C++', type: 'notes', source: 'PDF' },
];

// ============================================
// INTERACTIVE PLATFORMS
// ============================================
export const interactivePlatforms: InteractivePlatform[] = [
    {
        id: 'visualgo',
        title: 'VisuAlgo',
        url: 'https://visualgo.net/en',
        description: 'Visualizing data structures and algorithms through animation',
        features: ['Algorithm Visualization', 'Step-by-step Animation', 'Interactive Learning', 'Multiple Languages']
    },
    {
        id: 'algomap',
        title: 'AlgoMap.io',
        url: 'https://algomap.io/roadmap',
        description: 'Complete DSA roadmap with structured learning path',
        features: ['Learning Roadmap', 'Problem Categories', 'Progress Tracking', 'Interview Prep']
    },
    {
        id: 'whimsical-languages',
        title: 'Programming Languages Map (Whimsical)',
        url: 'https://whimsical.com/programming-languages-V5Ybften8PuwuW8GfZ3LQx',
        description: 'Interactive mind map of programming languages and their relationships',
        features: ['Visual Mind Map', 'Language Comparison', 'History Timeline', 'Use Cases']
    },
];

// ============================================
// STL RESOURCES (PDFs)
// ============================================
export const stlResources = [
    { id: 'stl-vectors', title: 'Vectors in C++', url: '/pdfs/stl/vectors.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-map', title: 'Map & Multimap', url: '/pdfs/stl/map and multimap.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-set', title: 'Set & Multiset', url: '/pdfs/stl/set and multiset.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-stack', title: 'Stack', url: '/pdfs/stl/stack.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-queue', title: 'Queue', url: '/pdfs/stl/queue.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-priority-queue', title: 'Priority Queue', url: '/pdfs/stl/priority queue.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-deque', title: 'Deque', url: '/pdfs/stl/dequeue.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-list', title: 'Forward List & List', url: '/pdfs/stl/forward_list and list.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-unordered-map', title: 'Unordered Map', url: '/pdfs/stl/unordered map.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-unordered-set', title: 'Unordered Set', url: '/pdfs/stl/unordered set.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-algo-mutating', title: 'Mutating Algorithms', url: '/pdfs/stl/Mutating STL algorithms.pdf', topic: 'STL', type: 'pdf' },
    { id: 'stl-algo-non-mutating', title: 'Non-Mutating Algorithms', url: '/pdfs/stl/non-mutating STL algorithms.pdf', topic: 'STL', type: 'pdf' },
    { id: 'cpp-basics', title: 'C++ Basics', url: '/pdfs/stl/C++ BASIC .pdf', topic: 'C++', type: 'pdf' },
    { id: 'cpp-oops', title: 'C++ OOPs', url: '/pdfs/stl/C++ OOPS.pdf', topic: 'C++', type: 'pdf' },
];

// ============================================
// EXTERNAL PREMIER COLLECTIONS (Striver, NeetCode)
// ============================================
export const externalCollections = [
    {
        id: 'striver-sde',
        title: "Striver's SDE Sheet",
        url: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems',
        description: 'Top coding interview problems from Google, Amazon, etc. (External)',
        tags: ['DSA', 'Interview', 'Hard']
    },
    {
        id: 'striver-a2z',
        title: "Striver's A2Z DSA Course",
        url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2',
        description: 'Complete A-Z DSA roadmap (External)',
        tags: ['DSA', 'Course', 'Beginner-Advanced']
    },
    {
        id: 'neetcode-core',
        title: "NeetCode Core Skills",
        url: 'https://neetcode.io/practice/practice/coreSkills',
        description: 'Practice core coding patterns (External)',
        tags: ['Patterns', 'Blind 75', 'Video Solutions']
    },
    {
        id: 'leetcode-150',
        title: "LeetCode Top Interview 150",
        url: 'https://leetcode.com/studyplan/top-interview-150/',
        description: 'Essential problems for interviews (External)',
        tags: ['LeetCode', 'Interview', 'Standard']
    },
];

// ============================================
// CORE SUBJECTS FOR CS/IT
// ============================================
export const coreSubjects = [
    { id: 'dsa', name: 'Data Structures & Algorithms', icon: '🧮', tutorials: 2, quizzes: 0, videos: 5 },
    { id: 'os', name: 'Operating Systems', icon: '💻', tutorials: 2, quizzes: 0, videos: 1 },
    { id: 'cn', name: 'Computer Networks', icon: '🌐', tutorials: 2, quizzes: 0, videos: 0 },
    { id: 'dbms', name: 'Database Management', icon: '🗄️', tutorials: 2, quizzes: 0, videos: 0 },
    { id: 'oops', name: 'Object Oriented Programming', icon: '🔷', tutorials: 2, quizzes: 12, videos: 0 },
    { id: 'java', name: 'Java Programming', icon: '☕', tutorials: 1, quizzes: 12, videos: 0 },
    { id: 'python', name: 'Python Programming', icon: '🐍', tutorials: 0, quizzes: 0, videos: 1 },
    { id: 'cpp', name: 'C++ & STL', icon: '⚙️', tutorials: 1, quizzes: 0, videos: 0 },
    { id: 'webdev', name: 'Web Development', icon: '🌍', tutorials: 0, quizzes: 0, videos: 1 },
];

// ============================================
// COMBINED STATS
// ============================================
export const resourceStats = {
    totalVideos: youtubeResources.length,
    totalQuizzes: gfgQuizzes.length,
    totalTutorials: gfgTutorials.length,
    totalPlatforms: interactivePlatforms.length,
    totalResources: youtubeResources.length + gfgQuizzes.length + gfgTutorials.length + interactivePlatforms.length,
    subjects: coreSubjects.length,
};

// Get resources by topic
export function getResourcesByTopic(topic: string) {
    return {
        videos: youtubeResources.filter(v => v.topic.toLowerCase().includes(topic.toLowerCase())),
        quizzes: gfgQuizzes.filter(q => q.topic.toLowerCase().includes(topic.toLowerCase())),
        tutorials: gfgTutorials.filter(t => t.topic.toLowerCase().includes(topic.toLowerCase())),
    };
}

// Get all topics
export function getAllTopics(): string[] {
    const topics = new Set<string>();
    youtubeResources.forEach(v => topics.add(v.topic));
    gfgQuizzes.forEach(q => topics.add(q.topic));
    gfgTutorials.forEach(t => topics.add(t.topic));
    return Array.from(topics).sort();
}
