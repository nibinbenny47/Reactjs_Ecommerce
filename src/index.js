import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext'; // Make sure to adjust the path based on your project structure

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
