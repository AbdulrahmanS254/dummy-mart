import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <div className="app-layout">
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}

export default App;
