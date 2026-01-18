import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ChevronRight, Clock, BookOpen, Code, Play, ArrowLeft,
    Layers, Database, Server, Wifi, Briefcase
} from 'lucide-react';

// Topic content data
const topicData = {
    dsa: {
        title: 'Data Structures & Algorithms',
        color: '#8B5CF6',
        description: 'The core foundation for technical interviews. Master problem-solving patterns used by FAANG and top tech companies.',
        subtopics: [
            { id: 'arrays', title: 'Arrays & Strings', description: 'Manipulation, two pointers, sliding window techniques', hours: 25 },
            { id: 'linked-lists', title: 'Linked Lists', description: 'Singly, doubly, circular lists and common patterns', hours: 15 },
            { id: 'stacks-queues', title: 'Stacks & Queues', description: 'LIFO, FIFO, monotonic stack, deque applications', hours: 12 },
            { id: 'trees', title: 'Trees & BST', description: 'Binary trees, BST, traversals, and tree algorithms', hours: 30 },
            { id: 'graphs', title: 'Graphs', description: 'BFS, DFS, shortest paths, topological sort', hours: 35 },
            { id: 'dp', title: 'Dynamic Programming', description: 'Memoization, tabulation, classic DP patterns', hours: 40 },
            { id: 'sorting', title: 'Sorting Algorithms', description: 'Quick sort, merge sort, heap sort, counting sort', hours: 15 },
            { id: 'searching', title: 'Searching & Binary Search', description: 'Linear, binary search, search in rotated arrays', hours: 12 },
            { id: 'hashing', title: 'Hashing', description: 'Hash maps, hash sets, collision handling', hours: 10 },
            { id: 'recursion', title: 'Recursion & Backtracking', description: 'Recursive thinking, backtracking patterns', hours: 20 },
            { id: 'heap', title: 'Heaps & Priority Queue', description: 'Min heap, max heap, heap operations', hours: 12 },
            { id: 'trie', title: 'Tries & Advanced DS', description: 'Trie, segment tree, disjoint set union', hours: 15 },
        ]
    },
    oops: {
        title: 'Object-Oriented Programming',
        color: '#3B82F6',
        description: 'Master OOP concepts in Java, C++, and Python. Essential for building maintainable software.',
        subtopics: [
            { id: 'classes-objects', title: 'Classes & Objects', description: 'Class definition, objects, constructors, destructors', hours: 8 },
            { id: 'inheritance', title: 'Inheritance', description: 'Single, multiple, multilevel, hierarchical inheritance', hours: 10 },
            { id: 'polymorphism', title: 'Polymorphism', description: 'Method overloading, overriding, runtime polymorphism', hours: 8 },
            { id: 'abstraction', title: 'Abstraction', description: 'Abstract classes, interfaces, data hiding', hours: 8 },
            { id: 'encapsulation', title: 'Encapsulation', description: 'Access modifiers, getters, setters, data protection', hours: 6 },
            { id: 'design-patterns', title: 'Design Patterns', description: 'Singleton, Factory, Observer, Strategy patterns', hours: 15 },
            { id: 'solid', title: 'SOLID Principles', description: 'Single responsibility, Open-closed, Liskov, Interface segregation, Dependency inversion', hours: 10 },
            { id: 'collections', title: 'Collections Framework', description: 'List, Set, Map, Queue implementations in Java', hours: 12 },
        ]
    },
    os: {
        title: 'Operating Systems',
        color: '#10B981',
        description: 'Understand how operating systems work. Critical for system design interviews and low-level programming.',
        subtopics: [
            { id: 'process-management', title: 'Process Management', description: 'Process lifecycle, PCB, context switching', hours: 12 },
            { id: 'threads', title: 'Threads & Concurrency', description: 'Threads, multithreading, thread synchronization', hours: 10 },
            { id: 'scheduling', title: 'CPU Scheduling', description: 'FCFS, SJF, Priority, Round Robin, MLFQ', hours: 12 },
            { id: 'synchronization', title: 'Process Synchronization', description: 'Mutex, semaphores, monitors, critical section', hours: 10 },
            { id: 'deadlocks', title: 'Deadlocks', description: 'Conditions, prevention, avoidance, detection, recovery', hours: 8 },
            { id: 'memory-management', title: 'Memory Management', description: 'Paging, segmentation, virtual memory, page replacement', hours: 15 },
            { id: 'file-systems', title: 'File Systems', description: 'File organization, directories, allocation methods', hours: 10 },
            { id: 'io-systems', title: 'I/O Systems', description: 'I/O hardware, device drivers, disk scheduling', hours: 8 },
        ]
    },
    dbms: {
        title: 'Database Management Systems',
        color: '#F59E0B',
        description: 'Learn SQL, database design, and query optimization. Essential for backend development.',
        subtopics: [
            { id: 'sql-basics', title: 'SQL Fundamentals', description: 'SELECT, INSERT, UPDATE, DELETE, basic queries', hours: 10 },
            { id: 'advanced-sql', title: 'Advanced SQL', description: 'Subqueries, CTEs, window functions, stored procedures', hours: 12 },
            { id: 'joins', title: 'Joins & Set Operations', description: 'INNER, LEFT, RIGHT, FULL, CROSS joins, UNION', hours: 8 },
            { id: 'normalization', title: 'Normalization', description: '1NF, 2NF, 3NF, BCNF, denormalization', hours: 8 },
            { id: 'transactions', title: 'Transactions', description: 'ACID properties, isolation levels, concurrency control', hours: 10 },
            { id: 'indexing', title: 'Indexing', description: 'B-tree, hash indexes, query optimization', hours: 8 },
            { id: 'er-model', title: 'ER Modeling', description: 'Entity-relationship diagrams, schema design', hours: 6 },
            { id: 'nosql', title: 'NoSQL Databases', description: 'MongoDB, Redis, Cassandra comparison', hours: 8 },
        ]
    },
    cn: {
        title: 'Computer Networks',
        color: '#EF4444',
        description: 'Understand networking from physical layer to application layer. Key for distributed systems.',
        subtopics: [
            { id: 'osi-model', title: 'OSI Model', description: 'All 7 layers explained with examples', hours: 10 },
            { id: 'tcp-ip', title: 'TCP/IP Model', description: 'Four-layer model, comparison with OSI', hours: 8 },
            { id: 'tcp-udp', title: 'TCP vs UDP', description: 'Connection-oriented vs connectionless protocols', hours: 6 },
            { id: 'http', title: 'HTTP & HTTPS', description: 'Request/response, methods, status codes, TLS', hours: 10 },
            { id: 'dns', title: 'DNS', description: 'Domain name resolution, DNS records, caching', hours: 6 },
            { id: 'ip-addressing', title: 'IP Addressing', description: 'IPv4, IPv6, subnetting, CIDR notation', hours: 10 },
            { id: 'routing', title: 'Routing', description: 'Static, dynamic routing, routing protocols', hours: 8 },
            { id: 'network-security', title: 'Network Security', description: 'Firewalls, encryption, common attacks', hours: 10 },
        ]
    },
    interview: {
        title: 'Interview Preparation',
        color: '#EC4899',
        description: 'Prepare for technical interviews with system design, behavioral questions, and company-specific prep.',
        subtopics: [
            { id: 'system-design', title: 'System Design Basics', description: 'Scalability, load balancing, caching, databases', hours: 20 },
            { id: 'hld', title: 'High-Level Design', description: 'Designing Twitter, Netflix, Uber architectures', hours: 15 },
            { id: 'lld', title: 'Low-Level Design', description: 'Class diagrams, design patterns in action', hours: 12 },
            { id: 'behavioral', title: 'Behavioral Questions', description: 'STAR method, common questions, storytelling', hours: 8 },
            { id: 'resume', title: 'Resume Building', description: 'ATS-friendly resume, projects, achievements', hours: 5 },
            { id: 'aptitude', title: 'Aptitude & Reasoning', description: 'Quantitative, logical, verbal reasoning', hours: 15 },
        ]
    }
};

const TopicPage = () => {
    const { topicId } = useParams();
    const topic = topicData[topicId];

    if (!topic) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-400 mb-4">Topic not found</h2>
                    <Link to="/" className="text-violet-400 hover:underline">Return to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-full bg-[#0a0a0f] p-8">
            <div className="max-w-[1600px] mx-auto">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={18} />
                    <span>Back to Topics</span>
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: `${topic.color}15` }}
                        >
                            <Layers size={32} style={{ color: topic.color }} />
                        </div>
                        <div>
                            <h1 className="heading-2 text-white">{topic.title}</h1>
                            <p className="text-slate-400">{topic.subtopics.length} modules • {topic.subtopics.reduce((a, s) => a + s.hours, 0)} hours of content</p>
                        </div>
                    </div>
                    <p className="body-large text-slate-400 max-w-3xl">{topic.description}</p>
                </div>

                {/* Subtopics Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {topic.subtopics.map((subtopic, idx) => (
                        <motion.div
                            key={subtopic.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <Link
                                to={`/topic/${topicId}/${subtopic.id}`}
                                className="block p-6 card group h-full"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800 text-white font-bold">
                                        {idx + 1}
                                    </div>
                                    <span className="text-xs text-slate-500 flex items-center gap-1">
                                        <Clock size={12} />
                                        {subtopic.hours}h
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                                    {subtopic.title}
                                </h3>

                                <p className="text-sm text-slate-500 mb-4">
                                    {subtopic.description}
                                </p>

                                <div className="flex items-center gap-2 text-violet-400 text-sm mt-auto">
                                    <BookOpen size={14} />
                                    <span>Read Tutorial</span>
                                    <ChevronRight size={14} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopicPage;
