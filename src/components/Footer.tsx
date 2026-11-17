"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="section-container py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start md:items-center">
          {/* Left Column */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#090D16] text-white flex items-center justify-center font-terminal text-xs font-bold tracking-tight flex-shrink-0">
                ES
              </div>
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
            <div>
              <a
                href="mailto:info@esinnov.com?subject=ESInnov%20Advisory%20Inquiry"
                className="font-terminal text-sm font-medium text-slate-900 hover:text-[#0052CC] transition-colors inline-flex items-center gap-1"
              >
                <span>info@esinnov.com</span>
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
