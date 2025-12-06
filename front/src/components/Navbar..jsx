import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Thampuran Productions</h1>

      <button
        className="md:hidden text-yellow-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <div className={`space-y-2 md:space-x-4 md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
        <a href="/main#home" className="block md:inline px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black">
          Home
        </a>
        <a href="/main#about" className="block md:inline px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black">
          About
        </a>
        <a href="/main#services" className="block md:inline px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black">
          Services
        </a>
        <a href="/main#team" className="block md:inline px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black">
          Team
        </a>
        <a href="/main#portfolio" className="block md:inline px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black">
          Works
        </a>
        <a href="/main#contact" className="block md:inline px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;