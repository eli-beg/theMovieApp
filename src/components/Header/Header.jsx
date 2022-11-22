import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import BrandLogo from "./BrandLogo";
import HideOnScroll from "./HideOnScroll";
import Navbar from "./Navbar/Navbar";
import BurgerMenu from "./Navbar/BurguerMenu";

const Header = ({
  props,
  menu,
  handleCloseMenu,
  handleOpenMenu,
  menuIsOpen,
}) => {
  return (
    <HideOnScroll {...props}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgb(13, 37, 63)",
          zIndex: 1300,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: "flex" }}>
            {/* <Link to="/"> */}
            <BrandLogo breakpointDisplay="md" breakpointHidden="xs" />

            <BurgerMenu
              menu={menu}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              menuIsOpen={menuIsOpen}
            />
            <BrandLogo breakpointDisplay="xs" breakpointHidden="md" />
            <Navbar menu={menu} />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
