// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Produtcs/productSlice.js';
import buyNowreducer from '../BuyNow/buyNowSlice.js';
import authReducer from '../Auth/authSlice.js';

export const store = configureStore({
  reducer: {
    products: productReducer,
    buyNow: buyNowreducer,
    auth: authReducer,
  },
});
