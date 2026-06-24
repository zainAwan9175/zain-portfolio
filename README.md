# Zain Ul Abedin — Portfolio

My personal portfolio. Live at **https://zainulabedin.vercel.app**

A fast, fully static personal site built with Next.js. All content is served from a
single TypeScript data file — there is **no backend, database, or API** — so pages
render instantly.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** + Radix UI primitives
- **Framer Motion** for animations
- **MDX** (remark / rehype / Shiki) for the blog
- Media hosted on **Cloudinary**
- Deployed on **Vercel**

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

Everything you see on the site comes from two files — no database needed:

- [`src/data/portfolio.ts`](src/data/portfolio.ts) — profile, skills, work, education,
  projects (with case studies), and competitions.
- [`src/data/navigation.tsx`](src/data/navigation.tsx) — navbar links and social icons.

Blog posts live as MDX files in [`content/`](content/).

## Project structure

```
src/
  app/            # routes: home, blog, project case studies
  components/      # UI + sections
  data/           # portfolio.ts + navigation.tsx (the "JSON" backend)
  lib/            # helpers
content/          # blog posts (.mdx)
public/           # static assets
```

## Credit

Originally based on the open-source [dillionverma/portfolio](https://github.com/dillionverma/portfolio)
template (MIT). Rebuilt and customized by Zain Ul Abedin. See [LICENSE](LICENSE).
