import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Award,
  ClipboardCheck,
  Users,
} from "lucide-react";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const WHY_CHOOSE_DATA = [
  {
    id: "01",
    icon: Compass,
    title: "Engineering Expertise",
    description: "Practical engineering solutions designed around project requirements.",
  },
  {
    id: "02",
    icon: Award,
    title: "Quality Control",
    description: "Consistent quality throughout fabrication and project execution.",
  },
  {
    id: "03",
    icon: ClipboardCheck,
    title: "Disciplined Execution",
    description: "Planned and coordinated execution from engineering to erection.",
  },
  {
    id: "04",
    icon: Users,
    title: "Client Coordination",
    description: "Close collaboration with clients at every stage of the project.",
  },
];

/* ---------------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function WhyChooseSection() {
  return (
    <>
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left Heading */}
        <motion.div
          className="why-heading"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>
            WHY CHOOSE
            <br />
            SIBI GLOBAL
            <br />
            CORPORATION?
          </h2>
          <span className="heading-line"></span>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="why-cards-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {WHY_CHOOSE_DATA.map((item, index) => (
            <motion.div
              className="why-card"
              key={item.id}
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(12, 35, 67, 0.12)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="card-top">
                <motion.div
                  className="card-icon"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "#f5b316",
                    color: "#0c2343",
                    transition: { duration: 0.6 },
                  }}
                >
                  <item.icon size={26} />
                </motion.div>
                <span className="card-number">{item.id}</span>
              </div>

              <div className="card-content">
                <h3 dangerouslySetInnerHTML={{ __html: item.title.replace(/\n/g, "<br />") }} />
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

          <style>
        {`
          /* =========================================
             WHY CHOOSE SECTION
          ========================================= */

          .why-choose-section {
              width: 100%;
              background: #eef3fa;
              padding: 40px 0;
          }

          .why-choose-container {
              max-width: 1200px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 180px repeat(4, 1fr);
              gap: 26px;
              padding: 40px 0px;
              box-sizing: border-box;
          }

          /* =========================================
             LEFT HEADING
          ========================================= */

          .why-heading {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              padding-left: 0;
          }

          .why-heading h2 {
              margin: 0;
              color: #0c2343;
              font-family: "Poppins", "Arial", sans-serif;
              font-size: 24px;
              line-height: 40px;
              font-weight: 800;
          }

          .heading-line {
              display: block;
              width: 47px;
              height: 3px;
              background: #f5b316;
              margin-top: 15px;
          }

          /* =========================================
             CARDS GRID
          ========================================= */

          .why-cards-grid {
              grid-column: 2 / -1;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 26px;
          }

          /* =========================================
             CARDS
          ========================================= */

          .why-card {
              position: relative;
              background: #ffffff;
              border: 1px solid #d8e0eb;
              border-radius: 10px;
              padding: 0 16px 14px;
              box-sizing: border-box;
              box-shadow: 0 2px 5px rgba(12, 35, 67, 0.04);
              transition: all 0.3s ease;
          }

          .why-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px rgba(12, 35, 67, 0.12);
          }

          /* =========================================
             CARD TOP
          ========================================= */

          .card-top {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 7px;
          }

          .card-icon {
              width: 60px;
              height: 60px;
              margin-top: -30px;
              border-radius: 50%;
              background: #0c2343;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              border: 2px solid #ffffff;
              box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
              transition: all 0.3s ease;
          }

          .card-icon svg {
              width: 26px;
              height: 26px;
          }

          .card-number {
              color: #f5a900;
              font-size: 30px;
              font-weight: 800;
              line-height: 1;
          }

          /* =========================================
             CARD CONTENT
          ========================================= */

          .card-content {
              padding-top: 0;
          }

          .card-content h3 {
              margin: 0 0 10px;
              color: #0c2343;
              font-family: "Poppins", "Arial", sans-serif;
              font-size: 17px;
              line-height: 30px;
              font-weight: 600;
          }

          .card-content p {
              margin: 0;
              color: #182b45;
              font-family: "Poppins", "Arial", sans-serif;
              font-size: 14px;
              line-height: 25px;
              font-weight: 400;
          }

          /* =========================================
             RESPONSIVE - TABLET
          ========================================= */

          @media (max-width: 1100px) {
              .why-choose-container {
                  grid-template-columns: 170px repeat(2, 1fr);
                  gap: 20px;
                  padding: 20px;
              }

              .why-heading {
                  grid-row: span 2;
              }

              .why-cards-grid {
                  grid-column: 2 / -1;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 20px;
              }

              .why-card {
                  min-height: 170px;
              }
          }

          /* =========================================
             RESPONSIVE - MOBILE
          ========================================= */

          @media (max-width: 767px) {
              .why-choose-section {
                  padding: 15px 0;
              }

              .why-choose-container {
                  width: 94%;
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 15px;
                  padding: 20px 15px;
                  border-radius: 10px;
              }

              .why-heading {
                  grid-column: 1 / -1;
                  padding: 5px 5px 12px;
                  align-items: center;
                  text-align: center;
              }

              .why-heading h2 {
                  font-size: 21px;
                  line-height: 1.3;
              }

              .heading-line {
                  margin-top: 12px;
              }

              .why-cards-grid {
                  grid-column: 1 / -1;
                  grid-template-columns: 1fr 1fr;
                  gap: 15px;
              }

              .why-card {
                  min-height: 190px;
                  padding: 0 12px 14px;
              }

              .card-icon {
                  width: 52px;
                  height: 52px;
                  margin-top: -8px;
              }

              .card-icon svg {
                  width: 22px;
                  height: 22px;
              }

              .card-number {
                  font-size: 22px;
              }

              .card-content h3 {
                  font-size: 14px;
                  line-height: 24px;
              }

              .card-content p {
                  font-size: 10px;
                  line-height: 1.45;
              }
          }

          /* =========================================
             RESPONSIVE - SMALL MOBILE
          ========================================= */

          @media (max-width: 480px) {
              .why-choose-container {
                  grid-template-columns: 1fr;
                  gap: 18px;
              }

              .why-heading {
                  grid-column: auto;
              }

              .why-cards-grid {
                  grid-column: auto;
                  grid-template-columns: 1fr;
                  gap: 18px;
              }

              .why-card {
                  min-height: 160px;
              }

              .card-content h3 {
                  font-size: 15px;
              }

              .card-content p {
                  font-size: 11px;
              }
          }
        `}
      </style>
      </>
  );
}