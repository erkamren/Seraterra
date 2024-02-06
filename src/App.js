import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Blog from "./pages/Blog";
import Ingredients from "./pages/Ingredients";

function App() {
  const [selectedId, setSelectedId] = useState(null);
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
        <Route path="products" element={<Products />} />
        <Route
          path="encyclopedia"
          element={<Encyclopedia setSelectedId={setSelectedId} />}
        />
        <Route path="blog" element={<Blog />} />
        <Route
          path="ingredients"
          element={<Ingredients selectedId={selectedId} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
