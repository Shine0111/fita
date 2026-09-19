# FITA Portfolio

Initial Next.js implementation of the Stitch 2×2 editorial portfolio direction.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Motion
- GitHub for source control
- Hosting intentionally left open for now

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## First things to replace

1. `components/profile.tsx` — real portrait + social URLs.
2. `components/statement.tsx` — final positioning copy.
3. `lib/projects.ts` — real project data.
4. `components/project-carousel.tsx` — real poster/video assets.
5. `components/details.tsx` — final bio/services/contact.
6. `app/layout.tsx` — final metadata.

Media hosting can be added later without changing the page architecture.
