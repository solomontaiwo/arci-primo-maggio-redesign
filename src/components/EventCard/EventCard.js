import React, { useState } from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_DESCRIPTION_LENGTH = 100;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateDescription = (description) => {
    if (description.length <= MAX_DESCRIPTION_LENGTH) {
      return description;
    }
    return isExpanded
      ? description
      : description.slice(0, MAX_DESCRIPTION_LENGTH) + "...";
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };

  return (
    <div className="event-card">
      {event.cover && (
        <img
          src={event.cover.source}
          alt={`Copertina di ${event.name}`}
          className="event-image"
        />
      )}
      <div className="event-details">
        <h3 className="event-title">{event.name}</h3>
        <p className="event-dates">
          Inizio: {formatDate(event.start_time)} <br />
          {event.end_time && <>Fine: {formatDate(event.end_time)}</>}
        </p>
        <p className="event-description">
          {truncateDescription(event.description)}
        </p>
        {event.description.length > MAX_DESCRIPTION_LENGTH && (
          <button onClick={toggleDescription} className="read-more-btn">
            {isExpanded ? "Leggi meno" : "Leggi tutto"}
          </button>
        )}
        <a href={`https://www.facebook.com/events/${event.id}`} className="event-link">
          Vedi su Facebook
        </a>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>×</button>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;