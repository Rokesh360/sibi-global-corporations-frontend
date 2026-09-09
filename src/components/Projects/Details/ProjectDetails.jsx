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
} from "lucide-react";
import { useParams, Link } from "react-router-dom";
import ProjectBannerImg from "../../../../public/assets/img/solutions-banner.png";
import ProjectImg1 from "../../../../public/assets/img/projects/warehouse.webp";
import WarehouseGalleryImg1 from "../../../../public/assets/img/warehouse.png";
import ProjectImg2 from "../../../../public/assets/img/projects/heavy-engineering-fabrication-facility.webp";
import ProjectImg3 from "../../../../public/assets/img/projects/food-processing-industrial-shed.jpg";
import ProjectImg4 from "../../../../public/assets/img/projects/corporate-office-mezzanine-floor.jfif";
import ProjectImg5 from "../../../../public/assets/img/projects/automobile-manufacturing-plant.jpg";
import ProjectImg6 from "../../../../public/assets/img/projects/steel-structure-solar-panel.webp";
import ProjectImg7 from "../../../../public/assets/img/projects/e-commerce-fulfillment-center.png";
import ProjectImg8 from "../../../../public/assets/img/projects/industrial-shed-for-textile-unit.jpg";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const PROJECTS = [
  {
    id: 1,
    slug: "mega-warehouse-logistics-hub",
    name: "Mega Warehouse & Logistics Hub",
    location: "Chennai, Tamil Nadu",
    industry: "Logistics & Warehousing",
    projectType: "PEB",
    builtUpArea: "1,25,000 sq.ft",
    scope: "Design, Fabrication & Erection",
    image: ProjectImg1,
    description: "State-of-the-art pre-engineered building for a leading logistics company featuring high-bay storage and automated material handling systems.",
    year: "2025",
    status: "Completed",
    category: "peb",
    client: "ABC Logistics Pvt. Ltd.",
    duration: "8 Months",
    teamSize: "45 Members",
    challenge: "The project required a large-span structure with high-bay storage capabilities and integration with automated material handling systems within a tight timeline.",
    solution: "We designed a custom PEB structure with optimized column spacing, high-strength steel sections, and coordinated with automation vendors for seamless integration.",
    result: "Successfully delivered a state-of-the-art logistics facility with 40% higher storage capacity and 25% faster material handling efficiency.",
    gallery: [
      ProjectImg1,
      WarehouseGalleryImg1,
    ],
    challenges: [
      "Large-span structural requirements",
      "Integration with automated systems",
      "Tight project timeline",
      "Complex foundation design",
    ],
    keyFeatures: [
      "High-bay storage system",
      "Automated material handling",
      "Energy-efficient design",
      "Fire-resistant coating",
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        position: "Director, ABC Logistics",
        quote: "Sibi Global delivered an exceptional facility that exceeded our expectations. Their engineering expertise and project management were outstanding.",
      },
    ],
  },
  {
    id: 2,
    slug: "heavy-engineering-fabrication-facility",
    name: "Heavy Engineering Fabrication Facility",
    location: "Coimbatore, Tamil Nadu",
    industry: "Engineering & Manufacturing",
    projectType: "Structural Steel",
    builtUpArea: "85,000 sq.ft",
    scope: "Design, Fabrication & Erection",
    image: ProjectImg2,
    description: "Heavy structural steel fabrication facility with overhead cranes and heavy-duty flooring for engineering equipment manufacturing.",
    year: "2025",
    status: "Completed",
    category: "structural",
    client: "Precision Engineering Works",
    duration: "10 Months",
    teamSize: "55 Members",
    challenge: "The facility required heavy-duty structural steel framework capable of supporting 50-ton overhead cranes and heavy machinery loads.",
    solution: "Engineered a robust structural steel framework with reinforced columns and beams, designed specifically for heavy equipment loads.",
    result: "Delivered a world-class fabrication facility that increased production capacity by 60%.",
    gallery: [ProjectImg2],
    challenges: [
      "Heavy load-bearing requirements",
      "Complex crane support systems",
      "Precision fabrication standards",
    ],
    keyFeatures: [
      "50-ton overhead cranes",
      "Heavy-duty flooring",
      "Advanced ventilation system",
      "Safety-compliant design",
    ],
    testimonials: [],
  },
  {
    id: 3,
    slug: "food-processing-industrial-shed",
    name: "Food Processing Industrial Shed",
    location: "Bengaluru, Karnataka",
    industry: "Food Processing",
    projectType: "Industrial Shed",
    builtUpArea: "45,000 sq.ft",
    scope: "Design, Fabrication & Erection",
    image: ProjectImg3,
    description: "Custom-designed industrial shed for a leading food processing company with hygienic design and temperature-controlled zones.",
    year: "2025",
    status: "Completed",
    category: "industrial",
    client: "FreshFoods Pvt. Ltd.",
    duration: "6 Months",
    teamSize: "30 Members",
    challenge: "The shed needed to meet strict hygiene standards with temperature-controlled zones and easy-to-clean surfaces.",
    solution: "Designed a hygienic industrial shed with insulated panels, seamless flooring, and specialized ventilation systems.",
    result: "Successfully delivered a food-grade facility that met all regulatory standards.",
    gallery: [ProjectImg3],
    challenges: [
      "Hygiene and sanitation requirements",
      "Temperature control zones",
      "Food safety compliance",
    ],
    keyFeatures: [
      "Hygienic design",
      "Temperature-controlled zones",
      "Easy-to-clean surfaces",
      "Food-grade materials",
    ],
    testimonials: [],
  },
  {
    id: 4,
    slug: "corporate-office-mezzanine-floor",
    name: "Corporate Office Mezzanine Floor",
    location: "Hyderabad, Telangana",
    industry: "Commercial / IT",
    projectType: "Mezzanine Floor",
    builtUpArea: "32,000 sq.ft",
    scope: "Design, Fabrication & Erection",
    image: ProjectImg4,
    description: "Steel mezzanine floor installation in a corporate office building to create additional workspace and meeting rooms.",
    year: "2024",
    status: "Completed",
    category: "mezzanine",
    client: "TechSpace Solutions",
    duration: "4 Months",
    teamSize: "20 Members",
    challenge: "The installation needed to be completed without disrupting ongoing office operations.",
    solution: "Executed the mezzanine installation in phases with minimal disruption to daily operations.",
    result: "Created 15,000 sq.ft of additional usable space with modern aesthetics.",
    gallery: [ProjectImg4],
    challenges: [
      "Minimal disruption to operations",
      "Aesthetic integration",
      "Structural load considerations",
    ],
    keyFeatures: [
      "Modern aesthetic design",
      "Quick installation",
      "High load capacity",
      "Fire-rated materials",
    ],
    testimonials: [],
  },
  {
    id: 5,
    slug: "automobile-manufacturing-plant",
    name: "Automobile Manufacturing Plant",
    location: "Pune, Maharashtra",
    industry: "Automobile",
    projectType: "Turnkey",
    builtUpArea: "2,50,000 sq.ft",
    scope: "Turnkey Solution",
    image: ProjectImg5,
    description: "Complete turnkey steel structure solution for an automobile manufacturing plant including design, fabrication, and erection.",
    year: "2024",
    status: "Completed",
    category: "turnkey",
    client: "AutoTech Manufacturing Ltd.",
    duration: "14 Months",
    teamSize: "80 Members",
    challenge: "The project required a complete turnkey solution with complex structural requirements for an automobile assembly line.",
    solution: "Delivered end-to-end solution from engineering to erection with integrated project management.",
    result: "Successfully commissioned a state-of-the-art automobile manufacturing plant.",
    gallery: [ProjectImg5],
    challenges: [
      "Complex structural requirements",
      "Integrated project management",
      "Multiple stakeholder coordination",
    ],
    keyFeatures: [
      "Complete turnkey solution",
      "Integrated design approach",
      "Timely project delivery",
      "Quality assurance",
    ],
    testimonials: [],
  },
  {
    id: 6,
    slug: "steel-structure-solar-panel-facility",
    name: "Steel Structure for Solar Panel Facility",
    location: "Ahmedabad, Gujarat",
    industry: "Renewable Energy",
    projectType: "Structural Steel",
    builtUpArea: "65,000 sq.ft",
    scope: "Design & Fabrication",
    image: ProjectImg6,
    description: "Structural steel framework for a solar panel manufacturing facility with specialized load-bearing requirements.",
    year: "2024",
    status: "In Progress",
    category: "structural",
    client: "SolarTech Industries",
    duration: "12 Months",
    teamSize: "40 Members",
    challenge: "The facility needed to support specialized solar panel manufacturing equipment with precise load-bearing requirements.",
    solution: "Engineered a precision structural steel framework tailored for solar panel manufacturing needs.",
    result: "Ongoing project expected to be completed by Q4 2024.",
    gallery: [ProjectImg6],
    challenges: [
      "Specialized equipment support",
      "Precision load calculations",
      "Clean room requirements",
    ],
    keyFeatures: [
      "Precision engineering",
      "Specialized equipment support",
      "Clean room compatibility",
      "Future expansion ready",
    ],
    testimonials: [],
  },
  {
    id: 7,
    slug: "e-commerce-fulfillment-center",
    name: "E-Commerce Fulfillment Center",
    location: "Mumbai, Maharashtra",
    industry: "E-Commerce / Logistics",
    projectType: "PEB",
    builtUpArea: "1,80,000 sq.ft",
    scope: "Design, Fabrication & Erection",
    image: ProjectImg7,
    description: "Large-scale pre-engineered building for e-commerce fulfillment with multi-level mezzanine and conveyor systems.",
    year: "2024",
    status: "Completed",
    category: "peb",
    client: "ShopFast Logistics",
    duration: "10 Months",
    teamSize: "60 Members",
    challenge: "The project required multi-level mezzanine integration with conveyor systems and high-speed order processing.",
    solution: "Designed and executed a comprehensive PEB solution with integrated mezzanine and conveyor support systems.",
    result: "Delivered a high-capacity fulfillment center that processes 50,000+ orders daily.",
    gallery: [ProjectImg7],
    challenges: [
      "Multi-level mezzanine integration",
      "Conveyor system support",
      "High-speed processing requirements",
    ],
    keyFeatures: [
      "Multi-level mezzanine",
      "Conveyor system integrated",
      "High-speed processing",
      "Efficient layout design",
    ],
    testimonials: [],
  },
  {
    id: 8,
    slug: "industrial-shed-textile-unit",
    name: "Industrial Shed for Textile Unit",
    location: "Tirupur, Tamil Nadu",
    industry: "Textile",
    projectType: "Industrial Shed",
    builtUpArea: "55,000 sq.ft",
    scope: "Design, Fabrication & Erection",
    image: ProjectImg8,
    description: "Custom-designed industrial shed for a textile manufacturing unit with specialized ventilation and lighting systems.",
    year: "2023",
    status: "Completed",
    category: "industrial",
    client: "TexFab Industries",
    duration: "7 Months",
    teamSize: "35 Members",
    challenge: "The shed needed specialized ventilation and lighting systems for textile manufacturing operations.",
    solution: "Designed a customized industrial shed with optimized ventilation and lighting for textile operations.",
    result: "Successfully delivered a production facility that increased output by 35%.",
    gallery: [ProjectImg8],
    challenges: [
      "Specialized ventilation requirements",
      "Lighting optimization",
      "Production efficiency focus",
    ],
    keyFeatures: [
      "Specialized ventilation",
      "Optimized lighting system",
      "Production-focused design",
      "Energy-efficient solutions",
    ],
    testimonials: [],
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

export default function ProjectDetails() {
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Find the project by slug
  const project = PROJECTS.find((p) => p.slug === slug);

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

  // If project not found
  if (!project) {
    return (
      <div className="project-details-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="back-btn">
          <ChevronLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details-wrapper">
      {/* ================= HERO/BANNER SECTION ================= */}
      <section className="project-details-hero">
        <div className="project-details-hero-bg">
          <img src={project.image} alt={project.name} />
          <div className="project-details-hero-bg-overlay" />
        </div>

        <div className="project-details-hero-container">
          <motion.div
            className="project-details-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="project-details-hero-badge">
              <Link to="/projects" className="back-link">
                <ChevronLeft size={16} /> Back to Projects
              </Link>
            </div>
            <h1>
              {project.name}
            </h1>
            <p className="banner-content-p-tag">State-of-the-art pre-engineered building for a leading logistics company featuring high-bay storage and automated material handling systems.</p>
            {/* <div className="project-details-hero-meta">
              <span>
                <MapPinIcon size={18} />
                {project.location}
              </span>
              <span>
                <Building size={18} />
                {project.industry}
              </span>
              <span>
                <Briefcase size={18} />
                {project.projectType}
              </span>
              <span className={`status-badge ${project.status === "Completed" ? "status-completed" : "status-progress"}`}>
                {project.status}
              </span>
            </div> */}
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="project-details-hero-form"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="project-details-form-card">
              <div className="project-details-form-header">
                <h3>Request Project Details</h3>
                <p>Download brochure or get more information</p>
              </div>
              <form onSubmit={handleSubmit} className="project-details-form">
                <div className="project-details-form-group">
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
                <div className="project-details-form-group">
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
                <div className="project-details-form-group">
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
                <div className="project-details-form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Tell us what you'd like to know about this project"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="project-details-form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Request <Send size={16} />
                </motion.button>
              </form>
              <div className="project-details-form-footer">
                <span>🔒 Your information is secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="project-details-overview">
        <div className="project-details-overview-container">
          <motion.div
            className="project-details-overview-content"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="project-details-badge">PROJECT OVERVIEW</span>
            <h2>Project <span className="project-details-highlight">Highlights</span></h2>
            <p>{project.description}</p>
          </motion.div>

          <motion.div
            className="project-details-overview-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Building2 size={24} /></div>
              <div>
                <strong>Project Type</strong>
                <span>{project.projectType}</span>
              </div>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Ruler size={24} /></div>
              <div>
                <strong>Built-up Area</strong>
                <span>{project.builtUpArea}</span>
              </div>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Calendar size={24} /></div>
              <div>
                <strong>Year</strong>
                <span>{project.year}</span>
              </div>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Users size={24} /></div>
              <div>
                <strong>Client</strong>
                <span>{project.client}</span>
              </div>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Clock size={24} /></div>
              <div>
                <strong>Duration</strong>
                <span>{project.duration}</span>
              </div>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <div className="overview-icon"><Briefcase size={24} /></div>
              <div>
                <strong>Team Size</strong>
                <span>{project.teamSize}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CHALLENGE & SOLUTION ================= */}
      <section className="project-details-challenge">
        <div className="project-details-challenge-container">
          <motion.div
            className="project-details-challenge-grid"
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
              <p>{project.challenge}</p>
              <ul className="challenge-list">
                {project.challenges.map((item, index) => (
                  <li key={index}>
                    <Circle size={8} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="solution-box" variants={fadeInUp}>
              <div className="solution-header">
                <span className="solution-icon">✓</span>
                <h3>The Solution</h3>
              </div>
              <p>{project.solution}</p>
              <ul className="solution-list">
                {project.keyFeatures.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="project-details-result"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="result-header">
              <span>🏆</span>
              <h3>The Result</h3>
            </div>
            <p>{project.result}</p>
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-details-gallery">
          <div className="project-details-gallery-container">
            <motion.div
              className="project-details-gallery-header"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="project-details-badge">GALLERY</span>
              <h2>Project <span className="project-details-highlight">Images</span></h2>
            </motion.div>

            <motion.div
              className="project-details-gallery-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {project.gallery.map((img, index) => (
                <motion.div
                  className="gallery-item"
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={img} alt={`${project.name} - ${index + 1}`} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= TESTIMONIALS ================= */}
      {/* {project.testimonials && project.testimonials.length > 0 && (
        <section className="project-details-testimonials">
          <div className="project-details-testimonials-container">
            <motion.div
              className="project-details-testimonials-header"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="project-details-badge light">TESTIMONIALS</span>
              <h2>What Our <span className="project-details-highlight">Clients Say</span></h2>
            </motion.div>

            <motion.div
              className="project-details-testimonials-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {project.testimonials.map((testimonial, index) => (
                <motion.div
                  className="testimonial-card"
                  key={index}
                  variants={fadeInUp}
                >
                  <div className="testimonial-quote">"</div>
                  <p>{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.position}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )} */}

     
    </div>
  );
}