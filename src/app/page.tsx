"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Cpu,
  FileCheck2,
  BarChart3,
  Lock,
  Layers,
  Building2,
  Compass,
  Workflow,
  Mail,
} from "lucide-react";

const sectorAuthority = [
  {
    index: "01",
    sector: "Mobile Power & Clean Energy",
    scope: "Plant & 3PL Supply Chain Leadership",
  },
  {
    index: "02",
    sector: "Enterprise IoT & Telematics",
    scope: "$5M+ Platform Program Delivery",
  },
  {
    index: "03",
    sector: "Heavy & Regulated Industry",
    scope: "Steel • Pharma Distribution • Automotive",
  },
  {
    index: "04",
    sector: "Engineering Foundation",
    scope: "MSc Industrial Systems Engineering",
  },
];

const engagementSteps = [
  {
    step: "01",
    title: "Partner Onboarding",
    desc: "Prime agencies onboard EcoSync Innovations Inc. as an approved corporate supplier. Vendor credentials and principal CV are dispatched same-day.",
    tag: "24–48h Turnaround",
  },
  {
    step: "02",
    title: "Mandate Alignment",
    desc: "Deployment for 3–6 month NPI launches, operational bottleneck resolution, or interim leadership mandates. Direct technical vetting with the client operations team.",
    tag: "3–6 Month Horizon",
  },
  {
    step: "03",
    title: "Embedded Execution",
    desc: "Execution occurs entirely within the client's enterprise environment (ERP/PLM) under the prime firm's NDA. Zero external data exposure; disciplined weekly milestone governance.",
    tag: "Client-Tenant Native",
  },
];

const practiceAreas = [
  {
    code: "MANDATE // 01",
    title: "NPI & Program Delivery",
    desc: "End-to-end governance of new product introductions from design freeze through commercial launch—proven across commercial power electronics and multi-million-dollar IoT platforms.",
    deliverables: [
      "Critical path scheduling, risk mitigation & stage-gate governance",
      "Vendor qualification, build readiness & validation testing",
      "Structured operational handover & SOP documentation",
    ],
    ctaLabel: "Request NPI Mandate",
    subject: "NPI%20%26%20Program%20Delivery%20Mandate",
  },
  {
    code: "MANDATE // 02",
    title: "Operations Turnaround",
    desc: "Systematic elimination of throughput bottlenecks, inventory discrepancies, and administrative drag using applied Lean Six Sigma and industrial systems engineering.",
    deliverables: [
      "Floor-level value stream mapping & constraint removal",
      "Process re-engineering inside existing ERP systems",
      "Quantifiable cycle-time and working-capital recovery",
    ],
    ctaLabel: "Request Turnaround Mandate",
    subject: "Operations%20Turnaround%20Mandate",
  },
  {
    code: "MANDATE // 03",
    title: "Supply Chain & Interim Ops",
    desc: "Immediate leadership coverage for supply chain planning, 3PL kitting transitions, or interim plant management during organizational restructuring or rapid scaling.",
    deliverables: [
      "BOM reconciliation, procurement & 3PL warehouse coordination",
      "Executive KPI dashboards (Power BI / SAP / NetSuite)",
      "Seamless bridge leadership during executive searches",
    ],
    ctaLabel: "Request Interim Coverage",
    subject: "Supply%20Chain%20%26%20Interim%20Operations%20Coverage",
  },
];

const pedigreeTimeline = [
  {
    domain: "Mobile Power & Clean Energy Systems",
    badge: "Calgary, AB",
    role: "Senior Operations & Supply Chain Leadership",
    summary:
      "Directed manufacturing operations, 3PL warehouse kitting, cross-border logistics, and inventory reconciliation for commercial and off-grid power electronics.",
  },
  {
    domain: "Industrial IoT & Telematics",
    badge: "Program Delivery",
    role: "$5M+ Connected Platform Program Delivery",
    summary:
      "Governed multi-disciplinary hardware/software program execution, vendor integration, and commercial deployment for enterprise IoT systems.",
  },
  {
    domain: "Heavy & Regulated Manufacturing",
    badge: "Multi-Sector",
    role: "Pharmaceutical Distribution, Steel & Automotive Operations",
    summary:
      "Executed continuous improvement, process optimization, and industrial systems engineering across high-compliance pharmaceutical logistics, structural steel fabrication, and automotive assembly.",
  },
  {
    domain: "Engineering Foundation",
    badge: "Graduate Credential",
    role: "MSc Industrial Systems Engineering",
    summary:
      "Graduate specialization in systems optimization, process modeling, and operational efficiency.",
  },
];

const enterpriseStack = [
  "SAP",
  "NetSuite",
  "Arena PLM",
  "Power BI",
  "Python",
  "NPI Governance",
  "Lean Six Sigma",
  "IoT Architecture",
];

const backOfficeServices = [
  {
    title: "Quantity Takeoff & Estimating",
    price: "$250 – $800 / takeoff",
    desc: "Submit architectural drawings; receive structured material takeoffs and bid-ready cost sheets within 48–72 hours.",
    cta: "Submit Drawings",
    subject: "Quantity%20Takeoff%20%26%20Estimating%20Scope",
  },
  {
    title: "ISNetworld & Avetta Compliance",
    price: "$2,000 – $5,000 / platform",
    desc: "End-to-end account setup, RAVS manual alignment, and safety documentation management to achieve Grade-A operator approval.",
    cta: "Initiate Prequalification",
    subject: "ISNetworld%20%26%20Avetta%20Prequalification",
  },
  {
    title: "Ledger Cleanup & Bookkeeping",
    price: "$800+ cleanup • $250+/mo",
    desc: "Historical catch-up reconciliation and structured monthly financial reporting tailored for trade contractors.",
    cta: "Request Ledger Review",
    subject: "Contractor%20Ledger%20Cleanup%20%26%20Bookkeeping",
  },
  {
    title: "Executive Positioning & AI Search",
    price: "$1,000 – $1,500 / month",
    desc: "B2B authority building and Generative Engine Optimization (GEO) for commercial trade owners, extracted from brief monthly interviews.",
    cta: "Request Visibility Audit",
    subject: "Executive%20Positioning%20%26%20AI%20Search%20Audit",
  },
  {
    title: "Municipal Permitting & SECOR",
    price: "$350–$750 permit • $2.5k+ SECOR",
    desc: "Municipal development/building permit coordination and complete Alberta SECOR safety program documentation.",
    cta: "Submit Permit Scope",
    subject: "Municipal%20Permitting%20%26%20SECOR%20Support",
  },
  {
    title: "Asynchronous Execution SLA",
    price: "Dedicated Capacity",
    desc: "Operated on strict SLA turnarounds outside core industrial hours, ensuring zero conflict of interest or capacity overlap with embedded enterprise mandates.",
    cta: "Contact Back-Office Desk",
    subject: "Commercial%20Back-Office%20SLA%20Inquiry",
  },
];

const automationPillars = [
  {
    icon: FileCheck2,
    title: "Document Verification",
    desc: "Automated extraction and regulatory cross-referencing with mandatory human sign-off.",
  },
  {
    icon: BarChart3,
    title: "Operational Telemetry",
    desc: "Automated Python/Power BI pipelines replacing manual spreadsheet consolidation.",
  },
  {
    icon: Lock,
    title: "Sovereign Deployment",
    desc: "Executed exclusively within your existing corporate tenant; zero external model training.",
  },
];

const faqs = [
  {
    q: "What mandates does ESInnov accept?",
    a: "We specialize in 3–6 month embedded industrial mandates—specifically New Product Introduction (NPI), program delivery, supply chain stabilization, and Lean Six Sigma operational turnarounds—alongside fixed-fee back-office services for regional contractors.",
  },
  {
    q: "How quickly can ESInnov deploy?",
    a: "Immediate capacity is available in Calgary (hybrid) with travel capability across Western Canada. Corporate vendor onboarding with staffing partners is completed within 24–48 hours.",
  },
  {
    q: "How is confidential operational data handled?",
    a: "For embedded industrial engagements, all work is performed exclusively inside the client's enterprise environment (SAP, NetSuite, PLM) under the prime staffing partner's NDA. Zero proprietary data leaves client systems.",
  },
  {
    q: "Who leads the consulting practice?",
    a: "The practice is led by Principal Consultant Aidin VM, an Industrial Systems Engineer (MSc) with over a decade of senior operations and program management leadership across power electronics, IoT, steel, pharma, and automotive sectors.",
  },
  {
    q: "Does ESInnov compete with staffing agencies?",
    a: "No. We actively partner with established staffing and consulting firms, operating as a reliable corp-to-corp delivery vendor under their existing client MSAs.",
  },
  {
    q: "How are commercial terms structured?",
    a: "Embedded industrial contracts are billed corp-to-corp through prime staffing partners or direct corporate agreements. Contractor back-office deliverables are billed on transparent, fixed-scope project or monthly retainers.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {/* ===== SECTION 1: HERO (ABOVE THE FOLD) ===== */}
      <section className="relative bg-architectural-grid border-b border-slate-200/90 overflow-hidden">
        <div className="bg-radial-fade">
          <div className="section-container py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Primary Hero Column */}
              <div className="lg:col-span-8 space-y-6 sm:space-y-8">
                {/* Eyebrow Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="badge-institutional"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>
                    Calgary Operations &amp; Industrial Systems Boutique • Active Capacity
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="font-heading text-display text-slate-950 text-balance"
                >
                  Embedded operations and program delivery for industrial teams.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-body-lg text-slate-600 max-w-3xl"
                >
                  EcoSync Innovations Inc. (ESInnov) deploys senior operational
                  leadership into industrial organizations for 3–6 month NPI,
                  program delivery, and operational turnaround mandates —
                  structured via prime staffing partners or direct corporate
                  engagement.
                </motion.p>

                {/* Credibility Callout Box (Monospace) */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="callout-monospace max-w-3xl"
                >
                  Backed by 10+ years of senior industrial engineering and supply
                  chain leadership across commercial power electronics, $5M+ IoT
                  platforms, heavy steel, pharmaceutical distribution, and
                  automotive manufacturing.
                </motion.div>

                {/* Hero CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
                >
                  <a
                    href="mailto:info@esinnov.com?subject=Contract%20Operations%20%26%20Program%20Delivery"
                    className="btn-primary !w-full sm:!w-auto"
                  >
                    <span>Request Delivery Capacity</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#engagement-model"
                    className="btn-secondary !w-full sm:!w-auto"
                  >
                    <span>Review Engagement Model</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Institutional Mandate Specifications Ledger */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="lg:col-span-4 w-full"
              >
                <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 shadow-sm">
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <span className="font-terminal text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      MANDATE SPECIFICATIONS
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-terminal text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      ACTIVE DESK
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        label: "DEPLOYMENT HORIZON",
                        value: "3–6 Month Fixed-Term Mandates",
                        sub: "NPI, Turnaround & Interim Coverage",
                      },
                      {
                        label: "CONTRACTING STRUCTURE",
                        value: "Prime Staffing MSA or Direct C2C",
                        sub: "Zero procurement or onboarding friction",
                      },
                      {
                        label: "EXECUTION ENVIRONMENT",
                        value: "100% Client ERP / PLM Native",
                        sub: "SAP • NetSuite • Arena PLM • Power BI",
                      },
                      {
                        label: "PRINCIPAL LEADERSHIP",
                        value: "Aidin VM, MSc Ind. Systems Eng.",
                        sub: "Calgary, AB • Hybrid & Western Canada",
                      },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="p-3.5 rounded-lg bg-slate-50/80 border border-slate-100"
                      >
                        <div className="font-terminal text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">
                          {spec.label}
                        </div>
                        <div className="font-heading text-sm font-semibold text-slate-900">
                          {spec.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {spec.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Dual-Track Practice</span>
                    <a
                      href="#contractors"
                      className="font-terminal text-[#0052CC] font-medium hover:underline inline-flex items-center gap-1"
                    >
                      <span>Back-Office Division</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: SECTOR AUTHORITY STRIP ===== */}
      <section className="bg-slate-50/70 border-b border-slate-200/90">
        <div className="section-container py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-slate-200/90">
            {sectorAuthority.map((item) => (
              <div
                key={item.sector}
                className="bg-white lg:bg-transparent p-4 sm:p-5 lg:px-6 lg:py-2 rounded-lg lg:rounded-none border border-slate-200/80 lg:border-0 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="font-terminal text-[11px] text-[#0052CC] font-semibold mb-1">
                  DOMAIN // {item.index}
                </div>
                <div className="font-heading text-base font-semibold text-slate-950">
                  {item.sector}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                  {item.scope}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: ENGAGEMENT ARCHITECTURE (#engagement-model) ===== */}
      <section
        id="engagement-model"
        className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="eyebrow-label mb-3">ENGAGEMENT ARCHITECTURE</div>
            <h2 className="font-heading text-headline text-slate-950 mb-4 text-balance">
              Seamless integration via prime staffing and consulting partners.
            </h2>
            <p className="text-body-lg text-slate-600">
              ESInnov operates as an agile corporate delivery partner. We
              integrate directly through established Calgary staffing and
              engineering firms under existing Master Services Agreements (MSAs)
              and strict NDAs—eliminating procurement friction.
            </p>
          </div>

          {/* 3-Step Execution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {engagementSteps.map((card, i) => (
              <motion.div
                key={card.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="institutional-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-terminal text-2xl sm:text-3xl font-bold text-[#0052CC]">
                      {card.step}
                    </span>
                    <span className="font-terminal text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-medium">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-title text-slate-950 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-terminal text-slate-400">
                  <span>STEP {card.step} OF 03</span>
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Anchor & CTA */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="font-terminal text-xs uppercase tracking-wider text-[#0052CC] font-semibold">
                CORP-TO-CORP DELIVERY STANDARD
              </div>
              <p className="font-heading text-base sm:text-lg text-slate-900">
                Structured exclusively for fixed-term contract delivery and
                operational execution.
              </p>
            </div>
            <a
              href="mailto:info@esinnov.com?subject=Prime%20Partner%20Vendor%20Onboarding"
              className="btn-primary !w-full md:!w-auto flex-shrink-0"
            >
              <span>Initiate Partner Onboarding</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CORE PRACTICE AREAS (#services) ===== */}
      <section
        id="services"
        className="py-16 sm:py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="eyebrow-label mb-3">CORE PRACTICE AREAS</div>
            <h2 className="font-heading text-headline text-slate-950 mb-4 text-balance">
              Targeted execution mandates. Senior industrial rigor.
            </h2>
            <p className="text-body-lg text-slate-600">
              We step into high-friction environments where organizations require
              an experienced operator to stabilize execution rather than deliver
              theoretical slide decks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {practiceAreas.map((practice, i) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="institutional-card-interactive p-6 sm:p-8 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="font-terminal text-xs text-[#0052CC] font-semibold mb-3">
                    {practice.code}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl text-slate-950 mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                    {practice.desc}
                  </p>

                  <div className="border-t border-slate-100 pt-5 mb-6">
                    <div className="font-terminal text-[11px] uppercase tracking-wider text-slate-400 mb-3.5">
                      KEY DELIVERABLES
                    </div>
                    <ul className="space-y-3">
                      {practice.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0052CC] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`mailto:info@esinnov.com?subject=${practice.subject}`}
                    className="link-action"
                  >
                    <span>{practice.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: SECTOR PEDIGREE (#proof) ===== */}
      <section
        id="proof"
        className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="eyebrow-label mb-3">SECTOR PEDIGREE</div>
            <h2 className="font-heading text-headline text-slate-950 mb-4 text-balance">
              Verified industrial domain experience.
            </h2>
            <p className="text-body-lg text-slate-600">
              Our practice is built on a decade of direct operational
              accountability across complex manufacturing, distribution, and
              technology sectors.
            </p>
          </div>

          {/* Anonymized Domain Timeline */}
          <div className="border-t border-slate-200">
            {pedigreeTimeline.map((item, idx) => (
              <motion.div
                key={item.domain}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="py-7 sm:py-8 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start hover:bg-slate-50/60 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
              >
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-terminal text-xs font-semibold text-[#0052CC]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg text-slate-950">
                      {item.domain}
                    </h3>
                  </div>
                  <div>
                    <span className="inline-block font-terminal text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-2">
                  <div className="font-heading text-base font-semibold text-slate-900">
                    {item.role}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Stack Strip */}
          <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <span className="font-terminal text-xs uppercase tracking-wider text-slate-500 font-semibold flex-shrink-0">
                ENTERPRISE STACK &amp; METHODOLOGIES:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {enterpriseStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-white border border-slate-200 font-terminal text-xs font-medium text-slate-800 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMERCIAL BACK-OFFICE DIVISION (#contractors) ===== */}
      <section
        id="contractors"
        className="py-16 sm:py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="eyebrow-label mb-3">
              COMMERCIAL BACK-OFFICE DIVISION
            </div>
            <h2 className="font-heading text-headline text-slate-950 mb-4 text-balance">
              Productized back-office execution for regional contractors.
            </h2>
            <p className="text-body-lg text-slate-600">
              Dedicated remote administrative, compliance, and estimating support
              for Calgary trades and general contractors. Fixed-scope
              deliverables, rapid turnaround, zero overhead.
            </p>
          </div>

          {/* 6 Productized Micro-Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backOfficeServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="institutional-card-interactive p-6 sm:p-7 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                    <span className="font-terminal text-[11px] text-slate-400">
                      DESK // 0{i + 1}
                    </span>
                    <span className="price-tag">{service.price}</span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl text-slate-950 mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`mailto:info@esinnov.com?subject=${service.subject}`}
                    className="link-action"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: APPLIED AUTOMATION CAPABILITY (#ai-capability) ===== */}
      <section
        id="ai-capability"
        className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="eyebrow-label">APPLIED AUTOMATION</div>
              <h2 className="font-heading text-headline text-slate-950 text-balance">
                Pragmatic workflow automation integrated into operations.
              </h2>
              <p className="text-body-lg text-slate-600">
                ESInnov deploys targeted automation scripts and human-in-the-loop
                AI workflows to eliminate repetitive administrative
                bottlenecks—including document verification, ERP data extraction,
                compliance auditing, and automated reporting. Systems are
                deployed strictly inside client-controlled infrastructure with
                zero external data retention.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:info@esinnov.com?subject=Applied%20Workflow%20Automation%20Inquiry"
                  className="link-action !text-base"
                >
                  <span>Inquire about applied automation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {automationPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="institutional-card p-6 bg-slate-50/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0052CC]/10 border border-[#0052CC]/20 flex items-center justify-center mb-5">
                      <pillar.icon className="w-5 h-5 text-[#0052CC]" />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg text-slate-950 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-200/70 font-terminal text-[11px] text-slate-400">
                    GOVERNED EXECUTION
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: CORPORATE PROFILE (#about) ===== */}
      <section
        id="about"
        className="py-16 sm:py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow-label">CORPORATE PROFILE</div>
              <h2 className="font-heading text-headline text-slate-950 text-balance">
                Industrial rigor. Boutique agility.
              </h2>
              <div className="p-5 rounded-xl bg-white border border-slate-200/90 space-y-3 mt-6">
                <div className="font-terminal text-xs uppercase tracking-wider text-[#0052CC] font-semibold">
                  PRINCIPAL LEADERSHIP
                </div>
                <div className="font-heading text-lg text-slate-950">
                  Aidin VM — Principal Consultant
                </div>
                <div className="text-xs font-terminal text-slate-500">
                  MSc Industrial Systems Engineering
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  10+ years directing industrial operations, NPI governance, and
                  enterprise program delivery across complex manufacturing and
                  supply chain environments.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-9 space-y-5 text-slate-700 text-base sm:text-[17px] leading-relaxed shadow-xs">
                <p>
                  <strong className="text-slate-950 font-semibold">
                    EcoSync Innovations Inc. (ESInnov)
                  </strong>{" "}
                  is an operations and systems engineering boutique headquartered
                  in Calgary. Led by Principal Consultant Aidin VM (MSc
                  Industrial Systems Engineering), the firm bridges the gap
                  between high-level strategic planning and floor-level
                  operational execution.
                </p>
                <p>
                  Rather than operating as a traditional management consultancy
                  that leaves behind theoretical recommendations, ESInnov embeds
                  directly into client teams for fixed-term mandates—stabilizing
                  new product introductions, untangling supply chain bottlenecks,
                  and building resilient administrative workflows.
                </p>
                <p>
                  Through our dedicated Commercial Back-Office division, we
                  extend this same systematic discipline to regional contractors,
                  removing compliance, estimating, and administrative friction so
                  business owners can focus on field execution.
                </p>
              </div>

              {/* Institutional Profile Strip */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#090D16] text-white font-terminal text-xs flex flex-wrap items-center justify-between gap-3">
                <span>EcoSync Innovations Inc. (ESInnov)</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-300">Calgary, Alberta</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-emerald-400">
                  Corp-to-Corp &amp; Staffing Partner Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: DIRECT ENGAGEMENT & FAQ (#contact) ===== */}
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="section-container">
          {/* Direct Engagement Card */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 lg:p-12 mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="eyebrow-label">DIRECT ENGAGEMENT</div>
                <h2 className="font-heading text-headline text-slate-950 text-balance">
                  Initiate a mandate or partner onboarding.
                </h2>
                <p className="text-body-lg text-slate-600 max-w-2xl">
                  For staffing partners and industrial operations leaders seeking
                  interim program or operations management, contact our advisory
                  desk with mandate scope and timeline. For commercial
                  contractors seeking takeoff, ISNetworld, or bookkeeping
                  support, submit your project specifications for same-day
                  review.
                </p>
                <p className="text-xs font-terminal text-slate-500 pt-2">
                  Calgary, Alberta • Hybrid &amp; Travel Capable • Commercial
                  terms provided upon scope review. Strict confidentiality
                  maintained under prime partner MSAs and corporate NDAs.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
                <a
                  href="mailto:info@esinnov.com?subject=ESInnov%20Engagement%20Inquiry"
                  className="btn-primary !py-4 !px-6 !text-base w-full"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Advisory Desk</span>
                </a>
                <div className="text-center font-terminal text-xs text-slate-500 py-1">
                  Direct Dispatch:{" "}
                  <a
                    href="mailto:info@esinnov.com"
                    className="text-slate-900 font-semibold hover:text-[#0052CC]"
                  >
                    info@esinnov.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-10">
              <div className="eyebrow-label mb-2">INSTITUTIONAL GOVERNANCE</div>
              <h3 className="font-heading text-2xl sm:text-3xl text-slate-950">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className="py-1">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-5 flex items-center justify-between gap-4 text-left group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-baseline gap-3 sm:gap-4">
                        <span className="font-terminal text-xs text-[#0052CC] font-semibold">
                          0{index + 1}
                        </span>
                        <span className="font-heading text-base sm:text-lg text-slate-950 group-hover:text-[#0052CC] transition-colors">
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#0052CC]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-7 sm:pl-9 pr-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
