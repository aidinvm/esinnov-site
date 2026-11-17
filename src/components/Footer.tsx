"use client";

import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { href: "#core-practices", label: "Core Practices" },
  { href: "#applied-systems", label: "Applied Systems" },
  { href: "#engagement-model", label: "Engagement Model" },
  { href: "#sector-pedigree", label: "Sector Pedigree" },
  { href: "#about-governance", label: "About & Governance" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const handleAnchorClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", href);
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="section-container py-10 lg:py-14">
        {/* Section Anchor Navigation Row */}
        <nav
          aria-label="Footer navigation"
          className="pb-8 mb-8 border-b border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-xs sm:text-[13px] font-medium text-slate-600 hover:text-[#0052CC] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start md:items-center">
          {/* Left Column */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="ESInnov Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
              />
              <span className="font-heading text-sm sm:text-base font-bold tracking-tight text-slate-950">
                EcoSync Innovations Inc. (ESInnov)
              </span>
            </div>
            <p className="text-xs font-terminal uppercase tracking-wider text-slate-500">
              Calgary, AB | Serving Western Canada
            </p>
          </div>

          {/* Center Column */}
          <div className="md:col-span-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Industrial Operations, Program Delivery &amp; Applied Systems Advisory
            </p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 md:text-right space-y-1.5">
            <div className="flex flex-wrap md:justify-end items-center gap-x-4 gap-y-1">
              <a
                href="mailto:info@esinnov.com?subject=ESInnov%20Advisory%20Inquiry"
                className="font-terminal text-sm font-medium text-slate-900 hover:text-[#0052CC] transition-colors inline-flex items-center gap-1"
              >
                <span>info@esinnov.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://www.linkedin.com/company/ecosync-innovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-terminal text-sm font-medium text-slate-700 hover:text-[#0052CC] transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
            <p className="text-xs text-slate-500 font-terminal">
              © 2026 EcoSync Innovations Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
