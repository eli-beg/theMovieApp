import React from "react";
import { Grid, Typography } from "@mui/material";

const SearchCategoriesContainer = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      width="250px"
      height="200px"
      border="solid"
      sx={{
        borderRadius: "15px",
        borderWidth: "1px",
        borderColor: "#cfd8dc",
        overflow: "hidden",
      }}
    >
      <Grid item container padding="20px" sx={{ backgroundColor: " #01b4e4" }}>
        <Typography
          fontFamily="Source Sans Pro"
          fontWeight="600"
          fontSize="18px"
          alignSelf="left"
          color="white"
        >
          Search Results
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchCategoriesContainer;
