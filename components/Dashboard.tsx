export default function Dashboard() {
    return (
        <div className="bg-gray-50 p-8 font-sans rounded-xl">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Store Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Store Information Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            Store Information
                        </h2>
                        <div className="space-y-3 text-gray-600">
                            <p className="flex flex-col">
                                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Contact Person</span>
                                <span className="text-lg font-medium text-gray-900">Budi Santoso</span>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Email</span>
                                <span>budi.santoso@examplestore.com</span>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Address</span>
                                <span>Jl. Merdeka No. 45<br/>Jakarta Selatan, 12345<br/>Indonesia</span>
                            </p>
                        </div>
                    </div>

                    {/* Product List Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            What We Sell
                        </h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-center justify-between">
                                <span>Espresso Beans (1kg)</span>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">In Stock</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Pour Over Kits</span>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">In Stock</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Ceramic Mugs</span>
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Low Stock</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}