import { Link } from "react-router-dom";
import data from "./data.json";

function Catalog({ setSelectedId, selectedSort }) {
  const finder = data.filter(
    (item) => item.baslik && item.baslik.includes(selectedSort)
  );
  return (
    <div>
      <h1 className="catalog-header">{selectedSort}</h1>
      <div className="catalog">
        {finder.map((item) => (
          <Link to="/ingredients" className="catalog-box">
            <img
              onClick={() => setSelectedId(item.id)}
              className="catalog-img"
              src={require(`/src/img/products/${item.image}`)}
              alt={item.latin}
            />
            <h1 className="catalog-text">{item.isim}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
