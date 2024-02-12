import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const MENU_ID = "700000";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://backend.skilltax.sa/api/v1/menu/`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products/${MENU_ID}`,
    }),
    getCategories: builder.query({
      query: () => `categories/${MENU_ID}`,
    }),
    getSupplimetaries: builder.query({
      query: () => `supplimetaries/${MENU_ID}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSupplimetariesQuery,
} = productsApi;
