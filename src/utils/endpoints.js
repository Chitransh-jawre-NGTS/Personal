// src/utils/endpoints.js

import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  PRODUCTS: `${API_BASE}/products`,
  PRODUCT_BY_ID: (id) => `${API_BASE}/products/${id}`,
  SEARCH_PRODUCTS: (query) => `${API_BASE}/products/search?q=${query}`,
};

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
