import { createSlice } from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem("cart")) || {
  products: [],
  totalPrice: 0,
};

// Function to compare arrays
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].id !== arr2[i].id) return false;
  }
  return true;
}

const initialState = {
  ...cart,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { product, count, supplimetaries } = payload;
      const existingProducts = state.products.filter((obj) => {
        return obj.product.id === product.id;
      });

      if (existingProducts.length > 0) {
        // If there are existing products with the same ID
        let updatedProducts = state.products.map((item) => {
          if (
            item.product.id === product.id &&
            arraysEqual(item.supplimetaries, supplimetaries)
          ) {
            // If the product and its supplements match, update the count
            return {
              ...item,
              count: item.count + count,
            };
          }
          return item;
        });

        if (
          !existingProducts.some((item) =>
            arraysEqual(item.supplimetaries, supplimetaries)
          )
        ) {
          // If there are existing products but no matching supplements, add a new product
          updatedProducts.push({
            id: new Date().getTime(),
            product,
            count,
            supplimetaries,
          });
        }

        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        // If the product is not in the cart, add it
        return {
          ...state,
          products: [
            ...state.products,
            {
              id: new Date().getTime(),
              product,
              count,
              supplimetaries,
            },
          ],
        };
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
      state.products.forEach((obj) => {
        let productPrice = obj.product.price_include_tax;

        // Calculate the total price of all supplements
        let supplementsPrice = obj.supplimetaries.reduce((acc, sup) => {
          return acc + sup.price_include_tax;
        }, 0);

        // Multiply the total price by the count
        let totalObjectPrice = (productPrice + supplementsPrice) * obj.count;

        // Add the total object price to the total price
        totalPrice += totalObjectPrice;
      });
      state.totalPrice = totalPrice;
      // return { ...state, totalPrice: totalPrice }; // Return new state object
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
