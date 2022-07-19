import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './slices/product/productSlice'
import { userSlice } from './slices/user/userSlice'

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    user: userSlice.reducer
  },
})