"use client";

import React from "react";
import { ArrowRight, Coffee, X } from "lucide-react";

interface CoffeeAnnouncementBannerProps {
  onClose?: () => void;
}

export default function CoffeeAnnouncementBanner({ onClose }: CoffeeAnnouncementBannerProps) {
  return (
    <aside 
      aria-label="Cafe Announcement"
      className="relative z-50 bg-[#fbf5ed] border-b border-[#eedcc8] text-xs text-[#6e4125] py-2 px-4 overflow-hidden transition-all"
    >
      {/* Subtle warm glow accent behind banner */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/60 via-orange-50/40 to-yellow-100/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-2 relative z-10 text-center">
        <div className="flex items-center gap-2 justify-center flex-1 sm:flex-initial">
          {/* Coffee Cup Icon */}
          <span className="inline-flex items-center justify-center size-4 rounded bg-gradient-to-tr from-amber-600 to-amber-500 p-0.5 text-white shrink-0 shadow-[0_1px_4px_rgba(217,119,6,0.3)]">
            <Coffee className="size-2.5" />
          </span>

          <p className="font-medium tracking-tight text-[#4a2612] text-[11px] sm:text-xs truncate sm:overflow-visible">
            Seasonal Micro-Lot Release: Ethiopia Guji Natural &bull; Free Shipping Over $35
          </p>

          <span className="text-[#a46843] hidden md:inline">&bull;</span>

          <a
            href="#products"
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-[#b45309] hover:text-[#78350f] transition-colors group shrink-0"
          >
            <span>Order Fresh Roast</span>
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss Announcement"
            className="p-1 rounded-full text-[#8c5938] hover:text-[#4a2612] hover:bg-[#eedcc8]/50 transition-colors shrink-0 cursor-pointer"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
    </aside>
  );
}
