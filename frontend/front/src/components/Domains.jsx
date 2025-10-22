import React, { useState } from "react";
import { X, Crown, Users, Star, Medal } from "lucide-react";

// Domain data with proper team structure, domain-specific images, and background images
const domainData = [
  {
    name: "Events",
    color: "from-amber-900 to-yellow-800",
    description: "The Events domain handles planning, scheduling, and smooth execution of all Theatron activities and performances. They coordinate with every other team to ensure flawless management of events.",
    heads: [
      { name: "Samyuktha", role: "Co-Head", photo: "/assets/samyuktha.jpg" },
      { name: "Prithvi", role: "Co-Head", photo: "/assets/prithvi.jpg" },
    ],
    domainImages: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      "https://images.unsplash.com/photo-1503095396549-807759245b35",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    name: "Marketing",
    color: "from-amber-800 to-yellow-700",
    description: "The Marketing domain handles promotions, collaborations, and audience engagement across social media and offline platforms. They ensure Theatron reaches the right audience in style.",
    heads: [
      { name: "Harshitha", role: "Head", photo: "/assets/harshitha.jpg" },
      { name: "Kavin", role: "Co-Head", photo: "/assets/kavin.jpg" },
    ],
    domainImages: [
      "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      "https://images.unsplash.com/photo-1551833086-7594c0d9c316",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1551833086-7594c0d9c316?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    name: "Backstage",
    color: "from-yellow-900 to-amber-800",
    description: "The Backstage domain ensures every performance runs seamlessly behind the scenes. From props to lighting, sound, and stage transitions, they make sure everything happens on cue.",
    heads: [
      { name: "Prateeksha", role: "Head", photo: "/assets/prateeksha.jpg" },
    ],
    domainImages: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1581091012184-6d2f49aebc26",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    name: "Visual Design",
    color: "from-amber-700 to-yellow-600",
    description: "Visual Design focuses on video editing, photography, and other visual elements that tell Theatron's story. They create captivating visuals for both stage and online platforms.",
    heads: [
      { name: "Jayashree", role: "Head", photo: "/assets/jayashree.jpg" },
      { name: "Lakshana", role: "Deputy Head", photo: "/assets/lakshana.jpg" },
    ],
    domainImages: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      "https://images.unsplash.com/photo-1602524812260-0524a05e1a15",
      "https://images.unsplash.com/photo-1581091012184-6d2f49aebc26",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    name: "External Relations",
    color: "from-yellow-800 to-amber-700",
    description: "The External Relations team builds and maintains relationships with sponsors, partners, and other organizations to support Theatron's growth and reach.",
    heads: [
      { name: "Sakthi", role: "Head", photo: "/assets/sakthi.jpg" },
      { name: "Upendra", role: "Deputy Head", photo: "/assets/upendra.jpg" },
    ],
    domainImages: [
      "https://images.unsplash.com/photo-1551135049-8a33b42738b4",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1551135049-8a33b42738b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    name: "Design",
    color: "from-amber-600 to-yellow-500",
    description: "The Design team crafts creative posters, digital content, and branding materials that bring Theatron's vision to life with artistic flair and innovation.",
    heads: [
      { name: "Shambavi", role: "Head", photo: "/assets/shambavi.jpg" },
      { name: "Joshika", role: "Deputy Head", photo: "/assets/joshika.jpg" },
    ],
    domainImages: [
      "https://images.unsplash.com/photo-1602524812260-0524a05e1a15",
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      "https://images.unsplash.com/photo-1581091012184-6d2f49aebc26",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1602524812260-0524a05e1a15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    name: "Logistics",
    color: "from-yellow-700 to-amber-600",
    description: "The Logistics team manages all essential resources — from costumes and equipment to venue setup and transport. They are the backbone of the event's organization and coordination.",
    heads: [
      { name: "Sumiya", role: "Head", photo: "/assets/sumiya.jpg" },
      { name: "Divya", role: "Co-Head", photo: "/assets/divya.jpg" },
    ],
    domainImages: [
      "https://images.unsplash.com/photo-1598511720702-fb04ed6804d8",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      "https://images.unsplash.com/photo-1581091012184-6d2f49aebc26",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1598511720702-fb04ed6804d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    name: "Playwright",
    color: "from-amber-500 to-yellow-400",
    description: "The Playwright domain is responsible for creating original scripts, adapting stories, and developing compelling narratives that form the foundation of Theatron's performances.",
    heads: [
      { name: "Maansi", role: "Head", photo: "/assets/maansi.jpg" },
      { name: "Govind", role: "Co-Head", photo: "/assets/govind.jpg" },
    ],
    domainImages: [
      "https://images.unsplash.com/photo-1507925921958-8a62cc3f1f8d",
      "https://images.unsplash.com/photo-1542327897-d73f4005b533",
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1507925921958-8a62cc3f1f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
];

// Executive Board
const executiveBoard = [
  { name: "Madhulekha", role: "President", photo: "/assets/madhulekha.jpg" },
  { name: "Aishwarya", role: "Vice President", photo: "/assets/aishwarya.jpg" },
  { name: "Devarajan", role: "Treasurer", photo: "/assets/devarajan.jpg" },
  { name: "Kiruba Sankari", role: "Creative Director", photo: "/assets/kiruba.jpg" },
];

function Domains() {
  const [activeDomain, setActiveDomain] = useState(null);

  // Function to generate random sizes for the mosaic layout
  const getRandomSize = () => {
    const sizes = [
      "col-span-1 row-span-1", 
      "col-span-1 row-span-2", 
      "col-span-2 row-span-1", 
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-2"
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900 py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center mr-4">
            <Crown className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
            THEATRON DOMAINS
          </h1>
        </div>
        <p className="text-amber-200 text-xl max-w-2xl mx-auto">
          Discover the teams that bring our theatrical magic to life
        </p>
      </div>

      {/* Domain Grid - Random Mosaic Layout */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {domainData.map((domain, index) => {
            const randomSize = getRandomSize();
            return (
              <div
                key={domain.name}
                onClick={() => setActiveDomain(domain)}
                className={`group cursor-pointer ${randomSize} bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-amber-700/30 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden shadow-2xl shadow-amber-500/10 relative`}
              >
                {/* Background Image with Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${domain.backgroundImage})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-100 mb-2">{domain.name}</h3>
                    <div className="w-12 h-1 bg-amber-300 rounded-full mb-3"></div>
                    <p className="text-amber-100 text-sm line-clamp-3 opacity-90">
                      {domain.description}
                    </p>
                  </div>
                  
                  {/* Heads Preview */}
                  <div className="flex -space-x-2 mt-4">
                    {domain.heads.map((head, idx) => (
                      <div key={idx} className="relative group/head">
                        <div className="w-8 h-8 bg-gray-700 border-2 border-amber-600 rounded-lg flex items-center justify-center text-amber-300 text-xs font-bold">
                          {head.name.split(' ')[0].charAt(0)}
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover/head:block">
                          <div className="bg-amber-600 text-amber-100 text-xs px-2 py-1 rounded whitespace-nowrap">
                            {head.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 text-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Executive Board Section - Direct Display */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveBoard.map((executive, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-2xl border border-amber-700/30 hover:border-amber-500/50 transition-all duration-300">
              {/* Square Image Container */}
              <div className="w-24 h-24 rounded-xl border-2 border-amber-500 bg-gray-700 mb-4 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center text-amber-100 text-2xl font-bold">
                  {executive.name.split(' ')[0].charAt(0)}
                </div>
              </div>
              <h4 className="font-bold text-amber-200 text-xl mb-2">{executive.name}</h4>
              <p className="text-amber-400 text-lg">{executive.role}</p>
              <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full"></div>
              <Medal className="w-8 h-8 text-amber-400 mt-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Domain Modal */}
      {activeDomain && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-amber-700/30 shadow-2xl shadow-amber-500/10 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header with Background Image */}
            <div 
              className={`p-8 relative overflow-hidden rounded-t-3xl bg-cover bg-center`}
              style={{ backgroundImage: `url(${activeDomain.backgroundImage})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${activeDomain.color} opacity-90`}></div>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-4xl font-bold text-amber-100">{activeDomain.name}</h2>
                    <div className="w-20 h-1 bg-amber-300 mt-3 rounded-full"></div>
                  </div>
                  <button
                    onClick={() => setActiveDomain(null)}
                    className="p-2 hover:bg-amber-500/20 rounded-full transition-colors text-amber-200"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-amber-200 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-amber-400" />
                  Domain Overview
                </h3>
                <p className="text-amber-100 leading-relaxed text-lg opacity-90">
                  {activeDomain.description}
                </p>
              </div>

              {/* Domain Heads */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-amber-200 mb-8 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-amber-400" />
                  Team Leadership
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeDomain.heads.map((head, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-amber-900/30 to-amber-800/20 rounded-2xl border border-amber-700/20 hover:border-amber-500/40 transition-all duration-300">
                      {/* Square Image Container */}
                      <div className="w-24 h-24 rounded-xl border-2 border-amber-600 bg-gray-700 mb-4 overflow-hidden flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center text-amber-100 text-2xl font-bold">
                          {head.name.split(' ')[0].charAt(0)}
                        </div>
                      </div>
                      <h4 className="font-bold text-amber-200 text-xl mb-1">{head.name}</h4>
                      <p className="text-amber-400 text-sm">{head.role}</p>
                      <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Images Gallery */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-amber-200 mb-8 flex items-center">
                  <Crown className="w-6 h-6 mr-3 text-amber-400" />
                  Domain Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeDomain.domainImages.map((image, idx) => (
                    <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                      <img
                        src={image}
                        alt={`${activeDomain.name} activity ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-20">
        <p className="text-amber-600 text-sm">
          Theatron © 2024 • Where Art Meets Passion
        </p>
      </div>
    </div>
  );
}

export default Domains;