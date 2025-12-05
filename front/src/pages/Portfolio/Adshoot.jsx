import React from 'react';
import PortfolioNav from './PortfolioNav';
import Navbar from '../../components/Navbar.';

const Adshoot = () => (
  <section className="bg-black min-h-screen text-white">
    <Navbar/>
    <PortfolioNav />
    <div className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Ad Shoot</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1.5 gap-y-3 items-center mb-6">

      <video
        src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764918834/Ad1compressed_ihog3e.mp4"
        poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764916826/thumbnail_ad1_kbycfm.png"
        controls
        className="mx-auto rounded-lg shadow-lg w-full  max-w-xl h-[400px] mb-6"
      />
      <video
        src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764918837/Ad2_dzczxz.mp4"
        poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764916826/thumbnail_ad2_yadgzq.png"
        controls
        className="mx-auto rounded-lg shadow-lg w-full max-w-xl h-[400px] mb-6"
      />
      <video
        src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764918843/Ad3_yltmqa.mp4"
        poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764916827/thumbnail_ad3_panqop.png"
        controls
        className="mx-auto rounded-lg shadow-lg w-full max-w-xl h-[400px] mb-6"
      />
      <video
        src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764915991/ad5_xahmss.mp4"
        poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764916828/thumbnail_ad5_kwnvco.png"
        controls
        className="mx-auto rounded-lg shadow-lg w-full max-w-xl h-[400px] mb-6"
      />
      <video
        src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764918869/Ad6_zo28rl.mp4"
        poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764916828/thumbnail_ad6_fhuq6e.png"
        controls
        className="mx-auto rounded-lg shadow-lg w-full max-w-xl h-[400px] mb-6"
      />
</div>
      <p className="text-gray-300 mb-4">Commercials & campaigns for brands.</p>
      <p className="text-gray-400 italic">
        We craft compelling visuals that connect products with audiences.
      </p>
    </div>
  </section>
);

export default Adshoot;