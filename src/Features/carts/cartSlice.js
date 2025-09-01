// src/Features/carts/cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../utils/HttpClient";
import { ApiRoutes } from "../../utils/endpoints";

// ----------------- API Calls -----------------
export const fetchCartItems = async () => {
  const { Endpoint, Method } = ApiRoutes.Cart.Get;
  const res = await httpClient({ url: Endpoint, method: Method });
  return res.data;
};

export const addToCart = async (item) => {
  const { Endpoint, Method } = ApiRoutes.Cart.Add;
  const res = await httpClient({ url: Endpoint, method: Method, data: item });
  return res.data;
};

export const removeCartItem = async (id) => {
  const { Endpoint, Method } = ApiRoutes.Cart.Remove(id);
  const res = await httpClient({ url: Endpoint, method: Method });
  return res.data;
};

export const updateCartItem = async ({ productId, quantity }) => {
  const { Endpoint, Method } = ApiRoutes.Cart.Update(productId); // make sure you have this endpoint
  const res = await httpClient({ url: Endpoint, method: Method, data: { quantity } });
  return res.data;
};

// ----------------- Thunks -----------------
export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchCartItems();
      return res;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to fetch cart");
    }
  }
);

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity = 1 }, { rejectWithValue }) => {
    try {
      let orderId = localStorage.getItem("orderId");
      if (!orderId) {
        orderId = Date.now().toString();
        localStorage.setItem("orderId", orderId);
      }

      const res = await addToCart({ productId, orderId, quantity });
      return res;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to add to cart");
    }
  }
);

export const removeFromCartAsync = createAsyncThunk(
  "cart/removeFromCart",
  async (id, { rejectWithValue }) => {
    try {
      await removeCartItem(id);
      return { id };
    } catch (err) {
      return rejectWithValue(err.message || "Failed to remove item");
    }
  }
);

export const updateQuantityAsync = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
      const res = await updateCartItem({ productId: id, quantity });
      return { id, quantity };
    } catch (err) {
      return rejectWithValue(err.message || "Failed to update quantity");
    }
  }
);

// ----------------- Slice -----------------
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Cart
      .addCase(getCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        const payload = action.payload;
        state.items = payload.items.map((item) => ({
          id: item.product,
          name: item.name,
          price: item.price,
          qty: item.qty,
          image: `http://localhost:8080/api/product/photo/${item.product}`,
          status: item.stock === 0 ? "Out Of Stock" : "In Stock",
        }));
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add to Cart
      .addCase(addToCartAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        const qtyToAdd = action.payload.quantity || 1;
        const existingItem = state.items.find((i) => i.id === action.payload.id);
        if (existingItem) existingItem.qty += qtyToAdd;
        else
          state.items.push({
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            qty: qtyToAdd,
            image: `http://localhost:8080/api/product/photo/${action.payload.id}`,
            status: "In Stock",
          });
        state.loading = false;
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Remove from Cart
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      })

      // Update Quantity
      .addCase(updateQuantityAsync.fulfilled, (state, action) => {
        const item = state.items.find((i) => i.id === action.payload.id);
        if (item) item.qty = action.payload.quantity;
      });
  },
});

export default cartSlice.reducer;
