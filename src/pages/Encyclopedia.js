import { Link } from "react-router-dom";
import info from "../pages/info.json"; // info.json dosyasını içe aktar

function Encyclopedia({ setSelectedDisease }) {
  const letters = [
    "A",
    "B",
    "C",
    "Ç",
    "D",
    "E",
    "G",
    "H",
    "İ",
    "K",
    "M",
    "Ö",
    "P",
    "R",
    "S",
    "T",
    "U",
    "Ü",
    "V",
    "Y",
    "Z",
  ];

  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-8 bg-stone-50">
      <h1 className="text-center text-4xl font-serif mb-12 text-stone-50">_</h1>
      <div className="w-3/4 mx-auto min-h-screen p-8 bg-white shadow-lg border border-stone-200">
        <ol className="list-none">
          {letters.map((letter) => (
            <ul key={letter} className="mb-8">
              <p className="text-5xl font-serif mb-4 text-stone-800 border-b-2 border-stone-300">
                {letter}
              </p>
              {info.diseaseList
                .filter((disease) => disease.startsWith(letter))
                .map((disease, index) => (
                  <li
                    key={index}
                    className="ml-6 mb-2 text-lg text-stone-700 hover:text-green-600 transition-colors"
                  >
                    <Link
                      onClick={() => {
                        setSelectedDisease(disease);
                        console.log(disease);
                      }}
                      className="block"
                      to="/disease"
                    >
                      {disease}
                    </Link>
                  </li>
                ))}
            </ul>
          ))}
        </ol>
      </div>
      <h1 className="text-center text-4xl font-serif mb-12 text-stone-50">_</h1>
    </div>
  );
}

export default Encyclopedia;
