import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Certificate from "./pages/Certificate";
import Plant from "./pages/Plant";
import Process from "./pages/Process";
import Arge from "./pages/Arge";
import Consultancy from "./pages/Consultancy";
import Product from "./pages/Product";
import Encyclopedia from "./pages/Encyclopedia";
import Blog from "./pages/Blog";

function App() {
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
        <Route path="product" element={<Product />} />
        <Route path="encyclopedia" element={<Encyclopedia />} />
        <Route path="encyclopedia" element={<Encyclopedia />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
