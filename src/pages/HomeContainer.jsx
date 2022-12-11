import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import SearchBanner from "../components/Home/SearchBanner";
import { getBannerImage } from "../api/searchItems";
import MainCard from "../components/MainCard/MainCard";
import { getTopRatedMovies } from "../api/carrouselItems";
import { setImageUrl } from "../utils/setImageUrl";

const HomeContainer = () => {
  const [imageBanner, setImageBanner] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [dataSearch, setDataSearch] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const getDataHome = useCallback(async () => {
    try {
      const data = await getBannerImage();
      if (data.status === 200) {
        const arrayImages = data.data.results;
        const item =
          arrayImages[Math.floor(Math.random() * arrayImages.length)];
        const image = setImageUrl(item.backdrop_path);
        setImageBanner(image);
      }
      const dataTopRatedMovies = await getTopRatedMovies();
      if (dataTopRatedMovies.status === 200) {
        setTopRatedMovies(dataTopRatedMovies.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getDataHome();
  }, [getDataHome]);

  const handleChangeSearchValue = (e) => {
    setDataSearch(e.target.value);
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    const category = "movies";
    navigate(`/search/${category}/${dataSearch}`);
  };

  return (
    <Box>
      <SearchBanner
        imageBanner={imageBanner}
        matches={matches}
        dataSearch={dataSearch}
        handleSubmitSearch={handleSubmitSearch}
        handleChangeSearchValue={handleChangeSearchValue}
      />
      <Box display="flex" flexWrap="wrap">
        {topRatedMovies &&
          topRatedMovies.map((movie) => <MainCard movie={movie} />)}
      </Box>
    </Box>
  );
};

export default HomeContainer;
