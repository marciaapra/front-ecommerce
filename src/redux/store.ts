import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
