import React from "react";

/* =========================================================
   DATA — work steps
========================================================= */
const workSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We begin by understanding your project requirements, site conditions, building application and operational needs.",
  },
  {
    number: "02",
    title: "Engineering",
    description: "Our engineering process converts project requirements into practical structural solutions and fabrication drawings.",
  },
  {
    number: "03",
    title: "Plan",
    description: "Project scope, quantities, fabrication requirements and execution schedules are planned before production.",
  },
  {
    number: "04",
    title: "Fabricate",
    description: "Structural components are fabricated under controlled manufacturing conditions with quality checks at key stages.",
  },
  {
    number: "05",
    title: "Erect",
    description: "Fabricated structures are transported and systematically erected at the project site.",
  },
  {
    number: "06",
    title: "Inspect & Handover",
    description: "Final inspections are carried out before project completion and handover.",
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