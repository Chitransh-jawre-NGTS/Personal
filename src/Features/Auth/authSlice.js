// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi,  signoutUserApi,registerUserApi } from "../../api/authApi";

// 🔹 Login Thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await loginUserApi(credentials);
      localStorage.setItem("token", res.token); // store token
      return res;
    } catch (error) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

// 🔹 Signout Thunk
export const signoutUser = createAsyncThunk(
  "auth/signoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await signoutUserApi();
      localStorage.removeItem("token"); // clear token
      return res;
    } catch (error) {
      return rejectWithValue(error.message || "Signout failed");
    }
  }
);

// 🔹 Register Thunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await registerUserApi(userData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message || "Registration failed");
    }
  }
);

// 🔹 Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user || null; // if API returns user details
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Signout
      .addCase(signoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
      })
      .addCase(signoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions & reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
