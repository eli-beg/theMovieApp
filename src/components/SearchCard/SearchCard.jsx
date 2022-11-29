import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const SearchCard = ({ data }) => {
  const image = `${process.env.REACT_APP_BASE_IMAGE_URL}${data.poster_path}`;
  return (
    <Card
      sx={{
        display: "flex",
        width: 1080,
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
      <CardContent sx={{ width: "100%", flexDirection: "column" }}>
        <Typography>{data.original_title}</Typography>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
