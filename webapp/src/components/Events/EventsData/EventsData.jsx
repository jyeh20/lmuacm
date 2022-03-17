import React, { useEffect, useState } from "react";

import { compareDates } from "../../../utils/utils";

import "./EventsData.css";

const EventsData = (props) => {
  const { name, when, where, info, date, todaysDate } = props;
  const [backgroundColor, setBackgroundColor] = useState("#585858");

  const getEventDate = (date) => {
    return new Date(date);
  };

  const getEventBackground = (date) => {
    setBackgroundColor(
      compareDates(getEventDate(date), todaysDate) ? "#66081D" : "#066B38"
    );
  };

  useEffect(() => {
    getEventBackground(date);
  }, []);

  return (
    <tr>
      <td className="Event-event" style={{ backgroundColor }}>
        {name}
      </td>
      <td className="Event-info">{when}</td>
      <td className="Event-info">{where}</td>
      <td className="Event-info">
        <a href={info} target="_blank" style={{ color: "#DBDBDB" }}>
          {info}
        </a>
      </td>
    </tr>
  );
};

export default EventsData;
