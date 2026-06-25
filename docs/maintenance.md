# Portfolio Maintenance Checklist

Use this checklist before pushing portfolio updates.

## Content Updates

- Update project content in `src/data/projects.ts`.
- Update experience and education in `src/data/experience.ts`.
- Update skill groupings in `src/data/skills.ts`.
- Update verified certification cards in `src/data/certifications.ts`.
- Keep public claims tied to a repo, screenshot, document, or real work history.
- Mark confidential work clearly instead of filling gaps with unsupported details.
- Check that location, availability, resume, GitHub, LinkedIn, and email are current.

## Screenshots And Files

- Replace screenshots in `public/projects/` only when the project UI or case study changes materially.
- Keep certification badge images in `public/certifications/` and link them to a public verification URL.
- Keep confidential screenshots sanitized.
- Keep the latest resume at `public/resume.pdf`.
- Do not commit `.env`, `.env.local`, Firebase service account JSON files, or private keys.

## Before Pushing

- Run `npm run verify`.
- Run `npm run test`.
- Check the home page, project listing, project detail pages, skills, experience, and contact pages.
- Check mobile layout and the mobile menu.
- Check dark and light theme states.
- Verify external links and repository links.
- Read the README after any setup, script, or Firebase change.
- Keep commit messages factual and free of tool attribution.
