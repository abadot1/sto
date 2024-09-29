import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Price from "./components/pages/Price";
import Admin from "./components/pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="price" element={<Price />} />
            <Route path="about" element={<About />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
