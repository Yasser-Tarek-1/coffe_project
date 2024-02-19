import { createSlice } from "@reduxjs/toolkit";
const MENU_ID = localStorage.getItem("MENU_ID");

const initialState = {
  MENU_ID,
};

export const menuIdSlice = createSlice({
  name: "menuIdSlice",
  initialState,
  reducers: {
    setMenuId: (state, { payload }) => {
      state.MENU_ID = payload;
    },
  },
});

export const { setMenuId } = menuIdSlice.actions;

export default menuIdSlice.reducer;
