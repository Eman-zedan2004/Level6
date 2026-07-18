// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
//GET ALL PRODUCT
export const ProductAPI = createApi({
  reducerPath: 'ProductAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://level6-ymei.onrender.com/' }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})
//GET ONE PRODUCT
export const oneProductAPI = createApi({
  reducerPath: 'oneProductAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://level6-ymei.onrender.com/' }),
  endpoints: (builder) => ({
    getOneProductByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByNameQuery } = ProductAPI
export const { useGetOneProductByNameQuery } = oneProductAPI