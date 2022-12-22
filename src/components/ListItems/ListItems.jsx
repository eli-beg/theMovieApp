import React from "react";
import { Grid } from "@mui/material";
import SearchCard from "../SearchCard/SearchCard";

const ListItems = ({ dataItem, handleOpenDetails, category }) => {
  return (
    <Grid container spacing="20px" display="flex" justifyContent="center">
      {dataItem &&
        dataItem.map((item) => (
          <Grid item>
            <SearchCard
              data={item}
              handleOpenDetails={handleOpenDetails}
              category={category}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default ListItems;
