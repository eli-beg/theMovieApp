import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menu = [
    {
      id: 1,
      text: "Movies",
    },
    {
      id: 2,
      text: "TV Shows",
    },
    {
      id: 3,
      text: "People",
    },
  ];
  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <Header
      menu={menu}
      handleOpenMenu={handleOpenMenu}
      handleCloseMenu={handleCloseMenu}
      menuIsOpen={menuIsOpen}
    />
  );
};
export default HeaderContainer;
