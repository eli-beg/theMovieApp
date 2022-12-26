import React, { useCallback, useState, useEffect } from "react";
import NextIcon from "./NextIcon";
import MainCard from "./MainCard/MainCard";
import { Box, Slide, useMediaQuery, useTheme } from "@mui/material";

const Slider = ({ items, handleOpenDetails, category }) => {
  const [itemsToRender, setItemsToRender] = useState([]);
  const [steps, setSteps] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState(null);
  const theme = useTheme();
  const matchesUp = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesBetween = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const matchesDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (matchesUp) {
      setSteps(7);
    }
    if (matchesDown) {
      setSteps(2);
    }
    if (matchesBetween) {
      setSteps(5);
    }
  }, [matchesUp, matchesBetween, matchesDown]);

  const getItemsArray = useCallback(() => {
    const itemsGroup = items.slice(currentIndex, currentIndex + steps);
    setItemsToRender(itemsGroup);
  }, [currentIndex, items, steps]);

  useEffect(() => {
    getItemsArray();
  }, [getItemsArray]);

  const navigateNext = (direction) => {
    const oppDirection = direction === "right" ? "left" : "right";
    setDirection(direction);
    setSlideIn(false);

    setCurrentIndex((prevState) => {
      const nextState = prevState + steps;
      if (nextState >= items.length) {
        return prevState;
      }

      return nextState;
    });
    setTimeout(() => {
      setDirection(oppDirection);
      setSlideIn(true);
    }, 1000);
  };

  const navigatePreviuos = (direction) => {
    const oppDirection = direction === "left" ? "right" : "left";
    setDirection(direction);
    setSlideIn(false);
    setCurrentIndex((prevState) => {
      const previuosState = prevState - steps;
      if (previuosState < 0) {
        return 0;
      }
      return previuosState;
    });

    setTimeout(() => {
      setDirection(oppDirection);
      setSlideIn(true);
    }, 1000);
  };

  return (
    <Box sx={styles.sliderContainer}>
      <Box sx={styles.iconContainer}>
        {currentIndex !== 0 ? (
          <NextIcon
            direction="left"
            navigatePreviuos={() => navigatePreviuos("left")}
          />
        ) : null}
      </Box>
      <Slide in={slideIn} direction={direction}>
        <Box sx={styles.cardsContainer}>
          {itemsToRender?.map((item) => (
            <MainCard
              item={item}
              handleOpenDetails={handleOpenDetails}
              category={category}
            />
          ))}
        </Box>
      </Slide>

      <Box sx={styles.iconContainer}>
        {currentIndex < items.length ? (
          <NextIcon
            direction="right"
            navigateNext={() => {
              navigateNext("right");
            }}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Slider;

const styles = {
  sliderContainer: {
    height: "300px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    marginLeft: { xs: "-10px" },
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    width: { xs: "20px", md: "60px" },
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
  },
};
