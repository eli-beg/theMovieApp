import React from "react";
import { Box, Button, TextField } from "@mui/material";

const SearchBar = ({
  matches,
  dataSearch,
  handleSubmitSearch,
  handleChangeSearchValue,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "80%",
        zIndex: "3",
      }}
    >
      <form onSubmit={handleSubmitSearch}>
        <TextField
          id="outlined-name"
          hiddenLabel
          value={dataSearch}
          onChange={handleChangeSearchValue}
          sx={{
            width: "100%",

            "& .MuiInputBase-root": {
              height: matches ? 55 : 34,
            },
          }}
          placeholder="Search for a movie, tv show, person..."
        />

        <Button
          variant="contained"
          type="submit"
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
      </form>
    </Box>
  );
};

export default SearchBar;
