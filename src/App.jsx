import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="app-layout font-sans text-gray-900 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex grow">
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    );
}

export default App;
