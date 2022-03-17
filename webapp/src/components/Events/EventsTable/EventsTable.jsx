import React, { useState } from "react";

import "./EventsTable.css";
import { getDate } from "../../../utils/utils";
import EventsData from "../EventsData/EventsData";

const EventsTable = (props) => {
  const { eventDoc } = props;

  const date = getDate(new Date());

  const getEvents = (events, date) => {
    if (events) {
      return events.map((eventDetails) => (
        <EventsData
          name={eventDetails.name}
          when={eventDetails.when}
          where={eventDetails.where}
          info={eventDetails.info}
          date={eventDetails.date}
          todaysDate={date}
        />
      ));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th width="30%">Event</th>
          <th>When</th>
          <th>Where</th>
          <th>More Info</th>
        </tr>
      </thead>
      <tbody>{getEvents(eventDoc, date)}</tbody>
    </table>
  );
};

export default EventsTable;
