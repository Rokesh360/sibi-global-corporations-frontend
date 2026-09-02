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
  Eye,
  Ruler,
  Activity,
  Box,
  PaintRoller,
  ClipboardCheck,
  Shield,
  AlertTriangle,
  Heart,
  ThumbsUp,
} from "lucide-react";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const QUALITY_CHECKS = [
  {
    icon: Search,
    title: "Material Inspection",
    description:
      "Verification of incoming materials against project requirements.",
  },
  {
    icon: Ruler,
    title: "Dimensional Inspection",
    description:
      "Checking fabricated components for dimensional accuracy.",
  },
  {
    icon: Activity,
    title: "Welding Quality",
    description:
      "Inspection of welding activities and fabricated connections.",
  },
  {
    icon: Box,
    title: "Assembly Inspection",
    description:
      "Verification of structural assemblies before dispatch.",
  },
  {
    icon: PaintRoller,
    title: "Surface Treatment",
    description:
      "Inspection of surface preparation and specified coating systems.",
  },
  {
    icon: ClipboardCheck,
    title: "Final Inspection",
    description:
      "Final quality checks before project completion.",
  },
];

const SAFETY_PRACTICES = [
  {
    icon: Shield,
    title: "Safety-First Culture",
    description:
      "We prioritise safety in every aspect of our operations, from fabrication to site erection.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description:
      "Comprehensive risk assessments are conducted before any project activity begins.",
  },
  {
    icon: HardHat,
    title: "PPE Compliance",
    description:
      "All team members are equipped with and required to use appropriate personal protective equipment.",
  },
  {
    icon: Users,
    title: "Safety Training",
    description:
      "Regular safety training and awareness programs for all employees and site workers.",
  },
  {
    icon: Clipboard,
    title: "Safety Audits",
    description:
      "Routine safety audits and inspections to identify and address potential hazards.",
  },
  {
    icon: Heart,
    title: "Health & Wellbeing",
    description:
      "Commitment to the health and wellbeing of our workforce through safe working conditions.",
  },
];

const KEY_STATS = [
  { icon: ShieldCheck, value: "100%", label: "Safety Compliance" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "50+", label: "Trained Professionals" },
  { icon: Clock, value: "98%", label: "Quality Approval Rate" },
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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function QualitySafety() {
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
    <div className="quality-page-wrapper">
      {/* ================= BANNER/HERO SECTION ================= */}
      <section className="quality-page-hero">
        <div className="quality-page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=600&fit=crop"
            alt="Industrial steel construction"
          />
          <div className="quality-page-hero-bg-overlay" />
        </div>

        <div className="quality-page-hero-container">
          {/* Left Side - Content */}
          <motion.div
            className="quality-page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="quality-page-hero-badge">
              <span>✦ Quality & Safety</span>
            </div>
            <h1>
              Quality Built Into
              <br />
              <span className="quality-page-highlight">Every Stage</span>
            </h1>
            <p>
              Structural performance depends on quality at every stage — from
              material selection and fabrication to transportation and site erection.
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="quality-page-hero-form"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="quality-page-form-card">
              <div className="quality-page-form-header">
                <h3>Get a Free Quote</h3>
                <p>Fill in the form and we'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="quality-page-form">
                <div className="quality-page-form-group">
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
                <div className="quality-page-form-group">
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
                <div className="quality-page-form-group">
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
                <div className="quality-page-form-group">
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
                  className="quality-page-form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Request <Send size={16} />
                </motion.button>
              </form>
              <div className="quality-page-form-footer">
                <span>🔒 Your information is secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="quality-page-stats">
        <div className="quality-page-stats-container">
          {KEY_STATS.map(({ icon: Icon, value, suffix, label }, index) => (
            <motion.div
              className="quality-page-stat-item"
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Icon size={32} className="quality-page-stat-icon" />
              <div className="quality-page-stat-value">
                {value}
                {suffix && <span> {suffix}</span>}
              </div>
              <div className="quality-page-stat-label">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= QUALITY CHECKS SECTION ================= */}
      <section className="quality-page-checks">
        <div className="quality-page-checks-container">
          <motion.div
            className="quality-page-checks-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="quality-page-badge">OUR QUALITY FOCUS</span>
            <h2>
              Quality <span className="quality-page-highlight">At Every Stage</span>
            </h2>
            <p>
              From material selection to final inspection, we ensure quality is
              built into every step of the process.
            </p>
          </motion.div>

          <motion.div
            className="quality-page-checks-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {QUALITY_CHECKS.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                className="quality-page-check-card"
                key={title}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="quality-page-check-icon"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "#f2a022",
                    borderColor: "#f2a022",
                    color: "#fff",
                    transition: { duration: 0.6 },
                  }}
                >
                  <Icon size={28} />
                </motion.div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="quality-page-check-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SAFETY SECTION ================= */}
      <section className="quality-page-safety">
        <div className="quality-page-safety-container">
          <motion.div
            className="quality-page-safety-header"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="quality-page-badge light">SAFETY</span>
            <h2>
              Safety Is Part of the
              <br />
              <span className="quality-page-highlight">Execution Plan</span>
            </h2>
            <p>
              We emphasise safe working practices during fabrication,
              transportation and site erection. Project-specific safety requirements
              are considered throughout execution.
            </p>
          </motion.div>

          <motion.div
            className="quality-page-safety-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SAFETY_PRACTICES.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                className="quality-page-safety-card"
                key={title}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="quality-page-safety-icon"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "#f2a022",
                    borderColor: "#f2a022",
                    color: "#fff",
                    transition: { duration: 0.6 },
                  }}
                >
                  <Icon size={28} />
                </motion.div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="quality-page-safety-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}