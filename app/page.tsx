import Dashboard from "../components/Dashboard";
import { Store } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/70 font-sans text-slate-900 relative">
      {/* Modern subtle ambient light glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-sky-100/50 via-slate-100/40 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[40rem] -left-32 w-80 h-80 bg-indigo-50/40 rounded-full blur-3xl" />
        <div className="absolute top-[65rem] -right-32 w-80 h-80 bg-emerald-50/40 rounded-full blur-3xl" />
      </div>

      {/* Sticky Glass Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_4px_0_rgba(15,23,42,0.03)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-slate-900">
            <div className="size-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Store className="size-4" />
            </div>
            <span>StoreDash</span>
          </div>
          <nav>
            <ul className="flex space-x-6 font-medium text-sm text-slate-600">
              <li>
                <a
                  href="#home"
                  className="hover:text-slate-900 transition-colors py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="hover:text-slate-900 transition-colors py-1"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-slate-900 transition-colors py-1"
                >
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HeroUI v3 Dashboard Content */}
      <Dashboard />
    </div>
  );
}
