import React from "react";
import { Box, Button, TextField } from "@mui/material";

const SearchBar = ({
  matches,
  dataSearch,
  handleSubmitSearch,
  handleChangeSearchValue,
}) => {
  return (
    <Box sx={style.containerSearchBar}>
      <form onSubmit={handleSubmitSearch}>
        <TextField
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

        <Button variant="contained" type="submit" sx={style.button}>
          Search
        </Button>
      </form>
    </Box>
  );
};

export default SearchBar;

const style = {
  containerSearchBar: {
    position: "absolute",
    top: "43%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "80%",
    zIndex: "3",
  },
  button: {
    position: "absolute",
    left: "90%",
    right: 1,
    zIndex: "4",
    height: { xs: "36px", md: "55px" },
    width: { xs: "80px", md: "125px", xl: "180px" },
    fontSize: { xs: ".7rem", md: "1rem" },
    backgroundColor: "#00CBB5",
  },
};
