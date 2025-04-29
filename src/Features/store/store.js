// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../carts/Cartslice.js';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
