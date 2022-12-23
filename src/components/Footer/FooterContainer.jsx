import React from "react";
import { Grid } from "@mui/material";
import Footer from "./Footer";

const FooterContainer = () => {
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
  return (
    <Grid
      container
      width="100%"
      minHeight="280px"
      sx={{ backgroundColor: "rgb(13, 37, 63)" }}
    >
      <Footer menu={menu} />
    </Grid>
  );
};

export default FooterContainer;
