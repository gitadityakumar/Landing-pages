# Halal_Lab Predictive Intelligence Landing Page

A responsive marketing landing page built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Preview

![Halal_Lab landing page preview](./public/readme/landing-page-preview.webp)

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16.2.3-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)

## Features

- App Router project structure using server components by default
- Full-width multi-section marketing landing page
- Section-based component architecture for maintainability
- Local custom fonts via `next/font/local`
- Optimized assets rendered with `next/image`
- Tailwind CSS v4 styling with custom design tokens and utility classes

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── audiences-section.tsx
│   ├── footer-section.tsx
│   ├── hero-section.tsx
│   ├── page-utils.ts
│   ├── results-section.tsx
│   └── testimonials-section.tsx
└── public/
    ├── design-assets/
    └── readme/
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
