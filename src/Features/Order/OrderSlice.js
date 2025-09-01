// src/Features/orders/orderSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../utils/HttpClient";
import { ApiRoutes } from "../../utils/endpoints";

// ------------------- Thunks -------------------

// Fetch all orders for a user
export const fetchUserOrders = createAsyncThunk(
  "orders/fetchUserOrders",
  async (userId, { rejectWithValue }) => {
    try {
      const { Endpoint, Method } = ApiRoutes.Orders.All(userId);
      const res = await httpClient({ url: Endpoint, method: Method });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Fetch single order by ID
export const fetchSingleOrder = createAsyncThunk(
  "orders/fetchSingleOrder",
  async ({ orderId, userId }, { rejectWithValue }) => {
    try {
      const { Endpoint, Method } = ApiRoutes.Orders.ById(orderId, userId);
      const res = await httpClient({ url: Endpoint, method: Method });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Update order status
export const updateOrderStatusThunk = createAsyncThunk(
  "orders/updateOrderStatus",
  async ({ orderId, userId, payload }, { rejectWithValue }) => {
    try {
      const { Endpoint, Method } = ApiRoutes.Orders.UpdateStatus(orderId, userId);
      const res = await httpClient({ url: Endpoint, method: Method, data: payload });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// ------------------- Slice -------------------
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    selectedOrder: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearOrders: (state) => {
      state.orders = [];
      state.selectedOrder = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all orders
      .addCase(fetchUserOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch single order
      .addCase(fetchSingleOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleOrder.fulfilled, (state, action) => {
        state.selectedOrder = action.payload;
        state.loading = false;
      })
      .addCase(fetchSingleOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update order status
      .addCase(updateOrderStatusThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOrderStatusThunk.fulfilled, (state, action) => {
        const idx = state.orders.findIndex(o => o._id === action.payload._id);
        if (idx !== -1) state.orders[idx] = action.payload;

        if (state.selectedOrder?._id === action.payload._id) {
          state.selectedOrder = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateOrderStatusThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
