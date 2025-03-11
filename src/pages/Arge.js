import kapsaisin from "../img/kapsaisin.jpg";
import oleuropein from "../img/olueoropein.jpg";
import juglone from "../img/juglone.jpg";
import linalol from "../img/linalol.jpg";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
function Arge() {
  const { language } = useContext(LanguageContext);
  const info =
    language === "tr" ? require("./info.json") : require("./info.en.json");
  const researchItems = [
    { number: "01", image: kapsaisin, data: info.arge.kapsaisin },
    { number: "02", image: oleuropein, data: info.arge.oleuropein },
    { number: "03", image: juglone, data: info.arge.juglone },
    { number: "04", image: linalol, data: info.arge.linalol },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            {info.arge.title}
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
            {info.arge.researchContent}
          </p>
        </div>

        {/* Research Items */}
        <div className="space-y-16 sm:space-y-24">
          {researchItems.map((item, index) => (
            <div
              key={item.number}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 sm:gap-12`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4 sm:space-y-6 w-full lg:w-1/2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl font-bold text-emerald-500">
                    {item.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {item.data.title}
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {item.data.content}
                </p>
                {item.data.items && (
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-600">
                    {item.data.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {item.data.content2}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full lg:w-1/2">
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.data.title}
                    className="w-full h-[250px] sm:h-[300px] object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Arge;
