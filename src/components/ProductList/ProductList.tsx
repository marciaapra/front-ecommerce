"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";

import { IProduct } from "@/interfaces/product.interface";

import styles from "./product-list.module.css";

import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";

const ProductList = () => {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = useCallback(async () => {
    const response = await api.get("/products");

    const productData: IProduct[] = response.data;

    setProducts(productData);
  }, []);

  const onHandleLoadMore = () => {
    router.push("/product/list");
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={styles["product-list"]}>
      <div className={styles["product-list__cards"]}>
        {products?.map((product, index) => (
          <ProductCard product={product} key={`product_${index}`} />
        ))}
      </div>
      <div className={styles["product-list__button"]}>
        <Button text="Carregar outros" onClick={onHandleLoadMore} />
      </div>
    </div>
  );
};

export default ProductList;
