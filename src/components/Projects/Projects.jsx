import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
    Briefcase,
    ChevronRight,
    Calendar,
    Eye,
    Heart,
    Share2,
    Filter,
    Grid3x3,
    List,
    MapPin as MapPinIcon,
    Building,
    Ruler,
    ClipboardCheck,
    ExternalLink,
} from "lucide-react";
import ProjectBannerImg from "../../../public/assets/img/solutions-banner.png";
import ProjectImg1 from "../../../public/assets/img/projects/warehouse.webp";
import ProjectImg2 from "../../../public/assets/img/projects/heavy-engineering-fabrication-facility.webp"
import ProjectImg3 from "../../../public/assets/img/projects/food-processing-industrial-shed.jpg";
import ProjectImg4 from "../../../public/assets/img/projects/corporate-office-mezzanine-floor.jfif";
import ProjectImg5 from "../../../public/assets/img/projects/automobile-manufacturing-plant.jpg";
import ProjectImg6 from "../../../public/assets/img/projects/steel-structure-solar-panel.webp";
import ProjectImg7 from "../../../public/assets/img/projects/e-commerce-fulfillment-center.png";
import ProjectImg8 from "../../../public/assets/img/projects/industrial-shed-for-textile-unit.jpg";

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
    },
];

const PROJECT_TYPES = [
    { id: "all", label: "All Projects" },
    { id: "peb", label: "PEB" },
    { id: "structural", label: "Structural Steel" },
    { id: "industrial", label: "Industrial Shed" },
    { id: "mezzanine", label: "Mezzanine Floor" },
    { id: "turnkey", label: "Turnkey" },
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

export default function Projects() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [activeFilter, setActiveFilter] = useState("all");
    const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

    // Filter projects when category changes
    React.useEffect(() => {
        if (activeFilter === "all") {
            setFilteredProjects(PROJECTS);
        } else {
            const filtered = PROJECTS.filter(
                (project) => project.category === activeFilter
            );
            setFilteredProjects(filtered);
        }
    }, [activeFilter]);

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

    const handleViewProject = (project) => {
        navigate(`/projects/details/${project.slug}`);
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    return (
        <div className="projects-page-wrapper">
            {/* ================= BANNER/HERO SECTION ================= */}
            <section className="projects-page-hero">
                <div className="projects-page-hero-bg">
                    <img
                        src={ProjectBannerImg}
                        alt="Projects banner"
                    />
                    <div className="projects-page-hero-bg-overlay" />
                </div>

                <div className="projects-page-hero-container">
                    {/* Left Side - Content */}
                    <motion.div
                        className="projects-page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="projects-page-hero-badge">
                            <span>✦ Our Projects</span>
                        </div>
                        <h1>
                            Structures That Speak
                            <br />
                            <span className="projects-page-highlight">for Our Work</span>
                        </h1>
                        <p>
                            Every project brings a different requirement. Our project portfolio
                            reflects our experience in delivering structural steel solutions
                            across industrial and commercial applications.
                        </p>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="projects-page-hero-form"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="projects-page-form-card">
                            <div className="projects-page-form-header">
                                <h3>Discuss Your Project</h3>
                                <p>Tell us about your project and we'll get back to you</p>
                            </div>
                            <form onSubmit={handleSubmit} className="projects-page-form">
                                <div className="projects-page-form-group">
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
                                <div className="projects-page-form-group">
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
                                <div className="projects-page-form-group">
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
                                <div className="projects-page-form-group">
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
                                    className="projects-page-form-submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Request <Send size={16} />
                                </motion.button>
                            </form>
                            <div className="projects-page-form-footer">
                                <span>🔒 Your information is secure with us</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= PROJECTS GRID SECTION ================= */}
            <section className="projects-page-grid">
                <div className="projects-page-grid-container">
                    <motion.div
                        className="projects-page-grid-header"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="projects-page-badge">OUR PORTFOLIO</span>
                        <h2>
                            Featured <span className="projects-page-highlight">Projects</span>
                        </h2>
                        <p>
                            Explore our portfolio of completed projects showcasing our
                            expertise in steel construction across various industries.
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <div className="projects-page-filters">
                        {PROJECT_TYPES.map((type) => (
                            <button
                                key={type.id}
                                className={`filter-btn ${activeFilter === type.id ? "active" : ""}`}
                                onClick={() => setActiveFilter(type.id)}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            className="projects-page-grid-list"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            viewport={{ once: true }}
                        >
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <motion.div
                                        className="projects-page-project-card"
                                        key={project.id}
                                        variants={fadeInUp}
                                        whileHover={{
                                            y: -8,
                                            boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <div className="projects-page-project-image">
                                            <img src={project.image} alt={project.name} />
                                            <div className="projects-page-project-status">
                                                <span className={project.status === "Completed" ? "status-completed" : "status-progress"}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <div className="projects-page-project-type">
                                                <span>{project.projectType}</span>
                                            </div>
                                        </div>
                                        <div className="projects-page-project-content">
                                            <h3>{project.name}</h3>
                                            <div className="projects-page-project-details">
                                                <span>
                                                    <MapPinIcon size={14} />
                                                    {project.location}
                                                </span>
                                                <span>
                                                    <Building size={14} />
                                                    {project.industry}
                                                </span>
                                                <span>
                                                    <Ruler size={14} />
                                                    {project.builtUpArea}
                                                </span>
                                            </div>
                                            <motion.a
                                                className="projects-page-project-link"
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.3 }}
                                                onClick={() => handleViewProject(project)}
                                            >
                                                View Project <ArrowRight size={14} />
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    className="projects-page-no-results"
                                    variants={fadeInUp}
                                >
                                    <p>No projects found in this category. Please check back later.</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}