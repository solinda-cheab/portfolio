# Cheab Solinda — Portfolio

A clean, professional developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/components/common` — generic UI primitives (Button, Card, Badge, Container, SectionTitle)
- `src/components/layout` — Navbar, Footer, ScrollToTop
- `src/components/ui` — ThemeToggle, SocialLinks
- `src/sections` — one folder per page section (Hero, About, Skills, Projects, Experience, Achievements, Certificates, Education, Contact)
- `src/data` — all editable content (projects, skills, experience, certificates, education, socials) — edit these files to update the site without touching components
- `src/hooks` — useScrollSpy (active nav highlighting), useTheme (light/dark toggle)
- `src/types` — shared TypeScript interfaces

## Customizing content

Everything you'd want to change lives in `src/data/*.ts`:

- `projects.ts` — add/remove projects, links, tech stack, feature list
- `skills.ts` — skill categories and tags
- `experience.ts`, `achievements.ts`, `certificates.ts`, `education.ts`, `socials.ts`

Replace `public/resume.pdf` with your actual resume, and update the email address in `src/data/socials.ts` and `src/sections/Contact/ContactForm.tsx`.

## Design tokens

Colors and fonts are defined as CSS variables in `src/styles/globals.css`:

- Background `#0F172A`, Surface `#1E293B`, Primary `#3B82F6`, Accent `#06B6D4`
- Display font: Manrope · Body font: Inter · Mono/utility font: JetBrains Mono

A light theme is included via the `ThemeToggle` component (toggles the `.light` class on `<html>`).
