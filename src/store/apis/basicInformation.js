import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MENU_ID, API_URL } from "../../constants";

export const basicInformationApi = createApi({
  reducerPath: "basicInformationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["basicInformationApi"],
  endpoints: (builder) => ({
    getInformation: builder.query({
      query: () => `basic-info/${MENU_ID}`,
      providesTags: ["basicInformationApi"],
    }),
  }),
});

export const { useGetInformationQuery } = basicInformationApi;
