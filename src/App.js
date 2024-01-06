import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import Plant from "./pages/Plant";
import Process from "./pages/Plant";
import Arge from "./pages/Arge";
import Product from "./pages/Product";
import Encyclopedia from "./pages/Encyclopedia";
import Consultancy from "./pages/Consultancy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant" element={<Plant />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/01" element={<Product />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/plant" element={<Plant />} />
        <Route path="/process" element={<Process />} />
        <Route path="/arge" element={<Arge />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
