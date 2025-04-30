import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/endpoints';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await axios.get(ENDPOINTS.PRODUCTS);
  return response.data.products;
});

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default productSlice.reducer;



const productSlice = createSlice({
    name: 'products',
    initialState: {
      items: [],  // Ensure this is an empty array initially
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.items = action.payload;  // products data should be assigned here
          state.loading = false;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default productSlice.reducer;
  