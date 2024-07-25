"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// import { useRouter } from "next/router";
import styles from "./search.module.css";

const Search = () => {
  // const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const name = formData.get("name") as string;

    // if (name) {
    //   router.push(`/list?name=${name}`);
    // }
  };

  return (
    <form className={styles["search"]} onSubmit={handleSearch}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        name="search"
        placeholder="O que está buscando hoje?"
        className={styles["search__input"]}
      />
    </form>
  );
};

export default Search;
