import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  category: "All",
  filteredProducts: [],
};

export const filterDataSlice = createSlice({
  name: "filterDataSlice",
  initialState,
  reducers: {
    filterByName: (state, { payload }) => {
      // state.category = "All";
      state.name = payload;
    },
    filterByCategory: (state, { payload }) => {
      state.name = null;
      state.category = payload;
    },
    allfilteredProducts: (state, { payload }) => {
      state.filteredProducts = payload;
    },
  },
});

export const { filterByName, filterByCategory, allfilteredProducts } =
  filterDataSlice.actions;

export default filterDataSlice.reducer;
