import React from "react";

import { CreateBtn } from "./CreateBtn/CreateBtn.js";
import { Title } from "./Title/Title.js";
import styles from "./Main.module.sass";

export const Main = () => {
  return (
    <main className={styles.main}>
      <header className={styles.content}>
        <Title />
        <CreateBtn />
      </header>
    </main>
  );
};
