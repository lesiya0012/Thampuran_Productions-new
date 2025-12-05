import React from 'react';
import PortfolioNav from './PortfolioNav';
import Navbar from '../../components/Navbar.';

const Sound = () => (
  <section className="bg-black min-h-screen text-white">
    <Navbar/>
    <PortfolioNav />
    <div className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Sound Design</h2>
      
      <video src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764918842/Sound_1_yce4ms.mp4" 
      poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764921915/sound_1_l1pwvi.png"
        controls className="mx-auto rounded-lg shadow-lg w-full max-w-xl h-[400px] mb-6" />
      <video src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764918844/Sound_2_ej9ijr.mp4" 
      poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764916827/sound_2_nifjps.png"
      controls className="mx-auto rounded-lg shadow-lg w-full max-w-xl h-[400px] mb-6" />
      <p className="text-gray-300 mb-4">Audio Production & Creative Direction</p>
      <p className="text-gray-400 italic">We bring music to life with visually stunning storytelling.</p>
    </div>
  </section>
);

export default Sound;