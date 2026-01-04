"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-glass-border bg-bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer */}
                <div className="py-10 grid md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo.png"
                                alt="ESInnov Logo"
                                className="w-8 h-8 object-contain"
                            />
                            <span className="font-heading text-text-primary text-lg">ESInnov</span>
                        </div>
                        <p className="text-text-secondary text-sm max-w-sm leading-relaxed mb-3">
                            Agentic Intelligence Studio. Multi-agent architectures
                            that read, reason, and execute with enterprise precision.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/20">
                            <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
                            <span className="text-accent-emerald text-xs font-terminal">OPERATIONAL</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-terminal text-text-primary text-sm mb-3">Navigate</h4>
                        <div className="space-y-2">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/protocols", label: "Architecture" },
                                { href: "/methodology", label: "Methodology" },
                                { href: "/research", label: "Research" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-text-secondary hover:text-text-primary transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-terminal text-text-primary text-sm mb-3">Services</h4>
                        <div className="space-y-2">
                            {[
                                { href: "/access", label: "Feasibility Study" },
                                { href: "/access", label: "Agent Pilot" },
                                { href: "/access", label: "Production Deployment" },
                            ].map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="block text-text-secondary hover:text-text-primary transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="py-5 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-text-tertiary text-xs">
                        © {currentYear} ESInnov. Calgary, Alberta. All rights reserved.
                    </p>
                    <p className="text-text-tertiary text-xs">
                        ESInnov is a division of EcoSync Innovations.
                    </p>
                </div>
            </div>
        </footer>
    );
}
