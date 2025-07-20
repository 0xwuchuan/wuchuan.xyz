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
- **Styling**: Tailwind CSS with Flexoki color scheme
- **UI Components**: shadcn/ui components library
- **Typography**: Custom Satoshi font + Chivo and Inter from Google Fonts
- **Theme System**: Dark/Light mode switching with 'd' key
- **Data**: JSON files for projects (`src/public/projects.json`) and experiences (`src/public/experiences.json`)

### Key Structure

- **Pages**: App Router with pages in `src/app/` (home, experiences, projects)
- **Components**: Reusable UI components in `src/components/` including ThemeProvider and Footer
- **Styling**: Flexoki color system with theme-adaptive CSS custom properties
- **Fonts**: Local Satoshi font + Google Fonts configured in layout
- **Redirects**: `/blog` redirects to external blog at `https://blog.wuchuan.xyz`

### Design System

- **Color Scheme**: Flexoki color palette (https://stephango.com/flexoki)
- **Theme Switching**: Press 'd' to toggle between dark (default) and light modes
- **Base Colors**: `tx`, `tx-2`, `tx-3` (text), `bg`, `bg-2` (backgrounds), `ui`, `ui-2`, `ui-3` (interface)
- **Accent Colors**: `red`, `orange`, `yellow`, `green`, `cyan`, `blue`, `purple`, `magenta`
- **Font hierarchy**: Satoshi (primary), Chivo (headings), Inter (fallback)
- **Interactions**: Cyan hover effects on links and interactive elements
- **Mobile-responsive** with custom breakpoints

### Path Aliases

- `@/*` maps to `src/*`
- `@components/*` maps to `src/components/*`
- `@public/*` maps to `public/*`

### Data Management

Projects and experiences are stored in JSON files and imported into components. Update these files to modify displayed content.