import React, { useEffect, useState } from "react";

import "../../pages/Admin/Admin.css";

import TableData from "./TableData";

const AdminEvents = (props) => {
  const { events, setEvents } = props;

  return (
    <table class="AdminEvents-table">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Date</th>
        <th>When</th>
        <th>Where</th>
        <th>Info</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {events.map((event) => (
        <TableData
          events={[...events]}
          setEvents={setEvents}
          originalID={event.originalID}
          eventID={event.id}
          eventName={event.name}
          eventDate={event.date}
          eventWhen={event.when}
          eventWhere={event.where}
          eventInfo={event.info}
        />
      ))}
    </table>
  );
};

export default AdminEvents;
