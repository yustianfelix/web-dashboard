import Dashboard from "@/components/Dashboard";
import { Store } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-muted/20 font-sans text-foreground">
      {/* Sticky Glass Navbar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="p-1.5 rounded-lg bg-primary text-primary-foreground">
              <Store className="size-4" />
            </div>
            <span>StoreDash</span>
          </div>
          <nav>
            <ul className="flex space-x-6 font-medium text-sm text-muted-foreground">
              <li>
                <a
                  href="#home"
                  className="hover:text-foreground transition-colors py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="hover:text-foreground transition-colors py-1"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors py-1"
                >
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Dashboard Main Content */}
      <Dashboard />
    </div>
  );
}
