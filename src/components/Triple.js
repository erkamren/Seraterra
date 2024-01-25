import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import plant from "../img/plant.jpg";
import process from "../img/process.jpg";

function Triple() {
  return (
    <div className="triple">
      <div className="box">
        <p className="triple-text">DANIŞMANLIK</p>
        <Link to="/incentives"></Link>
        <img className="we" src={plant} alt="we" />
      </div>
      <div className="box">
        <p className="triple-text">ANSİKLOPEDİ</p>
        <Link to="/encyclopedia">
          <img className="we" src={plant} alt="we" />
        </Link>
      </div>
      <div className="box">
        <p className="triple-text">BLOG</p>
        <Link to="/blog">
          <img className="we" src={process} alt="we" />
        </Link>
      </div>
    </div>
  );
}
export default Triple;
