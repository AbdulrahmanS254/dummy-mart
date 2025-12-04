import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

export default function Cart() {
    const {
        cartItems,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
                <h2 className="text-3xl font-bold text-midnight">
                    Your cart is empty
                </h2>
                <p className="text-gray-500">
                    Looks like you haven't added any handmade items yet.
                </p>
                <Link
                    to="/products"
                    className="bg-midnight text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-400 transition-colors shadow-lg"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-midnight mb-8">
                Shopping Cart
            </h1>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3 space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-sm border border-orange-100"
                        >
                            <div className="w-24 h-24 bg-orange-50 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-lg font-bold text-midnight mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-orange-500 font-semibold">
                                    ${item.price}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-1">
                                <button
                                    className="w-8 h-8 flex items-center justify-center text-midnight hover:bg-white hover:shadow-sm rounded-md transition-all font-bold cursor-pointer"
                                    onClick={() => decrementQuantity(item.id)}
                                >
                                    -
                                </button>
                                <span className="w-8 text-center font-medium text-midnight">
                                    {item.quantity}
                                </span>
                                <button
                                    className="w-8 h-8 flex items-center justify-center text-midnight hover:bg-white hover:shadow-sm rounded-md transition-all font-bold cursor-pointer"
                                    onClick={() => incrementQuantity(item.id)}
                                >
                                    +
                                </button>
                            </div>

                            <div className="text-right min-w-20">
                                <p className="text-lg font-bold text-midnight mb-2">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                    className="text-red-400 text-sm hover:text-red-600 underline decoration-red-200 underline-offset-4 transition-colors cursor-pointer"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:w-1/3">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 sticky top-24">
                        <h2 className="text-xl font-bold text-midnight mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-6 mb-8">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-midnight">
                                    Total
                                </span>
                                <span className="text-2xl font-bold text-orange-500">
                                    ${total.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <button className="w-full bg-midnight text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
