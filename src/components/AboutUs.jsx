import React from "react";
import { motion } from "framer-motion";

import AboutBuilding from "../../public/assets/img/about-building.png";
import AboutWelding from "../../public/assets/img/about-welding.png";

const features = [
  { icon: "⚙", title: "Engineering Expertise" },
  { icon: "🛡", title: "Quality & Safety" },
  { icon: "🚚", title: "On-Time Delivery" },
  { icon: "👤", title: "Client Satisfaction" },
];

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="about-section">
      <div className="container">

        {/* LEFT IMAGES */}
        <motion.div
          className="about-images"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Background Shape */}
          <motion.div
            className="shape-bg"
            variants={fadeUp}
          />

          {/* Main Image */}
          <motion.div
            className="main-img"
            variants={imageVariants}
          >
            <img
              src={AboutBuilding}
              alt="Engineering Steel Building"
            />
          </motion.div>

          {/* Small Image */}
          <motion.div
            className="small-img"
            variants={imageVariants}
          >
            <img
              src={AboutWelding}
              alt="Steel Welding"
            />
          </motion.div>

          {/* Play Button */}
          <motion.div
            className="play-btn"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.7,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            ▶
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span
            className="sub-title"
            variants={fadeUp}
          >
            ABOUT US
          </motion.span>

          <motion.h2 variants={fadeUp}>
            Engineering Steel Structures.
            <span>Delivering Industrial Growth.</span>
          </motion.h2>

          <motion.p variants={fadeUp}>
            Sibi Global Corporation is an engineering and structural steel
            solutions company focused on delivering reliable PEB structures,
            fabrication, industrial sheds, mezzanine floors and related
            construction solutions.
          </motion.p>

          <motion.p variants={fadeUp}>
            Our approach combines engineering expertise, controlled
            fabrication and systematic site execution to create strong,
            functional and efficient industrial infrastructure.
          </motion.p>

          <motion.a
            href="/about-us"
            className="about-btn"
            variants={fadeUp}
            whileHover={{
              x: 8,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Discover Sibi Global →
          </motion.a>
        </motion.div>

        {/* FEATURE BOX */}
        <motion.div
          className="feature-box"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              className="feature-item"
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <motion.div
                className="icon"
                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                }}
              >
                {feature.icon}
              </motion.div>

              <span>{feature.title}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;