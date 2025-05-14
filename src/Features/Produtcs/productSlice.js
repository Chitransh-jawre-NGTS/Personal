// src/Features/Products/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/endpoints';

// Thunk to fetch all products
// export const fetchProducts = createAsyncThunk(
//   'products/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(ENDPOINTS.PRODUCTS);
//       // Log the API response if needed:
//       console.log("API Response:", response.data);
//       // Adjust the returned data if your API response shape is different:
//       return response.data;
//     } catch (error) {
//       console.error("API Error:", error);
//       return rejectWithValue(
//         error.response?.data?.message || error.message || "Something went wrong"
//       );
//     }
//   }
// );
// Thunk to fetch all products
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(ENDPOINTS.PRODUCTS);
      console.log("API Response:", response.data);
      return response.data.products;
    } catch (error) {
      console.error("API Error:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

// Thunk to fetch a single product's details
export const fetchProductDetails = createAsyncThunk(
  'products/fetchDetails',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${ENDPOINTS.PRODUCTS}/${productId}`);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

// Slice definition

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],  // Initially, no products
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
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  
      // 👇 ADD THIS BLOCK
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
  
});
export const { selectProduct } = productSlice.actions;
export default productSlice.reducer;

