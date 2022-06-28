import React from "react";

import { CreateBtn } from "./CreateBtn/CreateBtn.js";
import { Title } from "./Title/Title.js";
import styles from "./Main.module.sass";
import { Table } from "./Table/Table.js";

export const Main = () => {
  return (
    <div className={styles.main}>
      <header className={styles.content}>
        <Title />
        <CreateBtn />
      </header>
      <main className={styles.container}>
        <Table />
      </main>
    </div>
  );
};
