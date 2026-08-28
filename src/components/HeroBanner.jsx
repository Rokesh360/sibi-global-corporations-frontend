import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import steelBuildingImg from "../../public/assets/img/steel-building.png";
import banner2Img from "../../public/assets/img/banner-2.png";
import banner3Img from "../../public/assets/img/banner-3.png";

const SLIDE_IMAGES = [
  steelBuildingImg,
  banner2Img,
  banner3Img,
];

const AUTOPLAY_INTERVAL = 5000;

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const showContent = activeIndex === 0;

  return (
    <section className={`hero-section ${showContent ? "first-slide" : ""}`}>
      {SLIDE_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`hero-bg-slide ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className={`hero-content ${showContent ? "visible" : "hidden"}`}>
          <h1>
            Engineered Steel.<br />
            <span>Built for Industry.</span>
          </h1>

          <h3>
            Pre-Engineered Buildings, Structural Steel Fabrication
            <br />
            & Industrial Construction Solutions
          </h3>

          <p>
            SIBI Global Corporation delivers engineered steel structures
            for factories, warehouses, industrial facilities and commercial
            projects — from design and fabrication to site erection and
            project completion.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="primary-btn">
              Get Project Quote
              <span>→</span>
            </Link>

            <Link to="/contact" className="secondary-btn">
              <span className="engineer-icon">♧</span>
              Talk to Our Engineer
            </Link>
          </div>
        </div>
      </div>

      {/* SLIDE DOTS */}
      <div className="hero-dots">
        {SLIDE_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}