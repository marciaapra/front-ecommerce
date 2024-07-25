import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./navicons.module.css";

const NavIcons = () => {
  return (
    <div className={styles["navicons"]}>
      <FontAwesomeIcon icon={faCartShopping} />
      <FontAwesomeIcon icon={faCircleUser} />
    </div>
  );
};

export default NavIcons;
