import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchCardDetails from "../components/SearchCardDetails/SearchCardDetails";
import {
  getMovieDetailsSearch,
  getPersonDetailsSearch,
  getTrailer,
  getTvDetailsSearch,
} from "../api/searchItems";
import { setImageUrl } from "../utils/setImageUrl";
import { setUrlTrailer } from "../utils/setUrlTrailer";
import { setMinutesToHours } from "../utils/setMinutesToHours";
import { setGenresArrayToString } from "../utils/setGenresArrayToString";
import { getSimilarMovies } from "../api/carrouselItems";
import Slider from "../components/Slider";
import { Box, Typography } from "@mui/material";

const SearchCardDetailsContainer = () => {
  const [dataSearchDetails, setDataSearchDetails] = useState(null);
  const [dataSimilarMovies, setDataSimilarMovies] = useState(null);
  const [imageBanner, setImageBanner] = useState(null);
  const [imagePoster, setImagePoster] = useState(null);
  const [runtimeHours, setRuntimeHours] = useState(null);
  const [dataTrailer, setDataTrailer] = useState(null);
  const [genres, setGenres] = useState(null);
  const search = useParams();
  const navigate = useNavigate();

  const getSearchDetails = useCallback(async () => {
    try {
      if (search.category === "movies") {
        const dataMovieDetails = await getMovieDetailsSearch(search.id);
        if (dataMovieDetails.status === 200) {
          setDataSearchDetails(dataMovieDetails.data);
        }
        const dataTrailer = await getTrailer("movie", search.id);
        if (dataTrailer.status === 200) {
          setDataTrailer(dataTrailer.data.results);
        }
        const dataSimilarMovies = await getSimilarMovies(search.id);
        if (dataSimilarMovies.status === 200) {
          setDataSimilarMovies(dataSimilarMovies.data.results);
        }
      }

      if (search.category === "tv") {
        const dataTvDetails = await getTvDetailsSearch(search.id);
        if (dataTvDetails.status === 200) {
          setDataSearchDetails(dataTvDetails.data);
        }
        const dataTrailer = await getTrailer("tv", search.id);
        if (dataTrailer.status === 200) {
          setDataTrailer(dataTrailer.data.results);
        }
      }

      if (search.category === "person") {
        const dataPersonDetails = await getPersonDetailsSearch(search.id);
        if (dataPersonDetails.status === 200) {
          setDataSearchDetails(dataPersonDetails.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [search]);

  useEffect(() => {
    getSearchDetails();
  }, [getSearchDetails]);

  useEffect(() => {
    if (dataSearchDetails && dataSearchDetails.backdrop_path) {
      setImageBanner(setImageUrl(dataSearchDetails.backdrop_path));
    }
    if (dataSearchDetails && dataSearchDetails.poster_path) {
      setImagePoster(setImageUrl(dataSearchDetails.poster_path));
    }
    if (dataSearchDetails && typeof dataSearchDetails.runtime === "number") {
      setRuntimeHours(setMinutesToHours(dataSearchDetails.runtime));
    }
    if (dataSearchDetails && dataSearchDetails.genres) {
      setGenres(setGenresArrayToString(dataSearchDetails.genres));
    }
  }, [dataSearchDetails]);

  const handleNavigateToTrailer = (dataTrailer) => {
    const url = setUrlTrailer(dataTrailer[0].key);
    window.open(url);
  };

  const handleOpenDetails = (id, category) => {
    navigate(`/details/${category}/${id}`);
  };

  return (
    <>
      {dataSearchDetails && (
        <SearchCardDetails
          dataSearchDetails={dataSearchDetails}
          imageBanner={imageBanner}
          imagePoster={imagePoster}
          runtimeHours={runtimeHours}
          genres={genres}
          dataTrailer={dataTrailer}
          handleNavigateToTrailer={handleNavigateToTrailer}
        />
      )}
      <Box sx={{ width: "100%", position: "relative", marginTop: "80px" }}>
        <Typography
          sx={{
            fontWeight: "600",
            textAlign: "left",
            fontSize: { xs: "1.2rem", lg: "1.5rem" },
            padding: "15px",
            marginLeft: "115px",
          }}
        >
          Similar Movies
        </Typography>
      </Box>

      {dataSimilarMovies ? (
        <Slider
          items={dataSimilarMovies}
          handleOpenDetails={handleOpenDetails}
          category="movies"
        />
      ) : null}
    </>
  );
};

export default SearchCardDetailsContainer;
