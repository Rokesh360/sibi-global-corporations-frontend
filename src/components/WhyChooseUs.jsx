import React from "react";
import WhyChooseImg from "../../public/assets/img/why-choose.png";

const features = [
  {
    icon: "⚙",
    title: "Engineering-Led Approach",
    description: "Right solution for every project requirement.",
  },
  {
    icon: "♙",
    title: "Precision Fabrication",
    description: "Consistency & dimensional accuracy across components.",
  },
  {
    icon: "✓",
    title: "Project-Focused Execution",
    description: "Planned, reliable execution for efficient delivery.",
  },
  {
    icon: "◉",
    title: "Quality Control",
    description: "Checks across all stages.",
  },
  {
    icon: "⚒",
    title: "Customised Solutions",
    description: "Designed for individual needs.",
  },
  {
    icon: "⌁",
    title: "Single-Point Coordination",
    description: "Simplifies project execution.",
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