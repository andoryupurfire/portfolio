# Andres Rodriguez — Portfolio

Personal site of Andres Rodriguez, Full-Stack Software Developer (Java, Spring Boot, React).
Live at **https://afrodriguez.dev**.

## Stack

Next.js (static export) · React · TypeScript · Tailwind CSS. Brand logos from Simple Icons, rendered at build time.

## Editing content

All text (profile, experience, projects, stack, contact) lives in [`src/data/config.ts`](src/data/config.ts).
The CV PDFs are served from `public/cv/` and shown at `/cv` (English) and `/es/cv` (Spanish).

## Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static site in /out
```

## Deploy

Netlify builds with `pnpm build` and publishes `out/` (see [`netlify.toml`](netlify.toml)).
Old URLs are redirected in [`public/_redirects`](public/_redirects).
