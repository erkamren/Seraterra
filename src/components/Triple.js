import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import consultant from "../img/consultant.jpg";
import encyclopedia from "../img/encyclopedia.jpg";
import blog from "../img/blog.jpg";

function Triple() {
  return (
    <div className="triple">
      <div className="box">
        <p className="triple-text">DANIŞMANLIK</p>
        <Link to="/incentives"></Link>
        <img className="we" src={consultant} alt="consultant" />
      </div>
      <div className="box">
        <p className="triple-text">ANSİKLOPEDİ</p>
        <Link to="/encyclopedia">
          <img className="we" src={encyclopedia} alt="encyclopedia" />
        </Link>
      </div>
      <div className="box">
        <p className="triple-text">BLOG</p>
        <Link to="/blog">
          <img className="we" src={blog} alt="blog" />
        </Link>
      </div>
    </div>
  );
}
export default Triple;
