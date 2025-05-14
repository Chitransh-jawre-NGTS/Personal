// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../carts/Cartslice.js';
import productReducer from '../Produtcs/productSlice.js';
import buyNowreducer from '../BuyNow/buyNowSlice.js';
import { BugPlay } from 'lucide-react';
import { b } from 'framer-motion/client';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer, 
    buyNow: buyNowreducer, 
  },
});
