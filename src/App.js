import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cocktail from "./pages/cocktailPage/Cocktail";
import Home from "./pages/homePage/Home.jsx";

function App() {
  return (
    <>
     
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cocktail"} element={<Cocktail />} />
      </Routes>
    </>
  );
}

export default App;
