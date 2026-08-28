import React from "react";
import FooterBg from "../../../public/assets/img/footer-bg.png";

export default function Footer() {
  return (
    <>
    <footer
      className="footer-section"
      style={{
        backgroundImage: `url(${FooterBg})`,
         backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
      }}
    >
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-column">

          <div className="footer-icon">
            ↗
          </div>

          <div>
            <h3>Quick Links</h3>

            <div className="footer-line"></div>

            
            <div className="links-grid">
              <a href="#">About Us</a>
              <a href="#">Solutions</a>
              <a href="#">Projects</a>
              <a href="#">Manufacturing</a>  
              <a href="#">Industries</a>
              <a href="#">Blog</a>
              <a href="#">Career</a>
              <a href="#">Contact Us</a>
              <a href="#">Quality</a>
            </div>
          </div>

        </div>


        {/* Our Solutions */}
        <div className="footer-column">

          <div className="footer-icon">
            ⚙
          </div>

          <div>
            <h3>Our Solutions</h3>

            <div className="footer-line"></div>

            <ul>
              <li>Pre-Engineered Buildings</li>
              <li>Steel Fabrication</li>
              <li>Industrial Structures</li>
              <li>Turnkey Projects</li>
              <li>Mezzanine Floors</li>
              <li>Structural Steel Fabrication</li>
            </ul>
          </div>

        </div>


        {/* Contact Us */}
        <div className="footer-column contact-column">

          <div className="footer-icon">
            ♧
          </div>

          <div>
            <h3>Contact Us</h3>

            <div className="footer-line"></div>

            <p>
              We're here to help you
              <br />
              build better. Reach out to
              <br />
              our expert team today!
            </p>
          </div>

        </div>


        {/* Footer Image */}
        <div className="footer-building">
          {/* <img
            src="/assets/footer-bg.png"
            alt="Footer"
          /> */}
        </div>

      </div>
       
    </footer>
    <div className="footer_copyrights">
        <p><a> © 2026 SIBI Global Corporation.
                All Rights Reserved.</a></p>
        <p><a href="" target="_blank">
          Designed &amp; Developed by
               360Degreeinfo PVT LTD</a></p>
       </div>
       </>
   
  );
}