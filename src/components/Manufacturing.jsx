import React from "react";

const processSteps = [
  {
    position: "process-1",
    icon: "✎",
    title: <>Steel Cutting</>,
  },
  {
    position: "process-2",
    icon: "▣",
    title: (
      <>
        Plate
        <br />
        Processing
      </>
    ),
  },
  {
    position: "process-3",
    icon: "⚒",
    title: (
      <>
        Welding &<br />
        Assembly
      </>
    ),
  },
  {
    position: "process-4",
    icon: "⚙",
    title: (
      <>
        Surface
        <br />
        Preparation
      </>
    ),
  },
  {
    position: "process-5",
    icon: "♨",
    title: (
      <>
        Painting &<br />
        Coating
      </>
    ),
  },
  {
    position: "process-6",
    icon: "✓",
    title: (
      <>
        Quality
        <br />
        Inspection
      </>
    ),
  },
];

const Manufacturing = () => {
  return (
    <section className="manufacturing-section">

      <div className="manufacturing-bg"></div>

      <div className="manufacturing-container">

        {/* LEFT CONTENT */}
        <div className="manufacturing-content">

          <span className="section-label">OUR MANUFACTURING</span>

          <h2>From Steel to Structure</h2>

          <p>
            Our fabrication capabilities enable us to transform engineering
            drawings and project requirements into accurately fabricated
            structural components.
          </p>

          <a href="#" className="manufacturing-btn">
            Explore Our Manufacturing Capabilities
            <span>→</span>
          </a>

        </div>

        {/* RIGHT PROCESS AREA */}
        <div className="process-area">

          {/* Curved Line */}
          <div className="process-curve"></div>

          {processSteps.map((step, index) => (
            <div className={`process-item ${step.position}`} key={index}>

              <div className="process-icon">
                <span>{step.icon}</span>
              </div>

              <h3>{step.title}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Manufacturing;