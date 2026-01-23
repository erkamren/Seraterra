import logo from "../img/seraterra-logo.png";
import React, { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { language, setLanguage } = useContext(LanguageContext);
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const info =
    language === "tr"
      ? require("../pages/info.json")
      : require("../pages/info.en.json");

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handlePointerDown = (event) => {
      const menuEl = mobileMenuRef.current;
      const buttonEl = mobileMenuButtonRef.current;
      const target = event.target;

      if (!menuEl || !buttonEl) return;
      if (menuEl.contains(target)) return;
      if (buttonEl.contains(target)) return;

      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-600 bg-gray-50 ${isSticky ? " py-2" : "py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => window.scroll(0, 0)}>
            <img
              src={logo}
              alt="Seraterra Logo"
              className={`transition-all duration-300 ${isSticky ? "h-24" : "h-32"
                }`}
            />
          </Link>
          <div className="flex">
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavItem title={info.header.corporate}>
                <DropdownItem href="/aboutus">
                  {info.header.aboutUs}
                </DropdownItem>
                <DropdownItem href="/certificate">
                  {info.header.certificates}
                </DropdownItem>
              </NavItem>
              <NavItem title={info.header.activities}>
                <DropdownItem href="/plant">
                  {info.header.agriculture}
                </DropdownItem>
                <DropdownItem href="/process">
                  {info.header.facility}
                </DropdownItem>
              </NavItem>
              <NavItem title={info.header.innovation}>
                <DropdownItem href="/arge">{info.header.research}</DropdownItem>
                <DropdownItem href="/consultancy">
                  {info.header.consultancy}
                </DropdownItem>
              </NavItem>
              <NavLink href="/products">{info.header.products}</NavLink>
              <NavLink href="/encyclopedia">{info.header.encyclopedia}</NavLink>
              <NavLink href="/distributor">{info.header.distributor}</NavLink>
              <NavLink href="/blog">{info.header.blog}</NavLink>
            </nav>
            {/* Language Toggle */}
            <div className="relative inline-flex items-center p-1 rounded-full mx-4">
              <div
                className={`absolute left-1 top-1 w-10 h-10 bg-primary mt-1  lg:mt-0 rounded-full transition-transform duration-300 ease-in-out ${
                  language === "en" ? "translate-x-full" : "translate-x-0"
                  }`}
              />
              <button
                onClick={() => setLanguage("tr")}
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  language === "tr" ? "text-white" : "text-primary"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  language === "en" ? "text-white" : "text-primary"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden mt-4 pb-4 bg-gray-50 border-t pt-4"
          >
            <MobileNavItem
              title={info.header.corporate}
              isOpen={openDropdown === "corporate"}
              onToggle={() =>
                setOpenDropdown(
                  openDropdown === "corporate" ? null : "corporate"
                )
              }
            >
              <MobileDropdownItem
                href="/aboutus"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                {info.header.aboutUs}
              </MobileDropdownItem>
              <MobileDropdownItem
                href="/certificate"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                {info.header.certificates}
              </MobileDropdownItem>
            </MobileNavItem>

            <MobileNavItem
              title={info.header.activities}
              isOpen={openDropdown === "activities"}
              onToggle={() =>
                setOpenDropdown(
                  openDropdown === "activities" ? null : "activities"
                )
              }
            >
              <MobileDropdownItem
                href="/plant"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                {info.header.agriculture}
              </MobileDropdownItem>
              <MobileDropdownItem
                href="/process"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                {info.header.facility}
              </MobileDropdownItem>
            </MobileNavItem>

            <MobileNavItem
              title={info.header.innovation}
              isOpen={openDropdown === "innovation"}
              onToggle={() =>
                setOpenDropdown(
                  openDropdown === "innovation" ? null : "innovation"
                )
              }
            >
              <MobileDropdownItem
                href="/arge"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                {info.header.research}
              </MobileDropdownItem>
              <MobileDropdownItem
                href="/consultancy"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                {info.header.consultancy}
              </MobileDropdownItem>
            </MobileNavItem>

            <Link
              to="/products"
              onClick={() => window.scroll(0, 0)}
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
            >
              {info.header.products}
            </Link>

            <Link
              to="/encyclopedia"
              onClick={() => window.scroll(0, 0)}
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
            >
              {info.header.encyclopedia}
            </Link>
            <Link
              to="/distributor"
              onClick={() => window.scroll(0, 0)}
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
            >
              {info.header.distributor}
            </Link>

            <Link
              to="/"
              onClick={() => window.scroll(0, 0)}
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
            >
              {info.header.blog}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

function NavItem({ title, children }) {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
        <span>{title}</span>
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute left-0 mt-2 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all transform -translate-y-2 group-hover:translate-y-0">
        <div className="bg-white rounded-lg shadow-xl py-2 border">
          {children}
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      to={href}
      onClick={() => window.scroll(0, 0)}
      className="text-gray-700 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function DropdownItem({ href, children }) {
  return (
    <Link
      to={href}
      onClick={() => window.scroll(0, 0)}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

// Mobile menü bileşenleri
function MobileNavItem({ title, children, isOpen, onToggle }) {
  return (
    <div className="py-2">
      <button
        className="flex items-center justify-between w-full text-gray-700"
        onClick={onToggle}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className="mt-2 pl-4">{children}</div>}
    </div>
  );
}

function MobileDropdownItem({ href, children, setIsMobileMenuOpen }) {
  return (
    <Link
      to={href}
      onClick={() => {
        window.scroll(0, 0);
        setIsMobileMenuOpen(false);
      }}
      className="block py-2 text-gray-600 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

export default Header;
