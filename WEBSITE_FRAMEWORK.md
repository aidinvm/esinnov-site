# ESInnov Website Framework & Contents

## Overview
**ESInnov (EcoSync Innovations)** - A real estate intelligence boutique website built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

---

## Tech Stack
| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |

---

## Site Structure

```
esinnov-site/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing Page
│   │   ├── layout.tsx            # Root Layout
│   │   ├── globals.css           # Global Styles
│   │   ├── about/                # About Page
│   │   ├── consulting/           # Services Page
│   │   ├── methodology/          # Zone IQ Methodology
│   │   ├── contact/              # Contact Form
│   │   ├── cases/                # Case Studies
│   │   └── api/
│   │       ├── demo/             # Original demo API
│   │       └── demo-public/      # Secured public demo API
│   └── components/
│       ├── Navbar.tsx            # Site navigation
│       ├── Footer.tsx            # Site footer
│       ├── ScrollReveal.tsx      # Scroll animations
│       ├── GlassCard.tsx         # Glass morphism cards
│       ├── PageTransition.tsx    # Page transitions
│       ├── ParallaxSection.tsx   # Parallax effects
│       └── PulseGlow.tsx         # Glowing effects
```

---

## Pages Content

### 1. Landing Page (`/`)
**Key Sections:**
- **Hero Section** - Full-width headline with CTA
- **Tech Stack Strip** - Animated tech logos slider
- **Built by Operators** - 3-column card grid (Deal Flow Analytics, Acquisition Timeline, Case Performance)
- **We Automated the Argument** - AI Agent showcase (Sentinel™, Catalyst™, Arbiter™)
- **Zone IQ Engine Demo** - Embedded interactive demo (secured via API)
- **Productized Consulting** - Service offerings cards
- **Team Section** - Leadership profile

### 2. About Page (`/about`)
**Key Sections:**
- **Hero** - "Bridging Data and Dirt"
- **Origin Story** - Company founding narrative
- **Corporate Structure** - Dual-track model cards
- **Strategic Direction** - Leadership profile (Aidin VM)

### 3. Consulting Page (`/consulting`)
**Key Sections:**
- **Hero** - "Productized Intelligence"
- **The Infill Filter** - For Developers
- **The Listing Winner** - For Realtors
- **Smart Reno Matrix** - For Owners
- **Jurisdiction Protocols** - AB (Safe Harbor Scan) & BC (Bill 44/47 Hunter)
- **CTA** - Consultation request

### 4. Methodology Page (`/methodology`)
**Key Sections:**
- **Hero** - "The Adversarial Council"
- **Vertical Timeline** - GIS Ingestion → Agent Debate → The Verdict
- **The Output** - Feasibility score display
- **Tech Stack Slider** - Infinite scroll of technologies

### 5. Contact Page (`/contact`)
**Key Sections:**
- **Hero** - "Stop Guessing. Start Calculating."
- **Protocol Selection Form** - Client type, turnaround, contact info
- **Engagement Criteria** - Focus areas and notes
- **Office Info** - Location and email

---

## Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Responsive navigation with mobile menu |
| `Footer` | Site footer with links and social |
| `ScrollReveal` | Wrapper for scroll-triggered animations |
| `GlassCard` | Glass morphism card with teal variant |
| `PageTransition` | Page entrance/exit animations |
| `ParallaxSection` | Scroll-based parallax effects |
| `PulseGlow` | Pulsing glow animation element |

---

## Secured Demo API

The Zone IQ demo is served via `/api/demo-public` with security features:
- Origin/referrer validation
- Blocks direct navigation (`sec-fetch-dest` check)
- X-Frame-Options: SAMEORIGIN
- Content-Security-Policy headers
- Only accessible via iframe from allowed origins

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `signal-teal` | #2B9CA6 | Primary accent |
| `data-white` | #F8FAFC | Text color |
| `void-navy` | #0F172A | Background |
| `alert-red` | #F87171 | Warning/error |

---

## Brand Elements

- **Zone IQ™** - Proprietary feasibility engine
- **Sentinel Agent™** - Risk Vector Analysis
- **Catalyst Agent™** - Opportunity Signal Detection
- **Arbiter Agent™** - Decision Synthesis
