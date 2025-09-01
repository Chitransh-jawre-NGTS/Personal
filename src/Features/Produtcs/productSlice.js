// src/Features/Products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productApi";

// 🔹 Fetch All Products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts();

      // ✅ Adjust depending on your API structure
      // Example: if API returns { products: [...] }
      if (Array.isArray(response)) {
        return response;
      } else if (response && Array.isArray(response.products)) {
        return response.products;
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching products");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;
