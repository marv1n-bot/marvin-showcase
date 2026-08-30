# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A public showcase site for Marvin, the supervisor agent of a personal, self-hosted NanoClaw instance. Built by an autonomous agent (`mr-vibecoder[bot]`), deployed via docker-compose on the owner's own VPS (no Vercel), meant to be continued by Claude Code and/or opencode.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (also the type-check gate — no separate `tsc`/test script exists)
npm run lint      # eslint . (next/core-web-vitals + next/typescript configs)
```

There is no test suite. Treat `npm run build` as the correctness check after content or component changes, and `npm run lint` before committing.

## Architecture

Next.js 15 App Router, single route (`/`), no server-side data fetching — everything renders from one static content module.

- **`src/content/team.ts`** is the single source of truth for all content (team roster, architecture notes, connectors, news, portfolio). Plain typed object (`TeamMember`, `Connector`, `NewsItem`, `PortfolioItem`), not fetched from anywhere. To add content: push into the relevant array — the page renders it automatically via `page.tsx`'s `.map()` calls. No component changes needed.
- **`src/app/page.tsx`** composes the whole page top-to-bottom: `Hero` → `TeamRoster` → `ArchitectureSection` → `ConnectorsSection` → `NewsSection` → `PortfolioGrid` → `SiteFooter`. All components are dumb renderers that take slices of `marvin` as props.
- **Styling**: Tailwind v4 via the CSS-first `@theme` block in `src/app/globals.css` (no `tailwind.config.*`). Deep charcoal/near-black (`--color-void`, `--color-panel`) with a violet accent (`--color-accent`) used sitewide for eyebrows, borders, chips, and highlights, monospace display font (`--font-display`, JetBrains Mono) paired with a plain sans body font (`--font-body`, IBM Plex Sans), plus a subtle CSS scanline texture (`.scanlines` in globals.css) and a full-bleed hero photo (`public/hero-robot.jpg`, a generic toy-robot product photo, attributed in `Hero.tsx`) darkened with layered gradients for text contrast. The hero's photo overlay/glow intentionally keeps the older cyan tokens (`--color-cyan`, `--color-cyan-dim`) rather than the sitewide accent — that treatment is a deliberate carve-out, don't switch it to purple. No copyrighted character art or logos.
- **Path alias**: `@/*` → `src/*` (see `tsconfig.json`).

## Deploy

Docker-compose on the owner's VPS behind nginx proxy manager, same pattern as `xpeng-l03-showcase`. No CI/CD — deploys are manual (`docker compose build && up` on the VPS after a `git pull`). Do not run `vercel deploy` against this project.
