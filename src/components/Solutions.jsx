import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import PreEngineering from "../../public/assets/img/solution/peb-building.jpg";
import SteelFabrication from "../../public/assets/img/solution/steel-fabrication.jpg";
import IndustrialShed from "../../public/assets/img/solution/industrial-shed.jpg";
import SteelErection from "../../public/assets/img/solution/steel-erection.jpg";
import MezzanineFloors from "../../public/assets/img/solution/mezzanine-floor.jpg";
import TurnkeySolutions from "../../public/assets/img/solution/turnkey-solutions.jpg";

const Solution = [
  {
    number: "01",
    slug: "pre-engineered-buildings",
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
    slug: "structural-steel-fabrication",
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
    slug: "industrial-shed-construction",
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
    slug: "mezzanine-floors",
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
    slug: "steel-erection",
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
    slug: "turnkey-industrial-solutions",
    title: "Turnkey Industrial Solutions",
    description:
      "Integrated project execution covering engineering, fabrication, transportation, erection and associated structural requirements.",
    image: TurnkeySolutions,
    link: "Discuss Your Project",
    icon: "✓",
    theme: "gold",
  },
];

export default function Solutions() {
  const navigate = useNavigate();

  const handleExplore = (slug) => {
    navigate(`/solutions/details/${slug}`);
    // Scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <section className="solutions-section">
      {/* Decorative Elements */}
      <motion.div
        className="solutions-dots dots-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="solutions-dots dots-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <div className="solutions-container">
        {/* ================= HEADER ================= */}
        <motion.div
          className="solutions-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="section-label-small-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR SOLUTIONS
          </motion.div>

          <h2>
            Complete Steel Solutions for
            <strong> Industrial & Commercial </strong>
            Projects
          </h2>

          <p>
            From engineering to execution, we deliver high-quality steel
            solutions that power your projects and drive your success.
          </p>
        </motion.div>

        {/* ================= SOLUTION GRID ================= */}
        <div className="solutions-grid">
          {Solution.map((item, index) => (
            <motion.div
              className={`solution-card ${item.theme}`}
              key={item.number}
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? 60 : -60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
            >
              {/* Image */}
              <motion.div
                className="solution-image"
                whileHover="hover"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  variants={{
                    hover: {
                      scale: 1.06,
                      transition: { duration: 0.5 },
                    },
                  }}
                />

                <motion.div
                  className="number-circle"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.25,
                    type: "spring",
                  }}
                >
                  {item.number}
                </motion.div>

                <div className="image-corner" />
              </motion.div>

              {/* Content */}
              <div className="solution-content">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.15,
                  }}
                >
                  {item.title}
                </motion.h3>

                <motion.div
                  className="small-line"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.25,
                  }}
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.3,
                  }}
                >
                  {item.description}
                </motion.p>

                <motion.a
                  className="solution-explore-btn"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.4,
                  }}
                  whileHover={{ x: 6 }}
                  onClick={() => handleExplore(item.slug)}
                  style={{ cursor: "pointer" }}
                >
                  {item.link}
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}