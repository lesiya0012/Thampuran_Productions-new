import React, { useEffect, useState } from 'react';

function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('https://thampuranproductions.vercel.app/api/team')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  return (
    <section className="bg-black min-h-screen py-10 px-4 text-white">
       <h2 className="text-4xl font-sans  text-center font-bold mb-4">
          Meet Our <span className="text-yellow-500">Creative Team</span>
        </h2>

      {/* Top row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center mb-6">
        {members.slice(0, 3).map((member) => (
          <div
            key={member.id}
            className="bg-gray-900 rounded-lg p-6 w-full max-w-xs flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-35 h-35 rounded-full object-cover mb-4 border-4 border-yellow-400"
            />
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-yellow-400 text-sm">{member.designation}</p>
            <p className="text-gray-300 text-xs mt-1">{member.email}</p>
          </div>
        ))}
      </div>

      {/* Bottom row: 2 cards centered */}
      <div className="flex justify-center gap-6">
        {members.slice(3, 5).map((member) => (
          <div
            key={member.id}
            className="bg-gray-900 rounded-lg p-6 w-full max-w-xs flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-30 h-30 rounded-full object-cover mb-4 border-4 border-yellow-400"
            />
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-yellow-400 text-sm">{member.designation}</p>
            <p className="text-gray-300 text-xs mt-1">{member.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;