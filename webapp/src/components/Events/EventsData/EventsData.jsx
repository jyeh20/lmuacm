import React, { useEffect, useState } from "react";

import colors from "../../../utils/colors";
import { compareDates } from "../../../utils/utils";

import "./EventsData.css";

const EventsData = (props) => {
  const { name, when, where, info, date, todaysDate } = props;

  const [backgroundColor, setBackgroundColor] = useState(colors.gray);

  const getEventDate = (date) => {
    return new Date(date);
  };

  const getEventBackground = (date) => {
    setBackgroundColor(
      compareDates(getEventDate(date), todaysDate) ? colors.red : colors.green
    );
  };

  const handleBgDarken = () => {
    setBackgroundColor(
      backgroundColor === colors.red ? colors.darkRed : colors.darkGreen
    );
  };

  const handleBgLighten = () => {
    setBackgroundColor(
      backgroundColor === colors.darkRed ? colors.red : colors.green
    );
  };

  const handleDownClick = () => {
    setBackgroundColor(
      backgroundColor === colors.darkRed ? colors.clickRed : colors.clickGreen
    );
  };

  const handleUpClick = () => {
    setBackgroundColor(
      backgroundColor === colors.clickRed ? colors.darkRed : colors.darkGreen
    );
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
