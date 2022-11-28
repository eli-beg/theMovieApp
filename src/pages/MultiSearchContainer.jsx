import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getMultiSearch } from "../api/bannerImage";

const MultiSearchContainer = () => {
  const [data, setData] = useState(null);
  const search = useParams();
  console.log(search);
  const getSearch = useCallback(async () => {
    try {
      const data = await getMultiSearch(search.dataSearch);
      if (data.status === 200) {
        setData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }, [search]);
  console.log(data);
  useEffect(() => {
    getSearch();
  }, [getSearch]);
  return (
    <>
      <Box sx={{ height: "1080px", width: "1080px", backgroundColor: "green" }}>
        {" "}
        <Typography>hola grid</Typography>
      </Box>
    </>
  );
};

export default MultiSearchContainer;
