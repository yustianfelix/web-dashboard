"use client";

import React from "react";
import { ArrowRight, Cpu, Database, Shield, Sparkles } from "lucide-react";

interface ScaleShowcaseCardsProps {
  onOpenDemo?: () => void;
  onExploreConsole?: () => void;
}

export default function ScaleShowcaseCards({ onOpenDemo, onExploreConsole }: ScaleShowcaseCardsProps) {
  const cards = [
    {
      badge: "TransformX 2023",
      title: "Generative AI Platform",
      description: "Safely customize, evaluate, and deploy frontier models on your enterprise data infrastructure with automated RLHF.",
      icon: Cpu,
      gradient: "from-purple-500/20 to-indigo-500/10",
      accentBorder: "group-hover:border-purple-500/50",
      accentText: "text-purple-400",
      actionText: "Explore Platform",
      actionLink: "#platform",
    },
    {
      badge: "Enterprise Core",
      title: "Scale Data Engine",
      description: "Produce the highest quality training and fine-tuning datasets across multimodal documents, code, and live telemetry.",
      icon: Database,
      gradient: "from-cyan-500/20 to-blue-500/10",
      accentBorder: "group-hover:border-cyan-500/50",
      accentText: "text-cyan-400",
      actionText: "Open Telemetry Console",
      onClick: onExploreConsole,
    },
    {
      badge: "Defense & Mission",
      title: "Scale Donovan & Gov",
      description: "Accelerate mission planning and critical operations with secure, air-gapped LLM reasoning built for government defense.",
      icon: Shield,
      gradient: "from-pink-500/20 to-amber-500/10",
      accentBorder: "group-hover:border-pink-500/50",
      accentText: "text-pink-400",
      actionText: "Learn About Donovan",
      actionLink: "#government",
    },
  ];

  return (
    <section id="platform" className="relative z-10 max-w-7xl mx-auto px-6 py-12 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="size-3 text-purple-400" />
            <span>AI Architecture &amp; Engines</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Transform Your Enterprise with Frontier AI
          </h2>
        </div>
        <button
          type="button"
          onClick={onOpenDemo}
          className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors group cursor-pointer"
        >
          <span>Request Custom Architecture Briefing</span>
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className={`group relative rounded-2xl bg-[#090a16]/90 border border-white/[0.08] ${card.accentBorder} p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1`}
            >
              {/* Subtle top card gradient highlight */}
              <div
                className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300">
                    {card.badge}
                  </span>
                  <div className={`size-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center ${card.accentText}`}>
                    <Icon className="size-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                {card.onClick ? (
                  <button
                    type="button"
                    onClick={card.onClick}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${card.accentText} hover:underline cursor-pointer`}
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="size-3" />
                  </button>
                ) : (
                  <a
                    href={card.actionLink}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${card.accentText} hover:underline`}
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="size-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
