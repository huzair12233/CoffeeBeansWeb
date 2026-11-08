# ALTA — California Single-Origin Coffee

A premium, frontend-only brand showcase for a fictional California coffee roaster, built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Motion**.

> Brand showcase / portfolio site — not a functional e-commerce store.

## Design direction

- **Palette** — earthy espresso & saddle-brown bands, warm cream paper, a teal "pour" accent and a refined amber gold, drawn from the supplied reference art direction.
- **Type** — Fraunces (editorial display serif) · Hanken Grotesk (body) · Martian Mono (labels & coordinates).
- **Motion** — staggered hero reveal, scroll-triggered section reveals, animated Roasted/Green toggle, hover image zoom, interactive origins image-swap, CSS marquee.

## Sections

Hero · Marquee · Collection (Roasted / Green toggle) · Origins (terroir) · Craft (process) · Reserve Spotlight · Story + stats · Coffee Guide (brew methods) · Wholesale (request form) · Footer.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Notes

- Imagery is served from Unsplash (configured in `next.config.ts`); an internet connection is needed for photos and Google Fonts.
- The wholesale form is client-side only — no data is collected or sent.
