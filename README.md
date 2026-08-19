# Peerfit — Landing Page

Marketing landing page for **Peerfit** — "Create. Join. Play together."
Built with Vite, React, TypeScript, Tailwind CSS v4 and Framer Motion, in a
clean light-theme, product-focused layout (hero, how it works, features,
sports, testimonials, download CTA) using the brand's orange/black/white
visual identity.

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
| Logo (orange, navbar) | `public/assets/logo/peerfit-logo-orange.png` — already in place |
| Logo (white, dark footer) | `public/assets/logo/peerfit-logo-white.png` — already in place |
| Logo (black) | `public/assets/logo/peerfit-logo-black.png` — already in place |
| Hero photo (group high-fiving) | `public/assets/images/hero-group-highfive.jpg` |
| Sport tile — football | `public/assets/images/sport-football.jpg` |
| Sport tile — tennis | `public/assets/images/sport-tennis.jpg` |
| Sport tile — running | `public/assets/images/sport-running.jpg` |
| Sport tile — swimming | `public/assets/images/sport-swimming.jpg` |
| Sport tile — golf | `public/assets/images/sport-golf.jpg` |
| Sport tile — padel | `public/assets/images/sport-padel.jpg` |
| Testimonial avatars | `public/assets/images/avatar-{daniel,sophie,chris}.jpg` |
| Hero social-proof avatar stack | `public/assets/images/avatar-stack-{1,2,3,4}.jpg` |
| Hero phone mockup (Match Confirmed screen) | `public/assets/mockups/app-screen-match-confirmed.png` — already in place (real app dashboard screenshot) |
| Founder photo (Yassine Zniber) | `public/assets/images/founder-yassine-zniber.jpg` |

The manifest lives in `src/lib/assets.ts` — add or rename paths there if you
want different filenames. `src/components/ImageWithFallback.tsx` handles the
graceful fallback logic, and `src/components/Logo.tsx` does the same for the
wordmark.

## Structure

- `src/components/` — one component per section: `Navbar`, `Hero` (photo +
  map pins + phone mockup), `HowItWorks` (4-step flow), `Features` (4 cards
  with live mini UI previews), `SportsGrid`, `Origin` (founding story),
  `Testimonials`, `FinalCTA` (app download banner), `Footer`.
- Shared UI: `Reveal` (scroll animations), `ImageWithFallback`, `Logo`,
  `AvatarStack`, `MapPinBadge`, `PhoneMockup`.
- `src/lib/assets.ts` — central asset path manifest.
- `src/index.css` — Tailwind v4 theme tokens (brand colors, fonts,
  animations) via `@theme`. Light theme: `pure-white` background,
  `deep-black` text, `peerfit-orange`/`electric-orange` accents.

## Company facts baked into the copy

- Peerfit — a Moroccan startup founded in 2025, incubated at **Startup
  Olympus** — is unrelated to the US company "Peerfit" (Tampa, founded
  2011, acquired by FitOn in 2022). Don't confuse the two.
- Founded by **Yassine Zniber** (credited in the "Our Story" section).
- Collaborative app to find sporting partners across **20+ sports**: create
  or join sporting events, build communities, and rate other athletes on
  performance.

## Known follow-ups

- **Newsletter form** (`Footer.tsx`) is UI-only — wire `NewsletterForm`'s
  `handleSubmit` to your ESP/waitlist endpoint.
- **App Store / Google Play links** (`FinalCTA.tsx`, `Navbar.tsx`) point to
  `#` — swap in real store URLs once published.
- **QR code** in `FinalCTA.tsx` (`FauxQR`) is a decorative placeholder
  pattern, not a real scannable code — swap for a generated QR once the
  store links are live.
- Nav/footer links to `#` (Careers, Press, Contact, legal, Pricing) are
  placeholders pending real destinations/business model info.
