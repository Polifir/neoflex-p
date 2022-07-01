import React from "react";
import styles from "./Table.module.sass";
import { TableTitle } from "./TableTitle/TableTitle.js";
import { TabelBody } from "./TableBody/TabelBody.js";
export const Table = () => {
  return (
    <table className={styles.table}>
      <TableTitle />
      <TabelBody
        name="Figma smart web system for to build"
        date="12/04/2021"
        type="networking"
        status="done"
        link="Browse"
      />
      <TabelBody
        name="Figma smart web system for to build"
        date="12/04/2021"
        type="software"
        status="done"
        link="Browse"
      />
      <TabelBody
        name="Figma smart web system for to build"
        date="12/04/2021"
        type="networking"
        status="in Progress"
        link="Browse"
      />
    </table>
  );
};
