# ESInnov Website Documentation

> **Agentic Intelligence Studio** - Multi-Agent Intelligence. Enterprise Ready.

## Overview

ESInnov (EcoSync Innovations) is a consulting boutique specializing in multi-agent AI architectures for enterprise clients. This documentation covers the website's technical framework, content structure, and component architecture.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14+ (App Router) | React framework with server components |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 11.x | Animations and transitions |
| Lucide React | Latest | Icon library |

---

## Project Structure

```
esinnov-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Landing page (Home)
│   │   ├── layout.tsx          # Root layout with fonts, metadata
│   │   ├── globals.css         # Global styles and design system
│   │   ├── protocols/          # Architecture page
│   │   ├── methodology/        # Methodology page
│   │   ├── access/             # Contact/Access page
│   │   ├── research/           # Research page
│   │   ├── about/              # About page
│   │   ├── advisory/           # Advisory services
│   │   └── api/                # API routes
│   │
│   └── components/             # Reusable React components
│       ├── Navbar.tsx          # Main navigation
│       ├── Footer.tsx          # Site footer
│       ├── AnimatedTitle.tsx   # Hero scramble animation
│       ├── AgenticStackVisual.tsx  # Hero background visual
│       ├── LiveDataTicker.tsx  # Scrolling ticker strip
│       ├── TechStrip.tsx       # Tech stack marquee
│       └── [...]               # Other components
│
├── public/                     # Static assets
│   └── logo.png                # ESI logo
│
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Page Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Landing page with hero, architecture pillars, case studies, CTA |
| `/protocols` | `app/protocols/page.tsx` | Architecture deep-dive |
| `/methodology` | `app/methodology/page.tsx` | Agentic workflow methodology |
| `/access` | `app/access/page.tsx` | Contact form and service tiers |
| `/research` | `app/research/page.tsx` | R&D and research content |
| `/about` | `app/about/page.tsx` | Company information |

---

## Design System

### Colors (CSS Variables)

```css
/* Primary Colors */
--bg-primary: #0A0A0F          /* Dark background */
--bg-surface: rgba(20,20,30,0.6) /* Card surfaces */
--text-primary: #F8FAFC        /* White text */
--text-secondary: #94A3B8      /* Muted text */

/* Accent Colors */
--accent-blue: #0066FF         /* Primary accent */
--accent-emerald: #10B981      /* Success/active states */
--accent-violet: #8B5CF6       /* Secondary accent */
--accent-amber: #F59E0B        /* Warning/highlight */
```

### Typography

| Class | Font | Usage |
|-------|------|-------|
| `.font-heading` | Outfit | Headlines, titles |
| `.font-body` | Inter | Body text, paragraphs |
| `.font-terminal` | JetBrains Mono | Code, technical labels |

### Component Classes

| Class | Description |
|-------|-------------|
| `.btn-primary` | Blue gradient button |
| `.btn-secondary` | Outline button |
| `.btn-secondary-light` | Light outline for dark backgrounds |
| `.badge` | Small tag/label |
| `.badge-active` | Badge with green pulse indicator |
| `.glass-card` | Frosted glass card effect |
| `.section-container` | Max-width content container |
| `.gradient-text` | Blue-to-purple gradient text |

---

## Key Components

### 1. AnimatedTitle (`AnimatedTitle.tsx`)
Hero title with character scramble animation. Cycles through random characters before resolving to "Intelligence".

```tsx
<AnimatedTitle />
```

### 2. AgenticStackVisual (`AgenticStackVisual.tsx`)
Wireframe SVG visualization of multi-agent architecture showing:
- Orchestrator layer
- Agent layer (Retriever, Analyzer, Executor)
- MCP Server layer
- Storage layer (Vector Store, Context, State)

Features faded left edge for background integration.

### 3. LiveDataTicker (`LiveDataTicker.tsx`)
Horizontally scrolling ticker showing status indicators:
- "ZONE IQ™ ACTIVE"
- "MCP INTEGRATED"
- "AGENTIC RAG ONLINE"
- etc.

### 4. TechStrip (`TechStrip.tsx`)
Scrolling marquee of technology logos/names:
- LangChain, n8n, Pinecone, Supabase, OpenAI, Anthropic, etc.

### 5. Navbar (`Navbar.tsx`)
Responsive navigation with:
- Desktop: horizontal links
- Mobile: fullscreen animated menu
- Logo and "Get Started" CTA

### 6. Footer (`Footer.tsx`)
Site footer with navigation links, service links, and copyright.

---

## Content Structure

### Landing Page Sections

1. **Hero Section**
   - Animated scramble title
   - Tagline: "Agentic Intelligence Studio"
   - CTAs: "Explore Architecture", "Request Feasibility Study"
   - Background: Agentic stack wireframe visual

2. **Architecture Pillars**
   - Agentic RAG
   - MCP Integration
   - Human Verification
   - Multi-Agent Orchestration

3. **R&D Ticker**
   - Scrolling status indicators

4. **Use Cases / Case Studies**
   - Real estate intelligence
   - Document analysis
   - Compliance automation

5. **CTA Section**
   - Dark background
   - "Request Feasibility Study" + "View Methodology"

6. **Tech Strip**
   - Partner/technology logos

---

## Styling Patterns

### Animation Delays
Hero animations use staggered delays:
```tsx
delay: 0.5    // Badge
delay: 0.8    // Title starts scrambling
delay: 2.5    // Subhead appears
delay: 2.8    // CTAs appear
delay: 3.1    // Protocol badges
```

### Glass Effects
```css
.glass-card {
  background: rgba(20, 20, 40, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

### Gradient Backgrounds
```css
.bg-mesh {
  background: 
    radial-gradient(ellipse at 20% 30%, rgba(0, 102, 255, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 40%);
}
```

---

## Development

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
```

### Environment

The site runs on `http://localhost:3000` in development.

---

## Brand Guidelines

- **Company Name**: ESInnov (EcoSync Innovations)
- **Tagline**: "Agentic Intelligence Studio"
- **Primary Color**: Blue (#0066FF)
- **Logo**: Circuit-board style "ESI" mark
- **Tone**: Technical, professional, enterprise-focused

---

## SEO & Metadata

Located in `app/layout.tsx`:
- Title: "ESInnov | Risk Intelligence Authority"
- Description: Multi-agent AI systems for enterprise
- Keywords: Agentic RAG, MCP, A2A, Multi-Agent

---

## Deployment Notes

- Static export compatible
- No external API dependencies on frontend
- All animations are client-side (Framer Motion)
- Images optimized via Next.js Image component

---

*Documentation generated: January 4, 2026*
*ESInnov - A division of EcoSync Innovations*
