import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Loader from "./components/Layout/Loader";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import HomePage from "./components/HomePage";
import OurSolutions from "./components/Solutions/OurSolutions";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import OurProcess from "./components/OurProcess/OurProcess";
import QualitySafety from "./components/QualitySafety/QualitySafety";
import BlogResources from "./components/BlogResources/BlogResources";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/Details/ProjectDetails";
import SolutionDetails from "./components/Solutions/Details/SolutionDetails";
import IndustrySolutions from "./components/IndustrySolutions/IndustrySolutions";
import Engineering from "./components/Engineering/Engineering";
import Manufacturing from "./components/Manufacturing/Manufacturing";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Loader />
      <Header />

      <main className="mt-90">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-solutions" element={<OurSolutions />} />
          <Route path="/why-sibi-global" element={<WhyChooseUs />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/quality-and-safety" element={<QualitySafety />} />
          <Route path="/blog" element={<BlogResources />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/details/:slug" element={<ProjectDetails />} />
          <Route path="/solutions/details/:slug" element={<SolutionDetails />} />
          <Route path="/industries" element={<IndustrySolutions />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;