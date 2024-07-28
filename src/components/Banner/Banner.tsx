import Button from "../Button/Button";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles["banner"]}>
      <h1 className={styles["banner__title"]}>Se joga no arraiá</h1>
      <h2 className={styles["banner__subtitle"]}>
        Aproveite as festas com o melhor da maquiagem Natura
      </h2>
      <Button>Comprar agora</Button>
    </div>
  );
};

export default Banner;
