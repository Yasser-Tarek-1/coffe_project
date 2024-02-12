import { createSlice } from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem("cart")) || {
  products: [],
  totalPrice: 0,
};

const initialState = {
  ...cart,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // payload is object => { product: {}, count: 1, supplimetaries: [] }
      const { product, count, supplimetaries } = payload;
      const existingProduct = state.products.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        // If the product already exists in the cart, update the count
        existingProduct.count += count;
      } else {
        // If the product doesn't exist, add it to the cart
        state.products.push({
          id: new Date().getTime(),
          product,
          count,
          supplimetaries,
        });
      }
    },
    removeFromCart: (state, { payload: _id }) => {
      state.products = state.products.filter(({ id }) => {
        return id !== _id;
      });
    },
    incCount: (state, { payload: _id }) => {
      const product = state.products.find(({ id }) => id === _id);
      if (product) {
        product.count += 1;
      }
    },
    decCount: (state, { payload: _id }) => {
      const product = state.products.find(({ id }) => id === _id);
      if (product && product.count > 1) {
        product.count -= 1;
      }
    },
    totalPriceInCart: (state) => {
      let totalPrice = 0;
      state.products.forEach((product) => {
        const productPrice =
          (product.product.price_include_tax + product.supplimetaries.price) *
          product.count;
        totalPrice += productPrice;
      });
      state.totalPrice = totalPrice;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incCount,
  decCount,
  totalPriceInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
