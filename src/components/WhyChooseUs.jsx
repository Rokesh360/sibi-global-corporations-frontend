import React from "react";
import WhyChooseImg from "../../public/assets/img/why-choose.png";

const features = [
  {
    icon: "⚙",
    title: "Engineering-Led Approach",
    description: "Every project begins with understanding the application, site conditions and structural requirements before developing the right solution.",
  },
  {
    icon: "♙",
    title: "Precision Fabrication",
    description: "Controlled fabrication processes help maintain consistency, dimensional accuracy and structural quality.",
  },
  {
    icon: "✓",
    title: "Project-Focused Execution",
    description: "We plan fabrication and site activities around project schedules to support efficient execution.",
  },
  {
    icon: "◉",
    title: "Quality Control",
    description: "Quality checks are incorporated across material handling, fabrication, assembly and erection stages.",
  },
  {
    icon: "⚒",
    title: "Customised Solutions",
    description: "We don't believe every industrial project needs the same structure. Our solutions are developed according to individual project requirements.",
  },
  {
    icon: "⌁",
    title: "Single-Point Coordination",
    description: "From engineering and fabrication to site erection, our integrated approach simplifies project coordination.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">

      {/* LEFT IMAGE */}
      <div className="why-image">
        <img src={WhyChooseImg} alt="SIBI Global Steel Construction" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="why-content">

        <div className="why-inner">

          {/* HEADING */}
          <span className="why-label">
            WHY CHOOSE SIBI GLOBAL
          </span>

          <h2>
            Building Stronger Foundations
            <br />
            for Your Business
          </h2>

          {/* FEATURES */}
          <div className="why-features">

            {features.map((feature, index) => (
              <div className="why-feature" key={index}>

                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>

                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;