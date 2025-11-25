import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <AuthProvider>
            <div className="app-layout font-sans text-gray-900 flex flex-col min-h-screen">
                <Navbar />
                <Outlet></Outlet>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
