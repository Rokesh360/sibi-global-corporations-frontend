import React from "react";

/* =========================================================
   DATA — work steps
========================================================= */
const workSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your requirements.",
  },
  {
    number: "02",
    title: "Engineering",
    description: "Design & detailing as per codes and standards.",
  },
  {
    number: "03",
    title: "Fabrication",
    description: "Precision fabrication with quality control.",
  },
  {
    number: "04",
    title: "Logistics",
    description: "Safe transportation to site.",
  },
  {
    number: "05",
    title: "Erection",
    description: "Systematic site execution.",
  },
  {
    number: "06",
    title: "Completion",
    description: "Final inspection & handover.",
  },
];

const HowWeWork = () => {
  return (
    <section className="how-work-section">
      <div className="how-work-container">

        {/* HEADING */}
        <div className="how-work-heading">
          <span>HOW WE WORK</span>
          <h2>From Concept to Completion</h2>
          <div className="heading-line"></div>
        </div>

        {/* PROCESS */}
        <div className="process-wrapper">
          {workSteps.map((step) => (
            <div className="work-step" key={step.number}>
              <div className="step-number">
                <small>{step.number}</small>
                <strong>{step.number}</strong>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;