import React from "react";

import PreEngineering from "../../public/assets/img/solution/peb-building.jpg";
import SteelFabrication from "../../public/assets/img/solution/steel-fabrication.jpg";
import IndustrialShed from "../../public/assets/img/solution/industrial-shed.jpg";
import SteelErection from "../../public/assets/img/solution/steel-erection.jpg";
import MezzanineFloors from "../../public/assets/img/solution/mezzanine-floor.jpg";
import TurnkeySolutions from "../../public/assets/img/solution/turnkey-solutions.jpg";



const solutions = [
  {
    number: "01",
    title: "Pre-Engineered Buildings",
    description:
      "Efficiently engineered steel building solutions designed for factories, warehouses, manufacturing facilities and industrial applications.",
    image: PreEngineering,
    link: "Explore PEB Solutions",
    icon: "🏭",
    theme: "navy",
  },
  {
    number: "02",
    title: "Structural Steel Fabrication",
    description:
      "Precision-fabricated structural steel components manufactured according to project-specific engineering and fabrication requirements.",
    image: SteelFabrication,
    link: "Explore Structural Fabrication",
    icon: "⚙",
    theme: "white",
  },
  {
    number: "03",
    title: "Industrial Shed Construction",
    description:
      "Customised industrial shed solutions designed to provide practical, durable and efficient spaces for manufacturing, storage and operations.",
    image: IndustrialShed,
    link: "Explore Industrial Sheds",
    icon: "🏗",
    theme: "gold",
  },
  {
    number: "04",
    title: "Mezzanine Floors",
    description:
      "Steel mezzanine structures that help businesses maximise available vertical space and create additional usable floor areas within existing facilities.",
    image: MezzanineFloors,
    link: "Explore Mezzanine Solutions",
    icon: "▥",
    theme: "white",
  },
  {
    number: "05",
    title: "Steel Erection",
    description:
      "Safe and systematic structural steel erection supported by experienced site teams and planned execution methodologies.",
    image: SteelErection,
    link: "Explore Steel Erection",
    icon: "🏗",
    theme: "navy",
  },
  {
    number: "06",
    title: "Turnkey Industrial Solutions",
    description:
      "Integrated project execution covering engineering, fabrication, transportation, erection and associated structural requirements.",
    image: TurnkeySolutions,
    link: "Discuss Your Project",
    icon: "✓",
    theme: "gold",
  },
];

// const benefits = [
//   {
//     icon: "✓",
//     title: "High Quality",
//     text: "Materials",
//   },
//   {
//     icon: "♙",
//     title: "Experienced",
//     text: "Professionals",
//   },
//   {
//     icon: "⚙",
//     title: "Advanced",
//     text: "Technology",
//   },
//   {
//     icon: "◷",
//     title: "On-Time",
//     text: "Delivery",
//   },
//   {
//     icon: "◇",
//     title: "Safety",
//     text: "First",
//   },
//   {
//     icon: "↗",
//     title: "End-to-End",
//     text: "Support",
//   },
// ];

const Solutions = () => {
  return (
    <section className="solutions-section">
      {/* Decorative Elements */}
      <div className="solutions-dots dots-left"></div>
      <div className="solutions-dots dots-right"></div>

      <div className="solutions-container">

        {/* ================= HEADER ================= */}
        <div className="solutions-header">

          <div className="section-label">
            
            OUR SOLUTIONS
            
          </div>

          <h2>
            Complete Steel Solutions for
            <strong> Industrial & Commercial </strong>
            Projects
          </h2>

          <p>
            From engineering to execution, we deliver high-quality steel
            solutions that power your projects and drive your success.
          </p>

        </div>

        {/* ================= SOLUTION GRID ================= */}
        <div className="solutions-grid">

          {solutions.map((item, index) => (
            <div
              className={`solution-card ${item.theme}`}
              key={item.number}
            >

              {/* Image */}
              <div className="solution-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="number-circle">
                  {item.number}
                </div>

                <div className="image-corner"></div>

              </div>

              {/* Content */}
              <div className="solution-content">

                {/* <div className="solution-icon">
                  {item.icon}
                </div> */}

                <h3>{item.title}</h3>

                <div className="small-line"></div>

                <p>{item.description}</p>

                <a href="#">
                  {item.link}
                  <span>→</span>
                </a>

              </div>

            </div>
          ))}

        </div>

        {/* ================= BENEFITS BAR ================= */}
        {/* <div className="benefits-bar">

          {benefits.map((item, index) => (
            <React.Fragment key={index}>

              <div className="benefit-item">

                <div className="benefit-icon">
                  {item.icon}
                </div>

                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>

              </div>

              {index !== benefits.length - 1 && (
                <div className="benefit-divider"></div>
              )}

            </React.Fragment>
          ))}

        </div> */}

      </div>
    </section>
  );
};

export default Solutions;