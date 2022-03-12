import React from "react";

import "./EventsTable.css";
import EventsData from "../EventsData/EventsData";

const EventsTable = (props) => {
  const { eventDoc } = props;
  return (
    <table>
      <tr>
        <th width="30%">Event</th>
        <th>When</th>
        <th>Where</th>
        <th>More Info</th>
      </tr>
      {Object.entries(eventDoc).map(([name, items]) => (
        <EventsData
          name={name}
          when={items.when}
          where={items.where}
          info={items.info}
        />
      ))}
    </table>
  );
};

export default EventsTable;
