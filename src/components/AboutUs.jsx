import React from "react";
import AboutBuilding from "../../public/assets/img/about-building.png";
import AboutWelding from "../../public/assets/img/about-welding.png";

const features = [
  { icon: "⚙", title: "Engineering Expertise" },
  { icon: "🛡", title: "Quality & Safety" },
  { icon: "🚚", title: "On-Time Delivery" },
  { icon: "👤", title: "Client Satisfaction" },
];

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container">   {/* ✅ was "about-container" */}

        {/* LEFT IMAGES */}
        <div className="about-images">
          <div className="shape-bg"></div>

          <div className="main-img">
            <img src={AboutBuilding} alt="Engineering Steel Building" />
          </div>

          <div className="small-img">
            <img src={AboutWelding} alt="Steel Welding" />
          </div>

          <div className="play-btn">▶</div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="sub-title">ABOUT US</span>

          <h2>
            Engineering Steel Structures.
            <span>Delivering Industrial Growth.</span>
          </h2>

          <p>
            Sibi Global Corporation is an engineering and structural steel
            solutions company focused on delivering reliable PEB structures,
            fabrication, industrial sheds, mezzanine floors and related
            construction solutions.
          </p>

          <p>
            Our approach combines engineering expertise, controlled
            fabrication and systematic site execution to create strong,
            functional and efficient industrial infrastructure.
          </p>

          <a href="/about-us" className="about-btn">
            Discover Sibi Global →
          </a>
        </div>

        {/* FEATURE BOX */}
        <div className="feature-box">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="icon">{feature.icon}</div>
              <span>{feature.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;