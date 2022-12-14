import React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = ({ menu }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <Box
      sx={{
        mx: 4,
        display: { xs: "none", md: "flex" },
        flexGrow: 1,
        justifyContent: "left",
      }}
    >
      {menu &&
        menu.map((page) => (
          <>
            <Button
              key={page.id}
              onClick={(e) => handleOpenMenu(e)}
              sx={{
                my: 2,
                mx: { md: 0.5, lg: 0.8 },
                display: "block",
                color: "white",
                fontSize: { lg: "1.2rem" },
                backgroundColor: "none",
                textTransform: "none",
              }}
            >
              {page.text}
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {page.menuItems.map((item) => (
                <MenuItem key={item.id}>{item.item}</MenuItem>
              ))}
            </Menu>
          </>
        ))}
    </Box>
  );
};
export default Navbar;
