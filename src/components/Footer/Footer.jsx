import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import logoPrimaryFull from "../../images/logoPrimaryFull.svg";
const Footer = ({ menu }) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Grid item container justifyContent="center" md={3}>
        <Grid item>
          <Box
            component="img"
            src={logoPrimaryFull}
            alt="tmdb-logo"
            sx={{
              maxWidth: { md: "10rem", xs: "8rem" },
              marginTop: "20px",
              display: {
                width: "100%",
                cursor: "pointer",
              },
            }}
            //   onClick={handleNavigateToHome}
          />
        </Grid>
      </Grid>
      <Grid item container flexDirection="row" md={5} margin="30px">
        {menu &&
          menu.map((page) => (
            <Grid item container xs={4} alignContent="flex-start">
              <Grid item maxHeight="40px" xs={12} marginLeft="5px">
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  {page.text}
                </Typography>
              </Grid>

              {page.menuItems.map((item) => (
                <Grid
                  item
                  xs={12}
                  marginTop="3px"
                  display="flex"
                  alignContent="flex-start"
                  maxHeight="40px"
                >
                  <Button key={item.id} width="100%">
                    {item.item}
                  </Button>
                </Grid>
              ))}
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
