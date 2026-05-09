# Zhifan Zhou Personal Website

A static personal academic homepage and interactive resume for Zhifan Zhou, an undergraduate student at Carnegie Mellon University studying Statistics and Machine Learning.

The site uses routed pages for Home, Publications, Experiences, and Contact. It includes a profile portrait, bilingual EN/CN content, light/dark theme switching, a local page-view counter, expandable news, a project-focused experience page, and a static contact form that opens the visitor's email client.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export with `output: "export"`
- No backend and no database

## Pages

- `/` — Home, portrait, About, research interests, language/skill lists, and News
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

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Keep the build command as `npm run build`.

Because the app is static, it does not require environment variables, a backend server, or a database.

## GitHub Pages Notes

This project is configured for GitHub Pages through `.github/workflows/deploy.yml`.

After pushing to `main`, GitHub Actions builds the static site and deploys the `out/` directory to:

```text
https://sky-alt-ux.github.io/Personal-Website/
```

In the repository settings, make sure:

- `Settings` -> `Pages` -> `Build and deployment` -> `Source` is set to `GitHub Actions`
- Actions are enabled for the repository

The workflow builds with:

```bash
NEXT_PUBLIC_BASE_PATH=/Personal-Website npm run build
```

This makes Next.js links, scripts, styles, and public assets work under the GitHub Pages subpath.

For manual static export:

```bash
npm install
npm run build
```

The normal local and Vercel builds still use no base path.

## Editing Personal Data

Most site content lives in:

```text
src/data/profile.ts
```

Edit this file to update:

- Name, school, degree, and positioning text
- Email, GitHub, LinkedIn, and CV link
- About text, research interests, skills, and News
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

## Add Future Writing Cards

This version does not render a separate Writing page. If you add one later, keep writing data in `src/data/profile.ts` or a nearby data file, and avoid marking drafts as published until they are public.

## Update Resume Download

1. Add the resume file at `public/resume.pdf`.
2. If using a different file name, update `resumeUrl` in `src/data/profile.ts`.
3. Run `npm run build` to confirm the static export still succeeds.

## Interaction Notes

- The profile card includes a local browser view counter using `localStorage`; it does not require a backend.
- The language toggle stores EN/CN preference in `localStorage`.
- The theme toggle stores light/dark preference in `localStorage`.
- The contact form uses `mailto:`. For silent delivery directly to an inbox, connect a form provider or serverless function later.
- The map uses an OpenStreetMap embed for Carnegie Mellon University.
