# Peerfit — Landing Page

Marketing landing page for **Peerfit** — "the social ecosystem that connects
athletes, builds teams and brings communities together through sports."
Built with Vite, React, TypeScript, Tailwind CSS v4 and Framer Motion, and
implements the brand's visual identity guide (colors, typography,
iconography, imagery style, 5 pillars, brand voice).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Dropping in real assets

The whole page is built to run today with branded CSS/SVG placeholders and
**auto-upgrade the moment real files are added** — no code changes needed.
Just drop files into `public/assets/` using these exact paths:

| Purpose | Path |
| --- | --- |
| Logo (orange) | `public/assets/logo/peerfit-logo-orange.svg` |
| Logo (white, for dark backgrounds) | `public/assets/logo/peerfit-logo-white.svg` |
| Logo (black, for light backgrounds) | `public/assets/logo/peerfit-logo-black.svg` |
| Icon-only mark | `public/assets/logo/peerfit-icon.svg` |
| Imagery — basketball | `public/assets/images/imagery-basketball.jpg` |
| Imagery — community/friends | `public/assets/images/imagery-friends.jpg` |
| Imagery — running | `public/assets/images/imagery-running.jpg` |
| Imagery — tennis | `public/assets/images/imagery-tennis.jpg` |
| Imagery — cycling | `public/assets/images/imagery-cycling.jpg` |
| App screen mockup | `public/assets/mockups/app-screen-home.png` |
| Watch mockup | `public/assets/mockups/watch.png` |
| Bottle mockup | `public/assets/mockups/bottle.png` |
| Dark "Never Train Alone" card photo | `public/assets/mockups/app-dark-card.png` |

The manifest lives in `src/lib/assets.ts` — add or rename paths there if you
want different filenames. `src/components/ImageWithFallback.tsx` handles the
graceful fallback logic, and `src/components/Logo.tsx` does the same for the
wordmark.

## Structure

- `src/components/` — one component per section (`Hero`, `Pillars`,
  `Gallery`, `AppShowcase`, `CTABanner`, `Footer`, etc.), plus shared UI
  (`Reveal` for scroll animations, `ImageWithFallback`, `Logo`).
- `src/lib/assets.ts` — central asset path manifest.
- `src/index.css` — Tailwind v4 theme tokens (brand colors, fonts,
  animations) via `@theme`.

## Known follow-ups

- **Newsletter form** (`Footer.tsx`) is UI-only — wire `NewsletterForm`'s
  `handleSubmit` to your ESP/waitlist endpoint.
- **Founders / About section**: intentionally omitted. The "Peerfit" name is
  already used by a couple of unrelated existing companies/apps, so no
  founder bios were fabricated. Add a `Founders` component with your real
  team info whenever you're ready.
- Nav/footer links to `#` (Careers, Press, Contact, legal pages) are
  placeholders pending real destinations.
