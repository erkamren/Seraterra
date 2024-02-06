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
        <img className="box-img" src={consultant} alt="consultant" />
      </div>
      <div className="box">
        <p className="triple-text">ANSİKLOPEDİ</p>
        <Link to="/encyclopedia">
          <img className="box-img" src={encyclopedia} alt="encyclopedia" />
        </Link>
      </div>
      <div className="box">
        <p className="triple-text">BLOG</p>
        <Link to="/blog">
          <img className="box-img" src={blog} alt="blog" />
        </Link>
      </div>
    </div>
  );
}
export default Triple;
