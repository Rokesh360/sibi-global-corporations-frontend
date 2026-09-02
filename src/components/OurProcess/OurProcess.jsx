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
  Clipboard,
  Layers,
  Phone,
  Mail,
  MapPin,
  Star,
  Send,
  User,
  MessageSquare,
  Search,
  PenTool as PenToolIcon,
  Calendar,
  Cog,
  Construction,
  ClipboardCheck,
  ChevronRight,
} from "lucide-react";
import OurProcessBannerImg from "../../../public/assets/img/why-choose-banner.jpg";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const PROCESS_STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We begin by understanding your project requirements, site conditions, building application and operational needs.",
    color: "#f2a022",
  },
  {
    number: "02",
    icon: PenToolIcon,
    title: "Engineer",
    description:
      "Our engineering process converts project requirements into practical structural solutions and fabrication drawings.",
    color: "#0b2350",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Plan",
    description:
      "Project scope, quantities, fabrication requirements and execution schedules are planned before production.",
    color: "#f2a022",
  },
  {
    number: "04",
    icon: Cog,
    title: "Fabricate",
    description:
      "Structural components are fabricated under controlled manufacturing conditions with quality checks at key stages.",
    color: "#0b2350",
  },
  {
    number: "05",
    icon: Construction,
    title: "Erect",
    description:
      "Fabricated structures are transported and systematically erected at the project site.",
    color: "#f2a022",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Inspect & Handover",
    description:
      "Final inspections are carried out before project completion and handover.",
    color: "#0b2350",
  },
];
/* ---------------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const processStepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

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
    // Add your form submission logic here
  };

  return (
    <div className="process-page-wrapper">
      {/* ================= BANNER/HERO SECTION ================= */}
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

      {/* ================= PROCESS STEPS ================= */}
      <section className="process-page-steps">
        <div className="process-page-steps-container">
          <motion.div
            className="process-page-steps-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="process-page-badge">OUR PROCESS</span>
            <h2>
              From Requirement <span className="process-page-highlight">to Completion</span>
            </h2>
            <p>
              A systematic approach to steel construction that ensures every
              project is delivered with precision, quality and reliability.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="process-page-timeline">
            {/* Connecting Line */}
            <div className="process-page-timeline-line" />

            <motion.div
              className="process-page-steps-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  className="process-page-step-card"
                  key={step.number}
                  variants={processStepVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="process-page-step-number">{step.number}</div>
                  <motion.div
                    className="process-page-step-icon"
                    whileHover={{
                      rotate: 360,
                      backgroundColor: "#f2a022",
                      borderColor: "#f2a022",
                      color: "#fff",
                      transition: { duration: 0.6 },
                    }}
                  >
                    <step.icon size={28} />
                  </motion.div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="process-page-step-line" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Process Flow Arrows */}
          <motion.div
            className="process-page-flow"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="process-page-flow-item">
              <span className="flow-label">Understand</span>
              <ChevronRight size={20} />
              <span className="flow-label">Engineer</span>
              <ChevronRight size={20} />
              <span className="flow-label">Plan</span>
              <ChevronRight size={20} />
              <span className="flow-label">Fabricate</span>
              <ChevronRight size={20} />
              <span className="flow-label">Erect</span>
              <ChevronRight size={20} />
              <span className="flow-label highlight">Inspect & Handover</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}