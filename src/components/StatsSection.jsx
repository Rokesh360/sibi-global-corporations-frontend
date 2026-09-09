import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    capacity: 0,
    industries: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const statsData = [
    {
      id: "projects",
      icon: "♙",
      targetNumber: 250,
      displayNumber: "250+",
      title: "Projects Delivered",
      suffix: "+",
    },
    {
      id: "experience",
      icon: "◎",
      targetNumber: 15,
      displayNumber: "15+",
      title: "Years of Experience",
      suffix: "+",
    },
    {
      id: "capacity",
      icon: "♙",
      targetNumber: 12000,
      displayNumber: "12,000+",
      title: "Fabrication Capacity",
      suffix: "+ MT",
    },
    {
      id: "industries",
      icon: "♧",
      targetNumber: 20,
      displayNumber: "20+",
      title: "Industries Served",
      suffix: "+",
    },
  ];

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Capture the current ref value
    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }

      observer.disconnect();
    };
  }, [hasAnimated]);

  // Start counting animation
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      projects: 250,
      experience: 15,
      capacity: 12000,
      industries: 20,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(targets.projects * progress),
        experience: Math.floor(targets.experience * progress),
        capacity: Math.floor(targets.capacity * progress),
        industries: Math.floor(targets.industries * progress),
      });

      if (currentStep >= steps) {
        setCounts({
          projects: targets.projects,
          experience: targets.experience,
          capacity: targets.capacity,
          industries: targets.industries,
        });

        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  const getCount = (id) => {
    switch (id) {
      case "projects":
        return counts.projects;
      case "experience":
        return counts.experience;
      case "capacity":
        return counts.capacity;
      case "industries":
        return counts.industries;
      default:
        return 0;
    }
  };

  const getSuffix = (stat) => {
    if (stat.id === "capacity") return " MT";
    if (stat.suffix) return stat.suffix;
    return "";
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <React.Fragment key={stat.id}>
            {/* Stat Item */}
            <motion.div
              className="stat-box"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              {/* Icon */}
              <motion.div
                className="stat-icon"
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -30,
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
                  duration: 0.6,
                  delay: 0.2 + index * 0.15,
                  type: "spring",
                  stiffness: 180,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                }}
              >
                {stat.icon}
              </motion.div>

              {/* Number */}
              <motion.div
                className="stat-number"
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
                  delay: 0.25 + index * 0.15,
                }}
              >
                {formatNumber(getCount(stat.id))}
                <small>{getSuffix(stat)}</small>
              </motion.div>

              {/* Title */}
              <motion.div
                className="stat-title"
                initial={{
                  opacity: 0,
                  y: 15,
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
                  delay: 0.35 + index * 0.15,
                }}
              >
                {stat.title}
              </motion.div>
            </motion.div>

            {/* Divider */}
            {index < statsData.length - 1 && (
              <motion.div
                className="stat-divider"
                initial={{
                  opacity: 0,
                  scaleY: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.15,
                }}
              ></motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};