import React, { useState } from "react";

import "./EventsTable.css";
import EventsData from "../EventsData/EventsData";

const EventsTable = (props) => {
  const { eventDoc } = props;
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = MONTHS[date.getMonth()];
  const day = [date.getDate()];
  const dateString = [month, day];
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
          dateString={dateString}
        />
      ))}
    </table>
  );
};

export default EventsTable;
