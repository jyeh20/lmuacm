import React, { useEffect, useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const TableData = (props) => {
  const {
    events,
    setEvents,
    originalID,
    eventID,
    eventName,
    eventDate,
    eventInfo,
    eventWhen,
    eventWhere,
  } = props;
  const [editing, setEditing] = useState(false);
  const [id, setID] = useState(eventID);
  const [name, setName] = useState(eventName);
  const [date, setDate] = useState(eventDate);
  const [info, setInfo] = useState(eventInfo);
  const [when, setWhen] = useState(eventWhen);
  const [where, setWhere] = useState(eventWhere);

  useEffect(() => {
    setID(eventID);
    setName(eventName);
    setDate(eventDate);
    setInfo(eventInfo);
    setWhen(eventWhen);
    setWhere(eventWhere);
  }, [eventID, eventName, eventDate, eventInfo, eventWhen, eventWhere]);

  const adjustListAfterUpdate = () => {
    const adjustedList = events;
    adjustedList.sort((e1, e2) => (e1.id > e2.id ? 1 : -1));
    for (let i in adjustedList) {
      const event = adjustedList[i];
      event.id = i;
    }
    console.log(adjustedList);
  };

  const adjustIDAfterDelete = () => {
    const adjustedList = events;
    for (let i in adjustedList) {
      console.log(i);
      const event = adjustedList[i];
      event.id = i;
    }
  };

  const handleEdit = () => {
    if (editing) {
      handleUpdate();
    }
    setEditing(!editing);
  };

  const handleIDChange = (e) => {
    setID(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleWhenChange = (e) => {
    setWhen(e.target.value);
  };
  const handleWhereChange = (e) => {
    setWhere(e.target.value);
  };
  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleUpdate = () => {
    let updatedEvent = {
      id,
      originalID,
      name,
      date,
      when,
      where,
      info,
    };
    events[originalID] = updatedEvent;
    adjustListAfterUpdate();
    setEvents(events);
  };

  const handleDelete = () => {
    if (window.confirm(`Delete event: ${name}?`)) {
      events.splice(originalID, 1);
      adjustIDAfterDelete();
      setEvents(events);
    }
  };

  return (
    <tr>
      <td className="Event-info">
        {editing ? (
          <input
            onChange={handleIDChange}
            type="number"
            style={{ maxWidth: "40%" }}
            value={id}
          />
        ) : (
          id
        )}
      </td>
      <td className="Event-info">
        {editing ? (
          <input class="AdminEvents" value={name} onChange={handleNameChange} />
        ) : (
          name
        )}
      </td>
      <td className="Event-info">
        {editing ? (
          <input class="AdminEvents" value={date} onChange={handleDateChange} />
        ) : (
          date
        )}
      </td>
      <td className="Event-info">
        {editing ? (
          <input class="AdminEvents" value={when} onChange={handleWhenChange} />
        ) : (
          when
        )}
      </td>
      <td className="Event-info">
        {editing ? (
          <input
            class="AdminEvents"
            value={where}
            onChange={handleWhereChange}
          />
        ) : (
          where
        )}
      </td>
      <td className="Event-info">
        {editing ? (
          <input class="AdminEvents" value={info} onChange={handleInfoChange} />
        ) : (
          info
        )}
      </td>
      <td
        onClick={handleEdit}
        className="Event-info"
        style={{ cursor: "pointer" }}
      >
        {editing ? <CheckIcon /> : <EditIcon />}
      </td>
      <td
        onClick={handleDelete}
        class="Event-info"
        style={{ cursor: "pointer" }}
      >
        <DeleteIcon />
      </td>
    </tr>
  );
};

export default TableData;
