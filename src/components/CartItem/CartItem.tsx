"use client";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch } from "@/redux/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/redux/slices/cart.slice";

import { ICartItem } from "@/interfaces/cart.interface";

import ProductImage from "@/components/ProductImage/ProductImage";
import NameTag from "@/components/NameTag/NameTag";
import PriceTag from "@/components/PriceTag/PriceTag";
import NumberField from "@/components/NumberField/NumberField";

import styles from "./cart-item.module.css";

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { product } = cartItem;
  const dispatch = useAppDispatch();

  const handleRemoveItem = async () => {
    await dispatch(removeItem(product.id));
  };

  const handleIncrementQuantity = async () => {
    await dispatch(incrementQuantity(product.id));
  };

  const handleDecrementQuantity = async () => {
    await dispatch(decrementQuantity(product.id));
  };

  return (
    <div className={styles["cart-item"]}>
      <ProductImage imageUrl={product.image} width={100} height={100} />
      <div className={styles["cart-item-content"]}>
        <div className={styles["cart-item-info"]}>
          <NameTag name={product.name} />
          <button
            className={styles["cart-item-info__button"]}
            onClick={handleRemoveItem}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <div className={styles["cart-item-info"]}>
          <PriceTag price={cartItem.price} />
          <NumberField
            value={cartItem.quantity}
            onIncrease={handleIncrementQuantity}
            onDecrease={handleDecrementQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
