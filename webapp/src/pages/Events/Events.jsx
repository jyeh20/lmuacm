import React from "react";
import EventsTable from "../../components/Home/EventsTable/EventsTable";

import "./Events.css";

const Events = (props) => {
  const { bgColor, eventDoc } = props;
  return (
    <div
      className="Events"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="Events-table">
        <EventsTable eventDoc={eventDoc} />
      </div>
    </div>
  );
};

export default Events;
