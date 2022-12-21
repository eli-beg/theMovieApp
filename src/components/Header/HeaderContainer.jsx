import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menu = [
    {
      id: 1,
      text: "Movies",
      menuItems: [
        { id: "1", item: "Popular" },
        { id: "2", item: "Now Playing" },
        { id: "3", item: "Upcoming" },
        { id: "4", item: "Top Rated" },
      ],
    },
    {
      id: 2,
      text: "TV Shows",
      menuItems: [
        { id: "1", item: "Popular" },
        { id: "2", item: "Airing Today" },
        { id: "3", item: "On Tv" },
        { id: "4", item: "Top Rated" },
      ],
    },
    {
      id: 3,
      text: "People",
      menuItems: [{ id: "1", item: "Popular People" }],
    },
  ];
  const handleOpenMenuMobile = () => {
    console.log("abriendo");
    setMenuIsOpen(true);
  };

  const handleCloseMenuMobile = () => {
    setMenuIsOpen(false);
  };

  return (
    <Header
      menu={menu}
      handleOpenMenuMobile={handleOpenMenuMobile}
      handleCloseMenuMobile={handleCloseMenuMobile}
      menuIsOpen={menuIsOpen}
    />
  );
};
export default HeaderContainer;
