import { Box } from "@mui/material";
import React from "react";
import SearchCard from "../SearchCard/SearchCard";

const ListItems = ({ dataItem }) => {
  console.log(dataItem);
  return (
    <Box>{dataItem && dataItem.map((item) => <SearchCard data={item} />)}</Box>
  );
};

export default ListItems;
