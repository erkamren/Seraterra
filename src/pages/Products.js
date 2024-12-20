import { Link } from "react-router-dom";
import Gallery1 from "../img/gallery/gallery-1.jpg";
import Gallery2 from "../img/gallery/gallery-2.jpg";
import Gallery3 from "../img/gallery/gallery-3.jpg";
import Gallery4 from "../img/gallery/gallery-4.jpg";
import Gallery5 from "../img/gallery/gallery-5.jpg";
import Gallery6 from "../img/gallery/gallery-6.jpg";
import Gallery7 from "../img/gallery/gallery-7.jpg";
import Gallery8 from "../img/gallery/gallery-8.jpg";
import Gallery9 from "../img/gallery/gallery-9.jpg";
import Gallery10 from "../img/gallery/gallery-10.jpg";
import Gallery11 from "../img/gallery/gallery-11.jpg";
import Gallery12 from "../img/gallery/gallery-12.jpg";
import info from "../pages/info.json";

function Products({ setSelectedSort }) {
  return (
    <div className="min-h-7xl bg-primary p-4 md:p-8 lg:p-12 mt-36">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
              Ürün Kategorilerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              <ProductsLink
                sort="UÇUCU YAĞLAR"
                setSelectedSort={setSelectedSort}
                href="/catalog"
              >
                {info.products.volatileOils}
              </ProductsLink>
              <ProductsLink
                sort="MASERASYONLAR"
                setSelectedSort={setSelectedSort}
                href="/catalog"
              >
                {info.products.massage}
              </ProductsLink>
              <ProductsLink
                sort="SABİT YAĞLAR"
                setSelectedSort={setSelectedSort}
                href="/catalog"
              >
                {info.products.fixedOils}
              </ProductsLink>
              <ProductsLink
                sort="HİDROSOLLER"
                setSelectedSort={setSelectedSort}
                href="/catalog"
              >
                {info.products.hydrosols}
              </ProductsLink>
              <ProductsLink
                sort="BİTKİSEL CO2 EKSTRAKTLAR"
                setSelectedSort={setSelectedSort}
                href="/catalog"
              >
                {info.products.plantCO2Extracts}
              </ProductsLink>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              Gallery1,
              Gallery2,
              Gallery3,
              Gallery4,
              Gallery5,
              Gallery6,
              Gallery7,
              Gallery8,
              Gallery9,
              Gallery10,
              Gallery11,
              Gallery12,
            ].map((image, index) => (
              <figure
                key={index}
                className="group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsLink({ children, href, sort, setSelectedSort }) {
  return (
    <Link
      onClick={() => setSelectedSort(sort)}
      className="block w-full text-lg md:text-xl bg-white/10 hover:bg-white 
                 text-white hover:text-primary rounded-xl p-4 transition-all 
                 duration-300 transform hover:-translate-y-1 hover:shadow-lg"
      to={href}
    >
      {children}
    </Link>
  );
}

export default Products;
