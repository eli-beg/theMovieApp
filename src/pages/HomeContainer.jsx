import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import SearchBanner from "../components/Home/SearchBanner";
import { getBannerImage } from "../api/searchItems";

const HomeContainer = () => {
  const [imageBanner, setImageBanner] = useState(null);
  const [dataSearch, setDataSearch] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const getImage = useCallback(async () => {
    try {
      const data = await getBannerImage();
      if (data.status === 200) {
        const arrayImages = data.data.results;
        const item =
          arrayImages[Math.floor(Math.random() * arrayImages.length)];
        const image = `${process.env.REACT_APP_BASE_IMAGE_URL}${item.backdrop_path}`;
        setImageBanner(image);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getImage();
  }, [getImage]);

  const handleChangeSearchValue = (e) => {
    setDataSearch(e.target.value);
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    navigate(`/search/${dataSearch}`);
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
    </Box>
  );
};

export default HomeContainer;
