import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchCardDetails from "../components/SearchCardDetails/SearchCardDetails";
import { getDetailsSearch, getTrailer } from "../api/searchItems";
import { setImageUrl } from "../utils/setImageUrl";
import { setUrlTrailer } from "../utils/setUrlTrailer";
import { setMinutesToHours } from "../utils/setMinutesToHours";
import { setGenresArrayToString } from "../utils/setGenresArrayToString";
import { getSimilarMovies } from "../api/carrouselItems";
import Slider from "../components/Slider";
import { Box, Typography } from "@mui/material";
import { convertUrlSectionToTitle } from "../utils/convertUrlSectionToTitle";

const SearchCardDetailsContainer = () => {
  const [dataSearchDetails, setDataSearchDetails] = useState(null);
  const [dataSimilar, setDataSimilar] = useState(null);
  const [imageBanner, setImageBanner] = useState(null);
  const [imagePoster, setImagePoster] = useState(null);
  const [runtimeHours, setRuntimeHours] = useState(null);
  const [dataTrailer, setDataTrailer] = useState(null);
  const [category, setCategory] = useState(null);
  const [genres, setGenres] = useState(null);
  const search = useParams();
  const navigate = useNavigate();

  const getSearchDetails = useCallback(async () => {
    try {
      const dataDetails = await getDetailsSearch(search.category, search.id);
      if (dataDetails.status === 200) {
        setDataSearchDetails(dataDetails.data);
      }
      if (search.category === "movie" || search.category === "tv") {
        const dataTrailer = await getTrailer(search.category, search.id);
        if (dataTrailer.status === 200) {
          setDataTrailer(dataTrailer.data.results);
        }
        const dataSimilar = await getSimilarMovies(search.category, search.id);
        if (dataSimilar.status === 200) {
          setDataSimilar(dataSimilar.data.results);
          setCategory(convertUrlSectionToTitle(search.category));
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
    if (dataSearchDetails && dataSearchDetails.profile_path) {
      setImagePoster(setImageUrl(dataSearchDetails.profile_path));
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
      <Box
        sx={{
          width: "100%",
          position: "relative",
          marginTop: "80px",
          marginBottom: "50px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            textAlign: "left",
            fontSize: { xs: "1.2rem", lg: "1.5rem" },
            padding: "15px",
            marginLeft: "115px",
          }}
        >
          {category && category}
        </Typography>
        {dataSimilar ? (
          <Slider
            items={dataSimilar}
            handleOpenDetails={handleOpenDetails}
            category="movie"
          />
        ) : null}
      </Box>
    </>
  );
};

export default SearchCardDetailsContainer;
