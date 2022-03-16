import React, { useState } from "react";

import "./EventsTable.css";
import { getDate } from "../../../utils/utils";
import EventsData from "../EventsData/EventsData";

const EventsTable = (props) => {
  const { eventDoc } = props;

  const date = getDate(new Date());

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
          name={items.name}
          when={items.when}
          where={items.where}
          info={items.info}
          date={items.date}
          todaysDate={date}
        />
      ))}
    </table>
  );
};

export default EventsTable;
