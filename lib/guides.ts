// =============================================================================
// Guides Data Module
// Maps the markdown files from addi/coding-resources-main/ into structured data
// =============================================================================

export interface Guide {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  filename: string; // relative to addi/coding-resources-main/
}

export const guides: Guide[] = [
  {
    slug: 'placement-roadmap',
    title: 'Complete Placement Roadmap',
    description: 'A comprehensive 3-year roadmap from programming basics to placement mastery. Covers DSA, web dev, projects, and interview preparation.',
    icon: '🗺️',
    category: 'Roadmaps',
    filename: 'README.md',
  },
  {
    slug: 'placement-companies',
    title: 'Company Hiring Timelines',
    description: 'Hiring processes and timelines for top tech companies including Microsoft, Google, Amazon, Meta, and more.',
    icon: '🏢',
    category: 'Placement',
    filename: 'placement.md',
  },
  {
    slug: 'beginners-guide',
    title: "Beginner's Programming Guide",
    description: 'Starting from zero? This guide covers everything you need to know to begin your coding journey.',
    icon: '🌱',
    category: 'Getting Started',
    filename: 'beginners-guide.md',
  },
  {
    slug: 'dsa-vs-dev',
    title: 'DSA vs Development',
    description: 'The age-old debate: should you focus on DSA or development? This guide breaks it down with practical advice.',
    icon: '⚖️',
    category: 'Strategy',
    filename: 'dsa-vs-dev.md',
  },
  {
    slug: 'full-stack',
    title: 'Full Stack Development Guide',
    description: 'Complete guide to becoming a full-stack developer. Frontend, backend, databases, deployment, and more.',
    icon: '🔧',
    category: 'Development',
    filename: 'full-stack.md',
  },
  {
    slug: 'backend',
    title: 'Backend Development Guide',
    description: 'Deep dive into backend development: APIs, databases, server architecture, and deployment strategies.',
    icon: '⚙️',
    category: 'Development',
    filename: 'backend.md',
  },
  {
    slug: 'javascript',
    title: 'JavaScript Mastery',
    description: 'From basics to advanced concepts: closures, promises, async/await, and modern JS patterns.',
    icon: '🟨',
    category: 'Languages',
    filename: 'javascript.md',
  },
  {
    slug: 'strategy',
    title: 'Placement Strategy',
    description: 'Strategic approaches to crack placements: time management, problem-solving patterns, and preparation schedules.',
    icon: '🎯',
    category: 'Strategy',
    filename: 'strategy.md',
  },
  {
    slug: 'linkedin',
    title: 'LinkedIn Optimization',
    description: 'Build a powerful LinkedIn profile that attracts recruiters. Tips, templates, and networking strategies.',
    icon: '💼',
    category: 'Career',
    filename: 'linkedin.md',
  },
  {
    slug: 'hackathon-guide',
    title: 'Hackathon Survival Guide',
    description: 'Everything you need to know about participating in hackathons: ideation, execution, and presentation.',
    icon: '🏆',
    category: 'Events',
    filename: 'hackathon-guide.md',
  },
  {
    slug: 'consistency',
    title: 'Consistency Guide',
    description: 'How to stay consistent with your coding practice and avoid burnout during placement preparation.',
    icon: '📅',
    category: 'Strategy',
    filename: 'consistency-guide.md',
  },
  {
    slug: 'confusion',
    title: 'Clearing the Confusion',
    description: 'Common doubts and confusions students face during placement prep, answered clearly.',
    icon: '❓',
    category: 'Getting Started',
    filename: 'confusion.md',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    description: 'Introduction to cybersecurity concepts, tools, and career paths in the security domain.',
    icon: '🔒',
    category: 'Specializations',
    filename: 'Cybersecurity.md',
  },
  {
    slug: 'ai-communication',
    title: 'AI & Frequency Communication',
    description: 'Understanding AI fundamentals and their applications in modern tech interviews.',
    icon: '🤖',
    category: 'Specializations',
    filename: 'ai-frequency-comm.md',
  },
  {
    slug: 'scholarships',
    title: 'Scholarships & Opportunities',
    description: 'Comprehensive list of scholarships, fellowships, and opportunities for CS students.',
    icon: '🎓',
    category: 'Career',
    filename: 'scholarships.md',
  },
  {
    slug: 'youtube-resources',
    title: 'YouTube Learning Resources',
    description: 'Curated list of the best YouTube channels and playlists for learning programming and DSA.',
    icon: '📺',
    category: 'Resources',
    filename: 'youtube.md',
  },
  {
    slug: 'money-hacks',
    title: 'Money Hacks for Students',
    description: 'Smart financial tips for students: freelancing, part-time work, and saving strategies.',
    icon: '💰',
    category: 'Career',
    filename: 'money-hacks.md',
  },
  {
    slug: 'oops-concepts',
    title: 'OOPS Concepts Deep Dive',
    description: 'A comprehensive guide and cheat sheet for Object-Oriented Programming (OOP) concepts.',
    icon: '🧱',
    category: 'Specializations',
    filename: 'oops-concepts.md',
  },
  {
    slug: 'stl-notes',
    title: 'C++ STL Notes',
    description: 'Standard Template Library (STL) documentation and quick reference for C++ competitive programming.',
    icon: '🧰',
    category: 'Languages',
    filename: 'stl-notes.md',
  },
  {
    slug: 'java-collections',
    title: 'Java Collection Framework',
    description: 'Master the Java Collection Framework: Lists, Sets, Maps, and Queue interfaces.',
    icon: '☕',
    category: 'Languages',
    filename: 'java-collections.md',
  },
  {
    slug: 'project-based-learning',
    title: 'Project Based Learning',
    description: 'Learn programming by building real projects. A massive list of tutorials to build applications from scratch.',
    icon: '🏗️',
    category: 'Development',
    filename: 'project-based-learning.md',
  },
  {
    slug: '500-ai-projects',
    title: '500 AI & ML Projects',
    description: 'A curated list of 500 Artificial Intelligence, Machine Learning, and Computer Vision projects with code.',
    icon: '🧠',
    category: 'Specializations',
    filename: '500-ai-projects.md',
  },
  {
    slug: 'company-wise-projects',
    title: 'Company Wise Projects',
    description: 'Build clones and projects inspired by top tech companies to stand out in resume screening.',
    icon: '🏢',
    category: 'Development',
    filename: 'company-wise-projects.md',
  },
  {
    slug: 'skills-for-hackathon',
    title: 'Hackathon Skills',
    description: 'Technical and soft skills required to win hackathons and build MVPs quickly.',
    icon: '🏆',
    category: 'Events',
    filename: 'skills-for-hackathon.md',
  },
  {
    slug: 'build-your-own-x',
    title: 'Build Your Own X',
    description: 'Master software engineering by recreating your favorite technologies from scratch (Databases, OS, Bots).',
    icon: '⚙️',
    category: 'Development',
    filename: 'build-your-own-x.md',
  },
  {
    slug: 'gdoc-resources-1',
    title: 'Interview Preparation Doc 1',
    description: 'Curated technical interview notes and strategies sourced from Google Docs.',
    icon: '📝',
    category: 'Placement',
    filename: 'gdoc-resources-1.md',
  },
  {
    slug: 'gdoc-resources-2',
    title: 'Interview Preparation Doc 2',
    description: 'Curated technical interview notes and strategies sourced from Google Docs.',
    icon: '📝',
    category: 'Placement',
    filename: 'gdoc-resources-2.md',
  },
  {
    slug: 'gdoc-resources-3',
    title: 'Interview Preparation Doc 3',
    description: 'Curated technical interview notes and strategies sourced from Google Docs.',
    icon: '📝',
    category: 'Placement',
    filename: 'gdoc-resources-3.md',
  },
  {
    slug: 'gdoc-resources-4',
    title: 'Interview Preparation Doc 4',
    description: 'Curated technical interview notes and strategies sourced from Google Docs.',
    icon: '📝',
    category: 'Placement',
    filename: 'gdoc-resources-4.md',
  }
];

export const guideCategories = [...new Set(guides.map(g => g.category))];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter(g => g.category === category);
}
