import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import plant from "../img/plant.jpg";
import process from "../img/process.jpg";
import products from "../img/products.jpg";
import arge from "../img/arge.jpg";

function Landing() {
  return (
    <div className="landing">
      <div className="box">
        <p className="box-text">TARIM</p>
        <Link to="/plant">
          <img className="box-img" src={plant} alt="plant" />
        </Link>
      </div>
      <div className="box">
        <p className="box-text">TESİS</p>
        <Link to="/process">
          <img className="box-img" src={process} alt="process" />
        </Link>
      </div>
      <div className="box">
        <p className="box-text">ÜRÜNLER</p>
        <Link to="/products">
          <img className="box-img" src={products} alt="producst" />
        </Link>
      </div>
      <div className="box">
        <p className="box-text">AR-GE</p>
        <Link to="/arge">
          <img className="box-img" src={arge} alt="ar-ge" />
        </Link>
      </div>
    </div>
  );
}
export default Landing;
