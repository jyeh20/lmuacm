import { borderBottom } from "@mui/system";
import React from "react";

import "./EventsTable.css";
import EventsData from "../EventsData/EventsData";

const EventsTable = (props) => {
  const { data, bgColor } = props;
  return (
    <table className="Events">
      <tr>
        <th width="30%">Event</th>
        <th>When</th>
        <th>Where</th>
        <th>More Info</th>
      </tr>
      <EventsData />
      <EventsData />
    </table>
  );
};

export default EventsTable;
