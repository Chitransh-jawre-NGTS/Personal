// src/Features/Products/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../utils/HttpClient';
import { ApiRoutes } from '../../utils/endpoints';

// Thunk to fetch all products
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { Endpoint, Method } = ApiRoutes.Products.All;
      const response = await httpClient({
        url: Endpoint,
        method: Method,
      });
      console.log("API Response:", response.data);
      return response.data.products || response.data; // Adjust according to API response shape
    } catch (error) {
      console.error("Fetch Products Error:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

// Thunk to fetch product by ID
export const fetchProductDetails = createAsyncThunk(
  'products/fetchDetails',
  async (productId, { rejectWithValue }) => {
    try {
      const { Endpoint, Method } = ApiRoutes.Products.ById(productId);
      const response = await httpClient({
        url: Endpoint,
        method: Method,
      });
      return response.data;
    } catch (error) {
      console.error("Fetch Product Details Error:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

// Slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedProduct: null,
  },
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // All Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Single Product Details
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectProduct } = productSlice.actions;
export default productSlice.reducer;
