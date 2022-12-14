import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const SearchBanner = ({
  matches,
  imageBanner,
  dataSearch,
  handleSubmitSearch,
  handleChangeSearchValue,
}) => {
  return (
    <>
      <Box
        component="img"
        src={imageBanner}
        alt="img not found"
        sx={style.imageBanner}
      />
      <Box sx={style.containerBannerShadow} />
      <Typography sx={style.welcomeTitle}>Welcome</Typography>
      <Typography sx={style.subtitle}>
        Millions of movies, TV shows and people to discover. Explore now.
      </Typography>
      <SearchBar
        imageBanner={imageBanner}
        matches={matches}
        dataSearch={dataSearch}
        handleSubmitSearch={handleSubmitSearch}
        handleChangeSearchValue={handleChangeSearchValue}
      />
    </>
  );
};

export default SearchBanner;

const style = {
  imageBanner: {
    width: "100%",
    height: { xs: "320px", md: "423px" },
    objectFit: "cover",
    objectPosition: "0px 0px",
    zIndex: "1",
  },
  containerBannerShadow: {
    position: "absolute",
    top: { xs: "56px", sm: "64px", md: "68px" },
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(3,37,65,0.5)",
    width: "100%",
    height: { xs: "320px", md: "423px" },
    objectFit: "cover",
    zIndex: "2",
  },
  welcomeTitle: {
    position: "absolute",
    color: "white",
    top: { xs: "16%", lg: "23%" },
    left: "50%",
    transform: "translate(-50%,-40%)",
    textAlign: "left",
    width: "80%",
    zIndex: "3",
    fontSize: { xs: "1.75rem", lg: "2.2rem" },
    fontFamily: "Source Sans Pro",
    fontWeight: "700",
  },
  subtitle: {
    position: "absolute",
    color: "white",
    top: { xs: "26%", lg: "33%" },
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "left",
    width: "80%",
    zIndex: "3",
    fontSize: { xs: "1.25rem", lg: "2rem" },
    fontFamily: "Source Sans Pro",
    fontWeight: "400",
  },
};
