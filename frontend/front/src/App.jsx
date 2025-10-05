import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Domains from "./components/Domains.jsx";
import Events from "./components/Events.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/events" element={<Events />} />

        {/* You can add more pages later: Plays, Memories, etc */}
      </Routes>
    </Router>
  );
}

export default App;
