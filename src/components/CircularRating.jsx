import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const CircularRating = ({ rating }) => {
  return (
    <Box sx={styles.circularProgressContainer}>
      <CircularProgress
        variant="determinate"
        value={rating * 10}
        size="80%"
        sx={styles.circularProgress}
      />
      <Box sx={styles.circleTitleContainer}>
        <Typography sx={styles.circleTitle}>{`${Math.round(
          rating * 10
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularRating;

const styles = {
  circularProgressContainer: {
    position: "relative",
    display: "flex",
    backgroundColor: "black",
    height: { xs: "40px", md: "100%" },
    width: { xs: "40px", md: "100%" },
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ":hover": {
      transform: "scale3d(1.2, 1.2, 2)",
      transitionDuration: "500ms",
    },
    boxSizing: "border-box",
  },
  circularProgress: {
    zIndex: "1",
    position: "absolute",
  },
  circleTitleContainer: {
    zIndex: "2",
    height: "80%",
    width: "80%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  circleTitle: {
    fontSize: "80%",
    fontWeight: "700",
    color: "white",
  },
};
