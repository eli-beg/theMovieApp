import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const SearchBanner = ({ imageBanner }) => {
  return (
    <>
      <Box
        component="img"
        src={imageBanner}
        alt="img not found"
        sx={{
          width: "100%",
          height: { xs: "250px", md: "500px" },
          objectFit: "cover",
          objectPosition: "0px 0px",
          zIndex: "1",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 22,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(3,37,65,0.5)",
          width: "100%",
          height: { xs: "250px", md: "500px" },
          objectFit: "cover",
          zIndex: "2",
        }}
      />
      <Typography
        fontSize={{ xs: "1.75rem", lg: "2.2rem" }}
        fontFamily="Source Sans Pro"
        fontWeight="700"
        style={{
          position: "absolute",
          color: "white",
          top: "20%",
          left: "50%",
          transform: "translate(-50%,-40%)",
          textAlign: "left",
          width: "80%",
          zIndex: "3",
        }}
      >
        Welcome.
      </Typography>
      <Typography
        fontSize={{ xs: "1.25rem", lg: "2rem" }}
        fontFamily="Source Sans Pro"
        fontWeight="400"
        style={{
          position: "absolute",
          color: "white",
          top: "30%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "left",
          width: "80%",
          zIndex: "3",
        }}
      >
        Millions of movies, TV shows and people to discover. Explore now.
      </Typography>
      <SearchBar />
    </>
  );
};

export default SearchBanner;
