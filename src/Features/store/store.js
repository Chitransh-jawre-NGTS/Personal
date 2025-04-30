// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../carts/Cartslice.js';
import productReducer from '../Produtcs/productSlice.js';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer, 
  },
});
