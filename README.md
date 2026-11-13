# CONNEXA

CONNEXA’s public landing page, built with React, TypeScript and Vite. The production build includes static HTML, so visitors can read the page and use its navigation and email links with JavaScript disabled.

## Run locally

Use Node.js 20.19+ on the 20.x line, or 22.12+.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Assembles the landing page |
| `src/components/` | Header, footer, shared navigation, logo and reveal wrapper |
| `src/sections/` | Hero, pathway card, approach, audience and contact |
| `src/content/site.ts` | Contact address, navigation labels and section lists |
| `src/styles/` | Fonts, design, responsive layouts and motion |
| `public/` | Favicon, web app manifest and self-hosted fonts |
| `index.html` | Page metadata and React mount point |

Update `contactEmail` in `src/content/site.ts` to change the recipient on every email link. The conversion covers the public CONNEXA site. The sample `/example` page, sample API and Polsia infrastructure were starter-template files and are excluded.

## Build

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` to a static host. The site requires no environment variables or database.
