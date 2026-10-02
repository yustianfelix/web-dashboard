"use client";

import React from "react";

export default function CoffeeLightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Top Morning Sunbeam Cafe Ambiance */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full blur-[100px] opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.22) 0%, rgba(245, 158, 11, 0.12) 40%, rgba(217, 119, 6, 0.04) 70%, transparent 80%)"
        }}
      />

      {/* Atmospheric Organic Coffee Flow / Aroma Wave Vectors */}
      <svg
        className="absolute top-0 left-0 w-full h-[1200px] opacity-25"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        fill="none"
      >
        <defs>
          <linearGradient id="coffeeWave1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#b45309" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="coffeeWave2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#d97706" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Top Wave Flow */}
        <path
          d="M -100 120 C 300 240, 600 -40, 1000 140 C 1300 280, 1500 80, 1600 120"
          stroke="url(#coffeeWave1)"
          strokeWidth="1.8"
          strokeDasharray="8 6"
        />
        <path
          d="M -50 200 C 350 320, 650 80, 1050 240 C 1350 360, 1520 180, 1650 220"
          stroke="url(#coffeeWave2)"
          strokeWidth="1.2"
        />
        <path
          d="M -80 340 C 280 440, 720 220, 1100 380 C 1380 500, 1540 320, 1620 360"
          stroke="url(#coffeeWave1)"
          strokeWidth="1"
          strokeDasharray="12 8"
        />
      </svg>

      {/* Cool Floating Roasted Coffee Beans (Vector Illustrations) */}
      {/* Bean 1: Top Left */}
      <div className="absolute top-[14%] left-[6%] sm:left-[10%] w-10 sm:w-12 h-14 sm:h-16 opacity-35 animate-float-slow transform -rotate-45">
        <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_4px_8px_rgba(78,41,20,0.15)]">
          <ellipse cx="50" cy="70" rx="38" ry="58" fill="#5c341e" />
          {/* Bean Center Curve Crease */}
          <path
            d="M 50 16 C 56 45, 42 95, 50 124"
            fill="none"
            stroke="#2c160c"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 50 16 C 56 45, 42 95, 50 124"
            fill="none"
            stroke="#8c5332"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Subtle Roast Highlight */}
          <ellipse cx="40" cy="50" rx="14" ry="24" fill="#a0603b" opacity="0.3" transform="rotate(-15 40 50)" />
        </svg>
      </div>

      {/* Bean 2: Top Right */}
      <div className="absolute top-[22%] right-[8%] sm:right-[12%] w-12 sm:w-14 h-16 sm:h-20 opacity-30 animate-float-medium transform rotate-35">
        <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_6px_10px_rgba(78,41,20,0.12)]">
          <ellipse cx="50" cy="70" rx="40" ry="60" fill="#6d3e23" />
          <path
            d="M 50 14 C 44 48, 58 92, 50 126"
            fill="none"
            stroke="#361a0e"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M 50 14 C 44 48, 58 92, 50 126"
            fill="none"
            stroke="#9e623c"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <ellipse cx="62" cy="65" rx="16" ry="26" fill="#b8784d" opacity="0.25" transform="rotate(15 62 65)" />
        </svg>
      </div>

      {/* Bean 3: Mid-Left Floating Bean */}
      <div className="absolute top-[52%] left-[4%] sm:left-[7%] w-8 sm:w-10 h-11 sm:h-14 opacity-25 animate-float-slow transform rotate-12">
        <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_4px_6px_rgba(78,41,20,0.12)]">
          <ellipse cx="50" cy="70" rx="36" ry="54" fill="#4d2815" />
          <path
            d="M 50 18 C 55 46, 44 94, 50 122"
            fill="none"
            stroke="#211008"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M 50 18 C 55 46, 44 94, 50 122"
            fill="none"
            stroke="#7a4224"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Bean 4: Bottom-Right Roastery Bean */}
      <div className="absolute top-[68%] right-[5%] sm:right-[9%] w-9 sm:w-11 h-13 sm:h-16 opacity-25 animate-float-medium transform -rotate-25">
        <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_5px_8px_rgba(78,41,20,0.1)]">
          <ellipse cx="50" cy="70" rx="37" ry="56" fill="#58301a" />
          <path
            d="M 50 16 C 45 48, 55 92, 50 124"
            fill="none"
            stroke="#2a140b"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <ellipse cx="40" cy="55" rx="14" ry="22" fill="#91522f" opacity="0.3" transform="rotate(-10 40 55)" />
        </svg>
      </div>

      {/* Latte Art Microfoam Ring Accent (Center-Right) */}
      <div className="absolute top-[35%] right-[2%] sm:right-[6%] w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full border border-amber-800/10 opacity-40 pointer-events-none" />
      <div className="absolute top-[38%] right-[4%] sm:right-[8%] w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] rounded-full border border-amber-700/8 opacity-30 pointer-events-none" />
    </div>
  );
}
