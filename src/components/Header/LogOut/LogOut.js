import React from "react";
import "./LogOut.sass";
import iconLogOut from "../../../img/iconLogOut.svg";

export const LogOut = () => {
  return (
    <button className="btn log-out">
      <img src={iconLogOut} alt="Log-Out"></img>
    </button>
  );
};
