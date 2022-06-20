import React from "react";

import { CreateBtn } from "./CreateBtn/CreateBtn.js";
import { Title } from "./Title/Title.js";
import "./Main.sass";

export const Main = () => {
  return (
    <main className="main">
      <header className="content">
        <Title />
        <CreateBtn />
      </header>
    </main>
  );
};
