import React, { useContext } from "react";

import { ThemeContext } from "../../context/themeContext";
import EventsTable from "../../components/Events/EventsTable/EventsTable";

import "./Events.css";

const Events = (props) => {
  const { upcomingEvents, recentEvents } = props;
  const theme = useContext(ThemeContext);
  const color = theme.color;
  const backgroundColor = theme.backgroundColor;
  return (
    <div
      className="Events"
      style={{
        backgroundColor,
      }}
    >
      <div className="Events-table-container">
        <div
          className="Events-table-header"
          style={{ color, textDecorationColor: color }}
        >
          Upcoming
        </div>
        <div className="Events-table">
          <EventsTable eventDoc={upcomingEvents} />
        </div>
        <div
          className="Events-table-header"
          style={{ color, textDecorationColor: color }}
        >
          Recent
        </div>
        <div className="Events-table">
          <EventsTable eventDoc={recentEvents} />
        </div>
      </div>
    </div>
  );
};

export default Events;
