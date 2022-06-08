import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./firebase/firebase";

import { themes, ThemeContext } from "./context/themeContext.js";
import { getCurrentPage, splitEvents } from "./utils/utils";
import { getData } from "./DAL/DAL";

import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import AdminMain from "./pages/Admin/AdminMain";
import Events from "./pages/Events/Events";
import Links from "./pages/Links/Links";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AdminRoute from "./components/Routes/AdminRoute";

const Layout = () => {
  const [linkDoc, setLinkDoc] = useState([]);
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    getCurrentPage(window.location.pathname)
  );
  const [theme, setTheme] = useState(themes.dark);
  const db = getFirestore(app);

  const handleChangeTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  useEffect(() => {
    getData("links", setLinkDoc);
    getData(
      "events",
      splitEvents,
      { setEvents, setUpcomingEvents, setRecentEvents },
      true
    );
  }, [db]);

  return (
    <ThemeContext.Provider value={theme}>
      <Header changeTheme={handleChangeTheme} currentPage={currentPage} />
      <Routes>
        <Route exact path="/" element={<Home eventDoc={upcomingEvents} />} />
        <Route
          path="/events"
          element={
            <Events
              upcomingEvents={upcomingEvents}
              recentEvents={recentEvents}
            />
          }
        />
        <Route path="/links" element={<Links linkDoc={linkDoc} />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route
          exact
          path="/admin/view"
          element={
            <AdminRoute>
              <AdminMain eventDoc={events} />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer setPage={setCurrentPage} />
    </ThemeContext.Provider>
  );
};

export default Layout;
