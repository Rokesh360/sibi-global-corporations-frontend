import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeftOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  MessageOutlined,
  SendOutlined,
  CheckOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  BuildOutlined,
  BankOutlined,
  ShopOutlined,
  HomeOutlined,
  SettingOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import { useParams, Link } from "react-router-dom";
import PreEngineering from "../../../../public/assets/img/solution/peb-building.jpg";
import SteelFabrication from "../../../../public/assets/img/solution/steel-fabrication.jpg";
import IndustrialShed from "../../../../public/assets/img/solution/industrial-shed.jpg";
import SteelErection from "../../../../public/assets/img/solution/steel-erection.jpg";
import MezzanineFloors from "../../../../public/assets/img/solution/mezzanine-floor.jpg";
import TurnkeySolutions from "../../../../public/assets/img/solution/turnkey-solutions.jpg";

import AppFactories from "../../../../public/assets/img/industries/factory.png";
import AppWarehouses from "../../../../public/assets/img/industries/warehouse.png";
import AppManufacturing from "../../../../public/assets/img/industries/manufacturing.png";
import AppIndustrialSheds from "../../../../public/assets/img/industries/industrial-shed.png";
import AppCommercialBuildings from "../../../../public/assets/img/industries/commercial.png";
import AppStorageFacilities from "../../../../public/assets/img/industries/storage.png";

/* ---------------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.08, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
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

const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const checkItem = {
  hidden: { opacity: 0, x: -25 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const imageHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const pulseCheck = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.07,
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  }),
};

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
    challenge:
      "Designing and fabricating cost-effective, durable steel structures that meet specific industrial requirements while ensuring quick installation.",
    solution:
      "We engineer custom PEB solutions with optimized designs, quality fabrication, and efficient installation processes.",
    result:
      "Delivered high-quality pre-engineered buildings that are durable, cost-effective, and quick to install.",
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
      "Industrial Sheds",
      "Commercial Buildings",
      "Institutional Facilities",
      "Solar Structures",
    ],
    benefits: [
      "Reduced construction time",
      "Cost savings up to 30%",
      "Flexible design options",
      "Quality controlled fabrication",
    ],
    whyFeatures: [
      "Rapid adoption of modern construction methods",
      "Cost-effective and efficient",
      "Reduced material waste",
      "Easy future expansion",
      "Strong support throughout the building lifecycle",
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
    challenge:
      "Manufacturing precision steel components with strict tolerances and quality standards for complex structural applications.",
    solution:
      "Using advanced fabrication techniques and quality control processes to ensure precision and consistency.",
    result:
      "High-quality structural steel components that meet exact specifications and standards.",
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
    whyFeatures: [
      "Precision engineering at every stage",
      "Advanced fabrication technology",
      "Strict quality control",
      "On-time project delivery",
      "Experienced fabrication team",
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
    challenge:
      "Creating practical, durable, and efficient industrial spaces that meet operational requirements and safety standards.",
    solution:
      "Custom-designed industrial sheds with optimized layouts, proper ventilation, and efficient material handling.",
    result:
      "Functional industrial spaces that enhance productivity and operational efficiency.",
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
      "Industrial Sheds",
      "Commercial Buildings",
      "Institutional Facilities",
      "Solar Structures",
    ],
    benefits: [
      "Customized designs",
      "Durable construction",
      "Cost-effective",
      "Quick installation",
    ],
    whyFeatures: [
      "Customized shed design solutions",
      "High-quality construction materials",
      "Efficient project execution",
      "Minimal operational disruption",
      "Long-term structural durability",
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
    challenge:
      "Maximizing vertical space without disrupting existing operations and ensuring structural integrity.",
    solution:
      "Engineered mezzanine solutions with proper load calculations, safety features, and minimal disruption.",
    result:
      "Additional usable floor space that maximizes facility utilization.",
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
      "Industrial Sheds",
      "Commercial Buildings",
      "Institutional Facilities",
      "Factories",
      "Storage Units",
    ],
    benefits: [
      "Maximizes space utilization",
      "Cost-effective expansion",
      "Quick installation",
      "Flexible design",
    ],
    whyFeatures: [
      "Efficient space optimization",
      "Structural integrity guaranteed",
      "Minimal operational disruption",
      "Custom load-bearing solutions",
      "Quick installation process",
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
    challenge:
      "Safe and systematic erection of steel structures on-site with proper coordination and safety protocols.",
    solution:
      "Planned execution with experienced teams, proper equipment, and strict safety measures.",
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
      "Factories",
      "Warehouses",
      "Industrial Sheds",
      "Commercial Buildings",
      "Institutional Facilities",
      "Solar Structures",
    ],
    benefits: [
      "Safe execution",
      "Timely completion",
      "Quality assurance",
      "Experienced teams",
    ],
    whyFeatures: [
      "Certified erection teams",
      "Strict safety protocols",
      "Systematic execution planning",
      "Quality assurance at every step",
      "On-time project completion",
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
    challenge:
      "Managing complete project execution from design to completion with multiple stakeholders and complex requirements.",
    solution:
      "Integrated project management approach covering all aspects of steel construction.",
    result:
      "Complete turnkey solutions delivered on time with quality assurance.",
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
      "Commercial Buildings",
      "Infrastructure Projects",
      "Factories",
      "Warehouses",
      "Institutional Facilities",
    ],
    benefits: [
      "Single-point coordination",
      "Integrated approach",
      "Cost-effective",
      "Time-saving",
    ],
    whyFeatures: [
      "Single-point project coordination",
      "Integrated execution approach",
      "Cost-effective solutions",
      "Time-saving methodologies",
      "Complete quality assurance",
    ],
  },
];

/* ---------------------------------------------------------
   FAQ DATA
--------------------------------------------------------- */

const FAQ_DATA = [
  {
    question: "What is a Pre-Engineered Building?",
    answer:
      "A Pre-Engineered Building (PEB) is a steel building system designed and fabricated in advance according to specific project requirements.",
  },
  {
    question: "How long does PEB construction take?",
    answer:
      "PEB construction generally takes less time than conventional construction because major components are fabricated off-site.",
  },
  {
    question: "Where can PEB structures be used?",
    answer:
      "PEB structures can be used for factories, warehouses, industrial buildings, logistics facilities and commercial applications.",
  },
  {
    question: "Can the building be expanded in the future?",
    answer:
      "Yes. PEB structures can be designed with future expansion requirements in mind.",
  },
  {
    question: "Can PEB buildings be customised?",
    answer:
      "Yes. PEB buildings can be customised based on dimensions, layout, loading requirements and architectural requirements.",
  },
];

/* ---------------------------------------------------------
   APPLICATION IMAGES + ICONS MAP
--------------------------------------------------------- */

const APPLICATION_IMAGES = {
  factories: AppFactories,
  warehouses: AppWarehouses,
  "industrial sheds": AppIndustrialSheds,
  "commercial buildings": AppCommercialBuildings,
  "institutional facilities": AppCommercialBuildings,
  "solar structures": AppIndustrialSheds,
  "manufacturing units": AppManufacturing,
  "manufacturing facilities": AppManufacturing,
  "storage facilities": AppStorageFacilities,
  "storage units": AppStorageFacilities,
  "industrial buildings": AppIndustrialSheds,
  "commercial structures": AppCommercialBuildings,
  "infrastructure projects": AppIndustrialSheds,
  "bridge components": AppIndustrialSheds,
  "industrial plants": AppFactories,
};

const APPLICATION_ICONS = {
  factories: <BuildOutlined />,
  warehouses: <HomeOutlined />,
  "industrial sheds": <BankOutlined />,
  "commercial buildings": <ShopOutlined />,
  "institutional facilities": <BankOutlined />,
  "solar structures": <ThunderboltOutlined />,
  "manufacturing units": <SettingOutlined />,
  "manufacturing facilities": <SettingOutlined />,
  "storage facilities": <HomeOutlined />,
  "storage units": <HomeOutlined />,
  "industrial buildings": <BankOutlined />,
  "commercial structures": <ShopOutlined />,
  "infrastructure projects": <BuildOutlined />,
  "bridge components": <BuildOutlined />,
  "industrial plants": <BuildOutlined />,
};

const getApplicationImage = (label, fallback) =>
  APPLICATION_IMAGES[label.trim().toLowerCase()] || fallback;

const getApplicationIcon = (label) =>
  APPLICATION_ICONS[label.trim().toLowerCase()] || <BuildOutlined />;

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
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

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

  if (!solution) {
    return (
      <div className="solution-details-wrapper">
        <motion.div
          className="solution-details-not-found"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Solution Not Found</h2>
          <p>The solution you're looking for doesn't exist.</p>
          <Link to="/our-solutions" className="back-btn">
            <ArrowLeftOutlined /> Back to Solutions
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="solution-details-wrapper">
      {/* ================= HERO/BANNER SECTION ================= */}
      <section className="solution-details-hero">
        <motion.div
          className="solution-details-hero-bg"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={solution.image} alt={solution.title} />
          <div className="solution-details-hero-bg-overlay" />
        </motion.div>

        <div className="solution-details-hero-container">
          <motion.div
            className="solution-details-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className="solution-details-hero-badge"
              variants={fadeInUp}
            >
              <Link to="/our-solutions" className="back-link">
                <ArrowLeftOutlined /> Back to Solutions
              </Link>
            </motion.div>

            <motion.h1 variants={fadeInUp}>{solution.title}</motion.h1>

            <motion.div
              className="solution-details-hero-meta"
              variants={fadeInUp}
            >
              <p className="banner-content-p-tag">
                A steel building system where the structural components are
                designed and manufactured in a factory, then transported to
                the site and assembled quickly.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="solution-details-hero-form"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="solution-details-form-card">
              <div className="solution-details-form-header">
                <h3>Request Solution Details</h3>
                <p>Download brochure or get more information</p>
              </div>
              <form onSubmit={handleSubmit} className="solution-details-form">
                <motion.div
                  className="solution-details-form-group"
                  variants={fadeInUp}
                >
                  <label htmlFor="name">
                    <UserOutlined />
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
                </motion.div>
                <motion.div
                  className="solution-details-form-group"
                  variants={fadeInUp}
                >
                  <label htmlFor="email">
                    <MailOutlined />
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
                </motion.div>
                <motion.div
                  className="solution-details-form-group"
                  variants={fadeInUp}
                >
                  <label htmlFor="phone">
                    <PhoneOutlined />
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
                </motion.div>
                <motion.div
                  className="solution-details-form-group"
                  variants={fadeInUp}
                >
                  <label htmlFor="message">
                    <MessageOutlined />
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
                </motion.div>
                <motion.button
                  type="submit"
                  className="solution-details-form-submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Request <SendOutlined />
                </motion.button>
              </form>
              <div className="solution-details-form-footer">
                <span>🔒 Your information is secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PEB SECTION ================= */}
      <section className="peb-section">
        <div className="peb-wrapper">
          <motion.div
            className="peb-image-area"
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="peb-building-image"
            />
          </motion.div>

          <motion.div
            className="peb-content"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="peb-label" variants={fadeInUp}>
              WHY PEB
            </motion.div>

            <motion.h2 variants={fadeInUp}>
              Why <span className="highlight">{solution.title}</span> Make
              Sense Today?
            </motion.h2>

            <motion.p className="peb-description" variants={fadeInUp}>
              {solution.description}
            </motion.p>

            <motion.ul
              className="peb-features"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {solution.whyFeatures?.map((feature, index) => (
                <motion.li key={index} variants={listItem}>
                  <motion.span
                    className="check-icon"
                    variants={pulseCheck}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <CheckOutlined />
                  </motion.span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 01 - DIFFERENCE ================= */}
      <section className="peb-difference">
        <div className="peb-page-container">
          <motion.div
            className="difference-content"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2 variants={fadeInUp}>
              What Sets Our Work Apart From Other{" "}
              <span className="highlight">{solution.title} Companies?</span>
            </motion.h2>

            <div className="difference-columns">
              <motion.div className="difference-intro" variants={fadeInLeft}>
                <p>
                  We go beyond standard construction by offering end-to-end
                  support, modern engineering and a customer-first approach.
                  Our team ensures every project is delivered with precision,
                  quality and on-time execution.
                </p>
              </motion.div>

              <div className="difference-points">
                {[
                  "Efficient communication all the way along.",
                  "Target the schedules of business.",
                  "Real site conditions as a guide to technology choice.",
                  "Low-maintenance design structures.",
                  "Future expansion opportunity without interruption.",
                ].map((point, index) => (
                  <motion.div
                    className="check-row"
                    key={index}
                    variants={checkItem}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="blue-check"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckOutlined />
                    </motion.span>
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p className="bottom-note" variants={fadeInUp}>
              These aspects make the clients feel secure when and after
              construction.
            </motion.p>
          </motion.div>

          <motion.div
            className="difference-image"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={solution.image}
              alt={solution.title}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 02 - HOW WE WORK ================= */}
      <section className="peb-work">
        <div className="peb-page-container">
          <motion.div
            className="work-content"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2 variants={fadeInUp}>
              How we work like a{" "}
              <span className="highlight">{solution.title} company.</span>
            </motion.h2>

            <motion.p className="work-intro" variants={fadeInUp}>
              Our process is simple, so you are always aware of what is
              happening on your site.
            </motion.p>

            {[
              {
                title: "Planning that matches your requirements",
                text: "We start by understanding how you plan to use the building. Load requirements, clear span, height, ventilation, and movement flow are all taken into consideration.",
              },
              {
                title: "Design backed by engineering checks",
                text: "All designs for the structures are based on proven engineering methodology. Load calculations are carefully performed to ensure the building performs in real-world conditions.",
              },
              {
                title: "Factory fabrication you can rely on",
                text: "Under the controlled conditions, the steel members are being fabricated. This ensures accuracy, consistency, and smooth installation at the site.",
              },
            ].map((item, index) => (
              <motion.div
                className="work-item"
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="work-divider"></div>

          <motion.div
            className="assembly-content"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="assembly-image">
              <motion.img
                src={solution.image}
                alt={solution.title}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 03 - USAGE ================= */}
      <section className="peb-usage">
        <div className="peb-page-container">
          <motion.div
            className="usage-content"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={fadeInUp}>
              Where Our Structures{" "}
              <span className="highlight">Are Commonly Used?</span>
            </motion.h2>

            <motion.p className="usage-intro" variants={fadeInUp}>
              PEB is a versatile solution, widely adopted across multiple
              sectors in Chennai.
            </motion.p>

            <div className="usage-lists">
              <div className="usage-column">
                {[
                  "Industrial sheds and factories",
                  "Warehouses and storage units",
                  "Commercial buildings",
                ].map((item, index) => (
                  <motion.div
                    className="usage-row"
                    key={index}
                    variants={checkItem}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="blue-check"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckOutlined />
                    </motion.span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="usage-column">
                {[
                  "Institutional facilities",
                  "Solar project structures",
                ].map((item, index) => (
                  <motion.div
                    className="usage-row"
                    key={index}
                    variants={checkItem}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="blue-check"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckOutlined />
                    </motion.span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p className="usage-note" variants={fadeInUp}>
              Each project is planned based on usage rather than a fixed
              template.
            </motion.p>
          </motion.div>

          <motion.div
            className="usage-image"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={solution.image}
              alt={solution.title}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="faq-section">
        <div className="faq-container">
          <motion.div
            className="faq-content"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="faq-bg-text"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
            >
              FAQ
            </motion.div>
            <div className="faq-inner">
              <motion.span className="faq-label" variants={fadeInUp}>
                FREQUENTLY ASKED QUESTIONS
              </motion.span>
              <motion.h2 variants={fadeInUp}>
                Common Questions <span className="highlight">We Hear</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Find quick answers to the most important questions about
                pre-engineered buildings and our services.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="faq-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {FAQ_DATA.map((faq, index) => (
              <motion.div
                className={`faq-item ${activeFaq === index ? "active" : ""}`}
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                <motion.button
                  className="faq-question"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? -1 : index)
                  }
                  whileTap={{ scale: 0.99 }}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{
                      rotate: activeFaq === index ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </motion.button>
                <motion.div
                  className="faq-answer"
                  initial={false}
                  animate={{
                    height: activeFaq === index ? "auto" : 0,
                    opacity: activeFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={{ overflow: "hidden", padding: 0 }}
                >
                  <div style={{ padding: "0 17px 15px" }}>
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= APPLICATIONS SECTION ================= */}
      <section className="applications">
        <div className="">
          <motion.div
            className="section-top"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="left" variants={fadeInLeft}>
              <h2>
                A Construction Partner{" "}
                <span className="highlight">You Can Reply On</span>
              </h2>
            </motion.div>

            <motion.div className="right" variants={fadeInRight}>
              It is as important to select the right partner as to choose the
              proper structure. We are confident in our uniform
              implementation, sincere design, and construction that can carry
              your business for a few years. If you need a {solution.title}{" "}
              company that works on real-life construction projects, you are
              in the right place.
            </motion.div>
          </motion.div>

          <motion.div
            className="app-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {solution.applications.slice(0, 6).map((app, index) => (
              <motion.div
                className="app-card"
                key={index}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.img
                  src={getApplicationImage(app, solution.image)}
                  alt={app}
                  variants={imageHover}
                />
                <div className="overlay"></div>
                <div className="content">
                  <motion.i
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getApplicationIcon(app)}
                  </motion.i>
                  <h4>{app}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}