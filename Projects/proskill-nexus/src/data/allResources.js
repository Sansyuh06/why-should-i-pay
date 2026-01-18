// ============================================
// COMPLETE RESOURCES DATABASE
// All 100+ user-provided links organized
// ============================================

const allResources = {

    // ============================================
    // GENERATIVE AI & MACHINE LEARNING
    // ============================================
    genai: {
        title: 'Generative AI & Machine Learning',
        description: 'Master AI, ML, and prompt engineering',
        videos: [
            { id: 'KyQKTJhSIak', title: 'GenAI Full Course', platform: 'YouTube' },
            { id: '3-4qAkFRpAk', title: 'AI/ML Fundamentals', platform: 'YouTube' },
            { id: 'PwwvZQORy1I', title: 'Prompt Engineering', platform: 'YouTube' },
            { id: 'AjQPRomyd-k', title: 'LLM Deep Dive', platform: 'YouTube' },
            { id: 'UU1WVnMk4E8', title: 'Building AI Projects', platform: 'YouTube' },
        ],
        resources: [
            { title: '500 AI/ML/DL Projects', url: 'https://github.com/ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code', type: 'github' },
        ]
    },

    // ============================================
    // DATA STRUCTURES & ALGORITHMS
    // ============================================
    dsa: {
        title: 'Data Structures & Algorithms',
        description: 'Complete DSA preparation for interviews',

        videos: [
            { id: 'playlist/PLu0W_9lII9agwh1XjRt242xIpHhPT2llg', title: 'Complete DSA Course (Code with Harry)', platform: 'YouTube', isPlaylist: true },
        ],

        practice: [
            { title: 'LeetCode Top Interview 150', url: 'https://leetcode.com/studyplan/top-interview-150/', type: 'leetcode', problems: 150 },
            { title: 'LeetCode Top SQL 50', url: 'https://leetcode.com/studyplan/top-sql-50/', type: 'leetcode', problems: 50 },
            { title: 'Must-Do for Product Companies', url: 'https://www.geeksforgeeks.org/dsa/must-do-coding-questions-for-product-based-companies/', type: 'gfg' },
            { title: 'Must-Do for Amazon/Microsoft/Adobe', url: 'https://www.geeksforgeeks.org/dsa/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/', type: 'gfg' },
            { title: 'PrepInsta Most Asked Coding', url: 'https://prepinsta.com/interview-preparation/technical-interview-questions/most-asked-coding-questions-in-placements/', type: 'prepinsta' },
            { title: 'PrepInsta Top 100 Codes', url: 'https://prepinsta.com/top-100-codes/', type: 'prepinsta' },
            { title: 'GFG DSA Interview Questions', url: 'https://www.geeksforgeeks.org/dsa/commonly-asked-data-structure-interview-questions-set-1/', type: 'gfg' },
            { title: 'HackerEarth Practice', url: 'https://www.hackerearth.com', type: 'hackerearth' },
            { title: 'HackerEarth Linear Search', url: 'https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/', type: 'hackerearth' },
            { title: 'HackerEarth Number Theory', url: 'https://www.hackerearth.com/practice/math/number-theory/basic-number-theory-1/tutorial/', type: 'hackerearth' },
            { title: 'SkillRack', url: 'https://www.skillrack.com', type: 'platform' },
            { title: 'Company-Wise LeetCode Problems', url: 'https://github.com/hxu296/leetcode-company-wise-problems-2022', type: 'github' },
        ],

        tutorials: [
            { title: 'GFG DSA Tutorial', url: 'https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/', type: 'gfg' },
            { title: 'VisualGo - Visualize Algorithms', url: 'https://visualgo.net/en', type: 'tool' },
            { title: 'AlgoMap Roadmap', url: 'https://algomap.io/roadmap', type: 'roadmap' },
        ],

        github: [
            { title: 'Coding Resources - DSA vs Dev', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/dsa-vs-dev.md', type: 'github' },
            { title: 'Coding Resources - Strategy', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/strategy.md', type: 'github' },
            { title: 'Coding Resources - YouTube', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/youtube.md', type: 'github' },
            { title: 'Coding Resources - README', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/README.md', type: 'github' },
        ]
    },

    // ============================================
    // OBJECT-ORIENTED PROGRAMMING
    // ============================================
    oops: {
        title: 'Object-Oriented Programming',
        description: 'OOPs concepts in Java, C++, Python',

        tutorials: [
            { title: 'GFG OOPs in Java', url: 'https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/', type: 'gfg' },
            { title: 'OOPs Interview Questions', url: 'https://www.geeksforgeeks.org/interview-prep/oops-interview-questions/', type: 'gfg' },
        ],

        github: [
            { title: 'OOPs Complete Guide', url: 'https://github.com/MadhavBahl/OOPS', type: 'github' },
            { title: 'Java Collections Framework', url: 'https://github.com/AnirudhDas/AniruddhaDas.github.io/blob/master/Java/CollectionFrameworkInJava/CollectionFrameworkInJava.md', type: 'github' },
        ],

        quizzes: [
            { title: 'Abstract Class & Interface Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/abstract-class-and-interface-in-java-gq/', type: 'quiz' },
            { title: 'Arrays Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/arrays-gq/', type: 'quiz' },
            { title: 'Data Types Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/data-types-2-gq/', type: 'quiz' },
            { title: 'Constructors Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/constructors-2-gq/', type: 'quiz' },
            { title: 'Exception Handling Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/exception-handling-2-gq/', type: 'quiz' },
            { title: 'Packages Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/packages-gq/', type: 'quiz' },
            { title: 'Class & Object Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/class-and-object-2-gq/', type: 'quiz' },
            { title: 'Functions Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/functions-2-gq/', type: 'quiz' },
            { title: 'Final Keyword Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/final-keyword-gq/', type: 'quiz' },
            { title: 'Operators Quiz', url: 'https://www.geeksforgeeks.org/java-quiz/operators-gq/', type: 'quiz' },
            { title: 'Java Output Questions', url: 'https://www.geeksforgeeks.org/tag/java-output/', type: 'quiz' },
            { title: 'Inheritance Quiz', url: 'https://www.geeksforgeeks.org/quizzes/inheritance-2-gq/', type: 'quiz' },
        ]
    },

    // ============================================
    // C++ STL
    // ============================================
    stl: {
        title: 'C++ STL',
        description: 'Standard Template Library mastery',

        tutorials: [
            { title: 'GFG C++ STL', url: 'https://www.geeksforgeeks.org/cpp/the-c-standard-template-library-stl/', type: 'gfg' },
        ],

        github: [
            { title: 'STL Complete Notes', url: 'https://github.com/mansikagrawal/STL-NOTES', type: 'github' },
        ]
    },

    // ============================================
    // OPERATING SYSTEMS
    // ============================================
    os: {
        title: 'Operating Systems',
        description: 'Process, Memory, Scheduling, Deadlocks',

        videos: [
            { id: 'playlist/PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD', title: 'OS Complete Playlist (Gate Smashers)', platform: 'YouTube', isPlaylist: true },
        ],

        tutorials: [
            { title: 'GFG Operating Systems', url: 'https://www.geeksforgeeks.org/operating-systems/operating-systems/', type: 'gfg' },
            { title: 'OS Last Minute Notes', url: 'https://www.geeksforgeeks.org/operating-systems/last-minute-notes-operating-systems/', type: 'gfg' },
        ]
    },

    // ============================================
    // DATABASE MANAGEMENT SYSTEMS
    // ============================================
    dbms: {
        title: 'Database Management Systems',
        description: 'SQL, Normalization, Transactions',

        videos: [
            { id: 'playlist/PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV', title: 'DBMS Complete Playlist', platform: 'YouTube', isPlaylist: true },
        ],

        tutorials: [
            { title: 'GFG DBMS', url: 'https://www.geeksforgeeks.org/dbms/dbms/', type: 'gfg' },
            { title: 'DBMS Last Minute Notes', url: 'https://www.geeksforgeeks.org/dbms/last-minute-notes-dbms/', type: 'gfg' },
        ],

        practice: [
            { title: 'LeetCode SQL 50', url: 'https://leetcode.com/studyplan/top-sql-50/', type: 'leetcode', problems: 50 },
        ]
    },

    // ============================================
    // COMPUTER NETWORKS
    // ============================================
    cn: {
        title: 'Computer Networks',
        description: 'OSI, TCP/IP, HTTP, DNS, Security',

        videos: [
            { id: 'playlist/PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_', title: 'CN Complete Playlist', platform: 'YouTube', isPlaylist: true },
        ],

        tutorials: [
            { title: 'GFG Computer Networks', url: 'https://www.geeksforgeeks.org/computer-networks/computer-network-tutorials/', type: 'gfg' },
            { title: 'CN Last Minute Notes', url: 'https://www.geeksforgeeks.org/computer-networks/last-minute-notes-computer-network/', type: 'gfg' },
        ]
    },

    // ============================================
    // DEVELOPMENT & PROJECTS
    // ============================================
    development: {
        title: 'Development & Projects',
        description: 'Full-Stack, Backend, Projects',

        github: [
            { title: 'Full-Stack Resources', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/full-stack.md', type: 'github' },
            { title: 'Backend Resources', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/backend.md', type: 'github' },
            { title: 'Build Your Own X', url: 'https://github.com/codecrafters-io/build-your-own-x', type: 'github' },
            { title: 'Project-Based Learning', url: 'https://github.com/practical-tutorials/project-based-learning', type: 'github' },
            { title: 'Company-Wise Projects', url: 'https://github.com/nishant-Tiwari24/company-wise-projects', type: 'github' },
            { title: 'Skills for Hackathon', url: 'https://github.com/nishant-Tiwari24/skills-for-hackathon', type: 'github' },
            { title: 'Hackathon Guide', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/hackathon-guide.md', type: 'github' },
            { title: 'Cybersecurity Resources', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/Cybersecurity.md', type: 'github' },
        ],

        tutorials: [
            { title: 'Code With Harry Notes', url: 'https://www.codewithharry.com/notes', type: 'notes' },
            { title: 'Python 3 Specialization (Coursera)', url: 'https://www.coursera.org/specializations/python-3-programming', type: 'course' },
        ]
    },

    // ============================================
    // INTERVIEW PREPARATION
    // ============================================
    interview: {
        title: 'Interview Preparation',
        description: 'System Design, Aptitude, Resume',

        roadmaps: [
            { title: 'SDE Roadmap 10 Months', url: 'https://www.notion.so/SDE-ROADMAP-10-MONTHS-11c7e51ba89380f2b309d10c7bbf58ab', type: 'notion' },
        ],

        platforms: [
            { title: 'InterviewBit', url: 'https://www.interviewbit.com', type: 'platform' },
            { title: 'ByteByteGo (System Design)', url: 'https://bytebytego.com', type: 'platform' },
            { title: 'Skilled.dev', url: 'https://skilled.dev', type: 'platform' },
            { title: 'InstaByte Interview Master', url: 'https://instabyte.io/p/interview-master-100', type: 'platform' },
        ],

        aptitude: [
            { title: 'PrepInsta Aptitude', url: 'https://prepinsta.com/learn-aptitude/', type: 'aptitude' },
            { title: 'IndiaBix Logical Reasoning', url: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/', type: 'aptitude' },
            { title: 'IndiaBix Complete', url: 'https://www.indiabix.com', type: 'aptitude' },
        ],

        github: [
            { title: 'Placement Resources', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/placement.md', type: 'github' },
        ]
    },

    // ============================================
    // DOCUMENTS & STUDY MATERIALS
    // ============================================
    documents: {
        title: 'Documents & PDFs',
        description: 'Study materials, guides, spreadsheets',

        docs: [
            { title: 'Interview Strategy Doc', url: 'https://docs.google.com/document/d/1TjlpZH-LDgkua7s8rBgJ14SJQ4UEWdBncL3ZZACJMjU/edit?tab=t.0', type: 'gdoc' },
            { title: 'Preparation Guide', url: 'https://docs.google.com/document/d/1gOC_ozbVba1AcHOiDhXuPrFWznd7ffVwjcc6MuCedkQ/edit?tab=t.0', type: 'gdoc' },
            { title: 'Learning Path Doc', url: 'https://docs.google.com/document/d/1SYPEAFvKgv9LpvCOeZ4JBcL11FfWh6Ab3ZlnkF_xSeo/edit', type: 'gdoc' },
            { title: 'Tech Resources Doc', url: 'https://docs.google.com/document/d/1nHLOqbDW2rNW988LRTcIncfLkCNrtO5FtjFzCctS1n8/edit', type: 'gdoc' },
            { title: 'Resume & HR Doc', url: 'https://docs.google.com/document/d/1JAhBRG-Y8Q5fGgt-aqEGRPeam5qpTTcQe8OLWirLxs0/edit?tab=t.0', type: 'gdoc' },
            { title: 'Programming Languages Map', url: 'https://whimsical.com/programming-languages-V5Ybften8PuwuW8GfZ3LQx', type: 'whimsical' },
            { title: 'Interview Prep Doc', url: 'https://docs.google.com/document/d/1hhbYQJMbDAyALe10EIjuwX9PRX-DiIaM/edit', type: 'gdoc' },
            { title: 'Study Resources Doc', url: 'https://docs.google.com/document/d/1R6Vylx6FmVXEdnwsf1dtJ-6Q1faEOh53TzfZETUJocw/edit?tab=t.0', type: 'gdoc' },
        ],

        spreadsheets: [
            { title: 'DSA Problems Tracker', url: 'https://docs.google.com/spreadsheets/d/15Tx6T1tcKh09EdPjqC0PlSG52zikJXM5/edit?gid=559983178', type: 'gsheet' },
            { title: 'Interview Questions Sheet', url: 'https://docs.google.com/spreadsheets/d/1xb7FFimler17-Le27r6aL2pSoK-6NBX2CCFgcF0CUH4/htmlview', type: 'gsheet' },
        ],

        pdfs: [
            { title: 'OS Notes PDF', url: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:5a3b9eee-80f2-4929-bf15-74af52f83ee9', type: 'pdf' },
            { title: 'DBMS Notes PDF', url: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:3ddb9e23-5e36-4886-b14e-d583c8a0991f', type: 'pdf' },
            { title: 'CN Notes PDF', url: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:69f7ae14-7cc3-47e0-a324-58970a0b62a7', type: 'pdf' },
            { title: 'DSA Notes PDF', url: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:8df58afe-9e76-42d1-a96e-371d5b233368', type: 'pdf' },
            { title: 'Interview Prep PDF', url: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:cce96b00-4b78-4b86-b215-9a6f086961fd', type: 'pdf' },
            { title: 'Complete Guide PDF', url: 'https://drive.google.com/file/d/1Nwy4CkV7bMpb04rWMgYN_H-eNDcHYV9v/view', type: 'pdf' },
        ]
    }
};

export default allResources;
