import logo from "../img/seraterra-logo.jpg";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 500
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className="header">
      <NavBar>
        <Nav title="KURUMSAL">
          <Dropdown href="/aboutus">HAKKIMIZDA</Dropdown>
          <Dropdown href="/certificate">SELTİFİKALAR</Dropdown>
        </Nav>
        <Nav title="FAALİYETLERİMİZ">
          <Dropdown href="/plant">TARIM</Dropdown>
          <Dropdown href="/process">TESİS</Dropdown>
        </Nav>
        <Nav title="INOVASYON">
          <Dropdown href="/arge">AR-GE</Dropdown>
          <Dropdown href="/consultancy">DANIŞMANLIK</Dropdown>
        </Nav>
        <Logo href="/ " />
        <Nav title="ÜRÜNLER" href="/product" />
        <Nav title="ANSİKLOPEDİ" href="/encyclopedia" />
        <Nav title="BLOG" href="/blog" />
      </NavBar>
    </header>
  );
}
function NavBar({ children }) {
  return <div className="nav-bar">{children}</div>;
}

function Logo({ href }) {
  return (
    <Link to={href}>
      <img className="logo" src={logo} alt="logo" />
    </Link>
  );
}

function Nav({ children, title, href }) {
  return (
    <Link className="nav" to={href}>
      {title} <div className="drop">{children}</div>
    </Link>
  );
}

function Dropdown({ children, href }) {
  return (
    <Link className="dropdown" to={href}>
      {children}
    </Link>
  );
}

export default Header;
