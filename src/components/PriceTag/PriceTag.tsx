import currencyFormat from "@/utils/currency-format";
import styles from "./price-tag.module.css";

const PriceTag = ({ price }: { price: number }) => {
  return <p className={styles["price"]}>{currencyFormat(price)}</p>;
};
export default PriceTag;
