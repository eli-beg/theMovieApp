import React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { navigateToList } from "../../../utils/navigateToList";

const Navbar = ({ menu, navigate, activeButton, setActiveButton }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e, id) => {
    setActiveButton(id);
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setActiveButton(false);
    setOpenMenu(false);
  };

  const handleOpenItem = (item) => {
    navigate(navigateToList(item));
    setOpenMenu(false);
  };

  return (
    <Box sx={style.containerNavbar}>
      {menu &&
        menu.map((page) => (
          <>
            <Button
              key={page.id}
              onClick={(e) => handleOpenMenu(e, page.id)}
              sx={{
                my: 2,
                mx: { md: 0.5, lg: 0.7 },
                display: "block",
                color: "white",
                fontSize: { lg: "1.1rem" },
                backgroundColor: activeButton === page.id ? "#37474f" : null,
                textTransform: "none",
                borderRadius: "20px",
              }}
            >
              {page.text}
            </Button>

            <Menu
              id={page.id}
              anchorEl={anchorEl}
              open={activeButton === page.id ? openMenu : false}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {page.menuItems.map((item) => (
                <MenuItem key={item.id} onClick={() => handleOpenItem(item)}>
                  {item.item}
                </MenuItem>
              ))}
            </Menu>
          </>
        ))}
    </Box>
  );
};
export default Navbar;

const style = {
  containerNavbar: {
    mx: 4,
    display: { xs: "none", md: "flex" },
    flexGrow: 1,
    justifyContent: "left",
  },
};
