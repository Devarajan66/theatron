import React from "react";

const events = [
  {
    id: 1,
    title: "Hamlet – A Modern Adaptation",
    date: "October 20, 2025",
    venue: "Theatron Hall, Chennai",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  },
  {
    id: 2,
    title: "Stand-up Night: The Laughter Therapy",
    date: "October 22, 2025",
    venue: "Artistry Theatre, Bengaluru",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  },
  {
    id: 3,
    title: "Classical Dance Showcase",
    date: "October 25, 2025",
    venue: "Kala Mandir, Mumbai",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  },
];

function Events() {
  return (
    <div className="bg-[#1a0e0f] min-h-screen text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#e6b17e] mb-10">
        🎭 Upcoming Events
      </h1>

      {/* Grid of Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative bg-[#2d1416] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 group"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-60 object-cover group-hover:opacity-70 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 p-4">
              <h2 className="text-xl font-semibold text-[#f4f1ef]">{event.title}</h2>
              <p className="text-sm text-[#d4c0b0]">{event.date}</p>
              <p className="text-sm text-[#bfa58f] mb-3">{event.venue}</p>
              <button className="bg-[#e6b17e] text-[#1a0e0f] px-4 py-1.5 rounded-md font-semibold text-sm hover:bg-[#f4f1ef] hover:text-[#864c52] transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
