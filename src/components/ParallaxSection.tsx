"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number; // 0 = no movement, 1 = normal scroll, <1 = slower (parallax back), >1 = faster
    className?: string;
    fadeOut?: boolean; // Optional fade on scroll
}

export default function ParallaxSection({
    children,
    speed = 0.5,
    className = "",
    fadeOut = false,
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Calculate parallax offset based on speed
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${(1 - speed) * 50}%`]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], fadeOut ? [0.5, 1, 1, 0.5] : [1, 1, 1, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
