import React, { useEffect, useState } from "react";

import { MONTHS } from "../../../assets/constants";

import "./EventsData.css";

const EventsData = (props) => {
  const { name, when, where, info, dateString } = props;
  const [backgroundColor, setBackgroundColor] = useState("#66081D");

  const getEventDate = (eventString) => {
    let date = [];
    const monthSet = new Set(MONTHS);
    eventString = eventString.split(" ");
    for (let index = 0; index < eventString.length; index++) {
      console.log(eventString[index]);
      if (monthSet.has(eventString[index])) {
        date.push(eventString[index]);
        date.push(eventString[index + 1]);
        return date;
      }
    }
  };
  const getEventBackground = (date) => {
    console.log(dateString, getEventDate(date));
    setBackgroundColor(
      dateString === getEventDate(date) ? "#789F7E" : "#66081D"
    );
  };

  useEffect(() => {
    getEventBackground(when);
    console.log(MONTHS);
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
