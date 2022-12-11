import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import imageNotFound from "../../images/imagenotfound.png";
import { setImageUrl } from "../../utils/setImageUrl";

const SearchCard = ({ data, handleOpenDetails, category }) => {
  const {
    id,
    original_title,
    poster_path,
    overview,
    release_date,
    name,
    known_for_department,
    first_air_date,
  } = data;

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
        image={poster_path ? setImageUrl(poster_path) : imageNotFound}
        alt="img not found"
        sx={{ width: "130px", heigth: "170px", cursor: "pointer" }}
        onClick={() => handleOpenDetails(id, category)}
      />
      <CardContent
        sx={{
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Box height="60px">
          <Typography
            fontWeight="600"
            textAlign="left"
            fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              cursor: "pointer",
            }}
            paragraph
            component="span"
            onClick={() => handleOpenDetails(id, category)}
          >
            {original_title || name}
          </Typography>
          <Typography
            fontWeight="600"
            textAlign="left"
            color="grey"
            fontSize={{ xs: "0.8rem", lg: "0.9rem" }}
          >
            {release_date || known_for_department || first_air_date}
          </Typography>
        </Box>

        <Typography
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
