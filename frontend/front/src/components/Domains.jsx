import React, { useState } from "react";

// Full domain data with backgrounds, funny images, and heads
const domainData = [
  {
    name: "Events",
    bgImage: "",
    description:
      "The Events domain handles planning, scheduling, and smooth execution of all Theatron activities and performances. They coordinate with every other team to ensure flawless management of events.",
    heads: [
      { name: "Aarav R.", photo: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "Meera S.", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
    ],
    funnyImages: [
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      "https://images.unsplash.com/photo-1581091012184-6d2f49aebc26",
    ],
  },
  {
    name: "Backstage",
    bgImage: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    description:
      "The Backstage domain ensures every performance runs seamlessly behind the scenes. From props to lighting, sound, and stage transitions, they make sure everything happens on cue.",
    heads: [
      { name: "Karthik P.", photo: "https://randomuser.me/api/portraits/men/12.jpg" },
      { name: "Sahana L.", photo: "https://randomuser.me/api/portraits/women/18.jpg" },
    ],
    funnyImages: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    ],
  },
  {
    name: "Logistics",
    bgImage: "https://images.unsplash.com/photo-1598511720702-fb04ed6804d8",
    description:
      "The Logistics team manages all essential resources — from costumes and equipment to venue setup and transport. They are the backbone of the event’s organization and coordination.",
    heads: [
      { name: "Rithika V.", photo: "https://randomuser.me/api/portraits/women/22.jpg" },
      { name: "Aditya M.", photo: "https://randomuser.me/api/portraits/men/20.jpg" },
    ],
    funnyImages: [
      "https://images.unsplash.com/photo-1598511720702-fb04ed6804d8",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    ],
  },
  {
    name: "Marketing",
    bgImage: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
    description:
      "The Marketing domain handles promotions, collaborations, and audience engagement across social media and offline platforms. They ensure Theatron reaches the right audience in style.",
    heads: [
      { name: "Nivetha R.", photo: "https://randomuser.me/api/portraits/women/35.jpg" },
      { name: "Vignesh S.", photo: "https://randomuser.me/api/portraits/men/42.jpg" },
    ],
    funnyImages: [
      "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    ],
  },
  {
    name: "Design",
    bgImage: "https://images.unsplash.com/photo-1602524812260-0524a05e1a15",
    description:
      "The Design team crafts creative posters, digital content, and branding materials that bring Theatron’s vision to life with artistic flair and innovation.",
    heads: [
      { name: "Ananya K.", photo: "https://randomuser.me/api/portraits/women/25.jpg" },
      { name: "Harish R.", photo: "https://randomuser.me/api/portraits/men/26.jpg" },
    ],
    funnyImages: [
      "https://images.unsplash.com/photo-1602524812260-0524a05e1a15",
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    ],
  },
  {
    name: "Visual Design",
    bgImage: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    description:
      "Visual Design focuses on video editing, photography, and other visual elements that tell Theatron’s story. They create captivating visuals for both stage and online platforms.",
    heads: [
      { name: "Preethi J.", photo: "https://randomuser.me/api/portraits/women/30.jpg" },
      { name: "Manoj T.", photo: "https://randomuser.me/api/portraits/men/33.jpg" },
    ],
    funnyImages: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      "https://images.unsplash.com/photo-1581091012184-6d2f49aebc26",
    ],
  },
];

function Domains() {
  const [activeDomain, setActiveDomain] = useState(null);

  const handleClose = () => setActiveDomain(null);

  return (
    <div
      className="min-h-screen relative bg-black text-white overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-center pt-12 mb-12">Theatron Domains</h1>

      {/* Domain Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {domainData.map((domain) => (
          <div
            key={domain.name}
            className="relative h-64 rounded-xl cursor-pointer overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-500"
            onClick={() => setActiveDomain(domain)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
            <img
              src={domain.bgImage}
              alt={domain.name}
              className="w-full h-full object-cover rounded-xl"
            />
            <h2 className="absolute bottom-4 left-4 text-xl font-bold z-20">{domain.name}</h2>
          </div>
        ))}
      </div>

      {/* Full Page Domain Modal */}
      {activeDomain && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-auto animate-fadeIn">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-2xl font-bold hover:text-gray-400"
          >
            &times;
          </button>

          <div className="relative w-full max-w-5xl mx-auto py-20 px-6">
            {/* Floating elements with animations */}
            <div className="space-y-8 relative">
              <h1 className="text-5xl font-bold animate-float">{activeDomain.name}</h1>
              <p className="text-lg animate-float">{activeDomain.description}</p>

              {/* Funny Images flying randomly */}
              <div className="flex flex-wrap gap-4">
                {activeDomain.funnyImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="funny"
                    className={`w-40 h-40 object-cover rounded-lg shadow-lg animate-fly`}
                  />
                ))}
              </div>

              {/* Domain Heads */}
              <div className="flex flex-wrap gap-6 mt-8">
                {activeDomain.heads.map((head, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center animate-float">
                    <img
                      src={head.photo}
                      alt={head.name}
                      className="w-24 h-24 rounded-full border-2 border-yellow-500 mb-2"
                    />
                    <span className="font-medium">{head.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes fly {
            0% { transform: translateY(0px) translateX(0px) rotate(0deg);}
            50% { transform: translateY(-20px) translateX(15px) rotate(5deg);}
            100% { transform: translateY(0px) translateX(0px) rotate(0deg);}
          }
          .animate-fly {
            animation: fly 5s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0px);}
            50% { transform: translateY(-10px);}
            100% { transform: translateY(0px);}
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0;}
            to { opacity: 1;}
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Domains;
