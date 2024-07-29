"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./number-field.module.css";

interface NumberFieldProps {
  value: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

const NumberField = ({
  value,
  onIncrease = () => {},
  onDecrease = () => {},
}: NumberFieldProps) => {
  const minValue = 1;

  const increaseValue = () => {
    if (value) {
      onIncrease();
    }
  };

  const decreaseValue = () => {
    if (value > minValue) {
      onDecrease();
    }
  };

  return (
    <div className={style["number-field"]}>
      <button onClick={decreaseValue}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input type="number" disabled min={minValue} value={value} />
      <button onClick={increaseValue}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default NumberField;
