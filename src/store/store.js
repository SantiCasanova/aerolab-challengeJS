import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './slices/product/productSlice'

export const store = configureStore({
  reducer: {
    products: productSlice.reducer
  },
})