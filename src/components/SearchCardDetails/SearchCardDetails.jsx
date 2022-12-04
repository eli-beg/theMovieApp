import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const SearchCardDetails = ({ dataSearchDetails, imageBanner }) => {
  return (
    <>
      {imageBanner && (
        <Box
          component="img"
          src={imageBanner}
          alt="img not found"
          sx={{
            width: "100%",
            marginTop: { xs: "56px", sm: "64px", md: "50px" },
            height: { xs: "320px", md: "523px" },
            objectFit: "cover",
            objectPosition: "0px 0px",
            zIndex: "1",
          }}
        />
      )}

      <Box
        sx={{
          position: "absolute",
          top: { xs: "112px", sm: "128px", md: "118px" },
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(3,37,65,0.4)",
          width: "100%",
          height: { xs: "320px", md: "523px" },
          objectFit: "cover",
          zIndex: "2",
        }}
      />
      <Typography
        fontSize={{ xs: "1.75rem", lg: "2.2rem" }}
        fontFamily="Source Sans Pro"
        fontWeight="700"
        style={{
          position: "absolute",
          color: "white",
          top: "23%",
          left: "50%",
          transform: "translate(-50%,-40%)",
          textAlign: "left",
          width: "80%",
          zIndex: "3",
        }}
      >
        {dataSearchDetails.original_title}
      </Typography>
    </>
  );
};

export default SearchCardDetails;
