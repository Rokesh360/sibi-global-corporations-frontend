import React from "react";
import { motion } from "framer-motion";

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
    title: (
      <>
        Logistics &
        <br />
        Warehousing
      </>
    ),
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
    title: (
      <>
        Engineering &
        <br />
        Heavy Industry
      </>
    ),
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
        {/* HEADING */}
        <motion.div
          className="industries-heading"
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
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
            INDUSTRIES
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            Built for Diverse <div className="yellow_text_highlight">Industrial Requirements</div>
          </motion.h2>

          <motion.div
            className="heading-line"
            initial={{
              opacity: 0,
              scaleX: 0,
              transformOrigin: "left",
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
              delay: 0.3,
            }}
          ></motion.div>
        </motion.div>

        {/* INDUSTRIES GRID */}
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <motion.div
              className="industry-card"
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
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
                transition: {
                  duration: 0.25,
                },
              }}
            >
              {/* IMAGE */}
              <motion.div
                className="industry-image"
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <motion.img
                  src={industry.image}
                  alt={industry.alt}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                className="industry-content"
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
                {/* ICON */}
                <motion.div
                  className="industry-icon"
                  whileHover={{
                    rotate: 360,
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  {industry.icon}
                </motion.div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;