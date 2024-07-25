import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles["menu"]}>
      <button className={styles["menu__button"]}>
        <div>Produtos</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export default Menu;
