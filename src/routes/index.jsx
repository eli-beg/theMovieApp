import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import MultiSearchContainer from "../pages/MultiSearchContainer";
import HomeContainer from "../pages/HomeContainer";
import MainLayout from "../pages/MainLayout";
import DetailsCardContainer from "../pages/DetailsCardContainer";

const Router = () => {
  const dataSearch = useParams();
  console.log(dataSearch);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomeContainer />} />
          <Route
            path="/search/:dataSearch"
            element={<MultiSearchContainer />}
          />
          <Route path="/details/:id" element={<DetailsCardContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
