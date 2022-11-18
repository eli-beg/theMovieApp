import { Box, Button, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  console.log("hola");
  return (
    <Box
      component="form"
      sx={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "80%",
        zIndex: "3",
      }}
    >
      <TextField
        hiddenLabel
        sx={{
          width: "100%",
          "& .MuiInputBase-root": {
            height: { md: 35, lg: 55 },
          },
        }}
        placeholder="Search for a movie..."
      />
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          left: "90%",
          zIndex: "4",
          height: { md: "35px", lg: "55px" },
          width: { md: "80px", lg: "125px" },
          fontSize: { md: ".8rem", lg: "1rem" },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
