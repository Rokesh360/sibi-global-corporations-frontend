import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const contacts = [
  ["☎", "91 7708945267", "Call Us"],
  ["✉", "info@siglobal.com", "Email Us"],
  [
    "●",
    <>No 111, West Street, SIPCOT Industries Kudikadu, Cuddalore-607005.</>,
    "Our Location",
  ],
];

const CertificationCTA = () => {
  return (
    <>
      <section className="cta-section">

        {/* Building Image */}
        <motion.div
          className="building-image"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="building-overlay"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Quote Box */}
        <motion.div
          className="quote-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="quote-shape"
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />

          <div className="quote-content">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Ready to Build
              <br />
              Something Great?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Let's discuss your project requirements.
            </motion.p>

            <motion.a
              href="#"
              className="quote-btn"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Project Quote
              <motion.span whileHover={{ x: 7 }}>→</motion.span>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Details */}
        <div className="contact-details">
          {contacts.map(([icon, title, label], index) => (
            <motion.div
              className="contact-item"
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="contact-icon"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.div>

              <h4>{title}</h4>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>

      </section>
    </>
  );
};

export default CertificationCTA;