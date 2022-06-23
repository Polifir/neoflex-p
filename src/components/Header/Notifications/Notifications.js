import React from "react";
import styles from "./Notifications.module.sass";
import { iconNotifications } from "../../../assets/index.js";
export const Notifications = () => {
  return (
    <div className={[styles.container, styles.containerNew].join(" ")}>
      <img src={iconNotifications} alt="bell" />
    </div>
  );
};
