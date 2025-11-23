import { Link } from "react-router-dom";
import logo from "/endaza-logo.png";
import { useState } from "react";

export default function SignIn() {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (error) setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = input.username.trim();
        const pass = input.password.trim();

        if (user === "" || pass === "") {
            setError("Please fill in all fields.");
            return;
        }
        console.log("Logging in with:", { username: user, password: pass });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-8">
                    <img
                        src={logo}
                        alt="Endaza Logo"
                        className="mx-auto h-12 w-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Welcome back to Indaza
                    </p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                            onChange={handleInput}
                            value={input.username}
                            className={`w-full px-3 py-2 border ${
                                error ? "border-red-500" : "border-gray-300"
                            } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
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
                            onChange={handleInput}
                            value={input.password}
                            className={`w-full px-3 py-2 border ${
                                error ? "border-red-500" : "border-gray-300"
                            } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <span className="font-medium text-orange-600 hover:text-orange-500 cursor-pointer transition-colors">
                            Contact Support
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
