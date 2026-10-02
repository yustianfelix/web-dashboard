"use client";

import React from "react";
import { Coffee } from "lucide-react";
import packageInfo from "../package.json";

export default function CoffeeFooter() {
  return (
    <footer className="relative z-10 border-t border-[#e8d7c6] bg-[#f5ede3] text-xs text-[#7a4c30]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded-lg bg-[#b45309] text-white flex items-center justify-center font-bold shadow-xs">
            <Coffee className="size-3.5" />
          </div>
          <span className="text-base font-bold tracking-tight text-[#1f1109] font-sans">
            roastcraft
          </span>
          <span className="text-[#c7a992]">&bull;</span>
          <span className="text-[#6e4125]">
            &copy; {new Date().getFullYear()} RoastCraft Specialty Coffee Co. Handcrafted daily.
          </span>
        </div>

        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold shadow-xs">
            <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Roasters &amp; Brew Bar Operational
          </span>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white border border-[#eedcc8] text-[#853f0e] shadow-xs">
            v{packageInfo.version}
          </span>
        </div>
      </div>
    </footer>
  );
}
