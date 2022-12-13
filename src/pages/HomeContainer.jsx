import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import SearchBanner from "../components/Home/SearchBanner";
import { getBannerImage } from "../api/searchItems";
import { getTopRatedMovies } from "../api/carrouselItems";
import { setImageUrl } from "../utils/setImageUrl";
import Slider from "../components/Slider";

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

  const handleOpenDetails = (id, category) => {
    navigate(`/details/${category}/${id}`);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <SearchBanner
        imageBanner={imageBanner}
        matches={matches}
        dataSearch={dataSearch}
        handleSubmitSearch={handleSubmitSearch}
        handleChangeSearchValue={handleChangeSearchValue}
      />
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        height=" 1080px"
        flexWrap="wrap"
      >
        {topRatedMovies ? (
          <Slider
            items={topRatedMovies}
            handleOpenDetails={handleOpenDetails}
            category="movies"
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default HomeContainer;
