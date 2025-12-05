import { Link } from "react-router-dom";

const portfolioItems = [
  {id:"Films", title: "Films", image: "https://res.cloudinary.com/dvaxpatax/image/upload/v1764921913/filmsimg_1_wcrt86.png", category: "Feature & Short Films" },
  {id:"ModelShoot", title: "Model Shoot", image: "https://res.cloudinary.com/dvaxpatax/image/upload/v1764929628/model1-1_-_Copy_11zon_yfiis4.png", category: "Fashion & Editorial Photography" },
  { id:"AdShoot",title: "Ad Shoot",  image: "https://res.cloudinary.com/dvaxpatax/image/upload/v1764916826/thumbnail_ad1_kbycfm.png", category: "Commercials & Campaigns" },
  { id:"Branding" ,title: "Branding", image: "/images/branding.jpg", category: "Corporate Identity & Design" },
  {id:"SoundDesign", title: "Sound Design", image: "https://res.cloudinary.com/dvaxpatax/image/upload/v1764916827/sound_2_nifjps.png", category:"Audio Production & Creative Direction" },
];


const PortfolioPage = () => {
  return (
    <section className="bg-black min-h-screen py-16 px-6 text-white">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
        Our <span className="text-white">Portfolio</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {portfolioItems.map((item, index) => (
          <Link to={`/Portfolio/${item.id}`} key={index} className="w-full max-w-sm">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-500/20 transition duration-300 transform hover:scale-105">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-yellow-400 mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;