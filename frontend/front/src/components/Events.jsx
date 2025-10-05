import React from "react";
import squid from "../assets/squid.webp";

const events = [
  {
    id: 2,
    title: "Squid Game – The Challenge",
    date: "Wednesday, October 15, 2025",
    venue: "CEG Square,Anna University",
    note: "For the winner: Free ticket to upcoming play",
    background: squid, 
  },
  {
    id: 3,
    title: "Channel Surfing – Agni Anna University Intra-College Festival",
    date: "Friday, October 25, 2025",
    venue: "Agni Anna University Grounds, Chennai",
    note: "Cash Prize",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  },
];

function Events() {
  return (
    <div className="bg-white min-h-screen text-gray-900 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#e6b17e] mb-10">
        🎭 Upcoming Events
      </h1>

      {/* Grid of Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 group h-60"
            style={{
              backgroundImage: `url(${event.background || event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            <div className="absolute bottom-0 p-4">
              <h2 className="text-xl font-semibold text-white">{event.title}</h2>
              <p className="text-sm text-gray-200">{event.date}</p>
              <p className="text-sm text-gray-300 mb-2">{event.venue}</p>
              {event.note && (
                <p className="text-sm text-[#e6b17e] font-medium">{event.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
