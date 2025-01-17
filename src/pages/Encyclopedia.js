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
    <div className="max-w-screen-lg mt-72">
      <div className="w-1/5 mx-auto">
        <ol className="list-decimal">
          {letters.map((letter) => (
            <ul key={letter}>
              <p className="text-4xl mb-2 mt-16">{letter}</p>
              {info.diseaseList
                .filter((disease) => disease.startsWith(letter))
                .map((disease, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-green-500"
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
    </div>
  );
}

export default Encyclopedia;
