import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let MENU_ID = 700000;
let API_URL = "https://backend.skilltax.sa/api/v1/menu/";

export const settingsApi = createApi({
  reducerPath: "settingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => `settings/${MENU_ID}`,
    }),
  }),
});

export const { useGetSettingsQuery } = settingsApi;
