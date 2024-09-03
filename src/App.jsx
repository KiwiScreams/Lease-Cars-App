import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-page/About";
import Contact from "./pages/contact-page/Contact";
import Home from "./pages/home-page/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NewCars from "./pages/new-cars-page/NewCars";
import Detail from "./pages/detail-page/Detail";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const location = useLocation();
  useEffect(() => {
    switch (true) {
      case location.pathname === "/":
        document.title = "D&M LEASING";
        break;
      case location.pathname === "/newcars":
        document.title = "D&M CARS";
        break;
      case location.pathname === "/about":
        document.title = "D&M ABOUT";
        break;
      case location.pathname === "/contact":
        document.title = "D&M CONTACT";
        break;
      default:
        document.title = "D&M LEASING";
    }
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newcars" element={<NewCars />} />
        <Route path="newcars/:name" element={<Detail />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
