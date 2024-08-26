import React, { useState, useEffect } from "react";
import EventCard from "../EventCard/EventCard";
import "./EventList.css";

const EventList = ({ limit }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const pageId = process.env.REACT_APP_FACEBOOK_PAGE_ID;
    const accessToken = process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN;

    fetch(
      `https://graph.facebook.com/v20.0/${pageId}/events?access_token=${accessToken}&fields=name,description,start_time,end_time,place,cover`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
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
