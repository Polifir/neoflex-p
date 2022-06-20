import React from "react";
import "./App.sass";
import Navbar from "../NavPanel";
import UserPanel from "../Header";
import Main from "../Main";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <UserPanel />
      <Main />
    </div>
  );
};

export default App;
