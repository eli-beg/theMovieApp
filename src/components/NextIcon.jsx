import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NextIcon = ({ direction, navigateNext, navigatePreviuos }) => {
  return (
    <NavigateNextIcon
      onClick={() =>
        direction === "right" ? navigateNext() : navigatePreviuos()
      }
      fontSize="large"
      sx={{
        color: "#333333",
        transform: direction === "left" ? "rotate(180deg)" : "",
        cursor: "pointer",
      }}
    />
  );
};

export default NextIcon;
