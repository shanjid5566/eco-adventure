import React from "react";
import { FaMountain, FaLeaf, FaUser } from "react-icons/fa";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Chief Adventurer",
    description:
      "A passionate hiker and photographer, Alex started TrailBlaze to share his love for the outdoors and inspire others to embark on their own adventures.",
    icon: <FaMountain className="w-10 h-10 text-orange-700 mx-auto mb-4" />,
  },
  {
    name: "Sarah Lee",
    role: "Content Creator",
    description:
      "With a background in environmental science, Sarah writes about sustainable travel practices and shares tips for eco-friendly adventures.",
    icon: <FaLeaf className="w-10 h-10 text-orange-700 mx-auto mb-4" />,
  },
  {
    name: "Mark Thompson",
    role: "Community Manager",
    description:
      "Mark connects with the TrailBlaze community, encouraging readers to share their stories and experiences while fostering a supportive environment.",
    icon: <FaUser className="w-10 h-10 text-orange-700 mx-auto mb-4" />,
  },
];

const TeamSection = () => {
  return (
    <section className="">
      <div className="container mx-auto bg-gray-100 py-8 px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the passionate individuals behind TrailBlaze, dedicated to
            inspiring your next adventure.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto text-center">
          {teamMembers.map((member, idx) => (
            <div key={idx}>
              {member.icon}
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-800 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
