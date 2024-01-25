import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import plant from "../img/plant.jpg";
import process from "../img/process.jpg";
import product from "../img/product.jpg";
import inovasion from "../img/inovasion.jpg";

function Landing() {
  return (
    <div className="landing">
      <div className="box">
        <p className="box-text">TARIM</p>
        <Link to="/plant">
          <img className="we" src={plant} alt="we" />
        </Link>
      </div>
      <div className="box">
        <p className="box-text">TESİS</p>
        <Link to="/process">
          <img className="we" src={process} alt="we" />
        </Link>
      </div>
      <div className="box">
        <p className="box-text">ÜRÜNLER</p>
        <Link to="/product">
          <img className="we" src={product} alt="we" />
        </Link>
      </div>
      <div className="box">
        <p className="box-text">AR-GE</p>
        <Link to="/innovasion">
          <img className="we" src={inovasion} alt="we" />
        </Link>
      </div>
    </div>
  );
}
export default Landing;
