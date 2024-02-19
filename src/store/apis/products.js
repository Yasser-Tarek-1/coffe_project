import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MENU_ID, API_URL } from "../../constants";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["productsApi"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products/${MENU_ID}`,
      providesTags: ["productsApi"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
