"use client";

import { motion } from "framer-motion";

export default function DeploymentGap() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h3 className="font-section mb-3">THE LATENCY PROBLEM</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                    Traditional diligence is <span className="text-accent-risk">analog and slow</span> (3 weeks).
                    Market opportunities in Vancouver and Calgary are <span className="text-text-primary">ephemeral</span>.{" "}
                    Zone IQ™ utilizes Retrieval-Augmented Generation (RAG) to compress the pre-architectural cycle
                    from weeks to <span className="text-accent-terminal font-mono">milliseconds</span>.
                </p>
            </div>

            {/* Timeline Visualization */}
            <div className="space-y-8">
                {/* Traditional Track */}
                <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-terminal text-text-dim text-xs">ANALOG DILIGENCE</span>
                        <span className="font-data text-accent-risk text-sm">~504 HOURS</span>
                    </div>
                    <div className="relative h-3">
                        <div className="absolute inset-0 bg-void-lighter rounded-sm" />
                        <motion.div
                            className="absolute inset-y-0 left-0 timeline-track-traditional rounded-sm"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            viewport={{ once: true }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-terminal text-text-dim">
                        <span>T+0</span>
                        <span>WEEK 1</span>
                        <span>WEEK 2</span>
                        <span>WEEK 3</span>
                    </div>
                </div>

                {/* Zone IQ Track */}
                <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-terminal text-accent-terminal text-xs">ZONE IQ™ RAG INFERENCE</span>
                        <span className="font-data text-accent-terminal text-sm">~0.4 SECONDS</span>
                    </div>
                    <div className="relative h-3">
                        <div className="absolute inset-0 bg-void-lighter rounded-sm" />
                        <motion.div
                            className="absolute inset-y-0 left-0 w-1 timeline-track-zoneiq rounded-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                            viewport={{ once: true }}
                        />
                        {/* Pulse effect */}
                        <motion.div
                            className="absolute inset-y-0 left-0 w-1 bg-amber-500 rounded-sm"
                            animate={{ boxShadow: ["0 0 10px #F59E0B", "0 0 30px #F59E0B", "0 0 10px #F59E0B"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                    <div className="mt-2 text-xs font-terminal text-accent-terminal">
                        INSTANT INFERENCE // PARALLEL AGENT EXECUTION
                    </div>
                </div>

                {/* Latency Delta */}
                <motion.div
                    className="relative mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card p-6 text-center border-l-4 border-l-accent-terminal">
                        <div className="font-terminal text-text-dim text-xs mb-2">LATENCY REDUCTION</div>
                        <div className="font-data text-4xl text-accent-terminal mb-2">
                            4,536,000<span className="text-xl">×</span>
                        </div>
                        <p className="text-text-muted text-sm">
                            From 3 weeks to sub-second inference
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Tech Specs */}
            <motion.div
                className="mt-10 pt-6 border-t border-glass-border grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
            >
                <div className="text-center">
                    <div className="font-data text-2xl text-text-primary">RAG</div>
                    <div className="font-terminal text-text-dim text-xs mt-1">RETRIEVAL ENGINE</div>
                </div>
                <div className="text-center">
                    <div className="font-data text-2xl text-text-primary">400+</div>
                    <div className="font-terminal text-text-dim text-xs mt-1">BYLAW VECTORS</div>
                </div>
                <div className="text-center">
                    <div className="font-data text-2xl text-text-primary">MAS</div>
                    <div className="font-terminal text-text-dim text-xs mt-1">MULTI-AGENT SYSTEM</div>
                </div>
            </motion.div>
        </div>
    );
}
