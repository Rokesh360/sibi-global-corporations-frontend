import React from "react";

const CertificationCTA = () => {
  const certifications = [
    {
      id: 1,
      icon: "ISO",
      title: "ISO 9001:2015",
      description: "Quality Management",
      isBSI: false,
    },
    {
      id: 2,
      icon: "ISO",
      title: "ISO 14001:2015",
      description: "Environmental Management",
      isBSI: false,
    },
    {
      id: 3,
      icon: "ISO",
      title: "ISO 45001:2018",
      description: "Occupational Health & Safety",
      isBSI: false,
    },
    {
      id: 4,
      icon: "BSI",
      title: "BIS Compliant",
      description: "Structural Steel Fabrication",
      isBSI: true,
    },
  ];

  return (
    <section className="certification-cta">
      <div className="certification-box">

        {/* Left: Certifications */}
        <div className="certification-left">
          <h3>Certifications &amp; Standards</h3>

          <div className="certification-list">
            {certifications.map((cert) => (
              <div className="certificate-item" key={cert.id}>
                <div className={`certificate-icon ${cert.isBSI ? 'cert-bsi' : ''}`}>
                  {cert.icon}
                </div>
                <span>{cert.title}</span>
                <small dangerouslySetInnerHTML={{ __html: cert.description }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTA */}
        <div className="certification-right">
          <h2>Ready to Build Something Great?</h2>
          <p>Let's discuss your project requirements.</p>

          <a href="#" className="quote-btn">
            Get Project Quote <span>→</span>
          </a>

          <div className="contact-details">
            <span>☎ &nbsp;+91 98765 43210</span>
            <span>✉ &nbsp; info@siglglobal.com</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationCTA;