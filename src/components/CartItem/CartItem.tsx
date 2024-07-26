"use client";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ICartItem } from "@/interfaces/cart.interface";

import ProductImage from "@/components/ProductImage/ProductImage";
import NameTag from "@/components/NameTag/NameTag";
import PriceTag from "@/components/PriceTag/PriceTag";

import styles from "./cart-item.module.css";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/redux/slices/cart.slice";
import NumberField from "../NumberField/NumberField";

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { product } = cartItem;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(product._id));
  };

  const handleIncrementQuantity = () => {
    dispatch(incrementQuantity(product._id));
  };

  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(product._id));
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
