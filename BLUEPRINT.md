# BLUEPRINT.md - TaskMaster Project Roadmap & State

## 1. Project Overview
**Name:** TaskMaster (SaaS Landing Page)
**Goal:** A high-conversion landing page for an AI-powered task management tool. Designed as a premium portfolio piece for Workana.
**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React.
**Deploy Target:** Firebase Hosting.

## 2. Current Status
**Phase:** 🚀 Phase 5 (Polish & Mobile) In Progress
**Last Update:** Core navigation and hero section implementation.
**Build Status:** Not Started

## 3. Architecture & File Structure Strategy
* `app/page.tsx`: Main landing page (Single Page Application feel).
* `app/layout.tsx`: Root layout with font configuration (Inter) and global styles.
* `components/ui/*`: Atom components (Button, Badge, Card).
* `components/layout/*`: Layout components (Navbar, Footer).
* `components/sections/*`: Specific landing page sections (Hero, Features, Pricing, Footer).

## 4. Implementation Roadmap

### ✅ Phase 1: Foundation [x] Done
- [x] Initialize Next.js project with TypeScript & Tailwind.
- [x] Configure `GEMINI.md` rules.
- [x] Configure `layout.tsx` (Metadata, Inter Font, Base Global CSS).
- [x] Define Tailwind Config (Colors: Slate-950 bg, Violet-600 primary).

### ✅ Phase 2: The Hero Section [x] Done
- [x] Component: `components/ui/Button.tsx`
- [x] Component: `components/layout/Navbar.tsx` (Logo, Links, CTA).
- [x] Component: `components/sections/HeroSection.tsx` (H1, Subtext, Dual CTA, Mockup Image).
- [x] Feature: Framer Motion entrance animations.
- [x] Design: Glow effects and gradients.

### ✅ Phase 3: Social Proof & Features [x] Done
- [x] Component: `SocialProof` (Logo strip of trusted companies).
- [x] Component: `FeaturesGrid` (Bento-grid style or 3-column card layout).
- [x] Component: `FeatureCard` with hover effects.

### ✅ Phase 4: Pricing & Logic [x] Done
- [x] Component: `PricingSection`.
- [x] Logic: Toggle Switch (Monthly/Yearly state).
- [x] Data: Pricing array map.
- [x] Visual: "Best Value" highlight.

### ⏳ Phase 5: Polish & Mobile (In Progress)
- [x] Feature: Mobile Menu (Sheet/Drawer).
- [x] Responsive Check: Ensure stacking on mobile ( < 768px).
- [x] Optimization: Lighthouse Check (Images, SEO tags).
- [ ] SEO: Add metadata to `app/layout.tsx`.
- [ ] A11Y: Add alt text to images and aria-labels to icon buttons.
- [ ] Polish: Adjust padding on `app/page.tsx`.

### ⏳ Phase 6: Deploy
- [ ] Config: `firebase.json`.
- [ ] Action: Build & Deploy to Firebase Hosting.

## 5. Design System Tokens (Quick Reference)
- **Bg:** `bg-slate-950`
- **Text Primary:** `text-slate-50`
- **Text Secondary:** `text-slate-400`
- **Primary:** `violet-600` (Hover: `violet-500`)
- **Radius:** `rounded-xl` or `rounded-2xl`

## Current Task: Phase 5 - Polish & Mobile

### Plan:
1.  **Install Dependencies**: Install `framer-motion` and `lucide-react` for animations and icons.
2.  **Refactor `Navbar.tsx`**:
    *   Implement a mobile-responsive navigation drawer.
    *   Use `framer-motion` for smooth enter/exit animations.
    *   Add a hamburger icon that animates to an "X".
    *   Ensure body scroll is locked when the menu is open.
3.  **Update `app/layout.tsx`**:
    *   Inject comprehensive SEO metadata, including title, description, keywords, and Open Graph tags.
4.  **Enhance Accessibility**:
    *   Audit all images for descriptive `alt` text.
    *   Ensure icon-only buttons have `aria-label` attributes.
5.  **Perform Responsive Polish**:
    *   Adjust vertical padding on main sections in `app/page.tsx` for better mobile spacing.
6.  **Final Code Quality Check**:
    *   Run `npm run lint -- --fix` to automatically correct any linting errors.

