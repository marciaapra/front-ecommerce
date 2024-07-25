"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./sale-modal.module.css";

interface SaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SaleModal = ({ isOpen, onClose }: SaleModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles["sale-modal"]}>
      <p className={styles["sale-modal__text"]}>
        Aproveita as nossas oportunidades!!!
      </p>
      <button className={styles["sale-modal__close-button"]} onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default SaleModal;
