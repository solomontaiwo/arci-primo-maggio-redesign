import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ChiSiamo from "./components/ChiSiamo";
import LaNostraStoria from "./components/LaNostraStoria";
import Eventi from "./components/Eventi";
import Tesseramento from "./components/Tesseramento";
import Informazioni from "./components/Informazioni";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/la-nostra-storia" element={<LaNostraStoria />} />
            <Route path="/eventi" element={<Eventi />} />
            <Route path="/tesseramento" element={<Tesseramento />} />
            <Route path="/informazioni" element={<Informazioni />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
