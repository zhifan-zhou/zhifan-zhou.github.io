# AGENTS.md

## Project Goal

This repository is Zhifan (Sky) Zhou's personal academic homepage and interactive resume website.

The website should function as both:
1. A personal homepage for academic and professional identity.
2. A resume-style portfolio for projects, research interests, writing, and technical skills.

## User Profile

- Name: Zhifan (Sky) Zhou
- School: Carnegie Mellon University
- Degree: Undergraduate student, B.S. in Statistics and Machine Learning
- Interests: AI agents, LLM systems, data science, NLP, product analytics, human-AI interaction, and useful AI-powered products

## Design Direction

The website should feel:

- Fancy but academic
- Modern but serious
- Elegant and polished
- Technical and credible
- Suitable for professors, recruiters, classmates, and family

Preferred visual style:

- Dark mode first
- Deep navy / charcoal background
- Subtle gradients
- Glassmorphism cards
- Clean typography
- Clear section hierarchy
- Smooth but restrained animations
- Responsive layout
- Sticky navigation
- Minimal clutter

Avoid:

- Generic resume-template appearance
- Childish colors
- Overly flashy startup-style design
- Random decorative illustrations
- Stock photos
- Auto-generated images

## Engineering Rules

Use:

- Next.js
- TypeScript
- Tailwind CSS
- Static frontend only

Do not use:

- Backend
- Database
- Stock photos
- Generated images
- Unnecessary heavy dependencies

Keep the codebase easy to edit.

Recommended structure:

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Interests.tsx
    Projects.tsx
    Resume.tsx
    Writing.tsx
    Contact.tsx
    SectionHeading.tsx
    ProjectCard.tsx
  data/
    profile.ts
  lib/
    utils.ts
