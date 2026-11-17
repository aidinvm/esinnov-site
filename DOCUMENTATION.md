# ESInnov - Complete Website Documentation

> **Version 2.0** | Last Updated: January 19, 2026  
> **Status**: Production Ready  
> **Domain**: [esinnov.com](https://esinnov.com)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Brand Identity](#brand-identity)
3. [Technical Architecture](#technical-architecture)
4. [Website Sitemap](#website-sitemap)
5. [Page Documentation](#page-documentation)
6. [Component Library](#component-library)
7. [Design System](#design-system)
8. [API Reference](#api-reference)
9. [SEO & Schema Markup](#seo--schema-markup)
10. [Development Guide](#development-guide)
11. [Deployment](#deployment)

---

## Executive Summary

**ESInnov (EcoSync Innovations Inc.)** is a boutique consulting firm specializing in **Multi-Agent AI Systems** and **Agentic Intelligence** for enterprise operations. The website serves as the company's digital headquarters—a premium, high-conversion platform designed to:

- Showcase proprietary AI automation capabilities
- Attract enterprise clients for feasibility studies and deployments
- Demonstrate the **Zone IQ™** engine through interactive demos
- Establish thought leadership through research content
- Generate qualified leads through a structured sales funnel

### Core Value Proposition
> "We turn paperwork bottlenecks into 48-hour turnarounds. AI systems that read, analyze, and verify—so you can decide faster."

---

## Brand Identity

### Company Information

| Attribute | Value |
|-----------|-------|
| **Legal Name** | EcoSync Innovations Inc. |
| **Brand Name** | ESInnov |
| **Tagline** | Agentic Intelligence Studio |
| **Headquarters** | Calgary, Alberta, Canada |
| **Industry** | AI Automation / Enterprise Consulting |
| **Founded** | 2024 |

### Leadership

| Name | Title | LinkedIn |
|------|-------|----------|
| **Aidin VM** | Principal Consultant & R&D Lead | [linkedin.com/in/aidinvm](https://linkedin.com/in/aidinvm) |

### Proprietary Products

| Product | Description |
|---------|-------------|
| **Zone IQ™** | Proprietary feasibility engine for real estate intelligence |
| **Sentinel Agent™** | Risk vector analysis agent |
| **Catalyst Agent™** | Opportunity signal detection agent |
| **Arbiter Agent™** | Decision synthesis and recommendation agent |

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Signal Blue | `#0066FF` | Primary accent, CTAs, links |
| Signal Blue Dark | `#0052CC` | Hover states |
| Emerald | `#10B981` | Success, active indicators |
| Violet | `#8B5CF6` | Secondary accent |
| Amber | `#F59E0B` | Warnings, highlights |
| Navy (Dark) | `#0F172A` | Dark sections background |
| Slate | `#1E293B` | Elegant dark background |

### Typography

| Font | Variable | Usage |
|------|----------|-------|
| **Inter** | `--font-inter` | Body text, UI elements |
| **JetBrains Mono** | `--font-jetbrains` | Code, terminal, technical labels |

---

## Technical Architecture

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.10 | React framework with App Router |
| **React** | 19.2.1 | UI library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Framer Motion** | 12.x | Animations and transitions |
| **Lucide React** | 0.561.0 | Icon library |
| **hCaptcha** | 1.17.4 | Bot protection for forms |
| **Resend** | 6.6.0 | Email delivery for contact forms |

### Project Structure

```
esinnov-site/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # Landing page (Home)
│   │   ├── layout.tsx                # Root layout + metadata
│   │   ├── globals.css               # Design system & styles
│   │   ├── favicon.ico               # Site favicon
│   │   ├── robots.ts                 # SEO robots configuration
│   │   ├── sitemap.ts                # Dynamic sitemap generator
│   │   │
│   │   ├── about/                    # About page
│   │   │   └── page.tsx
│   │   ├── access/                   # Contact/Sales funnel
│   │   │   └── page.tsx
│   │   ├── advisory/                 # Advisory services
│   │   │   └── page.tsx
│   │   ├── cases/                    # Case studies
│   │   │   └── page.tsx
│   │   ├── faq/                      # FAQ page
│   │   │   └── page.tsx
│   │   ├── methodology/              # Agentic workflow methodology
│   │   │   └── page.tsx
│   │   ├── protocols/                # Architecture deep-dive
│   │   │   └── page.tsx
│   │   ├── research/                 # R&D articles & newsletter
│   │   │   └── page.tsx
│   │   ├── zone-iq-demo/             # Interactive Zone IQ demo
│   │   │   └── page.tsx
│   │   │
│   │   └── api/                      # API routes
│   │       ├── contact/              # Contact form handler
│   │       ├── demo/                 # Original demo API
│   │       ├── demo-public/          # Secured public demo
│   │       └── subscribe/            # Newsletter subscription
│   │
│   └── components/                   # Reusable React components
│       ├── AgentSchematic.tsx        # Agent workflow visualization
│       ├── AgenticStackVisual.tsx    # Hero background SVG
│       ├── AnimatedTitle.tsx         # Scramble text animation
│       ├── CountUp.tsx               # Number counter animation
│       ├── DeploymentGap.tsx         # Problem statement section
│       ├── Footer.tsx                # Site footer
│       ├── GlassCard.tsx             # Glass morphism card
│       ├── LiveDataTicker.tsx        # Scrolling status ticker
│       ├── MultiAgentAnimation.tsx   # Agent swarm animation
│       ├── Navbar.tsx                # Main navigation
│       ├── PageTransition.tsx        # Page enter/exit animation
│       ├── ParallaxSection.tsx       # Parallax scroll effect
│       ├── PulseGlow.tsx             # Pulsing glow element
│       ├── RiskIndexWidget.tsx       # Risk analysis widget
│       ├── ScrollReveal.tsx          # Scroll-triggered reveal
│       ├── TechStrip.tsx             # Tech logos marquee
│       └── TerminalButton.tsx        # Terminal-style CTA button
│
├── public/                           # Static assets
│   ├── esinnov-logo.png              # Main logo
│   ├── hero-city.jpg                 # Hero background image
│   ├── zoneiq_demo_public.html       # Static demo HTML
│   ├── logo-*.png/jpg                # Partner/tech logos
│   ├── BingSiteAuth.xml              # Bing verification
│   └── *.svg                         # Vector icons
│
├── DOCUMENTATION.md                  # This file
├── WEBSITE_FRAMEWORK.md              # Legacy framework doc
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
└── postcss.config.mjs                # PostCSS configuration
```

---

## Website Sitemap

### Visual Sitemap

```
                              ┌─────────────────┐
                              │   ESINNOV.COM   │
                              │   (Landing)     │
                              └────────┬────────┘
                                       │
           ┌───────────────────────────┼───────────────────────────┐
           │                           │                           │
    ┌──────▼──────┐             ┌──────▼──────┐             ┌──────▼──────┐
    │   DISCOVER  │             │   CONVERT   │             │   VALIDATE  │
    └──────┬──────┘             └──────┬──────┘             └──────┬──────┘
           │                           │                           │
    ┌──────▼──────┐             ┌──────▼──────┐             ┌──────▼──────┐
    │   /about    │             │   /access   │             │ /methodology│
    │   /research │             │  /advisory  │             │ /protocols  │
    │   /cases    │             │    /faq     │             │/zone-iq-demo│
    └─────────────┘             └─────────────┘             └─────────────┘
```

### Page Inventory

| Route | Page Name | Purpose | Priority |
|-------|-----------|---------|----------|
| `/` | Landing Page | Primary conversion, value proposition | High |
| `/access` | Get Started | Lead capture, service selection | High |
| `/advisory` | Advisory Services | Service breakdown, deliverables | High |
| `/methodology` | Methodology | Agentic workflow explanation | Medium |
| `/protocols` | Architecture | Technical deep-dive | Medium |
| `/zone-iq-demo` | Zone IQ Demo | Interactive product demo | High |
| `/about` | About | Company & leadership | Medium |
| `/research` | Research | Articles, newsletter signup | Medium |
| `/cases` | Case Studies | Success stories | Medium |
| `/faq` | FAQ | Common questions | Low |

---

## Page Documentation

### 1. Landing Page (`/`)

**File**: `src/app/page.tsx`  
**Lines**: 577  
**Purpose**: Primary conversion page showcasing ESInnov's value proposition

#### Sections

| Section | Description | Components Used |
|---------|-------------|-----------------|
| **Hero** | Full-width animated headline with CTAs | `AnimatedTitle`, `AgenticStackVisual`, `TerminalButton` |
| **Live Data Ticker** | Scrolling status indicators | `LiveDataTicker` |
| **Architecture Pillars** | 4-card grid of core capabilities | Custom cards |
| **Zone IQ Showcase** | Product capabilities overview | Custom layout |
| **Use Cases** | Industry applications | Card grid |
| **FAQ** | Expandable Q&A | Accordion |
| **CTA Section** | Dark background conversion push | Buttons |
| **Tech Strip** | Partner/technology logos | `TechStrip` |

#### Architecture Pillars Content

| Pillar | Icon | Description |
|--------|------|-------------|
| Agentic RAG | Brain | Agents dynamically retrieve, reason, and synthesize using MCP tool-calling |
| MCP Integration | Network | Model Context Protocol standardizes how AI connects with data sources |
| Verified Generation | Shield | Critic agents validate outputs through iterative loops |
| Multi-Agent Orchestration | Layers | A2A protocol enables agent-to-agent communication |

#### FAQ Content

1. **What exactly do you automate?**  
   Document analysis, compliance checking, data extraction, report generation, etc.

2. **What does an engagement cost?**  
   Feasibility studies start at $1,500 (48-hour delivery). Pilot projects quoted by scope.

3. **Do I need a technical team?**  
   No. We handle architecture through deployment. Your team receives training.

4. **How do I get started?**  
   Start with a Feasibility Study—48-hour analysis with no commitment beyond that.

---

### 2. Access Page (`/access`)

**File**: `src/app/access/page.tsx`  
**Lines**: 354  
**Purpose**: Lead capture and service selection funnel

#### Service Tiers

| Service | Price | Timeline | Badge |
|---------|-------|----------|-------|
| **Feasibility Study** | $1,500 | 48 hours | START HERE |
| **Pilot Deployment** | $8,500 | 2 weeks | RECOMMENDED |
| **Full Production** | $25,000+ | 4 weeks | ENTERPRISE |

#### Form Fields

- Name
- Email
- Company
- Selected Service
- Use Case Description
- hCaptcha verification

---

### 3. Advisory Page (`/advisory`)

**File**: `src/app/advisory/page.tsx`  
**Lines**: 194  
**Purpose**: Detailed service breakdown

#### Services Offered

| Service | Tagline | Description |
|---------|---------|-------------|
| **Generative HBU Modeling** | The Go/No-Go Signal | Don't wait for architects. Get preliminary highest-best-use analysis in minutes. |
| **Data Room Augmentation** | The Deal Accelerator | Accelerate transaction velocity with AI-curated data preparation. |
| **Real-Time Feasibility Pulse** | Instant Entry Point | Instant regulatory alignment check with no commitment. |

---

### 4. Methodology Page (`/methodology`)

**File**: `src/app/methodology/page.tsx`  
**Lines**: 209  
**Purpose**: Explain the agentic workflow process

#### Workflow Phases

| Phase | Name | Icon | Description |
|-------|------|------|-------------|
| 01 | Intelligent Indexing | Database | Agents autonomously decide what to index via MCP-enabled tool integration |
| 02 | Agentic Reasoning | Brain | Multi-agent debate, hypothesis generation, and verification loops |
| 03 | Output Synthesis | Network | Structured outputs with confidence scores and source attribution |
| 04 | Human Validation | Users | Expert review before delivery. Zero hallucination guarantee. |

#### MCP + A2A Features

- **Context Management**: MCP eliminates 1,200+ daily context switches
- **Tool Standardization**: Universal interface for LLMs
- **Agent Interoperability**: A2A enables cross-platform communication
- **Enterprise Security**: OpenAPI authentication with audit logging

---

### 5. Protocols Page (`/protocols`)

**File**: `src/app/protocols/page.tsx`  
**Lines**: 194  
**Purpose**: Technical architecture documentation

#### Architecture Layers

| Layer | Description | Technologies |
|-------|-------------|--------------|
| **Ingestion Layer** | Autonomous parsing of municipal bylaws, zoning maps, regulatory codes | MCP Tools, RAG Pipeline, Document AI |
| **Processing Layer** | Multi-agent debate with specialized domain agents | Agent Council, A2A Protocol, Memory |
| **Validation Layer** | Human-in-loop verification with audit trail | Validation Loop, Human-in-Loop, Audit Log |

#### Integration Stack

- LangChain, n8n, Pinecone, Supabase
- OpenAI, Anthropic, Google AI
- PostgreSQL

---

### 6. Zone IQ Demo (`/zone-iq-demo`)

**File**: `src/app/zone-iq-demo/page.tsx`  
**Lines**: 117  
**Purpose**: Interactive product demonstration

#### Features

- Terminal-style UI wrapper
- Loading animation sequence
- Embedded iframe to `/api/demo-public`
- Exit navigation back to home
- Bottom CTA to request full access

---

### 7. About Page (`/about`)

**File**: `src/app/about/page.tsx`  
**Lines**: 131  
**Purpose**: Company and leadership information

#### Sections

| Section | Content |
|---------|---------|
| **Hero** | "Sovereign R&D Studio" - Productized intelligence positioning |
| **Leadership** | Aidin VM profile with LinkedIn integration |
| **CTA** | "Ready to Build?" with Get Started button |

---

### 8. Research Page (`/research`)

**File**: `src/app/research/page.tsx`  
**Lines**: 244  
**Purpose**: Thought leadership and newsletter

#### Articles

| Title | Tags | Read Time |
|-------|------|-----------|
| Agentic RAG: Why Static Retrieval Fails Enterprise AI | Agentic AI, RAG, Enterprise | 8 min |
| Data Sovereignty in the Age of AI | Sovereign RAG, Privacy, Knowledge Graphs | 5 min |
| Human-in-the-Loop: Zero Hallucination Architecture | Validation, Quality Assurance, Methodology | 7 min |

#### Newsletter

- Email subscription form with API integration
- "Get the Transmission" CTA

---

## Component Library

### Core Components

| Component | File | Description |
|-----------|------|-------------|
| **Navbar** | `Navbar.tsx` (7.9KB) | Responsive navigation with mobile hamburger menu |
| **Footer** | `Footer.tsx` (4.5KB) | Site footer with navigation links and social |
| **AnimatedTitle** | `AnimatedTitle.tsx` (3.5KB) | Hero text with character scramble effect |
| **AgenticStackVisual** | `AgenticStackVisual.tsx` (10.5KB) | Wireframe SVG of multi-agent architecture |
| **TechStrip** | `TechStrip.tsx` (4.2KB) | Infinite scrolling tech logo marquee |
| **LiveDataTicker** | `LiveDataTicker.tsx` (1.9KB) | Horizontal scrolling status ticker |

### Animation Components

| Component | File | Description |
|-----------|------|-------------|
| **MultiAgentAnimation** | `MultiAgentAnimation.tsx` (14.2KB) | Complex agent swarm animation |
| **AgentSchematic** | `AgentSchematic.tsx` (11.8KB) | Workflow node visualization |
| **CountUp** | `CountUp.tsx` (1.6KB) | Animated number counter |
| **ScrollReveal** | `ScrollReveal.tsx` (0.7KB) | Scroll-triggered reveal wrapper |
| **PageTransition** | `PageTransition.tsx` (0.5KB) | Page enter/exit animation |
| **ParallaxSection** | `ParallaxSection.tsx` (1.1KB) | Scroll-based parallax effect |

### UI Components

| Component | File | Description |
|-----------|------|-------------|
| **GlassCard** | `GlassCard.tsx` (0.8KB) | Glass morphism card with variants |
| **PulseGlow** | `PulseGlow.tsx` (0.8KB) | Pulsing glow animation element |
| **TerminalButton** | `TerminalButton.tsx` (1.4KB) | Terminal-style CTA with cursor blink |
| **RiskIndexWidget** | `RiskIndexWidget.tsx` (7.4KB) | Risk analysis display widget |
| **DeploymentGap** | `DeploymentGap.tsx` (6.1KB) | Problem statement section |

---

## Design System

### CSS Variables

```css
/* Core Colors */
--bg-primary: #FFFFFF;           /* Main background */
--bg-secondary: #F8F9FC;         /* Alternate sections */
--bg-surface: #F1F3F9;           /* Card surfaces */
--bg-dark: #0F172A;              /* Dark sections */
--bg-dark-elegant: #1E293B;      /* Elegant dark gradient */

/* Text Hierarchy */
--text-primary: #0F172A;         /* Headlines, body */
--text-secondary: #475569;       /* Secondary text */
--text-tertiary: #94A3B8;        /* Muted/hints */
--text-on-dark: #F8FAFC;         /* White text on dark */

/* Accent Colors */
--accent-blue: #0066FF;          /* Primary accent */
--accent-emerald: #10B981;       /* Success states */
--accent-amber: #F59E0B;         /* Warnings */
--accent-violet: #8B5CF6;        /* Secondary accent */

/* Glass Effects */
--glass-bg: rgba(255, 255, 255, 0.75);
--glass-border: rgba(15, 23, 42, 0.08);
```

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 640px | Full-width buttons, single column |
| Tablet | 768px | 2-column grids |
| Desktop | 1024px | Full layout, 3+ column grids |
| Wide | 1280px | max-width container |

### Component Classes

| Class | Description |
|-------|-------------|
| `.section-container` | Max-width 1280px container with responsive padding |
| `.btn-primary` | Blue filled button with hover effects |
| `.btn-secondary` | Outline button for light backgrounds |
| `.btn-secondary-light` | Outline button for dark backgrounds |
| `.btn-ghost` | Text-only button |
| `.badge` | Small tag/label with icon support |
| `.badge-active` | Blue active state badge |
| `.badge-emerald` | Green success badge |
| `.surface-card` | White card with hover effects |
| `.glass-card` | Frosted glass card effect |
| `.glass-card-light` | Light variant glass card |
| `.glass-card-dark` | Dark variant glass card |
| `.feature-card` | Large feature card |
| `.input-field` | Form input styling |
| `.gradient-text` | Blue-to-purple gradient text |
| `.font-heading` | Heading typography |
| `.font-terminal` | Monospace terminal font |
| `.font-section` | Section label typography |

### Animation Classes

| Class | Effect |
|-------|--------|
| `.animate-fade-up` | Fade in from below |
| `.animate-scroll` | Infinite scroll forward |
| `.animate-scroll-reverse` | Infinite scroll backward |
| `.ticker-wrapper` | Fade mask for ticker |
| `.tech-strip-wrapper` | Fade mask for tech strip |

---

## API Reference

### Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/contact` | POST | Contact form submission |
| `/api/subscribe` | POST | Newsletter subscription |
| `/api/demo-public` | GET | Secured Zone IQ demo HTML |
| `/api/demo` | GET | Original demo API |

### Contact API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "company": "string",
  "service": "feasibility | pilot | production",
  "useCase": "string",
  "captchaToken": "string"
}
```

### Demo API Security

The `/api/demo-public` endpoint includes:
- Origin/referrer validation
- `sec-fetch-dest` header check (blocks direct navigation)
- `X-Frame-Options: SAMEORIGIN`
- Content-Security-Policy headers
- Only accessible via iframe from allowed origins

---

## SEO & Schema Markup

### Meta Tags

```tsx
title: "ESInnov | AI Automation for Business Operations"
description: "Practical AI systems that automate complex business operations. Save time, reduce costs, and get more done."
keywords: ["AI Automation", "Business Automation", "Agentic AI", "Document Processing", "Workflow Automation"]
```

### Schema.org Markup

The site implements comprehensive structured data:

1. **Organization Schema**
   - Company information
   - Service catalog
   - Contact details
   - Social profiles

2. **Person Schema** (Aidin VM)
   - Professional details
   - Areas of expertise
   - LinkedIn profile

3. **WebSite Schema**
   - Site information
   - Search action
   - Publisher reference

4. **FAQ Schema**
   - Structured Q&A for rich snippets

### robots.ts

```typescript
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://esinnov.com/sitemap.xml',
  };
}
```

### sitemap.ts

Dynamic sitemap generation including all page routes with proper priorities and change frequencies.

---

## Development Guide

### Prerequisites

- Node.js 18+
- npm 9+

### Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Environment Variables

Create `.env.local`:

```env
# hCaptcha
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_site_key
HCAPTCHA_SECRET_KEY=your_secret_key

# Resend (Email)
RESEND_API_KEY=your_resend_key
```

### Development Server

- URL: `http://localhost:3000`
- Hot reload enabled
- TypeScript checking enabled

---

## Deployment

### Static Export

The site is compatible with static export for CDN deployment:

```bash
npm run build
# Output in .next/
```

### Vercel Deployment

Recommended deployment platform with automatic:
- Zero-config deployment
- Edge functions
- Image optimization
- Analytics

### Environment Setup

1. Configure environment variables in deployment platform
2. Set up custom domain (esinnov.com)
3. Enable HTTPS
4. Configure Bing/Google verification files

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-19 | 2.0 | Complete documentation rewrite |
| 2026-01-05 | 1.5 | Agentic/Instant positioning update |
| 2026-01-02 | 1.4 | Strategic Reframe v2.2 |
| 2025-12-27 | 1.3 | Hero section redesign |
| 2025-12-20 | 1.2 | Light theme overhaul |
| 2025-12-18 | 1.1 | Zone IQ demo integration |
| 2025-12-16 | 1.0 | Initial website launch |

---

## Support

For technical questions or documentation updates:

- **Email**: aidin@esinnov.com
- **LinkedIn**: [linkedin.com/in/aidinvm](https://linkedin.com/in/aidinvm)

---

*Documentation generated: January 19, 2026*  
*ESInnov — A division of EcoSync Innovations Inc.*
