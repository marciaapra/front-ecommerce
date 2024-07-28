import { HTMLInputTypeAttribute } from "react";

import styles from "./input-icon.module.css";

interface InputIconProps {
  children: React.ReactNode;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
}

const InputIcon = ({ children, type, name, placeholder }: InputIconProps) => {
  return (
    <div className={styles["input-icon"]}>
      {children}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles["input-icon__input"]}
      />
    </div>
  );
};

export default InputIcon;
