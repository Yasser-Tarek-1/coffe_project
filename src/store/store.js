import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  productsApi,
  basicInformationApi,
  menuSettingsApi,
  userMessagesApi,
  categoriesApi,
  supplimetariesApi,
} from "./apis";
import modalSlice from "./slices/modalSlice";
import cartSlice from "./slices/cartSlice";
import filterDataSlice from "./slices/filterDataSlice";
import menuIdSlice from "./slices/menuIdSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [basicInformationApi.reducerPath]: basicInformationApi.reducer,
    [menuSettingsApi.reducerPath]: menuSettingsApi.reducer,
    [userMessagesApi.reducerPath]: userMessagesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [supplimetariesApi.reducerPath]: supplimetariesApi.reducer,
    modalSlice,
    cartSlice,
    filterDataSlice,
    menuIdSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(basicInformationApi.middleware)
      .concat(menuSettingsApi.middleware)
      .concat(userMessagesApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(supplimetariesApi.middleware),
});

setupListeners(store.dispatch);
