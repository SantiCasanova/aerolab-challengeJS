import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products
    }
  }
});

// Action creators are generated for each case reducer function
export const { setProducts } = productSlice.actions;