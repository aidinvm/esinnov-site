"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ZoneIQDemoPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay for effect
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-void">
            {/* Terminal Header */}
            <div className="fixed top-16 left-0 right-0 z-40 bg-void-light border-b border-glass-border">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="live-indicator">
                            TERMINAL ACTIVE
                        </div>
                        <span className="font-terminal text-text-dim text-xs hidden md:inline">
              // ZONE_IQ_PUBLIC_DEMO_v2.0
                        </span>
                    </div>
                    <Link href="/" className="font-terminal text-accent-terminal text-xs hover:underline">
                        EXIT TERMINAL →
                    </Link>
                </div>
            </div>

            {/* Loading State */}
            {isLoading && (
                <div className="fixed inset-0 bg-void z-50 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                    >
                        <div className="font-terminal text-accent-terminal text-sm mb-4">
                            INITIALIZING ZONE IQ™ TERMINAL
                        </div>
                        <div className="flex justify-center gap-1">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-8 bg-accent-terminal"
                                    animate={{ scaleY: [0.3, 1, 0.3] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                    }}
                                />
                            ))}
                        </div>
                        <div className="font-terminal text-text-dim text-xs mt-4">
                            LOADING ALGORITHMIC WORKFLOWS...
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Demo Container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="pt-32 pb-8 px-4"
            >
                {/* Terminal Frame */}
                <div className="max-w-6xl mx-auto glass-card-terminal overflow-hidden">
                    {/* Terminal Bar */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-glass-border bg-void-lighter">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="font-terminal text-text-dim text-xs ml-4">
                            zone_iq_terminal — demo@esinnov.com
                        </span>
                    </div>

                    {/* Demo Frame */}
                    <iframe
                        src="/api/demo-public"
                        className="w-full h-[80vh] bg-void"
                        title="Zone IQ Demo"
                    />
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="max-w-6xl mx-auto mt-8 text-center"
                >
                    <p className="text-text-muted mb-4">
                        This is a demonstration of Zone IQ™ capabilities. For live analysis of your property:
                    </p>
                    <Link href="/access">
                        <button className="btn-terminal">
                            <span className="cursor-blink mr-2">█</span>
                            REQUEST FULL ACCESS
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
