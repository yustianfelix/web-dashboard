"use client";

import React from "react";
import { ArrowRight, Terminal } from "lucide-react";
import IridescentVisuals from "./IridescentVisuals";

interface ScaleHeroProps {
  onOpenDemo?: () => void;
  onExploreConsole?: () => void;
}

export default function ScaleHero({ onOpenDemo, onExploreConsole }: ScaleHeroProps) {
  return (
    <section className="relative min-h-[82vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-20 overflow-hidden">
      {/* 3D Iridescent Optical Visuals, Torus Orbits & Cosmic Atmospheric Glow */}
      <IridescentVisuals />

      {/* Main Content (Elevated above background effects) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-[76px] font-bold tracking-tight text-white leading-[1.06] select-none">
          Power{" "}
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#b388ff] via-[#f472b6] to-[#fbbf24] drop-shadow-[0_0_35px_rgba(179,136,255,0.4)]"
            style={{
              WebkitBackgroundClip: "text",
            }}
          >
            Generative AI
          </span>
          <br className="hidden sm:inline" />
          <span className="mt-1 block sm:inline"> With Your Data</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-base sm:text-lg md:text-[19px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Make the best models with the best data. Scale Data Engine leverages your enterprise data,
          and with Scale Generative AI Platform, safely unlocks the value of AI.
        </p>

        {/* Call to Actions (CTAs) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          {/* Pill Primary CTA: Book a Demo */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="group px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-950/70 via-[#1e1338] to-indigo-950/70 border border-purple-500/60 shadow-[0_0_24px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:border-purple-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight className="size-3.5 text-purple-300 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA: Build AI */}
          <a
            href="#platform"
            className="group px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Build AI</span>
            <ArrowRight className="size-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
          </a>

          {/* Console Quick Launch Button */}
          <button
            type="button"
            onClick={onExploreConsole}
            className="group px-4 py-2 rounded-full text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/40 hover:border-cyan-500/60 hover:bg-cyan-950/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Terminal className="size-3 text-cyan-400" />
            <span>Launch Telemetry Console</span>
            <ArrowRight className="size-3 text-cyan-400 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
