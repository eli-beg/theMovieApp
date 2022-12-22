import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  Button,
  AccordionDetails,
} from "@mui/material";

import HamburgerIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const BurgerMenu = (props) => {
  const {
    menu,
    handleOpenMenuMobile,
    handleCloseMenuMobile,
    menuIsOpen,
    MenuIcon = null,
  } = props;

  const handleOpenItem = (id) => {
    console.log("hola", id);
  };

  return (
    <Box sx={style.containerMenu}>
      {MenuIcon || (
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenMenuMobile}
          color="inherit"
        >
          <HamburgerIcon sx={{ color: "white" }} />
        </IconButton>
      )}

      {menuIsOpen && (
        <Box sx={style.containerMenuOpen}>
          <IconButton
            onClick={() => handleCloseMenuMobile()}
            sx={style.containerCloseIcon}
          >
            <CloseIcon />
          </IconButton>

          {menu.map((page) => (
            <Accordion sx={style.accordion}>
              <AccordionSummary id={page.id}>
                <Typography sx={style.accordionSummary}>{page.text}</Typography>
              </AccordionSummary>
              {page.menuItems.map((item) => (
                <AccordionDetails key={item.id}>
                  <Button
                    sx={style.accordionDetailsButton}
                    onClick={() => handleOpenItem(item.id)}
                  >
                    {item.item}{" "}
                  </Button>
                </AccordionDetails>
              ))}
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default BurgerMenu;

const style = {
  containerMenu: {
    display: { xs: "flex", md: "none" },
    justifyContent: "right",
    mr: 4,
  },
  containerMenuOpen: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: " #0d253f",
    zIndex: 2000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1.3rem",
  },
  containerCloseIcon: {
    position: "absolute",
    top: 10,
    left: 15,
    color: "white",
  },
  accordion: {
    backgroundColor: "rgb(13, 37, 63)",
    boxShadow: "none",
  },
  accordionSummary: {
    fontSize: "1.2rem",
    textAlign: "center",
    width: "100%",
    color: "white",
  },
  accordionDetailsButton: {
    color: "white",
    "&:hover": { backgroundColor: "#00CBB5" },
  },
};
