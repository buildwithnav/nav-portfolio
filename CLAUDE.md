# Nav Portfolio — CLAUDE.md

## Overview
Professional portfolio website for Nav Gill, a QA Automation Engineer with 9+ years in healthcare QA automation and data validation. Single-page static site with no backend.

## Tech Stack
- **React 19** + **Vite 8** (dev server & build)
- **Lucide React** for icons
- **No routing** — single page with smooth-scroll navigation to section anchors
- **No state management library** — local React state only
- **No CSS framework** — inline styles + CSS variables (dark theme)
- **Fonts**: Geist, Geist Mono, Source Sans 3 (Google Fonts)

## Project Structure
```
src/
  main.jsx          # React entry point
  App.jsx           # Entire app (~1350 lines) — all components, data, and styles
  assets/           # hero.png, react.svg, vite.svg
public/
  favicon.svg
  icons.svg         # Custom icon set
  resume.pdf        # Downloadable resume
dist/               # Production build output
.github/workflows/deploy.yml  # GitHub Pages CI/CD
```

## Architecture
Everything lives in `src/App.jsx`. Components are function-based, defined in a single file:

**Data objects** (top of file): `PROFILE`, `EXPERIENCE`, `PROJECTS`, `MANIFEST` — update these to change content.

**Sections** (in render order):
1. `Nav` — Fixed top nav, tab-based smooth scroll, active tab detection via scroll listener
2. `Hero` — Typewriter effect cycling job titles + Quality Gate dashboard (9 animated checks)
3. `Capabilities` — 6 competency cards (Test Architecture, Data Validation, CI/CD, AI QA, etc.)
4. `Systems` — 3 GitHub project cards (DataSquad, Cypress-E2E, AgenticAI-Heimdall)
5. `Pipeline` — Collapsible work history (5 roles: Abbott, Reliable Tire, Science37, Entertainment Partners, Kaiser)
6. `Registry` — Skills manifest, 9 categories, 47+ skills with hover-activated tags
7. `Output` — KPI counters (85%+ automation, 40% regression reduction, 500+ scenarios, 9+ years) + 7 achievements
8. `Connect` — Contact links (Email, LinkedIn, GitHub, Resume) + footer

**Utility components**: `StatusDot`, `Reveal` (scroll fade-in), `Mono`, `SectionRule`, `Counter`, `Typewriter`

**Custom hook**: `useReveal()` — IntersectionObserver for scroll-triggered animations (threshold: 12%)

## Styling
- All inline `style` props — no external CSS files
- CSS variables in a `<style>` tag: `--bg`, `--surface`, `--border`, `--fg`, `--green`, `--blue`, `--amber`, `--red`, `--teal`
- CSS animations: `cursorBlink`, `statusPulse`, `gateScan`, `slideDown`, `fadeInUp`, `ruleGrow`
- Responsive breakpoints: 860px, 768px, 520px
- Custom webkit scrollbar

## Commands
```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build to dist/
npm run lint      # ESLint
npm run preview   # Preview production build
```

## Deployment
- **GitHub Pages** via `.github/workflows/deploy.yml`
- Triggers on push to `main`
- Vite `base: '/nav-portfolio/'` for correct asset paths
- Live at: https://buildwithnav.github.io/nav-portfolio/

## Key Patterns
- Content changes = edit data objects at top of `App.jsx` (no separate data files)
- New sections = add component in `App.jsx`, add nav tab in `Nav`, add anchor ID
- All animations are CSS-based (keyframes in `<style>` tag)
- No API calls — fully static, self-contained
