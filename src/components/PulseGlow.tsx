"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PulseGlowProps {
    children: ReactNode;
    className?: string;
}

export default function PulseGlow({ children, className = "" }: PulseGlowProps) {
    return (
        <motion.span
            className={`zone-iq-pulse inline-block ${className}`}
            animate={{
                boxShadow: [
                    "0 0 20px rgba(43, 156, 166, 0.3)",
                    "0 0 35px rgba(43, 156, 166, 0.5)",
                    "0 0 20px rgba(43, 156, 166, 0.3)",
                ],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.span>
    );
}
