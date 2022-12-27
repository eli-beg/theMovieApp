import React from "react";
import { Grid, Typography } from "@mui/material";
import SearchCard from "../SearchCard/SearchCard";

const ListItems = ({ dataItem, handleOpenDetails, category, section }) => {
  return (
    <Grid
      container
      spacing="20px"
      xs={11}
      display="flex"
      justifyContent="center"
    >
      {section ? (
        <Grid item xs={10}>
          <Typography
            sx={{ textAlign: "left", fontWeight: "600", fontSize: "1.2rem" }}
          >
            {section}
          </Typography>
        </Grid>
      ) : null}
      <Grid
        item
        container
        spacing="20px"
        display="flex"
        justifyContent="center"
        xs={11}
      >
        {dataItem &&
          dataItem.map((item) => (
            <Grid item key={item.id} xs={11}>
              <SearchCard
                data={item}
                handleOpenDetails={handleOpenDetails}
                category={category}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default ListItems;
