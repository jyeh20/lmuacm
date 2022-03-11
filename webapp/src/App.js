import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
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
      <Home color={textColor} bgColor={bgColor} />
      <Footer color={textColor} setPage={setCurrentPage} />
    </div>
  );
}

export default App;
