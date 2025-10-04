import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Theatron!
      </h1>
      <p className="text-gray-600 text-center max-w-xl">
        Explore our domains, teams, events, and everything we do at Theatron. 
        Click on the Dashboard dropdown to see Domains, Plays, Memories and more.
      </p>
    </div>
  );
}

export default Home;
