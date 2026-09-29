"use client";

import {useState, useMemo} from "react";
import productsData from "../data/products.json";
import contactData from "../data/contact.json";
import locationData from "../data/location.json";
import type {Product, ContactInfo, LocationInfo} from "@/types/dashboard";
import {
    Card,
    Button,
    Chip,
    Table,
    Avatar,
    SearchField,
    Separator,
} from "@heroui/react";
import {
    Package,
    CheckCircle2,
    AlertTriangle,
    Mail,
    Phone,
    MapPin,
    Clock,
    ArrowRight,
    Sparkles,
    ExternalLink,
    Layers,
    Activity,
    Download,
    ShieldCheck,
    Zap,
    Globe2,
    Headphones,
} from "lucide-react";

export default function Dashboard() {
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

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    };

    const handleExport = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "inventory-telemetry.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();

        setCopiedExport(true);
        setTimeout(() => setCopiedExport(false), 2000);
    };

    return (
        <main className="max-w-5xl mx-auto px-6 pb-28 space-y-24">
            {/* SaaS Hero Section */}
            <section
                id="home"
                className="pt-24 min-h-[75vh] flex flex-col justify-center space-y-10"
            >
                <div className="space-y-6 max-w-3xl">
                    {/* SaaS Release Pill */}
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-medium shadow-xs">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"/>
                        <span className="font-semibold">StoreDash 3.2</span>
                        <span className="text-blue-400 dark:text-blue-500">•</span>
                        <span className="flex items-center gap-1">
              <Sparkles className="size-3"/>
              Real-time Inventory Telemetry
            </span>
                    </div>

                    {/* High-converting SaaS Headline */}
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.12]">
                        Modern Inventory Control{" "}
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
              at Enterprise Speed
            </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Automate SKU tracking, monitor stock levels in real time, and collaborate seamlessly
                        with our dedicated fulfillment team through a unified SaaS console.
                    </p>

                    {/* Call to Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Button
                            variant="primary"
                            size="lg"
                            onPress={() => scrollTo("product")}
                            className="gap-2.5 font-medium shadow-sm"
                        >
                            <Package className="size-4"/>
                            Open Product Console
                            <ArrowRight className="size-4"/>
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onPress={() => scrollTo("about")}
                            className="gap-2 font-medium bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
                        >
                            <Headphones className="size-4 text-slate-600 dark:text-slate-400"/>
                            Dedicated Support
                        </Button>
                    </div>

                    {/* Trust & Capability Badges */}
                    <div
                        className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-500 border-t border-slate-200/60 dark:border-slate-800/80">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4 text-blue-600 shrink-0"/>
                            <span>Real-Time Sync</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="size-4 text-emerald-600 shrink-0"/>
                            <span>99.9% Fulfillment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe2 className="size-4 text-indigo-600 shrink-0"/>
                            <span>Multi-Region Hub</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity className="size-4 text-amber-600 shrink-0"/>
                            <span>Zero Latency</span>
                        </div>
                    </div>
                </div>

                {/* SaaS Metrics KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <Card
                        variant="default"
                        className="p-6 bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] rounded-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                    >
                        <Card.Header className="p-0 pb-4 flex flex-row items-center justify-between">
                            <div>
                                <Card.Description
                                    className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Active Managed SKUs
                                </Card.Description>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <Card.Title className="text-3xl font-extrabold text-slate-900 dark:text-slate-50">
                                        {totalProducts}
                                    </Card.Title>
                                    <span
                                        className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                    +100% active
                  </span>
                                </div>
                            </div>
                            <div
                                className="size-11 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 flex items-center justify-center shadow-xs">
                                <Layers className="size-5"/>
                            </div>
                        </Card.Header>
                        <Card.Content className="p-0 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                            <p className="text-xs text-slate-500">
                                Tracked continuously across store inventory bins
                            </p>
                        </Card.Content>
                    </Card>

                    <Card
                        variant="default"
                        className="p-6 bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] rounded-2xl hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
                    >
                        <Card.Header className="p-0 pb-4 flex flex-row items-center justify-between">
                            <div>
                                <Card.Description
                                    className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Fulfillment Health
                                </Card.Description>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <Card.Title
                                        className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                                        {healthRate}%
                                    </Card.Title>
                                    <span className="text-xs font-medium text-slate-500">
                    ({inStockCount}/{totalProducts} ready)
                  </span>
                                </div>
                            </div>
                            <div
                                className="size-11 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                                <CheckCircle2 className="size-5"/>
                            </div>
                        </Card.Header>
                        <Card.Content className="p-0 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                            <Chip color="success" variant="soft" size="sm">
                                Instant Dispatch Ready
                            </Chip>
                        </Card.Content>
                    </Card>

                    <Card
                        variant="default"
                        className="p-6 bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] rounded-2xl hover:border-amber-300 dark:hover:border-amber-700 transition-all"
                    >
                        <Card.Header className="p-0 pb-4 flex flex-row items-center justify-between">
                            <div>
                                <Card.Description
                                    className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Restock Pipeline
                                </Card.Description>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <Card.Title className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
                                        {lowStockCount}
                                    </Card.Title>
                                    <span
                                        className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full">
                    Action required
                  </span>
                                </div>
                            </div>
                            <div
                                className="size-11 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 flex items-center justify-center shadow-xs">
                                <AlertTriangle className="size-5"/>
                            </div>
                        </Card.Header>
                        <Card.Content className="p-0 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                            <Chip
                                color={lowStockCount > 0 ? "warning" : "default"}
                                variant="soft"
                                size="sm"
                            >
                                {lowStockCount > 0 ? "1 SKU below threshold" : "Thresholds optimal"}
                            </Chip>
                        </Card.Content>
                    </Card>
                </div>
            </section>

            {/* Product Catalog Console */}
            <section id="product" className="pt-20 scroll-mt-20">
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <div
                                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wider uppercase mb-2">
                                <Activity className="size-3"/>
                                Live Inventory Console
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                Products & Stock Telemetry
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                Real-time visibility into available catalog inventory, SKU counts, and restocking
                                triggers.
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onPress={handleExport}
                                className="gap-2 text-xs font-medium bg-white dark:bg-slate-900"
                            >
                                <Download className="size-3.5"/>
                                {copiedExport ? "Exported!" : "Export JSON"}
                            </Button>
                        </div>
                    </div>

                    {/* Main Console Card */}
                    <Card
                        variant="default"
                        className="p-6 bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] rounded-2xl space-y-6"
                    >
                        {/* Control Bar: Search & Status Filters */}
                        <div
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                            <div className="w-full sm:max-w-xs">
                                <SearchField
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                    aria-label="Filter products or category"
                                >
                                    <SearchField.Group>
                                        <SearchField.SearchIcon/>
                                        <SearchField.Input placeholder="Search SKU, name, category..."/>
                                        <SearchField.ClearButton/>
                                    </SearchField.Group>
                                </SearchField>
                            </div>

                            {/* Status Segment Filters */}
                            <div
                                className="flex items-center gap-1.5 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-xl">
                                <Button
                                    variant={filterStatus === "all" ? "primary" : "ghost"}
                                    size="sm"
                                    onPress={() => setFilterStatus("all")}
                                    className={`text-xs font-medium ${
                                        filterStatus === "all" ? "shadow-xs" : "text-slate-600 dark:text-slate-400"
                                    }`}
                                >
                                    All ({totalProducts})
                                </Button>
                                <Button
                                    variant={filterStatus === "inStock" ? "primary" : "ghost"}
                                    size="sm"
                                    onPress={() => setFilterStatus("inStock")}
                                    className={`text-xs font-medium ${
                                        filterStatus === "inStock" ? "shadow-xs" : "text-slate-600 dark:text-slate-400"
                                    }`}
                                >
                                    In Stock ({inStockCount})
                                </Button>
                                <Button
                                    variant={filterStatus === "lowStock" ? "primary" : "ghost"}
                                    size="sm"
                                    onPress={() => setFilterStatus("lowStock")}
                                    className={`text-xs font-medium ${
                                        filterStatus === "lowStock" ? "shadow-xs" : "text-slate-600 dark:text-slate-400"
                                    }`}
                                >
                                    Low Stock ({lowStockCount})
                                </Button>
                            </div>
                        </div>

                        {/* SaaS Data Table */}
                        <Table>
                            <Table.ScrollContainer
                                className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                                <Table.Content aria-label="Products Inventory Table">
                                    <Table.Header>
                                        <Table.Column id="sku" isRowHeader
                                                      className="w-24 pl-5 text-xs font-semibold uppercase text-slate-500">
                                            SKU
                                        </Table.Column>
                                        <Table.Column id="product"
                                                      className="text-xs font-semibold uppercase text-slate-500">
                                            PRODUCT DETAILS
                                        </Table.Column>
                                        <Table.Column id="quantity"
                                                      className="w-36 text-center text-xs font-semibold uppercase text-slate-500">
                                            UNITS IN STOCK
                                        </Table.Column>
                                        <Table.Column id="status"
                                                      className="w-36 text-center text-xs font-semibold uppercase text-slate-500">
                                            STATUS
                                        </Table.Column>
                                        <Table.Column id="action"
                                                      className="w-28 text-right pr-5 text-xs font-semibold uppercase text-slate-500">
                                            ACTION
                                        </Table.Column>
                                    </Table.Header>
                                    <Table.Body
                                        items={filteredProducts}
                                        renderEmptyState={() => (
                                            <div className="py-14 text-center text-slate-500">
                                                <Package className="size-8 mx-auto text-slate-400 mb-2 opacity-60"/>
                                                <p className="font-semibold text-slate-800 dark:text-slate-200">No
                                                    matching products</p>
                                                <p className="text-xs mt-1">
                                                    Try searching for another keyword or switch back to the all products
                                                    filter.
                                                </p>
                                            </div>
                                        )}
                                    >
                                        {(product) => (
                                            <Table.Row
                                                id={product.id.toString()}
                                                className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group"
                                            >
                                                <Table.Cell className="pl-5">
                          <span
                              className="font-mono text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                            SKU-{product.id.toString().padStart(3, "0")}
                          </span>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <div className="py-1">
                                                        <div
                                                            className="font-semibold text-slate-900 dark:text-slate-100">
                                                            {product.name}
                                                        </div>
                                                        <div
                                                            className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                                                            <span
                                                                className="size-1.5 rounded-full bg-slate-300 dark:bg-slate-700"/>
                                                            {product.category || "General Supply"}
                                                        </div>
                                                    </div>
                                                </Table.Cell>

                                                <Table.Cell className="text-center">
                                                    <div className="inline-flex flex-col items-center">
                            <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
                              {product.stockCount ?? (product.inStock ? 100 : 8)} units
                            </span>
                                                        <div
                                                            className="w-20 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full ${
                                                                    product.inStock ? "bg-emerald-500" : "bg-amber-500"
                                                                }`}
                                                                style={{
                                                                    width: product.inStock ? "75%" : "15%",
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </Table.Cell>

                                                <Table.Cell className="text-center">
                                                    <Chip
                                                        color={product.inStock ? "success" : "warning"}
                                                        variant="soft"
                                                        size="sm"
                                                    >
                            <span className="flex items-center gap-1.5">
                              <span
                                  className={`size-1.5 rounded-full ${
                                      product.inStock
                                          ? "bg-emerald-500 animate-pulse"
                                          : "bg-amber-500"
                                  }`}
                              />
                                {product.status}
                            </span>
                                                    </Chip>
                                                </Table.Cell>

                                                <Table.Cell className="text-right pr-5">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onPress={() => {
                                                            alert(`Selected ${product.name} (SKU-${product.id.toString().padStart(3, "0")})`);
                                                        }}
                                                        className="text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50"
                                                    >
                                                        Inspect
                                                    </Button>
                                                </Table.Cell>
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                                </Table.Content>
                            </Table.ScrollContainer>
                        </Table>
                    </Card>
                </div>
            </section>

            {/* SaaS Operations & Support Center */}
            <section id="about" className="pt-20 scroll-mt-20">
                <div className="space-y-6">
                    <div>
                        <div
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-2">
                            <Headphones className="size-3"/>
                            Operations & Enterprise Support
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                            Dedicated Team & Logistics Hub
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Direct access to our logistics leads and central headquarters for custom supply orders and
                            inventory audits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Account Lead Card */}
                        <Card
                            variant="default"
                            className="p-7 bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] rounded-2xl flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <Card.Header className="p-0 flex flex-row items-center gap-4">
                                    <div className="relative">
                                        <Avatar size="lg">
                                            <Avatar.Fallback
                                                className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-base shadow-sm">
                                                {contact.initials}
                                            </Avatar.Fallback>
                                        </Avatar>
                                        <span
                                            className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900"
                                            title="Available now"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Card.Title className="text-lg font-bold text-slate-900 dark:text-slate-50">
                                                {contact.name}
                                            </Card.Title>
                                            <Chip color="success" variant="soft" size="sm">
                                                {contact.statusBadge || "Online"}
                                            </Chip>
                                        </div>
                                        <Card.Description className="text-xs font-medium text-slate-500">
                                            {contact.role}
                                        </Card.Description>
                                    </div>
                                </Card.Header>

                                <div
                                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <Clock className="size-3.5 text-blue-600"/>
                    Response SLA:
                  </span>
                                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                    {contact.responseTime || "~2 minutes"}
                  </span>
                                </div>

                                <Separator/>

                                <Card.Content className="p-0 space-y-3">
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-3.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                    >
                                        <div
                                            className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 shadow-xs">
                                            <Mail className="size-4"/>
                                        </div>
                                        <div className="truncate">
                                            <p className="text-xs font-medium text-slate-900 dark:text-slate-200">Email
                                                Operations</p>
                                            <p className="truncate text-xs text-slate-500">
                                                {contact.email}
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                                        className="flex items-center gap-3.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                    >
                                        <div
                                            className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 shadow-xs">
                                            <Phone className="size-4"/>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-900 dark:text-slate-200">Priority
                                                Hotline</p>
                                            <p className="text-xs text-slate-500">{contact.phone}</p>
                                        </div>
                                    </a>
                                </Card.Content>
                            </div>

                            <Card.Footer className="p-0 pt-6">
                                <Button
                                    variant="primary"
                                    fullWidth
                                    onPress={() => {
                                        window.location.href = `mailto:${contact.email}?subject=StoreDash%20Inventory%20Inquiry`;
                                    }}
                                    className="gap-2 font-medium shadow-xs"
                                >
                                    <Mail className="size-4"/>
                                    Contact Operations Lead
                                </Button>
                            </Card.Footer>
                        </Card>

                        {/* Headquarters & Logistics Hub Card */}
                        <Card
                            variant="default"
                            className="p-7 bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] rounded-2xl flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <Card.Header className="p-0 flex flex-row items-center gap-4">
                                    <div
                                        className="size-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xs">
                                        <MapPin className="size-6"/>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Card.Title className="text-lg font-bold text-slate-900 dark:text-slate-50">
                                                {location.title}
                                            </Card.Title>
                                            <Chip color="default" variant="secondary" size="sm">
                                                {location.status || "Operational"}
                                            </Chip>
                                        </div>
                                        <Card.Description className="text-xs font-medium text-slate-500">
                                            {location.subtitle}
                                        </Card.Description>
                                    </div>
                                </Card.Header>

                                <div
                                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <Globe2 className="size-3.5 text-indigo-600"/>
                    Timezone:
                  </span>
                                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                    {location.timezone || "UTC+7 (Jakarta)"}
                  </span>
                                </div>

                                <Separator/>

                                <Card.Content className="p-0 space-y-4">
                                    <div
                                        className="flex items-start gap-3.5 text-sm text-slate-600 dark:text-slate-400">
                                        <MapPin
                                            className="size-4 mt-0.5 text-indigo-600 dark:text-indigo-400 shrink-0"/>
                                        <p className="leading-relaxed text-xs">
                                            {location.address.map((line, idx) => (
                                                <span key={idx}>
                          {line}
                                                    {idx < location.address.length - 1 && <br/>}
                        </span>
                                            ))}
                                        </p>
                                    </div>

                                    <div
                                        className="flex items-center gap-3.5 text-sm text-slate-600 dark:text-slate-400">
                                        <Clock className="size-4 text-indigo-600 dark:text-indigo-400 shrink-0"/>
                                        <div>
                                            <p className="text-xs font-medium text-slate-900 dark:text-slate-200">Operating
                                                Schedule</p>
                                            <p className="text-xs text-slate-500">{location.operatingHours}</p>
                                        </div>
                                    </div>
                                </Card.Content>
                            </div>

                            <Card.Footer className="p-0 pt-6">
                                <Button
                                    variant="outline"
                                    fullWidth
                                    onPress={() => {
                                        window.open(location.mapsUrl, "_blank");
                                    }}
                                    className="gap-2 font-medium bg-white dark:bg-slate-900"
                                >
                                    <ExternalLink className="size-4"/>
                                    View Distribution Center on Maps
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}
