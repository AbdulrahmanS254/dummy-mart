import { Link } from "react-router-dom";
import logo from "/endaza-logo.png"; 

export default function Footer() {
    return (
        <footer className="bg-white border-t border-orange-200 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img
                                src={logo}
                                alt="Indaza Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-800 text-sm font-medium leading-relaxed opacity-90">
                            Handmade with love. Your destination for unique crochet hats, 
                            scarves, and yarn creations crafted to keep you warm and stylish.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-midnight tracking-wider uppercase mb-4 border-b-2 border-midnight inline-block pb-1">
                            Shop
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-800 hover:text-midnight transition-colors font-medium">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-800 hover:text-midnight transition-colors font-medium">
                                    Hats & Beanies
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-800 hover:text-midnight transition-colors font-medium">
                                    Scarves
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-midnight tracking-wider uppercase mb-4 border-b-2 border-midnight inline-block pb-1">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-gray-800 hover:text-midnight transition-colors font-medium">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-800 hover:text-midnight transition-colors font-medium">
                                    Custom Orders
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-800 hover:text-midnight transition-colors font-medium">
                                    Shipping Info
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-midnight tracking-wider uppercase mb-4 border-b-2 border-midnight inline-block pb-1">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-800 hover:text-midnight transition-colors font-bold">
                                Facebook
                            </a>
                            <a href="#" className="text-gray-800 hover:text-midnight transition-colors font-bold">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* حقوق الملكية */}
                <div className="mt-12 pt-8 border-t border-midnight/20">
                    <p className="text-center text-base text-midnight font-medium">
                        &copy; {new Date().getFullYear()} Indaza. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}