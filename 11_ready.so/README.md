# Ready Calendar Landing Page

A responsive product marketing landing page built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Preview

![Ready landing page preview](./public/readme/preview.webp)

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)

## Features

- App Router project structure with server components by default
- Multi-section SaaS landing page for the Ready calendar product
- Section-based component architecture for maintainability
- Inter font loaded with `next/font/google`
- Optimized assets rendered with `next/image`
- Tailwind CSS v4 styling with shared global section and typography utilities

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── all-in-calendar.tsx
│   ├── feeling-ready.tsx
│   ├── final-cta.tsx
│   ├── hero-section.tsx
│   ├── meeting-upgrade.tsx
│   └── superpowered-meetings.tsx
├── public/
│   ├── readme/
│   └── ready/
└── scripts/
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
