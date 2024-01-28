import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "../img/seraterra-logo.jpg";

function Footer() {
  return (
    <div>
      <div className="footer">
        <Logo />
        <FooterHead title="Kurumsal">
          <FooterLink href="/aboutus">Hakkımızda</FooterLink>
          <FooterLink href="/certificate">Certificates</FooterLink>
        </FooterHead>
        <FooterHead title="Faaliyetlerimiz">
          <FooterLink href="/plant">Tarım</FooterLink>
          <FooterLink href="#process">Tesis</FooterLink>
        </FooterHead>
        <FooterHead title="İnovasyon">
          <FooterLink href="#arge">AR-GE</FooterLink>
          <FooterLink href="/consultancy">Danışmanlık</FooterLink>
        </FooterHead>
      </div>
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

function FooterHead({ children, title }) {
  return (
    <a className="footer-head">
      {title} <div className="footer-column">{children}</div>
    </a>
  );
}

function FooterLink({ children, href }) {
  return (
    <Link className="footer-link" to={href}>
      {children}
    </Link>
  );
}

export default Footer;
