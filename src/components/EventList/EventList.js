import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import EventCard from "../EventCard/EventCard";
import "./EventList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventList = ({ limit }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const pageId = process.env.REACT_APP_FACEBOOK_PAGE_ID;
    const accessToken = process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN;

    fetch(
      `https://graph.facebook.com/v12.0/${pageId}/events?access_token=${accessToken}&fields=name,description,start_time,end_time,cover`
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

  // Configurazione del carosello
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostra 3 eventi alla volta su schermi grandi
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Velocità leggermente ridotta per un'esperienza più fluida
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 eventi per schermi medi
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 evento per schermi piccoli
        },
      },
    ],
  };

  return (
    <div className="event-list-carousel">
      <Slider {...settings}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Slider>
    </div>
  );
};

export default EventList;