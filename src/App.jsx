import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LenisScroll from "./components/Leniscroll/Lenis";
import Navabar from "./components/Navbar/Navabar";
import gsap from "gsap";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";

function App() {
  LenisScroll();

  return (
    <>
      <Cursor />
      <main>
        <Navabar />

        <Routes>
          <Route path="/Akhinostudio" element={<Home />} />
          <Route path="/Akhinostudio/work" element={<Work />} />
          <Route path="/Akhinostudio/contact" element={<Contact />} />
              <Route path="/Akhinostudio/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </main>
      
    </>
  );
}

export default App;
