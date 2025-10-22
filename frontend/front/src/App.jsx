import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Domains from "./components/Domains.jsx";
import Events from "./components/Events.jsx";
import Play from "./components/Play";

// Temporary error boundary for debugging
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = React.useState(false);
  
  React.useEffect(() => {
    const handleError = (error) => {
      console.error('Error caught:', error);
      setHasError(true);
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div className="p-4 text-red-500">Error loading component</div>;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/events" element={<Events />} />
        <Route 
          path="/play" 
          element={
            <ErrorBoundary>
              <Play />
            </ErrorBoundary>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;