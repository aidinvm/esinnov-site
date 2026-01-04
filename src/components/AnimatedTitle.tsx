"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
const targetText = "Intelligence";

export default function AnimatedTitle() {
    const [displayText, setDisplayText] = useState("____________");
    const [isComplete, setIsComplete] = useState(false);
    const [showSecondLine, setShowSecondLine] = useState(false);

    const scrambleText = useCallback(() => {
        let iteration = 0;
        const maxIterations = targetText.length * 3;

        const interval = setInterval(() => {
            setDisplayText(
                targetText
                    .split("")
                    .map((char, index) => {
                        if (index < iteration / 3) {
                            return char;
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            iteration += 1;

            if (iteration >= maxIterations) {
                clearInterval(interval);
                setDisplayText(targetText);
                setIsComplete(true);
                setTimeout(() => setShowSecondLine(true), 400);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Start scramble after initial delay
        const timeout = setTimeout(scrambleText, 800);
        return () => clearTimeout(timeout);
    }, [scrambleText]);

    return (
        <div className="mb-8">
            <h1 className="font-heading text-display leading-[1.05]">
                <motion.span
                    className="block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Multi-Agent
                </motion.span>
                <span className="block">
                    <motion.span
                        className={`font-mono tracking-tight ${isComplete ? "gradient-text" : "text-accent-blue"
                            }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        {displayText}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isComplete ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="gradient-text"
                    >
                        .
                    </motion.span>
                </span>
            </h1>

            {/* Enterprise Ready */}
            <motion.h2
                className="font-heading text-display gradient-text leading-[1.05] mt-1 pb-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{
                    opacity: showSecondLine ? 1 : 0,
                    y: showSecondLine ? 0 : 15
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                Enterprise Ready.
            </motion.h2>
        </div>
    );
}
