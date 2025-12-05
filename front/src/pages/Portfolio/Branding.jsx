import React from 'react';
import PortfolioNav from './PortfolioNav';
import Navbar from '../../components/Navbar.';

const Branding = () => (
  <section className="bg-black min-h-screen text-white">
    <Navbar/>
    <PortfolioNav />
    <div className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Branding</h2>
      <img src="/images/branding.jpg" alt="Branding" className="mx-auto rounded-lg shadow-lg w-full max-w-md mb-6" />
      <video src="/videos/branding.mp4" controls className="mx-auto rounded-lg shadow-lg w-full max-w-md mb-6" />
      <p className="text-gray-300 mb-4">Corporate identity & design solutions.</p>
      <p className="text-gray-400 italic">Helping businesses build strong, memorable brand identities.</p>
    </div>
  </section>
);

export default Branding;