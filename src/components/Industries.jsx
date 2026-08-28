import EngineeringImage from "../../public/assets/img/engineering.jpg";
import LogisticsImage from "../../public/assets/img/logistics.jpg";
import AutomotiveImage from "../../public/assets/img/automotive.jpg";
import CommercialImage from "../../public/assets/img/commercial.jpg";
import PowerImage from "../../public/assets/img/power-energy.jpg";

const industries = [
  {
   image: EngineeringImage,
    alt: "Manufacturing",
    icon: "⚙",
    title: <>Manufacturing</>,
    description: <>Production facilities & expansion projects</>,
  },
  {
    image: LogisticsImage,
    alt: "Logistics and Warehousing",
    icon: "▣",
    title: <>Logistics &<br />Warehousing</>,
    description: <>Storage & distribution operations</>,
  },
  {
    image: AutomotiveImage,
    alt: "Automotive",
    icon: "🚗",
    title: <>Automotive</>,
    description: <>Automotive manufacturing facilities</>,
  },
  {
    image: EngineeringImage,
    alt: "Engineering and Heavy Industry",
    icon: "⚒",
    title: <>Engineering &<br />Heavy Industry</>,
    description: <>Robust infrastructure for heavy-duty operations</>,
  },
  {
    image: CommercialImage,
    alt: "Commercial Buildings",
    icon: "▦",
    title: <>Commercial Buildings</>,
    description: <>Business spaces & complexes</>,
  },
  {
    image: PowerImage,
    alt: "Power and Energy",
    icon: "⚡",
    title: <>Pharmaceutical</>,
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