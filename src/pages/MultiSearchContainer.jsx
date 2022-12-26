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
  const [dataSearch, setDataSearch] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const search = useParams();
  const navigate = useNavigate();

  const getSearch = useCallback(async () => {
    try {
      const dataMovie = await getMovieSearch(search.dataSearch);
      if (dataMovie.status === 200) {
        setDataMovieSearch(dataMovie.data.results);
        if (search.category === "movie") {
          setDataSearch(dataMovie.data.results);
        }
        if (!search.category) {
          setDataSearch(dataMovie.data.results);
        }
      }

      const dataTv = await getTvSearch(search.dataSearch);
      if (dataTv.status === 200) {
        setDataTvSearch(dataTv.data.results);

        if (search.category === "tv") {
          setDataSearch(dataTv.data.results);
        }
      }
      const dataPerson = await getPersonSearch(search.dataSearch);
      if (dataPerson.status === 200) {
        setDataPersonSearch(dataPerson.data.results);
        if (search.category === "person") {
          setDataSearch(dataPerson.data.results);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [search]);

  const handleDataSearch = (name) => {
    navigate(`/search/${name.toLowerCase()}/${search.dataSearch}`);
  };

  useEffect(() => {
    getSearch();
  }, [getSearch]);

  const handleOpenDetails = (id, category) => {
    navigate(`/details/${category}/${id}`);
  };

  const handleActiveButton = (name) => {
    setActiveButton(name);
  };

  const items = [
    {
      id: "1",
      name: "Movies",
      length: dataMovieSearch && dataMovieSearch.length,
    },
    { id: "2", name: "Tv", length: dataTvSearch && dataTvSearch.length },
    {
      id: "3",
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
          <SearchCategoriesContainer
            items={items}
            handleDataSearch={handleDataSearch}
            handleActiveButton={handleActiveButton}
            activeButton={activeButton}
          />
        </Grid>{" "}
        <Grid item container lg={9} spacing="20" marginBottom="40px">
          {dataSearch &&
            dataSearch.map((data) =>
              data.original_title || data.name ? (
                <Grid item key={data.id}>
                  <SearchCard
                    data={data}
                    handleOpenDetails={handleOpenDetails}
                    category={search.category}
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
