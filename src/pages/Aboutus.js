import info from "./info.json";
import logo from "../img/seraterra-logo.jpg";

function Aboutus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Logo ve Hero Section */}
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="Seraterra Logo"
              className="h-40 w-auto object-contain"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hakkımızda
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* About Text Sections */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              {info.aboutUsContent.foundation}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {info.aboutUsContent.investment}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {info.aboutUsContent.support}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {info.aboutUsContent.researchCollaboration}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {info.aboutUsContent.mission}
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {info.aboutUsContent.vision.title}
            </h2>
            <ul className="space-y-4">
              {info.aboutUsContent.vision.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-500 text-sm">{index + 1}</span>
                  </span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {info.aboutUsContent.missionTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {info.aboutUsContent.missionDescription}
            </p>
          </div>

          {/* Values Grid */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Değerlerimiz
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {["S", "E", "R", "A"].map((letter, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group hover:bg-green-50 p-4 rounded-lg transition-all duration-300"
                  >
                    <span className="text-3xl font-bold text-green-500">
                      {letter}
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900">
                      {letter === "S" && "amimiyiz"}
                      {letter === "E" && "nerji doluyuz"}
                      {letter === "R" && "uhun sesine kulak veririz"}
                      {letter === "A" && "hlaki değerlere önem veririz"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {["T", "E", "R", "R", "A"].map((letter, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group hover:bg-green-50 p-4 rounded-lg transition-all duration-300"
                  >
                    <span className="text-3xl font-bold text-green-500">
                      {letter}
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900">
                      {letter === "T" && "eknolojiyi severiz"}
                      {letter === "E" && "vreni koruruz"}
                      {letter === "R" &&
                        (index === 2 ? "ahat davranırız" : "ol model oluruz")}
                      {letter === "A" && "şk ile işimizi yaparız"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
