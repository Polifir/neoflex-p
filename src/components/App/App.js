import React from "react";
import "./App.sass";
import { Navbar } from "../NavPanel/NavPanel.js";
import { UserPanel } from "../Header/Header.js";
import { Main } from "../Main/Main.js";

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <UserPanel />
      <Main />
    </div>
  );
};
