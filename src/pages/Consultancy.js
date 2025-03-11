import Consult from "../img/consultancy.jpeg";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
function Consultancy() {
  const { language } = useContext(LanguageContext);
  const info =
    language === "tr" ? require("./info.json") : require("./info.en.json");
  const programs = [
    { key: "ipard" },
    { key: "developmentAgency" },
    { key: "euProjects" },
    { key: "kosgeb" },
    { key: "tubitak" },
    { key: "tradeMinistry" },
    { key: "exportConsultancy" },
  ];

  return (
    <div className="min-h-screen mt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {info.consultancy.header}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {info.consultancy.intro}
          </p>
        </div>

        {/* Image Section */}
        <div className="my-20">
          <img src={Consult} className="w-full" alt="consultancy" />
        </div>

        {/* Programs Grid */}
        <div>
          {programs.map((program) => (
            <div key={program.key} className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {info.consultancy.programs[program.key].header}
              </h3>
              <p className="text-gray-600">
                {info.consultancy.programs[program.key].content}
              </p>
              {info.consultancy.programs[program.key].items && (
                <ul className="list-disc list-inside text-gray-600">
                  {info.consultancy.programs[program.key].items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Consultancy;
