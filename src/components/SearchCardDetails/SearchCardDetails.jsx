import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import imageNotFound from "../../images/imagenotfound.png";

const SearchCardDetails = ({
  dataSearchDetails,
  imageBanner,
  imagePoster,
  runtimeHours,
  genres,
}) => {
  const { overview, release_date, tagline, vote_average } = dataSearchDetails;

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        marginTop: { xs: "56px", sm: "64px", md: "40px" },
      }}
    >
      {imageBanner ? (
        <Box
          component="img"
          src={imageBanner}
          alt="img not found"
          sx={{
            width: "100%",
            height: { xs: "320px", md: "523px" },
            objectFit: "cover",
            filter: "brightness(50%)",
            opacity: 0.8,
            position: "absolute",
            zIndex: "1",
          }}
        />
      ) : (
        <Box
          sx={{
            top: { xs: "112px", sm: "128px", md: "118px" },
            backgroundColor: "rgba(3,37,65,0.4)",
            width: "100%",
            height: { xs: "320px", md: "523px" },
            objectFit: "cover",
            position: "absolute",
            zIndex: "1",
          }}
        />
      )}
      <Box
        sx={{
          position: "relative",
          zIndex: "2",
          width: { xs: "100%", md: "80%" },
          height: { xs: "250px", md: "453px" },
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          backgroundColor: "blue",
        }}
      >
        <Box
          component="img"
          src={imagePoster ? imagePoster : imageNotFound}
          alt="img not found"
          sx={{
            position: "relative",
            zIndex: "2",
            width: { xs: "168px", md: "300px" },
            minWidth: { xs: "168px", md: "300px" },
            maxHeight: { xs: "250px", md: "453px" },
            objectFit: "contain",
            borderRadius: "10px",
            backgroundColor: "#c8c8c8",
            backgroundSize: "50%",
          }}
        />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "pink",
            objectFit: "contain",
          }}
          width="100%"
        >
          <Typography
            fontSize={{ xs: "1.75rem", lg: "2.2rem" }}
            fontWeight="700"
            style={{
              color: "white",
              textAlign: "left",
            }}
          >
            {dataSearchDetails.original_title}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            sx={{ backgroundColor: "yellow" }}
          >
            <Typography
              fontSize={{ xs: "0.8rem", lg: "1.1rem" }}
              fontWeight="400"
              style={{
                color: "white",
                textAlign: "left",
              }}
            >
              {release_date}
            </Typography>
            <Typography
              fontSize={{ xs: "0.8rem", lg: "1.1rem" }}
              fontWeight="400"
              style={{
                color: "white",
                textAlign: "left",
              }}
            >
              {runtimeHours && runtimeHours.hours}h:
              {runtimeHours && runtimeHours.minutes}m
            </Typography>

            <Typography
              fontSize={{ xs: "0.8rem", lg: "1.1rem" }}
              fontWeight="400"
              style={{
                color: "white",
                textAlign: "left",
              }}
            >
              {genres}
            </Typography>
          </Box>

          <Typography>{vote_average}</Typography>
          <Box sx={{ backgroundColor: "green" }}>
            {" "}
            <Typography
              fontSize={{ xs: "0.7rem", lg: "1.2rem" }}
              fontStyle="italic"
              fontWeight="400"
              style={{
                color: "white",
                textAlign: "left",
              }}
            >
              {tagline}
            </Typography>
            {overview ? (
              <Box>
                <Typography
                  fontSize={{ xs: "0.8rem", lg: "1.5rem" }}
                  fontWeight="700"
                  style={{
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  Overview
                </Typography>
                <Typography
                  fontSize={{ xs: "0.75rem", lg: "1.2rem" }}
                  fontWeight="400"
                  style={{
                    color: "white",
                    textAlign: "left",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "4",
                    WebkitBoxOrient: "vertical",
                  }}
                >
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
