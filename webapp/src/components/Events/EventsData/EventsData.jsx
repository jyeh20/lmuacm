import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { compareDates } from "../../../utils/utils";

import "./EventsData.css";

const EventsData = (props) => {
  const { name, when, where, info, date, todaysDate } = props;
  let navigate = useNavigate();
  const green = "#066B38";
  const darkGreen = "#025B28";
  const clickGreen = "#004B18";
  const red = "#66081D";
  const darkRed = "#560827";
  const clickRed = "#460817";

  const [backgroundColor, setBackgroundColor] = useState("#585858");

  const getEventDate = (date) => {
    return new Date(date);
  };

  const getEventBackground = (date) => {
    setBackgroundColor(
      compareDates(getEventDate(date), todaysDate) ? red : green
    );
  };

  const handleBgDarken = () => {
    setBackgroundColor(backgroundColor === red ? darkRed : darkGreen);
  };

  const handleBgLighten = () => {
    setBackgroundColor(backgroundColor === darkRed ? red : green);
  };

  const handleDownClick = () => {
    setBackgroundColor(backgroundColor === darkRed ? clickRed : clickGreen);
  };

  const handleUpClick = () => {
    setBackgroundColor(backgroundColor === clickRed ? darkRed : darkGreen);
  };

  useEffect(() => {
    getEventBackground(date);
  }, []);

  return (
    <tr>
      <td
        href={info}
        className="Event-event"
        style={{ backgroundColor }}
        onMouseEnter={handleBgDarken}
        onMouseLeave={handleBgLighten}
        onMouseDown={handleDownClick}
        onMouseUp={() => {
          handleUpClick(info);
        }}
      >
        <a href={info} target="_blank" className="Event-link">
          <div className="Event-link-div">{name}</div>
        </a>
      </td>
      <td className="Event-info">{when}</td>
      <td className="Event-info">{where}</td>
    </tr>
  );
};

export default EventsData;
