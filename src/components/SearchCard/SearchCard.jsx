import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import imageNotFound from "../../images/imagenotfound.png";
import { setImageUrl } from "../../utils/setImageUrl";
import { setItemsArrayToString } from "../../utils/setItemsArrayToString";

const SearchCard = ({ data, handleOpenDetails, category }) => {
  const {
    id,
    original_title,
    overview,
    release_date,
    name,
    known_for_department,
    first_air_date,
    original_name,
    known_for,
  } = data;
  const image = data.profile_path || data.poster_path;
  return (
    <Card sx={style.cardContainer}>
      <CardMedia
        component="img"
        image={image ? setImageUrl(image) : imageNotFound}
        alt="img not found"
        sx={{ width: "130px", heigth: "170px", cursor: "pointer" }}
        onClick={() => handleOpenDetails(id, category)}
      />
      <CardContent sx={style.cardContent}>
        <Box height="60px">
          <Typography
            sx={style.title}
            paragraph
            component="span"
            onClick={() => handleOpenDetails(id, category)}
          >
            {original_title || name || original_name}
          </Typography>
          <Typography sx={style.releaseDate}>
            {release_date || known_for_department || first_air_date}
          </Typography>
        </Box>

        <Typography sx={style.overview}>{overview}</Typography>
        <Typography sx={style.overview}>
          {known_for ? setItemsArrayToString(known_for) : null}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchCard;

const style = {
  cardContainer: {
    display: "flex",
    width: { xs: 330, sm: 500, md: 800, lg: 1080 },
    maxHeight: "170px",
    borderRadius: "10px",
    boxShadow: "4",
  },
  cardContent: {
    width: "100%",
    flexDirection: "column",
  },
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    cursor: "pointer",
    fontWeight: "600",
    textAlign: "left",
    fontSize: { xs: "1.2rem", lg: "1.5rem" },
  },
  releaseDate: {
    fontWeight: "600",
    textAlign: "left",
    color: "grey",
    fontSize: { xs: "0.8rem", lg: "0.9rem" },
  },
  overview: {
    fontWeight: "400",
    textAlign: "left",
    marginTop: "20px",
    fontSize: { xs: "0.9rem", lg: "1rem" },
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  },
};
