import { createContext, useState } from "react";

const cartContext = createContext({
    cartItems: [],
    addToCart: () => {}
});

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (product, size, quantity) => {
        const newItem = {
            product,
            size,
            quantity
        }

        setCartItems([...cartItems, newItem])
    }

    const cartValue = {
        cartItems,
        addToCart
    }

    return <cartContext.Provider value={cartValue}>{ children }</cartContext.Provider>
}

export { cartContext, CartProvider }