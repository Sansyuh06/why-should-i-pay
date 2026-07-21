'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { 
  Menu, X, Search, BookOpen, Code, FileQuestion, 
  LayoutDashboard, Map, Terminal, Library, Building2, 
  Compass, Brain, LogOut, User, Settings
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  { href: '/prd', label: 'PRD', icon: FileQuestion },
];

export function Navigation() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="group flex flex-col transition-opacity hover:opacity-80">
          <span className="font-display text-lg font-black tracking-tight text-white leading-none">
            Placement<span className="text-cyan-400">Hub</span>
          </span>
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-none mt-1">
            Why Should I Pay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase font-mono tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'text-cyan-400 font-bold'
                    : 'text-slate-400 hover:text-cyan-200'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-cyan-400 transition hidden md:block">
            <Search className="w-4 h-4" />
          </button>

          <div className="hidden md:flex items-center gap-4 border-l border-slate-800/60 pl-4 ml-2">
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <div className="flex items-center gap-3 hover:bg-slate-900/50 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-slate-800">
                    <Avatar className="w-8 h-8 border border-slate-800">
                      <AvatarImage src={session.user?.image || ""} />
                      <AvatarFallback className="bg-cyan-950 text-cyan-400 font-mono text-xs">
                        {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start text-left">
                      <span className="text-xs font-bold text-slate-200 leading-none">
                        {session.user?.name || "Student"}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono mt-1">Pro Member</span>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-[#040b16] border-slate-800 text-slate-300">
                  <DropdownMenuLabel className="font-mono text-xs text-slate-500 uppercase tracking-widest">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-800" />
                  <DropdownMenuItem asChild className="cursor-pointer hover:bg-slate-900 focus:bg-slate-900">
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer hover:bg-slate-900 focus:bg-slate-900">
                    <Link href="/profile" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-violet-400" />
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-800" />
                  <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-950/20 focus:bg-red-950/20">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login" className="text-xs font-bold font-mono tracking-wider px-5 py-2.5 bg-cyan-950/40 text-cyan-400 border border-cyan-900/50 rounded shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:bg-cyan-900/40 transition-all">
                SIGN IN
              </Link>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white transition lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
