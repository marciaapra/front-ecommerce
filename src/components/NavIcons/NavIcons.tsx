import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./navicons.module.css";
import Link from "next/link";

const NavIcons = () => {
  return (
    <div className={styles["navicons"]}>
      <Link href="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faCircleUser} />
      </Link>
    </div>
  );
};

export default NavIcons;
