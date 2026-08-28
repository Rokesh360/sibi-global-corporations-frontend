import React from "react";
import { motion } from "framer-motion";
import WhyChooseImg from "../../public/assets/img/why-choose.png";

const features = [
  {
    icon: "⚙",
    title: "Engineering-Led Approach",
    description:
      "Every project begins with understanding the application, site conditions and structural requirements before developing the right solution.",
  },
  {
    icon: "♙",
    title: "Precision Fabrication",
    description:
      "Controlled fabrication processes help maintain consistency, dimensional accuracy and structural quality.",
  },
  {
    icon: "✓",
    title: "Project-Focused Execution",
    description:
      "We plan fabrication and site activities around project schedules to support efficient execution.",
  },
  {
    icon: "◉",
    title: "Quality Control",
    description:
      "Quality checks are incorporated across material handling, fabrication, assembly and erection stages.",
  },
  {
    icon: "⚒",
    title: "Customised Solutions",
    description:
      "We don't believe every industrial project needs the same structure. Our solutions are developed according to individual project requirements.",
  },
  {
    icon: "⌁",
    title: "Single-Point Coordination",
    description:
      "From engineering and fabrication to site erection, our integrated approach simplifies project coordination.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const featureVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      {/* LEFT IMAGE */}
      <motion.div
        className="why-image"
        initial={{
          opacity: 0,
          x: -100,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={WhyChooseImg}
          alt="SIBI Global Steel Construction"
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.4,
          }}
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <div className="why-content">
        <motion.div
          className="why-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
        >
          {/* LABEL */}
          <motion.span
            className="why-label"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            WHY CHOOSE SIBI GLOBAL
          </motion.span>

          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            Building Stronger Foundations
            <br />
            for Your Business
          </motion.h2>

          {/* FEATURES */}
          <motion.div
            className="why-features"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                className="why-feature"
                key={index}
                variants={featureVariants}
                whileHover={{
                  x: 8,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                {/* ICON */}
                <motion.div
                  className="feature-icon"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <span>{feature.icon}</span>
                </motion.div>

                {/* TEXT */}
                <div className="feature-text">
                  <motion.h3
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {feature.title}
                  </motion.h3>

                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;