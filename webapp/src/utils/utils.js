/**
 * Compares two dates, (d1, d2) and returns True if d1 comes before d2
 * @param {String} d1
 * @param {String} d2
 */
const compareDates = (d1, d2) => {
  if (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  ) {
    return false;
  }
  return d1 < d2;
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
const splitEvents = (eventDoc, setters) => {
  let upcomingEvents = [];
  let recentEvents = [];
  let events = [];
  const date = new Date();
  Object.entries(eventDoc).forEach((item) => {
    const event = item[1];
    if (compareDates(new Date(event.date), date)) {
      recentEvents.push(event);
    } else {
      upcomingEvents.push(event);
    }
    events.push(event);
  });

  setters.setUpcomingEvents(upcomingEvents);
  setters.setRecentEvents(recentEvents);
  setters.setEvents(events);
};

const formatEvents = (events) => {
  let eventMap = {};
  for (let i in events) {
    const event = events[i];
    eventMap[i] = {
      date: event.date,
      info: event.info,
      name: event.name,
      when: event.when,
      where: event.where,
    };
  }
  return eventMap;
};

export { compareDates, getCurrentPage, splitEvents, formatEvents };
