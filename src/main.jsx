import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";

import App from "./App.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Products from "./pages/Products/Products.jsx";
import Product from "./pages/Product/Product.jsx";
import AuthGuard from "./components/AuthGuard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/cart",
                element: (
                    <AuthGuard>
                        <Cart />
                    </AuthGuard>
                ),
            },
            {
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
