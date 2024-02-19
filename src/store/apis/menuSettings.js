import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MENU_ID, API_URL } from "../../constants";

export const menuSettingsApi = createApi({
  reducerPath: "menuSettingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["menuSettingsApi"],
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => `settings/${MENU_ID}`,
      providesTags: ["menuSettingsApi"],
    }),
  }),
});

export const { useGetSettingsQuery } = menuSettingsApi;
