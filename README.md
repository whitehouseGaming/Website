# White House Gaming

Static Astro site for White House Gaming — indie game & XR studio (Varanasi, India). Deploys to GitHub Pages at [whitehousegaming.com](https://whitehousegaming.com) via `.github/workflows/deploy.yml` on every push to `main`.

## Stack

- **Astro** (static output) — routing, content collections, image optimization
- **Tailwind CSS v4** (`@tailwindcss/vite`) — utility styling, theme tokens in `src/styles/global.css`
- **GSAP + ScrollTrigger** — scroll reveals, stat count-up, timeline draw, card tilt (`src/scripts/gsap-init.ts`)
- **Astro View Transitions** (`<ClientRouter />` in `BaseLayout.astro`) — page transitions

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Finding placeholder content

Every stand-in value is marked with a `TODO_` prefix. Search the repo for `TODO_` to find everything that needs a real value before launch (stats, resume link, timeline dates, GameHub Play Store link, YouTube channel, video IDs, join-us compensation model, and one placeholder game slot).

## Adding a new game

1. Create a folder under `src/content/games/<slug>/`.
2. Add `index.md` with frontmatter:
   ```yaml
   ---
   title: Game Name
   tagline: One-line hook.
   coverImage: ./cover.webp   # optional — omit if you don't have art yet
   screenshots: []            # optional array of ./screenshot-*.webp
   youtubeId: dQw4w9WgXcQ     # optional
   playStoreUrl: 'https://play.google.com/store/apps/details?id=...'
   featured: true             # show on homepage GameHub teaser
   order: 5                   # sort position in /games
   ---
   Full description / features go here as markdown body.
   ```
3. Drop `cover.webp` (and any screenshots) next to `index.md`.
4. The game automatically gets a card on `/games` and a detail page at `/games/<slug>`.

## Adding a new project

Same pattern under `src/content/projects/<slug>/index.md`:

```yaml
---
title: Project Name
tagline: One-line hook.
status: 'In Development'   # or 'Launched' | 'Concept'
coverImage: ./cover.webp    # optional
youtubeId: dQw4w9WgXcQ      # optional
techNotes: 'Stack details.' # optional
externalUrl: 'https://...' # optional, shows a "View Live" button
date: 2026-01-01
order: 1
---
Full description as markdown body.
```

## Adding a new video

Add a `.yaml` file under `src/content/videos/`:

```yaml
title: 'OMG GameHub — Devlog #2'
youtubeId: dQw4w9WgXcQ
date: 2026-02-01
relatedGame: cup-matching       # slug of a games/ entry, optional
relatedProject: jarvis          # slug of a projects/ entry, optional
tags:
  - devlog
```

It automatically appears on `/videos` (filterable by the related game/project) and on that game's or project's own detail page. Use a `youtubeId` starting with `TODO_` to render a "Video Coming Soon" placeholder instead of a broken embed.

## Site-wide data

Small editable data files live in `src/data/`:

- `site.ts` — contact info, socials, form URLs
- `stats.ts` — homepage stat bar
- `timeline.ts` — About page career milestones
- `skills.ts` — skill chips + tech marquee logos
- `services.ts` — Freelance page services/proven-work/workflow
- `faq.ts` — FAQ entries
- `nav.ts` — header nav links

## Deploying

Push to `main` — GitHub Actions builds with `withastro/action` and deploys via `actions/deploy-pages`. Make sure GitHub Pages is set to "GitHub Actions" as the source in the repo settings, and that the `whitehousegaming.com` DNS still points at GitHub Pages (the `CNAME` file lives in `public/` and is copied into every build).
