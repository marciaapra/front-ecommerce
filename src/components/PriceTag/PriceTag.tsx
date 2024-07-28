import currencyFormat from "@/utils/currency-format";
import styles from "./price-tag.module.css";

interface PriceTagProps {
  price: number;
  color?: string;
}

const PriceTag = ({ price, color }: PriceTagProps) => {
  const customColor = color ? `price--${color}` : "";
  return (
    <p className={`${styles.price} ${styles[customColor]}`}>
      {currencyFormat(price)}
    </p>
  );
};
export default PriceTag;
