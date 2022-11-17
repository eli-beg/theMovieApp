import React from "react";

import { Box, Typography } from "@mui/material";
import HeaderContainer from "../../components/Header/HeaderContainer";
import SearchBannerContainer from "../../components/SearchBanner/SearchBannerContainer";

const MainLayout = () => (
  <Box>
    <HeaderContainer />
    {/* <Box sx={{ minHeight: 'calc(100vh - 380px)', margin: '120px 0 20px 0' }}>
      <Outlet />
    </Box>
    <FooterContainer /> */}

    <SearchBannerContainer />
  </Box>
);

export default MainLayout;
