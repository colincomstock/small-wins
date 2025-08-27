# AddUp — Task & Goal Progress Tracker

A personal progress anmd journalling companion that tracks both tasks and long-term goals, celebrating small wins with points and AI-generated insights—built for people who want an low maintance system that provides objective insights into how they're doing in all areas of their life and provides encouragement and advice along the way.

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, shadcn/ui, React Router
- **State/Data:** TanStack Query, **Zustand** (in progress)
- **Backend:** **Supabase** (Auth + Postgres + Row Level Security)
- **AI (planned):** OpenAI Chat Completions / Google Gemini Flash

## What’s Done
- **Progress system designed and build in progress**, tasks earn points—encouraging consistency and momentum over perfection.
- **Modern frontend architecture**: Developed with React, TypeScript, Tailwind, and shadcn/ui for a clean and flexible UI.
- **State & routing**: React Router for navigation; TanStack Query handles task and goal data fetching; Zustand is being integrated for app-state management.
- **Database foundation**: Supabase is set up as the backend for persisting user data and providing data access for future analytics.

## Next Steps
Roadmap (next up)

- [ ] **Complete Zustand integration** for global app state (session, UI, active goal/task context)
- [ ] **Journaling** (daily notes tied to tasks/goals; markdown-friendly)
- [ ] **Goals system** (parent goals → milestones → tasks; progress/points roll-up)
- [ ] **Activity calendar** (GitHub-style heatmap for daily points/progress)
- [ ] **UX polish** (micro-interactions/animations)
- [ ] **Morning checklist** (high-intent tasks & priming)
- [ ] **Evening “day-over”** (reflection, rollover, next-day prep)
- [ ] **AI weekly summary** (ChatGPT / Gemini Flash: progress recap + suggested next steps)
- [ ] **Dashboard + mini components** (at-a-glance cards: streaks, points, upcoming, journal nudges)

## State Strategy
- TanStack Query → server cache & fetching (tasks/goals/journal/activity)
- Zustand → global UI/session state (active date, filters, modals, ephemeral UI)
- Derived points → compute on completion events; store in activity_events for efficient heatmap rendering

## Key Screens (planned)

- Dashboard: points, streaks, upcoming tasks, journal prompt
- Tasks: today, upcoming, morning checklist, quick-add
- Goals: goal detail (milestones, progress bar, roll-up points)
- Journal: daily entry + “evening day over” checklist
- Calendar: GitHub-like heatmap by day with totals and streaks, expandable to view tasks and goals for a given day
- Weekly Summary (AI): generated recap with suggested next actions

## AI Weekly Summary (concept)
- Input: last 7 days compared against 30-120 days of activity_events, completed tasks, goal changes, journal keywords
- Output: short narrative + 3 actionable suggestions
- Guardrails: private/local summarization prompts; user opt-in

## Why I'm Building It
I created AddUp for myself—because none of the “off-the-shelf” habit managers fit how I work. I need reminders that the progress along the way is valuable, not just the end result. AddUp is designed to meet that need: meaningful progress, not perfection.

## Contributing / Feedback
This is a personal project but I’m open to feedback and suggestions. File an issue or DM me on LinkedIn.
