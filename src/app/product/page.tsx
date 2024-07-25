"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/utils/api";

import { IProduct } from "@/interfaces/product.interface";

import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import Button from "@/components/Button/Button";

export default function ProductListPage() {
  const router = useRouter();
  const params = useSearchParams();

  const [products, setProducts] = useState<IProduct[]>([]);

  const query = params.get("query");

  const getProducts = useCallback(async () => {
    const params = {
      search: query,
    };

    const response = await api.get("/products/search", { params });

    const productData: IProduct[] = response.data;

    setProducts(productData);
  }, [query]);

  const onHandleLoadMore = () => {
    router.push("/product");
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={styles["product-list"]}>
      {products.length > 0 ? (
        <div className={styles["product-list__cards"]}>
          {products?.map((product, index) => (
            <ProductCard product={product} key={`product_${index}`} />
          ))}
        </div>
      ) : (
        <div className={styles["product-list-empty"]}>
          <p>Nenhum produto encontrado</p>
        </div>
      )}

      <div className={styles["product-list__button"]}>
        <Button text="Carregar outros" onClick={onHandleLoadMore} />
      </div>
    </div>
  );
}
