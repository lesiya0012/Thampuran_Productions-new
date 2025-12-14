import Navbar from '../../components/Navbar';
import PortfolioNav from './PortfolioNav';

const Films = () => (

  <section className="bg-black min-h-screen text-white">
    <Navbar />
    <PortfolioNav />
    <div className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Films</h2>
      
      <video src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764918876/Films_1_oikewv.mp4"
       poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764921913/filmsimg_1_wcrt86.png"
      
      controls className="mx-auto rounded-lg shadow-lg w-full  max-w-3xl h-[500px] mb-6" />
      <video src="https://res.cloudinary.com/dvaxpatax/video/upload/v1764918870/Films_2_t5pfmb.mp4" poster="https://res.cloudinary.com/dvaxpatax/image/upload/v1764921911/films_2_lomxls.png" controls className="mx-auto rounded-lg shadow-lg w-full  max-w-3xl h-[500px] mb-6" />
      <p className="text-gray-300 mb-4">Feature & short films with cinematic storytelling.</p>
      <p className="text-gray-400 italic">We specialize in narrative-driven visuals and film production.</p>
    </div>
  </section>
);

export default Films;