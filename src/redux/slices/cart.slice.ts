import { ICart } from "@/interfaces/cart.interface";
import { IProduct } from "@/interfaces/product.interface";
import { api } from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next";
import { RootState } from "../store";
interface ICartState {
  cart: ICart | null;
}

const initialState: ICartState = {
  cart: {
    id: "",
    discount: 0,
    tax: 15,
    items: [],
  },
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product: IProduct, a) => {
    const localCartId = getCookie("localCartId");

    let response;

    if (localCartId) {
      response = await api.post(`/cart/${localCartId}/item`, {
        params: product,
      });
    } else {
      response = await api.post("/cart", {
        params: {
          discount: 0,
          tax: 15,
          items: [
            {
              product,
              price: product.price,
              quantity: 1,
            },
          ],
        },
      });
    }

    const cart: ICart = response.data;

    setCookie("localCartId", cart.id, { secure: true });

    return cart;
  }
);

export const incrementQuantity = createAsyncThunk(
  "cart/incrementQuantity",
  async (idProduct: string, store) => {
    const state = store.getState() as RootState;
    const { cart } = state.cart;
    const item = cart?.items.find((item) => item.product.id == idProduct);
    if (cart && item) {
      const { data } = await api.patch(`/cart/${cart.id}/item/${item.id}`, {
        params: { quantity: item.quantity + 1 },
      });
      return data;
    }
  }
);

export const decrementQuantity = createAsyncThunk(
  "cart/decrementQuantity",
  async (idProduct: string, store) => {
    const state = store.getState() as RootState;
    const { cart } = state.cart;
    const item = cart?.items.find((item) => item.product.id === idProduct);
    if (cart && item && item.quantity > 1) {
      const { data } = await api.patch(`/cart/${cart.id}/item/${item.id}`, {
        params: { quantity: item.quantity - 1 },
      });

      return data;
    }
  }
);

export const removeItem = createAsyncThunk(
  "cart/removeItem",
  async (idProduct: string, store) => {
    const state = store.getState() as RootState;
    const { cart } = state.cart;
    const item = cart?.items.find((item) => item.product.id === idProduct);
    if (cart && item) {
      const { data } = await api.delete(`/cart/${cart.id}/item/${item.id}`);
      return data;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart(state, action) {
      if (action.payload) state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      if (action.payload) state.cart = action.payload;
    });
    builder.addCase(incrementQuantity.fulfilled, (state, action) => {
      if (action.payload) state.cart = action.payload;
    });
    builder.addCase(decrementQuantity.fulfilled, (state, action) => {
      if (action.payload) state.cart = action.payload;
    });
    builder.addCase(removeItem.fulfilled, (state, action) => {
      if (action.payload) state.cart = action.payload;
    });
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
