import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Domains from "./components/Domains.jsx";
import Events1 from "./components/domains/Events1.jsx";
import Backstage from "./components/domains/Backstage.jsx";
import Logistics from "./components/domains/Logistics.jsx";
import Marketing from "./components/domains/Marketing.jsx";
import Design from "./components/domains/Design.jsx";
import VisualDesign from "./components/domains/VisualDesign.jsx";
import Splashscreen from "./components/Splashscreen.jsx";
 

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleVideoEnd = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      {showSplash ? (
        <Splashscreen onVideoEnd={handleVideoEnd} />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/domains/events" element={<Events1 />} />
            <Route path="/domains/backstage" element={<Backstage />} />
            <Route path="/domains/logistics" element={<Logistics />} />
            <Route path="/domains/marketing" element={<Marketing />} />
            <Route path="/domains/design" element={<Design />} />
            <Route path="/domains/visualdesign" element={<VisualDesign />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
