import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMovieSearch,
  getPersonSearch,
  getTvSearch,
} from "../api/searchItems";
import SearchCard from "../components/SearchCard/SearchCard";
import SearchCategoriesContainer from "../components/SearchCategories/SearchCategoriesContainer";

const MultiSearchContainer = () => {
  const [dataMovieSearch, setDataMovieSearch] = useState(null);
  const [dataTvSearch, setDataTvSearch] = useState(null);
  const [dataPersonSearch, setDataPersonSearch] = useState(null);
  const search = useParams();
  const navigate = useNavigate();

  const getSearch = useCallback(async () => {
    try {
      const dataMovie = await getMovieSearch(search.dataSearch);
      if (dataMovie.status === 200) {
        setDataMovieSearch(dataMovie.data.results);
        console.log(dataMovie.data.total_results); // aca tengo la cantidad total que devuelve la llamada, en base a esto haremos la paginacion
      }
      const dataTv = await getTvSearch(search.dataSearch);
      if (dataTv.status === 200) {
        setDataTvSearch(dataTv.data.results);
      }
      const dataPerson = await getPersonSearch(search.dataSearch);
      if (dataPerson.status === 200) {
        setDataPersonSearch(dataPerson.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  }, [search]);

  useEffect(() => {
    getSearch();
  }, [getSearch]);

  const handleOpenDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const items = [
    {
      name: "Movies",
      length: dataMovieSearch && dataMovieSearch.length,
    },
    { name: "Tv", length: dataTvSearch && dataTvSearch.length },
    {
      name: "Person",
      length: dataPersonSearch && dataPersonSearch.length,
    },
  ];

  return (
    <>
      <Grid
        container
        flexDirection="row"
        justifyContent="center"
        sx={{
          height: "100%",
          width: "100%",
          pt: "20px",
          ml: "0",
        }}
      >
        <Grid item lg={3} display="flex" justifyContent="center">
          <SearchCategoriesContainer items={items} />
        </Grid>{" "}
        <Grid item container lg={9} spacing="20">
          {dataMovieSearch &&
            dataMovieSearch.map((data) =>
              data.original_title ? (
                <Grid item key={data.id}>
                  <SearchCard
                    data={data}
                    handleOpenDetails={handleOpenDetails}
                  />
                </Grid>
              ) : null
            )}
        </Grid>
      </Grid>
    </>
  );
};

export default MultiSearchContainer;
