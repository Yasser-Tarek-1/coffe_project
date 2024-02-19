import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MENU_ID, API_URL } from "../../constants";

// Define an API slice using createApi
export const userMessagesApi = createApi({
  reducerPath: "userMessagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["userMessagesApi"],
  endpoints: (builder) => ({
    sendMsg: builder.mutation({
      query: (body) => ({
        url: `messages/${MENU_ID}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["userMessagesApi"],
    }),
  }),
});

export const { useSendMsgMutation } = userMessagesApi;
