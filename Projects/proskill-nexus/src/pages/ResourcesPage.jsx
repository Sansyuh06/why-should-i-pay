import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const resources = {
    interview: {
        title: '🎯 Interview Prep',
        items: [
            { name: 'LeetCode Top 150', url: 'https://leetcode.com/studyplan/top-interview-150', desc: 'Must-do for FAANG' },
            { name: 'LeetCode SQL 50', url: 'https://leetcode.com/studyplan/top-sql-50/', desc: 'Essential SQL problems' },
            { name: 'SDE Roadmap (10 Months)', url: 'https://nishant-tiwari24.notion.site/SDE-ROADMAP-10-MONTHS-11c7e51ba89380f2b309d10c7bbf58ab', desc: 'Complete preparation guide' },
            { name: 'AlgoMap Roadmap', url: 'https://algomap.io/roadmap', desc: 'Visual learning path' },
            { name: 'Coding Strategy Guide', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/strategy.md', desc: 'How to approach DSA' },
        ]
    },
    dsa: {
        title: '📊 DSA Resources',
        items: [
            { name: 'VisualGo', url: 'https://visualgo.net/en', desc: 'Visualize algorithms' },
            { name: 'C++ STL Notes', url: 'https://github.com/mansikagrawal/STL-NOTES', desc: 'Complete STL reference' },
            { name: 'Java Collections', url: 'https://github.com/AnirudhDas/AniruddhaDas.github.io/blob/master/Java/CollectionFrameworkInJava/CollectionFrameworkInJava.md', desc: 'Java Collections guide' },
            { name: 'TakeUForward', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', desc: 'Striver A2Z DSA Sheet' },
            { name: 'GFG DSA Tutorial', url: 'https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/', desc: 'Step-by-step DSA' },
        ]
    },
    development: {
        title: '💻 Development',
        items: [
            { name: 'Full-Stack Guide', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/full-stack.md', desc: 'Complete full-stack path' },
            { name: 'Backend Guide', url: 'https://github.com/nishant-Tiwari24/coding-resources/blob/main/backend.md', desc: 'Backend roadmap' },
            { name: 'Build Your Own X', url: 'https://github.com/codecrafters-io/build-your-own-x', desc: 'Learn by building' },
            { name: 'Project-Based Learning', url: 'https://github.com/practical-tutorials/project-based-learning', desc: 'Project tutorials' },
        ]
    },
    cscore: {
        title: '🖥️ CS Fundamentals',
        items: [
            { name: 'OS Last Minute Notes', url: 'https://www.geeksforgeeks.org/operating-systems/last-minute-notes-operating-systems/', desc: 'Quick OS revision' },
            { name: 'DBMS Last Minute Notes', url: 'https://www.geeksforgeeks.org/dbms/last-minute-notes-dbms/', desc: 'Quick DBMS revision' },
            { name: 'CN Last Minute Notes', url: 'https://www.geeksforgeeks.org/computer-networks/last-minute-notes-computer-network/', desc: 'Quick Networks revision' },
            { name: 'OOPs GitHub Repo', url: 'https://github.com/MadhavBahl/OOPS', desc: 'Complete OOP guide' },
        ]
    },
    youtube: {
        title: '📺 Video Courses',
        items: [
            { name: 'Gate Smashers OS', url: 'https://www.youtube.com/playlist?list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD', desc: 'Complete OS playlist' },
            { name: 'Gate Smashers DBMS', url: 'https://www.youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV', desc: 'Complete DBMS playlist' },
            { name: 'Gate Smashers CN', url: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_', desc: 'Complete Networks playlist' },
            { name: 'GenAI Full Course', url: 'https://www.youtube.com/watch?v=KyQKTJhSIak', desc: 'Generative AI tutorial' },
        ]
    }
};

const ResourcesPage = () => {
    const [search, setSearch] = useState('');

    const filteredResources = Object.entries(resources).map(([key, category]) => ({
        ...category,
        items: category.items.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.desc.toLowerCase().includes(search.toLowerCase())
        )
    })).filter(cat => cat.items.length > 0);

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 40px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
                Resources Hub
            </h1>
            <p style={{ fontSize: '18px', color: '#8b949e', marginBottom: '40px' }}>
                Curated links to the best learning resources for your FAANG preparation.
            </p>

            {/* Search */}
            <div style={{ marginBottom: '40px' }}>
                <input
                    type="text"
                    placeholder="Search resources..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '14px 20px',
                        fontSize: '16px',
                        background: '#161b22',
                        border: '1px solid #30363d',
                        borderRadius: '8px',
                        color: 'white',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Categories */}
            {filteredResources.map((category, idx) => (
                <div key={idx} style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '20px' }}>
                        {category.title}
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                        {category.items.map((item, i) => (
                            <a
                                key={i}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '20px',
                                    background: '#161b22',
                                    border: '1px solid #30363d',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.borderColor = '#58a6ff'}
                                onMouseOut={(e) => e.currentTarget.style.borderColor = '#30363d'}
                            >
                                <div>
                                    <div style={{ fontWeight: '500', color: 'white', marginBottom: '4px' }}>
                                        {item.name}
                                    </div>
                                    <div style={{ fontSize: '14px', color: '#8b949e' }}>
                                        {item.desc}
                                    </div>
                                </div>
                                <ExternalLink size={16} style={{ color: '#8b949e', flexShrink: 0 }} />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResourcesPage;
