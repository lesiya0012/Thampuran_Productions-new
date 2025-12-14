import React from 'react';
import PortfolioNav from './PortfolioNav';
import Navbar from '../../components/Navbar';


const ModelShoot = () => (
  <section className="bg-black min-h-screen text-white">
    <Navbar/>
    <PortfolioNav />
    <div className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Model Shoot</h2>

      {/* Grid wrapper for images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764929628/model1-1_-_Copy_11zon_yfiis4.png" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764930589/model1-2_-_Copy_xukkfg.png" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764930157/model1-3_-_Copy_ejq6w5.png" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764930284/DSC00428_-_Copy_d4fzvy.png" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764928321/model3-2_-_Copy-min_uxbhea.png" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764930156/DSC00406_11zon_mgxxzt.png" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764928320/model2-3_-_Copy-min_cjki5z.jpg" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764928321/model2-2_-_Copy-min_rytwya.jpg" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
        <img src="https://res.cloudinary.com/dvaxpatax/image/upload/v1764928320/model2-1_-_Copy-min_rvydsk.jpg" alt="Model Shoot" className="mx-auto rounded-lg shadow-lg w-full h-80 object-cover" />
      </div>

      
      <p className="text-gray-300 mb-4">Fashion & editorial photography with creative direction.</p>
      <p className="text-gray-400 italic">Capturing style, elegance, and personality in every frame.</p>
    </div>
  </section>
);

export default ModelShoot;