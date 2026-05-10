# Zhifan Zhou Personal Website

A static personal academic homepage and interactive resume for Zhifan Zhou, an undergraduate student at Carnegie Mellon University studying Statistics and Machine Learning.

The site uses routed pages for Home, Publications, Experiences, and Contact. It includes a cinematic profile hero, bilingual EN/CN content, light/dark theme switching, an interactive DataMaster workflow on the Experiences page, a command palette, and a static contact form that opens the visitor's email client.

## Current Profile Links

- GitHub: https://github.com/zhifan-zhou
- Email: skyzhou@andrew.cmu.edu
- Homepage URL: https://zhifan-zhou.github.io/

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export with `output: "export"`
- No backend and no database

## Pages

- `/` — Home, portrait, social links, and About
- `/publications` — DataMaster publication entry with review status
- `/experiences` — Education, Projects, and Work Experiences with an interactive timeline
- `/contact` — Contact dropbox, email/social links, and Carnegie Mellon map

## Install Dependencies

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Type Check, Lint, and Build

```bash
npm run typecheck
npm run lint
npm run build
```

The production build exports static files to `out/`.

To preview the exported static site:

```bash
npm run preview
```

## GitHub Pages Deployment

This repository is the GitHub Pages user site `zhifan-zhou.github.io`, so the app builds for the root URL:

```text
https://zhifan-zhou.github.io/
```

The code is root-deployment-ready: when `NEXT_PUBLIC_BASE_PATH` is empty, `next.config.mjs` does not set `basePath` or `assetPrefix`, so assets and routes load from `/`.

In the repository settings, make sure:

- `Settings` -> `Pages` -> `Build and deployment` -> `Source` is set to `GitHub Actions`
- Actions are enabled for the repository

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Keep the build command as `npm run build`.

Because the app is static, it does not require environment variables, a backend server, or a database.

## Editing Personal Data

Most site content lives in:

```text
src/data/profile.ts
```

Edit this file to update:

- Name, school, degree, and positioning text
- Email, GitHub, LinkedIn, and CV link
- About text and research interests
- Publications and project links
- Education, projects, and work experience timeline entries
- Contact text and location details
- English and Chinese copy

## Profile Photo

The portrait image is stored as:

```text
public/profile-photo.png
```

The crop is tuned in `src/data/profile.ts` with:

```ts
objectPosition: "44% 34%"
```

Adjust that value if you replace the image later.

## Replace Draft Links

Current draft links to replace:

- `public/resume.pdf` for the CV download button
- DataMaster GitHub link in `src/data/profile.ts`
- DataMaster paper link in `src/data/profile.ts`

## Add Future Publications

Add a new object to `siteCopy.en.publications.items` and `siteCopy.zh.publications.items` in `src/data/profile.ts`.

Use conservative wording such as `Under Review`, `In Preparation`, `Draft`, `Prototype`, or `Planned` unless the work is formally published or deployed.

## Add Future Projects

Add a new object to `siteCopy.en.experiences.projects` and `siteCopy.zh.experiences.projects` in `src/data/profile.ts`.

Each project supports:

- `title`
- `period`
- `status`
- `description`
- `tags`
- `links`

## Update Resume Download

1. Add the resume file at `public/resume.pdf`.
2. If using a different file name, update `resumeUrl` in `src/data/profile.ts`.
3. Run `npm run build` to confirm the static export still succeeds.

## Interaction Notes

- Press `Cmd + K` on macOS or `Ctrl + K` on Windows/Linux to open the command palette.
- The language toggle stores EN/CN preference in `localStorage`.
- The theme toggle stores light/dark preference in `localStorage`.
- The contact form uses `mailto:`.
- The map uses an OpenStreetMap embed for the Carnegie Mellon / Pittsburgh area.
