import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import MultiSearchContainer from "../pages/MultiSearchContainer";
import HomeContainer from "../pages/HomeContainer";
import MainLayout from "../pages/MainLayout";

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
        </Route>
      </Routes>
    </>
  );
};

export default Router;
