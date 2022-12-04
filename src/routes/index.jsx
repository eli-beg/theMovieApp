import React from "react";
import { Routes, Route } from "react-router-dom";
import MultiSearchContainer from "../pages/MultiSearchContainer";
import HomeContainer from "../pages/HomeContainer";
import MainLayout from "../pages/MainLayout";
import SearchCardDetailsContainer from "../pages/SearchCardDetailsContainer";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomeContainer />} />
          <Route
            path="/search/:category/:dataSearch"
            element={<MultiSearchContainer />}
          />
          <Route
            path="/details/:category/:id"
            element={<SearchCardDetailsContainer />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
