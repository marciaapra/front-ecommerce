import { ICart } from "@/interfaces/cart.interface";
import { IProduct } from "@/interfaces/product.interface";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
  cart: ICart | null;
}

const initialState: ICartState = {
  cart: {
    discount: 0,
    tax: 15,
    items: [],
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { _id, price }: IProduct = action.payload;

      const product = state.cart?.items.find((item) => item.productId === _id);

      if (product) {
        product.quantity++;
      } else {
        state.cart?.items.push({
          productId: _id,
          quantity: 1,
          price,
          product: action.payload,
        });
      }
    },
    removeItem(state, action) {
      const productId: string = action.payload;
      const products = state.cart?.items.filter(
        (item) => item.productId !== productId
      );

      if (state.cart) state.cart.items = products ?? [];
    },
    incrementQuantity(state, action) {
      const productId: string = action.payload;

      const product = state.cart?.items.find(
        (item) => item.productId === productId
      );

      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const productId: string = action.payload;

      const product = state.cart?.items.find(
        (item) => item.productId === productId
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
