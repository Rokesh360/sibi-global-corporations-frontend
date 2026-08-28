import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs";
import Solution from "./components/Solution";
import Loader from "./components/Loader";
import "./App.css";
import WhyChooseUs from "./components/WhyChooseUs";
import Manufacturing from "./components/Manufacturing";
import Industries from "./components/Industries";
import RecentProjects from "./components/Recentprojects";
import StatsSection from "./components/StatsSection";
import HowWeWork from "./components/HowWeWork";
import CertificationCTA from "./components/CertificationCTA";

function App() {
  return (
    <>
      <Loader />
      <Header />

      <main>
        <HeroBanner />
        <AboutUs />
        <Solution />
        <WhyChooseUs />
        <Manufacturing />
        <StatsSection />
        <Industries />
        <RecentProjects /> 
        <HowWeWork />
        <CertificationCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;