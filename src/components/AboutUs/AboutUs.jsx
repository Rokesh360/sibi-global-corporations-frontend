// AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  BadgeCheck,
  Factory,
  Users,
  Settings,
  ShieldCheck,
  Truck,
  HeartHandshake,
} from "lucide-react";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const HERO_STATS = [
  { icon: Building2, value: "250+", label: "Projects Delivered" },
  { icon: BadgeCheck, value: "15+", label: "Years of Experience" },
  { icon: Factory, value: "12,000+", suffix: "MT", label: "Fabrication Capacity" },
  { icon: Users, value: "20+", label: "Industries Served" },
];

const STORY_CARDS = [
  {
    icon: Settings,
    title: "Engineering Expertise",
    body: "Strong engineering capabilities and practical industry knowledge.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety",
    body: "Committed to quality standards and a safe working environment.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    body: "Efficient planning and execution to deliver projects on schedule.",
  },
  {
    icon: HeartHandshake,
    title: "Client Satisfaction",
    body: "Building long-term relationships through reliability and trust.",
  },
];

const IMPACT_STATS = [
  { icon: Building2, value: "250+", label: "Projects Delivered", pct: 85 },
  { icon: Users, value: "20+", label: "Industries Served", pct: 70 },
  { icon: Factory, value: "12,000+", suffix: "MT", label: "Fabrication Capacity", pct: 90 },
  { icon: BadgeCheck, value: "15+", label: "Years of Experience", pct: 78 },
];

/* ---------------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

/* ---------------------------------------------------------
   PROGRESS RING
--------------------------------------------------------- */

function ProgressRing({ pct, icon: Icon, value, suffix, label, index }) {
  const size = 148;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - pct / 100);

  return (
    <motion.div 
      className="ring"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#f2a022"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="ring-content">
        <Icon size={22} className="ring-icon" />
        <div className="ring-value">
          {value}
          {suffix && <span className="ring-suffix"> {suffix}</span>}
        </div>
        <div className="ring-label">{label}</div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function AboutUs() {
  return (
    <div className="sibi-about">
      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <div className="about-hero-container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Engineering Strength.
              <br />
              Building the Future.
            </h1>
            <p>
              We design, fabricate and deliver world-class structural steel solutions 
              that power industries and build a stronger tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Hero Stats */}
        <motion.div 
          className="about-hero-stats"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {HERO_STATS.map(({ icon: Icon, value, suffix, label }, index) => (
            <motion.div 
              className="about-stat" 
              key={label}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="about-stat-value"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {value}
                {suffix && <span className="stat-suffix"> {suffix}</span>}
              </motion.div>
              <div className="about-stat-label">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= OUR STORY SECTION ================= */}
      <section className="about-story">
        <div className="about-story-container">
          <motion.div 
            className="about-story-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="about-badge">OUR STORY</span>
            <h2>
              Engineering Excellence.
              <br />
              <span className="highlight">Delivering Trust.</span>
            </h2>
            <p>
              With a focus on precision engineering and quality workmanship, 
              Sibi Global Corporation has become a trusted partner for businesses 
              across a wide range of industries.
            </p>
            <p>
              We invest in advanced technology, skilled people and efficient processes 
              to ensure every project is executed with accuracy, on time and built to last.
            </p>
            <motion.a 
              href="#" 
              className="about-story-btn"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Learn More About Us <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div 
            className="about-story-right"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STORY_CARDS.map(({ icon: Icon, title, body }, index) => (
              <motion.div 
                className="about-story-card" 
                key={title}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="about-story-icon"
                  whileHover={{ 
                    rotate: 360,
                    backgroundColor: "#f2a022",
                    borderColor: "#f2a022",
                    color: "#fff",
                    transition: { duration: 0.6 }
                  }}
                >
                  <Icon size={28} />
                </motion.div>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="about-story-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= OUR IMPACT SECTION ================= */}
      <section className="about-impact">
        <div className="about-impact-container">
          <motion.div 
            className="about-impact-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="about-badge light">OUR IMPACT</span>
            <h2>
              Numbers That
              <br />
              Reflect <span className="highlight">Our Work</span>
            </h2>
          </motion.div>
          <div className="about-impact-right">
            {IMPACT_STATS.map((s, index) => (
              <ProgressRing key={s.label} {...s} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR COMMITMENT SECTION ================= */}
      <section className="about-commitment">
        <div className="about-commitment-container">
          <motion.div 
            className="about-commitment-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="about-badge">OUR COMMITMENT</span>
            <h2>
              Engineered Today.
              <br />
              <span className="highlight">Stronger Tomorrow.</span>
            </h2>
            <p>
              We are committed to delivering steel structures that support industrial 
              growth, enhance productivity and stand the test of time.
            </p>
            <motion.a 
              href="#" 
              className="about-commitment-btn"
              whileHover={{ 
                backgroundColor: "#f2a022",
                color: "#0b2350",
                x: 5,
                transition: { duration: 0.3 }
              }}
            >
              Let's Build Together <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div 
            className="about-commitment-right"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
              alt="Industrial construction"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}