import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let MENU_ID = 700000;
let API_URL = "https://backend.skilltax.sa/api/v1/menu/";

export const basicInformationApi = createApi({
  reducerPath: "basicInformationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getInformation: builder.query({
      query: () => `basic-info/${MENU_ID}`,
    }),
  }),
});

export const { useGetInformationQuery } = basicInformationApi;
