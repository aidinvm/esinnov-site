"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    variant?: "default" | "teal" | "red";
    className?: string;
    hover?: boolean;
}

export default function GlassCard({
    children,
    variant = "default",
    className = "",
    hover = true,
}: GlassCardProps) {
    const variantClasses = {
        default: "glass-card",
        teal: "glass-card-teal",
        red: "glass-card-red",
    };

    return (
        <motion.div
            className={`${variantClasses[variant]} ${className}`}
            whileHover={hover ? { scale: 1.02 } : undefined}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
