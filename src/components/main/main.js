import React from "react";

import CreateBtn from "./CreateBtn";
import Title from "./Title";
import "./Main.sass";

const Main = () => {
  return (
    <main className="main">
      <header className="content">
        <Title />
        <CreateBtn />
      </header>
    </main>
  );
};

export default Main;
