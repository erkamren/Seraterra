import { useParams } from "react-router-dom";
import data from "./data.json";
import naturalink from "../img/natura-link.png";
import info from "./info.json";

function Ingredients({ selectedId }) {
  const { id } = useParams();
  const finder = data.filter((item) => item.id === Number(id));
  return (
    <div className="max-w-[160rem] p-0 px-8 mt-28 mx-4">
      {finder.map((item) => (
        <div className="font-normal text-[1.8rem] leading-[1.8]" key={item.id}>
          <img
            className="w-[90%]"
            src={require(`/src/img/products/${item.image}`)}
            alt={item.latin}
          />
          <h1 className="mt-8 text-[#80cc28]">{item.isim}</h1>
          <p className="in-text">Latince Adı: {item.latin}</p>
          <p className="in-text">Menşei: {item.mensei}</p>
          <p className="in-text">Üretim Yeri: {item.uretim}</p>
          <h3 className="mt-4 text-[#80cc28]">{info.ingredients.title1}</h3>
          <p className="in-text">{item.kullanim1}</p>
          <p className="in-text">{item.kullanim2}</p>
          <p className="in-text">{item.kullanim3}</p>
          <p className="in-text">{item.kullanim4}</p>
          <p className="in-text">{item.kullanim5}</p>
          <p className="in-text">{item.kullanim6}</p>
          <p className="in-text">{item.kullanim7}</p>
          <p className="in-text">{item.kullanim8}</p>
          <p className="in-text">{item.kullanim9}</p>
          <h3 className="mt-4 text-[#80cc28]">{info.ingredients.title2}</h3>
          <p className="in-text">{item.uyarilar1}</p>
          <p className="in-text">{item.uyarilar2}</p>
          <p className="in-text">{item.uyarilar3}</p>
          <p className="in-text">{item.uyarilar4}</p>
          <p className="in-text">{item.uyarilar5}</p>
          <p className="in-text">{item.uyarilar6}</p>
          <p className="in-text">{item.uyarilar7}</p>
          <p className="in-text">{item.uyarilar8}</p>
          <p className="in-text">{item.uyarilar9}</p>
          <h3 className="mt-4 text-[#80cc28]">{info.ingredients.title3}</h3>
          <p className="in-text">{info.ingredients.description}</p>
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
            <img
              className="w-[95%] my-9 mx-3"
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
