"use client";

import React from "react";

import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hooks";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Divisor from "@/components/Divisor/Divisor";
import CartSummary from "@/components/CartSummary/CartSummary";
import CartItemList from "@/components/CartItemList/CartItemList";

import styles from "./page.module.css";

export default function Cart() {
  const { cart } = useAppSelector((state: RootState) => state.cart);

  const subtotal =
    cart?.items?.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0) ?? 0;

  return (
    <div className={styles["cart"]}>
      <Divisor />
      <Breadcrumb />
      <section>
        <h1>Seu carrinho</h1>
        <div className={styles["cart-container"]}>
          <div className={`${styles["cart-container__div"]}`}>
            <CartItemList items={cart?.items} />
          </div>
          <div className={`${styles["cart-container__div"]}`}>
            <CartSummary
              subtotal={subtotal}
              tax={cart?.tax ?? 0}
              discount={cart?.discount ?? 0}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
