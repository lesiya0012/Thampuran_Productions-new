import React from 'react';
import { FaFilm, FaAward, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-white py-16 w-full max-w-5xl text-center animate-fadeIn">
        <h2 className="text-4xl font-sans font-bold mb-4">
          About <span className="text-yellow-500">Us</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto transition duration-300 hover:text-yellow-100">
          Founded over 15 years ago, Thampuran Productions has established itself as a leading force in the production industry. Our passion for storytelling and commitment to excellence has earned us recognition across multiple platforms and mediums.

We believe that great content starts with great ideas. Our team of creative professionals works collaboratively to transform concepts into compelling visual narratives that resonate with audiences worldwide.

From commercials to documentaries, music videos to feature films, we bring the same level of dedication and artistry to every project we undertake.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg hover:scale-105 hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-yellow-500/20">
            <FaFilm className="text-yellow-500 text-4xl mb-2 transition duration-300 hover:rotate-12" />
            <h3 className="text-2xl font-bold text-yellow-500">150+</h3>
            <p className="text-gray-300 text-sm">Projects Completed</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg hover:scale-105 hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-yellow-500/20">
            <FaAward className="text-yellow-500 text-4xl mb-2 transition duration-300 hover:rotate-12" />
            <h3 className="text-2xl font-bold text-yellow-500">25+</h3>
            <p className="text-gray-300 text-sm">Awards Won</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg hover:scale-105 hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-yellow-500/20">
            <FaUsers className="text-yellow-500 text-4xl mb-2 transition duration-300 hover:rotate-12" />
            <h3 className="text-2xl font-bold text-yellow-500">100+</h3>
            <p className="text-gray-300 text-sm">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;