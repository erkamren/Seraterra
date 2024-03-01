import { Link } from "react-router-dom";
import connect from "../img/connect.jpg";
import email from "../img/email.jpg";
import instagram from "../img/instagram.png";
import whatsapp from "../img/whatsapp.png";
function Contact() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="cta" id="contact">
      <div className="cta-box">
        <h2 class="heading-secondary">
          Sera Terra Tarım Hayvancılık Limited Şirketi
        </h2>
        <p class="cta-text">
          Fabrika Adres: Göktepe Ticaret Odası Sanayi Sitesi C Blok No:12
          BİGA/ÇANAKKALE
        </p>
        <p class="cta-text">
          Genel Müdürlük: Alemdağ Mahallesi Gelin Çiçeği Sk. No:5-1
          ÇEKMEKÖY/İSTANBUL
        </p>
        <div className="cta-grid">
          <Link
            onClick={() =>
              openInNewTab("https://api.whatsapp.com/send?phone=905510074409")
            }
          >
            <img className="cta-icon" src={whatsapp} alt="whatsapp" />
          </Link>
          <Link href="mailto:info@seraterra.com">
            <img className="cta-icon" src={email} alt="email" />
          </Link>
          <Link
            onClick={() =>
              openInNewTab("https://www.instagram.com/sera_natura/?hl=en")
            }
          >
            <img className="cta-icon" src={instagram} alt="instagram" />
          </Link>
        </div>
      </div>
      <div className="cta-img-box">
        <img className="cta-img" src={connect} alt="contact" />
      </div>
    </div>
  );
}
export default Contact;
