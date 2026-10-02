"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ScaleAnnouncementBanner() {
  return (
    <aside 
      aria-label="Announcement"
      className="relative z-50 bg-[#090717] border-b border-purple-500/20 text-xs text-slate-300 py-2.5 px-4 overflow-hidden"
    >
      {/* Subtle iridescent glow accent behind banner */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-pink-900/30 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 relative z-10 text-center">
        {/* Colorful Scale x Microsoft Partnership Sparkle Icon */}
        <span className="inline-flex items-center justify-center size-4 rounded bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 p-0.5 text-white shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]">
          <Sparkles className="size-3" />
        </span>

        <p className="font-medium tracking-tight text-slate-200">
          Scale Partners with Microsoft to Help Customers Build Custom LLMs on Microsoft Azure
        </p>

        <span className="text-slate-500 hidden sm:inline">&bull;</span>

        <a
          href="#partners"
          className="inline-flex items-center gap-1 font-semibold text-white hover:text-cyan-300 transition-colors group shrink-0"
        >
          <span>Learn More</span>
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </aside>
  );
}
