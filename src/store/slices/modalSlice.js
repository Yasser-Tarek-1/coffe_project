import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  supplimetaries: [],
};

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    getSupplimetaries: (state, action) => {
      state.supplimetaries = action.payload;
    },
    clearModalData: (state) => {
      state.product = {};
      state.supplimetaries = [];
    },
  },
});

export const { getProduct, getSupplimetaries, clearModalData } =
  modalSlice.actions;

export default modalSlice.reducer;
