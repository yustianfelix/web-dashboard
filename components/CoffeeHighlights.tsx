"use client";

import React from "react";
import { Award, Flame, HeartHandshake, Sparkles, Sprout, Wind } from "lucide-react";

export default function CoffeeHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "SCA 90+ Score",
      subtitle: "Certified Specialty",
    },
    {
      icon: HeartHandshake,
      title: "Direct Trade",
      subtitle: "100% Fair Farming",
    },
    {
      icon: Flame,
      title: "Small Batch",
      subtitle: "Drum Roasted Daily",
    },
    {
      icon: Sprout,
      title: "100% Arabica",
      subtitle: "Single Origin Micro-Lots",
    },
    {
      icon: Wind,
      title: "Degassed & Sealed",
      subtitle: "One-Way Aroma Valve",
    },
    {
      icon: Sparkles,
      title: "Artisan Brew Bar",
      subtitle: "Barista Calibrated",
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-16">
      {/* Subtitle */}
      <div className="text-center mb-10">
        <p className="text-xs sm:text-sm font-medium text-[#7a4c30] tracking-wide">
          Crafted with passion for specialty coffee lovers, artisanal cafes &amp;{" "}
          <span className="text-[#92400e] border-b border-[#b45309]/50 pb-0.5 font-bold">
            mindful mornings
          </span>
        </p>
      </div>

      {/* Grid of Coffee Roastery Accolades */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/85 border border-[#e8d7c6] hover:border-amber-500/60 hover:bg-white hover:shadow-[0_4px_20px_rgba(180,83,9,0.12)] transition-all group"
            >
              <div className="size-10 rounded-xl bg-[#faeedf] border border-[#eedcc8] text-[#92400e] flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:bg-[#f6e1cd] transition-all shadow-xs">
                <Icon className="size-4.5" />
              </div>
              <span className="text-xs font-bold text-[#1f1109] group-hover:text-[#92400e] transition-colors">
                {item.title}
              </span>
              <span className="text-[10px] text-[#7a4c30] font-medium mt-0.5">
                {item.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
