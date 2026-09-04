import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        Welding &
        <br />
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
        Painting &
        <br />
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

export default function Manufacturing () {
  return (
    <section className="manufacturing-section">
      <div className="manufacturing-bg"></div>

      <div className="manufacturing-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="manufacturing-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR MANUFACTURING
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            From Steel to <div className="yellow_text_highlight">Structure</div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            Our fabrication capabilities enable us to transform engineering
            drawings and project requirements into accurately fabricated
            structural components.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/manufacturing" className="manufacturing-btn">
                Explore Our Manufacturing Capabilities

                <motion.span
                  whileHover={{ x: 7 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT PROCESS AREA */}
        <div className="process-area">
          {/* Curved Line */}
          <motion.div
            className="process-curve"
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          ></motion.div>

          {processSteps.map((step, index) => (
            <motion.div
              className={`process-item ${step.position}`}
              key={index}
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="process-icon"
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <span>{step.icon}</span>
              </motion.div>

              <h3>{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};