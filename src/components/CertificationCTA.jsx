import React from "react";

const CertificationCTA = () => {
  return (
    <>

      <section className="certification-section">
        <div className="gold-corner"></div>

        <div className="cert-content">

          {/* Left Content */}
          <div className="cert-intro">

            <span className="small-title">
              CERTIFICATIONS &amp; STANDARDS
            </span>

            <div className="gold-line"></div>

            <h1>
              Committed to{" "}
              <span>Quality.</span>{" "}
              Built on{" "}
              <span>Standards.</span>
            </h1>

            <p>
              We follow internationally recognized standards
              to deliver safe, reliable and high-quality steel
              solutions.
            </p>

            <div className="dot-pattern"></div>

          </div>



          <div className="cert-cards">

          
            <div className="cert-card">

              <div className="hex-icon">
                <strong>ISO</strong>
              </div>

              <h3>ISO 9001:2015</h3>

              <p>
                Quality
                <br />
                Management
              </p>

              <span className="card-line"></span>

            </div>



            <div className="cert-card">

              <div className="hex-icon">
                <strong>ISO</strong>
              </div>

              <h3>ISO 14001:2015</h3>

              <p>
                Environmental
                <br />
                Management
              </p>

              <span className="card-line"></span>

            </div>


  
            <div className="cert-card">

              <div className="hex-icon">
                <strong>ISO</strong>
              </div>

              <h3>ISO 45001:2018</h3>

              <p>
                Occupational
                <br />
                Health &amp; Safety
              </p>

              <span className="card-line"></span>

            </div>



            <div className="cert-card">

              <div className="hex-icon bsi">
                <strong>BSI</strong>
              </div>

              <h3>BIS Compliant</h3>

              <p>
                Structural Steel
                <br />
                Fabrication
              </p>

              <span className="card-line"></span>

            </div>

          </div>
        </div>
      </section>


 

      <section className="cta-section">

        <div className="building-image">
          <div className="building-overlay"></div>
        </div>


  
        <div className="quote-box">

          <div className="quote-shape"></div>

          <div className="quote-content">

            <h2>
              Ready to Build
              <br />
              Something Great?
            </h2>

            <p>
              Let's discuss your project requirements.
            </p>

            <a href="#" className="quote-btn">
              Get Project Quote
              <span>→</span>
            </a>

          </div>

        </div>



        <div className="contact-details">

         
          <div className="contact-item">

            <div className="contact-icon">
              ☎
            </div>

            <h4>+91 98765 43210</h4>

            <span>Call Us</span>

          </div>


          
          <div className="contact-item">

            <div className="contact-icon">
              ✉
            </div>

            <h4>info@siglobal.com</h4>

            <span>Email Us</span>

          </div>


         
          <div className="contact-item">

            <div className="contact-icon">
              ●
            </div>

            <h4>Plot No. 29, Industrial Area,
Hyderabad - 500001, India.</h4>

            <span>Our Location</span>

          </div>

        </div>

      </section>



    </>
  );
};

export default CertificationCTA;