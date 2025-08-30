// src/features/product/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../utils/HttpClient";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const res = await httpClient.get("/products"); // Your API endpoint
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to fetch products");
  }
});

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
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
