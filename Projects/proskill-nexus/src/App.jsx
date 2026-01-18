import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import OopsTutorialPage from './pages/OopsTutorialPage';
import DsaTutorialPage from './pages/DsaTutorialPage';
import { OsTutorialPage, DbmsTutorialPage, CnTutorialPage } from './pages/CsTutorialPage';
import ResourcesPage from './pages/ResourcesPage';
import PracticePage from './pages/PracticePage';

// ============================================
// NAVBAR - Simple & Clean
// ============================================
const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/dsa', label: 'DSA' },
    { to: '/oops', label: 'OOPs' },
    { to: '/os', label: 'OS' },
    { to: '/dbms', label: 'DBMS' },
    { to: '/cn', label: 'Networks' },
    { to: '/resources', label: 'Resources' },
    { to: '/practice', label: 'Practice' },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Pro<span>Skill</span>Nexus
      </Link>
      <div className="navbar-links">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

// ============================================
// HOME PAGE - Clean & Spacious
// ============================================
const HomePage = () => {
  const topics = [
    {
      title: 'Data Structures & Algorithms',
      description: 'Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, and more.',
      link: '/dsa'
    },
    {
      title: 'Object-Oriented Programming',
      description: 'Classes, Inheritance, Polymorphism, Abstraction in C++, Java, Python.',
      link: '/oops'
    },
    {
      title: 'Operating Systems',
      description: 'Processes, CPU Scheduling, Memory Management, Deadlocks.',
      link: '/os'
    },
    {
      title: 'Database Management',
      description: 'SQL, Normalization, Transactions, ACID Properties.',
      link: '/dbms'
    },
    {
      title: 'Computer Networks',
      description: 'OSI Model, TCP/IP, HTTP, DNS, Network Security.',
      link: '/cn'
    },
    {
      title: 'Resources Hub',
      description: 'Curated links to LeetCode, GFG, YouTube, and more.',
      link: '/resources'
    },
  ];

  return (
    <div className="home">
      <h1>Learn CS Fundamentals</h1>
      <p className="subtitle">
        Comprehensive tutorials with code examples and practice problems.
      </p>

      <div className="topics-grid">
        {topics.map((topic, idx) => (
          <Link key={idx} to={topic.link} className="topic-card">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================
function App() {
  return (
    <Router>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dsa" element={<DsaTutorialPage />} />
          <Route path="/oops" element={<OopsTutorialPage />} />
          <Route path="/os" element={<OsTutorialPage />} />
          <Route path="/dbms" element={<DbmsTutorialPage />} />
          <Route path="/cn" element={<CnTutorialPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/practice" element={<PracticePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
