// src/Features/wishlist/wishlistSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../utils/HttpClient";
import { ApiRoutes } from "../../utils/endpoints";

// ✅ Fetch wishlist items
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const { Endpoint, Method } = ApiRoutes.Wishlist.Get;
      const res = await httpClient({ url: Endpoint, method: Method });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch wishlist");
    }
  }
);

// ✅ Add item to wishlist
export const addWishlistItem = createAsyncThunk(
  "wishlist/addWishlistItem",
  async (item, { rejectWithValue }) => {
    try {
      const { Endpoint, Method } = ApiRoutes.Wishlist.Add;
      const res = await httpClient({ url: Endpoint, method: Method, data: item });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add item to wishlist");
    }
  }
);

// ✅ Remove item from wishlist
export const removeWishlistItem = createAsyncThunk(
  "wishlist/removeWishlistItem",
  async (id, { rejectWithValue }) => {
    try {
      const { Endpoint, Method } = ApiRoutes.Wishlist.Remove(id);
      await httpClient({ url: Endpoint, method: Method });
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to remove item from wishlist");
    }
  }
);

// Slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearWishlist: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Wishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Wishlist Item
      .addCase(addWishlistItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWishlistItem.fulfilled, (state, action) => {
        state.loading = false;
        // Avoid duplicates
        if (!state.items.find((p) => p._id === action.payload._id)) {
          state.items.push(action.payload);
        }
      })
      .addCase(addWishlistItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Remove Wishlist Item
      .addCase(removeWishlistItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeWishlistItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((p) => p._id !== action.payload);
      })
      .addCase(removeWishlistItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
