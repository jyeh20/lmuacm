import { DataObjectSharp } from "@mui/icons-material";

/**
 * Converts a date object into an map with year, month, and date properties
 * @param {Date} date
 * @returns A map of year, month, and day
 */
const getDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return { year, month, day };
};

/**
 * Compares two dates, (d1, d2) and returns True if d1 comes before d2
 * @param {String} d1
 * @param {String} d2
 */
const compareDates = (d1, d2) => {
  if (d1.year < d2.year) {
    return true;
  }
  if (d1.month < d2.month) {
    return true;
  }
  if (d1.day < d2.day) {
    return true;
  }
  return false;
};

/**
 * Finds the current page given a window location
 * @param {String} windowLocation
 */
const getCurrentPage = (windowLocation) => {
  switch (windowLocation) {
    case "/events":
      return "Events";
    case "/links":
      return "Links";
    default:
      return "Home";
  }
};

/**
 * Splits a given list of events into upcoming and past events
 * @param {Object} eventDoc
 */
const splitEvents = (eventDoc, setUpcomingEvents, setRecentEvents) => {
  console.log(eventDoc);
  let upcomingEvents = [];
  let recentEvents = [];
  const date = new Date();
  Object.entries(eventDoc).forEach((item) => {
    const event = item[1];
    if (compareDates(getDate(new Date(event.date)), getDate(date))) {
      recentEvents.push(event);
    } else {
      upcomingEvents.push(event);
    }
  });

  setUpcomingEvents(upcomingEvents);
  setRecentEvents(recentEvents);
};

export { getDate, compareDates, getCurrentPage, splitEvents };
