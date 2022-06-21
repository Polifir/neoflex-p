import React from "react";
import styles from "./LogOut.module.sass";
import iconLogOut from "../../../img/iconLogOut.svg";

export const LogOut = () => {
  return (
    <button className={styles.btn}>
      <img src={iconLogOut} alt="Log-Out"></img>
    </button>
  );
};
