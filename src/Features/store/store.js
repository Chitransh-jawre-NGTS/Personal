// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Produtcs/productSlice.js';
import buyNowreducer from '../BuyNow/buyNowSlice.js';
import authReducer from '../Auth/authSlice.js';
import cartReducer from '../carts/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    buyNow: buyNowreducer,
    auth: authReducer,
  },
});
