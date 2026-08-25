import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/logo/sibi-global-corporations.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Projects", path: "/projects" },
  { label: "Manufacturing", path: "/manufacturing" },
];

const solutions = [
  { label: "Pre-Engineered Buildings", path: "/peb-construction" },
  { label: "Structural Steel Fabrication", path: "/structural-steel-fabrication" },
  { label: "Industrial Shed Construction", path: "/industrial-shed-construction" },
  { label: "Mezzanine Floors", path: "/mezzanine-floors" },
  { label: "Steel Erection", path: "/steel-erection" },
  { label: "Turnkey Industrial Solutions", path: "/turnkey-solutions" },
];

const contactInfo = {
  address: "Plot No. 29, Industrial Area,<br />Hyderabad - 500001, India.",
  phone: "+91 98765 43210",
  email: "info@sibiglobal.com",
  website: "www.sibiglobal.com",
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* COMPANY */}
          <div className="footer-column company-column">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="SIBI Global" />
            </Link>

            <p className="footer-description">
              Engineering steel structures<br />
              that drive industrial growth<br />
              and build a stronger tomorrow.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="footer-column solutions-column">
            <h3>Our Solutions</h3>

            <ul className="footer-links">
              {solutions.map((solution) => (
                <li key={solution.label}>
                  <Link to={solution.path}>{solution.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-column contact-column">
            <h3>Contact Us</h3>

            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>

                <span dangerouslySetInnerHTML={{ __html: contactInfo.address }} />
              </li>

              <li>
                <span className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </span>

                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  {contactInfo.phone}
                </a>
              </li>

              <li>
                <span className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </span>

                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </li>

              <li>
                <span className="contact-icon">
                  <i className="fas fa-globe"></i>
                </span>

                <a href="#">{contactInfo.website}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} SIBI Global Corporation. All Rights Reserved.
          </p>

          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}