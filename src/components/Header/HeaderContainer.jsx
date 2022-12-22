import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menu = [
    {
      id: 1,
      text: "Movies",
      menuItems: [
        { id: "1movie", item: "Popular" },
        { id: "2movie", item: "Now Playing" },
        { id: "3movie", item: "Upcoming" },
        { id: "4movie", item: "Top Rated" },
      ],
    },
    {
      id: 2,
      text: "TV Shows",
      menuItems: [
        { id: "1tv", item: "Popular" },
        { id: "2tv", item: "Airing Today" },
        { id: "3tv", item: "On Tv" },
        { id: "4tv", item: "Top Rated" },
      ],
    },
    {
      id: 3,
      text: "People",
      menuItems: [{ id: "1people", item: "Popular People" }],
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
