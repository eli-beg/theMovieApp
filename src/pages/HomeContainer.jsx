import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import SearchBanner from "../components/Home/SearchBanner";
import { getBannerImage } from "../api/searchItems";
import { getTopRatedMovies, getUpcomingMovies } from "../api/carrouselItems";
import { setImageUrl } from "../utils/setImageUrl";
import Slider from "../components/Slider";

const HomeContainer = () => {
  const [imageBanner, setImageBanner] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);

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
      const dataUpcomingMovies = await getUpcomingMovies();
      if (dataUpcomingMovies.status === 200) {
        setUpcomingMovies(dataUpcomingMovies.data.results);
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
    const category = "movie";
    navigate(`/search/${category}/${dataSearch}`);
  };

  const handleOpenDetails = (id, category) => {
    navigate(`/details/${category}/${id}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginBottom="40px"
    >
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
        justifyContent="center"
        width="100%"
        height="100%"
        flexWrap="wrap"
      >
        <Box sx={{ width: "86%", position: "relative" }}>
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "left",
              fontSize: { xs: "1.2rem", lg: "1.5rem" },
              padding: "15px",
              marginTop: "30px",
            }}
          >
            Top Rated Movies
          </Typography>
        </Box>

        {topRatedMovies ? (
          <Slider
            items={topRatedMovies}
            handleOpenDetails={handleOpenDetails}
            category="movie"
          />
        ) : null}

        <Box sx={{ width: "86%", position: "relative", marginTop: "50px" }}>
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "left",
              fontSize: { xs: "1.2rem", lg: "1.5rem" },
              padding: "15px",
            }}
          >
            Upcoming Movies
          </Typography>
        </Box>

        {upcomingMovies ? (
          <Slider
            items={upcomingMovies}
            handleOpenDetails={handleOpenDetails}
            category="movie"
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default HomeContainer;
