import Dashboard from "../components/Dashboard";
import { Store, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/70 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 relative selection:bg-blue-600 selection:text-white">
      {/* SaaS Subtle Grid & Radial Glow Background */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-40 dark:opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.25) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-200/40 via-sky-100/25 to-transparent blur-3xl opacity-70 dark:opacity-30" />
        <div className="absolute top-[45rem] -left-40 w-96 h-96 bg-indigo-100/40 dark:bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute top-[75rem] -right-40 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-900/20 rounded-full blur-3xl" />
      </div>

      {/* Modern SaaS Header Navbar */}
      <header className="sticky top-0 z-50 bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 shadow-[0_1px_8px_0_rgba(15,23,42,0.03)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Store className="size-4.5" />
            </div>
            <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-900 dark:text-slate-50">
              <span>StoreDash</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800">
                PRO
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 font-medium text-sm text-slate-600 dark:text-slate-400">
            <a
              href="#home"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-1"
            >
              Overview
            </a>
            <a
              href="#product"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-1"
            >
              Products & Stock
            </a>
            <a
              href="#about"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-1"
            >
              Operations & Support
            </a>
          </nav>

          {/* Right Header CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 mr-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Operational</span>
            </div>
            <a
              href="#product"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            >
              <span>Console</span>
              <ArrowRight className="size-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main SaaS Dashboard Content */}
      <Dashboard />

      {/* Modern SaaS Footer */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Store className="size-3.5" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">StoreDash SaaS</span>
            <span>•</span>
            <span>Enterprise Inventory Platform</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-medium">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              All Systems Operational
            </span>
          </div>

          <p>© {new Date().getFullYear()} StoreDash Inc. Powered by HeroUI v3.</p>
        </div>
      </footer>
    </div>
  );
}
