import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  productsApi,
  basicInformationApi,
  settingsApi,
  messagesApi,
} from "./apis";
import modalSlice from "./slices/modalSlice";
import cartSlice from "./slices/cartSlice";
import filterDataSlice from "./slices/filterDataSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [basicInformationApi.reducerPath]: basicInformationApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    modalSlice,
    cartSlice,
    filterDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(basicInformationApi.middleware)
      .concat(settingsApi.middleware)
      .concat(messagesApi.middleware),
});

setupListeners(store.dispatch);
