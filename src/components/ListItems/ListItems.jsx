import React from "react";
import { Grid, Typography } from "@mui/material";
import SearchCard from "../SearchCard/SearchCard";

const ListItems = ({ dataItem, handleOpenDetails, category, section }) => {
  console.log(dataItem);
  return (
    <Grid container spacing="20px" xs={12}>
      {section ? (
        <Grid item width="33%" display="flex" justifyContent="center">
          <Typography
            sx={{ textAlign: "left", fontWeight: "600", fontSize: "1.2rem" }}
          >
            {section}
          </Typography>
        </Grid>
      ) : null}
      {dataItem &&
        dataItem.map((item) => (
          <Grid
            item
            width="100%"
            key={item.id}
            display="flex"
            justifyContent="center"
          >
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
