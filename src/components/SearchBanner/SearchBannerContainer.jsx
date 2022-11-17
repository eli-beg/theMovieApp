import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import SearchBanner from "./SearchBanner";
import getBannerImage from "../../api/bannerImage";

const SearchBannerContainer = () => {
  const [imageBanner, setImageBanner] = useState(null);

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

  return (
    <Box>
      <SearchBanner imageBanner={imageBanner} />
    </Box>
  );
};

export default SearchBannerContainer;
