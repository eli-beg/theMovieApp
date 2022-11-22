import React from "react";
import Box from "@mui/material/Box";
import logoHeader from "../../images/logoHeader.svg";

const BrandLogo = ({ breakpointDisplay, breakpointHidden }) => (
  <Box
    sx={{
      maxWidth: "7rem",
      display: { [breakpointDisplay]: "flex", [breakpointHidden]: "none" },
    }}
  >
    <img src={logoHeader} alt="tmdb-logo" style={{ width: "100%" }} />
  </Box>
);

export default BrandLogo;
