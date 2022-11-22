import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "../components/Home/HomeContainer";
import MultiSearchContainer from "../components/MultiSearch/MultiSearchContainer";
import MainLayout from "../pages/MainLayout";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/search" element={<MultiSearchContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;