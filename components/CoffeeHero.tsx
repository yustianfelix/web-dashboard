"use client";

import React from "react";
import { ArrowRight, Coffee, PackageCheck } from "lucide-react";
import CoffeeVisuals from "./CoffeeVisuals";

interface CoffeeHeroProps {
  onOpenOrder?: () => void;
  onExploreProducts?: () => void;
}

export default function CoffeeHero({ onOpenOrder, onExploreProducts }: CoffeeHeroProps) {
  return (
    <section className="relative min-h-[82vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-20 overflow-hidden">
      {/* 3D Artisan Roasting Ring, Steam Swirls & Warm Cafe Lighting */}
      <CoffeeVisuals />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-[76px] font-bold tracking-tight text-[#1c100b] leading-[1.08] select-none">
          Craft{" "}
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#f59e0b] drop-shadow-[0_2px_12px_rgba(217,119,6,0.25)]"
            style={{
              WebkitBackgroundClip: "text",
            }}
          >
            Exceptional Coffee
          </span>
          <br className="hidden sm:inline" />
          <span className="mt-1 block sm:inline"> With Artisanal Roasts</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-base sm:text-lg md:text-[19px] text-[#583928] max-w-2xl mx-auto leading-relaxed font-normal">
          Roasted fresh in small batches daily. We source ethical high-altitude micro-lots directly from
          farms in Ethiopia, Colombia, and Sumatra to deliver rich aroma, sweet undertones, and velvety crema.
        </p>

        {/* Call to Actions (CTAs) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Pill Primary CTA: Order Fresh Roast */}
          <button
            type="button"
            onClick={onOpenOrder}
            className="group px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#853f0e] via-[#a34b12] to-[#c2611a] border border-amber-500/40 shadow-[0_4px_20px_rgba(180,83,9,0.35)] hover:shadow-[0_6px_28px_rgba(180,83,9,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Coffee className="size-4 text-amber-200" />
            <span>Order Fresh Roast</span>
            <ArrowRight className="size-3.5 text-amber-200 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA: Explore Products */}
          <button
            type="button"
            onClick={onExploreProducts}
            className="group px-4 py-3 text-sm font-semibold text-[#78350f] hover:text-[#451a03] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Explore Products</span>
            <ArrowRight className="size-3.5 text-amber-600 group-hover:text-[#451a03] transition-transform group-hover:translate-x-1" />
          </button>

          {/* Quick Telemetry Jump */}
          <a
            href="#products"
            className="group px-4.5 py-2.5 rounded-full text-xs font-semibold text-[#853f0e] bg-white/90 border border-[#e5d4c3] hover:border-amber-500/70 hover:bg-[#fffdfa] hover:shadow-[0_2px_14px_rgba(180,83,9,0.18)] transition-all flex items-center gap-1.5 shadow-xs"
          >
            <PackageCheck className="size-3 text-amber-600" />
            <span>Live Stock Telemetry</span>
            <ArrowRight className="size-3 text-amber-600 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
