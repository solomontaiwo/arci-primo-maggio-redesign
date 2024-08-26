import React from "react";
import EventList from "../EventList/EventList";
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <section id="events">
      <h2>Eventi</h2>
      <EventList />
    </section>

    <section id="about">
      <h2>Chi Siamo</h2>
      <p>
        L'Arci Primo Maggio nasce nel 1974 e ha oggi sede all'ingresso della
        famosa piazza dell’Abazia, in via Trento 9 a San Benedetto Po, in
        provincia di Mantova. Da sempre promotore di eventi culturali (quali la
        giornata della cultura e lo spettacolo dell’opera lirica) ed in prima
        linea sul fronte della solidarietà, negli ultimi anni ha aperto il suo
        spazio e i suoi orizzonti: è possibile frequentare corsi di ballo liscio
        e di yoga, vedere una rassegna di cartoni animati, incontrare i ragazzi
        di Libera per un approfondimento sul tema o seguire la rassegna musicale
        Rockrazia.
      </p>
    </section>

    <section id="tesseramento">
      <h2>Tesseramento</h2>
      <p>
        Stampa, compila e porta al circolo il modulo di adesione per accedere a
        tutte le iniziative e gli eventi promossi da Arci Primo Maggio. <br />
        Testo aggiuntivo...
      </p>
    </section>

    <section id="contact-us">
      <h2>Informazioni e contatti</h2>
      <p>
        Circolo Arci I Maggio APS <br />
        Via Trento, 9 46027 San Benedetto Po (MN) <br /> <br />
        Tel. 0376615628 <br />
        Email info@arciprimomaggio.it <br /> <br />
        Seguici su{" "}
        <a
          href="https://www.facebook.com/arciprimomaggiosbpo"
          target="_blank"
          rel="noreferrer noopener"
        >
          Facebook
        </a>{" "}
        <br />
        Seguici su{" "}
        <a
          href="https://www.instagram.com/arciprimomaggio"
          target="_blank"
          rel="noreferrer noopener"
        >
          Instagram
        </a>{" "}
        <br />
      </p>
      <hr />
      <h4>CONTRIBUTI PUBBLICI</h4>
      <p>
        I contributi pubblici percepiti dall'associazione sono scaricabili{" "}
        <a
          href="https://www.arciprimomaggio.it/download/Modello_di_rendicontazione_dei_contributi_pubblici_primo_maggio.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          qui
        </a>
      </p>
    </section>
  </div>
);

export default Home;
