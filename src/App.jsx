import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Loader from "./components/Layout/Loader";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import HomePage from "./components/HomePage";
import OurSolutions from "./components/OurSolutions";

function App() {
  return (
    <>
      <Loader />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-solutions" element={<OurSolutions />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;