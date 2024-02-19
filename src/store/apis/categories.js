import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MENU_ID, API_URL } from "../../constants";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["categoriesApi"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories/${MENU_ID}`,
      providesTags: ["categoriesApi"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
