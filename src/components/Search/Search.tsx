"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import InputIcon from "@/components/InputIcon/InputIcon";

import styles from "./search.module.css";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;

    search ? params.set("query", search) : params.delete("query");

    router.replace(`/product?${params.toString()}`);
  };

  return (
    <form className={styles["search"]} onSubmit={handleSearch}>
      <InputIcon
        type="text"
        name="search"
        placeholder="O que está buscando hoje?"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </InputIcon>
    </form>
  );
};

export default Search;
