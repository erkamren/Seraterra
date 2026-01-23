import plant1 from "../img/plant1.jpeg";
import plant2 from "../img/plant2.jpeg";
import plant3 from "../img/plant3.jpeg";
import plant4 from "../img/plant4.jpeg";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
function Plant() {
  const { language } = useContext(LanguageContext);
  const info =
    language === "tr" ? require("./info.json") : require("./info.en.json");
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl mt-32">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {info.plant.companyInfo}
        </p>
      </div>
      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Step 1 */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <span className="text-5xl font-bold text-emerald-500">01</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {info.plant.step1.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {info.plant.step1.items.map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed">
            {info.plant.step1.description}
          </p>
        </div>
        <div className="transform hover:scale-105 transition-transform duration-300">
          <img
            src={plant1}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            alt="Plant Step 1"
          />
        </div>
        {/* Step 2 */}
        <div className="flex flex-col justify-center space-y-6 md:order-4">
          <div className="flex items-center space-x-4">
            <span className="text-5xl font-bold text-emerald-500">02</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {info.plant.step2.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {info.plant.step2.reasons.map((reason, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2 text-emerald-500">•</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <div className="transform hover:scale-105 transition-transform duration-300 md:order-3">
          <img
            src={plant2}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            alt="Plant Step 2"
          />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col justify-center space-y-6 md:order-5">
          <div className="flex items-center space-x-4">
            <span className="text-5xl font-bold text-emerald-500">03</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {info.plant.step3.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {info.plant.step3.factors.map((factor, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2 text-emerald-500">•</span>
                {factor}
              </li>
            ))}
          </ul>
        </div>
        <div className="transform hover:scale-105 transition-transform duration-300 md:order-6">
          <img
            src={plant3}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            alt="Plant Step 3"
          />
        </div>

        {/* Step 4 */}
        <div className="flex flex-col justify-center space-y-6 md:order-8">
          <div className="flex items-center space-x-4">
            <span className="text-5xl font-bold text-emerald-500">04</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {info.plant.step4.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {info.plant.step4.examples.map((example, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2 text-emerald-500">•</span>
                {example}
              </li>
            ))}
          </ul>
        </div>
        <div className="transform hover:scale-105 transition-transform duration-300 md:order-7">
          <img
            src={plant4}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            alt="Plant Step 4"
          />
        </div>
      </div>

      {/* Policy Section */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {info.plant.policy.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {info.plant.policy.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(info.plant.policy)
            .filter(([key]) => key !== "title" && key !== "description")
            .map(([key, value]) => (
              <div
                key={key}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg text-emerald-600 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Plant;
