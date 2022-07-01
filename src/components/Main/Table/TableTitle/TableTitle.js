import React from "react";
import styles from "./TableTitle.module.sass";

export const TableTitle = () => {
  return (
    <thead>
      <tr className={styles.title}>
        <th className={styles.element}>Title</th>
        <th className={styles.element}>Created</th>
        <th className={styles.element}>Type</th>
        <th className={styles.element}>Status</th>
        <th className={styles.element}>Actions</th>
      </tr>
    </thead>
  );
};
