import { Link } from "react-router-dom";
import logo from "/endaza-logo.png";

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between items-center h-18">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src={logo}
                            alt="endaza logo"
                            className="h-10 w-auto transition-transform group-hover:scale-105"
                        />
                    </Link>

                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-midnight font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className="text-gray-600 hover:text-midnight font-medium transition-colors"
                        >
                            Products
                        </Link>
                        <Link
                            to="/#about"
                            className="text-gray-600 hover:text-midnight font-medium transition-colors"
                        >
                            About
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Link
                            to="/sign-in"
                            className="bg-orange-300 text-gray-950 px-4 rounded py-2 text-sm font-medium hover:bg-orange-500 hover:text-white transition"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
