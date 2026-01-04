"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, Database, Brain, Shield, Users,
    Network, Check, RefreshCw, Code
} from "lucide-react";

// Agentic RAG Workflow
const agenticWorkflow = [
    {
        phase: "01",
        name: "Intelligent Indexing",
        icon: Database,
        desc: "Agents autonomously decide what to index via MCP-enabled tool integration.",
        details: ["High-precision document parsing", "Dynamic metadata extraction", "Context-aware embeddings"]
    },
    {
        phase: "02",
        name: "Dynamic Retrieval",
        icon: Network,
        desc: "Retriever routers select the optimal data source for each query.",
        details: ["Multi-source retrieval", "Query classification", "Relevance scoring"]
    },
    {
        phase: "03",
        name: "Multi-Agent Reasoning",
        icon: Brain,
        desc: "Specialized agents coordinate via A2A protocol for parallel analysis.",
        details: ["Domain-specific swarms", "Cross-agent communication", "Consensus protocols"]
    },
    {
        phase: "04",
        name: "Verified Generation",
        icon: Shield,
        desc: "Critic agents validate outputs through iterative refinement loops.",
        details: ["Completeness check", "Factual grounding", "Citation linking"]
    },
    {
        phase: "05",
        name: "Human Validation",
        icon: Users,
        desc: "Expert review before delivery. Zero hallucination guarantee.",
        details: ["Engineer approval", "Quality assurance", "Audit trail"]
    },
];

// MCP + A2A Features
const protocolFeatures = [
    { title: "Context Management", desc: "MCP eliminates 1,200+ daily context switches for developers" },
    { title: "Tool Standardization", desc: "Universal interface for LLMs to interact with external systems" },
    { title: "Agent Interoperability", desc: "A2A enables cross-platform agent communication" },
    { title: "Enterprise Security", desc: "Built on OpenAPI authentication with audit logging" },
];

export default function MethodologyPage() {
    return (
        <div className="min-h-screen bg-mesh pt-8">
            <div className="section-container !pt-6 !pb-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-10"
                >
                    <div className="font-section mb-4">Methodology</div>
                    <h1 className="font-heading text-display mb-6">
                        Agentic RAG.
                        <br />
                        <span className="gradient-text">Beyond Static Retrieval.</span>
                    </h1>
                    <p className="text-body-lg text-text-secondary">
                        Traditional RAG is linear. Agentic RAG introduces autonomous
                        decision-making at every stage with MCP + A2A protocol integration.
                    </p>
                </motion.div>

                {/* Workflow Phases */}
                <div className="space-y-6 mb-20">
                    {agenticWorkflow.map((phase, index) => (
                        <motion.div
                            key={phase.phase}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="feature-card"
                        >
                            <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
                                <div className="md:col-span-2 flex items-start gap-4">
                                    <div className="font-terminal text-3xl font-bold text-accent-blue">
                                        {phase.phase}
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                                        <phase.icon className="w-6 h-6 text-accent-blue" />
                                    </div>
                                </div>

                                <div className="md:col-span-5">
                                    <h3 className="font-heading text-title mb-3">{phase.name}</h3>
                                    <p className="text-text-secondary leading-relaxed">{phase.desc}</p>
                                </div>

                                <div className="md:col-span-5">
                                    <div className="space-y-2">
                                        {phase.details.map((detail) => (
                                            <div key={detail} className="flex items-center gap-3">
                                                <Check className="w-4 h-4 text-accent-emerald flex-shrink-0" />
                                                <span className="text-text-secondary text-sm">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Protocol Section */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <div className="font-section mb-4">Protocol Integration</div>
                        <h2 className="font-heading text-headline mb-4">
                            MCP + A2A Native
                        </h2>
                        <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
                            Built on Anthropic&apos;s Model Context Protocol and Google&apos;s Agent2Agent standard.
                        </p>
                    </div>

                    <div className="grid-2">
                        {protocolFeatures.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="surface-card p-6"
                            >
                                <h4 className="font-heading text-lg text-text-primary mb-2">{feature.title}</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Continuous Learning */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="feature-card flex flex-col lg:flex-row items-start gap-6 mb-16"
                >
                    <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                        <RefreshCw className="w-8 h-8 text-accent-blue" />
                    </div>
                    <div>
                        <h3 className="font-heading text-headline mb-4">Continuous Learning Loop</h3>
                        <p className="text-text-secondary text-body-lg leading-relaxed mb-6">
                            Our agents don&apos;t just execute—they learn. Every interaction feeds back
                            into the knowledge base, improving retrieval accuracy over time.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="badge badge-active">Feedback Integration</span>
                            <span className="badge badge-active">Knowledge Refinement</span>
                            <span className="badge badge-active">Performance Optimization</span>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center py-16 border-t border-glass-border"
                >
                    <h2 className="font-heading text-headline mb-4">See It In Action</h2>
                    <p className="text-text-secondary text-body-lg mb-8 max-w-lg mx-auto">
                        Explore our reference architecture or request a custom study.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/protocols">
                            <button className="btn-primary">
                                View Zone IQ™ Architecture
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                        <Link href="/access">
                            <button className="btn-secondary">Request Study</button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
