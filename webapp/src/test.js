import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";

import { Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";

function Test() {
  const [lightMode, setLightMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [textColor, setTextColor] = useState("#DBDBDB");
  const [bgColor, setBgColor] = useState("141414");

  const handleChangeTheme = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    setTextColor(lightMode ? "#141414" : "#DBDBDB");
    setBgColor(lightMode ? "#DBDBDB" : "#141414");
  }, [lightMode, handleChangeTheme]);

  return (
    <div className="App">
      <Header
        changeTheme={handleChangeTheme}
        currentPage={currentPage}
        color={textColor}
        bgColor={bgColor}
      />
      {/* <Route
        exact
        path="/"
        // render={() => <Home color={textColor} bgColor={bgColor} />}
        render={() => <div>Hi</div>}
      /> */}
      <Home color={textColor} bgColor={bgColor} />
      {/* <Route path="/events">
          <div>Events</div>
        </Route>
        <Route exact path="/links">
          <div>Links</div>
        </Route> */}
      <Footer color={textColor} setPage={setCurrentPage} />
    </div>
  );
}

export default Test;
