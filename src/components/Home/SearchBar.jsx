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
            "& input::placeholder": {
              fontSize: { xs: "0.8rem", md: "1rem" },
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
    top: { xs: "36%", md: "45%", lg: "48%" },
    left: { xs: "45%", lg: "50%" },
    transform: "translate(-50%,-50%)",
    width: { xs: "70%", lg: "80%" },
    zIndex: "3",
  },
  button: {
    position: "absolute",
    left: { xs: "85%", sm: "87%", lg: "90%" },
    right: 1,
    zIndex: "4",
    height: { xs: "36px", md: "55px" },
    width: { xs: "80px", md: "125px", xl: "180px" },
    fontSize: { xs: ".7rem", md: "1rem" },
    backgroundColor: "#00CBB5",
  },
};
