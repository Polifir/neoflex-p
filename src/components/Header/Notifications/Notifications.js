import React from "react";
import "./Notifications.sass";
import iconNotifications from "../../../img/iconBell.svg";
export const Notifications = () => {
  return (
    <div className="notifications">
      <img src={iconNotifications} alt="bell" />
    </div>
  );
};
