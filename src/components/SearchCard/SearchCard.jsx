import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const SearchCard = ({ data }) => {
  const { original_title, poster_path, overview, release_date } = data;

  const image = `${process.env.REACT_APP_BASE_IMAGE_URL}${poster_path}`;

  return (
    <Card
      sx={{
        display: "flex",
        width: { xs: 420, sm: 500, md: 800, lg: 1080 },
        maxHeight: "170px",
        borderRadius: "10px",
        boxShadow: "4",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="img not found"
        sx={{ width: "130px", heigth: "170px" }}
      />
      <CardContent
        sx={{
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Box height="60px">
          <Typography
            fontFamily="Source Sans Pro"
            fontWeight="600"
            textAlign="left"
            fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
          >
            {original_title}
          </Typography>
          <Typography
            fontFamily="Source Sans Pro"
            fontWeight="600"
            textAlign="left"
            color="grey"
            fontSize={{ xs: "0.8rem", lg: "0.9rem" }}
          >
            {release_date}
          </Typography>
        </Box>

        <Typography
          fontFamily="Source Sans Pro"
          fontWeight="400"
          textAlign="left"
          marginTop="20px"
          fontSize={{ xs: "0.9rem", lg: "1rem" }}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
