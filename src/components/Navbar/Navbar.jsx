import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/endaza-logo.png";
import { useAuth } from "../../context/AuthContext.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { HiMiniShoppingCart, HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
    const { user, logOut } = useAuth();
    const { cartItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cartTotal = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between items-center h-18 py-3 bg-white z-50">

                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src={logo}
                            alt="endaza logo"
                            className="h-10 w-auto transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* --- Desktop Menu --- */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
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

                    {/* --- Right Side --- */}
                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-semibold text-midnight hidden sm:block">
                                        Hi, {user.firstName}
                                    </p>
                                    <img
                                        src={user.image}
                                        className="w-8 h-8 rounded-full border border-gray-300"
                                        alt="user"
                                    />
                                </div>
                                <Link className="relative" to={"/cart"}>
                                    <HiMiniShoppingCart className="text-2xl text-midnight" />
                                    {cartTotal > 0 && (
                                        <span className="absolute -right-2 -top-2 text-black text-xs bg-orange-300 rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                            {cartTotal}
                                        </span>
                                    )}
                                </Link>
                                <button
                                    onClick={logOut}
                                    className="hidden sm:block text-sm font-medium bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/sign-in"
                                className="hidden sm:block bg-orange-300 text-gray-950 px-4 rounded py-2 text-sm font-medium hover:bg-orange-500 hover:text-white transition"
                            >
                                Sign In
                            </Link>
                        )}

                        {/* Hamburger Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-2xl text-midnight focus:outline-none p-1 transition-transform duration-300"
                        >
                            <div
                                className={`transition-transform duration-300 ${
                                    isMenuOpen ? "rotate-90" : "rotate-0"
                                }`}
                            >
                                {isMenuOpen ? <HiXMark /> : <HiBars3 />}
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Smooth Mobile Menu --- */}
            <div
                className={`
                    md:hidden 
                    absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 
                    overflow-hidden transition-all duration-500 ease-in-out 
                    ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="flex flex-col gap-4 px-4 py-6">
                    <Link
                        to="/"
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-midnight font-medium py-2 border-b border-gray-50 hover:pl-2 transition-all"
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-midnight font-medium py-2 border-b border-gray-50 hover:pl-2 transition-all"
                    >
                        Products
                    </Link>
                    <Link
                        to="/#about"
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-midnight font-medium py-2 border-b border-gray-50 hover:pl-2 transition-all"
                    >
                        About
                    </Link>

                    {!user ? (
                        <Link
                            to="/sign-in"
                            onClick={toggleMenu}
                            className="bg-orange-300 text-center text-gray-950 py-3 rounded-lg font-bold shadow-sm hover:shadow-md transition-all mt-2"
                        >
                            Sign In
                        </Link>
                    ) : (
                        <button
                            onClick={() => {
                                logOut();
                                toggleMenu();
                            }}
                            className="bg-red-500 text-center text-white py-3 rounded-lg font-bold shadow-sm hover:shadow-md transition-all mt-2"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
