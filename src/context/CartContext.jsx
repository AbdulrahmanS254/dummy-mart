import { useContext, createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    // Checking if there is cart items in the local storage
    const getInitialCart = () => {
        let cartData = localStorage.getItem("cartItems");
        return cartData ? JSON.parse(cartItems) : [];
    };

    const [cartItems, dispatch] = useReducer(cartReducer, [], getInitialCart);

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cartItems));
    }, [cartItems]);

    function cartReducer(state, action) {
        switch (action.type) {
            case "ADD_ITEM": {
                const product = action.payload;
                const existingItem = state.find(
                    (item) => item.id === product.id
                );
                if (existingItem) {
                }
            }
        }
    }

    return <CartContext.Provider>{children}</CartContext.Provider>;
}

export function useCart() {
    return useContext(CartContext);
}
