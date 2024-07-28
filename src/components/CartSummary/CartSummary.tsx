import { faArrowRight, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@/components/Button/Button";
import Divisor from "@/components/Divisor/Divisor";
import PriceTag from "@/components/PriceTag/PriceTag";
import InputIcon from "@/components/InputIcon/InputIcon";

import styles from "./cart-summary.module.css";

interface CartSummary {
  subtotal: number;
  discount: number;
  tax: number;
}

const CartSummary = ({ subtotal, discount, tax }: CartSummary) => {
  const total = subtotal + tax - discount;

  const handleCoupon = () => {};

  return (
    <div className={styles["cart-summary"]}>
      <h1>Sumário</h1>
      <div className={styles["cart-summary-content"]}>
        <div className={styles["cart-summary-prices"]}>
          <p className={styles["cart-summary-prices__label"]}>Subtotal</p>
          <PriceTag price={subtotal} />
        </div>
        <div className={styles["cart-summary-prices"]}>
          <p className={styles["cart-summary-prices__label"]}>Desconto</p>
          <PriceTag price={discount} color="danger" />
        </div>
        <div className={styles["cart-summary-prices"]}>
          <p className={styles["cart-summary-prices__label"]}>Frete</p>
          <PriceTag price={tax} />
        </div>
        <Divisor />
        <div
          className={`${styles["cart-summary-prices"]} ${styles["total-price"]}`}
        >
          <p>Total</p>
          <PriceTag price={total} />
        </div>
        <div className={styles["coupon-content"]}>
          <form className={styles["coupon"]} onSubmit={handleCoupon}>
            <InputIcon type="text" name="coupon" placeholder="Cupom">
              <FontAwesomeIcon icon={faTag} />
            </InputIcon>
          </form>
          <Button color="secondary">Aplicar</Button>
        </div>
        <div className={styles["cart-summary-content__button"]}>
          <Button color="primary" size="full">
            <div className={styles["button-content"]}>
              <p>Finalizar compra</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
