import React from "react";
import { useNavigate } from "react-router-dom";

const domainCards = [
  {
    name: "Events",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9",
    color: "from-purple-500/60 to-pink-500/60",
  },
  {
    name: "Backstage",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    color: "from-blue-500/60 to-indigo-500/60",
  },
  {
    name: "Logistics",
    image: "https://images.unsplash.com/photo-1598511720702-fb04ed6804d8",
    color: "from-green-500/60 to-emerald-500/60",
  },
  {
    name: "Marketing",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    color: "from-yellow-500/60 to-orange-500/60",
  },
  {
    name: "Design",
    image: "https://images.unsplash.com/photo-1602524812260-0524a05e1a15",
    color: "from-pink-500/60 to-red-500/60",
  },
  {
    name: "Visual Design",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    color: "from-indigo-500/60 to-purple-500/60",
  },
];

function Domains() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-5xl font-bold text-center py-10 tracking-wide">
        Theatron Domains
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 pb-20">
        {domainCards.map((domain, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onClick={() =>
              navigate(
                `/domains/${domain.name.toLowerCase().replace(/\s+/g, "")}`
              )
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              navigate(
                `/domains/${domain.name.toLowerCase().replace(/\s+/g, "")}`
              )
            }
            className="relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-110 hover:rotate-1 animate-floatingCard"
          >
            <img
              src={domain.image}
              alt={domain.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-70`}
            ></div>
            <h2 className="absolute bottom-5 left-5 text-3xl font-bold text-white drop-shadow-lg">
              {domain.name}
            </h2>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes floatingCard {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-floatingCard {
          animation: floatingCard 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Domains;
