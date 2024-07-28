import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Button = ({ children, color, size, onClick }: ButtonProps) => {
  const customColor = color ? `button--${color}` : "";
  const customSize = size ? `button-${size}` : "";

  return (
    <button
      className={`${styles.button} ${styles[customColor]} ${styles[customSize]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
