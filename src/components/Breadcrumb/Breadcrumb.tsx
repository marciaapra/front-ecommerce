"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { pageNames } from "@/utils/page-names";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./breadcrumb.module.css";

const Breadcrumb = () => {
  const path = usePathname();
  const pathNames = path.split("/").filter((path) => path);
  const separator = (
    <FontAwesomeIcon
      className={styles["breadcrumb__separator"]}
      icon={faChevronRight}
    />
  );

  return (
    <ul className={styles["breadcrumb"]}>
      <li className={styles["breadcrumb__li"]}>
        <Link href={"/"}>{pageNames.home}</Link>
      </li>
      {pathNames.length > 0 && separator}
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const style =
          path === href
            ? styles["breadcrumb__li--active"]
            : styles["breadcrumb__li"];
        return (
          <React.Fragment key={`breadcrumb_li_${index}`}>
            <li className={style}>
              <Link href={href}>{pageNames[link]}</Link>
            </li>
            {pathNames.length !== index + 1 && separator}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
