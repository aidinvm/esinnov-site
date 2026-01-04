"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface VectorData {
    target: string;
    zone: string;
    status: string;
    conflictProbability: number;
    riskLevel: "CRITICAL" | "HIGH" | "MODERATE" | "LOW";
    computeTime: string;
    vectorCount: number;
}

const mockVectors: VectorData[] = [
    {
        target: "Vancouver",
        zone: "RM-4",
        status: "Inferencing...",
        conflictProbability: 88,
        riskLevel: "CRITICAL",
        computeTime: "0.42s",
        vectorCount: 127,
    },
    {
        target: "Calgary",
        zone: "RS-1",
        status: "Processing...",
        conflictProbability: 42,
        riskLevel: "MODERATE",
        computeTime: "0.38s",
        vectorCount: 94,
    },
    {
        target: "Edmonton",
        zone: "RF-3",
        status: "Complete",
        conflictProbability: 18,
        riskLevel: "LOW",
        computeTime: "0.31s",
        vectorCount: 86,
    },
];

export default function RiskIndexWidget() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedProb, setDisplayedProb] = useState(0);

    const currentData = mockVectors[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mockVectors.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // Animate probability counting
    useEffect(() => {
        const target = currentData.conflictProbability;
        const duration = 800;
        const steps = 20;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setDisplayedProb(target);
                clearInterval(timer);
            } else {
                setDisplayedProb(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [currentData.conflictProbability]);

    const getRiskColor = (level: string) => {
        switch (level) {
            case "CRITICAL": return "text-red-500";
            case "HIGH": return "text-orange-500";
            case "MODERATE": return "text-amber-500";
            case "LOW": return "text-emerald-500";
            default: return "text-slate-400";
        }
    };

    return (
        <motion.div
            className="glass-card-terminal p-6 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="live-indicator">
                    GEOSPATIAL VECTOR STREAM
                </div>
            </div>

            {/* Target Display */}
            <div className="mb-6 p-4 bg-void border border-glass-border">
                <div className="font-terminal text-text-dim text-xs mb-1">TARGET</div>
                <motion.div
                    key={currentData.target}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-data text-accent-terminal text-xl"
                >
                    {currentData.target} // {currentData.zone}
                </motion.div>
            </div>

            {/* Vector Map Visualization */}
            <div className="relative h-28 mb-6 border border-glass-border overflow-hidden bg-void">
                <svg viewBox="0 0 200 80" className="w-full h-full">
                    {/* Grid */}
                    <defs>
                        <pattern id="vectorGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="200" height="80" fill="url(#vectorGrid)" />

                    {/* Vector points */}
                    {[...Array(currentData.vectorCount > 50 ? 50 : currentData.vectorCount)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={20 + (i % 10) * 18}
                            cy={15 + Math.floor(i / 10) * 15}
                            r="2"
                            fill={i < currentData.conflictProbability / 2 ? "#EF4444" : "#10B981"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.02 }}
                        />
                    ))}
                </svg>

                {/* Scanline */}
                <motion.div
                    className="absolute left-0 right-0 h-0.5 bg-amber-500/50"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Data Stream */}
            <div className="space-y-3 font-mono text-sm">
                {/* Status */}
                <div className="flex justify-between items-center">
                    <span className="text-text-dim">AGENT_STATUS:</span>
                    <motion.span
                        key={currentData.status}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-accent-terminal"
                    >
                        {currentData.status}
                    </motion.span>
                </div>

                {/* Conflict Probability */}
                <div className="flex justify-between items-center">
                    <span className="text-text-dim">CONFLICT_PROB:</span>
                    <span className={`${getRiskColor(currentData.riskLevel)} font-bold`}>
                        {displayedProb}% ({currentData.riskLevel})
                    </span>
                </div>

                {/* Vector Count */}
                <div className="flex justify-between items-center">
                    <span className="text-text-dim">VECTORS_SCANNED:</span>
                    <span className="text-text-primary">{currentData.vectorCount}</span>
                </div>

                {/* Compute Time */}
                <div className="flex justify-between items-center">
                    <span className="text-text-dim">COMPUTE_TIME:</span>
                    <span className="text-accent-safe">{currentData.computeTime}</span>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-glass-border">
                <p className="text-text-dim text-xs font-terminal">
                    INFERENCE COMPLETE // <span className="text-accent-terminal hover:underline cursor-pointer">VIEW FULL ANALYSIS →</span>
                </p>
            </div>
        </motion.div>
    );
}
