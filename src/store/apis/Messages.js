import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let MENU_ID = 700000;
let API_URL = process.env.REACT_APP_API_URL;

// Define an API slice using createApi
export const messagesApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    sendMsg: builder.mutation({
      query: (body) => ({
        url: `messages/${MENU_ID}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendMsgMutation } = messagesApi;
