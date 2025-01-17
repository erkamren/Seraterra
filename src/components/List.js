import { Link } from "react-scroll";
import info from "../pages/info.json"; // info.json dosyasını içe aktar

function List() {
  return (
    <div className="max-w-screen-lg mt-44">
      <div className="w-1/5 mx-auto">
        <ol className="list-decimal">
          {[
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
          ].map((letter) => (
            <ul key={letter}>
              <p className="text-4xl mb-2">{letter}</p>
              {info.diseaseList
                .filter((disease) => disease.startsWith(letter))
                .map((disease, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-green-500"
                  >
                    <Link to="/disease">{disease}</Link>
                  </li>
                ))}
            </ul>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default List;
