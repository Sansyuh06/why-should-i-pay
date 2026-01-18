# Architecture & Technical Documentation

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     DevPrep Platform                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Frontend   │  │  UI Library  │  │   Styling   │     │
│  │  (React 19)  │  │ (shadcn/ui)  │  │(Tailwind v4)│     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│         │                │                  │               │
│         └────────────────┼──────────────────┘               │
│                          │                                  │
│         ┌────────────────▼───────────────┐                │
│         │    Next.js 16 App Router       │                │
│         │  - Client Components           │                │
│         │  - Server Components (ready)   │                │
│         │  - Route Handlers (ready)      │                │
│         └────────────────┬───────────────┘                │
│                          │                                  │
│         ┌────────────────▼───────────────┐                │
│         │       Data Layer (Local)       │                │
│         │  - /lib/data.ts (content)      │                │
│         │  - /lib/types.ts (schemas)     │                │
│         └────────────────┬───────────────┘                │
│                          │                                  │
│         ┌────────────────▼───────────────┐                │
│         │  Database Layer (Optional)     │                │
│         │  - PostgreSQL / Neon           │                │
│         │  - Ready when connected        │                │
│         └────────────────────────────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
Layout (root)
├── Navigation (header)
│   ├── Logo/Brand
│   ├── Navigation Links
│   ├── Notifications
│   └── User Menu
│
├── Page Routes
│   ├── / (Homepage)
│   ├── /learn (Learning Hub)
│   │   └── /[topicId] (Topic Detail)
│   ├── /problems (Problems Browser)
│   │   ├── /[problemId] (Problem Detail)
│   │   └── /[problemId]/editor (Code Editor)
│   ├── /community (Forum)
│   ├── /roadmaps (Roadmaps)
│   └── /dashboard (User Dashboard)
│
├── Components (Reusable)
│   ├── Card
│   ├── Button
│   ├── Tabs
│   ├── Select
│   └── [Other UI components]
│
└── Footer
```

## Data Structure

### Topic Structure
```typescript
interface Topic {
  id: string
  domain: DomainType
  name: string
  description: string
  subtopics: Subtopic[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number
}

interface Subtopic {
  id: string
  name: string
  content: string
  resources: Resource[]
  problems: Problem[]
  completed: boolean
}

interface Resource {
  id: string
  type: 'article' | 'video' | 'tutorial' | 'documentation'
  title: string
  source: string
  url: string
  duration?: number
  difficulty: string
  content?: string
}
```

### Problem Structure
```typescript
interface Problem {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  constraints: string[]
  examples: Example[]
  solutions: Solution[]
  acceptance: number
  likes: number
  category: string[]
  companies: string[]
  isLiked: boolean
  isSolved: boolean
  attempts: number
}

interface Solution {
  id: string
  language: 'python' | 'javascript' | 'java' | 'cpp' | 'csharp'
  code: string
  complexity: {
    time: string
    space: string
  }
  explanation: string
  votes: number
}
```

## State Management

### Current Approach (Local)
- React `useState` for page-level state
- Context-ready for global state (when needed)
- No external state library required currently

### When Adding Backend
```typescript
// Will use for API calls
interface ApiEndpoints {
  '/api/auth/...'              // Authentication
  '/api/users/...'             // User management
  '/api/problems/...'          // Problem data
  '/api/submissions/...'       // Code submissions
  '/api/progress/...'          // User progress
  '/api/community/...'         // Community posts
}
```

## File Organization

### /app - Routes & Pages
- Each page is a route
- Dynamic routes use [param] convention
- Server/Client components as needed

### /lib - Utilities & Data
- `types.ts` - TypeScript definitions (186 lines)
- `data.ts` - Content & seed data (717 lines)
- `utils.ts` - Helper functions (for future)

### /components - Reusable UI
- Using Shadcn/ui components
- Located in `/components/ui`
- Can add custom components as needed

### /scripts - Database (Optional)
- SQL scripts for database setup
- Ready to execute when DB connected
- Schema design included

## Styling Approach

### Tailwind CSS v4
- Utility-first CSS framework
- Responsive design prefix (md:, lg:, etc.)
- Dark mode support via @custom-variant
- Design tokens in globals.css

### Design System
```css
/* Colors - Design Tokens */
--background, --foreground
--card, --card-foreground
--primary, --primary-foreground
--secondary, --muted, --accent
--border, --input, --ring
--destructive

/* Spacing - Tailwind Scale */
px-4, py-6, gap-4, etc.

/* Responsive - Mobile-first */
md:grid-cols-2
lg:col-span-2
```

## Performance Optimizations

### Current
- Image optimization ready
- Component code-splitting via routes
- Built-in Next.js caching

### Future
- Image lazy loading
- Progressive code splitting
- Client-side caching
- Database query optimization

## Security Considerations

### Current (Frontend MVP)
- No sensitive data exposure
- User input sanitization ready

### When Adding Backend
- Input validation & sanitization
- SQL injection prevention (parameterized queries)
- CSRF protection
- Rate limiting
- Authentication & authorization
- HTTPS enforcement

## Scalability Plan

### Phase 1 (Current)
- Single-page app with local data
- ~10K concurrent users on Vercel

### Phase 2 (With Backend)
- Database for persistence
- ~100K concurrent users
- Redis for caching
- ~1M problems scalable

### Phase 3 (Enterprise)
- Microservices architecture
- Kubernetes orchestration
- CDN for content delivery
- ~10M+ concurrent users

## API Design (Ready for Implementation)

```
GET    /api/domains                  # List all domains
GET    /api/domains/:id              # Get domain details
GET    /api/topics                   # List topics
GET    /api/topics/:id               # Get topic with content
GET    /api/problems                 # List problems
GET    /api/problems/:id             # Get problem details
POST   /api/submissions              # Submit code
GET    /api/submissions/:id          # Get submission result
GET    /api/users/progress           # Get user progress
POST   /api/community/posts          # Create community post
GET    /api/community/posts          # List posts
POST   /api/community/posts/:id/like # Like a post
```

## Testing Strategy

### Unit Tests (Ready)
- Component rendering
- Data structure validation
- Utility function tests

### Integration Tests (Ready)
- Page navigation
- Data flow
- State management

### E2E Tests (Ready)
- User journeys
- Complete workflows
- Community interactions

## Deployment

### Current
```bash
npm run build    # Build for production
npm run start    # Start production server
```

### Vercel Deployment
```bash
# Connected via git
# Automatic deployments on push
# Environment variables in Vercel dashboard
```

### Environment Variables (When Using DB)
```
DATABASE_URL=postgresql://...
JWT_SECRET=...
API_KEY=...
```

## Monitoring & Analytics (Ready)

```typescript
// Analytics integration ready for:
- User journey tracking
- Page performance metrics
- Error tracking (Sentry)
- Usage analytics (Plausible)
```

## Documentation

- `README.md` - Project overview
- `IMPLEMENTATION.md` - What's built
- `QUICKSTART.md` - User guide
- `ARCHITECTURE.md` - This file

## Key Technologies

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Runtime | Node.js | Server runtime |
| Framework | Next.js 16 | React framework with routing |
| UI | React 19 | Component library |
| Components | Shadcn/ui | Pre-built UI components |
| Styling | Tailwind CSS v4 | Utility CSS |
| Charting | Recharts | Data visualization |
| Icons | Lucide | Icon library |
| Database | PostgreSQL | When connected |
| Deployment | Vercel | Hosting platform |

## Code Quality

- TypeScript for type safety
- ESLint configured
- Biome formatter
- Accessibility (WCAG)
- Mobile responsive
- Performance optimized

## Future Architecture Enhancements

1. **State Management**: Redux/Zustand when complexity increases
2. **API Layer**: RTK Query or SWR for data fetching
3. **Testing**: Jest + React Testing Library
4. **CI/CD**: GitHub Actions for automated testing
5. **Monitoring**: Sentry for error tracking
6. **Analytics**: Plausible for user analytics

---

This architecture is designed to **start simple** and **scale incrementally** as the platform grows.
