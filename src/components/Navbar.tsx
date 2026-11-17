"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Embedded Ops", index: "01" },
  { href: "#engagement-model", label: "Engagement Model", index: "02" },
  { href: "#proof", label: "Sector Pedigree", index: "03" },
  { href: "#contractors", label: "Commercial Back-Office", index: "04" },
  { href: "#ai-capability", label: "Applied Automation", index: "05" },
  { href: "#about", label: "Corporate Profile", index: "06" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Institutional Status Bar */}
      <div className="bg-[#090D16] text-white border-b border-white/10">
        <div className="section-container h-8 flex items-center justify-between text-[11px] font-terminal tracking-wider uppercase">
          <div className="flex items-center gap-2 truncate">
            <span className="text-slate-300 font-semibold">CALGARY, AB</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline truncate">
              INDUSTRIAL OPERATIONS &amp; PROGRAM DELIVERY
            </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-medium">
              IMMEDIATE DEPLOYMENT CAPACITY
            </span>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-200/70"
        }`}
      >
        <div className="section-container h-16 sm:h-[68px] flex items-center justify-between gap-4">
          {/* Brand Mark: ES | ESINNOV (EcoSync Innovations Inc.) */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-[#090D16] text-white flex items-center justify-center font-terminal text-sm font-bold tracking-tight border border-slate-800 group-hover:bg-[#0052CC] group-hover:border-[#0052CC] transition-colors">
              ES
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-base sm:text-[17px] font-bold tracking-tight text-slate-950 leading-none">
                  ESINNOV
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-tight leading-tight mt-0.5">
                EcoSync Innovations Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] font-medium text-slate-600 hover:text-slate-950 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="mailto:info@esinnov.com?subject=ESInnov%20Engagement%20Inquiry"
              className="btn-primary !py-2.5 !px-4 !text-xs sm:!text-[13px] !rounded-lg"
            >
              <span>Initiate Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Tablet Menu Trigger (visible sm to xl) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Trigger (visible below sm) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="xl:hidden bg-white border-b border-slate-200 shadow-lg max-h-[calc(100vh-6rem)] overflow-y-auto"
          >
            <div className="section-container py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all"
                  >
                    <span className="font-heading text-sm font-semibold text-slate-900">
                      {link.label}
                    </span>
                    <span className="font-terminal text-xs text-slate-400">
                      {link.index}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-terminal">
                  ADVISORY DESK: <span className="text-slate-900 font-semibold">info@esinnov.com</span>
                </div>
                <a
                  href="mailto:info@esinnov.com?subject=ESInnov%20Engagement%20Inquiry"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary !w-full sm:!w-auto !py-3 !px-5 !text-sm"
                >
                  <span>Initiate Mandate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
