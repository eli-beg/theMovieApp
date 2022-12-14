import React from "react";
import { Grid, Typography } from "@mui/material";
import TextButton from "./TextButton";

const SearchCategoriesContainer = ({
  items,
  handleDataSearch,
  handleActiveButton,
  activeButton,
}) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      width="250px"
      height="191px"
      border="solid"
      sx={{
        borderRadius: "6px",
        borderWidth: "1px",
        borderColor: "#cfd8dc",
        overflow: "hidden",
      }}
    >
      <Grid item container padding="15px" sx={{ backgroundColor: " #01b4e4" }}>
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
      <Grid item>
        {items &&
          items.map((item) => (
            <TextButton
              key={item.id}
              fullWidth
              onClick={() => {
                handleDataSearch(item.name);
                handleActiveButton(item.name);
              }}
              sx={{
                backgroundColor: activeButton === item.name ? "#eceff1" : null,
              }}
            >
              <Typography fontWeight="600" textAlign="left" marginLeft="4px">
                {item.name}
              </Typography>
              <Typography fontWeight="600" textAlign="right" marginRight="5px">
                {item.length}
              </Typography>
            </TextButton>
          ))}
      </Grid>
    </Grid>
  );
};

export default SearchCategoriesContainer;
