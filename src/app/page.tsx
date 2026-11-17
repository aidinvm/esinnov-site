"use client";

import { useState, useEffect, useRef, type MouseEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  ShieldAlert,
  Workflow,
  Database,
  Lock,
  Mail,
  Copy,
  Check,
  Send,
} from "lucide-react";

const executiveAuthority = [
  {
    index: "01",
    sector: "Clean Energy & Power Electronics",
    scope: "Multi-Node 3PL, Dual-Shore Sourcing & Trade Governance",
  },
  {
    index: "02",
    sector: "Connected Hardware & Mobility",
    scope: "Stage-Gate Commercialization & Homologation Delivery",
  },
  {
    index: "03",
    sector: "Regulated & Heavy Manufacturing",
    scope: "Pharmaceuticals, Structural Steel & Automotive Operations",
  },
  {
    index: "04",
    sector: "Operational & Systems Rigor",
    scope: "Lean Six Sigma Black Belt • Sovereign Workflow Architecture",
  },
];

const practicePillars = [
  {
    id: "npi-program",
    code: "PRACTICE PILLAR // 01",
    title: "New Product Introduction (NPI) & Technical Program Delivery",
    summary:
      "End-to-end Stage-Gate governance from concept validation and Design for Manufacturability and Assembly (DFM/DFA) through offshore tooling, environmental ingress qualification (IEC 60529 IP67/IP68), and commercial launch.",
    deliverables: [
      "Cross-functional hardware, firmware, and cloud telemetry integration oversight",
      "Critical-path scheduling, vendor qualification, and validation testing",
      "Structured operational handover, SOP documentation, and production ramp governance",
    ],
    ctaLabel: "Inquire Regarding Program Delivery",
  },
  {
    id: "supply-chain",
    code: "PRACTICE PILLAR // 02",
    title: "Supply Chain, 3PL & Trade Compliance Turnaround",
    summary:
      "Stabilization of multi-node distribution networks, dual-shore procurement across North America and Asia, and cross-border customs and tariff exposure management.",
    deliverables: [
      "Sales and Operations Planning (S&OP) governance and demand alignment",
      "Bill of Materials (BOM) and multi-warehouse inventory reconciliation",
      "Multi-currency landed-cost modeling, EDI/ERP fulfillment integration, and working-capital recovery",
    ],
    ctaLabel: "Inquire Regarding Supply Chain Turnaround",
  },
  {
    id: "operational-excellence",
    code: "PRACTICE PILLAR // 03",
    title: "Operational Excellence & Regulatory Governance",
    summary:
      "Floor-level throughput optimization and enterprise compliance administration across ERP and quality management environments.",
    deliverables: [
      "Lean Six Sigma value-stream mapping, line balancing, and constraint elimination",
      "ISO 9001 Quality Management System (QMS) standardization and CAPA execution",
      "Product environmental compliance governance (REACH, RoHS, TSCA, PFAS, and conflict minerals)",
    ],
    ctaLabel: "Inquire Regarding Operational Excellence",
  },
];

const appliedModules = [
  {
    index: "01",
    icon: ShieldAlert,
    title: "Commercial Scope & Margin Protection Workflows",
    desc: "Structured ingestion, validation, and audit-ready documentation of field scope variations, contract amendments, and commercial change approvals—preventing unbilled execution leakage before work proceeds.",
    tag: "Margin Governance",
  },
  {
    index: "02",
    icon: Workflow,
    title: "Quote-to-Cash & Operational Velocity Pipelines",
    desc: "Event-driven, multi-step workflow orchestration covering inbound opportunity capture, structured quote follow-up sequences, receivable aging escalation, and field-to-office scheduling synchronization.",
    tag: "Revenue Velocity",
  },
  {
    index: "03",
    icon: Database,
    title: "ERP, 3PL & Document Intelligence",
    desc: "Deterministic data pipelines and retrieval-augmented verification workflows that reconcile multi-currency landed costs, customs declarations, and warehouse inventory records with mandatory human sign-off gates.",
    tag: "HITL Verification",
  },
  {
    index: "04",
    icon: Lock,
    title: "Sovereign In-Tenant Architecture",
    desc: "Built on strict context-isolation and governance standards so proprietary pricing, BOMs, and customer records never leave client infrastructure or train external models.",
    tag: "Zero Data Leakage",
  },
];

const engagementSteps = [
  {
    step: "01",
    title: "Rapid Partner Onboarding",
    desc: "Prime staffing and consulting agencies register EcoSync Innovations Inc. as an approved corp-to-corp delivery vendor. Corporate registration, commercial insurance credentials, and capability documentation are dispatched same-day.",
    tag: "Same-Day Dispatch",
  },
  {
    step: "02",
    title: "Scoped Mandate Alignment",
    desc: "Structured for 3–6 month embedded operational and technical program mandates (NPI launches, supply chain bottlenecks, interim leadership) or fixed-scope workflow automation deployments across Alberta and British Columbia.",
    tag: "AB & BC Coverage",
  },
  {
    step: "03",
    title: "Sovereign In-Tenant Execution",
    desc: "All operational and automation work executes strictly inside the client’s enterprise environment (SAP, NetSuite, Sage, Epicor, PLM, or private cloud tenant) under existing NDAs.",
    tag: "Client-Tenant Native",
  },
];

const sectorPedigree = [
  {
    domain: "Clean-Tech & Commercial Power Electronics",
    tag: "Supply Chain & Trade",
    summary:
      "Governed continent-wide multi-node 3PL distribution, dual-shore procurement, cross-border customs clearance, and regulatory compliance for enterprise solar, inverter, and lithium storage portfolios.",
  },
  {
    domain: "Connected Mobility & Enterprise IoT Platforms",
    tag: "Stage-Gate NPI",
    summary:
      "Directed full 18-month Stage-Gate commercialization, distributed hardware/firmware integration, and offshore contract manufacturing for connected telematics and electric powertrain programs.",
  },
  {
    domain: "Heavy Manufacturing, Automotive & Regulated Logistics",
    tag: "Operational Excellence",
    summary:
      "Led Lean Six Sigma line balancing, multi-plant SOP standardization, computer-vision quality assurance, and cold-chain compliance across structural steel, automotive assembly, and pharmaceutical distribution operations.",
  },
];

const enterpriseStack = [
  "SAP",
  "NetSuite",
  "Sage 300",
  "Epicor Eclipse",
  "Netstock",
  "Arena PLM",
  "EDI 940/945",
  "Power BI",
  "Python",
  "Sovereign Workflow Pipelines",
];

const governanceFaqs = [
  {
    q: "Who leads the advisory practice?",
    a: "The practice is led by Principal Consultant Aidin VM, an experienced industrial systems practitioner, Lean Six Sigma Black Belt, and certified Product Management professional with over a decade of senior operations, supply chain, and technical program leadership across North America and Asia.",
  },
  {
    q: "How does ESInnov partner with staffing and consulting firms?",
    a: "We operate as a dedicated corp-to-corp delivery vendor under prime partner Master Services Agreements (MSAs), supplying immediate senior operational and program leadership without competing for permanent placement fees.",
  },
  {
    q: "What professional and corporate credentials does ESInnov maintain?",
    a: "EcoSync Innovations Inc. is an incorporated Canadian entity maintaining active corporate registration in Alberta, professional registration with Engineers and Geoscientists British Columbia (EGBC), and commercial general liability and professional coverage tailored for enterprise vendor onboarding.",
  },
  {
    q: "How is client data security and confidentiality maintained?",
    a: "Embedded mandates and workflow automations run exclusively within the client's existing ERP, PLM, and cloud tenant under strict NDA governance. Zero proprietary BOMs, pricing schedules, or operational records leave client systems.",
  },
  {
    q: "How are engagements commercially structured?",
    a: "Enterprise and staffing-partner mandates are structured as fixed-term corp-to-corp engagements (typically 3–6 months). Applied workflow automation engagements are delivered on fixed-scope milestones tied to measurable operational outcomes.",
  },
];

const mandateOptions = [
  {
    id: "mandate-discussion",
    label: "Embedded Operations & Mandate Discussion",
  },
  {
    id: "partner-onboarding",
    label: "Prime Partner Vendor Onboarding",
  },
  {
    id: "npi-program",
    label: "NPI & Technical Program Delivery",
  },
  {
    id: "supply-chain",
    label: "Supply Chain, 3PL & Trade Compliance Turnaround",
  },
  {
    id: "operational-excellence",
    label: "Operational Excellence & Regulatory Governance",
  },
  {
    id: "applied-workflow",
    label: "Applied Workflow Architecture Review",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Interactive Advisory Desk Form State
  const [formData, setFormData] = useState({
    service: "mandate-discussion",
    name: "",
    email: "",
    company: "",
    useCase: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formHighlighted, setFormHighlighted] = useState(false);

  const captchaRef = useRef<HCaptcha>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const initiateMandateInquiry = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceId,
    }));
    setIsSubmitted(false);
    setSubmitError(null);
    setFormHighlighted(true);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", "#contact");

    setTimeout(() => {
      nameInputRef.current?.focus({ preventScroll: true });
    }, 450);

    setTimeout(() => {
      setFormHighlighted(false);
    }, 1800);
  };

  useEffect(() => {
    const handleExternalMandate = (event: Event) => {
      const customEvent = event as CustomEvent<{ service?: string }>;
      const serviceId = customEvent.detail?.service || "mandate-discussion";
      initiateMandateInquiry(serviceId);
    };

    window.addEventListener("esinnov:initiate-mandate", handleExternalMandate);
    return () => {
      window.removeEventListener(
        "esinnov:initiate-mandate",
        handleExternalMandate
      );
    };
  }, []);

  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    selector: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", selector);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("info@esinnov.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      nameInputRef.current?.focus();
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setSubmitError("Please complete the human verification below.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || "Failed to submit inquiry");
      }

      setIsSubmitted(true);
      setFormData({
        service: "mandate-discussion",
        name: "",
        email: "",
        company: "",
        useCase: "",
      });
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to submit inquiry";
      setSubmitError(
        `${message}. You may also reach our advisory desk directly at info@esinnov.com.`
      );
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {/* ===== SECTION 1: HERO & EXECUTIVE AUTHORITY STRIP ===== */}
      <section className="relative bg-architectural-grid border-b border-slate-200/90 overflow-hidden">
        <div className="bg-radial-fade">
          <div className="section-container py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Primary Hero Column */}
              <div className="lg:col-span-8 space-y-6 sm:space-y-7">
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="badge-institutional max-w-full"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                  <span className="truncate sm:whitespace-normal">
                    WESTERN CANADA • INDUSTRIAL OPERATIONS &amp; APPLIED SYSTEMS ADVISORY
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="font-heading text-display text-slate-950 text-balance"
                >
                  Embedded operational leadership and deterministic workflow
                  systems for complex industries.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-body-lg text-slate-600 max-w-3xl"
                >
                  EcoSync Innovations Inc. (ESInnov) deploys seasoned program
                  delivery, supply chain turnaround, and in-tenant workflow
                  automation into industrial and commercial
                  organizations—structured for rapid integration through prime
                  staffing partners or direct corporate mandates.
                </motion.p>

                {/* Hero CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      initiateMandateInquiry("mandate-discussion");
                    }}
                    className="btn-primary !w-full sm:!w-auto"
                  >
                    <span>Initiate Mandate Discussion</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#engagement-model"
                    onClick={(e) => scrollToSection(e, "#engagement-model")}
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
                transition={{ duration: 0.45, delay: 0.12 }}
                className="lg:col-span-4 w-full"
              >
                <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 shadow-sm">
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <span className="font-terminal text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      PRACTICE SPECIFICATIONS
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-terminal text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      ACTIVE DESK
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      {
                        label: "REGIONAL MANDATE",
                        value: "Western Canada (Alberta & BC)",
                        sub: "Calgary HQ • Hybrid & On-Site Deployment",
                      },
                      {
                        label: "ENGAGEMENT HORIZON",
                        value: "3–6 Month Embedded or Fixed-Scope",
                        sub: "Prime Staffing MSA & Direct Corporate",
                      },
                      {
                        label: "SYSTEMS ARCHITECTURE",
                        value: "Sovereign In-Tenant Execution",
                        sub: "SAP • NetSuite • Sage 300 • Epicor • PLM",
                      },
                      {
                        label: "PRACTICE RIGOR",
                        value: "Lean Six Sigma Black Belt Standard",
                        sub: "Stage-Gate NPI & Trade Compliance",
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
                    <span>Dual-Capability Advisory</span>
                    <a
                      href="#applied-systems"
                      onClick={(e) => scrollToSection(e, "#applied-systems")}
                      className="font-terminal text-[#0052CC] font-medium hover:underline inline-flex items-center gap-1"
                    >
                      <span>Applied Systems</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXECUTIVE AUTHORITY STRIP (4 COLUMNS) ===== */}
      <section className="bg-slate-50/70 border-b border-slate-200/90">
        <div className="section-container py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-slate-200/90">
            {executiveAuthority.map((item) => (
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
                <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium leading-snug">
                  {item.scope}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: CORE ADVISORY PRACTICES (#core-practices) ===== */}
      <section
        id="core-practices"
        className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="eyebrow-label mb-3">CORE ADVISORY PRACTICES</div>
            <h2 className="font-heading text-headline text-slate-950 mb-4 text-balance">
              Targeted execution mandates. Senior operational rigor.
            </h2>
            <p className="text-body-lg text-slate-600">
              ESInnov steps into high-friction operating environments where
              organizations require experienced execution leadership rather than
              theoretical recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {practicePillars.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="institutional-card-interactive p-6 sm:p-8 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="font-terminal text-xs text-[#0052CC] font-semibold mb-3">
                    {pillar.code}
                  </div>
                  <h3 className="font-heading text-xl sm:text-[22px] text-slate-950 mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                    {pillar.summary}
                  </p>

                  <div className="border-t border-slate-100 pt-5 mb-6">
                    <div className="font-terminal text-[11px] uppercase tracking-wider text-slate-400 mb-3.5">
                      CORE DELIVERABLES
                    </div>
                    <ul className="space-y-3">
                      {pillar.deliverables.map((item) => (
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
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      initiateMandateInquiry(pillar.id);
                    }}
                    className="link-action"
                  >
                    <span>{pillar.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: APPLIED SYSTEMS & WORKFLOW AUTOMATION (#applied-systems) ===== */}
      <section
        id="applied-systems"
        className="py-16 sm:py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="eyebrow-label mb-3">
              APPLIED SYSTEMS &amp; WORKFLOW AUTOMATION
            </div>
            <h2 className="font-heading text-headline text-slate-950 mb-4 text-balance">
              Deterministic workflow automation engineered for commercial
              operations.
            </h2>
            <p className="text-body-lg text-slate-600">
              Beyond embedded leadership, ESInnov architects human-in-the-loop
              (HITL) automated workflows that eliminate administrative latency,
              margin leakage, and manual reconciliation across industrial and
              commercial operations—deployed strictly within client-controlled
              infrastructure.
            </p>
          </div>

          {/* 4 Applied Capability Modules (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {appliedModules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="institutional-card p-6 sm:p-8 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#0052CC]/10 border border-[#0052CC]/20 flex items-center justify-center">
                      <mod.icon className="w-5 h-5 text-[#0052CC]" />
                    </div>
                    <span className="font-terminal text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-medium">
                      {mod.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl text-slate-950 mb-3">
                    {mod.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-terminal text-[11px] text-slate-400">
                  <span>MODULE // {mod.index}</span>
                  <span>IN-TENANT GOVERNANCE</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="mt-10 sm:mt-12 flex items-center justify-start">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                initiateMandateInquiry("applied-workflow");
              }}
              className="btn-primary !w-full sm:!w-auto"
            >
              <span>Request an Applied Workflow Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: ENGAGEMENT ARCHITECTURE (#engagement-model) ===== */}
      <section
        id="engagement-model"
        className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="eyebrow-label mb-3">ENGAGEMENT MODEL</div>
            <h2 className="font-heading text-headline text-slate-950 mb-4 text-balance">
              Frictionless onboarding via prime staffing and consulting
              partners.
            </h2>
            <p className="text-body-lg text-slate-600">
              ESInnov operates as an agile corporate delivery partner. We
              integrate directly through established Western Canadian staffing,
              engineering, and consulting firms under existing Master Services
              Agreements (MSAs) and strict non-disclosure protocols—or deploy
              scoped workflow automation directly for commercial operators.
            </p>
          </div>

          {/* 3-Step Partner & Client Integration Flow */}
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

          {/* Partner Onboarding CTA Anchor */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="font-terminal text-xs uppercase tracking-wider text-[#0052CC] font-semibold">
                CORP-TO-CORP DELIVERY STANDARD
              </div>
              <p className="font-heading text-base sm:text-lg text-slate-900">
                Vendor registration and capability credentials dispatched same-day.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                initiateMandateInquiry("partner-onboarding");
              }}
              className="btn-primary !w-full md:!w-auto flex-shrink-0"
            >
              <span>Initiate Partner Onboarding</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: SECTOR PEDIGREE & ENTERPRISE STACK (#sector-pedigree) ===== */}
      <section
        id="sector-pedigree"
        className="py-16 sm:py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="eyebrow-label mb-3">SECTOR PEDIGREE</div>
            <h2 className="font-heading text-headline text-slate-950 mb-4 text-balance">
              Proven execution across regulated and capital-intensive sectors.
            </h2>
            <p className="text-body-lg text-slate-600">
              Our practice draws on over a decade of direct operational
              accountability across North American and international
              manufacturing, distribution, and technology programs.
            </p>
          </div>

          {/* Anonymized Domain Track Record */}
          <div className="border-t border-slate-200 bg-white rounded-xl border border-slate-200/90 px-4 sm:px-8 divide-y divide-slate-200 shadow-2xs">
            {sectorPedigree.map((item, idx) => (
              <motion.div
                key={item.domain}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="py-7 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
              >
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="font-terminal text-xs font-semibold text-[#0052CC] mt-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl text-slate-950 leading-snug">
                      {item.domain}
                    </h3>
                  </div>
                  <div className="pl-6">
                    <span className="inline-block font-terminal text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Systems & Methodologies Strip */}
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-xl bg-white border border-slate-200/90">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <span className="font-terminal text-xs uppercase tracking-wider text-slate-500 font-semibold flex-shrink-0">
                ENTERPRISE SYSTEMS &amp; METHODOLOGIES:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {enterpriseStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 font-terminal text-xs font-medium text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: ABOUT US & GOVERNANCE FAQ (#about-governance) ===== */}
      <section
        id="about-governance"
        className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200/80"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 lg:mb-20">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow-label">ABOUT US &amp; GOVERNANCE</div>
              <h2 className="font-heading text-headline text-slate-950 text-balance">
                Institutional rigor. Boutique agility.
              </h2>
              <div className="p-4 sm:p-5 rounded-lg bg-[#090D16] text-white font-terminal text-xs flex flex-wrap items-center justify-between gap-3 mt-4">
                <span>EcoSync Innovations Inc. (ESInnov)</span>
                <span className="text-emerald-400">
                  Calgary, AB • Serving Western Canada
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-xl p-6 sm:p-9 text-slate-700 text-base sm:text-[17px] leading-relaxed">
                <p>
                  <strong className="text-slate-950 font-semibold">
                    EcoSync Innovations Inc. (ESInnov)
                  </strong>{" "}
                  is a Western Canadian industrial operations and applied systems
                  advisory headquartered in Calgary, Alberta, serving industrial
                  and commercial clients across Alberta and British Columbia.
                  The firm bridges executive operational strategy, floor-level
                  execution, and deterministic workflow automation—stabilizing
                  supply chains, governing complex product launches, and
                  eliminating revenue-leaking administrative friction without the
                  overhead of large consultancies.
                </p>
              </div>
            </div>
          </div>

          {/* Governance & Leadership FAQ */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="eyebrow-label mb-2">GOVERNANCE &amp; LEADERSHIP</div>
              <h3 className="font-heading text-2xl sm:text-3xl text-slate-950">
                Governance &amp; Leadership FAQ
              </h3>
            </div>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {governanceFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className="py-1">
                    <button
                      type="button"
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

      {/* ===== SECTION 7: DIRECT ADVISORY DESK & INQUIRY FORM (#contact) ===== */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Advisory Desk Overview & Direct Dispatch */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="eyebrow-label">DIRECT ADVISORY DESK</div>
                <h2 className="font-heading text-headline text-slate-950 text-balance">
                  Initiate a mandate or vendor registration.
                </h2>
                <p className="text-body-lg text-slate-600 leading-relaxed">
                  For staffing partners and operations leaders seeking embedded
                  program or supply chain leadership, or commercial operators
                  scoping workflow automation, contact our advisory desk for
                  same-day review.
                </p>
              </div>

              {/* Regional Coverage & SLA Specs */}
              <div className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 space-y-4 shadow-2xs">
                <div className="space-y-1">
                  <div className="font-terminal text-[11px] uppercase tracking-wider text-slate-400">
                    REGIONAL COVERAGE
                  </div>
                  <div className="font-heading text-sm sm:text-base font-semibold text-slate-950">
                    Calgary, AB • Serving Alberta &amp; British Columbia
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4 space-y-1">
                  <div className="font-terminal text-[11px] uppercase tracking-wider text-slate-400">
                    PARTNER ONBOARDING SLA
                  </div>
                  <div className="text-sm text-slate-600">
                    Corporate vendor registration, commercial insurance, and
                    capability documentation dispatched same-day.
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <div className="font-terminal text-[11px] uppercase tracking-wider text-slate-400">
                    DIRECT DISPATCH
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href="mailto:info@esinnov.com?subject=ESInnov%20Advisory%20Inquiry"
                      className="inline-flex items-center gap-1.5 font-terminal text-sm font-semibold text-slate-950 hover:text-[#0052CC] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#0052CC]" />
                      <span>info@esinnov.com</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-slate-200 bg-slate-50 hover:bg-slate-100 font-terminal text-xs text-slate-700 transition-colors cursor-pointer"
                      aria-label="Copy info@esinnov.com to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-medium">
                            Copied to clipboard
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Advisory Desk Form */}
            <div className="lg:col-span-7">
              <div
                id="advisory-form"
                className={`bg-white rounded-2xl border p-6 sm:p-8 lg:p-10 transition-all duration-300 ${
                  formHighlighted
                    ? "border-[#0052CC] ring-4 ring-[#0052CC]/10 shadow-md"
                    : "border-slate-200/90 shadow-xs"
                }`}
              >
                {isSubmitted ? (
                  <div className="py-8 sm:py-12 text-center space-y-5">
                    <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="space-y-2 max-w-md mx-auto">
                      <div className="font-terminal text-xs uppercase tracking-wider text-emerald-700 font-semibold">
                        DISPATCH CONFIRMED
                      </div>
                      <h3 className="font-heading text-2xl text-slate-950">
                        Advisory Inquiry Received
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Thank you for contacting EcoSync Innovations Inc. Our
                        advisory desk reviews all mandate scopes and partner
                        onboarding requests for same-day response.
                      </p>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="btn-secondary !text-sm"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl text-slate-950">
                          Contact Advisory Desk
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                          Submit mandate scope, vendor registration, or workflow
                          review details.
                        </p>
                      </div>
                      <span className="hidden sm:inline-flex font-terminal text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                        NDA READY
                      </span>
                    </div>

                    {/* Mandate / Scope Selector */}
                    <div>
                      <label
                        htmlFor="mandate-service"
                        className="block font-terminal text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1.5"
                      >
                        Mandate / Scope Category *
                      </label>
                      <select
                        id="mandate-service"
                        name="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        required
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-950 focus:outline-none focus:border-[#0052CC] focus:ring-3 focus:ring-[#0052CC]/10 transition-all"
                      >
                        {mandateOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="mandate-name"
                          className="block font-terminal text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          ref={nameInputRef}
                          id="mandate-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Jane Doe"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-[#0052CC] focus:ring-3 focus:ring-[#0052CC]/10 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="mandate-email"
                          className="block font-terminal text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1.5"
                        >
                          Work Email *
                        </label>
                        <input
                          id="mandate-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@organization.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-[#0052CC] focus:ring-3 focus:ring-[#0052CC]/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Organization / Firm */}
                    <div>
                      <label
                        htmlFor="mandate-company"
                        className="block font-terminal text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1.5"
                      >
                        Organization / Staffing Partner Firm
                      </label>
                      <input
                        id="mandate-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Optional company or agency name"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-[#0052CC] focus:ring-3 focus:ring-[#0052CC]/10 transition-all"
                      />
                    </div>

                    {/* Mandate Scope & Timeline */}
                    <div>
                      <label
                        htmlFor="mandate-scope"
                        className="block font-terminal text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1.5"
                      >
                        Mandate Scope &amp; Timeline *
                      </label>
                      <textarea
                        id="mandate-scope"
                        name="useCase"
                        required
                        rows={4}
                        value={formData.useCase}
                        onChange={(e) =>
                          setFormData({ ...formData, useCase: e.target.value })
                        }
                        placeholder="Outline operational objectives, target start timeline, or ERP/workflow systems..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-[#0052CC] focus:ring-3 focus:ring-[#0052CC]/10 transition-all resize-y"
                      />
                    </div>

                    {/* Human Verification */}
                    <div>
                      <span className="block font-terminal text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-2">
                        Human Verification *
                      </span>
                      <div className="p-3 sm:p-4 rounded-lg bg-slate-50 border border-slate-200 overflow-x-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <HCaptcha
                          ref={captchaRef}
                          sitekey="21ca1b58-b39a-4c00-94e8-229ed888dfc6"
                          onVerify={(token) => {
                            setCaptchaToken(token);
                            setSubmitError(null);
                          }}
                          onExpire={() => setCaptchaToken(null)}
                          theme="light"
                        />
                        {captchaToken && (
                          <div className="inline-flex items-center gap-1.5 font-terminal text-xs text-emerald-700 font-medium flex-shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {submitError && (
                      <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                        {submitError}
                      </div>
                    )}

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full !py-3.5 !text-sm sm:!text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Contact Advisory Desk</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] font-terminal text-slate-400 text-center pt-1">
                      Strict confidentiality maintained. Zero external data
                      sharing.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
