"use client";

import { motion } from "framer-motion";
import { Cpu, FileCheck, Zap, ArrowRight, CheckCircle2, Brain } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "hbu",
        title: "Generative HBU Modeling",
        tagline: "The Go/No-Go Signal",
        description: "Don't wait for architects.",
        details: "We deploy generative design agents to simulate density potential against zoning constraints instantly. Receive a data-backed 'Highest & Best Use' matrix in real-time.",
        deliverable: "Instant probabilistic density scenarios with confidence intervals.",
        features: [
            "Generative massing simulation",
            "Real-time constraint analysis",
            "GFA optimization output",
            "Variance probability scoring",
            "Sub-second inference",
        ],
        icon: Brain,
        accentClass: "border-l-accent-risk",
    },
    {
        id: "transaction",
        title: "Data Room Augmentation",
        tagline: "The Deal Accelerator",
        description: "Accelerate transaction velocity.",
        details: "We provide an instant regulatory audit for your data room, answering buyer zoning queries with automated precision before they are asked.",
        deliverable: "Buyer-ready regulatory intelligence that closes deals faster.",
        features: [
            "Automated compliance verification",
            "Pre-emptive query resolution",
            "Instant regulatory snapshots",
            "Confidence-scored outputs",
            "API integration ready",
        ],
        icon: FileCheck,
        accentClass: "border-l-accent-safe",
    },
    {
        id: "pulse",
        title: "Real-Time Feasibility Pulse",
        tagline: "Instant Entry Point",
        description: "Instant regulatory alignment check.",
        details: "Input an address, and our Inference Engine generates a preliminary zoning conformance report in seconds. Perfect for rapid portfolio screening.",
        deliverable: "Automated analysis for informational purposes. Instant delivery.",
        features: [
            "Single address inference",
            "Sub-second response time",
            "Preliminary conformance check",
            "Risk flag identification",
            "No commitment required",
        ],
        icon: Zap,
        accentClass: "border-l-accent-terminal",
    },
];

export default function AdvisoryPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-24 relative">
                {/* Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
                </div>

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <div className="font-section mb-4 flex items-center gap-3">
                            <Cpu className="w-4 h-4 text-accent-terminal" />
                            ADVISORY SERVICES
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
                            The Firm + The Engine
                        </h1>
                        <p className="text-text-muted text-xl leading-relaxed">
                            Human strategy wrapped around agentic infrastructure.{" "}
                            <span className="text-accent-terminal font-mono">Instant</span> outputs.{" "}
                            <span className="text-text-primary">Defensible</span> decisions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 border-t border-glass-border">
                <div className="section-container">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`glass-card p-8 md:p-12 border-l-4 ${service.accentClass}`}
                            >
                                <div className="grid md:grid-cols-2 gap-10">
                                    {/* Left: Content */}
                                    <div>
                                        {/* Icon & Label */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <service.icon className="w-8 h-8 text-text-muted" strokeWidth={1.5} />
                                            <span className="font-terminal text-accent-terminal text-xs">
                                                {service.tagline.toUpperCase()}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="font-heading text-3xl text-text-primary mb-4">
                                            {service.title}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-text-primary font-medium mb-4">
                                            {service.description}
                                        </p>

                                        {/* Details */}
                                        <p className="text-text-muted leading-relaxed mb-6">
                                            {service.details}
                                        </p>

                                        {/* Deliverable */}
                                        <div className="p-4 bg-void-lighter border border-glass-border">
                                            <div className="font-terminal text-text-dim text-xs mb-2">OUTPUT</div>
                                            <p className="text-accent-terminal text-sm font-mono">{service.deliverable}</p>
                                        </div>
                                    </div>

                                    {/* Right: Features */}
                                    <div>
                                        <div className="font-terminal text-text-dim text-xs mb-4">CAPABILITIES</div>
                                        <ul className="space-y-4">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-accent-safe mt-0.5 flex-shrink-0" />
                                                    <span className="text-text-muted">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 border-t border-glass-border bg-void-light/30">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <div className="font-section mb-4">DEPLOY AGENTS</div>
                        <h2 className="font-heading text-3xl text-text-primary mb-6">
                            Initialize your first analysis
                        </h2>
                        <p className="text-text-muted mb-8">
                            Describe your target acquisition. Our inference engine will determine the optimal protocol.
                        </p>
                        <Link href="/access">
                            <motion.button
                                className="btn-terminal"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="cursor-blink mr-2">█</span>
                                EXECUTE ANALYSIS
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
