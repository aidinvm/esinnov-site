"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, Database, Brain, Shield, Network,
    Check, Code, Zap
} from "lucide-react";

// Integration Stack
const integrationStack = [
    { name: "LangChain", category: "Orchestration" },
    { name: "n8n", category: "Workflows" },
    { name: "Pinecone", category: "Vector DB" },
    { name: "Supabase", category: "Backend" },
    { name: "OpenAI", category: "LLM" },
    { name: "Anthropic", category: "LLM" },
    { name: "Google AI", category: "LLM" },
    { name: "PostgreSQL", category: "Database" },
];

// Zone IQ Layers
const architectureLayers = [
    {
        name: "Ingestion Layer",
        desc: "Autonomous parsing of 400+ municipal bylaw documents, zoning maps, and regulatory codes. MCP-enabled tool integration.",
        tech: ["PDF Parser", "OCR Engine", "MCP Server"]
    },
    {
        name: "Context Layer",
        desc: "Sovereign RAG with geospatial embeddings. Private vector store with semantic + location awareness.",
        tech: ["Pinecone", "PostGIS", "Custom Embeddings"]
    },
    {
        name: "Reasoning Layer",
        desc: "Multi-agent swarm: Compliance Agent, Risk Agent, Opportunity Agent working in parallel via A2A protocol.",
        tech: ["LangChain", "GPT-4", "Claude", "A2A"]
    },
    {
        name: "Validation Layer",
        desc: "Critic agents verify outputs. Human engineer final approval before delivery. Full audit trail.",
        tech: ["Validation Loop", "Human-in-Loop", "Audit Log"]
    },
];

const outputs = [
    "Pre-construction risk score",
    "Zoning compliance matrix",
    "Development potential analysis",
    "Regulatory flag report"
];

export default function ArchitecturePage() {
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
                    <div className="font-section mb-4">Reference Architecture</div>
                    <h1 className="font-heading text-display mb-6">
                        Zone IQ™ Architecture
                    </h1>
                    <p className="text-body-lg text-text-secondary">
                        Multi-agent geospatial reasoning engine with MCP + A2A protocol
                        integration. A deep dive into how we build intelligent systems.
                    </p>
                </motion.div>

                {/* Architecture Layers */}
                <div className="space-y-6 mb-20">
                    {architectureLayers.map((layer, index) => (
                        <motion.div
                            key={layer.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="feature-card"
                        >
                            <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
                                <div className="md:col-span-3">
                                    <div className="font-terminal text-accent-blue text-sm font-bold mb-2">
                                        LAYER {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="font-heading text-title text-text-primary">
                                        {layer.name}
                                    </h3>
                                </div>
                                <div className="md:col-span-5">
                                    <p className="text-text-secondary leading-relaxed">
                                        {layer.desc}
                                    </p>
                                </div>
                                <div className="md:col-span-4">
                                    <div className="font-terminal text-text-tertiary text-xs mb-2">
                                        TECH STACK
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {layer.tech.map((t) => (
                                            <span key={t} className="badge text-xs">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Outputs */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-heading text-headline mb-8">Deliverables</h2>
                    <div className="grid-2">
                        {outputs.map((output) => (
                            <div
                                key={output}
                                className="flex items-center gap-4 p-5 rounded-xl bg-bg-surface border border-glass-border"
                            >
                                <div className="w-10 h-10 rounded-lg bg-accent-emerald/10 flex items-center justify-center">
                                    <Check className="w-5 h-5 text-accent-emerald" />
                                </div>
                                <span className="text-text-primary font-medium">{output}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Integration Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="font-heading text-headline mb-4">Integration Stack</h2>
                    <p className="text-text-secondary text-body-lg mb-8">
                        We build on battle-tested infrastructure with MCP-enabled tooling.
                    </p>
                    <div className="grid-4">
                        {integrationStack.map((tool, i) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="surface-card p-4 text-center"
                            >
                                <div className="font-medium text-text-primary">{tool.name}</div>
                                <div className="font-terminal text-text-tertiary text-xs mt-1">{tool.category}</div>
                            </motion.div>
                        ))}
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
                    <h2 className="font-heading text-headline mb-4">
                        Want a Custom Architecture?
                    </h2>
                    <p className="text-text-secondary text-body-lg mb-8 max-w-lg mx-auto">
                        Every use case is unique. Let&apos;s design an agent architecture for your domain.
                    </p>
                    <Link href="/access">
                        <button className="btn-primary">
                            Request Architecture Review
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
