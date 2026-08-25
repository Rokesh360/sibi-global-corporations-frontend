import React from "react";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
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
    </section>
  );
}