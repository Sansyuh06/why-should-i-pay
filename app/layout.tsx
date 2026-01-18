import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Why Should I Pay - Free Coding Learning Platform',
  description: 'Why Should I Pay When Everything is Free. Complete offline coding platform with 1000+ DSA problems, video tutorials, interactive IDE, quizzes, and learning roadmaps. No subscriptions. No redirects. All embedded.',
  generator: 'v0.app',
  keywords: ['DSA', 'algorithms', 'data structures', 'coding', 'programming', 'interview prep', 'free learning', 'offline'],
  authors: [{ name: 'Why Should I Pay' }],
  openGraph: {
    title: 'Why Should I Pay - Free Coding Learning Platform',
    description: 'Complete offline coding platform with 1000+ DSA problems, video tutorials, interactive IDE, quizzes, and learning roadmaps.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Should I Pay - Free Coding Learning Platform',
    description: 'Complete offline coding platform with 1000+ DSA problems, video tutorials, interactive IDE, quizzes, and learning roadmaps.',
  },
  icons: {
    icon: '/icon-dark-32x32.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
