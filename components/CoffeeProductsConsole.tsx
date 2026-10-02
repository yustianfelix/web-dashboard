"use client";

import { useState, useMemo } from "react";
import productsData from "../data/products.json";
import type { Product } from "@/types/dashboard";
import {
  Package,
  CheckCircle2,
  Download,
  Coffee,
  Search,
  Flame,
} from "lucide-react";

export default function CoffeeProductsConsole() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "inStock" | "lowStock">("all");
  const [copiedExport, setCopiedExport] = useState(false);

  const products: Product[] = productsData;

  const totalProducts = products.length;
  const inStockCount = products.filter((p) => p.inStock).length;
  const lowStockCount = products.filter((p) => !p.inStock).length;
  const healthRate = Math.round((inStockCount / totalProducts) * 100);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter =
        filterStatus === "all" ||
        (filterStatus === "inStock" && product.inStock) ||
        (filterStatus === "lowStock" && !product.inStock);

      return matchesSearch && matchesFilter;
    });
  }, [products, searchQuery, filterStatus]);

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "roastcraft-inventory-telemetry.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  return (
    <section id="products" className="relative z-10 max-w-7xl mx-auto px-6 py-20 scroll-mt-32">
      {/* Console Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faeedf] border border-[#eedcc8] text-[#92400e] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
          <Coffee className="size-3 text-[#b45309]" />
          <span>Product Catalog &bull; Roastery Stock Telemetry</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1c100b]">
          Artisanal Beans &amp; Brew Equipment
        </h2>
        <p className="text-sm sm:text-base text-[#5c3a27] mt-2 max-w-2xl">
          Real-time visibility into available single origin roasts, house blends, and specialty brew equipment
          dispatched fresh from our Jakarta roastery.
        </p>
      </div>

      {/* KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {/* Managed Beans & SKUs */}
        <div className="p-6 rounded-2xl bg-white/90 border border-[#e8d7c6] hover:border-amber-500/60 transition-all shadow-[0_4px_16px_rgba(60,30,10,0.05)]">
          <div className="flex items-center justify-between pb-4 border-b border-[#eddccb]">
            <div>
              <span className="text-[11px] font-bold text-[#7a4c30] uppercase tracking-wider block">
                Catalog Selections
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#1f1109]">{totalProducts}</span>
                <span className="text-[11px] font-semibold text-[#92400e] bg-[#faeedf] border border-[#eedcc8] px-2 py-0.5 rounded-full">
                  Batch Verified
                </span>
              </div>
            </div>
            <div className="size-11 rounded-xl bg-[#faeedf] border border-[#eedcc8] text-[#92400e] flex items-center justify-center shadow-xs">
              <Coffee className="size-5" />
            </div>
          </div>
          <p className="text-xs text-[#7a4c30] pt-3">
            Stored in climate-controlled degassing silos
          </p>
        </div>

        {/* Roastery Freshness Health */}
        <div className="p-6 rounded-2xl bg-white/90 border border-[#e8d7c6] hover:border-emerald-500/60 transition-all shadow-[0_4px_16px_rgba(60,30,10,0.05)]">
          <div className="flex items-center justify-between pb-4 border-b border-[#eddccb]">
            <div>
              <span className="text-[11px] font-bold text-[#7a4c30] uppercase tracking-wider block">
                Roast Availability
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-emerald-700">{healthRate}%</span>
                <span className="text-xs text-[#7a4c30]">
                  ({inStockCount}/{totalProducts} ready)
                </span>
              </div>
            </div>
            <div className="size-11 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shadow-xs">
              <CheckCircle2 className="size-5" />
            </div>
          </div>
          <div className="pt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Dispatched within 24 Hours
            </span>
          </div>
        </div>

        {/* Restock Pipeline */}
        <div className="p-6 rounded-2xl bg-white/90 border border-[#e8d7c6] hover:border-amber-500/60 transition-all shadow-[0_4px_16px_rgba(60,30,10,0.05)]">
          <div className="flex items-center justify-between pb-4 border-b border-[#eddccb]">
            <div>
              <span className="text-[11px] font-bold text-[#7a4c30] uppercase tracking-wider block">
                Roast Batch Queue
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#b45309]">{lowStockCount}</span>
                <span className="text-[11px] font-semibold text-[#b45309] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  Drum scheduled
                </span>
              </div>
            </div>
            <div className="size-11 rounded-xl bg-amber-50 border border-amber-200 text-[#b45309] flex items-center justify-center shadow-xs">
              <Flame className="size-5" />
            </div>
          </div>
          <div className="pt-3">
            <span className="text-xs text-[#92400e] font-medium">
              {lowStockCount > 0 ? "1 SKU scheduled for next drum cycle" : "All roastery bins replenished"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Catalog Console Container */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/95 border border-[#e8d7c6] shadow-[0_8px_35px_rgba(60,30,10,0.06)] space-y-6">
        {/* Controls: Search, Filter Tabs, and Export */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#eddccb]">
          {/* Search Field */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#92400e]" />
            <input
              type="text"
              placeholder="Search coffee, origin, drippers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#faf6f0] border border-[#eedcc8] text-xs text-[#1f1109] placeholder-[#946c52] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"
            />
          </div>

          {/* Status Tabs and Export Action */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 bg-[#faf6f0] p-1 rounded-xl border border-[#eedcc8]">
              <button
                type="button"
                onClick={() => setFilterStatus("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterStatus === "all"
                    ? "bg-[#92400e] text-white shadow-xs"
                    : "text-[#6e4125] hover:text-[#1f1109]"
                }`}
              >
                All ({totalProducts})
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus("inStock")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterStatus === "inStock"
                    ? "bg-emerald-700 text-white shadow-xs"
                    : "text-[#6e4125] hover:text-[#1f1109]"
                }`}
              >
                In Stock ({inStockCount})
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus("lowStock")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterStatus === "lowStock"
                    ? "bg-[#b45309] text-white shadow-xs"
                    : "text-[#6e4125] hover:text-[#1f1109]"
                }`}
              >
                Low Stock ({lowStockCount})
              </button>
            </div>

            <button
              type="button"
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#853f0e] bg-[#faeedf] border border-[#eedcc8] hover:bg-[#f5e3cf] hover:text-[#451a03] transition-all cursor-pointer shadow-xs"
            >
              <Download className="size-3.5 text-[#92400e]" />
              <span>{copiedExport ? "Exported!" : "Export JSON"}</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#eddccb] bg-[#fffdfa]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#eddccb] text-[#7a4c30] uppercase tracking-wider text-[11px] bg-[#faf5ee]">
                <th className="py-3.5 px-5 font-bold">SKU ID</th>
                <th className="py-3.5 px-4 font-bold">Coffee / Item Name</th>
                <th className="py-3.5 px-4 font-bold text-center">Bags / Units Ready</th>
                <th className="py-3.5 px-4 font-bold text-center">Status</th>
                <th className="py-3.5 px-5 font-bold text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2e5d6]">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-[#8d6044]">
                    <Package className="size-8 mx-auto text-[#c29676] mb-2 opacity-60" />
                    <p className="font-bold text-[#4a2e1d]">No matching coffee items found</p>
                    <p className="text-xs text-[#8d6044] mt-1">Try another search keyword or reset the filter.</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-[#fbf6ef] transition-colors group"
                  >
                    <td className="py-4 px-5">
                      <span className="font-mono text-xs font-bold text-[#853f0e] bg-[#faeedf] border border-[#eedcc8] px-2 py-0.5 rounded-md">
                        ROAST-{product.id.toString().padStart(3, "0")}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#1f1109] group-hover:text-[#92400e] transition-colors flex items-center gap-2">
                        <span>{product.name}</span>
                        {product.category?.includes("Single Origin") && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300">
                            Micro-Lot
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#7a4c30] flex items-center gap-1.5 mt-0.5">
                        <span className="size-1.5 rounded-full bg-[#b45309]" />
                        {product.category || "Specialty Item"}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className="font-mono font-bold text-[#3d2011]">
                          {product.stockCount ?? (product.inStock ? 100 : 8)} units
                        </span>
                        <div className="w-24 bg-[#ebd8c5] h-1.5 rounded-full mt-1.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              product.inStock ? "bg-emerald-600" : "bg-amber-600"
                            }`}
                            style={{
                              width: product.inStock ? "75%" : "15%",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                          product.inStock
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-amber-50 text-amber-800 border-amber-200"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${
                            product.inStock ? "bg-emerald-600 animate-pulse" : "bg-amber-600"
                          }`}
                        />
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          alert(`Roastery Telemetry:\nItem: ${product.name}\nCategory: ${product.category}\nBatch Stock: ${product.stockCount ?? 100} units\nStatus: ${product.status}`)
                        }
                        className="text-xs font-bold text-[#92400e] hover:text-[#582606] hover:underline cursor-pointer"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
