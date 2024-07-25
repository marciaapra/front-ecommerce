import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ text, color, onClick }: ButtonProps) => {
  const customColor = color ? `button--${color}` : "";
  return (
    <button
      className={`${styles.button} ${styles[customColor]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
