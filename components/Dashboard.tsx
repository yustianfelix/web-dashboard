export default function Dashboard() {
    return (
        <main className="max-w-4xl mx-auto px-6 pb-24">

            {/* Home Section */}
            <section id="home" className="pt-24 min-h-[60vh] flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Store</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Manage your inventory, view stock levels, and access contact information all from one simple vertical dashboard. Scroll down to see more.
                </p>
            </section>

            {/* Product Section */}
            <section id="product" className="pt-24 min-h-[60vh]">
                <h2 className="text-3xl font-bold mb-8">What We Sell</h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-center justify-between border-b pb-3 border-gray-50">
                            <span className="font-medium text-gray-800">Espresso Beans (1kg)</span>
                            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">In Stock</span>
                        </li>
                        <li className="flex items-center justify-between border-b pb-3 border-gray-50">
                            <span className="font-medium text-gray-800">Pour Over Kits</span>
                            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">In Stock</span>
                        </li>
                        <li className="flex items-center justify-between border-b pb-3 border-gray-50">
                            <span className="font-medium text-gray-800">Ceramic Mugs</span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">Low Stock</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="font-medium text-gray-800">Cold Brew Filters</span>
                            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">In Stock</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="pt-24 min-h-[60vh]">
                <h2 className="text-3xl font-bold mb-8">About Us</h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                        <div>
                            <h3 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">Contact Person</h3>
                            <p className="text-lg font-medium text-gray-900 mb-1">Budi Santoso</p>
                            <p>budi.santoso@examplestore.com</p>
                            <p>+62 812-3456-7890</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">Address</h3>
                            <p className="leading-relaxed">
                                Jl. Merdeka No. 45<br/>
                                Jakarta Selatan, 12345<br/>
                                Indonesia
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}