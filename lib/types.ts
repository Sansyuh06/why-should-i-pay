// Domain Types
export type DomainType = 'dsa' | 'oops' | 'os' | 'system-design' | 'dbms' | 'networking' | 'web' | 'devops' | 'ml';

export interface Domain {
  id: string;
  name: string;
  icon: string;
  description: string;
  topics: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// Topic Types
export interface Topic {
  id: string;
  domain: DomainType;
  name: string;
  description: string;
  subtopics: Subtopic[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
}

export interface Subtopic {
  id: string;
  name: string;
  content: string;
  resources: Resource[];
  problems: Problem[];
  completed: boolean;
}

// Resource Types
export interface Resource {
  id: string;
  type: 'article' | 'video' | 'tutorial' | 'documentation' | 'visualization';
  title: string;
  source: string; // geeksforgeeks, youtube, w3schools, etc
  url: string;
  duration?: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content?: string; // embedded content for offline access
}

// Problem Types
export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  constraints: string[];
  examples: Example[];
  solutions: Solution[];
  acceptance: number;
  likes: number;
  category: string[];
  companies: string[];
  isLiked: boolean;
  isSolved: boolean;
  attempts: number;
}

export interface Example {
  input: string;
  output: string;
  explanation: string;
}

export interface Solution {
  id: string;
  language: 'python' | 'javascript' | 'java' | 'cpp' | 'csharp';
  code: string;
  complexity: {
    time: string;
    space: string;
  };
  explanation: string;
  votes: number;
}

// Code Editor Types
export interface CodeSubmission {
  id: string;
  problemId: string;
  language: string;
  code: string;
  status: 'pending' | 'accepted' | 'wrong' | 'compilation-error' | 'runtime-error';
  output?: string;
  expectedOutput?: string;
  executionTime?: number;
  memory?: number;
}

// Quiz Types
export interface Quiz {
  id: string;
  topicId: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

// Progress Types
export interface UserProgress {
  userId: string;
  topicsCompleted: string[];
  problemsSolved: string[];
  quizzesCompleted: string[];
  totalPoints: number;
  streak: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

// Roadmap Types
export interface LearningRoadmap {
  id: string;
  name: string;
  description: string;
  goals: string[];
  topics: Topic[];
  duration: number; // in weeks
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  progression: number; // percentage
}

// Community Types
export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  title: string;
  content: string;
  category: 'question' | 'discussion' | 'solution' | 'resource';
  tags: string[];
  likes: number;
  replies: Reply[];
  createdAt: Date;
  isLiked: boolean;
}

export interface Reply {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likes: number;
  isAccepted: boolean;
  createdAt: Date;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  role: 'student' | 'instructor' | 'admin';
  joinDate: Date;
  progress: UserProgress;
  savedProblems: string[];
  followingUsers: string[];
  followersCount: number;
}
