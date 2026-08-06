Commit completed changes with conventional commit messages.

Maintain parity with the Paper artboards. Desktop typography, spacing, hierarchy, and Flexoki tokens come from Paper; derive mobile behavior responsively.

## Development commands

- `yarn dev` — start Astro locally
- `yarn run check` — validate content and type-check Astro files
- `yarn build` — generate the production static site
- `yarn preview` — preview the built site

## Architecture

- Astro with static output
- Tailwind CSS through the Vite plugin
- No React or hydrated framework components
- Typed Markdown content collection in `src/content/blog`
- Cloudflare Workers Static Assets with no Worker script
- Dark theme by default; the persisted manual light theme is toggled with `d`
- Local subsetted Satoshi variable font

## Routes

- `/`
- `/work`
- `/projects`
- `/blog`
- `/blog/all`
- `/blog/[slug]`
- `/rss.xml`
- `/404`

Obsolete routes such as `/experiences` and `/garden` intentionally return the custom 404 page.

## Data and content

- Work entries: `src/data/experiences.json`
- Projects: `src/data/projects.json`
- Blog schema: `src/content.config.ts`
- Blog Markdown: `src/content/blog`

Draft blog entries must remain excluded from rendered pages, RSS, and the sitemap.

## Deployment

`wrangler.jsonc` is the source of truth for the Workers Static Assets deployment. Security and cache headers live in `public/_headers`. The www-to-apex redirect is a Cloudflare zone redirect rule because Static Assets `_redirects` rules only accept relative source paths.
