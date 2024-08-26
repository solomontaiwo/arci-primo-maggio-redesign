import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <a href="/arci-primo-maggio-redesign">
        <img src={logo} alt="Arci Primo Maggio Logo" />
      </a>
    </div>
    <ul className="navbar-menu">
      <li>
        <a href="#events">Eventi</a>
      </li>
      <li>
        <a href="#about">Chi Siamo</a>
      </li>
      <li>
        <a href="#tesseramento">Tesseramento</a>
      </li>
      <li>
        <a href="#contact-us">Contatti</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
