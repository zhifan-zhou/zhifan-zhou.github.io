# Zhifan Zhou Personal Website

A static personal academic homepage and interactive resume for Zhifan Zhou, an undergraduate student at Carnegie Mellon University studying Statistics and Machine Learning.

The site uses routed pages for Home, Publications, Experiences, and Contact. It includes a profile portrait, bilingual EN/CN content, light/dark theme switching, a local Page Views counter, expandable News, a project-focused Experiences page, a command palette, and a static contact form that opens the visitor's email client.

## Current Profile Links

- GitHub: https://github.com/zhifan-zhou
- Email: skyzhou@andrew.cmu.edu
- Temporary project-site URL: https://zhifan-zhou.github.io/Personal-Website/
- Target root homepage URL: https://zhifan-zhou.github.io/

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export with `output: "export"`
- No backend and no database

## Pages

- `/` — Home, portrait, About, research interests, and News
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

This project is configured for GitHub Pages through `.github/workflows/deploy.yml`.

The workflow automatically chooses the correct base path:

- If the repository is `zhifan-zhou.github.io`, it builds for the root URL `https://zhifan-zhou.github.io/`.
- If the repository is `Personal-Website`, it builds for the project URL `https://zhifan-zhou.github.io/Personal-Website/`.

In the repository settings, make sure:

- `Settings` -> `Pages` -> `Build and deployment` -> `Source` is set to `GitHub Actions`
- Actions are enabled for the repository

## Migrate to the Root GitHub Pages URL

To make the final site available at:

```text
https://zhifan-zhou.github.io/
```

you need a GitHub user-site repository named exactly:

```text
zhifan-zhou.github.io
```

Migration steps:

1. Create a new repository named `zhifan-zhou.github.io`, or rename the existing website repository to `zhifan-zhou.github.io`.
2. Move or copy this website code into that repository.
3. Keep `next.config.mjs` as-is. It uses `NEXT_PUBLIC_BASE_PATH` only when the workflow detects a project-site repository.
4. In GitHub, set `Settings` -> `Pages` -> `Build and deployment` -> `Source` to `GitHub Actions`.
5. Push to `main` and wait for the `Deploy GitHub Pages` workflow to finish.
6. Verify the final URL: `https://zhifan-zhou.github.io/`.

If you keep this code in `Personal-Website`, the correct URL remains:

```text
https://zhifan-zhou.github.io/Personal-Website/
```

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
- About text, research interests, and News
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

## Replace Placeholder Links

Current placeholders to replace:

- `public/resume.pdf` for the CV download button
- DataMaster GitHub link in `src/data/profile.ts`
- DataMaster paper link in `src/data/profile.ts`
- Placeholder News entries in `src/data/profile.ts`

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
- The profile card includes a local browser Page Views counter using `localStorage`; it does not require a backend.
- The language toggle stores EN/CN preference in `localStorage`.
- The theme toggle stores light/dark preference in `localStorage`.
- The contact form uses `mailto:`.
- The map uses an OpenStreetMap embed for the Carnegie Mellon / Pittsburgh area.
