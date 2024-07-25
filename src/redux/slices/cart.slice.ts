import { ICart } from "@/interfaces/cart.interface";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
  cart: ICart | null;
}

const initialState: ICartState = {
  cart: {
    items: [],
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { _id, price } = action.payload;

      const product = state.cart?.items.find((item) => item.productId === _id);

      if (product) {
        product.quantity++;
      } else {
        state.cart?.items.push({ productId: _id, quantity: 1, price });
      }
    },
    removeItem(state, action) {},
    incrementQuantity(state, action) {},
    decrementQuantity(state, action) {},
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
