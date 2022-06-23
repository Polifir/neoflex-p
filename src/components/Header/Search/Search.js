import React from "react";
import styles from "./Search.module.sass";
import { iconSearch } from "../../../assets/index.js";

export const Search = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        id="site-search"
        name="q"
        placeholder="Search"
      ></input>
      <button className={styles.btn}>
        <img src={iconSearch} alt="search" />
      </button>
    </div>
  );
};
