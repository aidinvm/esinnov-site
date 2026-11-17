# ESInnov Website Framework & Sitemap

> **Visual Architecture Guide** | Version 2.0  
> Last Updated: January 19, 2026

---

## 🗺️ Site Map Overview

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                              ESINNOV.COM                                       ║
║                         Agentic Intelligence Studio                            ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║    ┌───────────────────────────────────────────────────────────────────┐     ║
║    │                        🏠 HOME (/)                                 │     ║
║    │                   Primary Landing Page                             │     ║
║    │  ┌─────────────┬─────────────┬─────────────┬─────────────┐        │     ║
║    │  │    Hero     │   Pillars   │   Use Cases │    FAQ      │        │     ║
║    │  │   Section   │    Grid     │    Cards    │  Accordion  │        │     ║
║    │  └─────────────┴─────────────┴─────────────┴─────────────┘        │     ║
║    └───────────────────────────────────────────────────────────────────┘     ║
║                                    │                                          ║
║          ┌─────────────────────────┼─────────────────────────┐               ║
║          │                         │                         │               ║
║          ▼                         ▼                         ▼               ║
║    ╔═══════════╗            ╔═══════════╗            ╔═══════════╗          ║
║    ║ DISCOVER  ║            ║  CONVERT  ║            ║ VALIDATE  ║          ║
║    ╚═════╤═════╝            ╚═════╤═════╝            ╚═════╤═════╝          ║
║          │                        │                        │                 ║
║    ┌─────┴─────┐            ┌─────┴─────┐            ┌─────┴─────┐          ║
║    │           │            │           │            │           │          ║
║    ▼           ▼            ▼           ▼            ▼           ▼          ║
║  /about    /research     /access   /advisory    /methodology /protocols    ║
║  /cases                    /faq                 /zone-iq-demo              ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

## 📑 Page Inventory

### Primary Pages (High Priority)

| Route | Title | Purpose |
|-------|-------|---------|
| `/` | Landing Page | Main conversion, hero, value proposition |
| `/access` | Get Started | Lead capture, service tier selection |
| `/advisory` | Advisory Services | Detailed service breakdown |
| `/zone-iq-demo` | Zone IQ Demo | Interactive product demonstration |

### Secondary Pages (Medium Priority)

| Route | Title | Purpose |
|-------|-------|---------|
| `/methodology` | Methodology | Agentic workflow explanation |
| `/protocols` | Architecture | Technical deep-dive |
| `/about` | About | Company & leadership profile |
| `/research` | Research | Articles, newsletter signup |
| `/cases` | Case Studies | Success stories |

### Utility Pages (Lower Priority)

| Route | Title | Purpose |
|-------|-------|---------|
| `/faq` | FAQ | Common questions |

---

## 🧩 Component Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           LAYOUT COMPONENTS                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Navbar.tsx                                                       │   │
│  │  • Responsive navigation with mobile menu                        │   │
│  │  • Logo + nav links + CTA button                                 │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│                              PAGE CONTENT                                │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Footer.tsx                                                       │   │
│  │  • Site links + social + legal                                   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### UI Components

```
┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│   AnimatedTitle    │  │  AgenticStackVisual │  │   TechStrip        │
│   ─────────────    │  │  ─────────────────  │  │   ─────────        │
│   Hero scramble    │  │   SVG wireframe    │  │   Logo marquee     │
│   text animation   │  │   architecture     │  │   infinite scroll  │
└────────────────────┘  └────────────────────┘  └────────────────────┘

┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│   LiveDataTicker   │  │  TerminalButton    │  │   RiskIndexWidget  │
│   ─────────────    │  │  ──────────────    │  │   ───────────────  │
│   Status ticker    │  │   CTA with cursor  │  │   Risk analysis    │
│   reverse scroll   │  │   blink animation  │  │   visualization    │
└────────────────────┘  └────────────────────┘  └────────────────────┘

┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│   GlassCard        │  │  ScrollReveal      │  │   CountUp          │
│   ─────────        │  │  ────────────      │  │   ───────          │
│   Frosted glass    │  │  Scroll-triggered  │  │   Animated number  │
│   card styling     │  │  reveal wrapper    │  │   counter          │
└────────────────────┘  └────────────────────┘  └────────────────────┘
```

---

## 🎨 Design System

### Color Palette

```
PRIMARY COLORS
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  ██████  Signal Blue       #0066FF   CTAs, links, primary accent    │
│  ██████  Blue Dark         #0052CC   Hover states                   │
│  ██████  Emerald           #10B981   Success, active indicators     │
│  ██████  Violet            #8B5CF6   Secondary accent               │
│  ██████  Amber             #F59E0B   Warnings, highlights           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

NEUTRAL COLORS
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  ██████  White             #FFFFFF   Primary background             │
│  ██████  Surface           #F8F9FC   Alternate sections             │
│  ██████  Navy Dark         #0F172A   Dark sections, text            │
│  ██████  Slate             #475569   Secondary text                 │
│  ██████  Tertiary          #94A3B8   Muted text                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Typography Scale

```
FONTS
───────────────────────────────────────────────────────
Inter              →  Body text, UI elements
JetBrains Mono     →  Code, terminal, technical labels

SIZES (Responsive)
───────────────────────────────────────────────────────
Display   →  clamp(2rem, 5vw, 3.5rem)      Hero headlines
Headline  →  clamp(1.5rem, 3.5vw, 2.25rem) Section titles
Title     →  clamp(1.25rem, 2.5vw, 1.5rem) Card titles
Body      →  clamp(0.9375rem, 1.5vw, 1.0625rem) Paragraphs
```

---

## 🔌 API Routes

```
/api
├── /contact              POST   Contact form submission
│   └── Integrates with Resend for email delivery
│
├── /subscribe            POST   Newsletter subscription
│   └── Email list management
│
├── /demo-public          GET    Secured Zone IQ demo
│   └── Security: Origin validation, X-Frame-Options
│
└── /demo                 GET    Original demo API
```

---

## 📱 Responsive Breakpoints

```
MOBILE FIRST APPROACH
───────────────────────────────────────────────────────

< 640px   │  MOBILE
          │  • Single column layouts
          │  • Full-width buttons
          │  • Stacked navigation
          │  • Simplified animations
          ▼
768px     │  TABLET
          │  • 2-column grids
          │  • Side-by-side layouts
          │  • Expanded navigation
          ▼
1024px    │  DESKTOP
          │  • 3+ column grids
          │  • Full layouts
          │  • All animations active
          ▼
1280px    │  WIDE
          │  • Max-width container
          │  • Centered content
```

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## 📋 File Index

| Directory | Files | Purpose |
|-----------|-------|---------|
| `src/app/` | 10 routes | Next.js App Router pages |
| `src/components/` | 17 files | Reusable React components |
| `src/app/api/` | 4 routes | Backend API endpoints |
| `public/` | 20 assets | Static files, images, logos |

---

## 🏷️ Brand Assets

| Asset | File | Format |
|-------|------|--------|
| Main Logo | `esinnov-logo.png` | PNG (718KB) |
| Favicon | `favicon.ico` | ICO |
| Hero Image | `hero-city.jpg` | JPG (318KB) |
| Tech Logos | `logo-*.png` | Various |

---

## 🔗 External Integrations

| Service | Purpose | Config |
|---------|---------|--------|
| **hCaptcha** | Bot protection | `.env.local` |
| **Resend** | Email delivery | `.env.local` |
| **Bing Webmaster** | Search indexing | `BingSiteAuth.xml` |
| **LinkedIn** | Social profile | About page |

---

*ESInnov Website Framework v2.0*  
*Last Updated: January 19, 2026*
