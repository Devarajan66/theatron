import React from "react";

function Domains() {
  // ✨ You can easily update this data every year
  const domainData = [
    {
      name: "Events",
      description:
        "The Events domain handles planning, scheduling, and smooth execution of all Theatron activities and performances. They coordinate with every other team to ensure flawless management of events.",
      heads: ["Aarav R.", "Meera S."],
    },
    {
      name: "Backstage",
      description:
        "The Backstage domain ensures every performance runs seamlessly behind the scenes. From props to lighting, sound, and stage transitions, they make sure everything happens on cue.",
      heads: ["Karthik P.", "Sahana L."],
    },
    {
      name: "Logistics",
      description:
        "The Logistics team manages all essential resources — from costumes and equipment to venue setup and transport. They are the backbone of the event’s organization and coordination.",
      heads: ["Rithika V.", "Aditya M."],
    },
    {
      name: "Marketing",
      description:
        "The Marketing domain handles promotions, collaborations, and audience engagement across social media and offline platforms. They ensure Theatron reaches the right audience in style.",
      heads: ["Nivetha R.", "Vignesh S."],
    },
    {
      name: "Design",
      description:
        "The Design team crafts creative posters, digital content, and branding materials that bring Theatron’s vision to life with artistic flair and innovation.",
      heads: ["Ananya K.", "Harish R."],
    },
    {
      name: "Visual Design",
      description:
        "Visual Design focuses on video editing, photography, and other visual elements that tell Theatron’s story. They create captivating visuals for both stage and online platforms.",
      heads: ["Preethi J.", "Manoj T."],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Theatron Domains
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Each domain in Theatron plays a crucial role in shaping performances,
        creativity, and audience experience. Here’s an overview of our domains
        and their respective heads for the current year.
      </p>

      {/* Domains grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {domainData.map((domain, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              {domain.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{domain.description}</p>

            <div className="bg-indigo-50 rounded-lg p-3">
              <h3 className="text-sm font-semibold text-indigo-700">
                Domain Heads:
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                {domain.heads.map((head, i) => (
                  <li key={i}>{head}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Theatron | Domain Heads update annually
      </footer>
    </div>
  );
}

export default Domains;
