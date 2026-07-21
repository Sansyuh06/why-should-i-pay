'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, Search, BookOpen, Code, FileQuestion, LayoutDashboard, Map, Users, Terminal, Library, Building2, Compass, Brain, LogOut } from 'lucide-react';

const navLinks = [
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/problems', label: 'Problems', icon: Code },
  { href: '/companies', label: 'Companies', icon: Building2 },
  { href: '/guides', label: 'Guides', icon: Compass },
  { href: '/interview-prep', label: 'Interview', icon: Brain },
  { href: '/quizzes', label: 'Quizzes', icon: FileQuestion },
  { href: '/resources', label: 'Resources', icon: Library },
  { href: '/ide', label: 'IDE', icon: Terminal },
  { href: '/roadmaps', label: 'Roadmaps', icon: Map },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

export function Navigation() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/90 border-b border-border/40">
      <div className="max-w-full mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xs font-black tracking-widest uppercase hover:opacity-60 transition">
          Why Should I Pay
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition duration-300 ${isActive
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition hidden md:block"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Auth State */}
          <div className="hidden md:flex items-center gap-4 border-l border-border/40 pl-4 ml-2">
            {session ? (
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">Hi, {session.user?.name || session.user?.email?.split('@')[0]}</span>
                <button onClick={() => signOut()} className="text-xs text-muted-foreground hover:text-accent transition flex items-center gap-1">
                  <LogOut className="w-3 h-3" />
                  Sign Out
                </button>
              </div>
            ) : (
              <Link href="/login" className="text-xs font-medium px-4 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border/40 p-4 md:p-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics, problems, quizzes..."
                className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-border/30 rounded-none text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition"
                autoFocus
              />
            </div>
            <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
              <span>Try:</span>
              <button className="hover:text-foreground transition">Arrays</button>
              <button className="hover:text-foreground transition">Two Sum</button>
              <button className="hover:text-foreground transition">Binary Search</button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border/40">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition ${isActive
                      ? 'text-foreground bg-secondary/50 font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Search */}
            <div className="pt-4 mt-4 border-t border-border/30">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-border/30 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="px-8 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-border/30">
          <div>
            <div className="text-xs font-black uppercase tracking-widest mb-3 md:mb-4">Why Should I Pay</div>
            <p className="text-xs text-muted-foreground leading-relaxed">Free. Complete. Offline. Your coding learning platform.</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 text-muted-foreground">Learn</div>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/learn" className="text-xs text-muted-foreground hover:text-foreground transition">Topics</Link></li>
              <li><Link href="/roadmaps" className="text-xs text-muted-foreground hover:text-foreground transition">Roadmaps</Link></li>
              <li><Link href="/community" className="text-xs text-muted-foreground hover:text-foreground transition">Community</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 text-muted-foreground">Practice</div>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/problems" className="text-xs text-muted-foreground hover:text-foreground transition">Problems</Link></li>
              <li><Link href="/companies" className="text-xs text-muted-foreground hover:text-foreground transition">Companies</Link></li>
              <li><Link href="/quizzes" className="text-xs text-muted-foreground hover:text-foreground transition">Quizzes</Link></li>
              <li><Link href="/ide" className="text-xs text-muted-foreground hover:text-foreground transition">IDE</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 text-muted-foreground">Prepare</div>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/guides" className="text-xs text-muted-foreground hover:text-foreground transition">Guides</Link></li>
              <li><Link href="/interview-prep" className="text-xs text-muted-foreground hover:text-foreground transition">Interview Prep</Link></li>
              <li><Link href="/dashboard" className="text-xs text-muted-foreground hover:text-foreground transition">Dashboard</Link></li>
              <li><Link href="/roadmaps" className="text-xs text-muted-foreground hover:text-foreground transition">Learning Paths</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 text-muted-foreground">Platform</div>
            <ul className="space-y-2 md:space-y-3">
              <li><span className="text-xs text-muted-foreground">100% Offline</span></li>
              <li><span className="text-xs text-muted-foreground">No Subscriptions</span></li>
              <li><span className="text-xs text-muted-foreground">All Content Embedded</span></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs text-muted-foreground">
          <p>2025 Why Should I Pay. Free. Forever.</p>
          <div className="flex gap-6 md:gap-8">
            <span>No external links</span>
            <span>All content embedded</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
