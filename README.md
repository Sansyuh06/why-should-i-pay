# Why Should I Pay

## Problem Statement

Many learners are forced to pay for coding platforms even though the learning content they need is already available for free. At the same time, students in low-connectivity environments cannot rely on SaaS platforms that require constant internet access.

This project solves that gap by providing a self-contained coding education platform that works entirely offline, bundles learning content and practice problems, and gives learners a modern web interface without recurring subscription costs.

## Solution

**Why Should I Pay** is an offline-first coding and interview preparation platform built with Next.js and React. It combines:

- curated learning content across core CS topics,
- a problem library with code practice,
- an in-browser code editor,
- quizzes and learning roadmaps,
- progress tracking and dashboard insights.

The platform is designed to run locally with no external APIs, so learners can use it anywhere: at home, in classrooms, or on devices with limited internet.

## What This Project Includes

- **Learning Hub** with topic-based content
- **Problem Browser** with practical coding challenges
- **Code Editor** for solving problems inside the browser
- **Quiz Section** for self-assessment
- **Roadmaps** for structured learning paths
- **Progress Dashboard** to track achievements
- **Community page** for discussions and learning support

## Tech Stack

- **Next.js 16** - app router and page rendering
- **React 19** - frontend UI
- **TypeScript** - typed code and developer confidence
- **Tailwind CSS** - fast, responsive styling
- **Radix UI / shadcn/ui** - accessible components
- **Monaco Editor** (`@monaco-editor/react`) - browser code editor experience
- **Recharts** - charts for dashboard visualizations
- **localStorage** - progress persistence without a backend

## How It Is Built

### Architecture

The app is structured around the Next.js `app` router with several main sections:

- `app/page.tsx` - homepage and landing experience
- `app/layout.tsx` - shared layout and navigation
- `app/learn/page.tsx` and `app/learn/[topicId]/page.tsx` - learning modules
- `app/problems/page.tsx` and `app/problems/[problemId]/page.tsx` - problem listing and details
- `app/problems/[problemId]/editor/page.tsx` - embedded code editor
- `app/quizzes/page.tsx` - quiz experience
- `app/roadmaps/page.tsx` - learning paths
- `app/dashboard/page.tsx` - user progress overview
- `app/community/page.tsx` - community and discussion area

### Content and Data

Content is shipped inside the repository in the `lib` folder and served directly by the application:

- `lib/courseContent.ts` and `lib/courseData.ts` contain topics, quizzes, and problem metadata.
- `lib/data.ts` holds sample content and static learning data.
- `lib/utils.ts` provides helpers for filtering, formatting, and localStorage support.

### UI Components

Reusable UI components are organized under `components/ui`, following the shadcn/ui pattern for accessible design.

### Styling

Global design and spacing are managed in `app/globals.css` with Tailwind CSS configured through `tailwind.config.js` and `postcss.config.mjs`.

### Developer Experience

- `npm run dev` starts the local development server
- `npm run build` prepares a production build
- `npm run lint` checks code quality

## Impact

This project is built for learners who need:

- affordable access to interview preparation,
- offline study without connectivity barriers,
- a single consolidated tool for concepts, practice, and progress,
- an environment that works like a modern app without monthly fees.

It helps students, self-taught developers, and bootcamp learners bridge the gap between free resources and paid platforms.

## Project Structure

```
why-should-i-pay/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── learn/
│   │   ├── page.tsx
│   │   └── [topicId]/page.tsx
│   ├── problems/
│   │   ├── page.tsx
│   │   ├── [problemId]/page.tsx
│   │   └── [problemId]/editor/page.tsx
│   ├── quizzes/page.tsx
│   ├── ide/page.tsx
│   ├── roadmaps/page.tsx
│   ├── dashboard/page.tsx
│   └── community/page.tsx
├── lib/
│   ├── courseContent.ts
│   ├── courseData.ts
│   ├── data.ts
│   └── utils.ts
├── components/
│   └── ui/
├── public/
│   └── pdfs/
├── package.json
├── next.config.mjs
├── tsconfig.json
├── postcss.config.mjs
└── tailwind.config.js
```

## Getting Started

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Notes

- The platform is built to be used offline once installed.
- All learning content is embedded in the repository.
- No external APIs are required for the core experience.
- PWA enabled for offline installation.

## License

Use this repository for learning and development. Contributions are welcome. Feel free to extend the platform with your own content and features.
