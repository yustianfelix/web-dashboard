"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

interface ScaleNavbarProps {
  onOpenDemo?: () => void;
  onOpenLogin?: () => void;
}

export default function ScaleNavbar({ onOpenDemo, onOpenLogin }: ScaleNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsHovered, setProductsHovered] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#04040a]/85 backdrop-blur-xl border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo: scale */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 group select-none text-white focus:outline-none"
          >
            {/* Iconic geometric 'scale' logo mark */}
            <span className="text-2xl font-bold tracking-tight text-white font-sans transition-all group-hover:text-purple-300">
              scale
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-normal text-slate-300">
            {/* Products with interactive Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsHovered(true)}
              onMouseLeave={() => setProductsHovered(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-white py-2 transition-colors cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 text-slate-400 ${
                    productsHovered ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              {/* Products Dropdown Menu */}
              {productsHovered && (
                <div className="absolute top-full left-0 mt-1 w-80 p-3 rounded-2xl bg-[#0c0d1b] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    <a
                      href="#console"
                      className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-purple-300 flex items-center justify-between">
                        <span>Scale Data Engine</span>
                        <span className="text-[10px] text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-1.5 py-0.5 rounded">Live</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        The comprehensive data foundation for enterprise AI & telemetry.
                      </p>
                    </a>

                    <a
                      href="#platform"
                      className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-pink-300">
                        Generative AI Platform
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        Fine-tuning, RLHF, and automated model evaluation.
                      </p>
                    </a>

                    <a
                      href="#console"
                      className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-blue-300">
                        Enterprise Telemetry Console
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        Real-time SKU catalog and logistics management console.
                      </p>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#government" className="hover:text-white transition-colors py-2">
              Government
            </a>
            <a href="#solutions" className="hover:text-white transition-colors py-2">
              Solutions
            </a>
            <a href="#customers" className="hover:text-white transition-colors py-2">
              Customers
            </a>
            <a href="#pricing" className="hover:text-white transition-colors py-2">
              Pricing
            </a>
            <a href="#resources" className="hover:text-white transition-colors py-2">
              Resources
            </a>
          </nav>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={onOpenDemo}
            className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-purple-900/60 via-purple-800/40 to-indigo-900/60 border border-purple-500/50 shadow-[0_0_18px_rgba(168,85,247,0.35)] hover:shadow-[0_0_28px_rgba(168,85,247,0.55)] hover:border-purple-400 transition-all cursor-pointer active:scale-95"
          >
            <span>Book a Demo</span>
            <ArrowRight className="size-3 text-purple-300" />
          </button>

          <button
            type="button"
            onClick={onOpenLogin}
            className="text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Log In
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070814] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-3 text-sm text-slate-300">
            <a
              href="#console"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Products & Data Engine
            </a>
            <a
              href="#government"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Government
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Solutions
            </a>
            <a
              href="#customers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Customers
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Resources
            </a>
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo?.();
              }}
              className="w-full justify-center inline-flex items-center gap-1.5 py-2.5 text-xs font-semibold text-white rounded-full bg-purple-600 hover:bg-purple-500 shadow-md"
            >
              <span>Book a Demo</span>
              <ArrowRight className="size-3" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
