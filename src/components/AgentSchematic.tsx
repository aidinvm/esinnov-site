"use client";

import { motion } from "framer-motion";

export default function AgentSchematic() {
    return (
        <div className="relative w-full">
            {/* Canvas Container - Fully responsive, no scroll */}
            <div className="bg-[#0f0f1a] rounded-lg border border-glass-border overflow-hidden">
                {/* SVG Flowchart - Scales to fit */}
                <svg
                    viewBox="0 0 1000 520"
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* Background Pattern */}
                        <pattern id="dotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                            <circle cx="8" cy="8" r="0.8" fill="rgba(255,255,255,0.06)" />
                        </pattern>

                        {/* Line Glow */}
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="1" result="blur" />
                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>

                        {/* Arrow */}
                        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
                        </marker>

                        {/* Node Gradient */}
                        <linearGradient id="nodeG" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1e1e2e" />
                            <stop offset="100%" stopColor="#16161f" />
                        </linearGradient>
                    </defs>

                    {/* Background */}
                    <rect width="100%" height="100%" fill="#0f0f1a" />
                    <rect width="100%" height="100%" fill="url(#dotGrid)" />

                    {/* ===== AGENTIC RAG FLOW ===== */}
                    <g filter="url(#glow)">
                        {/* User Query → Query Classifier */}
                        <Line d="M 95 260 L 150 260" delay={0} />

                        {/* Query Classifier → Router */}
                        <Line d="M 260 260 L 310 260" delay={0.1} />

                        {/* Router branches to 4 strategies */}
                        <Line d="M 420 260 L 450 260 Q 470 260 470 180 L 470 80 Q 470 60 490 60 L 520 60" delay={0.2} />
                        <Line d="M 420 260 L 450 260 Q 470 260 470 200 L 470 170 Q 470 150 490 150 L 520 150" delay={0.2} />
                        <Line d="M 420 260 L 450 260 Q 470 260 470 320 L 470 350 Q 470 370 490 370 L 520 370" delay={0.2} />
                        <Line d="M 420 260 L 450 260 Q 470 260 470 400 L 470 450 Q 470 470 490 470 L 520 470" delay={0.2} />

                        {/* Query Adapters to Retrieval Tools */}
                        <Line d="M 630 60 L 680 60" delay={0.3} />
                        <Line d="M 630 150 L 680 150" delay={0.3} />
                        <Line d="M 630 370 L 680 370" delay={0.3} />
                        <Line d="M 630 470 L 680 470" delay={0.3} />

                        {/* Retrieval Tools to Context Merger */}
                        <Line d="M 790 60 L 820 60 Q 840 60 840 120 L 840 240 Q 840 260 860 260 L 890 260" delay={0.4} />
                        <Line d="M 790 150 L 820 150 Q 840 150 840 200 L 840 240 Q 840 260 860 260 L 890 260" delay={0.4} />
                        <Line d="M 790 370 L 820 370 Q 840 370 840 320 L 840 280 Q 840 260 860 260 L 890 260" delay={0.4} />
                        <Line d="M 790 470 L 820 470 Q 840 470 840 380 L 840 280 Q 840 260 860 260 L 890 260" delay={0.4} />

                        {/* Context Merger → Answer Generator */}
                        <Line d="M 950 240 L 950 180 Q 950 160 930 160 L 580 160" delay={0.5} />

                        {/* Answer Generator → Answer Critic */}
                        <Line d="M 470 160 L 420 160 Q 400 160 400 180 L 400 195" delay={0.55} />

                        {/* Answer Critic → Decision (loop or output) */}
                        <Line d="M 400 260 L 400 320 Q 400 340 380 340 L 250 340 Q 230 340 230 320 L 230 280" delay={0.6} />

                        {/* Decision → Final Output */}
                        <Line d="M 350 240 L 300 240 Q 280 240 280 280 L 280 400 Q 280 420 300 420 L 890 420" delay={0.65} />
                    </g>

                    {/* ===== NODES ===== */}

                    {/* Input */}
                    <Node x={40} y={235} w={90} h={45} label="User Query" sub="Input Stream" color="#F59E0B" delay={0} />

                    {/* Query Classifier */}
                    <Node x={160} y={235} w={90} h={45} label="Query Classifier" sub="Intent Analysis" color="#3B82F6" delay={0.05} />

                    {/* Retriever Router */}
                    <Node x={320} y={235} w={90} h={45} label="Retriever Router" sub="Strategy Select" color="#10B981" delay={0.1} />

                    {/* Query Adapters (4 strategies) */}
                    <Node x={530} y={40} w={90} h={35} label="Factual Adapter" sub="Precision" color="#06B6D4" delay={0.2} small />
                    <Node x={530} y={130} w={90} h={35} label="Analytical Adapter" sub="Sub-queries" color="#06B6D4" delay={0.22} small />
                    <Node x={530} y={350} w={90} h={35} label="Opinion Adapter" sub="Viewpoints" color="#06B6D4" delay={0.24} small />
                    <Node x={530} y={450} w={90} h={35} label="Context Adapter" sub="Expansion" color="#06B6D4" delay={0.26} small />

                    {/* Retrieval Tools */}
                    <Node x={690} y={40} w={90} h={35} label="Vector Store" sub="RAG DB" color="#8B5CF6" delay={0.3} small />
                    <Node x={690} y={130} w={90} h={35} label="SQL Database" sub="Structured" color="#8B5CF6" delay={0.32} small />
                    <Node x={690} y={350} w={90} h={35} label="Web Search" sub="Real-time" color="#8B5CF6" delay={0.34} small />
                    <Node x={690} y={450} w={90} h={35} label="Graph RAG" sub="Knowledge" color="#8B5CF6" delay={0.36} small />

                    {/* Context Merger */}
                    <Node x={900} y={235} w={80} h={45} label="Context Merge" sub="Aggregate" color="#10B981" delay={0.45} />

                    {/* Answer Generator */}
                    <Node x={480} y={245} w={90} h={45} label="LLM Generator" sub="Compose" color="#EC4899" delay={0.5} />

                    {/* Answer Critic */}
                    <Node x={350} y={305} w={90} h={55} label="Answer Critic" sub="Verify Loop" color="#EF4444" delay={0.55} isCritic />

                    {/* Final Output */}
                    <Node x={900} y={395} w={80} h={45} label="Output" sub="Verified" color="#10B981" delay={0.7} isOutput />

                    {/* Layer Labels */}
                    <text x="15" y="25" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="600">QUERY CLASSIFICATION</text>
                    <text x="500" y="25" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="600">DYNAMIC RETRIEVAL</text>
                    <text x="15" y="400" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="600">VERIFIED GENERATION</text>

                    {/* Loop indicator */}
                    <text x="240" y="365" fill="#EF4444" fontSize="7" fontFamily="monospace">RETRY LOOP</text>

                </svg>

                {/* Status Bar */}
                <div className="bg-[#0a0a12] border-t border-glass-border px-3 py-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <motion.span
                            className="w-1.5 h-1.5 bg-signal-emerald rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="font-mono text-[10px] text-text-dim">AGENTIC_RAG_ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[9px]">
                        <span className="text-text-dim">AGENTS: <span className="text-studio-amber">12</span></span>
                        <span className="text-text-dim">TOOLS: <span className="text-signal-emerald">4</span></span>
                        <span className="text-text-dim hidden sm:inline">CRITIC: <span className="text-text-primary">ENABLED</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Animated Connection Line
function Line({ d, delay }: { d: string; delay: number }) {
    return (
        <motion.path
            d={d}
            stroke="#475569"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arr)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay }}
        />
    );
}

// Workflow Node
function Node({
    x, y, w, h,
    label, sub, color,
    delay,
    small = false,
    isOutput = false,
    isCritic = false
}: {
    x: number; y: number; w: number; h: number;
    label: string; sub: string; color: string;
    delay: number;
    small?: boolean;
    isOutput?: boolean;
    isCritic?: boolean;
}) {
    return (
        <motion.g
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay }}
        >
            {/* Shadow */}
            <rect x={x + 1} y={y + 1} width={w} height={h} rx="6" fill="rgba(0,0,0,0.4)" />

            {/* Body */}
            <rect
                x={x} y={y} width={w} height={h} rx="6"
                fill="url(#nodeG)"
                stroke={isOutput || isCritic ? color : "rgba(255,255,255,0.08)"}
                strokeWidth={isOutput || isCritic ? "1.5" : "1"}
            />

            {/* Icon Block */}
            <rect x={x + w / 2 - 10} y={y + (small ? 4 : 6)} width="20" height="14" rx="3" fill={color} opacity="0.2" />
            <rect x={x + w / 2 - 6} y={y + (small ? 6 : 8)} width="12" height="10" rx="2" fill={color} />

            {/* Label */}
            <text x={x + w / 2} y={y + h - (small ? 8 : 12)} textAnchor="middle" fill="#E2E8F0" fontSize={small ? "7" : "8"} fontFamily="monospace" fontWeight="500">
                {label}
            </text>

            {/* Sublabel */}
            <text x={x + w / 2} y={y + h - (small ? 2 : 4)} textAnchor="middle" fill="#64748B" fontSize={small ? "5" : "6"} fontFamily="monospace">
                {sub}
            </text>

            {/* Connectors */}
            <circle cx={x} cy={y + h / 2} r="3" fill="#0f0f1a" stroke="#475569" strokeWidth="1" />
            <circle cx={x + w} cy={y + h / 2} r="3" fill="#0f0f1a" stroke={color} strokeWidth="1" />

            {/* Output/Critic Glow */}
            {(isOutput || isCritic) && (
                <motion.rect
                    x={x - 2} y={y - 2} width={w + 4} height={h + 4} rx="8"
                    fill="none" stroke={color} strokeWidth="1" opacity="0.4"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
        </motion.g>
    );
}
