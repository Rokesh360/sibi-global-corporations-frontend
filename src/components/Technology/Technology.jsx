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
    Globe,
    Box as Cube,
    Monitor,
    Search,
    FileText as FileLines,
    Settings as Gears,
    Layers as LayerGroup,
    Compass as CompassDrafting,
    Factory as Industry,
    HardHat as HelmetSafety,
    CircleCheck,
    FileChartColumnIncreasing,
    FactoryIcon,
} from "lucide-react";
import TechnologyBannerImg from "../../../public/assets/img/solutions-banner.png";
import TechnologyEngineerImg from "../../../public/assets/img/technology/technology-engineer.png";
import ModelingImg from "../../../public/assets/img/technology/3d-modelling.png";
import DrawingsImg from "../../../public/assets/img/technology/engineering-drawings.png";
import AnalysisImg from "../../../public/assets/img/technology/structural-analysis.png";
import FabricationSupportImg from "../../../public/assets/img/solution/steel-fabrication.jpg";
import SiteExecutionImg from "../../../public/assets/img/commitment.jpg";
import { AppstoreOutlined, CheckOutlined, CompassOutlined, FileTextOutlined, SafetyOutlined } from "@ant-design/icons";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const TECHNOLOGY_FEATURES = [
    {
        icon: "gear",
        title: "Advanced Technology",
    },
    {
        icon: "cubes",
        title: "Accurate Engineering",
    },
    {
        icon: "tools",
        title: "Optimised Solutions",
    },
    {
        icon: "helmet",
        title: "Efficient Execution",
    },
];

const TECHNOLOGY_AREAS = [
    {
        id: "01",
        icon: Cube,
        title: "3D Structural Modelling",
        description: "Accurate digital modelling for better structural coordination and project planning.",
    },
    {
        id: "02",
        icon: Monitor,
        title: "CAD-Based Engineering",
        description: "Detailed engineering drawings supporting accurate fabrication and execution.",
    },
    {
        id: "03",
        icon: Search,
        title: "Structural Analysis",
        description: "Engineering analysis focused on structural accuracy and performance.",
    },
    {
        id: "04",
        icon: FileLines,
        title: "Shop Drawing Preparation",
        description: "Clear and coordinated drawings for efficient fabrication and site execution.",
    },
    {
        id: "05",
        icon: Gears,
        title: "Fabrication Planning",
        description: "Structured planning to improve fabrication workflow and project efficiency.",
    },
    {
        id: "06",
        icon: LayerGroup,
        title: "Material Optimisation",
        description: "Efficient material planning to reduce wastage and improve fabrication utilisation.",
    },
];

const SOFTWARE_TOOLS = [
    { name: "Tekla", sub: "Structures", class: "tekla" },
    { name: "STAAD.Pro", sub: "", class: "staad" },
    { name: "A", sub: "AutoCAD", class: "autocad" },
    { name: "✦", sub: "SAP2000", class: "sap" },
    { name: "▦", sub: "ETABS", class: "etabs" },
    { name: "◇", sub: "SketchUp", class: "sketch" },
    { name: "P", sub: "MS Project", class: "project" },
    { name: "N", sub: "Navisworks", class: "navis" },
];

const PROCESS_STEPS_ROW1 = [
    { icon: CompassDrafting, title: "Requirement Analysis" },
    { icon: Cube, title: "3D Modelling & Analysis" },
    { icon: FileLines, title: "Engineering & Documentation" },
];

const PROCESS_STEPS_ROW2 = [
    { icon: Industry, title: "Manufacturing Support" },
    { icon: HelmetSafety, title: "Site Coordination & Execution" },
    { icon: CircleCheck, title: "Quality Check & Review" },
];

const TECHNOLOGY_ADVANTAGES = [
    "Improved structural accuracy and precision",
    "Faster design to fabrication workflow",
    "Better coordination and reduced rework",
    "Optimised material usage",
    "Enhanced project efficiency and reliability",
];

const TECHNOLOGY_SHOWCASE = [
    {
        title: "3D MODELLING",
        description: "Realistic digital representation for better visualization and planning.",
        image: ModelingImg,
    },
    {
        title: "ENGINEERING DRAWINGS",
        description: "Detailed and coordinated drawings for accurate fabrication.",
        image: DrawingsImg,
    },
    {
        title: "STRUCTURAL ANALYSIS",
        description: "Advanced analysis to ensure safety, strength and performance.",
        image: AnalysisImg,
    },
    {
        title: "FABRICATION SUPPORT",
        description: "Engineering support throughout fabrication for precision and quality.",
        image: FabricationSupportImg,
    },
    {
        title: "SITE EXECUTION",
        description: "Smooth coordination and execution for successful project delivery.",
        image: SiteExecutionImg,
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

export default function Technology() {
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

    // Helper function to render feature icons
    const renderFeatureIcon = (iconType) => {
        const icons = {
            gear: <i className="fa-solid fa-gear"></i>,
            cubes: <i className="fa-solid fa-cubes"></i>,
            tools: <i className="fa-solid fa-screwdriver-wrench"></i>,
            helmet: <i className="fa-solid fa-helmet-safety"></i>,
        };
        return icons[iconType] || icons.gear;
    };

    // Helper function to render process icons
    const renderProcessIcon = (iconType) => {
        const icons = {
            CompassDrafting: <CompassDrafting size={24} />,
            Cube: <Cube size={24} />,
            FileLines: <FileChartColumnIncreasing size={24} />,
            Industry: <Industry size={24} />,
            HelmetSafety: <HelmetSafety size={24} />,
            CircleCheck: <CircleCheck size={24} />,
        };
        return icons[iconType] || icons.Cube;
    };

    return (
        <div className="technology-page-wrapper">
            {/* ================= BANNER/HERO SECTION ================= */}
            <section className="technology-page-hero">
                <div className="technology-page-hero-bg">
                    <img
                        src={TechnologyBannerImg}
                        alt="Technology banner"
                    />
                    <div className="technology-page-hero-bg-overlay" />
                </div>

                <div className="technology-page-hero-container">
                    {/* Left Side - Content */}
                    <motion.div
                        className="technology-page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="technology-page-hero-badge">
                            <span>✦ Technology</span>
                        </div>
                        <h1>
                            Engineering
                            <br />
                            Powered by <span className="technology-page-highlight">Technology</span>
                        </h1>
                        <p>
                            We use modern engineering and fabrication practices to
                            improve structural accuracy, fabrication efficiency and
                            project coordination.
                        </p>

                        {/* <div className="technology-page-hero-features">
                            {TECHNOLOGY_FEATURES.map((feature, index) => (
                                <div className="technology-page-hero-feature" key={index}>
                                    <div className="tech-hero-icon">
                                        {renderFeatureIcon(feature.icon)}
                                    </div>
                                    <h4>{feature.title}</h4>
                                </div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="technology-page-hero-form"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="technology-page-form-card">
                            <div className="technology-page-form-header">
                                <h3>Get a Free Quote</h3>
                                <p>Fill in the form and we'll get back to you within 24 hours</p>
                            </div>
                            <form onSubmit={handleSubmit} className="technology-page-form">
                                <div className="technology-page-form-group">
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
                                <div className="technology-page-form-group">
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
                                <div className="technology-page-form-group">
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
                                <div className="technology-page-form-group">
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
                                    className="technology-page-form-submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Request <Send size={16} />
                                </motion.button>
                            </form>
                            <div className="technology-page-form-footer">
                                <span>🔒 Your information is secure with us</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= TECHNOLOGY AREAS ================= */}
            <section className="technology-page-areas">
                <div className="technology-page-areas-container">
                    <motion.div
                        className="technology-page-areas-header"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2>TECHNOLOGY <span className="highlight">AREAS </span></h2>
                    </motion.div>

                    <motion.div
                        className="technology-page-areas-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {TECHNOLOGY_AREAS.map((area, index) => (
                            <motion.div
                                className="technology-page-area-card"
                                key={area.id}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -7,
                                    boxShadow: "0 15px 35px rgba(12, 35, 67, 0.12)",
                                    borderColor: "#f5b316",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    className="technology-page-area-icon"
                                    whileHover={{
                                        backgroundColor: "#0c2343",
                                        color: "#f5b316",
                                        borderColor: "#f5b316",
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <area.icon size={28} />
                                </motion.div>
                                <div className="technology-page-area-number">{area.id}</div>
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ================= ENGINEERING TECH SECTION ================= */}
            <section className="technology-page-engineering">
                <div className="technology-page-engineering-container">
                    {/* Column 1: Software */}
                    <motion.div
                        className="technology-page-engineering-column software-column"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="technology-page-column-heading">
                           
                            <h2>ENGINEERING TOOLS &amp; SOFTWARE</h2>
                        </div>

                        <div className="technology-page-software-grid">
                            {/* Tekla */}
                            <div className="technology-page-software-card">
                                <div className="technology-page-software-logo tekla-logo">
                                    <strong>Tekla</strong>
                                    <span>Structures</span>
                                </div>
                            </div>

                            {/* STAAD.Pro */}
                            <div className="technology-page-software-card">
                                <div className="technology-page-software-logo staad-logo">
                                    <strong>STAAD.Pro</strong>
                                </div>
                            </div>

                            {/* AutoCAD */}
                            <div className="technology-page-software-card">
                                <div className="technology-page-software-logo autocad-logo">
                                    <strong>A</strong>
                                    <span>AutoCAD</span>
                                </div>
                            </div>

                            {/* SAP2000 */}
                            <div className="technology-page-software-card">
                                <div className="technology-page-software-logo sap-logo">
                                    <strong>✦</strong>
                                    <span>SAP2000</span>
                                </div>
                            </div>

                            {/* ETABS */}
                            <div className="technology-page-software-card">
                                <div className="technology-page-software-logo etabs-logo">
                                    <strong>▦</strong>
                                    <span>ETABS</span>
                                </div>
                            </div>

                            {/* SketchUp */}
                            <div className="technology-page-software-card">
                                <div className="technology-page-software-logo sketch-logo">
                                    <strong>◇</strong>
                                    <span>SketchUp</span>
                                </div>
                            </div>

                            {/* MS Project */}
                            <div className="technology-page-software-card">
                                <div className="technology-page-software-logo project-logo">
                                    <strong>P</strong>
                                    <span>MS Project</span>
                                </div>
                            </div>

                            {/* Navisworks */}
                            <div className="technology-page-software-card">
                                <div className="technology-page-software-logo navis-logo">
                                    <strong>N</strong>
                                    <span>Navisworks</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 2: Process */}
                    <motion.div
                        className="technology-page-engineering-column process-column"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="technology-page-column-heading">
                          
                            <h2>OUR ENGINEERING PROCESS</h2>
                        </div>

                        <div className="technology-page-process-wrapper">
                            {/* ROW 1 */}
                            <div className="technology-page-process-row">
                                <div className="technology-page-process-step">
                                    <div className="technology-page-process-circle">
                                        <CompassOutlined style={{ fontSize: 24 }} />
                                    </div>
                                    <h3>Requirement<br />Analysis</h3>
                                </div>

                                <div className="technology-page-process-arrow">→</div>

                                <div className="technology-page-process-step">
                                    <div className="technology-page-process-circle">
                                        <AppstoreOutlined style={{ fontSize: 24 }} />
                                    </div>
                                    <h3>3D Modelling<br />&amp; Analysis</h3>
                                </div>

                                <div className="technology-page-process-arrow">→</div>

                                <div className="technology-page-process-step">
                                    <div className="technology-page-process-circle">
                                        <FileTextOutlined style={{ fontSize: 24 }} />
                                    </div>
                                    <h3>Engineering &amp;<br />Documentation</h3>
                                </div>
                            </div>

                            {/* ROW 2 */}
                            <div className="technology-page-process-row second-row">
                                <div className="technology-page-process-step">
                                    <div className="technology-page-process-circle">
                                        <FactoryIcon size={24} />
                                    </div>
                                    <h3>Manufacturing<br />Support</h3>
                                </div>

                                <div className="technology-page-process-arrow reverse">←</div>

                                <div className="technology-page-process-step">
                                    <div className="technology-page-process-circle">
                                        <SafetyOutlined style={{ fontSize: 24 }} />
                                    </div>
                                    <h3>Site Coordination<br />&amp; Execution</h3>
                                </div>

                                <div className="technology-page-process-arrow reverse">←</div>

                                <div className="technology-page-process-step">
                                    <div className="technology-page-process-circle">
                                        <CheckOutlined style={{ fontSize: 24 }} />
                                    </div>
                                    <h3>Quality Check<br />&amp; Review</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 3: Advantage */}
                    <motion.div
                        className="technology-page-engineering-column advantage-column"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="technology-page-column-heading">
                           
                            <h2>OUR TECHNOLOGY ADVANTAGE</h2>
                        </div>

                        <div className="technology-page-advantage-content">
                            <div className="technology-page-advantage-list">
                                <div className="technology-page-advantage-item">
                                    <CheckOutlined className="advantage-check-icon" />
                                    <p>Improved structural accuracy and precision</p>
                                </div>
                                <div className="technology-page-advantage-item">
                                    <CheckOutlined className="advantage-check-icon" />
                                    <p>Faster design to fabrication workflow</p>
                                </div>
                                <div className="technology-page-advantage-item">
                                    <CheckOutlined className="advantage-check-icon" />
                                    <p>Better coordination and reduced rework</p>
                                </div>
                                <div className="technology-page-advantage-item">
                                    <CheckOutlined className="advantage-check-icon" />
                                    <p>Optimised material usage</p>
                                </div>
                                <div className="technology-page-advantage-item">
                                    <CheckOutlined className="advantage-check-icon" />
                                    <p>Enhanced project efficiency and reliability</p>
                                </div>
                            </div>

                            <div className="technology-page-advantage-image">
                                <img src={TechnologyEngineerImg} alt="Engineering Technology" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= TECHNOLOGY IN ACTION ================= */}
            <section className="technology-page-action">
                <div className="technology-page-action-container">
                    <motion.div
                        className="technology-page-action-title"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        
                        <h2>TECHNOLOGY <span className="highlight">IN ACTION </span></h2>
                       
                    </motion.div>

                    <motion.div
                        className="technology-page-showcase"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {TECHNOLOGY_SHOWCASE.map((item, index) => (
                            <motion.div
                                className="technology-page-showcase-card"
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="technology-page-showcase-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}