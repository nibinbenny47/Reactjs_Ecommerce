import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product'; // Correct the import path

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const contextValue = { all_product }; // Fix the variable name here
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
