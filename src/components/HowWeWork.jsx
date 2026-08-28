import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   DATA — work steps
========================================================= */

const workSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your project requirements, site conditions, building application and operational needs.",
  },
  {
    number: "02",
    title: "Engineering",
    description:
      "Our engineering process converts project requirements into practical structural solutions and fabrication drawings.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Project scope, quantities, fabrication requirements and execution schedules are planned before production.",
  },
  {
    number: "04",
    title: "Fabricate",
    description:
      "Structural components are fabricated under controlled manufacturing conditions with quality checks at key stages.",
  },
  {
    number: "05",
    title: "Erect",
    description:
      "Fabricated structures are transported and systematically erected at the project site.",
  },
  {
    number: "06",
    title: "Inspect & Handover",
    description:
      "Final inspections are carried out before project completion and handover.",
  },
];

/* =========================================================
   SECTION: How We Work
========================================================= */

const HowWeWork = () => {
  return (
    <section className="how-work-section">
      <div className="how-work-container">

        {/* HEADING */}
        <motion.div
          className="how-work-heading"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.span
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
            HOW WE WORK
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            From <span className="yellow_text_highlight">Requirement to</span> Completion
          </motion.h2>

          <motion.div
            className="heading-line"
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
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          ></motion.div>
        </motion.div>

        {/* PROCESS */}
        <div className="process-wrapper">
          {workSteps.map((step, index) => (
            <motion.div
              className="work-step"
              key={step.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              {/* STEP NUMBER */}
              <motion.div
                className="step-number"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -15,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.12,
                  type: "spring",
                  stiffness: 180,
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
              >
                <small>{step.number}</small>
                <strong>{step.number}</strong>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                className="step-content"
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
                  delay: 0.2 + index * 0.12,
                }}
              >
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;