"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    decimals?: number;
}

export default function CountUp({ end, duration = 2, suffix = "", decimals = 0 }: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);

            // Smooth ease-out-expo curve
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(eased * end);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
}
