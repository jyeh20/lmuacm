import React, { useContext } from "react";

import { ThemeContext } from "../../context/themeContext";
import "./Home.css";

import logo from "../../assets/logo.png";

import EventsTable from "../../components/Events/EventsTable/EventsTable";
import Contact from "../../components/Home/Contact/Contact";

const Home = (props) => {
  const { eventDoc } = props;
  const theme = useContext(ThemeContext);
  const color = theme.color;
  const backgroundColor = theme.backgroundColor;

  return (
    <>
      <img className="Home-bg-img" src={logo} alt="LMU ACM logo"></img>
      <div
        className="Home-bg"
        style={{
          backgroundColor,
          color,
        }}
      >
        <div className="Home-content">
          <div className="Home-content-title" style={{ color }}>
            Our Purpose
          </div>
          <div className="Home-purpose">
            <div className="Home-purpose-header">
              The Chapter is organized and will be operated exclusively for
              educational and scientific purposes to promote the following:
            </div>
            <ol type="I" className="Home-purpose-paragraph">
              <li>
                An increased knowledge of and greater interest in the science,
                design, development, construction, languages, management and
                applications of modern computing.
              </li>
              <li>Greater interest in computing and its applications.</li>
              <li>
                A means of communication between persons having an interest in
                computing and those with an interest in applying computing in
                other fields.
              </li>
            </ol>
          </div>

          <div className="Home-content-title" style={{ color }}>
            Upcoming Events
          </div>
          <EventsTable eventDoc={eventDoc} />
          <div className="Home-content-title" style={{ color }}>
            Contact Us
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
