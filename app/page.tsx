import Dashboard from '../components/Dashboard';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

            {/* Sticky Navbar */}
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="font-bold text-xl tracking-tight">StoreDash</div>
                    <ul className="flex space-x-8 font-medium text-sm text-gray-600">
                        <li>
                            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <a href="#product" className="hover:text-blue-600 transition-colors">Product</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Imported Dashboard Content */}
            <Dashboard />

        </div>
    );
}