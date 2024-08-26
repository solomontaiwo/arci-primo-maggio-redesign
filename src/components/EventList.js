import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

const EventList = ({ limit }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://graph.facebook.com/v12.0/{page-id}/events?access_token={your-access-token}"
    )
      .then((response) => response.json())
      .then((data) => {
        const sortedEvents = data.data.sort(
          (a, b) => new Date(a.start_time) - new Date(b.start_time)
        );
        const categorizedEvents = sortedEvents.map((event) => {
          const eventDate = new Date(event.start_time);
          const today = new Date();
          return {
            ...event,
            isPast: eventDate < today,
            isFuture: eventDate > today,
          };
        });
        setEvents(
          limit ? categorizedEvents.slice(0, limit) : categorizedEvents
        );
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [limit]);

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
