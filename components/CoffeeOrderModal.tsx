"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Coffee, ArrowRight } from "lucide-react";

interface CoffeeOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoffeeOrderModal({ isOpen, onClose }: CoffeeOrderModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    selection: "House Blend Espresso Beans (1kg)",
    grindType: "Whole Bean (Recommended)",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#fffdfa] border border-[#e8d7c6] p-7 shadow-[0_25px_60px_rgba(60,30,10,0.25)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Warm glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-[#f2e5d6] hover:bg-[#e8d5c0] text-[#7a4c30] hover:text-[#1f1109] transition-colors cursor-pointer"
        >
          <X className="size-4" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="size-14 mx-auto rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shadow-xs">
              <CheckCircle2 className="size-7" />
            </div>
            <h3 className="text-xl font-bold text-[#1f1109]">Roastery Order Received</h3>
            <p className="text-sm text-[#5c3a27] max-w-sm mx-auto">
              Our lead roaster will contact{" "}
              <span className="text-[#92400e] font-bold">{formData.contact || "you"}</span>{" "}
              to dispatch your freshly sealed beans.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#faeedf] border border-[#eedcc8] text-[#92400e] text-[11px] font-bold mb-2 shadow-xs">
                <Coffee className="size-3 text-[#b45309]" />
                <span>Small Batch Artisan Order</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1f1109] tracking-tight">
                Order Freshly Roasted Beans
              </h3>
              <p className="text-xs text-[#7a4c30] mt-1 font-medium">
                Freshly roasted, nitrogen flushed, and sealed in one-way valve bags.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#4a2e1d] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf6f0] border border-[#eedcc8] text-sm text-[#1f1109] placeholder-[#9a765d] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#4a2e1d] mb-1">WhatsApp / Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="+62 812-xxxx-xxxx"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf6f0] border border-[#eedcc8] text-sm text-[#1f1109] placeholder-[#9a765d] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4a2e1d] mb-1">Select Coffee / Item</label>
                <select
                  value={formData.selection}
                  onChange={(e) => setFormData({ ...formData, selection: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf6f0] border border-[#eedcc8] text-sm text-[#1f1109] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all cursor-pointer font-medium"
                >
                  <option value="House Blend Espresso Beans (1kg)">House Blend Espresso Beans (1kg)</option>
                  <option value="Ethiopia Guji Single Origin (250g)">Ethiopia Guji Single Origin (250g)</option>
                  <option value="Sumatra Mandheling Dark Roast (250g)">Sumatra Mandheling Dark Roast (250g)</option>
                  <option value="Pour Over V60 Drip Kits">Pour Over V60 Drip Kits</option>
                  <option value="Cold Brew Steep Filters (Pack of 50)">Cold Brew Steep Filters (Pack of 50)</option>
                  <option value="Cafe Tasting Room Table Reservation">Cafe Tasting Room Table Reservation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4a2e1d] mb-1">Grind Profile</label>
                <select
                  value={formData.grindType}
                  onChange={(e) => setFormData({ ...formData, grindType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf6f0] border border-[#eedcc8] text-sm text-[#1f1109] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all cursor-pointer font-medium"
                >
                  <option value="Whole Bean (Recommended)">Whole Bean (Recommended for freshness)</option>
                  <option value="Coarse (French Press & Cold Brew)">Coarse (French Press &amp; Cold Brew)</option>
                  <option value="Medium (V60 & Chemex)">Medium (V60 &amp; Chemex Pour Over)</option>
                  <option value="Fine (Espresso & Moka Pot)">Fine (Espresso Machine &amp; Moka Pot)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4a2e1d] mb-1">Delivery Address or Special Notes</label>
                <textarea
                  rows={2}
                  placeholder="Delivery address in Jakarta, or preferred cafe visit date..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#faf6f0] border border-[#eedcc8] text-sm text-[#1f1109] placeholder-[#9a765d] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all resize-none font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#853f0e] via-[#a34b12] to-[#c2611a] hover:from-[#78350f] hover:to-[#a34b12] shadow-[0_4px_18px_rgba(180,83,9,0.35)] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Coffee className="size-4" />
                  <span>Submit Order to Roastery</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
