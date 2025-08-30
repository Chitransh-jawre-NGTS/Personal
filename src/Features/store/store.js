// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';

// ✅ Import all slices
import productReducer from '../Produtcs/productSlice.js';
import buyNowReducer from '../BuyNow/buyNowSlice.js';
import authReducer from '../Auth/authSlice.js';
import cartReducer from '../carts/cartSlice.js';
import orderReducer from '../Order/OrderSlice.js';

export const store = configureStore({
  reducer: {
    products: productReducer,  // all product data
    cart: cartReducer,         // cart management
    buyNow: buyNowReducer,     // direct buy functionality
    auth: authReducer,         // login/register
    order: orderReducer,       // order history / details
  },
});
