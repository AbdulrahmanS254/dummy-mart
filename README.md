# 🛒 Dummy Mart

![Work in Progress](https://img.shields.io/badge/status-work%20in%20progress-yellow)

This project is a complete e-commerce storefront, "Dummy Mart," built with React. The primary objective is to build a full-featured application that uses a real (mock) API for all its data, including products, **authentication**, and a **server-side cart**.

This project is built using the [DummyJSON API](https://dummyjson.com/docs/products).

---

## 🚀 Project Goals & Features

This project is currently in development. The plan is to implement the following features:

* **Full User Authentication:**
    * Implement a complete Login/Logout flow using the DummyJSON API (`/auth/login`).
    * Manage user tokens in `localStorage` for persistent sessions.
    * Use **React Context** to manage global authentication state (user data, token, and login status).

* **Protected Routes:**
    * Make pages like the "Cart" and user profile accessible *only* to logged-in users.
    * Create a dynamic `Navbar` that changes (e.g., shows "Login" vs. "Logout" & "Cart") based on the auth state.

* **Product Catalog & Pagination:**
    * Fetch products from the `/products` endpoint.
    * Implement **server-side pagination** using the `limit` and `skip` parameters provided by the API.

* **Server-Side Shopping Cart:**
    * Fetch a user-specific cart from the API (`/carts/user/{userId}`).
    * Handle all cart actions (Add, Remove, Update Quantity) by making `PUT` and `POST` requests to the API, not just updating local state.
    * Implement modal confirmation for deleting items.

---

## 🛠️ Tech Stack

* **React**
* **React Router DOM**
* **React Context API** (for Authentication & User State)
* **Vite**
* **Tailwind CSS** / **CSS**
