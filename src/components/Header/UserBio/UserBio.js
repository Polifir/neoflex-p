import React from "react";
import styles from "./UserBio.module.sass";

export const UserBio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}></div>
      <span className={styles.name}>Ivan Ivanov</span>
    </div>
  );
};
