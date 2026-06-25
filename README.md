# Seifeldin Mahmoud Portfolio

This is my personal software engineering portfolio. It presents my background, project work, experience, skills, resume, and contact information in one place.

The site is intentionally simple. Most content lives in local TypeScript data files so project claims, links, screenshots, and experience details can be reviewed before they are published.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Firebase Admin SDK
- Firestore
- Zod
- React Hook Form
- ESLint, Prettier, and Vitest

## Current Features

- Home, About, Experience, Projects, Skills, and Contact pages
- Project listing, filtering, and project detail pages
- Compact credential section with public verification links
- Dark and light theme support
- Command palette for quick navigation
- Rare hidden terminal button that appears after meaningful browsing
- Server-side contact form validation
- Firestore storage for contact submissions
- Sitemap, robots file, metadata, and structured data
- Subtle route transitions across pages

## Project Structure

```text
src/
  app/
    api/contact/       Contact form API route
    about/             About page
    contact/           Contact page
    experience/        Experience page
    projects/          Projects pages
    skills/            Skills page
  components/
    layout/            Navbar, footer, page transition
    sections/          Home page sections
    ui/                Reusable UI components
  data/                Portfolio content
  lib/                 Shared utilities, Firebase Admin, site config
public/
  certifications/      Credential badge images
  projects/            Project preview images
  resume.pdf           Downloadable resume
docs/
  maintenance.md       Update checklist
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="your_private_key_with_escaped_newlines"
```

`FIREBASE_PRIVATE_KEY` should keep newline characters escaped as `\n`.

The Firebase variables are used only by the server-side contact route. Do not commit service account JSON files, `.env`, `.env.local`, or private keys.

## Running Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
pnpm format:check
pnpm lint:check
pnpm typecheck
pnpm build
pnpm test
```

The combined local verification command is:

```bash
pnpm verify
```

GitHub Actions runs `pnpm verify` and `pnpm test` on pushes and pull requests to `main`.

## Updating The Portfolio

- Main project content: `src/data/projects.ts`
- Experience and education: `src/data/experience.ts`
- Skills: `src/data/skills.ts`
- Credentials and certifications: `src/data/certifications.ts`
- Site identity and links: `src/lib/site-config.ts`
- Credential badge images: `public/certifications/`
- Project screenshots: `public/projects/`
- Resume file: `public/resume.pdf`

Use [docs/maintenance.md](docs/maintenance.md) before pushing updates. Keep public claims tied to real work, public repos, screenshots, documents, or clearly marked confidential experience.

## Deployment

Run `pnpm verify` before deployment. Configure the same environment variables in the hosting provider, including `NEXT_PUBLIC_SITE_URL` for the production URL.

The contact form writes valid submissions to the Firestore collection `contactMessages`.
