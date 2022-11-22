import React from "react";
import { Box, Button } from "@mui/material";

const Navbar = ({ menu }) => (
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
        <Button
          key={page.id}
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
      ))}
  </Box>
);

export default Navbar;
