"use client";

import SaleModal from "@/components/SaleModal/SaleModal";
import Banner from "../components/Banner/Banner";
import ProductHomeList from "../components/ProductHomeList/ProductHomeList";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [showSaleModal, setShowSaleModal] = useState(true);

  const handleCloseModal = () => {
    setShowSaleModal(false);
  };

  return (
    <main className={styles["main"]}>
      <SaleModal isOpen={showSaleModal} onClose={handleCloseModal} />
      <Banner />
      <section className={styles["section"]}>
        <ProductHomeList />
      </section>
    </main>
  );
}
