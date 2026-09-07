import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  Users,
  Clock,
  ShieldCheck,
  Settings,
  Wrench,
  Target,
  Award,
  Zap,
  TrendingUp,
  CheckCircle,
  PenTool,
  HardHat,
  Truck,
  ClipboardCheck,
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Search,
  Calendar,
  Cog,
  Construction,
  ChevronRight,
  Ruler,
  PackageCheck,
  Gauge,
} from "lucide-react";

import OurProcessBannerImg from "../../../public/assets/img/why-choose-banner.jpg";

const PROCESS_STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    shortTitle: "Project Understanding",
    description:
      "We begin by understanding your project requirements, site conditions, building application and operational needs.",
    outcome:
      "Clear project requirements and execution expectations",
    color: "#f2a022",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Engineer",
    shortTitle: "Engineering & Design",
    description:
      "Our engineering process converts project requirements into practical structural solutions, detailed designs and fabrication drawings.",
    outcome:
      "Optimized structural design and fabrication drawings",
    color: "#0b2350",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Plan",
    shortTitle: "Planning & Scheduling",
    description:
      "Project scope, quantities, fabrication requirements, resources and execution schedules are planned before production begins.",
    outcome:
      "A controlled and efficient project execution plan",
    color: "#f2a022",
  },
  {
    number: "04",
    icon: Cog,
    title: "Fabricate",
    shortTitle: "Controlled Fabrication",
    description:
      "Structural components are fabricated under controlled manufacturing conditions with quality checks performed at key production stages.",
    outcome:
      "Accurate components manufactured to specification",
    color: "#0b2350",
  },
  {
    number: "05",
    icon: Construction,
    title: "Erect",
    shortTitle: "Site Erection",
    description:
      "Fabricated structures are transported to site and systematically erected using coordinated installation and safety procedures.",
    outcome:
      "Safe, systematic and efficient site installation",
    color: "#f2a022",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Inspect & Handover",
    shortTitle: "Final Inspection",
    description:
      "Final inspections, quality checks and project verification are completed before successful project completion and handover.",
    outcome:
      "Verified quality and project-ready handover",
    color: "#0b2350",
  },
];

const APPROACH_ITEMS = [
  {
    icon: Ruler,
    title: "Precision Engineering",
    description:
      "Every structural solution is developed with practical engineering, accuracy and project-specific requirements.",
  },
  {
    icon: Factory,
    title: "Controlled Fabrication",
    description:
      "Manufacturing is carried out through systematic processes with quality checks throughout production.",
  },
  {
    icon: HardHat,
    title: "Safe Installation",
    description:
      "Site erection follows coordinated execution practices focused on safety, accuracy and productivity.",
  },
  {
    icon: PackageCheck,
    title: "Quality Assurance",
    description:
      "Inspection and verification remain integral throughout the complete project lifecycle.",
  },
];

const STATS = [
  {
    icon: Building2,
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Clock,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Factory,
    value: 12000,
    suffix: "+",
    label: "MT Fabrication Capacity",
  },
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "Industries Served",
  },
];

const fadeInUp = {
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

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function CountUp({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  React.useEffect(() => {
    if (!started) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

export default function OurProcess() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="process-page-wrapper">

      {/* ================= HERO ================= */}

      <section className="process-page-hero">
        <div className="process-page-hero-bg">
          <img
            src={OurProcessBannerImg}
            alt="Industrial steel construction"
          />
          <div className="process-page-hero-bg-overlay" />
        </div>

        <div className="process-page-hero-container">
          {/* Left Side - Content */}
          <motion.div
            className="process-page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="process-page-hero-badge">
              <span>✦ Our Process</span>
            </div>
            <h1>
              From Requirement
              <br />
              <span className="process-page-highlight">to Completion</span>
            </h1>
            <p>
              A systematic approach to steel construction that ensures every
              project is delivered with precision, quality and reliability.
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="process-page-hero-form"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="process-page-form-card">
              <div className="process-page-form-header">
                <h3>Get a Free Quote</h3>
                <p>Fill in the form and we'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="process-page-form">
                <div className="process-page-form-group">
                  <label htmlFor="name">
                    <User size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="process-page-form-group">
                  <label htmlFor="email">
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="process-page-form-group">
                  <label htmlFor="phone">
                    <Phone size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="process-page-form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about your project requirements"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="process-page-form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Request <Send size={16} />
                </motion.button>
              </form>
              <div className="process-page-form-footer">
                <span>🔒 Your information is secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS INTRO ================= */}

      <section className="process-page-intro">

        <div className="process-page-intro-container">

          <motion.div
            className="process-page-intro-heading"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <span className="process-page-section-label">
              HOW WE WORK
            </span>

            <h2>
              A Process Built Around
              <span> Precision</span>
            </h2>

            <p>
              From the first conversation to final handover, every stage
              is carefully coordinated to maintain quality, safety and
              project efficiency.
            </p>

          </motion.div>

          <motion.div
            className="process-page-intro-features"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div
              className="process-page-intro-feature"
              variants={fadeInUp}
            >
              <Target />
              <div>
                <strong>Clear Requirements</strong>
                <span>Every project starts with understanding.</span>
              </div>
            </motion.div>

            <motion.div
              className="process-page-intro-feature"
              variants={fadeInUp}
            >
              <Gauge />
              <div>
                <strong>Controlled Execution</strong>
                <span>Every stage follows a defined process.</span>
              </div>
            </motion.div>

            <motion.div
              className="process-page-intro-feature"
              variants={fadeInUp}
            >
              <Award />
              <div>
                <strong>Verified Quality</strong>
                <span>Quality checks remain part of every stage.</span>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ================= MAIN PROCESS TIMELINE ================= */}

      <section className="process-page-main">

        <div className="process-page-main-container">

          <motion.div
            className="process-page-main-heading"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <span>OUR SIX-STAGE PROCESS</span>

            <h2>
              From Concept
              <strong> to Completion</strong>
            </h2>

            <p>
              A structured project journey where engineering, fabrication,
              installation and quality assurance work together.
            </p>

          </motion.div>

          <div className="process-page-timeline">

            <div className="process-page-timeline-center" />

            {PROCESS_STEPS.map((step, index) => {

              const Icon = step.icon;

              const isEven = index % 2 === 0;

              return (
                <motion.div
                  className={`process-timeline-item ${isEven ? "timeline-left" : "timeline-right"
                    }`}
                  key={step.number}
                  variants={isEven ? fadeInLeft : fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >

                  <div className="process-timeline-content">

                    <div className="process-timeline-top">

                      <span className="process-timeline-number">
                        {step.number}
                      </span>

                      <span className="process-timeline-label">
                        STAGE {step.number}
                      </span>

                    </div>

                    <div className="process-timeline-icon">
                      <Icon size={28} />
                    </div>

                    <span className="process-timeline-subtitle">
                      {step.shortTitle}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    <div className="process-timeline-outcome">

                      <CheckCircle size={17} />

                      <div>
                        <small>KEY OUTCOME</small>
                        <strong>{step.outcome}</strong>
                      </div>

                    </div>

                  </div>

                  <div className="process-timeline-node">
                    <span>{step.number}</span>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= EXECUTION APPROACH ================= */}

      <section className="process-page-approach">

        <div className="process-page-approach-container">

          <motion.div
            className="process-page-approach-heading"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <span>OUR EXECUTION APPROACH</span>

            <h2>
              What Makes Our Process
              <strong> Reliable</strong>
            </h2>

            <p>
              We combine engineering discipline, manufacturing control,
              site safety and quality assurance to create a dependable
              project delivery process.
            </p>

          </motion.div>

          <motion.div
            className="process-page-approach-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {APPROACH_ITEMS.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  className="process-approach-card"
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                >

                  <div className="process-approach-number">
                    0{index + 1}
                  </div>

                  <div className="process-approach-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="process-approach-arrow">
                    <ArrowRight size={18} />
                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="process-page-stats">

        <div className="process-page-stats-container">

          {STATS.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <motion.div
                className="process-page-stat-item"
                key={stat.label}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
              >

                <div className="process-page-stat-icon">
                  <Icon size={24} />
                </div>

                <div className="process-page-stat-value">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>

                <div className="process-page-stat-label">
                  {stat.label}
                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="process-page-final-cta">

        <div className="process-page-final-cta-bg" />

        <div className="process-page-final-cta-container">

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <span className="process-page-final-label">
              LET'S BUILD TOGETHER
            </span>

            <h2>
              Have a Project
              <br />
              <span>in Mind?</span>
            </h2>

            <p>
              Talk to our team about your structural steel requirements
              and discover how we can take your project from requirement
              to completion.
            </p>

            <div className="process-page-final-buttons">

              <a
                href="#quote"
                className="process-final-btn primary"
              >
                Start Your Project
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+919999999999"
                className="process-final-btn secondary"
              >
                <Phone size={17} />
                Talk to Our Team
              </a>

            </div>

          </motion.div>

          <motion.div
            className="process-page-final-card"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <div className="process-final-card-icon">
              <Wrench size={30} />
            </div>

            <span>PROJECT DELIVERY</span>

            <strong>
              Engineering
              <br />
              + Fabrication
              <br />
              + Erection
            </strong>

            <div className="process-final-card-line" />

            <small>
              One coordinated process.
              One reliable partner.
            </small>

          </motion.div>

        </div>

      </section>

    </div>
  );
}