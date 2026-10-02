"use client";

import { useState, useMemo } from "react";
import productsData from "../data/products.json";
import contactData from "../data/contact.json";
import locationData from "../data/location.json";
import type { Product, ContactInfo, LocationInfo } from "@/types/dashboard";
import {
  Package,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Layers,
  Activity,
  Download,
  Globe2,
  Search,
} from "lucide-react";

export default function ScaleEnterpriseConsole() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "inStock" | "lowStock">("all");
  const [copiedExport, setCopiedExport] = useState(false);

  const products: Product[] = productsData;
  const contact: ContactInfo = contactData;
  const location: LocationInfo = locationData;

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
    downloadAnchor.setAttribute("download", "scale-telemetry-inventory.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  return (
    <section id="console" className="relative z-10 max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
      {/* Console Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Activity className="size-3 text-cyan-400" />
          <span>Scale Data Engine &bull; Real-time Telemetry Console</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Enterprise Stock &amp; Inventory Telemetry
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
          Real-time visibility into catalog telemetry, SKU counts, and logistics pipeline triggers,
          backed by the Scale Data Engine foundation.
        </p>
      </div>

      {/* KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {/* Managed SKUs */}
        <div className="p-6 rounded-2xl bg-[#090b18]/90 border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Active Managed SKUs
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-white">{totalProducts}</span>
                <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                  100% indexed
                </span>
              </div>
            </div>
            <div className="size-11 rounded-xl bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Layers className="size-5" />
            </div>
          </div>
          <p className="text-xs text-slate-400 pt-3">
            Tracked continuously across distributed store bins
          </p>
        </div>

        {/* Fulfillment Health */}
        <div className="p-6 rounded-2xl bg-[#090b18]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Fulfillment Health
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-emerald-400">{healthRate}%</span>
                <span className="text-xs text-slate-400">
                  ({inStockCount}/{totalProducts} ready)
                </span>
              </div>
            </div>
            <div className="size-11 rounded-xl bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <CheckCircle2 className="size-5" />
            </div>
          </div>
          <div className="pt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Instant Dispatch Ready
            </span>
          </div>
        </div>

        {/* Restock Pipeline */}
        <div className="p-6 rounded-2xl bg-[#090b18]/90 border border-white/[0.08] hover:border-amber-500/40 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Restock Pipeline
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-amber-400">{lowStockCount}</span>
                <span className="text-[11px] font-medium text-amber-400 bg-amber-950/60 border border-amber-800/50 px-2 py-0.5 rounded-full">
                  Action required
                </span>
              </div>
            </div>
            <div className="size-11 rounded-xl bg-amber-950/50 border border-amber-800/50 text-amber-400 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <AlertTriangle className="size-5" />
            </div>
          </div>
          <div className="pt-3">
            <span className="text-xs text-amber-300 font-medium">
              {lowStockCount > 0 ? "1 SKU below safety threshold" : "Thresholds optimal"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Catalog Console Container */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#090b17]/90 border border-white/[0.09] shadow-[0_8px_40px_rgba(0,0,0,0.6)] space-y-6">
        {/* Controls: Search, Filter Tabs, and Export */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
          {/* Search Field */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search SKU, name, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Status Tabs and Export Action */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setFilterStatus("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filterStatus === "all"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                All ({totalProducts})
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus("inStock")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filterStatus === "inStock"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                In Stock ({inStockCount})
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus("lowStock")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filterStatus === "lowStock"
                    ? "bg-amber-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Low Stock ({lowStockCount})
              </button>
            </div>

            <button
              type="button"
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              <Download className="size-3.5 text-cyan-400" />
              <span>{copiedExport ? "Telemetry Exported!" : "Export Telemetry"}</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#070813]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] text-slate-400 uppercase tracking-wider text-[11px] bg-white/[0.02]">
                <th className="py-3.5 px-5 font-semibold">SKU ID</th>
                <th className="py-3.5 px-4 font-semibold">Product Details</th>
                <th className="py-3.5 px-4 font-semibold text-center">Units in Stock</th>
                <th className="py-3.5 px-4 font-semibold text-center">Status</th>
                <th className="py-3.5 px-5 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500">
                    <Package className="size-8 mx-auto text-slate-600 mb-2 opacity-60" />
                    <p className="font-semibold text-slate-300">No matching products found</p>
                    <p className="text-xs text-slate-500 mt-1">Try another keyword or reset the filter.</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className="py-4 px-5">
                      <span className="font-mono text-xs text-purple-300 bg-purple-950/60 border border-purple-800/50 px-2 py-0.5 rounded-md">
                        SKU-{product.id.toString().padStart(3, "0")}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-white group-hover:text-purple-200 transition-colors">
                        {product.name}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <span className="size-1 rounded-full bg-cyan-400" />
                        {product.category || "General Supply"}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className="font-mono font-medium text-slate-200">
                          {product.stockCount ?? (product.inStock ? 100 : 8)} units
                        </span>
                        <div className="w-24 bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              product.inStock ? "bg-emerald-400" : "bg-amber-400"
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
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${
                          product.inStock
                            ? "bg-emerald-950/60 text-emerald-300 border-emerald-800/60"
                            : "bg-amber-950/60 text-amber-300 border-amber-800/60"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${
                            product.inStock ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                          }`}
                        />
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          alert(`Telemetric Inspection: ${product.name} (SKU-${product.id.toString().padStart(3, "0")})`)
                        }
                        className="text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
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

      {/* Logistics & Enterprise Support Center */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Operations Lead */}
        <div className="p-7 rounded-3xl bg-[#090b17]/90 border border-white/[0.09] shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="size-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-base flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {contact.initials}
                </div>
                <span
                  className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-400 ring-2 ring-[#090b17]"
                  title="Available"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{contact.name}</h3>
                  <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                    {contact.statusBadge || "Online"}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{contact.role}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock className="size-3.5 text-purple-400" />
                Response SLA:
              </span>
              <span className="font-semibold text-white">{contact.responseTime || "~2 minutes"}</span>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3.5 text-xs text-slate-300 hover:text-white p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-800/50 text-purple-400">
                  <Mail className="size-4" />
                </div>
                <div className="truncate">
                  <p className="font-medium text-white">Email Logistics Lead</p>
                  <p className="text-slate-400 truncate">{contact.email}</p>
                </div>
              </a>

              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3.5 text-xs text-slate-300 hover:text-white p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="font-medium text-white">Priority Dispatch Hotline</p>
                  <p className="text-slate-400">{contact.phone}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <a
              href={`mailto:${contact.email}?subject=Scale%20Enterprise%20Inventory%20Inquiry`}
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <Mail className="size-3.5" />
              <span>Contact Operations Lead</span>
            </a>
          </div>
        </div>

        {/* Distribution Hub Card */}
        <div className="p-7 rounded-3xl bg-[#090b17]/90 border border-white/[0.09] shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <MapPin className="size-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{location.title}</h3>
                  <span className="text-[10px] font-semibold text-cyan-300 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded-full">
                    {location.status || "Operational"}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{location.subtitle}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Globe2 className="size-3.5 text-cyan-400" />
                Timezone:
              </span>
              <span className="font-semibold text-white">{location.timezone || "UTC+7 (Jakarta)"}</span>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3.5 text-slate-300">
                <MapPin className="size-4 mt-0.5 text-cyan-400 shrink-0" />
                <p className="leading-relaxed">
                  {location.address.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < location.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex items-center gap-3.5 text-slate-300">
                <Clock className="size-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="font-medium text-white">Operating Schedule</p>
                  <p className="text-slate-400">{location.operatingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink className="size-3.5" />
              <span>View Distribution Center on Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
