"use client";

import { IProduct } from "@/interfaces/product.interface";

import styles from "./product-card.module.css";

import PriceTag from "../PriceTag/PriceTag";
import NameTag from "../NameTag/NameTag";
import ProductImage from "../ProductImage/ProductImage";
import Button from "../Button/Button";
import DescriptionTag from "../DescriptionTag/DescriptionTag";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles["product-card"]}>
      <ProductImage imageUrl={product.image} />
      <div className={styles["product-card-info"]}>
        <div className={styles["product-card-info__text"]}>
          <NameTag name={product.name} />
          <DescriptionTag description={product.description} />
          <PriceTag price={product.price} />
        </div>
        <Button text="Adicionar" color="primary" />
      </div>
    </div>
  );
};

export default ProductCard;
