# IdentityHub Landing Page

A polished single-page landing page for `IdentityHub`, built with the Next.js App Router and tailored for a dark, privacy-focused product presentation. The page is designed around a strong hero section, feature storytelling, pricing, testimonials, and a high-contrast CTA/footer experience.

## Preview

![IdentityHub landing page preview](public/landing-page.webp)

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16.2.3-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)

## Highlights

- Fully componentized landing page built with the App Router.
- Dark visual system with layered gradients, concentric rings, glows, and product-style UI cards.
- Responsive one-page layout covering hero, services, features, pricing, testimonials, and CTA/footer.
- Custom typography using `Sora` and a local `Aeonik` font file.
- Static asset driven design using SVG illustrations and image-based section compositions.

## Sections

- `Hero`: brand intro, top navigation, primary CTAs, and the central identity illustration.
- `Services`: three feature cards with angled corners and gradient borders.
- `Why Choose Us`: stacked narrative panels, including custom visual compositions for product/security messaging.
- `Pricing`: three-tier pricing cards with emphasized premium plan styling.
- `Testimonials`: social proof block with carousel-inspired presentation.
- `CTA + Footer`: closing conversion block with subtle radial glow and compact footer navigation.

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ctanfooter.tsx
│   ├── hero.tsx
│   ├── pricing.tsx
│   ├── service.tsx
│   ├── testimonials.tsx
│   └── whychooseus.tsx
├── fonts/
│   └── Aeonik Regular.woff2
└── public/
    ├── landing-page-current.png
    ├── hero.png
    ├── logo.svg
    └── other visual assets...
```

## Getting Started

### Prerequisites

- `Node.js` 20+
- `npm` 10+

### Install

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Lint

```bash
npm run lint
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment

Build the production bundle with:

```bash
npm run build
```

Then start it locally with:

```bash
npm run start
```

This project can be deployed to any platform that supports Next.js, including Vercel, Netlify, or a self-hosted Node runtime.
