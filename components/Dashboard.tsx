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
    ArrowDown,
    Sparkles,
    ExternalLink,
    Store,
} from "lucide-react";

export default function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "inStock" | "lowStock">("all");

    const products: Product[] = productsData;
    const contact: ContactInfo = contactData;
    const location: LocationInfo = locationData;

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

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">
            {/* Home / Hero Section */}
            <section
                id="home"
                className="pt-20 min-h-[65vh] flex flex-col justify-center space-y-8"
            >
                <div className="space-y-4">
                    <Chip color="accent" variant="soft" size="md">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="size-3.5 text-blue-600 dark:text-blue-400"/>
              HeroUI v3 Powered Store Dashboard
            </span>
                    </Chip>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
                        Welcome to Our Store
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        Manage your inventory, inspect live stock levels, and get in touch with our team
                        all from one cohesive dashboard built with HeroUI v3.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Button
                            variant="primary"
                            size="lg"
                            onPress={() => scrollTo("product")}
                            className="gap-2 shadow-xs"
                        >
                            <Package className="size-4"/>
                            View Products
                            <ArrowDown className="size-3.5"/>
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onPress={() => scrollTo("about")}
                            className="gap-2"
                        >
                            <Store className="size-4"/>
                            About Us & Contact
                        </Button>
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <Card
                        variant="default"
                        className="p-5 bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)] hover:shadow-md transition-shadow backdrop-blur-xs"
                    >
                        <Card.Header className="p-0 pb-3 flex flex-row items-center justify-between">
                            <div>
                                <Card.Description
                                    className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Total Products
                                </Card.Description>
                                <Card.Title className="text-2xl font-bold mt-1 text-slate-900 dark:text-slate-50">
                                    {totalProducts}
                                </Card.Title>
                            </div>
                            <div
                                className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                <Package className="size-5"/>
                            </div>
                        </Card.Header>
                        <Card.Content className="p-0">
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Registered items in store inventory
                            </p>
                        </Card.Content>
                    </Card>

                    <Card
                        variant="default"
                        className="p-5 bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)] hover:shadow-md transition-shadow backdrop-blur-xs"
                    >
                        <Card.Header className="p-0 pb-3 flex flex-row items-center justify-between">
                            <div>
                                <Card.Description
                                    className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    In Stock
                                </Card.Description>
                                <Card.Title className="text-2xl font-bold mt-1 text-emerald-600 dark:text-emerald-400">
                                    {inStockCount}
                                </Card.Title>
                            </div>
                            <div
                                className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                                <CheckCircle2 className="size-5"/>
                            </div>
                        </Card.Header>
                        <Card.Content className="p-0">
                            <Chip color="success" variant="soft" size="sm">
                                Ready for order
                            </Chip>
                        </Card.Content>
                    </Card>

                    <Card
                        variant="default"
                        className="p-5 bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)] hover:shadow-md transition-shadow backdrop-blur-xs"
                    >
                        <Card.Header className="p-0 pb-3 flex flex-row items-center justify-between">
                            <div>
                                <Card.Description
                                    className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Stock Attention
                                </Card.Description>
                                <Card.Title className="text-2xl font-bold mt-1 text-amber-600 dark:text-amber-400">
                                    {lowStockCount}
                                </Card.Title>
                            </div>
                            <div
                                className="p-2.5 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                                <AlertTriangle className="size-5"/>
                            </div>
                        </Card.Header>
                        <Card.Content className="p-0">
                            <Chip
                                color={lowStockCount > 0 ? "warning" : "default"}
                                variant="soft"
                                size="sm"
                            >
                                {lowStockCount > 0 ? "Restock required" : "Inventory optimal"}
                            </Chip>
                        </Card.Content>
                    </Card>
                </div>
            </section>

            {/* Product Catalog Section */}
            <section id="product" className="pt-16 scroll-mt-20">
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Package className="size-5 text-blue-600 dark:text-blue-400"/>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                    What We Sell
                                </h2>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Browse our current catalog and check live inventory availability.
                            </p>
                        </div>
                        <Chip color="default" variant="secondary" size="md">
                            {filteredProducts.length} of {products.length} displayed
                        </Chip>
                    </div>

                    <Card
                        variant="default"
                        className="p-6 bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)] space-y-6 backdrop-blur-xs"
                    >
                        {/* Filter and Search Bar */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="w-full sm:max-w-xs">
                                <SearchField
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                    aria-label="Search products"
                                >
                                    <SearchField.Group>
                                        <SearchField.SearchIcon/>
                                        <SearchField.Input placeholder="Search products..."/>
                                        <SearchField.ClearButton/>
                                    </SearchField.Group>
                                </SearchField>
                            </div>

                            <div className="flex items-center gap-2 flex-wrap">
                                <Button
                                    variant={filterStatus === "all" ? "primary" : "secondary"}
                                    size="sm"
                                    onPress={() => setFilterStatus("all")}
                                >
                                    All ({totalProducts})
                                </Button>
                                <Button
                                    variant={filterStatus === "inStock" ? "primary" : "secondary"}
                                    size="sm"
                                    onPress={() => setFilterStatus("inStock")}
                                >
                                    In Stock ({inStockCount})
                                </Button>
                                <Button
                                    variant={filterStatus === "lowStock" ? "primary" : "secondary"}
                                    size="sm"
                                    onPress={() => setFilterStatus("lowStock")}
                                >
                                    Low Stock ({lowStockCount})
                                </Button>
                            </div>
                        </div>

                        {/* HeroUI v3 Accessible Table */}
                        <Table>
                            <Table.ScrollContainer
                                className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                                <Table.Content aria-label="Products Table">
                                    <Table.Header>
                                        <Table.Column id="id" isRowHeader
                                                      className="w-20 pl-4 text-xs font-semibold uppercase text-slate-500">
                                            ID
                                        </Table.Column>
                                        <Table.Column id="name"
                                                      className="text-xs font-semibold uppercase text-slate-500">
                                            PRODUCT NAME
                                        </Table.Column>
                                        <Table.Column id="status"
                                                      className="w-36 text-center text-xs font-semibold uppercase text-slate-500">
                                            STATUS
                                        </Table.Column>
                                        <Table.Column id="availability"
                                                      className="w-32 text-right pr-4 text-xs font-semibold uppercase text-slate-500">
                                            STOCK
                                        </Table.Column>
                                    </Table.Header>
                                    <Table.Body
                                        items={filteredProducts}
                                        renderEmptyState={() => (
                                            <div className="py-12 text-center text-slate-500">
                                                <p className="font-semibold text-slate-800 dark:text-slate-200">No
                                                    products found</p>
                                                <p className="text-xs mt-1">
                                                    Try searching for another keyword or reset the filter.
                                                </p>
                                            </div>
                                        )}
                                    >
                                        {(product) => (
                                            <Table.Row id={product.id.toString()}
                                                       className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                                                <Table.Cell className="font-mono text-xs text-slate-500 pl-4">
                                                    #{product.id.toString().padStart(3, "0")}
                                                </Table.Cell>
                                                <Table.Cell className="font-medium text-slate-900 dark:text-slate-100">
                                                    {product.name}
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
                                                <Table.Cell className="text-right pr-4">
                                                    <Chip
                                                        color={product.inStock ? "default" : "warning"}
                                                        variant="secondary"
                                                        size="sm"
                                                    >
                                                        {product.inStock ? "In Stock" : "Limited"}
                                                    </Chip>
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

            {/* About Us Section */}
            <section id="about" className="pt-16 scroll-mt-20">
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Store className="size-5 text-blue-600 dark:text-blue-400"/>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                About Us
                            </h2>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Get in touch with our team or drop by our Jakarta office.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Person Card */}
                        <Card
                            variant="default"
                            className="p-6 bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)] flex flex-col justify-between backdrop-blur-xs"
                        >
                            <div className="space-y-5">
                                <Card.Header className="p-0 flex flex-row items-center gap-3">
                                    <Avatar size="lg">
                                        <Avatar.Fallback className="bg-blue-50 text-blue-700 font-semibold">
                                            {contact.initials}
                                        </Avatar.Fallback>
                                    </Avatar>
                                    <div>
                                        <Card.Title
                                            className="text-base font-semibold text-slate-900 dark:text-slate-50">
                                            {contact.name}
                                        </Card.Title>
                                        <Card.Description className="text-xs text-slate-500">
                                            {contact.role}
                                        </Card.Description>
                                    </div>
                                </Card.Header>

                                <Separator/>

                                <Card.Content className="p-0 space-y-3">
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                    >
                                        <div
                                            className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                            <Mail className="size-4"/>
                                        </div>
                                        <div className="truncate">
                                            <p className="text-xs font-medium text-slate-900 dark:text-slate-200">Email</p>
                                            <p className="truncate text-xs text-slate-500">
                                                {contact.email}
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                                        className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                    >
                                        <div
                                            className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                            <Phone className="size-4"/>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-900 dark:text-slate-200">Phone</p>
                                            <p className="text-xs text-slate-500">{contact.phone}</p>
                                        </div>
                                    </a>
                                </Card.Content>
                            </div>

                            <Card.Footer className="p-0 pt-5">
                                <Button
                                    variant="outline"
                                    fullWidth
                                    onPress={() => {
                                        window.location.href = `mailto:${contact.email}`;
                                    }}
                                    className="gap-2"
                                >
                                    <Mail className="size-4"/>
                                    Send Email
                                </Button>
                            </Card.Footer>
                        </Card>

                        {/* Address & Store Info Card */}
                        <Card
                            variant="default"
                            className="p-6 bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)] flex flex-col justify-between backdrop-blur-xs"
                        >
                            <div className="space-y-5">
                                <Card.Header className="p-0 flex flex-row items-center gap-3">
                                    <div
                                        className="size-10 rounded-full bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <MapPin className="size-5"/>
                                    </div>
                                    <div>
                                        <Card.Title
                                            className="text-base font-semibold text-slate-900 dark:text-slate-50">
                                            {location.title}
                                        </Card.Title>
                                        <Card.Description className="text-xs text-slate-500">
                                            {location.subtitle}
                                        </Card.Description>
                                    </div>
                                </Card.Header>

                                <Separator/>

                                <Card.Content className="p-0 space-y-4">
                                    <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                                        <MapPin className="size-4 mt-0.5 text-blue-600 dark:text-blue-400 shrink-0"/>
                                        <p className="leading-relaxed text-xs">
                                            {location.address.map((line, idx) => (
                                                <span key={idx}>
                          {line}
                                                    {idx < location.address.length - 1 && <br/>}
                        </span>
                                            ))}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                        <Clock className="size-4 text-blue-600 dark:text-blue-400 shrink-0"/>
                                        <div>
                                            <p className="text-xs font-medium text-slate-900 dark:text-slate-200">Operating
                                                Hours</p>
                                            <p className="text-xs text-slate-500">{location.operatingHours}</p>
                                        </div>
                                    </div>
                                </Card.Content>
                            </div>

                            <Card.Footer className="p-0 pt-5">
                                <Button
                                    variant="outline"
                                    fullWidth
                                    onPress={() => {
                                        window.open(location.mapsUrl, "_blank");
                                    }}
                                    className="gap-2"
                                >
                                    <ExternalLink className="size-4"/>
                                    View on Google Maps
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}
