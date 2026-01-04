"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag, ChevronRight, Check, Mail } from "lucide-react";

// Research Articles
const articles = [
    {
        id: "agentic-rag-enterprise",
        title: "Agentic RAG: Why Static Retrieval Fails Enterprise AI",
        excerpt: "Generic LLMs lack context. Standard RAG is inflexible. Agentic RAG introduces autonomous decision-making at every stage—from intelligent indexing to verified generation.",
        date: "2026-01-03",
        readTime: "8 min",
        tags: ["Agentic RAG", "Enterprise AI", "Architecture"],
        featured: true
    },
    {
        id: "a2a-protocol-interoperability",
        title: "A2A Protocol: The Future of Agent Interoperability",
        excerpt: "Google's Agent2Agent protocol enables agents to communicate regardless of vendor or framework. We explore how A2A changes multi-agent orchestration.",
        date: "2026-01-02",
        readTime: "6 min",
        tags: ["A2A Protocol", "Multi-Agent", "Standards"]
    },
    {
        id: "sovereign-context",
        title: "Sovereign Context: Private Knowledge Graphs for Enterprise",
        excerpt: "Your data is your competitive advantage. Learn how sovereign RAG systems ground AI in proprietary knowledge without data leakage.",
        date: "2025-12-28",
        readTime: "5 min",
        tags: ["Sovereign RAG", "Privacy", "Knowledge Graphs"]
    },
    {
        id: "human-in-the-loop",
        title: "Human-in-the-Loop: Zero Hallucination Architecture",
        excerpt: "AI speed with human accountability. How we design validation loops that guarantee output accuracy for high-stakes decisions.",
        date: "2025-12-20",
        readTime: "7 min",
        tags: ["Validation", "Quality Assurance", "Methodology"]
    },
];

export default function ResearchPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const featuredArticle = articles.find(a => a.featured);
    const otherArticles = articles.filter(a => !a.featured);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.details || data.error || 'Failed to subscribe');
            }

            setIsSubscribed(true);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to subscribe';
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-mesh pt-32">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16"
                >
                    <div className="font-section mb-4">R&D Insights</div>
                    <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-6">
                        Research & Development
                    </h1>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        Technical deep-dives into agentic architectures, multi-agent
                        orchestration, and enterprise AI deployment patterns.
                    </p>
                </motion.div>

                {/* Featured Article */}
                {featuredArticle && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="surface-card p-8 md:p-12 hover:shadow-lg transition-shadow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {featuredArticle.tags.map(tag => (
                                    <span key={tag} className="badge badge-active text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className="font-heading text-2xl md:text-3xl text-text-primary mb-4">
                                {featuredArticle.title}
                            </h2>
                            <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                {featuredArticle.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-text-tertiary text-sm">
                                    <span>{featuredArticle.date}</span>
                                    <span>·</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {featuredArticle.readTime}
                                    </span>
                                </div>
                                <button className="btn-ghost text-accent-blue">
                                    Read Article
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {otherArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="surface-card p-6 flex flex-col"
                        >
                            <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="badge text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="font-heading text-lg text-text-primary mb-3 flex-grow">
                                {article.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-text-tertiary text-xs mt-auto pt-4 border-t border-glass-border">
                                <span>{article.date}</span>
                                <span>·</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {article.readTime}
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="surface-card p-8 md:p-12 text-center"
                >
                    {isSubscribed ? (
                        <div className="py-4">
                            <div className="w-16 h-16 rounded-full bg-accent-emerald/10 flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8 text-accent-emerald" />
                            </div>
                            <h2 className="font-heading text-2xl text-text-primary mb-2">
                                You&apos;re Subscribed!
                            </h2>
                            <p className="text-text-secondary">
                                We&apos;ll notify you when we publish new research.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-6 h-6 text-accent-blue" />
                            </div>
                            <h2 className="font-heading text-2xl text-text-primary mb-4">
                                Stay Updated
                            </h2>
                            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                                Get notified when we publish new research on agentic architectures
                                and enterprise AI patterns.
                            </p>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="input-field flex-1 bg-bg-surface/50 border-glass-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50"
                                />
                                <button
                                    type="submit"
                                    className="btn-primary whitespace-nowrap"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        'Subscribe'
                                    )}
                                </button>
                            </form>
                            {error && (
                                <p className="text-red-400 text-sm mt-4">{error}</p>
                            )}
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
