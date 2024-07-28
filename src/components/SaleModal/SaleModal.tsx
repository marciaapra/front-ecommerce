"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./sale-modal.module.css";
import { useState } from "react";

const SaleModal = () => {
  const [showSaleModal, setShowSaleModal] = useState(true);

  const handleCloseModal = () => {
    setShowSaleModal(false);
  };

  if (!showSaleModal) return null;

  return (
    <div className={styles["sale-modal"]}>
      <p className={styles["sale-modal__text"]}>
        Aproveita as nossas oportunidades!!!
      </p>
      <button
        className={styles["sale-modal__close-button"]}
        onClick={handleCloseModal}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default SaleModal;
