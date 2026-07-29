# Hotel Jatashankar

Standalone Vite + React + TypeScript site (migrated from a pnpm monorepo/Replit setup — no Replit or workspace dependencies remain).

## Requirements

- Node.js 20+
- npm (or pnpm/yarn if you prefer, but no workspace config is needed)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Type checking

```bash
npm run typecheck
```

## Deployment

- **Vercel** — `vercel.json` is already configured (`npm run build`, output `dist/`, SPA fallback rewrite).
- **Netlify** — `netlify.toml` is already configured the same way.
- **GitHub Pages** — build with `npm run build`, then deploy the `dist/` folder (e.g. via `gh-pages` or a GitHub Actions workflow). If hosting under a subpath (e.g. `username.github.io/repo`), set `base: '/repo/'` in `vite.config.ts`.

## Notes

- This is a fully static frontend — no backend/API calls are made from the app.
- Tailwind CSS v4 is configured via the `@tailwindcss/vite` plugin and CSS-native `@theme`/`@import` directives in `src/index.css` — there's no `tailwind.config.ts` or `postcss.config.js` by design (not needed with this setup).
