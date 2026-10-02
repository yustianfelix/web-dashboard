"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Coffee, Menu, X } from "lucide-react";

interface CoffeeNavbarProps {
  onOpenOrder?: () => void;
}

export default function CoffeeNavbar({ onOpenOrder }: CoffeeNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#fcf9f4]/95 backdrop-blur-xl border-b border-[#ebdccd] shadow-[0_4px_20px_rgba(60,30,10,0.06)]"
          : "bg-[#fcf9f4]/85 backdrop-blur-md border-b border-[#ebdccd]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="flex items-center gap-2 group select-none text-[#1f1109] focus:outline-none"
          >
            <div className="size-8 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-500 flex items-center justify-center text-white font-black shadow-[0_2px_8px_rgba(217,119,6,0.3)] group-hover:scale-105 transition-transform">
              <Coffee className="size-4.5" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold tracking-tight text-[#1f1109] font-sans transition-all group-hover:text-amber-800">
                roastcraft
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 font-mono">
                cafe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: ONLY Product, About Us, Contact Person */}
          <nav className="hidden md:flex items-center space-x-9 text-sm font-medium text-[#4a2e1d]">
            <a
              href="#products"
              className="hover:text-amber-700 transition-colors py-2 relative group"
            >
              <span>Product</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
            </a>

            <a
              href="#about"
              className="hover:text-amber-700 transition-colors py-2 relative group"
            >
              <span>About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
            </a>

            <a
              href="#contact"
              className="hover:text-amber-700 transition-colors py-2 relative group"
            >
              <span>Contact Person</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
            </a>
          </nav>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenOrder}
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-[#853f0e] via-[#a34b12] to-[#c2611a] border border-amber-600/40 shadow-[0_2px_12px_rgba(180,83,9,0.3)] hover:shadow-[0_4px_20px_rgba(180,83,9,0.45)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <span>Order Fresh Roast</span>
            <ArrowRight className="size-3 text-amber-100" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#4a2e1d] hover:text-amber-900 hover:bg-[#f0e4d7] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf6f0] border-b border-[#ebdccd] px-6 py-5 space-y-4 animate-in slide-in-from-top-3 duration-200 shadow-lg">
          <nav className="flex flex-col space-y-3 text-sm text-[#4a2e1d] font-medium">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-700"
            >
              Product
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-700"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-700"
            >
              Contact Person
            </a>
          </nav>
          <div className="pt-3 border-t border-[#ebdccd]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder?.();
              }}
              className="w-full justify-center inline-flex items-center gap-1.5 py-2.5 text-xs font-semibold text-white rounded-full bg-[#92400e] hover:bg-[#78350f] shadow-md cursor-pointer"
            >
              <span>Order Fresh Roast</span>
              <ArrowRight className="size-3" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
