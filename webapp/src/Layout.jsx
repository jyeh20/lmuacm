import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "./firebase/firebase";

import { getCurrentPage, splitEvents } from "./utils/utils";

import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Links from "./pages/Links/Links";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  const [linkDoc, setLinkDoc] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    getCurrentPage(window.location.pathname)
  );
  const [textColor, setTextColor] = useState("#DBDBDB");
  const [bgColor, setBgColor] = useState("#141414");
  const db = getFirestore(app);

  const handleChangeTheme = () => {
    updateColor(setTextColor, textColor);
    updateColor(setBgColor, bgColor);
  };

  const updateColor = (setter, color) => {
    setter(color === "#DBDBDB" ? "#141414" : "#DBDBDB");
  };

  async function getData(queryDocument, stateFunction, toSplit = false) {
    const docRef = doc(db, "acm-data", queryDocument);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      if (toSplit) {
        stateFunction(docSnap.data(), setUpcomingEvents, setRecentEvents);
      } else {
        stateFunction(docSnap.data());
      }
    } else {
      console.log("No Data exists");
    }
  }

  useEffect(() => {
    getData("links", setLinkDoc);
    getData("events", splitEvents, true);
  }, []);

  return (
    <>
      <Header
        changeTheme={handleChangeTheme}
        currentPage={currentPage}
        color={textColor}
        backgroundColor={bgColor}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              color={textColor}
              backgroundColor={bgColor}
              eventDoc={upcomingEvents}
            />
          }
        />
        <Route
          path="/events"
          element={
            <Events
              backgroundColor={bgColor}
              color={textColor}
              upcomingEvents={upcomingEvents}
              recentEvents={recentEvents}
            />
          }
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
    </>
  );
};

export default Layout;
