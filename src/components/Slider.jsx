import React, { useCallback, useState, useEffect } from "react";
import NextIcon from "./NextIcon";
import MainCard from "./MainCard/MainCard";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const Slider = ({ items, handleOpenDetails, category }) => {
  const [itemsToRender, setItemsToRender] = useState(null);
  const [steps, setSteps] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const navigateNext = () => {
    setCurrentIndex((prevState) => {
      const nextState = prevState + steps;
      if (nextState >= items.length) {
        return prevState;
      }
      return nextState;
    });
  };

  const navigatePreviuos = () => {
    setCurrentIndex((prevState) => {
      const previuosState = prevState - steps;
      if (previuosState < 0) {
        return 0;
      }
      return previuosState;
    });
  };

  return (
    <Box sx={styles.sliderContainer}>
      <Box sx={styles.iconContainer}>
        {currentIndex !== 0 ? (
          <NextIcon direction="left" navigatePreviuos={navigatePreviuos} />
        ) : null}
      </Box>
      <Box sx={styles.cardsContainer}>
        {itemsToRender &&
          itemsToRender.map((item) => (
            <MainCard
              item={item}
              handleOpenDetails={handleOpenDetails}
              category={category}
            />
          ))}
      </Box>
      <Box sx={styles.iconContainer}>
        {currentIndex < items.length ? (
          <NextIcon direction="right" navigateNext={navigateNext} />
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
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    width: "60px",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
  },
};
