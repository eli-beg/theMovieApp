import React from "react";
import { Box } from "@mui/material";
import HeaderContainer from "../../components/Header/HeaderContainer";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <Box>
    <HeaderContainer />
    <Outlet />
  </Box>
);

export default MainLayout;
