"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./number-field.module.css";
import { useState } from "react";

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
  const [inputValue, setInputValue] = useState(value);
  const minValue = 1;

  const increaseValue = () => {
    if (inputValue) {
      setInputValue(inputValue + 1);
      onIncrease();
    }
  };

  const decreaseValue = () => {
    if (inputValue > minValue) {
      setInputValue(inputValue - 1);
      onDecrease();
    }
  };

  return (
    <div className={style["number-field"]}>
      <button onClick={decreaseValue}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input type="number" disabled min={minValue} value={inputValue} />
      <button onClick={increaseValue}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default NumberField;
