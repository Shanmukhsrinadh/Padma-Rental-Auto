# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Padma Priya Enterprises (artifacts/padma-priya)
- **Type**: React + Vite frontend-only website (JavaScript)
- **Preview path**: `/`
- **Purpose**: Vehicle rental business landing page — Padma Priya Enterprises
- **Stack**: React, Vite, Tailwind CSS, Framer Motion, Lucide React
- **Features**:
  - Sticky responsive navbar with mobile hamburger menu
  - Hero section with WhatsApp CTA
  - Stats bar with animated counters
  - Vehicle fleet section with filter tabs (All/Hatchback/Sedan/SUV)
  - Services section (4 service cards)
  - Why Choose Us section
  - Booking form (UI-only, submits via WhatsApp)
  - Testimonials section
  - Contact section
  - Footer
  - Floating WhatsApp button
- **Data**: Static JSON at src/data/vehicles.json
- **Booking**: All actions open WhatsApp with pre-filled messages
- **No backend**: Fully static, deployable on any static host
