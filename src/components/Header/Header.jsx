import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import HideOnScroll from "./HideOnScroll";
import Navbar from "./Navbar/Navbar";
import BurgerMenu from "./Navbar/BurguerMenu";
import logoHeader from "../../images/logoHeader.svg";

const Header = ({
  props,
  menu,
  handleCloseMenuMobile,
  handleOpenMenuMobile,
  menuIsOpen,
  navigate,
  setActiveButton,
  activeButton,
}) => {
  const handleNavigateToHome = () => {
    setActiveButton(false);
    navigate("/");
  };
  return (
    <HideOnScroll {...props}>
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: "rgb(13, 37, 63)",
          zIndex: 1300,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: "flex" }}>
            <Box
              component="img"
              src={logoHeader}
              alt="tmdb-logo"
              sx={{
                maxWidth: "7rem",
                display: {
                  md: "flex",
                  xs: "none",
                  width: "100%",
                  cursor: "pointer",
                },
              }}
              onClick={handleNavigateToHome}
            />
            <BurgerMenu
              menu={menu}
              handleCloseMenuMobile={handleCloseMenuMobile}
              handleOpenMenuMobile={handleOpenMenuMobile}
              menuIsOpen={menuIsOpen}
              navigate={navigate}
            />
            <Box
              component="img"
              src={logoHeader}
              alt="tmdb-logo"
              sx={{
                maxWidth: "7rem",
                display: {
                  xs: "flex",
                  md: "none",
                  width: "100%",
                  cursor: "pointer",
                },
              }}
              onClick={handleNavigateToHome}
            />
            <Navbar
              menu={menu}
              navigate={navigate}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
