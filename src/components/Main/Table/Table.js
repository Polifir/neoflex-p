import React from "react";
import styles from "./Table.module.sass";
import { TableTitle } from "./TableTitle/TableTitle.js";

export const Table = () => {
  return (
    <table className={styles.table}>
      <TableTitle />
    </table>
  );
};
