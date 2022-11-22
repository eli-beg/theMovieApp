import React from "react";
import { Grid } from "@mui/material";
import HeaderContainer from "../../components/Header/HeaderContainer";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <Grid container display="flex" flexDirection="row" wrap="wrap">
    <Grid item width="100%">
      <HeaderContainer />
    </Grid>
    <Grid item width="100%">
      <Outlet />
    </Grid>
  </Grid>
);

export default MainLayout;
