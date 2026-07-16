import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { ProductAPI } from './ProductAPI';
import cartReducer from './CartSlice';

export const Store = configureStore({
  reducer: {
    cartt: cartReducer,
    // Add the generated reducer as a specific top-level slice
    [ProductAPI.reducerPath]: ProductAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductAPI.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(Store.dispatch)