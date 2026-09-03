// SolutionDetails.jsx
import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { useParams, Link } from "react-router-dom";
import SolutionBannerImg from "../../../../public/assets/img/solutions-banner.png";
import PreEngineering from "../../../../public/assets/img/solution/peb-building.jpg";
import SteelFabrication from "../../../../public/assets/img/solution/steel-fabrication.jpg";
import IndustrialShed from "../../../../public/assets/img/solution/industrial-shed.jpg";
import SteelErection from "../../../../public/assets/img/solution/steel-erection.jpg";
import MezzanineFloors from "../../../../public/assets/img/solution/mezzanine-floor.jpg";
import TurnkeySolutions from "../../../../public/assets/img/solution/turnkey-solutions.jpg";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const SOLUTIONS = [
  {
    id: 1,
    slug: "pre-engineered-buildings",
    number: "01",
    title: "Pre-Engineered Buildings",
    description:
      "Efficiently engineered steel building solutions designed for factories, warehouses, manufacturing facilities and industrial applications.",
    image: PreEngineering,
    link: "Explore PEB Solutions",
    icon: "🏭",
    theme: "navy",
    category: "peb",
    client: "Various Industrial Clients",
    duration: "4-12 Weeks",
    teamSize: "25-50 Members",
    challenge: "Designing and fabricating cost-effective, durable steel structures that meet specific industrial requirements while ensuring quick installation.",
    solution: "We engineer custom PEB solutions with optimized designs, quality fabrication, and efficient installation processes.",
    result: "Delivered high-quality pre-engineered buildings that are durable, cost-effective, and quick to install.",
    keyFeatures: [
      "Custom design solutions",
      "Quick installation",
      "Cost-effective",
      "Durable and long-lasting",
      "Low maintenance",
      "Energy efficient",
    ],
    applications: [
      "Factories",
      "Warehouses",
      "Manufacturing Facilities",
      "Industrial Sheds",
      "Commercial Buildings",
    ],
    benefits: [
      "Reduced construction time",
      "Cost savings up to 30%",
      "Flexible design options",
      "Quality controlled fabrication",
    ],
  },
  {
    id: 2,
    slug: "structural-steel-fabrication",
    number: "02",
    title: "Structural Steel Fabrication",
    description:
      "Precision-fabricated structural steel components manufactured according to project-specific engineering and fabrication requirements.",
    image: SteelFabrication,
    link: "Explore Structural Fabrication",
    icon: "⚙",
    theme: "white",
    category: "structural",
    client: "Engineering & Construction Firms",
    duration: "2-8 Weeks",
    teamSize: "20-40 Members",
    challenge: "Manufacturing precision steel components with strict tolerances and quality standards for complex structural applications.",
    solution: "Using advanced fabrication techniques and quality control processes to ensure precision and consistency.",
    result: "High-quality structural steel components that meet exact specifications and standards.",
    keyFeatures: [
      "Precision cutting",
      "Quality welding",
      "Custom specifications",
      "Dimensional accuracy",
      "Material traceability",
      "Quality assurance",
    ],
    applications: [
      "Industrial Buildings",
      "Commercial Structures",
      "Infrastructure Projects",
      "Bridge Components",
    ],
    benefits: [
      "High precision",
      "Consistent quality",
      "Custom solutions",
      "Fast turnaround",
    ],
  },
  {
    id: 3,
    slug: "industrial-shed-construction",
    number: "03",
    title: "Industrial Shed Construction",
    description:
      "Customised industrial shed solutions designed to provide practical, durable and efficient spaces for manufacturing, storage and operations.",
    image: IndustrialShed,
    link: "Explore Industrial Sheds",
    icon: "🏗",
    theme: "gold",
    category: "industrial",
    client: "Manufacturing & Logistics Companies",
    duration: "6-16 Weeks",
    teamSize: "30-60 Members",
    challenge: "Creating practical, durable, and efficient industrial spaces that meet operational requirements and safety standards.",
    solution: "Custom-designed industrial sheds with optimized layouts, proper ventilation, and efficient material handling.",
    result: "Functional industrial spaces that enhance productivity and operational efficiency.",
    keyFeatures: [
      "Durable structures",
      "Weather resistant",
      "Flexible layouts",
      "Adequate ventilation",
      "Natural lighting",
      "Safety compliant",
    ],
    applications: [
      "Manufacturing Units",
      "Warehouses",
      "Storage Facilities",
      "Workshops",
    ],
    benefits: [
      "Customized designs",
      "Durable construction",
      "Cost-effective",
      "Quick installation",
    ],
  },
  {
    id: 4,
    slug: "mezzanine-floors",
    number: "04",
    title: "Mezzanine Floors",
    description:
      "Steel mezzanine structures that help businesses maximise available vertical space and create additional usable floor areas within existing facilities.",
    image: MezzanineFloors,
    link: "Explore Mezzanine Solutions",
    icon: "▥",
    theme: "white",
    category: "mezzanine",
    client: "Commercial & Industrial Clients",
    duration: "2-6 Weeks",
    teamSize: "15-25 Members",
    challenge: "Maximizing vertical space without disrupting existing operations and ensuring structural integrity.",
    solution: "Engineered mezzanine solutions with proper load calculations, safety features, and minimal disruption.",
    result: "Additional usable floor space that maximizes facility utilization.",
    keyFeatures: [
      "Space optimization",
      "Heavy load capacity",
      "Easy installation",
      "Minimal disruption",
      "Safety compliant",
      "Custom designs",
    ],
    applications: [
      "Warehouses",
      "Office Buildings",
      "Retail Spaces",
      "Manufacturing Facilities",
    ],
    benefits: [
      "Maximizes space utilization",
      "Cost-effective expansion",
      "Quick installation",
      "Flexible design",
    ],
  },
  {
    id: 5,
    slug: "steel-erection",
    number: "05",
    title: "Steel Erection",
    description:
      "Safe and systematic structural steel erection supported by experienced site teams and planned execution methodologies.",
    image: SteelErection,
    link: "Explore Steel Erection",
    icon: "🏗",
    theme: "navy",
    category: "erection",
    client: "Construction & Engineering Firms",
    duration: "2-12 Weeks",
    teamSize: "25-50 Members",
    challenge: "Safe and systematic erection of steel structures on-site with proper coordination and safety protocols.",
    solution: "Planned execution with experienced teams, proper equipment, and strict safety measures.",
    result: "Safe and timely completion of steel structure erection.",
    keyFeatures: [
      "Safety first",
      "Skilled teams",
      "Systematic approach",
      "Proper equipment",
      "Quality control",
      "Timely completion",
    ],
    applications: [
      "Industrial Buildings",
      "Commercial Structures",
      "Infrastructure Projects",
      "Bridge Construction",
    ],
    benefits: [
      "Safe execution",
      "Timely completion",
      "Quality assurance",
      "Experienced teams",
    ],
  },
  {
    id: 6,
    slug: "turnkey-industrial-solutions",
    number: "06",
    title: "Turnkey Industrial Solutions",
    description:
      "Integrated project execution covering engineering, fabrication, transportation, erection and associated structural requirements.",
    image: TurnkeySolutions,
    link: "Discuss Your Project",
    icon: "✓",
    theme: "gold",
    category: "turnkey",
    client: "Industrial & Commercial Clients",
    duration: "12-24 Weeks",
    teamSize: "50-100 Members",
    challenge: "Managing complete project execution from design to completion with multiple stakeholders and complex requirements.",
    solution: "Integrated project management approach covering all aspects of steel construction.",
    result: "Complete turnkey solutions delivered on time with quality assurance.",
    keyFeatures: [
      "End-to-end service",
      "Project management",
      "Complete solutions",
      "Quality assurance",
      "Timely delivery",
      "Single-point coordination",
    ],
    applications: [
      "Industrial Plants",
      "Commercial Complexes",
      "Infrastructure Projects",
      "Large-scale Facilities",
    ],
    benefits: [
      "Single-point coordination",
      "Integrated approach",
      "Cost-effective",
      "Time-saving",
    ],
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

export default function SolutionDetails() {
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Find the solution by slug
  const solution = SOLUTIONS.find((s) => s.slug === slug);

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

  // If solution not found
  if (!solution) {
    return (
      <div className="solution-details-not-found">
        <h2>Solution Not Found</h2>
        <p>The solution you're looking for doesn't exist.</p>
        <Link to="/our-solutions" className="back-btn">
          <ChevronLeft size={16} /> Back to Solutions
        </Link>
      </div>
    );
  }

  return (
    <div className="solution-details-wrapper">
      {/* ================= HERO/BANNER SECTION ================= */}
      <section className="solution-details-hero">
        <div className="solution-details-hero-bg">
          <img src={solution.image} alt={solution.title} />
          <div className="solution-details-hero-bg-overlay" />
        </div>

        <div className="solution-details-hero-container">
          <motion.div
            className="solution-details-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="solution-details-hero-badge">
              <Link to="/our-solutions" className="back-link">
                <ChevronLeft size={16} /> Back to Solutions
              </Link>
            </div>
            <h1>
              {solution.title}
            </h1>
            <div className="solution-details-hero-meta">
              <span>
                <span className="solution-number-badge">{solution.number}</span>
              </span>
              <span>
                <Users size={18} />
                {solution.teamSize}
              </span>
              <span>
                <Clock size={18} />
                {solution.duration}
              </span>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="solution-details-hero-form"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="solution-details-form-card">
              <div className="solution-details-form-header">
                <h3>Request Solution Details</h3>
                <p>Download brochure or get more information</p>
              </div>
              <form onSubmit={handleSubmit} className="solution-details-form">
                <div className="solution-details-form-group">
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
                <div className="solution-details-form-group">
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
                <div className="solution-details-form-group">
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
                <div className="solution-details-form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Tell us what you'd like to know about this solution"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="solution-details-form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Request <Send size={16} />
                </motion.button>
              </form>
              <div className="solution-details-form-footer">
                <span>🔒 Your information is secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTION OVERVIEW ================= */}
      <section className="solution-details-overview">
        <div className="solution-details-overview-container">
          <motion.div
            className="solution-details-overview-content"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="solution-details-badge">SOLUTION OVERVIEW</span>
            <h2>Solution <span className="solution-details-highlight">Highlights</span></h2>
            <p>{solution.description}</p>
          </motion.div>

          <motion.div
            className="solution-details-overview-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Building2 size={24} /></div>
              <div>
                <strong>Solution Type</strong>
                <span>{solution.title}</span>
              </div>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Users size={24} /></div>
              <div>
                <strong>Team Size</strong>
                <span>{solution.teamSize}</span>
              </div>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Clock size={24} /></div>
              <div>
                <strong>Duration</strong>
                <span>{solution.duration}</span>
              </div>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Briefcase size={24} /></div>
              <div>
                <strong>Client Type</strong>
                <span>{solution.client}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CHALLENGE & SOLUTION ================= */}
      <section className="solution-details-challenge">
        <div className="solution-details-challenge-container">
          <motion.div
            className="solution-details-challenge-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="challenge-box" variants={fadeInUp}>
              <div className="challenge-header">
                <span className="challenge-icon">⚡</span>
                <h3>The Challenge</h3>
              </div>
              <p>{solution.challenge}</p>
              <ul className="challenge-list">
                <li>
                  <Circle size={8} />
                  Meeting specific industrial requirements
                </li>
                <li>
                  <Circle size={8} />
                  Quality and precision standards
                </li>
                <li>
                  <Circle size={8} />
                  Timely project delivery
                </li>
              </ul>
            </motion.div>

            <motion.div className="solution-box" variants={fadeInUp}>
              <div className="solution-header">
                <span className="solution-icon">✓</span>
                <h3>The Solution</h3>
              </div>
              <p>{solution.solution}</p>
              <ul className="solution-list">
                {solution.keyFeatures.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="solution-details-result"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="result-header">
              <span>🏆</span>
              <h3>The Result</h3>
            </div>
            <p>{solution.result}</p>
          </motion.div>
        </div>
      </section>

      {/* ================= APPLICATIONS & BENEFITS ================= */}
      <section className="solution-details-applications">
        <div className="solution-details-applications-container">
          <motion.div
            className="solution-details-applications-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="applications-box" variants={fadeInUp}>
              <div className="applications-header">
                <span className="applications-icon">📋</span>
                <h3>Applications</h3>
              </div>
              <ul className="applications-list">
                {solution.applications.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="benefits-box" variants={fadeInUp}>
              <div className="benefits-header">
                <span className="benefits-icon">⭐</span>
                <h3>Benefits</h3>
              </div>
              <ul className="benefits-list">
                {solution.benefits.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="solution-details-cta">
        <div className="solution-details-cta-container">
          <motion.div
            className="solution-details-cta-content"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="solution-details-badge">READY TO BUILD</span>
            <h2>
              Need This Solution?
              <br />
              <span className="solution-details-highlight">Let's Build Together</span>
            </h2>
            <p>
              Contact our team today to discuss your requirements and
              experience the Sibi Global difference in steel solutions.
            </p>
            <div className="solution-details-cta-buttons">
              <motion.a
                href="#"
                className="solution-details-cta-btn primary"
                whileHover={{
                  backgroundColor: "#f2a022",
                  color: "#0b2350",
                  x: 5,
                  transition: { duration: 0.3 },
                }}
              >
                Get a Free Quote <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="solution-details-cta-btn secondary"
                whileHover={{
                  backgroundColor: "transparent",
                  color: "#f2a022",
                  borderColor: "#f2a022",
                  transition: { duration: 0.3 },
                }}
              >
                <Phone size={16} /> Call Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="solution-details-cta-image"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={solution.image}
              alt={solution.title}
            />
            <div className="solution-details-cta-image-overlay" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}