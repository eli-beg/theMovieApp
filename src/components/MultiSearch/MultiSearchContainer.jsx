import React from "react";
import { Box, Typography } from "@mui/material";

const MultiSearchContainer = ({ data }) => {
  console.log(data);
  return (
    <>
      <Box sx={{ height: "1080px", width: "1080px", backgroundColor: "green" }}>
        {" "}
        <Typography>hola grid</Typography>
      </Box>
    </>
  );
};

export default MultiSearchContainer;
