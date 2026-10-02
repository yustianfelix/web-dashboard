"use client";

import React from "react";
import packageInfo from "../package.json";

export default function ScaleFooter() {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#030308] text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            scale
          </span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-slate-400">
            &copy; {new Date().getFullYear()} Scale AI, Inc. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-[11px] font-medium">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All Systems Operational
          </span>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-purple-300">
            v{packageInfo.version}
          </span>
        </div>
      </div>
    </footer>
  );
}
