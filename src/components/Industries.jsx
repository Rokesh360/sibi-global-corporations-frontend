import React from "react";

const industries = [
  {
    image: "/assets/img/manufacturing.jpg",  
    alt: "Manufacturing",
    icon: "⚙",
    title: <>Manufacturing</>,
    description: <>Production facilities & expansion projects</>,
  },
  {
    image: "/assets/img/logistics.jpg",
    alt: "Logistics and Warehousing",
    icon: "▣",
    title: <>Logistics &<br />Warehousing</>,
    description: <>Storage & distribution operations</>,
  },
  {
    image: "/assets/img/automotive.jpg",
    alt: "Automotive",
    icon: "🚗",
    title: <>Automotive</>,
    description: <>Automotive manufacturing facilities</>,
  },
  {
    image: "/assets/img/engineering.jpg",
    alt: "Engineering and Heavy Industry",
    icon: "⚒",
    title: <>Engineering &<br />Heavy Industry</>,
    description: <>Robust infrastructure for heavy-duty operations</>,
  },
  {
    image: "/assets/img/commercial.jpg",
    alt: "Commercial Buildings",
    icon: "▦",
    title: <>Commercial Buildings</>,
    description: <>Business spaces & complexes</>,
  },
  {
    image: "/assets/img/power-energy.jpg",
    alt: "Power and Energy",
    icon: "⚡",
    title: <>Power & Energy</>,
    description: <>Structural solutions for power plants & energy</>,
  },
];

/* =========================================================
   SECTION: Industries
========================================================= */
const Industries = () => {
  return (
    <section className="industries-section">
      <div className="industries-container">

        <div className="industries-heading">
          <span>INDUSTRIES</span>
          <h2>Built for Diverse Industrial Requirements</h2>
          <div className="heading-line"></div>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>

              <div className="industry-image">
                <img src={industry.image} alt={industry.alt} />
              </div>

              <div className="industry-content">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;