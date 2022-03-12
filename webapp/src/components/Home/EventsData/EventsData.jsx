import React from "react";

import "./EventsData.css";

const EventsData = (props) => {
  const { name, when, where, info } = props;
  return (
    <tr>
      <td
        className="Event-event"
        // style={{ borderBottom: `1px solid ${color}` }}
      >
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
