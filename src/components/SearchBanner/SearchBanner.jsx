import React from "react";
import { Box } from "@mui/material";

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
        }}
      />
    </>
  );
};

export default SearchBanner;
