// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productAndQuantity = {...action.payload, "quantity": 1}
      state.selectedProducts.push(productAndQuantity);
    },
    increaseQuantity: (state, action) => {console.log("increase");},
    decreaseQuantity: (state, action) => {console.log("decrease");},
    deleteProduct: (state, action) => {console.log("delete");},
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, increaseQuantity, decreaseQuantity, deleteProduct } =
  CartSlice.actions;

export default CartSlice.reducer;
