import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/chi-siamo">Chi Siamo</Link>
      </li>
      <li>
        <Link to="/la-nostra-storia">La Nostra Storia</Link>
      </li>
      <li>
        <Link to="/eventi">Eventi</Link>
      </li>
      <li>
        <Link to="/tesseramento">Tesseramento</Link>
      </li>
      <li>
        <Link to="/contattaci">Contattaci</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
