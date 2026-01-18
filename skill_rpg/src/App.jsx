
import React from 'react';
import { useGameStore } from './store/useGameStore';
import { ClassSelector } from './components/ClassSelector';
import { HeroDisplay } from './components/HeroDisplay';
import { QuestBoard } from './components/QuestBoard';
import { LayoutDashboard, Users, LogOut } from 'lucide-react';

function App() {
  const { activeCharacterId, resetProgress } = useGameStore();

  if (!activeCharacterId) {
    return <ClassSelector />;
  }

  return (
    <div className="flex h-screen w-screen" style={{ height: '100vh', width: '100vw', background: 'var(--bg-dark)', overflow: 'hidden', color: '#e2e8f0', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#0f172a', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column', padding: '32px 16px', zIndex: 20 }}>
        <div style={{ marginBottom: '48px', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(to bottom right, #10b981, #06b6d4)', borderRadius: '8px', flexShrink: 0, boxShadow: '0 0 15px rgba(16,185,129,0.3)' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '-0.05em', color: 'white' }}>SKILL RPG</span>
        </div>

        <nav style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#1e293b', color: 'white', display: 'flex', alignItems: 'center', gap: '12px', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}>
            <LayoutDashboard size={24} />
            <span>Dashboard</span>
          </button>
          <div style={{ borderTop: '1px solid #1e293b', margin: '16px 0' }} />
          <button
            onClick={() => resetProgress()}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'transparent', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#f87171'}
            onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
          >
            <LogOut size={24} />
            <span>Reset Data</span>
          </button>
        </nav>

        <div style={{ padding: '0 16px', fontSize: '0.75rem', color: '#475569', textAlign: 'center' }}>
          v0.1.0 Alpha
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative" style={{ flexGrow: 1, position: 'relative', display: 'flex', overflow: 'hidden' }}>
        {/* Background Grid/Effects */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="bg-grid"></div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(15,23,42,0) 0%, rgba(15,23,42,0.8) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, display: 'flex', width: '100%', height: '100%', padding: '24px', gap: '24px' }}>
          {/* Left Column: Character Stats */}
          <div style={{ width: '33%', minWidth: '350px' }}>
            <HeroDisplay />
          </div>

          {/* Right Column: Quest Board / Skill Tree */}
          <div style={{ flexGrow: 1, background: 'rgba(15, 23, 42, 0.3)', backdropFilter: 'blur(4px)', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
            <QuestBoard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
