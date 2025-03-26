import { useParams } from "react-router-dom";
import naturalink from "../img/natura-link.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
function Ingredients({ selectedId }) {
  const { language } = useContext(LanguageContext);
  const data =
    language === "tr" ? require("./data.json") : require("./data.en.json");
  const info =
    language === "tr" ? require("./info.json") : require("./info.en.json");
  const finder = data.filter((item) => item.id === selectedId);
  console.log(selectedId);
  return (
    <div className="px-8 mt-48 mx-48">
      {finder.map((item) => (
        <div className="font-normal text-lg" key={item.id}>
          <img
            className="w-[50%] m-auto rounded-2xl"
            src={require(`/src/img/products/${item.image}`)}
            alt={item.latin}
          />
          <h1 className="mt-8 text-primary text-2xl">{item.name}</h1>
          <p className="in-text">Latince Adı: {item.latin}</p>
          <p className="in-text">Menşei: {item.origin}</p>
          <p className="in-text">Üretim Yeri: {item.production}</p>
          <h3 className="mt-4 text-primary">{info.ingredients.title1}</h3>
          <p className="in-text">{item.usage1}</p>
          <p className="in-text">{item.usage2}</p>
          <p className="in-text">{item.usage3}</p>
          <p className="in-text">{item.usage4}</p>
          <p className="in-text">{item.usage5}</p>
          <p className="in-text">{item.usage6}</p>
          <p className="in-text">{item.usage7}</p>
          <p className="in-text">{item.usage8}</p>
          <p className="in-text">{item.usage9}</p>
          <h3 className="mt-4 text-primary">{info.ingredients.title2}</h3>
          <p className="in-text">{item.warning1}</p>
          <p className="in-text">{item.warning2}</p>
          <p className="in-text">{item.warning3}</p>
          <p className="in-text">{item.warning4}</p>
          <p className="in-text">{item.warning5}</p>
          <p className="in-text">{item.warning6}</p>
          <p className="in-text">{item.warning7}</p>
          <p className="in-text">{item.warning8}</p>
          <p className="in-text">{item.warning9}</p>
          <h3 className="mt-4 text-[#80cc28]">{info.ingredients.title3}</h3>
          <p className="in-text">{info.ingredients.description}</p>
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
            <img
              className="w-[100%] my-9"
              src={naturalink}
              alt="Natural Link"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;
