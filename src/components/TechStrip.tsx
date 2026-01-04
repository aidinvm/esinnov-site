"use client";

import { useEffect, useRef } from "react";

const techStack = [
    { name: "LangChain", icon: "🔗" },
    { name: "OpenAI", icon: "◆" },
    { name: "Anthropic", icon: "◇" },
    { name: "Google AI", icon: "▲" },
    { name: "Pinecone", icon: "🌲" },
    { name: "Supabase", icon: "⚡" },
    { name: "n8n", icon: "⬡" },
    { name: "Qdrant", icon: "◈" },
    { name: "LlamaIndex", icon: "🦙" },
    { name: "Redis", icon: "●" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁" },
    { name: "Vercel", icon: "▲" },
];

export default function TechStrip() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollerRef.current) return;

        const scroller = scrollerRef.current;
        const scrollerInner = scroller.querySelector('.tech-inner') as HTMLElement;

        if (!scrollerInner) return;

        // Clone content for seamless loop
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const clone = item.cloneNode(true) as HTMLElement;
            clone.setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(clone);
        });

        scrollerInner.classList.add('animate-scroll');
    }, []);

    return (
        <div className="relative py-12">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

            {/* Header */}
            <div className="text-center mb-8 relative">
                <div className="inline-flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent-blue/50" />
                    <span className="font-terminal text-[11px] text-accent-blue/70 tracking-[0.25em] uppercase">
                        Tech Stack
                    </span>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent-blue/50" />
                </div>
            </div>

            {/* Scrolling tech logos */}
            <div className="relative">
                <div
                    ref={scrollerRef}
                    className="tech-strip-wrapper"
                >
                    <div className="tech-inner flex whitespace-nowrap items-center gap-2">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-2 px-5 py-2.5 mx-1 rounded-lg border border-white/[0.03] bg-white/[0.02] hover:bg-white/[0.05] hover:border-accent-blue/20 transition-all duration-300"
                            >
                                <span className="text-sm opacity-50 group-hover:opacity-80 transition-opacity">
                                    {tech.icon}
                                </span>
                                <span className="font-medium text-sm text-text-tertiary group-hover:text-text-secondary transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent-emerald/20 to-transparent" />
        </div>
    );
}
