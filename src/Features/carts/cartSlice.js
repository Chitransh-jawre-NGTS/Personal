import { createSlice } from "@reduxjs/toolkit";

// Utility functions to manage localStorage
const loadFromLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Initial state for the cart and wishlist
const initialState = {
  cartItems: loadFromLocalStorage("cartItems", []),
  wishlistItems: loadFromLocalStorage("wishlistItems", []),
};

// Redux slice to handle cart and wishlist actions
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        saveToLocalStorage("cartItems", state.cartItems);
      }
    },
    
    // Remove item from cart
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      saveToLocalStorage("cartItems", state.cartItems);
    },
    
    // Add item to wishlist
    addToWishlist: (state, action) => {
      const itemExists = state.wishlistItems.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.wishlistItems.push(action.payload);
        saveToLocalStorage("wishlistItems", state.wishlistItems);
      }
    },
    
    // Remove item from wishlist
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload);
      saveToLocalStorage("wishlistItems", state.wishlistItems);
    },
    
    // Move item from wishlist to cart
    moveToCart: (state, action) => {
      const item = state.wishlistItems.find((item) => item.id === action.payload.id);
      if (item) {
        state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload.id);
        if (!state.cartItems.find((cartItem) => cartItem.id === item.id)) {
          state.cartItems.push({ ...item, quantity: 1 });
        }
        saveToLocalStorage("cartItems", state.cartItems);
        saveToLocalStorage("wishlistItems", state.wishlistItems);
      }
    },

    // Move item from cart to wishlist
    moveToWishlist: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
        if (!state.wishlistItems.find((wishlistItem) => wishlistItem.id === item.id)) {
          state.wishlistItems.push(item);
        }
        saveToLocalStorage("cartItems", state.cartItems);
        saveToLocalStorage("wishlistItems", state.wishlistItems);
      }
    },

    // Increase the quantity of an item in the cart
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price; // Calculate total price
        saveToLocalStorage("cartItems", state.cartItems);
      }
    },

    // Decrease the quantity of an item in the cart
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price; // Recalculate total price
        saveToLocalStorage("cartItems", state.cartItems);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  moveToCart,
  moveToWishlist,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
