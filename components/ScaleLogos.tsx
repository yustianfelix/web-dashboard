"use client";

import React from "react";

export default function ScaleLogos() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-20">
      {/* Subtitle with underlined 'Enterprises' */}
      <div className="text-center mb-10">
        <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide">
          Scale works with Generative AI Companies, U.S. Government Agencies,{" "}
          <span className="text-slate-200 border-b border-purple-500/80 pb-0.5">Enterprises</span>{" "}
          &amp; Startups
        </p>
      </div>

      {/* Grid / Row of Enterprise Brand Logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-85 hover:opacity-100 transition-opacity">
        {/* Microsoft */}
        <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z" />
          </svg>
          <span className="font-semibold text-lg tracking-tight font-sans text-slate-300 group-hover:text-white">
            Microsoft
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <svg className="h-5 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 16.5c-2.3 0-4.1-1.6-4.6-3.8-.4-1.9.4-3.7 2-4.7 1.6-1 3.7-.8 5 .5l.1.1c1.3-1.3 3.4-1.5 5-.5 1.6 1 2.4 2.8 2 4.7-.5 2.2-2.3 3.8-4.6 3.8-1.5 0-2.9-.7-3.8-1.9-.9 1.3-2.3 2-3.8 2zm-5.7-4c.3 1.5 1.5 2.6 3 2.6.9 0 1.8-.4 2.4-1.2L8.6 11c-.7.6-1.5.8-2.3.8zm11.4 0c-.8 0-1.6-.2-2.3-.8l-3.1 2.9c.6.8 1.5 1.2 2.4 1.2 1.5 0 2.7-1.1 3-2.6.1-.2.1-.5 0-.7z" />
          </svg>
          <span className="font-bold text-lg tracking-tight font-sans text-slate-300 group-hover:text-white">
            Meta
          </span>
        </div>

        {/* GM */}
        <div className="flex items-center text-slate-400 hover:text-white transition-colors group">
          <div className="border border-current rounded-lg px-2.5 py-0.5 text-center">
            <span className="font-black text-base tracking-tighter lowercase leading-none block">
              gm
            </span>
            <div className="w-full h-[1.5px] bg-current mt-0.5" />
          </div>
        </div>

        {/* TOYOTA */}
        <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <svg className="h-5 w-6 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="10" ry="7" />
            <ellipse cx="12" cy="10" rx="4" ry="5.5" />
            <ellipse cx="12" cy="8" rx="8" ry="3.5" />
          </svg>
          <span className="font-bold text-base tracking-wider font-sans uppercase text-slate-300 group-hover:text-white">
            TOYOTA
          </span>
        </div>

        {/* FOX */}
        <div className="flex items-center text-slate-400 hover:text-white transition-colors group">
          <span className="font-black text-xl tracking-tighter uppercase font-sans text-slate-300 group-hover:text-white">
            FOX
          </span>
        </div>

        {/* accenture */}
        <div className="flex items-center gap-0.5 text-slate-400 hover:text-white transition-colors group">
          <span className="font-semibold text-lg tracking-tight lowercase text-slate-300 group-hover:text-white">
            accenture
          </span>
          <span className="text-purple-400 font-bold text-base leading-none">&gt;</span>
        </div>

        {/* KOCH */}
        <div className="flex items-center text-slate-400 hover:text-white transition-colors group">
          <span className="font-black text-lg tracking-widest uppercase font-serif text-slate-300 group-hover:text-white">
            KOCH
          </span>
        </div>
      </div>
    </section>
  );
}
