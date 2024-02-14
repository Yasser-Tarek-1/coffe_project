import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let MENU_ID = 700000;
let API_URL = "https://backend.skilltax.sa/api/v1/menu/";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
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
