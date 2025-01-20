import { Link } from "react-router-dom";
import logo from "../img/seraterra-logo.jpg";
import info from "../pages/info.json";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-white via-white to-[#b1e476] py-12">
      <div className="container mx-auto">
        <div className="grid px-24 grid-cols-1 gap-24 lg:px-10 lg:grid-cols-[220px_160px_70px_70px_70px] xl:px-0  xl:grid-cols-[330px_220px_120px_120px_120px] ">
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
    <div className="text-left">
      <img className="h-28 lg:h-32 rounded-lg" src={logo} alt="logo" />
      <p className="text-sm text-gray-600 mt-4">
        Copyright &copy; <span>{year}</span> by Seraterra Inc. All rights
        reserved.
      </p>
    </div>
  );
}

function Address() {
  return (
    <div className="text-left space-y-4 lg:px-4">
      <h3 className="font-semibold text-base text-gray-800">
        Sera Terra Tarım Hayvancılık Limited Şirketi
      </h3>
      <div className="space-y-3">
        <p className="text-sm text-gray-600 leading-relaxed">
          Fabrika Adres: Göktepe Ticaret Odası Sanayi Sitesi C Blok No:12
          BİGA/ÇANAKKALE
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Genel Müdürlük: Alemdağ Mahallesi Gelin Çiçeği Sk. No:5-1
          ÇEKMEKÖY/İSTANBUL
        </p>
      </div>
    </div>
  );
}

function FooterHead({ children, title }) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-base text-gray-800">{title}</h3>
      <div className="flex flex-col space-y-3">{children}</div>
    </div>
  );
}

function FooterLink({ children, href }) {
  return (
    <Link
      className="text-sm text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all duration-200"
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
