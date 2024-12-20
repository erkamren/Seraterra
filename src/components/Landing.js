import { Link } from "react-router-dom";
import plant from "../img/plant.jpg";
import process from "../img/process.jpg";
import products from "../img/products.jpg";
import arge from "../img/arge.jpg";
import info from "../pages/info.json";

function Landing() {
  const cards = [
    { image: plant, title: info.header.agriculture, path: "/plant" },
    { image: process, title: info.header.facility, path: "/process" },
    { image: products, title: info.header.products, path: "/products" },
    { image: arge, title: info.header.research, path: "/arge" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-20 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.path}
              onClick={() => window.scroll(0, 0)}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:translate-y-[-8px]"
            >
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-between p-10">
                <h2 className="text-6xl font-bold text-white opacity-90 tracking-wider drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                  {card.title}
                </h2>

                <div className="flex items-center space-x-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <svg
                    className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
