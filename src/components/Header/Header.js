import React from "react";
import { Search } from "./Search/Search.js";
import { Notifications } from "./Notifications/Notifications.js";
import { UserBio } from "./UserBio/UserBio.js";
import { LogOut } from "./LogOut/LogOut.js";

import "./Header.sass";

export const UserPanel = () => {
  return (
    <header className="user-panel">
      <Search />
      <Notifications />
      <UserBio />
      <LogOut />
    </header>
  );
};
