import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/about-page/About';
import Contact from './pages/contact-page/Contact';
import './App.css'
import Home from './pages/home-page/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NewCars from "./pages/new-cars-page/NewCars"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newcars" element={<NewCars/>} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App