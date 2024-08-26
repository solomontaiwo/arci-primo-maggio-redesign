import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Eventi from "./components/Eventi/Eventi";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/arci-primo-maggio-redesign" element={<Home />} />
            <Route
              path="/arci-primo-maggio-redesign/eventi"
              element={<Eventi />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
