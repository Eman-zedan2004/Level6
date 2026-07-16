import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
    {
      id: 1,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 100,
      imageLink:
        "https://res.cloudinary.com/kpbimd3b/image/upload/v1784188874/5004c5c6a291bcbfa4cb4652a48a4349_ii10lv.jpg",
      quentity: 1,
    },
    {
      id: 2,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 200,
      imageLink:
        "https://res.cloudinary.com/kpbimd3b/image/upload/v1784189682/il_1588xN.5760260302_clxz_ur94ag.webp",
      quentity: 1,
    },
  ],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {console.log("add");},
    increaseQuantity: (state, action) => {console.log("increase");},
    decreaseQuantity: (state, action) => {console.log("decrease");},
    deleteProduct: (state, action) => {console.log("delete");},
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, increaseQuantity, decreaseQuantity, deleteProduct } =
  CartSlice.actions;

export default CartSlice.reducer;
