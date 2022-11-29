import React, { useState, useEffect, useCallback } from "react";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getMultiSearch } from "../api/bannerImage";
import SearchCard from "../components/SearchCard/SearchCard";

const MultiSearchContainer = () => {
  const [dataSearch, setDataSearch] = useState(null);
  const search = useParams();

  const getSearch = useCallback(async () => {
    try {
      const data = await getMultiSearch(search.dataSearch);
      if (data.status === 200) {
        setDataSearch(data.data.results);
        console.log(data.data.total_results); // aca tengo la cantidad total que devuelve la llamada, en base a esto haremos la paginacion
      }
    } catch (error) {
      console.error(error);
    }
  }, [search]);

  useEffect(() => {
    getSearch();
  }, [getSearch]);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing="20"
        sx={{
          height: "100%",
          width: "100%",
          pt: "20px",
          ml: "0",
        }}
      >
        {" "}
        {dataSearch &&
          dataSearch.map((data) => (
            <Grid item>
              <SearchCard data={data} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default MultiSearchContainer;
