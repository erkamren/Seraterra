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

function Products({ setSelectedSort }) {
  return (
    <div class="products">
      <div className="products-list">
        <ProductsLink
          sort="UÇUCU YAĞLAR"
          setSelectedSort={setSelectedSort}
          href="/catalog"
        >
          UÇUCU YAĞLAR
        </ProductsLink>
        <ProductsLink
          sort="MASERASYONLAR"
          setSelectedSort={setSelectedSort}
          href="/catalog"
        >
          MASERASYONLAR
        </ProductsLink>
        <ProductsLink
          sort="SABİT YAĞLAR"
          setSelectedSort={setSelectedSort}
          href="/catalog"
        >
          SABİT YAĞLAR
        </ProductsLink>
        <ProductsLink
          sort="HİDROSOLLER"
          setSelectedSort={setSelectedSort}
          href="/catalog"
        >
          HİDROSOLLER
        </ProductsLink>
        <ProductsLink
          sort="BİTKİSEL CO2 EKSTRAKTLAR"
          setSelectedSort={setSelectedSort}
          href="/catalog"
        >
          BİTKİSEL CO2 EKSTRAKTLAR
        </ProductsLink>
      </div>
      <div class="gallery">
        <figure class="gallery-item">
          <img src={Gallery1} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery2} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery3} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery4} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery5} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery6} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery7} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery8} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery9} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery10} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery11} alt="Products" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery12} alt="Products" />
        </figure>
      </div>
    </div>
  );
}

function ProductsLink({ children, href, sort, setSelectedSort }) {
  return (
    <Link
      onClick={() => setSelectedSort(sort)}
      className="products-link"
      to={href}
    >
      {children}
    </Link>
  );
}

export default Products;
