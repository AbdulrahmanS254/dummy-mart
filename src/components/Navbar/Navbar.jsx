// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "/logo.png";

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src={logo}
                            alt="Dummy Mart"
                            className="h-10 w-auto transition-transform group-hover:scale-110"
                        />
                        <span className="text-xl font-bold text-gray-900 tracking-tight">
                            Dummy Mart
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-green-600 font-medium transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            to="/sign-in"
                            className="bg-green-500 text-white px-4 py-2 text-sm font-medium hover:bg-green-600 transition-colors"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
