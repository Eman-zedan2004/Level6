// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [],
  selectedProductsID: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productAndQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productAndQuantity);
      state.selectedProductsID.push(action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increaseProduct.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const decreaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      decreaseProduct.quantity -= 1;
      if (decreaseProduct.quantity === 0) {
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.selectedProducts = newArr;
      }
    },
    deleteProduct: (state, action) => {
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.selectedProducts = newArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, increaseQuantity, decreaseQuantity, deleteProduct } =
  CartSlice.actions;

export default CartSlice.reducer;
