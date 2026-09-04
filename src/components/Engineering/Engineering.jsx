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
  Briefcase,
  ChevronRight,
  Calendar,
  MapPin as MapPinIcon,
  Building,
  Ruler,
  ClipboardCheck,
  ExternalLink,
  Download,
  Share2,
  Printer,
  ChevronLeft,
  CheckCircle2,
  Circle,
  Cpu,
  FileText,
  Grid,
  Maximize,
  Minimize,
  RefreshCw,
  PenTool as PenToolIcon,
  Calculator,
  Layout,
  Compass,
  Box,
} from "lucide-react";
import EngineeringBannerImg from "../../../public/assets/img/solutions-banner.png";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const ENGINEERING_SERVICES = [
  {
    icon: PenToolIcon,
    title: "Structural Design",
    description: "Development of structural systems that meet project requirements and building codes.",
  },
  {
    icon: Calculator,
    title: "Structural Analysis",
    description: "Comprehensive analysis of structural behavior under various load conditions.",
  },
  {
    icon: FileText,
    title: "Fabrication Drawings",
    description: "Detailed drawings for fabrication that communicate design intent clearly.",
  },
  {
    icon: Grid,
    title: "Shop Drawings",
    description: "Precise shop drawings for accurate fabrication and assembly.",
  },
  {
    icon: Maximize,
    title: "Connection Detailing",
    description: "Detailed design of structural connections for safety and performance.",
  },
  {
    icon: Box,
    title: "Material Planning",
    description: "Efficient material planning to optimize cost and availability.",
  },
  {
    icon: RefreshCw,
    title: "Structural Optimisation",
    description: "Optimisation of structural systems for efficiency and cost-effectiveness.",
  },
  {
    icon: Compass,
    title: "Erection Planning",
    description: "Planning erection sequences to ensure safety and efficiency on site.",
  },
];

const KEY_STATS = [
  { icon: Building2, value: "250+", label: "Projects Engineered" },
  { icon: Users, value: "15+", label: "Engineering Team" },
  { icon: Clock, value: "12+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Quality Assured" },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding project requirements, site conditions, and structural needs.",
  },
  {
    number: "02",
    title: "Conceptual Design",
    description: "Developing preliminary structural concepts and systems.",
  },
  {
    number: "03",
    title: "Detailed Engineering",
    description: "Comprehensive structural analysis and design development.",
  },
  {
    number: "04",
    title: "Drawing & Detailing",
    description: "Preparation of fabrication and shop drawings.",
  },
  {
    number: "05",
    title: "Review & Optimisation",
    description: "Reviewing designs and optimising for efficiency.",
  },
  {
    number: "06",
    title: "Final Approval",
    description: "Approval and release of engineering documentation.",
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
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function Engineering() {
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
    <div className="engineering-page-wrapper">
      {/* ================= BANNER/HERO SECTION ================= */}
      <section className="engineering-page-hero">
        <div className="engineering-page-hero-bg">
          <img
            src={EngineeringBannerImg}
            alt="Engineering banner"
          />
          <div className="engineering-page-hero-bg-overlay" />
        </div>

        <div className="engineering-page-hero-container">
          {/* Left Side - Content */}
          <motion.div
            className="engineering-page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="engineering-page-hero-badge">
              <span>✦ Engineering</span>
            </div>
            <h1>
              Engineering That Supports
              <br />
              <span className="engineering-page-highlight">Better Structures</span>
            </h1>
            <p>
              Good steel structures begin long before fabrication. Our engineering
              approach focuses on developing structurally sound, practical and
              project-specific solutions.
            </p>

            <div className="engineering-page-hero-stats">
              {KEY_STATS.map(({ icon: Icon, value, label }, index) => (
                <div className="engineering-page-stat" key={label}>
                  <Icon size={28} className="stat-icon" />
                  <div>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="engineering-page-hero-form"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="engineering-page-form-card">
              <div className="engineering-page-form-header">
                <h3>Discuss Your Structural Requirement</h3>
                <p>Fill in the form and we'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="engineering-page-form">
                <div className="engineering-page-form-group">
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
                <div className="engineering-page-form-group">
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
                <div className="engineering-page-form-group">
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
                <div className="engineering-page-form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about your structural requirements"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="engineering-page-form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Request <Send size={16} />
                </motion.button>
              </form>
              <div className="engineering-page-form-footer">
                <span>🔒 Your information is secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ENGINEERING SERVICES ================= */}
      <section className="engineering-page-services">
        <div className="engineering-page-services-container">
          <motion.div
            className="engineering-page-services-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="engineering-page-badge">ENGINEERING SERVICES</span>
            <h2>
              Comprehensive <span className="engineering-page-highlight">Engineering</span>
            </h2>
            <p>
              From structural design to erection planning, we provide complete
              engineering services that ensure project success.
            </p>
          </motion.div>

          <motion.div
            className="engineering-page-services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ENGINEERING_SERVICES.map((service, index) => (
              <motion.div
                className="engineering-page-service-card"
                key={service.title}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="engineering-page-service-icon"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "#f2a022",
                    borderColor: "#f2a022",
                    color: "#fff",
                    transition: { duration: 0.6 },
                  }}
                >
                  <service.icon size={28} />
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="engineering-page-service-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ENGINEERING PROCESS ================= */}
      <section className="engineering-page-process">
        <div className="engineering-page-process-container">
          <motion.div
            className="engineering-page-process-header"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="engineering-page-badge light">OUR PROCESS</span>
            <h2>
              Engineering <span className="engineering-page-highlight">Workflow</span>
            </h2>
            <p>
              A systematic approach to engineering that ensures quality
              and precision at every stage.
            </p>
          </motion.div>

          <motion.div
            className="engineering-page-process-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                className="engineering-page-process-card"
                key={step.number}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="engineering-page-process-number">{step.number}</div>
                <motion.div
                  className="engineering-page-process-icon"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "#f2a022",
                    borderColor: "#f2a022",
                    color: "#fff",
                    transition: { duration: 0.6 },
                  }}
                >
                  {index === 0 && <Target size={24} />}
                  {index === 1 && <PenToolIcon size={24} />}
                  {index === 2 && <Calculator size={24} />}
                  {index === 3 && <FileText size={24} />}
                  {index === 4 && <RefreshCw size={24} />}
                  {index === 5 && <CheckCircle size={24} />}
                </motion.div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="engineering-page-process-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}