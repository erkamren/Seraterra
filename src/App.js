import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Certificate from "./pages/Certificate";
import Plant from "./pages/Plant";
import Process from "./pages/Process";
import Arge from "./pages/Arge";
import Consultancy from "./pages/Consultancy";
import Products from "./pages/Products";
import Encyclopedia from "./pages/Encyclopedia";
import Catalog from "./pages/Catalog";
import Ingredients from "./pages/Ingredients";
import Blog from "./pages/Blog";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="certificate" element={<Certificate />} />
        <Route path="plant" element={<Plant />} />
        <Route path="process" element={<Process />} />
        <Route path="arge" element={<Arge />} />
        <Route path="consultancy" element={<Consultancy />} />
        <Route
          path="products"
          element={<Products setSelectedSort={setSelectedSort} />}
        />
        <Route
          path="encyclopedia"
          element={<Encyclopedia setSelectedId={setSelectedId} />}
        />
        <Route
          path="catalog"
          element={
            <Catalog
              setSelectedId={setSelectedId}
              selectedSort={selectedSort}
            />
          }
        />
        <Route
          path="ingredients"
          element={<Ingredients selectedId={selectedId} />}
        />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
