import { Link } from "react-router-dom";
import logo from "/logo.png"; 

export default function SignIn() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-8">
                    <img
                        src={logo}
                        alt="Dummy Mart Logo"
                        className="mx-auto h-12 w-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Welcome back to Dummy Mart
                    </p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-b-2 focus:border-b-green-500 transition"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-b-2 focus:border-b-green-500 transition"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <span className="font-medium text-green-600 hover:text-green-500 cursor-pointer">
                            Contact Support
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
