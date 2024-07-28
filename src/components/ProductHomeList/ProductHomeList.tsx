"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { api } from "@/utils/api";

import { IProduct } from "@/interfaces/product.interface";

import styles from "./product-home-list.module.css";

import ProductHomeCard from "../ProductHomeCard/ProductHomeCard";
import Button from "../Button/Button";

const ProductHomeList = () => {
  const router = useRouter();

  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = useCallback(async () => {
    const response = await api.get("/products");

    const productData: IProduct[] = response.data;

    setProducts(productData);
  }, []);

  const handleLoadMore = () => {
    router.push("product");
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={styles["product-home-list"]}>
      <h1 className={styles["product-home-list__title"]}>
        Descubra as fragrâncias que combinam com você
      </h1>
      <div className={styles["product-home-list__cards"]}>
        {products?.slice(0, 4).map((product, index) => (
          <ProductHomeCard product={product} key={`product_${index}`} />
        ))}
      </div>
      <Button onClick={handleLoadMore}>Carregar outros</Button>
    </div>
  );
};

export default ProductHomeList;
