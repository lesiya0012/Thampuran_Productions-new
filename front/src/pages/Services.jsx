import React from 'react';
import {
  FaVideo,
  FaBullhorn,
  FaFilm,
  FaMagic,
  FaLightbulb,
  FaHeadphones
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Our <span className="text-yellow-500">Services</span>
      </h2>
      <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        We offer comprehensive production services tailored to meet your creative and business needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          icon={<FaVideo className="text-yellow-500 text-4xl mb-4" />}
          title="Video Production"
          description="Full-scale video production from concept to final cut"
        />
        <ServiceCard
          icon={<FaBullhorn className="text-yellow-500 text-4xl mb-4" />}
          title="Commercial Shoots"
          description="High-impact commercial content for brands"
        />
        <ServiceCard
          icon={<FaFilm className="text-yellow-500 text-4xl mb-4" />}
          title="Film Making"
          description="Narrative filmmaking with creative storytelling"
        />
        <ServiceCard
          icon={<FaMagic className="text-yellow-500 text-4xl mb-4" />}
          title="Post Production"
          description="Professional editing and color grading services"
        />
        <ServiceCard
          icon={<FaLightbulb className="text-yellow-500 text-4xl mb-4" />}
          title="Creative Direction"
          description="Strategic creative guidance for your projects"
        />
        <ServiceCard
          icon={<FaHeadphones className="text-yellow-500 text-4xl mb-4" />}
          title="Audio Production"
          description="Professional sound design and audio mixing"
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
    {icon}
    <h3 className="text-xl font-semibold text-yellow-500 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Services;