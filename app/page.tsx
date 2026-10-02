"use client";

import React, { useState } from "react";
import CoffeeAnnouncementBanner from "../components/CoffeeAnnouncementBanner";
import CoffeeNavbar from "../components/CoffeeNavbar";
import CoffeeHero from "../components/CoffeeHero";
import CoffeeHighlights from "../components/CoffeeHighlights";
import CoffeeAbout from "../components/CoffeeAbout";
import CoffeeProductsConsole from "../components/CoffeeProductsConsole";
import CoffeeContact from "../components/CoffeeContact";
import CoffeeFooter from "../components/CoffeeFooter";
import CoffeeOrderModal from "../components/CoffeeOrderModal";
import CoffeeLightBackground from "../components/CoffeeLightBackground";

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#2c1810] relative overflow-x-hidden font-sans cafe-light-bg">
      {/* Cool Coffee Background with Roasted Beans & Latte Art Waves */}
      <CoffeeLightBackground />

      {/* Pinned Top Header (Announcement Banner + Glassmorphic Navbar) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full transition-all">
        {showBanner && (
          <CoffeeAnnouncementBanner onClose={() => setShowBanner(false)} />
        )}
        <CoffeeNavbar
          onOpenOrder={() => setIsOrderModalOpen(true)}
        />
      </div>

      {/* Main Content with top padding offset for the pinned navbar */}
      <main className={`relative z-10 transition-all ${showBanner ? "pt-[112px]" : "pt-[72px]"}`}>
        {/* Coffee Hero with 3D Artisan Roasting Ring & Crema Visuals */}
        <CoffeeHero
          onOpenOrder={() => setIsOrderModalOpen(true)}
          onExploreProducts={scrollToProducts}
        />

        {/* Roastery Accolades & Coffee Badges */}
        <CoffeeHighlights />

        {/* Product Catalog & Live Roastery Stock Telemetry Console */}
        <CoffeeProductsConsole />

        {/* About Us: Farm to Cup Heritage & Craft */}
        <CoffeeAbout
          onOpenOrder={() => setIsOrderModalOpen(true)}
        />

        {/* Contact Person & Flagship Roastery Hub */}
        <CoffeeContact />
      </main>

      {/* Cafe Roastery Footer */}
      <CoffeeFooter />

      {/* Fresh Roast Order & Table Reservation Modal */}
      <CoffeeOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
