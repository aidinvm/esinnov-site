"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Based on Microsoft Multi-Agent Architecture
// Continuous data flow between all components using cx/cy animation

export default function MultiAgentAnimation() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Animated pulse component that moves between two points
    const AnimatedPulse = ({
        x1, y1, x2, y2, delay, color = "#0066FF"
    }: {
        x1: number; y1: number; x2: number; y2: number; delay: number; color?: string
    }) => (
        <motion.circle
            r="2.5"
            fill={color}
            filter="url(#glowBlue)"
            initial={{ cx: x1, cy: y1, opacity: 0 }}
            animate={{
                cx: [x1, x2],
                cy: [y1, y2],
                opacity: [0, 1, 1, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
            }}
        />
    );

    return (
        <div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-accent-blue/8 via-transparent to-transparent" />

            <svg
                viewBox="0 0 400 280"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 0 30px rgba(0, 102, 255, 0.1))" }}
            >
                <defs>
                    {/* Grid pattern */}
                    <pattern id="futureGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 102, 255, 0.08)" strokeWidth="0.5" />
                    </pattern>

                    {/* Dot pattern */}
                    <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="rgba(0, 102, 255, 0.15)" />
                    </pattern>

                    {/* Glow filters */}
                    <filter id="glowBlue">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="glowStrong">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background layers */}
                <rect width="400" height="280" fill="url(#futureGrid)" />
                <rect width="400" height="280" fill="url(#dots)" />

                {/* === LAYER LABELS === */}
                <text x="20" y="25" fill="rgba(148, 163, 184, 0.4)" fontSize="8" fontFamily="var(--font-mono)">
                    ORCHESTRATION LAYER
                </text>
                <text x="20" y="115" fill="rgba(148, 163, 184, 0.4)" fontSize="8" fontFamily="var(--font-mono)">
                    AGENT LAYER
                </text>
                <text x="20" y="205" fill="rgba(148, 163, 184, 0.4)" fontSize="8" fontFamily="var(--font-mono)">
                    INTEGRATION LAYER
                </text>

                {/* Layer separator lines */}
                <line x1="15" y1="100" x2="385" y2="100" stroke="rgba(0, 102, 255, 0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="15" y1="190" x2="385" y2="190" stroke="rgba(0, 102, 255, 0.1)" strokeWidth="0.5" strokeDasharray="4 4" />

                {/* === STATIC CONNECTION PATHS === */}
                {/* Orchestrator to Classifier */}
                <path d="M 120 60 L 160 60" fill="none" stroke="rgba(0, 102, 255, 0.2)" strokeWidth="1" />
                {/* Classifier to Registry */}
                <path d="M 240 60 L 290 60" fill="none" stroke="rgba(0, 102, 255, 0.2)" strokeWidth="1" />
                {/* Orchestrator to Agents */}
                <path d="M 70 80 L 70 125" fill="none" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1" />
                <path d="M 90 80 L 160 80 L 160 125" fill="none" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1" />
                <path d="M 90 80 L 240 80 L 240 125" fill="none" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1" />
                <path d="M 90 80 L 320 80 L 320 125" fill="none" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1" />
                {/* Agents to MCP */}
                <path d="M 80 165 L 80 220" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
                <path d="M 160 165 L 160 220" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
                <path d="M 240 165 L 240 220" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
                <path d="M 320 165 L 320 220" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />

                {/* === CONTINUOUS ANIMATED DATA FLOWS === */}
                {/* Orchestrator to Classifier */}
                <AnimatedPulse x1={120} y1={60} x2={160} y2={60} delay={0} />
                {/* Classifier to Registry */}
                <AnimatedPulse x1={240} y1={60} x2={290} y2={60} delay={0.3} color="#8B5CF6" />
                {/* Orchestrator to Agent 1 */}
                <AnimatedPulse x1={70} y1={80} x2={70} y2={125} delay={0.5} />
                {/* Orchestrator to Agent 2 */}
                <AnimatedPulse x1={90} y1={80} x2={160} y2={125} delay={0.8} />
                {/* Orchestrator to Agent 3 */}
                <AnimatedPulse x1={90} y1={80} x2={240} y2={125} delay={1.1} />
                {/* Orchestrator to Agent 4 */}
                <AnimatedPulse x1={90} y1={80} x2={320} y2={125} delay={1.4} />
                {/* Agent 1 to MCP */}
                <AnimatedPulse x1={80} y1={165} x2={80} y2={220} delay={1.8} color="#10B981" />
                {/* Agent 2 to MCP */}
                <AnimatedPulse x1={160} y1={165} x2={160} y2={220} delay={2.0} color="#10B981" />
                {/* Agent 3 to MCP */}
                <AnimatedPulse x1={240} y1={165} x2={240} y2={220} delay={2.2} color="#10B981" />
                {/* Agent 4 to MCP */}
                <AnimatedPulse x1={320} y1={165} x2={320} y2={220} delay={2.4} color="#10B981" />

                {/* === ORCHESTRATOR NODE === */}
                <g
                    onMouseEnter={() => setHoveredNode("orchestrator")}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: "pointer" }}
                >
                    <motion.rect
                        x="30" y="40" width="90" height="40" rx="4"
                        fill="rgba(0, 102, 255, 0.08)"
                        stroke="#0066FF"
                        strokeWidth={hoveredNode === "orchestrator" ? "2" : "1"}
                        filter={hoveredNode === "orchestrator" ? "url(#glowStrong)" : "none"}
                    />
                    <text x="75" y="55" textAnchor="middle" fill="#0066FF" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600">
                        ORCHESTRATOR
                    </text>
                    <text x="75" y="68" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="6" fontFamily="var(--font-mono)">
                        Semantic Kernel
                    </text>
                    {/* Pulse indicator */}
                    <motion.circle
                        cx="115" cy="45" r="3"
                        fill="#10B981"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </g>

                {/* === CLASSIFIER NODE === */}
                <g
                    onMouseEnter={() => setHoveredNode("classifier")}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: "pointer" }}
                >
                    <motion.rect
                        x="160" y="40" width="80" height="40" rx="4"
                        fill="rgba(139, 92, 246, 0.08)"
                        stroke="#8B5CF6"
                        strokeWidth={hoveredNode === "classifier" ? "2" : "1"}
                        filter={hoveredNode === "classifier" ? "url(#glowStrong)" : "none"}
                    />
                    <text x="200" y="55" textAnchor="middle" fill="#8B5CF6" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600">
                        CLASSIFIER
                    </text>
                    <text x="200" y="68" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="6" fontFamily="var(--font-mono)">
                        NLU → SLM → LLM
                    </text>
                </g>

                {/* === REGISTRY NODE === */}
                <g
                    onMouseEnter={() => setHoveredNode("registry")}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: "pointer" }}
                >
                    <motion.rect
                        x="290" y="40" width="90" height="40" rx="4"
                        fill="rgba(245, 158, 11, 0.08)"
                        stroke="#F59E0B"
                        strokeWidth={hoveredNode === "registry" ? "2" : "1"}
                        filter={hoveredNode === "registry" ? "url(#glowStrong)" : "none"}
                    />
                    <text x="335" y="55" textAnchor="middle" fill="#F59E0B" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600">
                        AGENT REGISTRY
                    </text>
                    <text x="335" y="68" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="6" fontFamily="var(--font-mono)">
                        Discovery + Validation
                    </text>
                </g>

                {/* === DOMAIN AGENTS === */}
                {[
                    { id: "agent1", x: 80, label: "AGENT 01", sub: "Domain Expert" },
                    { id: "agent2", x: 160, label: "AGENT 02", sub: "Analyzer" },
                    { id: "agent3", x: 240, label: "AGENT 03", sub: "Validator" },
                    { id: "agent4", x: 320, label: "AGENT 04", sub: "Executor" },
                ].map((agent) => (
                    <g
                        key={agent.id}
                        onMouseEnter={() => setHoveredNode(agent.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        style={{ cursor: "pointer" }}
                    >
                        <motion.rect
                            x={agent.x - 35} y="125" width="70" height="40" rx="4"
                            fill="rgba(0, 102, 255, 0.05)"
                            stroke="rgba(0, 102, 255, 0.5)"
                            strokeWidth={hoveredNode === agent.id ? "2" : "1"}
                            strokeDasharray={hoveredNode === agent.id ? "0" : "4 2"}
                            filter={hoveredNode === agent.id ? "url(#glowBlue)" : "none"}
                        />
                        <text x={agent.x} y="142" textAnchor="middle" fill="rgba(0, 102, 255, 0.8)" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600">
                            {agent.label}
                        </text>
                        <text x={agent.x} y="155" textAnchor="middle" fill="rgba(148, 163, 184, 0.5)" fontSize="5" fontFamily="var(--font-mono)">
                            {agent.sub}
                        </text>
                        {/* MCP badge */}
                        <rect x={agent.x - 12} y="158" width="24" height="10" rx="2" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.5" />
                        <text x={agent.x} y="165" textAnchor="middle" fill="#10B981" fontSize="5" fontFamily="var(--font-mono)">
                            MCP
                        </text>
                    </g>
                ))}

                {/* === MCP INTEGRATION LAYER === */}
                <g
                    onMouseEnter={() => setHoveredNode("mcp")}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: "pointer" }}
                >
                    <motion.rect
                        x="50" y="210" width="300" height="35" rx="4"
                        fill="rgba(16, 185, 129, 0.05)"
                        stroke="#10B981"
                        strokeWidth={hoveredNode === "mcp" ? "2" : "1"}
                        filter={hoveredNode === "mcp" ? "url(#glowStrong)" : "none"}
                    />
                    <text x="200" y="225" textAnchor="middle" fill="#10B981" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600">
                        MCP SERVER
                    </text>
                    <text x="200" y="238" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="5" fontFamily="var(--font-mono)">
                        Tools • Context • Resources • State
                    </text>
                </g>

                {/* === PROTOCOL BADGES === */}
                <g>
                    <rect x="340" y="125" width="45" height="18" rx="9" fill="rgba(139, 92, 246, 0.1)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.5" />
                    <text x="362" y="137" textAnchor="middle" fill="#8B5CF6" fontSize="6" fontFamily="var(--font-mono)" fontWeight="600">
                        A2A
                    </text>
                </g>
            </svg>
        </div>
    );
}
