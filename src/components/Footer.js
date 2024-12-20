import { Link } from "react-router-dom";
import logo from "../img/seraterra-logo.jpg";
import info from "../pages/info.json";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-white via-white to-[#b1e476]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-3 px-4 lg:px-40">
          <Logo />
          <Address />
          <FooterHead title={info.footer.corporate}>
            <FooterLink href="/aboutus">{info.footer.aboutUs}</FooterLink>
            <FooterLink href="/certificate">
              {info.footer.certificates}
            </FooterLink>
          </FooterHead>
          <FooterHead title={info.footer.activities}>
            <FooterLink href="/plant">{info.footer.agriculture}</FooterLink>
            <FooterLink href="/process">{info.footer.facility}</FooterLink>
          </FooterHead>
          <FooterHead title={info.footer.innovation}>
            <FooterLink href="/arge">{info.footer.research}</FooterLink>
            <FooterLink href="/consultancy">
              {info.footer.consultancy}
            </FooterLink>
          </FooterHead>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  const year = new Date().getFullYear();

  return (
    <div className="text-left mb-6 lg:mb-10">
      <img className="h-28 lg:h-36 rounded-xl" src={logo} alt="logo" />
      <p className="text-xs text-gray-500 mt-2">
        Copyright &copy; <span>{year}</span> by Seraterra Inc. All rights
        reserved.
      </p>
    </div>
  );
}

function Address() {
  return (
    <div className="text-center lg:text-left text-xs space-y-2 lg:px-4 mt-4 lg:mt-8">
      <h3 className="font-medium text-sm mb-2">
        Sera Terra Tarım Hayvancılık Limited Şirketi
      </h3>
      <p className="text-gray-600">
        Fabrika Adres: Göktepe Ticaret Odası Sanayi Sitesi C Blok No:12
        BİGA/ÇANAKKALE
      </p>
      <p className="text-gray-600">
        Genel Müdürlük: Alemdağ Mahallesi Gelin Çiçeği Sk. No:5-1
        ÇEKMEKÖY/İSTANBUL
      </p>
    </div>
  );
}

function FooterHead({ children, title }) {
  return (
    <div className="space-y-3 text-center lg:text-left mt-4 lg:mt-8">
      <h3 className="font-medium text-sm">{title}</h3>
      <div className="flex flex-col space-y-2">{children}</div>
    </div>
  );
}

function FooterLink({ children, href }) {
  return (
    <Link
      className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
