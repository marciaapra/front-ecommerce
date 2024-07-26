"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { IProduct } from "@/interfaces/product.interface";
import { addItem } from "@/redux/slices/cart.slice";

import PriceTag from "@/components/PriceTag/PriceTag";
import NameTag from "@/components/NameTag/NameTag";
import ProductImage from "@/components/ProductImage/ProductImage";
import Button from "@/components/Button/Button";
import DescriptionTag from "@/components/DescriptionTag/DescriptionTag";

import styles from "./product-card.module.css";

const ProductCard = ({ product }: { product: IProduct }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    router.push("/cart");
  };

  return (
    <div className={styles["product-card"]}>
      <ProductImage imageUrl={product.image} width={200} height={200} />
      <div className={styles["product-card-info"]}>
        <div className={styles["product-card-info__text"]}>
          <NameTag name={product.name} />
          <DescriptionTag description={product.description} />
          <PriceTag price={product.price} />
        </div>
        <Button color="primary" onClick={handleAddToCart}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
