import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import F500 from "../img/F500.jpg";
import DSCF7290 from "../img/DSCF7290.jpg";
import Glass from "../img/glass.png";
import Green from "../img/green.png";
import Atom from "../img/atom.png";
import Extrak from "../img/extrak.gif";
import Coal from "../img/coal.jpeg";
import Stream from "../img/stream.jpeg";

function Process() {
  const { language } = useContext(LanguageContext);
  const info =
    language === "tr" ? require("./info.json") : require("./info.en.json");
  return (
    <div className="container mx-auto px-4 mt-48 max-w-7xl">
      {/* Hero Section 1*/}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-primary">
            {info.process.supercriticalCO2}
          </h3>
          <h2 className="text-lg md:text-xl font-bold text-gray-300">
            {info.process.greenTechnology}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {info.process.description}
          </p>
          <ul className="space-y-4 text-gray-600">
            {info.process.supercriticalPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src={DSCF7290}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            alt="DSCF7290"
          />
        </div>
      </div>
      {/* Hero Section 2*/}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <img
            src={F500}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            alt="F500"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-primary">
            {info.process.whyCO2}
          </h3>
          <h2 className="text-lg md:text-xl font-bold text-gray-300">
            {info.process.whyCO2start}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {info.process.whyCO2}
          </p>
          <ul className="space-y-4 text-gray-600">
            {info.process.whyCO2Points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Three Steps Section */}
      <div className="mb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {Object.entries(info.process.threeSteps).map(([key, value]) => (
            <div
              key={key}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <img
                  src={
                    key === "lowTemp"
                      ? Atom
                      : key === "naturalSolvent"
                      ? Green
                      : Glass
                  }
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  alt={value.title}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-base">{value.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Working Principle */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold">
            {info.process.workingPrinciple.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {info.process.workingPrinciple.content}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={Extrak}
            className="w-full rounded-2xl shadow-lg"
            alt="Extrak"
          />
        </div>
      </div>

      {/* Extraction Steps */}
      <div className="mb-24 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          {info.process.extractionSteps.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {info.process.extractionSteps.steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-4xl font-bold text-primary opacity-50 block mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Applications */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-24 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          {info.process.industrialApplications.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(info.process.industrialApplications)
            .filter(([key]) => key !== "title")
            .map(([key, value]) => (
              <div key={key} className="space-y-4">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-600">{value.content}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Distillation Systems */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold">
            {info.process.distillationSystems.steam.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {info.process.distillationSystems.steam.content}
          </p>
          <img
            src={Coal}
            className="w-full rounded-2xl shadow-lg"
            alt="Coal system"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold">
            {info.process.distillationSystems.solid.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {info.process.distillationSystems.solid.content}
          </p>
          <ul className="space-y-4 text-gray-600">
            {info.process.distillationSystems.solid.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                {step}
              </li>
            ))}
          </ul>
          <img
            src={Stream}
            className="w-full rounded-2xl shadow-lg"
            alt="Stream system"
          />
        </div>
      </div>
    </div>
  );
}

export default Process;
