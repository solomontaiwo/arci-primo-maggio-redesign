import React from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
  const {
    name,
    description,
    start_time,
    end_time,
    // place,
    cover,
    id,
    isPast,
    isFuture,
  } = event;

  const eventClass = isPast ? "past" : isFuture ? "future" : "present";
  const eventUrl = `https://www.facebook.com/events/${id}`; // Costruisce l'URL dell'evento

  return (
    <div className={`event-card ${eventClass}`}>
      {cover && <img src={cover.source} alt={name} className="event-image" />}
      <h3>{name}</h3>
      <p>{new Date(start_time).toLocaleString()}</p>
      {end_time && <p>Fino a: {new Date(end_time).toLocaleString()}</p>}
      {/* {place && <p>Luogo: {place.name}</p>} */}
      <p>{description}</p>
      <a
        href={eventUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="event-link"
      >
        Visualizza su Facebook
      </a>
    </div>
  );
};

export default EventCard;
