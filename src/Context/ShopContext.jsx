import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product'; // Correct the import path

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart; // Return the created cart
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems); // Log the updated cartItems state after adding an item to the cart)
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
