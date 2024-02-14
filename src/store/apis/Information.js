import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let MENU_ID = 700000;
let API_URL = process.env.REACT_APP_API_URL;

export const informationApi = createApi({
  reducerPath: "informationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getInformation: builder.query({
      query: () => `basic-info/${MENU_ID}`,
    }),
  }),
});

export const { useGetInformationQuery } = informationApi;
