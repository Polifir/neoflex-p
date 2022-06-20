import React from "react";
import Search from "./Search";
import Notifications from "./Notifications";
import UserBio from "./UserBio";
import LogOut from "./Log-out";

import "./Header.sass";

const UserPanel = () => {
  return (
    <header className="user-panel">
      <Search />
      <Notifications />
      <UserBio />
      <LogOut />
    </header>
  );
};

export default UserPanel;
