import React from "react";
import "./EventCard.css";

const EventCard = ({ event }) => (
  <div
    className={`event-card ${
      event.isPast ? "past" : event.isFuture ? "future" : "present"
    }`}
  >
    <h3>{event.name}</h3>
    <p>{new Date(event.start_time).toLocaleString()}</p>
    <a href={event.link} target="_blank" rel="noopener noreferrer">
      Dettagli
    </a>
  </div>
);

export default EventCard;
