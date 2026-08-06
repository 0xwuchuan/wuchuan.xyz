# wuchuan.xyz

Personal portfolio and digital garden built with Astro, Tailwind CSS, and the Flexoki color system. The site is statically generated and deployed as Cloudflare Workers Static Assets with no Worker script.

## Development

```bash
yarn install
yarn dev
```

The local site is available at `http://localhost:4321`.

## Validation

```bash
yarn run check
yarn build
yarn preview
```

## Content

Blog entries live in `src/content/blog`. Each Markdown file must satisfy the schema in `src/content.config.ts`:

```yaml
title: Note title
description: Search and feed summary
publishedDate: 2026-07-19
updatedDate: 2026-07-19
draft: false
```

Draft entries are excluded from blog pages, generated note routes, RSS, and the sitemap.

## Cloudflare Workers Builds

Connect this GitHub repository to a Worker and use:

- Production branch: `main`
- Build command: `yarn build`
- Deploy command: `yarn deploy`
- Non-production deploy command: `yarn wrangler versions upload`
- Build variable: `YARN_VERSION=1.22.22`

`.node-version` pins the Workers Builds runtime to Node 22.16, and the Yarn build variable keeps dependency installation aligned with the committed Yarn Classic lockfile. `wrangler.jsonc` configures `./dist` as the static asset directory, clean no-trailing-slash routes, custom 404 handling, and the apex custom domain. Security and cache policy are defined in `public/_headers`.

Cloudflare dashboard work that is not represented in this repository: connect Workers Builds to GitHub; add a proxied `www` DNS record and a permanent zone redirect from `www.wuchuan.xyz/*` to `https://wuchuan.xyz/${1}`; remove the old `blog.wuchuan.xyz` DNS record; and enable Web Analytics.
