"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

import styles from "./page.module.css";

export default function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <div className={styles["cart"]}>
      <Breadcrumb />
    </div>
  );
}
