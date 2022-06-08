import React, { useEffect, useState, useContext } from "react";

import { ThemeContext } from "../../context/themeContext";
import colors from "../../utils/colors";
import { formatEvents } from "../../utils/utils";

import { updateEvents } from "../../DAL/DAL";

import AdminButton from "../../components/utils/AdminButton";
import AddIcon from "@mui/icons-material/Add";
import AdminEvents from "../../components/Admin/AdminEvents";

const AdminMain = (props) => {
  const { eventDoc } = props;
  const theme = useContext(ThemeContext);
  const color = theme.color;
  const backgroundColor = theme.backgroundColor;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let eventArr = [];
    for (let e in eventDoc) {
      let event = eventDoc[e];
      event.originalID = e;
      event.id = e;
      eventArr.push(event);
    }
    setEvents(eventArr);
  }, [eventDoc]);

  const handleUpdateEvents = () => {
    const eventsObject = formatEvents(events);
    updateEvents(eventsObject);
  };

  return (
    <div
      className="Events"
      style={{
        backgroundColor,
      }}
    >
      <div className="AdminEvents-grid" style={{ color }}>
        <div className="AdminEvents-grid-top">
          <div className="AdminEvents-grid-row">
            <div className="AdminEvents-add">
              <AdminButton>
                <AddIcon sx={{ color: colors.light }} />
              </AdminButton>
            </div>
            <div className="AdminEvents-save">
              <AdminButton handler={handleUpdateEvents}>Save</AdminButton>
            </div>
          </div>
        </div>

        <AdminEvents events={events} setEvents={setEvents} />

        <div className="AdminEvents-grid-bottom">
          <div className="AdminEvents-grid-row">
            <div className="AdminEvents-add">
              <AdminButton>
                <AddIcon sx={{ color: colors.light }} />
              </AdminButton>
            </div>
            <div className="AdminEvents-save">
              <AdminButton handler={handleUpdateEvents}>Save</AdminButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
