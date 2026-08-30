# Marvin Showcase

Public showcase site for Marvin, the supervisor agent of a personal, self-hosted NanoClaw instance.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Adding content

All content lives in `src/content/team.ts` — a single typed object. To add a
team member, news item, or portfolio entry, push into the corresponding array
(`team`, `news`, `portfolio`). The page re-renders automatically; no other
files need to change.

## Local development

```bash
npm install
npm run dev
```
