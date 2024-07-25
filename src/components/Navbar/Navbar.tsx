import Link from "next/link";

import Menu from "../Menu/Menu";
import Search from "../Search/Search";

import styles from "./navbar.module.css";
import NavIcons from "../NavIcons/NavIcons";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <Link className={styles["navbar__company"]} href="/">
        Cosméticos&Co
      </Link>
      <Menu />
      <Search />
      <NavIcons />
    </div>
  );
};

export default Navbar;
