"use client";

import React from "react";

export default function CoffeeVisuals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Central Warm Honey & Crema Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[750px] sm:w-[950px] h-[450px] sm:h-[550px] rounded-full opacity-60 blur-[110px]"
        style={{
          background: "radial-gradient(ellipse 65% 50% at 50% 45%, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.1) 40%, rgba(180, 83, 9, 0.04) 65%, transparent 80%)"
        }}
      />

      {/* Top Left Golden Aroma Wire Ring */}
      <div className="absolute top-[16%] sm:top-[20%] left-[16%] sm:left-[24%] w-[160px] sm:w-[220px] h-[90px] sm:h-[130px] opacity-75 animate-float-slow">
        <svg viewBox="0 0 200 120" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="lightCoffeeRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="45%" stopColor="#f59e0b" />
              <stop offset="80%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <filter id="lightRingGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse
            cx="100"
            cy="60"
            rx="80"
            ry="42"
            fill="none"
            stroke="url(#lightCoffeeRingGrad)"
            strokeWidth="3"
            strokeDasharray="380 40"
            strokeDashoffset="20"
            transform="rotate(-28 100 60)"
            filter="url(#lightRingGlow)"
            className="opacity-70"
          />
        </svg>
      </div>

      {/* Centerpiece 3D Artisan Roasting Ring & Crema Disc (Left side) */}
      <div className="absolute top-[48%] sm:top-[50%] left-[4%] sm:left-[10%] md:left-[14%] lg:left-[16%] -translate-y-1/2 w-[220px] sm:w-[320px] md:w-[370px] h-[220px] sm:h-[320px] md:h-[370px] pointer-events-none animate-float-medium">
        <div className="relative w-full h-full [perspective:1000px]">
          {/* Main 3D Tilted Disc */}
          <div 
            className="w-full h-full rounded-full relative transition-transform duration-700"
            style={{
              transform: "rotateX(58deg) rotateY(-18deg) rotateZ(32deg)",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Warm Golden Bevel Glow */}
            <div 
              className="absolute -inset-2 rounded-full blur-[14px] opacity-70"
              style={{
                background: "conic-gradient(from 190deg, #f59e0b, #d97706, #b45309, #78350f, #fbbf24, #d97706, #f59e0b)"
              }}
            />

            {/* Polished Brass & Caramel Outer Rim */}
            <div 
              className="absolute inset-0 rounded-full p-[5px] shadow-[0_15px_40px_rgba(146,64,14,0.3)]"
              style={{
                background: "conic-gradient(from 180deg, #fffbeb 0%, #fbbf24 25%, #d97706 50%, #92400e 70%, #d97706 90%, #fffbeb 100%)"
              }}
            >
              {/* Inner Roasted Espresso & Velvet Crema Surface */}
              <div className="w-full h-full rounded-full bg-[#2a170e] relative overflow-hidden border border-amber-600/30 shadow-inner">
                {/* Concentric Extraction Calibration Rings */}
                <div className="absolute inset-3 rounded-full border border-amber-400/25" />
                <div className="absolute inset-7 rounded-full border border-amber-300/20" />
                <div className="absolute inset-12 rounded-full border border-yellow-200/15" />

                {/* Warm Crema Sheen Gradient */}
                <div 
                  className="absolute inset-0 opacity-40 mix-blend-screen"
                  style={{
                    background: "linear-gradient(130deg, rgba(254,243,199,0.5) 0%, rgba(245,158,11,0.3) 40%, transparent 70%, rgba(180,83,9,0.3) 100%)"
                  }}
                />

                {/* Refracted Roastery Typography across surface */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center rotate-[-30deg] scale-90 opacity-70 select-none">
                  <span className="font-mono text-[9px] sm:text-[11px] font-semibold tracking-wider text-amber-200 uppercase">
                    specialty coffee roastery
                  </span>
                  <span className="font-mono text-[7px] sm:text-[9px] text-amber-400 tracking-widest mt-1">
                    100% ARABICA &bull; ETHIOPIA GUJI
                  </span>
                  <span className="text-[10px] sm:text-[12px] font-medium text-amber-100 tracking-tight mt-0.5">
                    SCA Cup Score 91.5 &bull; Velvet Crema
                  </span>
                  <span className="text-[8px] sm:text-[10px] text-yellow-200/90 tracking-wide mt-1">
                    Small Batch Hand Roasted &bull; Direct Trade
                  </span>
                </div>

                {/* Glossy Curved Glare Highlight on Top Rim */}
                <div className="absolute -top-1/4 left-1/4 w-3/4 h-1/2 bg-gradient-to-b from-white/50 via-amber-200/30 to-transparent rounded-full blur-[2px] transform -rotate-12" />
              </div>
            </div>

            {/* Bottom 3D Warm Shadow */}
            <div 
              className="absolute -bottom-3 inset-x-4 h-7 rounded-full blur-[8px] opacity-70 -z-10"
              style={{
                background: "linear-gradient(90deg, #78350f, #b45309, #d97706)"
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating Warm Coffee Aroma / Steam Swirl on the Right */}
      <div className="absolute top-[36%] sm:top-[40%] right-[3%] sm:right-[10%] md:right-[14%] w-[180px] sm:w-[260px] h-[220px] sm:h-[300px] pointer-events-none animate-float-slow">
        <svg viewBox="0 0 200 240" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="lightSteamGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#d97706" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#b45309" stopOpacity="0.8" />
              <stop offset="95%" stopColor="#78350f" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.2" />
            </linearGradient>
            <filter id="lightSteamGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sweeping Aroma Arc */}
          <path
            d="M 30 210 C 110 230, 190 170, 175 100 C 165 45, 115 15, 75 40 C 45 60, 40 100, 70 125 C 105 150, 150 140, 170 110"
            fill="none"
            stroke="url(#lightSteamGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            filter="url(#lightSteamGlow)"
            className="opacity-70"
          />

          {/* Inner Highlight Line */}
          <path
            d="M 30 210 C 110 230, 190 170, 175 100 C 165 45, 115 15, 75 40"
            fill="none"
            stroke="#b45309"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-40"
          />
        </svg>
      </div>
    </div>
  );
}
