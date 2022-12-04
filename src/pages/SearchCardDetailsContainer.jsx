import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchCardDetails from "../components/SearchCardDetails/SearchCardDetails";
import {
  getMovieDetailsSearch,
  getPersonDetailsSearch,
  getTvDetailsSearch,
} from "../api/searchItems";

const SearchCardDetailsContainer = () => {
  const [dataSearchDetails, setDataSearchDetails] = useState(null);
  const [imageBanner, setImageBanner] = useState(null);
  const search = useParams();

  const getSearchDetails = useCallback(async () => {
    try {
      if (search.category === "movies") {
        const dataMovieDetails = await getMovieDetailsSearch(search.id);
        if (dataMovieDetails.status === 200) {
          setDataSearchDetails(dataMovieDetails.data);
        }
      }

      if (search.category === "tv") {
        const dataTvDetails = await getTvDetailsSearch(search.id);
        if (dataTvDetails.status === 200) {
          setDataSearchDetails(dataTvDetails.data);
        }
      }

      if (search.category === "person") {
        const dataPersonDetails = await getPersonDetailsSearch(search.id);
        if (dataPersonDetails.status === 200) {
          setDataSearchDetails(dataPersonDetails.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [search]);

  useEffect(() => {
    getSearchDetails();
  }, [getSearchDetails]);

  useEffect(() => {
    if (dataSearchDetails && dataSearchDetails.backdrop_path) {
      setImageBanner(
        `${process.env.REACT_APP_BASE_IMAGE_URL}${dataSearchDetails.backdrop_path}`
      );
    }
  }, [dataSearchDetails]);

  return (
    <>
      {dataSearchDetails && (
        <SearchCardDetails
          dataSearchDetails={dataSearchDetails}
          imageBanner={imageBanner}
        />
      )}
    </>
  );
};

export default SearchCardDetailsContainer;
