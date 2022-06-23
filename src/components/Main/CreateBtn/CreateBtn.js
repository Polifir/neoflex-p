import React from "react";
import styles from "./CreateBtn.module.sass";
import { iconPlus } from "../../../assets/index.js";
export const CreateBtn = () => {
  return (
    <button className={styles.btn}>
      <img src={iconPlus} alt="plus" />
      <span>Create claim</span>
    </button>
  );
};
