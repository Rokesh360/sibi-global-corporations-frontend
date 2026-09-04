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
  Scissors,
  Layers as LayersIcon,
  Flame,
  PaintRoller,
  SprayCan,
  ClipboardCheck as ClipboardCheckIcon,
  Package,
  Headphones,
} from "lucide-react";
import ManufacturingBannerImg from "../../../public/assets/img/solutions-banner.png";
import SteelCuttingImg from "../../../public/assets/img/manufaturing/manufacturing.png";
import PlateProcessingImg from "../../../public/assets/img/manufaturing/plate-processing.png";
import WeldingAndAssemblyImg from "../../../public/assets/img/manufaturing/steel-fabrication.png";
import SurfacePreparationImg from "../../../public/assets/img/manufaturing/manufacturing.png";
import PaintingAndCoatingImg from "../../../public/assets/img/manufaturing/painting-coating.png";
import QualityInspectionImg from "../../../public/assets/img/manufaturing/quality-inspection.png";
import PackingAndLoadingImg from "../../../public/assets/img/manufaturing/painting-coating.png";
import OnSiteSupportImg from "../../../public/assets/img/manufaturing/on-site-support.png";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const CAPABILITIES = [
  {
    id: "01",
    title: "Steel Cutting",
    description:
      "Accurate cutting of structural steel components according to approved fabrication requirements.",
    image: SteelCuttingImg,
    badgeColor: "navy",
    icon: Scissors,
  },
  {
    id: "02",
    title: "Plate Processing",
    description:
      "Processing of steel plates and components for structural applications.",
    image: PlateProcessingImg,
    badgeColor: "gold",
    icon: LayersIcon,
  },
  {
    id: "03",
    title: "Welding & Assembly",
    description:
      "Controlled welding and assembly processes for structural components.",
    image: WeldingAndAssemblyImg,
    badgeColor: "navy",
    icon: Flame,
  },
  {
    id: "04",
    title: "Surface Preparation",
    description:
      "Preparation of fabricated steel surfaces for specified finishing systems.",
    image: SurfacePreparationImg,
    badgeColor: "gold",
    icon: PaintRoller,
  },
  {
    id: "05",
    title: "Painting & Coating",
    description:
      "Protective coating solutions based on project requirements.",
    image: PaintingAndCoatingImg,
    badgeColor: "navy",
    icon: SprayCan,
  },
  {
    id: "06",
    title: "Quality Inspection",
    description:
      "Inspection at key stages before material moves to the next phase.",
    image: QualityInspectionImg,
    badgeColor: "gold",
    icon: ClipboardCheckIcon,
  },
  {
    id: "07",
    title: "Packing & Loading",
    description:
      "Proper packing and loading to ensure safe transportation to site.",
    image: PackingAndLoadingImg,
    badgeColor: "navy",
    icon: Package,
  },
  {
    id: "08",
    title: "On-Site Support",
    description:
      "Technical support during erection and installation for seamless project execution.",
    image: OnSiteSupportImg,
    badgeColor: "gold",
    icon: Headphones,
  },
];

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Review & Planning",
    icon: "review",
  },
  {
    id: "02",
    title: "Engineering & Design Input",
    icon: "design",
  },
  {
    id: "03",
    title: "Material Preparation",
    icon: "material",
    active: true,
  },
  {
    id: "04",
    title: "Fabrication & Assembly",
    icon: "fabrication",
  },
  {
    id: "05",
    title: "Inspection & Quality Control",
    icon: "inspection",
    active: true,
  },
  {
    id: "06",
    title: "Packing & Dispatch",
    icon: "packing",
  },
  {
    id: "07",
    title: "Delivery & Site Installation",
    icon: "delivery",
    active: true,
  },
];

const WHY_CHOOSE_FEATURES = [
  {
    icon: "gear",
    title: "Advanced Technology",
    description: "State-of-the-art machinery for accurate fabrication.",
  },
  {
    icon: "people",
    title: "Skilled Professionals",
    description: "Experienced team ensuring high-quality outcomes.",
  },
  {
    icon: "shield",
    title: "Quality Assurance",
    description: "Strict quality checks at every stage of manufacturing.",
  },
  {
    icon: "custom",
    title: "Custom Solutions",
    description: "Tailored fabrication to meet unique project requirements.",
  },
  {
    icon: "clock",
    title: "Timely Delivery",
    description: "Efficient planning and execution for on-time project completion.",
  },
  {
    icon: "safety",
    title: "Safety First",
    description: "Committed to highest safety standards in every process.",
  },
];

const KEY_STATS = [
  { icon: Building2, value: "250+", label: "Projects Completed" },
  { icon: Factory, value: "12,000+", suffix: "MT", label: "Steel Fabricated" },
  { icon: Users, value: "50+", label: "Expert Team" },
  { icon: Clock, value: "98%", label: "On-Time Delivery" },
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

export default function Manufacturing() {
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

  // Helper function to render process icons
  const renderProcessIcon = (iconType) => {
    const icons = {
      review: (
        <svg viewBox="0 0 64 64">
          <rect x="17" y="12" width="30" height="40" rx="3" />
          <path d="M24 8h16" />
          <path d="M25 24l3 3 6-7" />
          <path d="M25 34l3 3 6-7" />
          <path d="M25 44l3 3 6-7" />
        </svg>
      ),
      design: (
        <svg viewBox="0 0 64 64">
          <path d="M14 48V17l18-7 18 7v31" />
          <path d="M14 48h36" />
          <path d="M24 28h16" />
          <path d="M24 36h16" />
          <path d="M20 44l7-7 6 5 11-13" />
        </svg>
      ),
      material: (
        <svg viewBox="0 0 64 64">
          <path d="M15 45h34" />
          <path d="M25 42l6-27 8 10-7 5 8 4-9 9" />
          <path d="M19 51h26" />
        </svg>
      ),
      fabrication: (
        <svg viewBox="0 0 64 64">
          <path d="M13 45h38" />
          <path d="M19 41l7-19" />
          <path d="M26 22l8 10" />
          <path d="M34 32l8-13" />
          <path d="M42 19l5 4" />
          <path d="M29 32l-7 10" />
          <path d="M39 36l7 6" />
        </svg>
      ),
      inspection: (
        <svg viewBox="0 0 64 64">
          <path d="M32 8l19 7v15c0 12-7 21-19 27-12-6-19-15-19-27V15z" />
          <path d="M23 31l6 6 12-14" />
        </svg>
      ),
      packing: (
        <svg viewBox="0 0 64 64">
          <rect x="10" y="19" width="34" height="25" rx="2" />
          <path d="M44 27h7l6 7v10H44z" />
          <circle cx="21" cy="48" r="5" />
          <circle cx="48" cy="48" r="5" />
        </svg>
      ),
      delivery: (
        <svg viewBox="0 0 64 64">
          <path d="M10 49h44" />
          <path d="M18 49V13h28" />
          <path d="M46 13v19" />
          <path d="M46 32h8" />
          <path d="M54 32v8" />
          <path d="M50 40h8" />
          <path d="M21 21h18" />
        </svg>
      ),
    };
    return icons[iconType] || icons.review;
  };

  // Helper function to render why choose icons
  const renderWhyChooseIcon = (iconType) => {
    const icons = {
      gear: (
        <svg viewBox="0 0 64 64">
          <path
            d="M26 5h12l2 8c2 .7 4 1.7 6 3.1l7-4.1 8.5 8.5-4.1 7c1.4 2 2.4 4.1 3.1 6.5l8 2v12l-8 2c-.7 2.4-1.7 4.5-3.1 6.5l4.1 7-8.5 8.5-7-4.1c-2 1.4-4 2.4-6 3.1l-2 8H26l-2-8c-2-.7-4-1.7-6-3.1l-7 4.1L2.5 54l4.1-7c-1.4-2-2.4-4.1-3.1-6.5l-8-2v-12l8-2c.7-2.4 1.7-4.5 3.1-6.5l-4.1-7L11 2.5l7 4.1c2-1.4 4-2.4 6-3.1z"
            transform="translate(8 0) scale(.75)"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
      people: (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M15 53c1-11 8-17 17-17s16 6 17 17" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M21 35l-7 6v12M43 35l7 6v12" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M26 29h12" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
      shield: (
        <svg viewBox="0 0 64 64">
          <path d="M32 5L52 12v15c0 13-8 24-20 31C20 51 12 40 12 27V12z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M23 32l6 6 13-15" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
      custom: (
        <svg viewBox="0 0 64 64">
          <path d="M20 28h24l8 8v17H12V36z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M20 28V17h24v11" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M27 17v-5h10v5" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
      clock: (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M32 17v16l10 6" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
      safety: (
        <svg viewBox="0 0 64 64">
          <path d="M17 30h30v22H17z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M12 30h40" stroke="currentColor" strokeWidth="3" />
          <path d="M20 30V20c0-5 4-9 12-9s12 4 12 9v10" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    };
    return icons[iconType] || icons.gear;
  };

  return (
    <div className="manufacturing-page-wrapper">
      {/* ================= BANNER/HERO SECTION ================= */}
      <section className="manufacturing-page-hero">
        <div className="manufacturing-page-hero-bg">
          <img
            src={ManufacturingBannerImg || "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=600&fit=crop"}
            alt="Manufacturing banner"
          />
          <div className="manufacturing-page-hero-bg-overlay" />
        </div>

        <div className="manufacturing-page-hero-container">
          {/* Left Side - Content */}
          <motion.div
            className="manufacturing-page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="manufacturing-page-hero-badge">
              <span>✦ Manufacturing</span>
            </div>
            <h1>
              Precision Fabrication
              <br />
              <span className="manufacturing-page-highlight">for Better Structures</span>
            </h1>
            <p>
              From steel cutting to site installation, our manufacturing process
              combines advanced technology with skilled craftsmanship to deliver
              high-quality structural steel components.
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="manufacturing-page-hero-form"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="manufacturing-page-form-card">
              <div className="manufacturing-page-form-header">
                <h3>Get a Free Quote</h3>
                <p>Fill in the form and we'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="manufacturing-page-form">
                <div className="manufacturing-page-form-group">
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
                <div className="manufacturing-page-form-group">
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
                <div className="manufacturing-page-form-group">
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
                <div className="manufacturing-page-form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about your manufacturing requirements"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="manufacturing-page-form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Request <Send size={16} />
                </motion.button>
              </form>
              <div className="manufacturing-page-form-footer">
                <span>🔒 Your information is secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES SECTION ================= */}
      <section className="manufacturing-capabilities">
        <div className="manufacturing-capabilities-container">
          <motion.div
            className="manufacturing-capabilities-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>End-to-End Fabrication Excellence</h2>
            <p>
              We follow a systematic fabrication process with advanced equipment
              and skilled professionals to deliver high-quality structural steel components.
            </p>
          </motion.div>

          <motion.div
            className="manufacturing-capabilities-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {CAPABILITIES.map((capability, index) => (
              <motion.div
                className="manufacturing-capability-card"
                key={capability.id}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 28px rgba(13, 38, 70, 0.13)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="manufacturing-capability-image">
                  <img src={capability.image} alt={capability.title} />
                  <span className={`manufacturing-number-badge ${capability.badgeColor}`}>
                    {capability.id}
                  </span>
                </div>
                <div className="manufacturing-capability-content">
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= MANUFACTURING PROCESS ================= */}
      <section className="manufacturing-process-section">
        <div className="manufacturing-process-container">
          <motion.div
            className="manufacturing-process-heading"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="manufacturing-heading-line"></span>
            <h2>OUR MANUFACTURING PROCESS</h2>
            <span className="manufacturing-heading-line"></span>
          </motion.div>

          <motion.div
            className="manufacturing-process-timeline"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div
                className={`manufacturing-process-step ${step.active ? "active" : ""}`}
                key={step.id}
                variants={fadeInUp}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="manufacturing-process-icon">
                  {renderProcessIcon(step.icon)}
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: step.title.replace(/\n/g, "<br />") }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="manufacturing-why-choose">
        <div className="manufacturing-why-choose-container">
          {/* LEFT CONTENT */}
          <motion.div
            className="manufacturing-why-content"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="manufacturing-section-label">WHY CHOOSE US</span>
            <h2>
              Precision.<br />
              Quality.<br />
              Performance.
            </h2>
            <div className="manufacturing-yellow-line"></div>
            <p>
              We combine advanced technology, skilled workforce, and stringent
              quality standards to deliver reliable steel solutions.
            </p>
            <a href="#" className="manufacturing-learn-btn">
              LEARN MORE
              <span>→</span>
            </a>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            className="manufacturing-why-features"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {WHY_CHOOSE_FEATURES.map((feature, index) => (
              <motion.div
                className="manufacturing-feature-item"
                key={index}
                variants={fadeInUp}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="manufacturing-feature-icon">
                  {renderWhyChooseIcon(feature.icon)}
                </div>
                <div className="manufacturing-feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}