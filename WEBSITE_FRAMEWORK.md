# ESInnov Website Framework & Sitemap

> **Institutional Boutique Architecture** | Version 4.0  
> **Entity:** EcoSync Innovations Inc. (ESInnov)  
> **Headquarters:** Calgary, Alberta • Serving Western Canada (AB, SK, MB & BC)

---

## Site Map Overview

```
ESINNOV.COM — EcoSync Innovations Inc.
Embedded Industrial Operations, Program Delivery & Applied Systems Advisory
│
└── / (Unified Single-Page Institutional Architecture)
    ├── Section 1: Hero & Executive Authority Strip (4 Columns)
    ├── Section 2: Core Advisory Practices (#core-practices)
    ├── Section 3: Applied Systems & Workflow Automation (#applied-systems)
    ├── Section 4: Engagement Architecture (#engagement-model)
    ├── Section 5: Sector Pedigree & Enterprise Stack (#sector-pedigree)
    ├── Section 6: About Us & Governance FAQ (#about-governance)
    └── Section 7: Direct Contact Callout (#contact) & Institutional Footer
```

---

## Retired Legacy Routes (Permanent 308 Redirects in `next.config.ts`)

| Legacy Route | Redirect Target |
|--------------|-----------------|
| `/about` | `/#about-governance` |
| `/access` | `/#contact` |
| `/advisory` | `/#core-practices` |
| `/cases` | `/#sector-pedigree` |
| `/faq` | `/#about-governance` |
| `/methodology` | `/#engagement-model` |
| `/protocols` | `/#applied-systems` |
| `/research` | `/#applied-systems` |
| `/zone-iq-demo` | `/` |

---

## Layout & Component Architecture

| File | Role |
|------|------|
| `src/app/layout.tsx` | Root HTML shell, Inter & JetBrains Mono fonts, v4.0 SEO metadata, JSON-LD (`Organization`, `Person`, `FAQPage`) |
| `src/app/globals.css` | Institutional Light Design System (`#FFFFFF`, `#F8FAFC`, `#090D16`, `#0052CC`, `#E2E8F0` hairline grid) |
| `src/components/Navbar.tsx` | Fixed status bar + 5-link institutional navigation + responsive mobile/tablet drawer |
| `src/app/page.tsx` | Complete 7-section v4.0 Institutional Boutique layout and interactive Governance FAQ accordion |
| `src/components/Footer.tsx` | 3-column institutional footer (`Calgary, AB | Serving Western Canada`, practice positioning, `info@esinnov.com`) |

---

## Responsive Breakpoints

- **`< 640px` (Mobile):** Single-column layout, full-width CTAs, condensed top status bar, indexed drawer menu
- **`640px – 1023px` (Tablet):** 2-column authority & applied capability grids, tablet drawer navigation
- **`1024px+` (Desktop):** Full 5-link horizontal navigation, 12-column hero/ledger split, 3-column practice & engagement cards

---

## Verification & Development Commands

```bash
# TypeScript validation
./node_modules/.bin/tsc.cmd -p tsconfig.json --noEmit

# Development server
npm run dev
```
