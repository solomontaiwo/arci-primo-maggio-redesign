import React from "react";
import EventList from "./EventList";

const Home = () => (
  <div>
    <h2>Benvenuti sul sito di Arci Primo Maggio</h2>
    <p>
      Benvenuti nel sito ufficiale dell'associazione. Scopri di più su di noi e
      sui nostri eventi!
    </p>
    <EventList limit={3} />
  </div>
);

export default Home;
