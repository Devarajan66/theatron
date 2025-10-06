import React, { useEffect } from "react";
import logoVideo from "../assets/logo_video.mp4"; // Ensure this file exists

function Splashscreen({ onVideoEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onVideoEnd();
    }, 8000); // fallback in case video doesn't trigger 'ended'
    return () => clearTimeout(timer);
  }, [onVideoEnd]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <video
        src={logoVideo}
        autoPlay
        muted
        onEnded={onVideoEnd}
        className="w-full h-full object-cover"
        // fallback in case video doesn't load
        onError={(e) => {
          e.target.style.display = "none";
          onVideoEnd();
        }}
      />
    </div>
  );
}

export default Splashscreen;
