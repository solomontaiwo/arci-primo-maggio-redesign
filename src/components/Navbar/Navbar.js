import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/arci-primo-maggio-redesign">
          <img src={logo} alt="Arci Primo Maggio Logo" />
        </a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#events">Eventi</a></li>
        <li><a href="#about">Chi Siamo</a></li>
        <li><a href="#tesseramento">Tesseramento</a></li>
        <li><a href="#contact-us">Contatti</a></li>
        <li><a href="#" className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Tema Chiaro" : "Tema Scuro"}
        </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;