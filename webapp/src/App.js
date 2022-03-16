import React, { useState, useEffect } from "react";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "./firebase/firebase";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Links from "./pages/Links/Links";
import Footer from "./components/Footer/Footer";

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [textColor, setTextColor] = useState("#DBDBDB");
  const [bgColor, setBgColor] = useState("141414");
  const [linkDoc, setLinkDoc] = useState([]);
  const [eventDoc, setEventDoc] = useState([]);
  const [displayNav, setDisplayNav] = useState(false);
  const db = getFirestore(app);

  const handleOpenNav = () => {
    setDisplayNav(true);
  };

  const handleCloseNav = () => {
    setDisplayNav(false);
  };

  const handleChangeTheme = () => {
    setLightMode(!lightMode);
  };

  async function getData(queryDocument, stateFunction) {
    const docRef = doc(db, "acm-data", queryDocument);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      stateFunction(docSnap.data());
    } else {
      console.log("No Data exists");
    }
  }

  useEffect(() => {
    setTextColor(lightMode ? "#141414" : "#DBDBDB");
    setBgColor(lightMode ? "#DBDBDB" : "#141414");
  }, [lightMode, handleChangeTheme]);

  useEffect(() => {
    getData("links", setLinkDoc);
    getData("events", setEventDoc);
  }, []);

  return (
    <Router forceRefresh={false}>
      <div className="App">
        {displayNav ? (
          <Navbar
            color={textColor}
            bgColor={bgColor}
            closeNav={handleCloseNav}
            isOpen={displayNav}
          />
        ) : null}
        <Header
          changeTheme={handleChangeTheme}
          openNav={handleOpenNav}
          currentPage={currentPage}
          color={textColor}
          backgroundColor={bgColor}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home color={textColor} bgColor={bgColor} eventDoc={eventDoc} />
            }
          />
          <Route
            path="/events"
            element={<Events bgColor={bgColor} eventDoc={eventDoc} />}
          />
          <Route
            path="/links"
            element={
              <Links
                color={textColor}
                backgroundColor={bgColor}
                linkDoc={linkDoc}
              />
            }
          />
        </Routes>
        <Footer color={textColor} setPage={setCurrentPage} />
      </div>
    </Router>
  );
}

export default App;
