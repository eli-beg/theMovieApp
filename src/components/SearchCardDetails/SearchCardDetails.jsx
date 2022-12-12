import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import imageNotFound from "../../images/imagenotfound.png";
import CircularRating from "../CircularRating";

const SearchCardDetails = ({
  dataSearchDetails,
  imageBanner,
  imagePoster,
  runtimeHours,
  genres,
  dataTrailer,
  handleNavigateToTrailer,
}) => {
  const {
    overview,
    release_date,
    tagline,
    vote_average,
    name,
    first_air_date,
  } = dataSearchDetails;
  console.log("props", dataTrailer);
  return (
    <Card sx={styles.cardStyle}>
      {imageBanner ? (
        <Box
          component="img"
          src={imageBanner}
          alt="img not found"
          sx={styles.imageBannerContainer}
        />
      ) : (
        <Box sx={styles.imageBannerNotFoundContainer} />
      )}
      <Box sx={styles.contentContainer}>
        <Box
          component="img"
          src={imagePoster ? imagePoster : imageNotFound}
          alt="img not found"
          sx={styles.imagePosterContainer}
        />

        <CardContent sx={styles.cardContent} width="100%">
          <Typography sx={styles.title}>
            {dataSearchDetails.original_title || name}
          </Typography>
          <Box sx={styles.detailsSubtitleContainer}>
            {release_date && (
              <Typography sx={styles.releaseDate}>{release_date}</Typography>
            )}
            {first_air_date && (
              <Typography sx={styles.releaseDate}>{first_air_date}</Typography>
            )}
            {runtimeHours && (
              <Typography sx={styles.runtime}>
                {runtimeHours && runtimeHours.hours}h:
                {runtimeHours && runtimeHours.minutes}m
              </Typography>
            )}

            <Typography sx={styles.genres}>{genres}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {vote_average && (
              <Box sx={styles.circularProgressContainer}>
                <Box sx={styles.circularProgressContainerItem}>
                  {" "}
                  <CircularRating rating={vote_average} />
                </Box>

                <Box>
                  <Typography sx={styles.userScoreTitle}>User Score</Typography>
                </Box>
              </Box>
            )}
            {dataTrailer && dataTrailer.length ? (
              <Button
                sx={styles.buttonTrailer}
                onClick={() => handleNavigateToTrailer(dataTrailer)}
              >
                Trailer
              </Button>
            ) : null}
          </Box>
          <Box sx={styles.descriptionContainer}>
            {" "}
            <Typography sx={styles.tagline}>{tagline}</Typography>
            {overview ? (
              <Box>
                <Typography sx={styles.overviewTitle}>Overview</Typography>
                <Typography sx={styles.detailsOverview}>
                  {dataSearchDetails.overview}
                </Typography>
              </Box>
            ) : null}
          </Box>
        </CardContent>
        {}
      </Box>
    </Card>
  );
};

export default SearchCardDetails;

const styles = {
  cardStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none",
    marginTop: { xs: "56px", sm: "64px", md: "40px" },
  },
  imageBannerContainer: {
    width: "100%",
    height: { xs: "320px", md: "523px" },
    objectFit: "cover",
    filter: "brightness(50%)",
    opacity: 0.8,
    position: "absolute",
    zIndex: "1",
  },
  imageBannerNotFoundContainer: {
    top: { xs: "112px", sm: "128px", md: "118px" },
    backgroundColor: "rgba(3,37,65,0.4)",
    width: "100%",
    height: { xs: "320px", md: "523px" },
    objectFit: "cover",
    position: "absolute",
    zIndex: "1",
  },
  contentContainer: {
    position: "relative",
    zIndex: "2",
    width: { xs: "90%", md: "80%" },
    height: { xs: "250px", md: "453px" },
    display: "flex",
    flexDirection: "row",
    padding: "20px",
  },
  imagePosterContainer: {
    width: { xs: "168px", md: "300px" },
    maxHeight: { xs: "250px", md: "453px" },
    objectFit: "contain",
    borderRadius: "10px",
    backgroundColor: "#c8c8c8",
    backgroundSize: "50%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: { xs: "1.6rem", md: "2.2rem" },
    fontWeight: "700",
    color: "white",
    textAlign: "left",
    flexGrow: "1",
    // backgroundColor: "green",
  },
  detailsSubtitleContainer: {
    width: { xs: "80%", md: "80%" },
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexGrow: "1",
    // backgroundColor: "pink",
    flexWrap: "wrap",
  },
  releaseDate: {
    fontSize: { xs: "0.7rem", md: "1.1rem" },
    fontWeight: "600",
    color: "white",
    textAlign: "left",
    flexGrow: "1",
  },
  runtime: {
    fontSize: { xs: "0.7rem", md: "1.1rem" },
    fontWeight: "600",
    color: "white",
    textAlign: "left",
    flexGrow: "1",
  },
  genres: {
    fontSize: { xs: "0.7rem", md: "1.1rem" },
    fontWeight: "600",
    fontStyle: "italic",
    color: "white",
    textAlign: "left",
    flexGrow: "3",
  },
  descriptionContainer: {
    marginTop: { md: "20px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flexGrow: "2",
    // backgroundColor: "blue",
  },
  tagline: {
    fontSize: { xs: "0.7rem", md: "1.2rem" },
    fontStyle: "italic",
    fontWeight: "400",
    color: "white",
    textAlign: "left",
  },
  overviewTitle: {
    fontSize: { xs: "0.8rem", md: "1.5rem" },
    fontWeight: "700",
    marginBottom: { xs: "2px", lg: "10px" },
    color: "white",
    textAlign: "left",
  },
  detailsOverview: {
    fontSize: { xs: "0.75rem", md: "1.2rem" },
    fontWeight: "400",
    color: "white",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "4",
    WebkitBoxOrient: "vertical",
  },
  circularProgressContainer: {
    width: { xs: "80px", md: "125px" },
    display: "flex",
    alignItems: "center",
  },
  circularProgressContainerItem: {
    width: { xs: "40px", md: "60px" },
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userScoreTitle: {
    fontSize: { xs: "0.6rem", md: "0.9rem" },
    fontWeight: "700",
    color: "white",
  },
  buttonTrailer: {
    width: { xs: "70px", md: "90px" },
    height: { xs: "30px", md: "40px" },
    color: "white",
    fontSize: { xs: "0.7rem", md: "0.9rem" },
    borderStyle: "solid",
    borderWidth: "1px",
    ":hover": {
      backgroundColor: "#bdbdbd",
    },
  },
};
