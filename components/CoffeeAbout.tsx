"use client";

import React from "react";
import { ArrowRight, Flame, Globe2, Sparkles, UtensilsCrossed } from "lucide-react";

interface CoffeeAboutProps {
  onOpenOrder?: () => void;
}

export default function CoffeeAbout({ onOpenOrder }: CoffeeAboutProps) {
  const pillars = [
    {
      badge: "High Altitude",
      title: "Direct Farm Partnerships",
      description: "We work directly with smallholder coffee farmers at 1,800m+ elevations, paying premium wages for hand-sorted ripe cherries.",
      icon: Globe2,
      accentBorder: "group-hover:border-amber-500/60",
      accentText: "text-[#92400e]",
      iconBg: "bg-[#faeedf] text-[#92400e] border-[#eedcc8]",
    },
    {
      badge: "Artisan Profile",
      title: "Small-Batch Drum Roasting",
      description: "Every single origin and house blend is roasted in small 12kg batches, monitored second-by-second to bring out signature honey & cacao notes.",
      icon: Flame,
      accentBorder: "group-hover:border-orange-500/60",
      accentText: "text-[#a34b12]",
      iconBg: "bg-[#feebdc] text-[#a34b12] border-[#f4d1ba]",
    },
    {
      badge: "Cafe Experience",
      title: "Slow Bar & Tasting Room",
      description: "Experience manual pour-overs, nitro cold brews, and seasonal tasting flights served by our certified baristas in our cozy Jakarta cafe.",
      icon: UtensilsCrossed,
      accentBorder: "group-hover:border-yellow-600/60",
      accentText: "text-[#854d0e]",
      iconBg: "bg-[#fef3c7] text-[#854d0e] border-[#fae896]",
    },
  ];

  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-20 scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faeedf] border border-[#eedcc8] text-[#92400e] text-xs font-semibold mb-3 shadow-xs">
            <Sparkles className="size-3 text-[#b45309]" />
            <span>About Us &bull; Our Craft &amp; Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1c100b]">
            Rooted in Ethics. Brewed with Devotion.
          </h2>
          <p className="text-sm sm:text-base text-[#5c3a27] mt-3 max-w-2xl">
            From green bean selection to slow roasting and dialed-in extractions, we believe every cup should be an unforgettable ritual.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenOrder}
          className="text-xs font-bold text-[#92400e] hover:text-[#78350f] flex items-center gap-1 transition-colors group cursor-pointer self-start md:self-end"
        >
          <span>Reserve Beans or Table</span>
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`group relative rounded-2xl bg-white/90 border border-[#e8d7c6] ${item.accentBorder} p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(60,30,10,0.08)] hover:-translate-y-1`}
            >
              {/* Subtle top card glow highlight */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#faf4ec] border border-[#eedcc8] text-[#7a4c30]">
                    {item.badge}
                  </span>
                  <div className={`size-11 rounded-xl border ${item.iconBg} flex items-center justify-center shadow-xs`}>
                    <Icon className="size-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1f1109] mb-2.5 group-hover:text-[#92400e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5c3a27] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#eedcc8]">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.accentText} hover:underline`}
                >
                  <span>Connect With Our Roasters</span>
                  <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
