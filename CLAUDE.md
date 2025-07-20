# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start development server on http://localhost:3000
- `yarn build` - Build production application
- `yarn start` - Start production server
- `yarn lint` - Run ESLint checks

## Project Architecture

This is a personal portfolio website built with:

- **Framework**: Next.js 13.4 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components library
- **Typography**: Custom Satoshi font + Chivo and Inter from Google Fonts
- **Data**: JSON files for projects (`src/public/projects.json`) and experiences (`src/public/experiences.json`)

### Key Structure

- **Pages**: App Router with pages in `src/app/` (home, experiences, projects)
- **Components**: Reusable UI components in `src/components/`
- **Styling**: Custom Tailwind config with design tokens (offwhite, gray colors)
- **Fonts**: Local Satoshi font + Google Fonts configured in layout
- **Redirects**: `/blog` redirects to external blog at `https://blog.wuchuan.xyz`

### Design System

- Custom colors: `offwhite` (#EBEBEC), `gray` (#59595A)
- Font hierarchy: Satoshi (primary), Chivo (headings), Inter (fallback)
- Mobile-responsive with custom breakpoints
- Component variants using `class-variance-authority` and `clsx`

### Path Aliases

- `@/*` maps to `src/*`
- `@components/*` maps to `src/components/*`
- `@public/*` maps to `public/*`

### Data Management

Projects and experiences are stored in JSON files and imported into components. Update these files to modify displayed content.