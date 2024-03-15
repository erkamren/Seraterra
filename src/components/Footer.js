import { Link } from "react-router-dom";

import logo from "../img/seraterra-logo.jpg";

function Footer() {
  return (
    <div className="footer">
      <Logo />
      <Adress />
      <FooterHead title="Kurumsal">
        <FooterLink href="/aboutus">Hakkımızda</FooterLink>
        <FooterLink href="/certificate">Sertifikalar</FooterLink>
      </FooterHead>
      <FooterHead title="Faaliyetlerimiz">
        <FooterLink href="/plant">Tarım</FooterLink>
        <FooterLink href="/process">Tesis</FooterLink>
      </FooterHead>
      <FooterHead title="İnovasyon">
        <FooterLink href="/arge">AR-GE</FooterLink>
        <FooterLink href="/consultancy">Danışmanlık</FooterLink>
      </FooterHead>
    </div>
  );
}

function Logo(href) {
  const year = new Date().getFullYear();

  return (
    <div className="footer-logo">
      <img className="footer-img" src={logo} href={href} alt="logo" />
      <p className="copyright">
        Copyright &copy; <span className="year">{year}</span> by Seraterra Inc.
        All rights reserved.
      </p>
    </div>
  );
}

function Adress() {
  return (
    <div className="footer-address">
      <h3>Sera Terra Tarım Hayvancılık Limited Şirketi</h3>
      <p>
        Fabrika Adres: Göktepe Ticaret Odası Sanayi Sitesi C Blok No:12
        BİGA/ÇANAKKALE
      </p>
      <p>
        Genel Müdürlük: Alemdağ Mahallesi Gelin Çiçeği Sk. No:5-1
        ÇEKMEKÖY/İSTANBUL
      </p>
    </div>
  );
}

function FooterHead({ children, title }) {
  return (
    <p className="footer-head">
      {title} <div className="footer-column">{children}</div>
    </p>
  );
}

function FooterLink({ children, href }) {
  return (
    <Link
      className="footer-link"
      to={href}
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      {children}
    </Link>
  );
}

export default Footer;
