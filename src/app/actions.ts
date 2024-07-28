"use server";

import { updateCart } from "@/redux/slices/cart.slice";
import { makeStore } from "@/redux/store";
import { backendApi } from "@/utils/api";
import { cookies } from "next/headers";

export async function initCart() {
  try {
    const localCartId = cookies().get("localCartId")?.value;

    if (localCartId) {
      const { data } = await backendApi.get(`/cart/${localCartId}`);

      const store = makeStore();
      await store.dispatch(updateCart(data));
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}
