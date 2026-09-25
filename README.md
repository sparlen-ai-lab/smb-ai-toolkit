# Sparlen

Single-page site for Sparlen, an AI consulting and freelance practice that designs, builds, and deploys agents for business workflows.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit the copy

All visible text, links, and the Calendly URL live in [`src/content/site.ts`](src/content/site.ts).

- Set `calendlyUrl` to your scheduling link to replace the embed placeholder.
- Set `email`, `social.linkedin`, and `social.github` before publishing.
- The contact form opens the visitor’s email app with the brief filled in. Point it at your own endpoint in `src/components/Contact.tsx` if you add a backend later.

## Deploy

The app is a standard Next.js project and deploys on Vercel with no extra configuration. Set the production URL in `site.url` so canonical and Open Graph links resolve correctly.
