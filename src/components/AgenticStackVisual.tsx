"use client";

import { motion } from "framer-motion";

// Wireframe-style agentic AI stack visualization
export default function AgenticStackVisual() {
    return (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] lg:w-[700px] xl:w-[800px] h-[500px] lg:h-[600px] pointer-events-none select-none">
            {/* Fade mask - fades left edge into background */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: "linear-gradient(to right, var(--bg-primary) 0%, transparent 30%)"
                }}
            />

            <svg
                viewBox="0 0 500 400"
                className="w-full h-full opacity-40"
                style={{ filter: "drop-shadow(0 0 30px rgba(0, 102, 255, 0.05))" }}
            >
                <defs>
                    {/* Grid pattern */}
                    <pattern id="heroGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(0, 102, 255, 0.06)" strokeWidth="0.5" />
                    </pattern>

                    {/* Dot pattern */}
                    <pattern id="heroDots" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="rgba(0, 102, 255, 0.1)" />
                    </pattern>
                </defs>

                {/* Background patterns */}
                <rect width="500" height="400" fill="url(#heroGrid)" />
                <rect width="500" height="400" fill="url(#heroDots)" />

                {/* === ORCHESTRATOR LAYER === */}
                <motion.g
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <rect x="180" y="30" width="140" height="45" rx="4" fill="none" stroke="rgba(0, 102, 255, 0.3)" strokeWidth="1" strokeDasharray="4 2" />
                    <text x="250" y="50" textAnchor="middle" fill="rgba(0, 102, 255, 0.5)" fontSize="8" fontFamily="var(--font-mono)">ORCHESTRATOR</text>
                    <text x="250" y="64" textAnchor="middle" fill="rgba(148, 163, 184, 0.4)" fontSize="6" fontFamily="var(--font-mono)">Semantic Kernel</text>
                </motion.g>

                {/* Vertical connection lines */}
                <motion.g
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <line x1="250" y1="75" x2="250" y2="110" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1" />
                    <line x1="250" y1="110" x2="120" y2="140" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1" />
                    <line x1="250" y1="110" x2="250" y2="140" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1" />
                    <line x1="250" y1="110" x2="380" y2="140" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1" />
                </motion.g>

                {/* === AGENT LAYER === */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                >
                    {/* Agent 1 */}
                    <rect x="70" y="140" width="100" height="50" rx="4" fill="rgba(139, 92, 246, 0.05)" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" />
                    <text x="120" y="162" textAnchor="middle" fill="rgba(139, 92, 246, 0.5)" fontSize="7" fontFamily="var(--font-mono)">RETRIEVER</text>
                    <text x="120" y="176" textAnchor="middle" fill="rgba(148, 163, 184, 0.3)" fontSize="5" fontFamily="var(--font-mono)">RAG Agent</text>

                    {/* Agent 2 */}
                    <rect x="200" y="140" width="100" height="50" rx="4" fill="rgba(0, 102, 255, 0.05)" stroke="rgba(0, 102, 255, 0.25)" strokeWidth="1" />
                    <text x="250" y="162" textAnchor="middle" fill="rgba(0, 102, 255, 0.5)" fontSize="7" fontFamily="var(--font-mono)">ANALYZER</text>
                    <text x="250" y="176" textAnchor="middle" fill="rgba(148, 163, 184, 0.3)" fontSize="5" fontFamily="var(--font-mono)">LLM Reasoning</text>

                    {/* Agent 3 */}
                    <rect x="330" y="140" width="100" height="50" rx="4" fill="rgba(16, 185, 129, 0.05)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />
                    <text x="380" y="162" textAnchor="middle" fill="rgba(16, 185, 129, 0.5)" fontSize="7" fontFamily="var(--font-mono)">EXECUTOR</text>
                    <text x="380" y="176" textAnchor="middle" fill="rgba(148, 163, 184, 0.3)" fontSize="5" fontFamily="var(--font-mono)">MCP Actions</text>
                </motion.g>

                {/* Connection to MCP */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                >
                    <line x1="120" y1="190" x2="120" y2="230" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="1" />
                    <line x1="250" y1="190" x2="250" y2="230" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="1" />
                    <line x1="380" y1="190" x2="380" y2="230" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="1" />
                </motion.g>

                {/* === MCP LAYER === */}
                <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                >
                    <rect x="70" y="230" width="360" height="40" rx="4" fill="rgba(16, 185, 129, 0.03)" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
                    <text x="250" y="250" textAnchor="middle" fill="rgba(16, 185, 129, 0.4)" fontSize="8" fontFamily="var(--font-mono)">MCP SERVER</text>
                    <text x="250" y="263" textAnchor="middle" fill="rgba(148, 163, 184, 0.3)" fontSize="5" fontFamily="var(--font-mono)">Tools • Context • Resources</text>
                </motion.g>

                {/* === CONTEXT & MEMORY === */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                >
                    {/* Vector Store */}
                    <rect x="100" y="300" width="90" height="35" rx="4" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" strokeDasharray="3 2" />
                    <text x="145" y="318" textAnchor="middle" fill="rgba(245, 158, 11, 0.35)" fontSize="6" fontFamily="var(--font-mono)">VECTOR STORE</text>
                    <text x="145" y="328" textAnchor="middle" fill="rgba(148, 163, 184, 0.25)" fontSize="5" fontFamily="var(--font-mono)">Pinecone</text>

                    {/* Context Memory */}
                    <rect x="210" y="300" width="80" height="35" rx="4" fill="none" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="0.5" strokeDasharray="3 2" />
                    <text x="250" y="318" textAnchor="middle" fill="rgba(148, 163, 184, 0.3)" fontSize="6" fontFamily="var(--font-mono)">CONTEXT</text>
                    <text x="250" y="328" textAnchor="middle" fill="rgba(148, 163, 184, 0.25)" fontSize="5" fontFamily="var(--font-mono)">Memory</text>

                    {/* State */}
                    <rect x="310" y="300" width="80" height="35" rx="4" fill="none" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="0.5" strokeDasharray="3 2" />
                    <text x="350" y="318" textAnchor="middle" fill="rgba(148, 163, 184, 0.3)" fontSize="6" fontFamily="var(--font-mono)">STATE</text>
                    <text x="350" y="328" textAnchor="middle" fill="rgba(148, 163, 184, 0.25)" fontSize="5" fontFamily="var(--font-mono)">Persistence</text>
                </motion.g>

                {/* === ANIMATED DATA PULSES === */}
                <motion.circle
                    r="3"
                    fill="#0066FF"
                    initial={{ cx: 250, cy: 75, opacity: 0 }}
                    animate={{
                        cx: [250, 250, 120],
                        cy: [75, 110, 140],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
                />
                <motion.circle
                    r="3"
                    fill="#0066FF"
                    initial={{ cx: 250, cy: 75, opacity: 0 }}
                    animate={{
                        cx: [250, 250, 380],
                        cy: [75, 110, 140],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 2.8 }}
                />
                <motion.circle
                    r="2.5"
                    fill="#10B981"
                    initial={{ cx: 250, cy: 190, opacity: 0 }}
                    animate={{
                        cy: [190, 230],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 3.5 }}
                />

                {/* Protocol labels */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                >
                    <rect x="420" y="145" width="30" height="14" rx="7" fill="rgba(139, 92, 246, 0.1)" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="0.5" />
                    <text x="435" y="155" textAnchor="middle" fill="rgba(139, 92, 246, 0.5)" fontSize="5" fontFamily="var(--font-mono)">A2A</text>

                    <rect x="420" y="235" width="30" height="14" rx="7" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.5" />
                    <text x="435" y="245" textAnchor="middle" fill="rgba(16, 185, 129, 0.5)" fontSize="5" fontFamily="var(--font-mono)">MCP</text>
                </motion.g>
            </svg>
        </div>
    );
}
