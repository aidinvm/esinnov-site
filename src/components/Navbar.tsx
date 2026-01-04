"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/protocols", label: "Architecture" },
    { href: "/methodology", label: "Methodology" },
    { href: "/research", label: "Research" },
    { href: "/about", label: "About" },
];

// Hamburger icon animation variants
const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
};

const middleLine = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: -20 }
};

const bottomLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
};

// Menu animation variants
const menuVariants = {
    closed: {
        opacity: 0,
        transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};

const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 + i * 0.1, duration: 0.4, ease: "easeOut" }
    })
};

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-lg border-b border-glass-border"
            >
                <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 z-50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logo.png"
                            alt="ESInnov Logo"
                            className="w-9 h-9 object-contain"
                        />
                        <span className="font-heading text-text-primary text-lg">ESInnov</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/access">
                            <button className="btn-primary py-2.5 px-5 text-sm">Get Started</button>
                        </Link>
                    </div>

                    {/* Mobile Hamburger - Animated Icon */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            variants={topLine}
                            animate={mobileOpen ? "open" : "closed"}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-0.5 bg-text-primary origin-center"
                        />
                        <motion.span
                            variants={middleLine}
                            animate={mobileOpen ? "open" : "closed"}
                            transition={{ duration: 0.2 }}
                            className="block w-6 h-0.5 bg-text-primary"
                        />
                        <motion.span
                            variants={bottomLine}
                            animate={mobileOpen ? "open" : "closed"}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-0.5 bg-text-primary origin-center"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 z-40 bg-bg-primary md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full px-8">
                            <nav className="flex flex-col items-center gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        custom={i}
                                        variants={linkVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="font-heading text-3xl text-text-primary hover:text-accent-blue transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    custom={navLinks.length}
                                    variants={linkVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="mt-8"
                                >
                                    <Link href="/access" onClick={() => setMobileOpen(false)}>
                                        <button className="btn-primary text-lg px-8 py-4">
                                            Get Started
                                        </button>
                                    </Link>
                                </motion.div>
                            </nav>

                            {/* Branding at bottom */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-10 text-center"
                            >
                                <p className="text-text-tertiary text-sm">
                                    Agentic Intelligence Studio
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
