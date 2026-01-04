"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface TerminalButtonProps {
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function TerminalButton({ href = "/zone-iq-demo", className = "" }: TerminalButtonProps) {
    return (
        <Link href={href}>
            <motion.div
                className={`btn-terminal relative group ${className}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                {/* Blinking cursor */}
                <span className="cursor-blink text-accent-terminal mr-2">█</span>

                {/* Default text */}
                <span className="group-hover:hidden">LAUNCH NEURAL TERMINAL</span>

                {/* Hover text */}
                <span className="hidden group-hover:inline">INFERENCE ACTIVE</span>

                {/* Scanline overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent animate-scan" />
                </div>
            </motion.div>
        </Link>
    );
}
