import React from "react";
import { Search } from "./Search/Search.js";
import { Notifications } from "./Notifications/Notifications.js";
import { UserBio } from "./UserBio/UserBio.js";
import { LogOut } from "./LogOut/LogOut.js";

import styles from "./Header.module.sass";

export const UserPanel = () => {
  return (
    <header className={styles.userPanel}>
      <Search />
      <Notifications />
      <UserBio />
      <LogOut />
    </header>
  );
};
