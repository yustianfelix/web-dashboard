"use client";

import React from "react";

export default function IridescentVisuals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Deep Central Purple & Indigo Atmospheric Nebula Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[850px] sm:w-[1100px] h-[550px] sm:h-[650px] rounded-full opacity-70 blur-[110px]"
        style={{
          background: "radial-gradient(ellipse 65% 50% at 50% 45%, rgba(139, 92, 246, 0.28) 0%, rgba(99, 102, 241, 0.16) 40%, rgba(236, 72, 153, 0.08) 65%, transparent 80%)"
        }}
      />

      {/* Subtle Cyan Glow on the Left */}
      <div 
        className="absolute top-[35%] left-[8%] sm:left-[15%] w-[380px] h-[380px] rounded-full opacity-40 blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 75%)"
        }}
      />

      {/* Subtle Violet/Pink Glow on the Right */}
      <div 
        className="absolute top-[28%] right-[10%] sm:right-[16%] w-[420px] h-[420px] rounded-full opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 75%)"
        }}
      />

      {/* Top Left Thin Iridescent Wire Ring */}
      <div className="absolute top-[18%] sm:top-[22%] left-[18%] sm:left-[26%] w-[160px] sm:w-[220px] h-[90px] sm:h-[130px] opacity-75 animate-float-slow">
        <svg viewBox="0 0 200 120" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="45%" stopColor="#818cf8" />
              <stop offset="80%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
            <filter id="glowRing" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse
            cx="100"
            cy="60"
            rx="80"
            ry="42"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="3.2"
            strokeDasharray="380 40"
            strokeDashoffset="20"
            transform="rotate(-28 100 60)"
            filter="url(#glowRing)"
            className="opacity-80"
          />
        </svg>
      </div>

      {/* Centerpiece 3D Iridescent Optical Lens Disc (Left side) */}
      <div className="absolute top-[48%] sm:top-[50%] left-[4%] sm:left-[12%] md:left-[16%] lg:left-[18%] -translate-y-1/2 w-[220px] sm:w-[320px] md:w-[380px] h-[220px] sm:h-[320px] md:h-[380px] pointer-events-none animate-float-medium">
        <div className="relative w-full h-full [perspective:1000px]">
          {/* Main 3D Tilted Optical Disc */}
          <div 
            className="w-full h-full rounded-full relative transition-transform duration-700"
            style={{
              transform: "rotateX(58deg) rotateY(-18deg) rotateZ(32deg)",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Iridescent Rainbow Rim Halo Glow */}
            <div 
              className="absolute -inset-2.5 rounded-full blur-[14px] opacity-80"
              style={{
                background: "conic-gradient(from 200deg, #00f5ff, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #00f5ff)"
              }}
            />

            {/* Sharp Metallic Beveled Rainbow Outer Rim */}
            <div 
              className="absolute inset-0 rounded-full p-[5px] shadow-[0_0_30px_rgba(0,245,255,0.4)]"
              style={{
                background: "conic-gradient(from 190deg, #00f5ff 0%, #38bdf8 18%, #818cf8 35%, #c084fc 50%, #f472b6 68%, #fbbf24 82%, #34d399 92%, #00f5ff 100%)"
              }}
            >
              {/* Inner Glass Lens Surface */}
              <div className="w-full h-full rounded-full bg-[#060714]/85 backdrop-blur-xl relative overflow-hidden border border-white/20 shadow-inner">
                {/* Concentric Fresnel Refraction Rings */}
                <div className="absolute inset-3 rounded-full border border-cyan-400/20" />
                <div className="absolute inset-7 rounded-full border border-purple-400/15" />
                <div className="absolute inset-12 rounded-full border border-pink-400/10" />

                {/* Spectral Glass Sheen Gradient */}
                <div 
                  className="absolute inset-0 opacity-45 mix-blend-screen"
                  style={{
                    background: "linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(0,245,255,0.2) 30%, transparent 60%, rgba(236,72,153,0.3) 100%)"
                  }}
                />

                {/* Refracted Ghost Typography across lens surface */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center rotate-[-30deg] scale-90 opacity-40 select-none">
                  <span className="font-mono text-[9px] sm:text-[11px] font-semibold tracking-wider text-cyan-200 uppercase">
                    enterprise data engine
                  </span>
                  <span className="font-mono text-[7px] sm:text-[9px] text-purple-300/80 tracking-widest mt-1">
                    01011001 01010011 01000001
                  </span>
                  <span className="text-[10px] sm:text-[12px] font-medium text-pink-200/90 tracking-tight mt-0.5">
                    Scale Generative AI Platform
                  </span>
                  <span className="text-[8px] sm:text-[10px] text-emerald-300/70 tracking-wide mt-1">
                    RLHF &bull; Fine-Tuning &bull; Custom LLMs
                  </span>
                </div>

                {/* Glossy Curved Glare Highlight on Top Rim */}
                <div className="absolute -top-1/4 left-1/4 w-3/4 h-1/2 bg-gradient-to-b from-white/40 via-cyan-200/20 to-transparent rounded-full blur-[2px] transform -rotate-12" />
              </div>
            </div>

            {/* Bottom 3D Bevel Rim Shadow */}
            <div 
              className="absolute -bottom-2 inset-x-4 h-6 rounded-full blur-[6px] opacity-60 -z-10"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6, #00f5ff)"
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating 3D Iridescent Ribbon Loop on the Right */}
      <div className="absolute top-[38%] sm:top-[42%] right-[4%] sm:right-[12%] md:right-[15%] w-[180px] sm:w-[260px] h-[220px] sm:h-[300px] pointer-events-none animate-float-slow">
        <svg viewBox="0 0 200 240" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="swirlGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#00f5ff" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="90%" stopColor="#ec4899" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
            </linearGradient>
            <filter id="swirlGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sweeping 3D Iridescent Arc Path */}
          <path
            d="M 30 210 C 110 230, 190 170, 175 100 C 165 45, 115 15, 75 40 C 45 60, 40 100, 70 125 C 105 150, 150 140, 170 110"
            fill="none"
            stroke="url(#swirlGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#swirlGlow)"
            className="opacity-80"
          />

          {/* High-intensity Specular Core Line */}
          <path
            d="M 30 210 C 110 230, 190 170, 175 100 C 165 45, 115 15, 75 40"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-60"
          />
        </svg>
      </div>

      {/* Ambient Starlight / Digital Glow Dust */}
      <div className="absolute top-[25%] left-[22%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8] animate-pulse" />
      <div className="absolute top-[32%] right-[28%] w-1 h-1 rounded-full bg-pink-300 shadow-[0_0_6px_#f472b6] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[62%] right-[18%] w-1.5 h-1.5 rounded-full bg-purple-300 shadow-[0_0_8px_#c084fc] animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[70%] left-[30%] w-1 h-1 rounded-full bg-amber-200 shadow-[0_0_6px_#fde047] animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}
