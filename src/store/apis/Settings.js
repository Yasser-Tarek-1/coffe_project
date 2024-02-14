import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let MENU_ID = 700000;
let API_URL = process.env.REACT_APP_API_URL;

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
