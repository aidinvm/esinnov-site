"use client";

import { useEffect, useRef } from "react";

export default function LiveDataTicker() {
    const tickerItems = [
        "ZONE IQ™ ACTIVE",
        "MCP INTEGRATED",
        "AGENTIC RAG ONLINE",
        "A2A PROTOCOL READY",
        "SOVEREIGN NODE SECURE",
        "MULTI-AGENT SWARM",
        "VECTOR SEARCH LIVE",
        "CONTEXT OPTIMIZED",
    ];

    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollerRef.current) return;

        const scroller = scrollerRef.current;
        const scrollerInner = scroller.querySelector('.ticker-inner') as HTMLElement;

        if (!scrollerInner) return;

        // Clone content for seamless loop
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const clone = item.cloneNode(true) as HTMLElement;
            clone.setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(clone);
        });

        scrollerInner.classList.add('animate-scroll-reverse');
    }, []);

    return (
        <div className="py-4 bg-bg-dark border-y border-white/10 overflow-hidden">
            <div
                ref={scrollerRef}
                className="ticker-wrapper"
            >
                <div className="ticker-inner flex whitespace-nowrap">
                    {tickerItems.map((item, index) => (
                        <div key={index} className="flex items-center shrink-0">
                            <span className="font-terminal text-xs uppercase tracking-wider text-white/70 px-4">
                                {item}
                            </span>
                            <span className="text-accent-emerald text-xs">●</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
