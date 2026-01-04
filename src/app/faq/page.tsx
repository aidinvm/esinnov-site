"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import Link from "next/link";

interface FAQ {
    id: string;
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        id: "chatgpt",
        question: "Is this just ChatGPT?",
        answer: "No. ChatGPT is a generalist. We build Vertical Agents grounded in your specific industrial data. We use LLMs as the reasoning engine, but the Knowledge comes from our Sovereign RAG."
    },
    {
        id: "data-safety",
        question: "Is my data safe?",
        answer: "We operate on a Sovereign Node model. Your data is isolated. We do not train public models on your private IP."
    },
    {
        id: "developer",
        question: "Do I need to hire a developer?",
        answer: "No. We deliver the Outcome, not the Code. You receive the Audit/Report. We manage the infrastructure."
    },
    {
        id: "timeline",
        question: "How long does an audit take?",
        answer: "Depending on the protocol, typical turnaround is 24-72 hours. Zone IQ™ feasibility audits can be delivered within 24 hours. Complex SR&ED narratives may require up to one week."
    },
    {
        id: "pricing",
        question: "How is this priced?",
        answer: "We do not sell subscriptions. Each protocol has a fixed audit fee. You pay for the Verdict, not for access to a tool you have to learn."
    },
];

export default function FAQPage() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="min-h-screen pt-24">
            {/* Hero */}
            <section className="py-24 relative">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
                </div>

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="font-section mb-4">FAQs</div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
                            THE SOVEREIGN
                            <br />
                            <span className="text-studio-amber">DEFENSE.</span>
                        </h1>
                        <p className="text-text-muted text-xl leading-relaxed">
                            Answers to the questions that matter.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-24 border-t border-glass-border">
                <div className="section-container">
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="border border-glass-border hover:border-studio-amber/50 transition-colors"
                            >
                                <button
                                    onClick={() => toggle(faq.id)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-heading text-lg text-text-primary pr-4">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-studio-amber flex-shrink-0" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openId === faq.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0">
                                                <div className="border-t border-glass-border pt-4">
                                                    <p className="text-text-muted leading-relaxed">
                                                        {faq.answer}
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

            {/* Trust Badge */}
            <section className="py-24 border-t border-glass-border bg-void-light/30">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 bg-signal-emerald/10 border border-signal-emerald flex items-center justify-center">
                            <Shield className="w-8 h-8 text-signal-emerald" />
                        </div>
                        <h2 className="font-heading text-2xl text-text-primary mb-4">
                            Sovereign Architecture
                        </h2>
                        <p className="text-text-muted mb-8">
                            Your data never leaves your sovereign node. We build Glass Box systems
                            where every inference is traceable and verifiable.
                        </p>
                        <Link href="/access">
                            <motion.button
                                className="btn-ghost"
                                whileHover={{ scale: 1.02 }}
                            >
                                REQUEST AUDIT
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
