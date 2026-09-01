# Commonwell Trust — Reusable Nonprofit Template

A reusable charity / nonprofit website template built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Structure
- Navbar (sticky, mobile menu)
- Hero (headline + stat card)
- Impact stats bar
- Problem/challenge section (3 cards)
- Who We Are (photo grid + copy)
- Programs (3 program cards)
- Funding CTA (cost-per-impact tiers)
- Success stories (3 testimonial cards)
- Final CTA
- Footer

## Setup
```
npm install
npm run dev
```

## Customizing for a client
- Swap the org name/copy in each component (currently "Commonwell Trust" placeholder content)
- Replace Unsplash image URLs with client photography
- Colors and fonts are defined in `tailwind.config.ts` and `app/layout.tsx` (Fraunces + Work Sans)
