"use client";

import { IProduct } from "@/interfaces/product.interface";

import styles from "./product-home-card.module.css";

import StarRating from "../StarRating/StarRating";
import PriceTag from "../PriceTag/PriceTag";
import NameTag from "../NameTag/NameTag";
import ProductImage from "../ProductImage/ProductImage";

const ProductHomeCard = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles["product-home-card"]}>
      <ProductImage imageUrl={product.image} />
      <NameTag name={product.name} />
      <StarRating rate={product.score} />
      <PriceTag price={product.price} />
    </div>
  );
};

export default ProductHomeCard;
