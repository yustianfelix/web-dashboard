"use client";

import { useState, useMemo } from "react";
import productsData from "../data/products.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Package,
  CheckCircle2,
  AlertTriangle,
  Search,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowDown,
  Sparkles,
  ExternalLink,
  Store,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  status: string;
  inStock: boolean;
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "inStock" | "lowStock">("all");

  const products: Product[] = productsData;

  const totalProducts = products.length;
  const inStockCount = products.filter((p) => p.inStock).length;
  const lowStockCount = products.filter((p) => !p.inStock).length;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        filterStatus === "all" ||
        (filterStatus === "inStock" && product.inStock) ||
        (filterStatus === "lowStock" && !product.inStock);

      return matchesSearch && matchesFilter;
    });
  }, [products, searchQuery, filterStatus]);

  return (
    <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">
      {/* Home / Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-[65vh] flex flex-col justify-center space-y-8"
      >
        <div className="space-y-4">
          <Badge
            variant="outline"
            className="px-3 py-1 gap-1.5 text-xs font-medium border-primary/20 bg-primary/5 text-primary inline-flex"
          >
            <Sparkles className="size-3.5 text-primary" />
            Inventory & Store Dashboard
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Welcome to Our Store
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Manage your inventory, view real-time stock levels, and access contact
            information all from one modern vertical dashboard.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#product"
              className={cn(buttonVariants({ size: "lg" }), "shadow-sm gap-2")}
            >
              <Package className="size-4" />
              View Products
              <ArrowDown className="size-3.5" />
            </a>
            <a
              href="#about"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
            >
              <Store className="size-4" />
              Contact & Location
            </a>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription className="font-medium">Total Products</CardDescription>
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Package className="size-4" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">{totalProducts}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Registered items in catalog
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription className="font-medium">In Stock</CardDescription>
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="size-4" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {inStockCount}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Ready for immediate dispatch
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription className="font-medium">Stock Attention</CardDescription>
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <AlertTriangle className="size-4" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {lowStockCount}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {lowStockCount > 0 ? "Items require restocking" : "All items well-stocked"}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="pt-16 scroll-mt-20">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Package className="size-5 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  What We Sell
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Browse our current catalog and check live inventory availability.
              </p>
            </div>
            <Badge variant="secondary" className="w-fit">
              {filteredProducts.length} of {products.length} displayed
            </Badge>
          </div>

          <Card className="shadow-sm">
            <CardHeader className="gap-4 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Button
                    variant={filterStatus === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus("all")}
                  >
                    All ({totalProducts})
                  </Button>
                  <Button
                    variant={filterStatus === "inStock" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus("inStock")}
                  >
                    In Stock ({inStockCount})
                  </Button>
                  <Button
                    variant={filterStatus === "lowStock" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus("lowStock")}
                  >
                    Low Stock ({lowStockCount})
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="w-16 pl-6">ID</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead className="w-36 text-center">Status</TableHead>
                    <TableHead className="w-28 text-right pr-6">Availability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <TableRow key={product.id} className="hover:bg-muted/40">
                        <TableCell className="font-mono text-xs text-muted-foreground pl-6">
                          #{product.id.toString().padStart(3, "0")}
                        </TableCell>
                        <TableCell className="font-medium text-foreground">
                          {product.name}
                        </TableCell>
                        <TableCell className="text-center">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                              product.inStock
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
                                : "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"
                            }`}
                          >
                            <span
                              className={`size-1.5 rounded-full ${
                                product.inStock
                                  ? "bg-emerald-500 animate-pulse"
                                  : "bg-amber-500"
                              }`}
                            />
                            {product.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <Badge
                            variant={product.inStock ? "secondary" : "outline"}
                            className="text-xs"
                          >
                            {product.inStock ? "Available" : "Limited"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                        <div className="flex flex-col items-center justify-center gap-1">
                          <p className="font-medium">No products found</p>
                          <p className="text-xs">
                            Try adjusting your search query or status filter.
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="pt-16 scroll-mt-20">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Store className="size-5 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                About Us
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Get in touch with our team or drop by our Jakarta office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Person Card */}
            <Card className="shadow-sm flex flex-col justify-between">
              <div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Avatar size="lg">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        BS
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base font-semibold">
                        Budi Santoso
                      </CardTitle>
                      <CardDescription>Primary Contact & Manager</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <Separator />

                <CardContent className="pt-4 space-y-3">
                  <a
                    href="mailto:budi.santoso@examplestore.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group p-2 rounded-lg hover:bg-muted/50"
                  >
                    <div className="p-2 rounded-md bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="size-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-medium text-foreground">Email</p>
                      <p className="truncate">budi.santoso@examplestore.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+6281234567890"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group p-2 rounded-lg hover:bg-muted/50"
                  >
                    <div className="p-2 rounded-md bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Phone</p>
                      <p>+62 812-3456-7890</p>
                    </div>
                  </a>
                </CardContent>
              </div>

              <div className="p-4 pt-0">
                <a
                  href="mailto:budi.santoso@examplestore.com"
                  className={cn(buttonVariants({ variant: "outline" }), "w-full gap-2")}
                >
                  <Mail className="size-4" />
                  Send Message
                </a>
              </div>
            </Card>

            {/* Address & Store Info Card */}
            <Card className="shadow-sm flex flex-col justify-between">
              <div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-semibold">
                        Store Location
                      </CardTitle>
                      <CardDescription>Jakarta Main Headquarters</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <Separator />

                <CardContent className="pt-4 space-y-4">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
                    <p className="leading-relaxed">
                      Jl. Merdeka No. 45<br />
                      Jakarta Selatan, 12345<br />
                      Indonesia
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="size-4 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-foreground">Operating Hours</p>
                      <p>Monday – Saturday, 08:00 – 20:00 WIB</p>
                    </div>
                  </div>
                </CardContent>
              </div>

              <div className="p-4 pt-0">
                <a
                  href="https://maps.google.com/?q=Jakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "w-full gap-2")}
                >
                  <ExternalLink className="size-4" />
                  View on Google Maps
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
