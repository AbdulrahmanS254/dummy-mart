import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <div className="app-layout font-sans text-gray-900 flex flex-col min-h-screen">
                    <Navbar />
                    <Outlet></Outlet>
                    <Footer />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
