import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { setImageUrl } from "../../utils/setImageUrl";
import imageNotFound from "../../images/imagenotfound.png";
import CircularRating from "../CircularRating";

const MainCard = ({ item, handleOpenDetails, category }) => {
  return (
    <Card sx={styles.cardContainer}>
      <CardMedia
        component="img"
        image={item.poster_path ? setImageUrl(item.poster_path) : imageNotFound}
        alt="img not found"
        sx={styles.cardMedia}
        onClick={() => handleOpenDetails(item.id, category)}
      />
      <Box sx={styles.circularRatingContainer}>
        <CircularRating rating={item.vote_average} />
      </Box>

      <CardContent sx={styles.cardContentContainer}>
        <Typography
          onClick={() => handleOpenDetails(item.id, category)}
          sx={styles.title}
        >
          {item.title}
        </Typography>
        <Typography sx={styles.release_date}> {item.release_date}</Typography>
      </CardContent>
    </Card>
  );
};

export default MainCard;

const styles = {
  cardContainer: {
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "50px",
    height: "300px",
    width: "150px",
    minWidth: "150px",
    boxShadow: "none",
  },
  cardMedia: {
    cursor: "pointer",
    borderRadius: "10px",
    backgroundColor: "#c8c8c8",
    backgroundSize: "50%",
    overflow: "hidden",
  },
  circularRatingContainer: {
    position: "absolute",
    marginTop: "-20px",
    marginLeft: "6px",
    width: "38px",
    height: "38px",
  },
  cardContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    maxHeight: "85px",
    padding: "5px",
    marginTop: "17px",
  },
  title: {
    fontWeight: "600",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    cursor: "pointer",
    lineHeight: "18px",
  },
  release_date: {
    fontWeight: "500",
    textAlign: "left",
    color: "grey",
  },
};
