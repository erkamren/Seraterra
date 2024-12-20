import { Link } from "react-router-dom";
import consultant from "../img/consultant.jpg";
import encyclopedia from "../img/encyclopedia.jpg";
import blog from "../img/blog.jpg";
import info from "../pages/info.json";

function Triple() {
  const cards = [
    {
      title: info.header.consultancy,
      image: consultant,
      alt: "consultant",
      link: "/consultancy",
    },
    {
      title: info.header.encyclopedia,
      image: encyclopedia,
      alt: "encyclopedia",
      link: "/encyclopedia",
    },
    {
      title: info.header.blog,
      image: blog,
      alt: "blog",
      link: "/blog",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Triple;
