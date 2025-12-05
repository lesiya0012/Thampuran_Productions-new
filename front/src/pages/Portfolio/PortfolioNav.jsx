import { Link, useLocation } from "react-router-dom";

const subdivisions = [
  { id: "Films", title: "Films" },
  { id: "ModelShoot", title: "Model Shoot" },
  { id: "Adshoot", title: "Ad Shoot" },
  { id: "Branding", title: "Branding" },
  { id: "SoundDesign", title: "Sound Design" },
];

const PortfolioNav = () => {
  const location = useLocation();

  return (
    <nav className=" text-yellow-400 p-5 text-lg flex justify-center gap-6 transition-all duration-300 ">
      {subdivisions.map((item, index) => {
        const isActive = location.pathname === `/Portfolio/${item.id}`;
        return (
          <Link
            key={index}
            to={`/Portfolio/${item.id}`}
             className={`transition ${
              isActive
                ? "text-white font-bold border-b-2 border-yellow-400 "
                : "hover:text-white"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default PortfolioNav;