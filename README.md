# Seifeldin Mahmoud Portfolio

This is my personal software engineering portfolio. I built it to give recruiters and engineering teams a clear view of my technical background, project work, experience, and contact information.

## Overview

The site is a Next.js portfolio with dedicated pages for my background, experience, projects, skills, and contact details. Most content is stored in local TypeScript data files so the structure stays easy to review and update.

The contact form is backed by Firebase Firestore through a server-side API route. Firebase Admin credentials stay on the server and are configured through environment variables.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Firebase Admin SDK
- Firestore
- Zod
- React Hook Form
- ESLint and Prettier

## Features

- Home, About, Experience, Projects, Skills, and Contact pages
- Project listing and project detail pages
- Search and filtering on the Projects page
- Dark mode
- Command palette
- Server-side contact form validation
- Firestore storage for contact submissions
- Sitemap, robots file, metadata, and structured data
- Consistent route transition animation across pages

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
  resume.pdf           Downloadable resume
```

## Firebase Setup

The contact form writes submissions to a Firestore collection named `contactMessages`.

Create a Firebase project, generate a Firebase Admin SDK service account, and copy the needed values into `.env.local`. Do not commit the service account JSON file or any private key values.

Expected Firestore document fields:

- `name`
- `email`
- `subject`
- `message`
- `createdAt`

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="your_private_key_with_escaped_newlines"
```

For `FIREBASE_PRIVATE_KEY`, keep newline characters escaped as `\n` inside the environment variable.

## Running Locally

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build and Deployment

Run the production build locally before deploying:

```bash
pnpm build
pnpm start
```

For deployment, configure the same environment variables in the hosting provider. The project is ready to deploy once the Firebase values and public site URL are set.

## Contact

The portfolio links to my email, GitHub, LinkedIn, and resume from the Contact page.
