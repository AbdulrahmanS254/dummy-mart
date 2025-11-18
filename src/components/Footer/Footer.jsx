import { Link } from "react-router-dom";
import logo from "/logo.png";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img
                                src={logo}
                                alt="Dummy Mart"
                                className="h-8 w-auto"
                            />
                            <span className="text-xl font-bold text-gray-900">
                                Dummy Mart
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Your daily destination for all dummy products.
                            Quality mock data for testing and development
                            purposes.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Shop
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 hover:text-green-600 transition-colors"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors"
                                >
                                    Featured
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors"
                                >
                                    New Arrivals
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors"
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-gray-500 hover:text-green-600 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-green-600 transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-green-600 transition-colors"
                            >
                                Twitter
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-green-600 transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-center text-base text-gray-400">
                        &copy; {new Date().getFullYear()} Dummy Mart. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
