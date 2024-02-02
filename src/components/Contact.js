import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import connect from "../img/connect.jpg";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import whatsapp from "../img/whatsapp.png";
function Contact() {
  return (
    <div className="cta" id="contact">
      <div className="cta-box">
        <h2 class="heading-secondary">Get your first meal for free!</h2>
        <p class="cta-text">
          Healthy, tasty and hassle-free meals are waiting for you. Start eating
          well today. You can cancel or pause anytime. And the first meal is on
          us!
        </p>
        <div className="cta-grid">
          <Link to="/whatsapp">
            <img className="cta-icon" src={whatsapp} alt="whatsapp" />
          </Link>
          <Link to="/facebook">
            <img className="cta-icon" src={facebook} alt="facebook" />
          </Link>
          <Link to="/instagram">
            <img className="cta-icon" src={instagram} alt="instagram" />
          </Link>
        </div>
      </div>
      <img className="cta-img" src={connect} alt="contact" />
    </div>
  );
}
export default Contact;
