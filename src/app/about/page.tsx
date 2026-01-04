"use client";

import { motion } from "framer-motion";
import { Linkedin, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #1a1a1f 0%, #0f0f12 100%)' }}>
            {/* Hero Section */}
            <section className="py-28 relative">
                {/* Subtle gradient orb */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-slate-500/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-slate-600/5 rounded-full blur-[100px]" />
                </div>

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <div className="text-slate-400 text-sm font-medium tracking-[0.2em] uppercase mb-6">
                            Principal
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight">
                            Sovereign R&D Studio
                        </h1>
                        <p className="text-slate-300 text-xl leading-relaxed">
                            Building{" "}
                            <span className="text-white font-medium">productized intelligence</span>{" "}
                            at the intersection of agentic AI and real-world execution.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="rounded-2xl bg-slate-800/30 border border-slate-700/50 p-8 md:p-12 backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Avatar */}
                                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/50 flex items-center justify-center flex-shrink-0">
                                    <Code2 className="w-8 h-8 text-slate-300" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="text-slate-400 text-xs font-medium tracking-wider uppercase mb-3">
                                        Principal Consultant & R&D Lead
                                    </div>
                                    <h3 className="text-2xl text-white font-bold mb-2">
                                        Aidin VM
                                    </h3>
                                    <p className="text-slate-400 mb-6 text-sm">
                                        Builder • Strategist • Systems Architect
                                    </p>
                                    <div className="text-slate-300 leading-relaxed space-y-4">
                                        <p>
                                            Aidin directs the R&D operations at ESInnov, bridging the gap between
                                            Theoretical AI Architecture and Industrial Reality.
                                        </p>
                                        <p>
                                            With over a decade of experience leading New Product Introduction (NPI)
                                            and IoT Systems for the automotive and manufacturing sectors, Aidin
                                            operationalizes the abstract, converting "Generative Hype" into
                                            Deterministic, Industrial-Grade Intelligence. He applies Lean Six Sigma
                                            methodologies to the deployment of Multi-Agent Systems, ensuring that
                                            every protocol ESInnov ships is robust, audit-proof, and sovereign.
                                        </p>
                                        <p>
                                            His mandate is to transform operational complexity into Productized
                                            Intelligence across SMBs and enterprise operations, from product
                                            development to strategic advisory.
                                        </p>
                                    </div>
                                    <a
                                        href="https://linkedin.com/in/aidinvm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-[#0A66C2] text-white hover:bg-[#004182] transition-all text-sm font-semibold"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
                            Ready to Build?
                        </h2>
                        <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                            Explore how our productized intelligence solutions can accelerate your operations.
                        </p>
                        <Link href="/access">
                            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all shadow-lg shadow-white/10">
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
