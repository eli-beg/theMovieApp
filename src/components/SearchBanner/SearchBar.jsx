import { Box, Button, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({ matches }) => {
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
      {matches ? (
        <TextField
          hiddenLabel
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              height: 55,
            },
          }}
          placeholder="Search for a movie..."
        />
      ) : (
        <TextField
          hiddenLabel
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              height: 34,
            },
          }}
          placeholder="Search for a movie..."
        />
      )}

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          left: "90%",
          right: 1,
          zIndex: "4",
          height: { xs: "36px", md: "55px" },
          width: { xs: "80px", md: "125px", xl: "180px" },
          fontSize: { xs: ".7rem", md: "1rem" },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
