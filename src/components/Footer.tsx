"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#090D16] text-white flex items-center justify-center font-terminal text-xs font-bold tracking-tight">
                ES
              </div>
              <span className="font-heading text-base font-bold tracking-tight text-slate-950">
                EcoSync Innovations Inc. (ESInnov)
              </span>
            </div>
            <p className="text-xs font-terminal uppercase tracking-wider text-slate-500">
              Calgary, Alberta • Hybrid &amp; Western Canada Deployment
            </p>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Industrial Operations, Program Delivery &amp; Commercial Back-Office Advisory
            </p>
          </div>

          {/* Center Column */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center gap-4 lg:gap-6">
            <a
              href="mailto:info@esinnov.com?subject=ESInnov%20Engagement%20Inquiry"
              className="font-terminal text-sm font-medium text-slate-800 hover:text-[#0052CC] transition-colors inline-flex items-center gap-1.5"
            >
              <span>info@esinnov.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <span className="hidden lg:inline text-slate-300">|</span>
            <a
              href="https://www.linkedin.com/company/ecosync-innovations/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-terminal text-sm font-medium text-slate-800 hover:text-[#0052CC] transition-colors inline-flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 lg:col-span-3 md:text-right">
            <p className="text-xs text-slate-500 font-terminal">
              © 2026 EcoSync Innovations Inc. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 mt-1.5">
              Strict confidentiality under prime partner MSAs &amp; corporate NDAs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
