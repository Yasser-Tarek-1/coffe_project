import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let MENU_ID = process.env.REACT_APP_MENU_ID;
let API_URL = process.env.REACT_APP_API_URL;

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
