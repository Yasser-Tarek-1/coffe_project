import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MENU_ID, API_URL } from "../../constants";

export const supplimetariesApi = createApi({
  reducerPath: "supplimetariesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["supplimetariesApi"],
  endpoints: (builder) => ({
    getSupplimetaries: builder.query({
      query: () => `supplimetaries/${MENU_ID}`,
      providesTags: ["supplimetariesApi"],
    }),
  }),
});

export const { useGetSupplimetariesQuery } = supplimetariesApi;
