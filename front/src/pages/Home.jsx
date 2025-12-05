import { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dvaxpatax/image/upload/v1764930153/hero1_2_hb6wu2.png",
  "https://res.cloudinary.com/dvaxpatax/image/upload/v1764930154/hero3_wwksmb.png",
  "https://res.cloudinary.com/dvaxpatax/image/upload/v1764930153/hero_qypojp.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
            currentIndex === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Softer overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl text-amber-500 font-bold mb-4 leading-tight">
          Crafting Visual Stories
        </h1>
        <p className="text-lg md:text-xl text-amber-500 mb-8">
          Premium photography and videography services that stand out
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#works"
            className="bg-amber-500 text-white px-6 py-3 rounded hover:bg-black hover:text-amber-600 transition duration-300 font-semibold shadow-md"
          >
            View Our Works
          </a>
          <a
            href="#contact"
            className="border border-amber-500 px-6 py-3 rounded text-white hover:bg-amber-500 hover:text-black transition duration-300 font-semibold shadow-md"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;