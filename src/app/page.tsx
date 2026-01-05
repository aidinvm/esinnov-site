"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, Send,
  Database, Brain, Shield, Network,
  Layers, Users, Check, Zap, Code
} from "lucide-react";
import LiveDataTicker from "@/components/LiveDataTicker";
import AnimatedTitle from "@/components/AnimatedTitle";
import AgenticStackVisual from "@/components/AgenticStackVisual";
import CountUp from "@/components/CountUp";

// Protocol Stack
const protocols = [
  { name: "MCP", desc: "Model Context Protocol" },
  { name: "A2A", desc: "Agent2Agent Protocol" },
  { name: "Agentic RAG", desc: "Dynamic Retrieval" },
];

// Architecture Pillars
const pillars = [
  {
    icon: Database,
    title: "Intelligent Indexing",
    desc: "Agents autonomously decide what to store and how to structure it. Dynamic chunking, metadata extraction, and context-aware embeddings."
  },
  {
    icon: Network,
    title: "Dynamic Retrieval",
    desc: "Retriever routers analyze each query and select the optimal source—SQL, vector search, web, or internal docs."
  },
  {
    icon: Shield,
    title: "Verified Generation",
    desc: "Critic agents validate outputs through iterative loops. Human-in-the-loop approval before delivery."
  },
];

// Zone IQ Capabilities
const zoneIQCapabilities = [
  { label: "Multi-Agent Reasoning", desc: "Parallel agent swarms for complex analysis" },
  { label: "Sovereign RAG", desc: "Private knowledge graphs, zero data leakage" },
  { label: "MCP Integration", desc: "Standardized context management for tools" },
  { label: "A2A Protocol Ready", desc: "Interoperable with enterprise agent ecosystems" },
];

// Integration Stack
const integrations = [
  "LangChain", "n8n", "Pinecone", "Supabase", "OpenAI", "Anthropic", "Google AI", "PostgreSQL"
];

// FAQ
const faqs = [
  {
    q: "What exactly do you automate?",
    a: "We automate the repetitive, time consuming work that slows down your operations. Document review, data extraction, compliance checks, report generation, and multi step approval workflows. If it involves reading, analyzing, and making routine decisions, we can likely automate it."
  },
  {
    q: "How quickly will I see results?",
    a: "You'll see a working prototype within 14 days. Most clients experience immediate time savings once we deploy, often reducing hours of manual work down to minutes. We measure success by tangible outcomes, not technical milestones."
  },
  {
    q: "Is my company data safe?",
    a: "Completely. Your data stays on isolated infrastructure that we set up specifically for you. We never mix client data, never use it to train AI models, and you retain full ownership. We can also deploy within your own cloud environment if required."
  },
  {
    q: "What's the investment?",
    a: "Feasibility studies start at $1,500 and are delivered in 48 hours. Pilot projects are quoted based on scope. Most clients see ROI within the first month of deployment through reduced labor costs and faster turnaround times."
  },
  {
    q: "Do I need a technical team to work with you?",
    a: "Not at all. We handle all the technical implementation. You just need someone who understands your current workflows and can tell us what's working and what's not. We translate business problems into working solutions."
  },
  {
    q: "What happens if the AI makes a mistake?",
    a: "Every critical decision includes human review before final action. We design systems with validation checkpoints so your team stays in control. You approve, the AI executes. No surprises, no autonomous decisions on high stakes items."
  },
  {
    q: "What industries do you work with?",
    a: "We specialize in real estate, manufacturing, and professional services. Any industry dealing with high volume paperwork, compliance requirements, or complex approval chains is a strong fit for what we build."
  },
  {
    q: "How do I get started?",
    a: "Start with a Feasibility Study. We'll analyze your use case, identify automation opportunities, and give you a clear recommendation within 48 hours. No commitment beyond that. If it makes sense to proceed, we'll scope a pilot together."
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-mesh">

      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Background Stack Visual */}
        <AgenticStackVisual />

        <div className="section-container !py-0 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              className="badge badge-active mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Layers className="w-4 h-4" />
              <span>Agentic Intelligence Studio</span>
            </motion.div>

            {/* Animated Headline */}
            <AnimatedTitle />

            {/* Subhead */}
            <motion.p
              className="text-body-lg text-text-secondary mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              We architect <strong className="text-text-primary">Agentic RAG systems</strong> with
              MCP and A2A protocol integration. Human-verified outputs for high-stakes decisions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              <button
                onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Explore Architecture
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/access">
                <button className="btn-secondary">
                  Request Feasibility Study
                </button>
              </Link>
            </motion.div>

            {/* Protocol Badges */}
            <motion.div
              className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-glass-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.1 }}
            >
              {protocols.map((p) => (
                <div key={p.name} className="badge">
                  <Code className="w-3.5 h-3.5" />
                  <span>{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ARCHITECTURE PILLARS ===== */}
      <section id="architecture" className="section-alt py-20 lg:py-28">
        <div className="section-container !py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="font-section mb-4">The Architecture</div>
            <h2 className="font-heading text-headline mb-4 text-balance">
              Agentic RAG. Sovereign Context.
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Beyond static retrieval. Agents that perceive, decide, and act across your enterprise knowledge.
            </p>
          </motion.div>

          <div className="grid-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="font-heading text-title mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS / NUMBERS SECTION ===== */}
      <section className="py-20 lg:py-28">
        <div className="section-container !py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-section mb-4">Measurable Impact</div>
            <h2 className="font-heading text-headline">
              Results That Matter
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 80, suffix: "%", label: "Time Saved", desc: "On document processing", decimals: 0 },
              { value: 99.2, suffix: "%", label: "Accuracy", desc: "With human-in-the-loop", decimals: 1 },
              { value: 60, suffix: "%", label: "Cost Reduction", desc: "Vs. manual workflows", decimals: 0 },
              { value: 48, suffix: "h", label: "Feasibility", desc: "Inquiry to architecture", decimals: 0 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  className="font-heading text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-accent-blue via-accent-blue to-accent-emerald mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2 + index * 0.3}
                  />
                </motion.div>
                <div className="font-heading text-lg text-text-primary mb-1">
                  {stat.label}
                </div>
                <div className="text-text-tertiary text-sm">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== R&D STATUS TICKER ===== */}
      <LiveDataTicker />

      {/* ===== MCP & A2A SECTION ===== */}
      <section className="py-20 lg:py-28">
        <div className="section-container !py-0">
          <div className="grid-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="font-section mb-4">Protocol Integration</div>
              <h2 className="font-heading text-headline mb-6">
                MCP + A2A Native
              </h2>
              <p className="text-body-lg text-text-secondary mb-8">
                <strong className="text-text-primary">Model Context Protocol</strong> standardizes
                how AI interacts with your tools and data. Combined with <strong className="text-text-primary">A2A Protocol</strong>,
                your agents can communicate across platforms—regardless of vendor.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Eliminate 1,200+ daily context switches" },
                  { icon: Code, text: "Standardized tool integration via MCP" },
                  { icon: Network, text: "Agent interoperability via A2A" },
                  { icon: Shield, text: "Enterprise-grade security by design" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent-blue" />
                    </div>
                    <span className="text-text-primary font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card-light p-6 lg:p-8 glow-blue"
            >
              <div className="font-terminal text-text-tertiary text-xs mb-6">
                CONTEXT_PROTOCOL_FLOW
              </div>
              <div className="space-y-3">
                {[
                  { step: "01", label: "MCP HOST", desc: "AI application environment", color: "text-accent-blue" },
                  { step: "02", label: "MCP CLIENT", desc: "Protocol translator", color: "text-accent-blue" },
                  { step: "03", label: "MCP SERVER", desc: "External context provider", color: "text-accent-violet" },
                  { step: "04", label: "A2A DISCOVERY", desc: "Agent capability cards", color: "text-accent-amber" },
                  { step: "05", label: "TASK EXECUTION", desc: "Multi-agent coordination", color: "text-accent-emerald" },
                ].map((item, i) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-4 p-3 rounded-lg bg-bg-surface"
                  >
                    <div className={`font-terminal text-sm font-bold ${item.color}`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className={`font-terminal text-xs font-semibold ${item.color}`}>{item.label}</div>
                      <div className="text-text-tertiary text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ZONE IQ SHOWCASE ===== */}
      <section className="section-alt py-20 lg:py-28">
        <div className="section-container !py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="font-section mb-4">Reference Architecture</div>
            <h2 className="font-heading text-headline mb-4">
              Zone IQ™
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Multi-agent geospatial reasoning for pre-construction risk analysis.
              Cross-referencing 400+ municipal bylaws in milliseconds.
            </p>
          </motion.div>

          <div className="grid-2">
            {zoneIQCapabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="surface-card p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-accent-emerald/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent-emerald" />
                </div>
                <div>
                  <div className="font-heading text-lg text-text-primary mb-1">
                    {cap.label}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {cap.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/protocols">
              <button className="btn-ghost">
                View Full Architecture
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== THE STUDIO ===== */}
      <section className="section-dark-elegant py-20 lg:py-28">
        <div className="section-container !py-0">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="font-section mb-4 !text-accent-blue">About ESInnov</div>
              <h2 className="font-heading text-headline !text-white">
                AI That Works.<br />
                Results You Can Measure.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card-dark p-8 lg:p-10"
            >
              <div className="space-y-5 text-muted text-body-lg leading-relaxed">
                <p>
                  ESInnov builds <strong className="text-white">practical AI systems</strong> that automate
                  complex, time consuming work in your business. We take what's possible with modern AI and
                  turn it into tools you can actually use, today.
                </p>
                <p>
                  We focus on what matters to you: <strong className="text-white">saving time</strong>,
                  <strong className="text-white"> reducing costs</strong>, and
                  <strong className="text-white"> getting more done</strong> with fewer resources.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-emerald mt-2 flex-shrink-0" />
                    <span>We deploy systems that are <strong className="text-white">proven and production ready</strong>, not experiments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-emerald mt-2 flex-shrink-0" />
                    <span>We measure success by <strong className="text-white">real outcomes</strong>: hours saved, errors reduced, decisions accelerated</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-emerald mt-2 flex-shrink-0" />
                    <span>Your team stays in control with <strong className="text-white">human review</strong> on every critical decision</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-alt py-20 lg:py-28">
        <div className="section-container !py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="font-section mb-4">Common Questions</div>
            <h2 className="font-heading text-headline">FAQs</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="surface-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                >
                  <span className="font-heading text-lg text-text-primary pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                        <div className="border-t border-glass-border pt-4">
                          <p className="text-text-secondary leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-dark py-20 lg:py-28">
        <div className="section-container !py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="font-section mb-4 !text-accent-emerald">Get Started</div>
            <h2 className="font-heading text-headline mb-6 !text-white">
              Ready to Build?
            </h2>
            <p className="text-body-lg text-muted mb-10">
              Share your use case. We&apos;ll assess architecture fit and
              deliver a feasibility study within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/access">
                <button className="btn-primary">
                  <Send className="w-4 h-4" />
                  Request Feasibility Study
                </button>
              </Link>
              <Link href="/methodology">
                <button className="btn-secondary-light">
                  View Methodology
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
