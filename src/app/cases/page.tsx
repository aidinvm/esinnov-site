"use client";

import { motion } from "framer-motion";
import { Download, FileText, BarChart2, DollarSign, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
    {
        value: "150+",
        label: "Properties Analyzed",
        icon: Building2,
    },
    {
        value: "$2.5M",
        label: "Capital Preserved",
        icon: DollarSign,
    },
    {
        value: "85%",
        label: "Prediction Accuracy",
        icon: BarChart2,
    },
];

const caseStudies = [
    {
        id: "calgary-portfolio",
        title: "Calgary RS Zone Portfolio Audit",
        jurisdiction: "Calgary, AB",
        challenge: "Client needed to assess blanket repeal risk across 12 RS-zoned properties.",
        outcome: "Identified 3 high-risk sites, recommended disposition. Preserved $800K in potential losses.",
        frictionScore: 67,
        riskLevel: "HIGH",
    },
    {
        id: "vancouver-heritage",
        title: "Vancouver Heritage Variance Analysis",
        jurisdiction: "Vancouver, BC",
        challenge: "RM-4 infill site with suspected heritage adjacency constraints.",
        outcome: "Confirmed fatal flaw: variance probability < 5%. Client avoided 18-month delay.",
        frictionScore: 91,
        riskLevel: "CRITICAL",
    },
    {
        id: "edmonton-density",
        title: "Edmonton RF-3 Density Maximization",
        jurisdiction: "Edmonton, AB",
        challenge: "Undervalued site with unexplored density potential in reformed zone.",
        outcome: "Uncovered 40% additional GFA. Deal repriced accordingly, generating $400K upside.",
        frictionScore: 28,
        riskLevel: "LOW",
    },
];

export default function CasesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="py-24 relative">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
                </div>

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <div className="font-section mb-4">CASE STUDIES</div>
                        <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-6">
                            Proof of Intelligence
                        </h1>
                        <p className="text-text-muted text-xl leading-relaxed">
                            Real deals. Real outcomes.{" "}
                            <span className="text-text-primary">Measurable capital impact.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-t border-b border-glass-border bg-void-light/30">
                <div className="section-container py-12">
                    <div className="grid grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <stat.icon className="w-6 h-6 text-text-dim mx-auto mb-3" />
                                <div className="font-data text-3xl md:text-4xl text-text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="font-terminal text-text-dim text-xs">
                                    {stat.label.toUpperCase()}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24">
                <div className="section-container">
                    <div className="space-y-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-8"
                            >
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Left: Info */}
                                    <div className="md:col-span-2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="font-terminal text-text-dim text-xs">
                                                {study.jurisdiction.toUpperCase()}
                                            </span>
                                            <span className={`risk-badge ${study.riskLevel === "CRITICAL" ? "text-red-500 border-red-500" :
                                                    study.riskLevel === "HIGH" ? "text-orange-500 border-orange-500" :
                                                        study.riskLevel === "LOW" ? "text-emerald-500 border-emerald-500" :
                                                            "text-amber-500 border-amber-500"
                                                }`}>
                                                {study.riskLevel}
                                            </span>
                                        </div>

                                        <h3 className="font-heading text-2xl text-text-primary mb-4">
                                            {study.title}
                                        </h3>

                                        <div className="space-y-4">
                                            <div>
                                                <div className="font-terminal text-text-dim text-xs mb-1">CHALLENGE</div>
                                                <p className="text-text-muted">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <div className="font-terminal text-text-dim text-xs mb-1">OUTCOME</div>
                                                <p className="text-accent-safe">{study.outcome}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Score */}
                                    <div className="flex flex-col items-center justify-center p-6 bg-void-lighter border border-glass-border">
                                        <div className="font-terminal text-text-dim text-xs mb-2">
                                            FRICTION SCORE
                                        </div>
                                        <div className={`friction-score ${study.frictionScore >= 70 ? "critical" :
                                                study.frictionScore >= 40 ? "moderate" : "low"
                                            }`}>
                                            {study.frictionScore}
                                        </div>
                                        <div className="text-text-dim font-data text-sm">/100</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <section className="py-24 border-t border-glass-border bg-void-light/30">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 max-w-3xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-24 bg-void-lighter border border-glass-border flex items-center justify-center">
                                    <FileText className="w-10 h-10 text-text-dim" />
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <div className="font-terminal text-text-dim text-xs mb-2">WHITE PAPER</div>
                                <h3 className="font-heading text-2xl text-text-primary mb-2">
                                    The Feasibility Gap
                                </h3>
                                <p className="text-text-muted mb-4">
                                    Why traditional due diligence fails in a compressed deal cycle.
                                </p>
                                <button className="btn-ghost inline-flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-glass-border">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-heading text-3xl text-text-primary mb-6">
                            Add your deal to our record.
                        </h2>
                        <Link href="/access">
                            <motion.button
                                className="btn-terminal"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="cursor-blink mr-2">█</span>
                                REQUEST ANALYSIS
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
