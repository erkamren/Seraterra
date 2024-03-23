import { Link } from "react-router-dom";
import connect from "../img/connect.jpg";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import whatsapp from "../img/whatsapp.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d7sa04n", "template_7fwq8m2", form.current, {
        publicKey: "2apfuSJVqULPY9vDj",
      })
      .then(
        () => {
          toggleModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="cta" id="contact">
      <div className="cta-box">
        <h2 className="cta-head">Bizimle iletişime geçmek ister misiniz</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="cta-form"
          name="sign-up"
        >
          <div>
            <input
              id="full-name"
              type="text"
              placeholder="İsminiz"
              name="name"
              required
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Emailiniz"
              name="email"
              required
            />
          </div>
          <div>
            <textarea
              id="submit"
              placeholder="Mesajınız"
              name="message"
              required
            />
          </div>
          <button type="submit" className="btn">
            Gönder
          </button>
        </form>
        <div className="cta-grid">
          <Link
            onClick={() =>
              openInNewTab("https://api.whatsapp.com/send?phone=905510074409")
            }
          >
            <img className="cta-icon" src={whatsapp} alt="whatsapp" />
          </Link>
          <Link
            onClick={() =>
              openInNewTab("https://api.whatsapp.com/send?phone=905510074409")
            }
          >
            <img className="cta-icon" src={facebook} alt="facebook" />
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
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1>Mesajınız Başarıyla Gönderilmiştir.</h1>
            <p></p>
            <button className="btn close-modal" onClick={toggleModal}>
              Tamam
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Contact;
