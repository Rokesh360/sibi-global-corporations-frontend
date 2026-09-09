import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    Building2,
    Factory,
    Warehouse,
    Building,
    Ruler,
    Wrench,
    Settings,
    ShieldCheck,
    Truck,
    Clock,
    Award,
    Users,
    HardHat,
    CheckCircle,
    TrendingUp,
    ChevronRight,
    Phone,
    Mail,
    MapPin,
    Send,
    User,
    MessageSquare,
    Briefcase,
    Target,
    Layers,
    Zap,
} from "lucide-react";
import SolutionImg from "../../../public/assets/img/solutions-banner.png";
import Solution1 from "../../../public/assets/img/solution/peb-building.jpg";
import Solution2 from "../../../public/assets/img/solution/steel-fabrication.jpg";
import Solution3 from "../../../public/assets/img/solution/industrial-shed.jpg";
import Solution4 from "../../../public/assets/img/solution/mezzanine-floor.jpg";
import Solution5 from "../../../public/assets/img/solution/steel-erection.jpg";
import Solution6 from "../../../public/assets/img/solution/turnkey-solutions.jpg";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const HERO_STATS = [
    { icon: Building2, value: "250+", label: "Projects Completed" },
    { icon: Factory, value: "12,000+", suffix: "MT", label: "Steel Fabricated" },
    { icon: Users, value: "50+", label: "Expert Team Members" },
    { icon: Clock, value: "98%", label: "On-Time Delivery" },
];

const SOLUTIONS = [
    {
        number: "01",
        slug: "pre-engineered-buildings",
        title: "Pre-Engineered Buildings",
        description:
            "Efficiently engineered steel building solutions designed for factories, warehouses, manufacturing facilities and industrial applications.",
        image: Solution1,
        link: "Explore PEB Solutions",
        theme: "navy",
    },
    {
        number: "02",
        slug: "structural-steel-fabrication",
        title: "Structural Steel Fabrication",
        description:
            "Precision-fabricated structural steel components manufactured according to project-specific engineering and fabrication requirements.",
        image: Solution2,
        link: "Explore Structural Fabrication",
        theme: "white",
    },
    {
        number: "03",
        slug: "industrial-shed-construction",
        title: "Industrial Shed Construction",
        description:
            "Customised industrial shed solutions designed to provide practical, durable and efficient spaces for manufacturing, storage and operations.",
        image: Solution3,
        link: "Explore Industrial Sheds",
        theme: "gold",
    },
    {
        number: "04",
        slug: "mezzanine-floors",
        title: "Mezzanine Floors",
        description:
            "Steel mezzanine structures that help businesses maximise available vertical space and create additional usable floor areas within existing facilities.",
        image: Solution4,
        link: "Explore Mezzanine Solutions",
        theme: "white",
    },
    {
        number: "05",
        slug: "steel-erection",
        title: "Steel Erection",
        description:
            "Safe and systematic structural steel erection supported by experienced site teams and planned execution methodologies.",
        image: Solution5,
        link: "Explore Steel Erection",
        theme: "navy",
    },
    {
        number: "06",
        slug: "turnkey-industrial-solutions",
        title: "Turnkey Industrial Solutions",
        description:
            "Integrated project execution covering engineering, fabrication, transportation, erection and associated structural requirements.",
        image: Solution6,
        link: "Discuss Your Project",
        theme: "gold",
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
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function OurSolutions() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
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

    const handleExplore = (slug) => {
        navigate(`/solutions/details/${slug}`);
        // Scroll to top
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    return (
        <div className="solutions-page-wrapper">
            {/* ================= BANNER/HERO SECTION ================= */}
            <section className="solutions-page-hero">
                {/* Background Image */}
                <div className="solutions-page-hero-bg">
                    <img
                        src={SolutionImg}
                        alt="Steel construction background"
                    />
                    <div className="solutions-page-hero-bg-overlay"></div>
                </div>

                <div className="solutions-page-hero-container">
                    {/* Left Side - Content */}
                    <motion.div
                        className="solutions-page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>
                            <div className="about-hero-label solutions">
                                <span className="label-line" />
                                <span>⚙ Solutions</span>
                                <span className="label-line" />
                            </div>
                            <span className="solutions-page-highlight">for Industrial & Commercial Projects</span>
                        </h1>
                        <p>
                            From design and fabrication to erection and completion, we deliver
                            comprehensive steel solutions that power industries and build a
                            stronger tomorrow.
                        </p>

                        {/* <div className="solutions-page-hero-stats-mini">
                            {HERO_STATS.map(({ icon: Icon, value, suffix, label }) => (
                                <div className="solutions-page-hero-stat-mini" key={label}>
                                    <Icon size={20} className="solutions-page-hero-stat-mini-icon" />
                                    <div>
                                        <strong>
                                            {value}
                                            {suffix && <span> {suffix}</span>}
                                        </strong>
                                        <span>{label}</span>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="solutions-page-hero-form"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="solutions-page-form-card">
                            <div className="solutions-page-form-header">
                                <h3>Get a Free Quote</h3>
                                <p>Fill in the form and we'll get back to you within 24 hours</p>
                            </div>
                            <form onSubmit={handleSubmit} className="solutions-page-form">
                                <div className="solutions-page-form-group">
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
                                <div className="solutions-page-form-group">
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
                                <div className="solutions-page-form-group">
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
                                <div className="solutions-page-form-group">
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
                                    className="solutions-page-form-submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Request <Send size={16} />
                                </motion.button>
                            </form>
                            <div className="solutions-page-form-footer">
                                <span>🔒 Your information is secure with us</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= SOLUTIONS LIST SECTION ================= */}
            <section className="solutions-page-list" id="solutions">
                <div className="solutions-page-list-container">
                    <motion.div
                        className="solutions-page-list-header"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="solutions-page-badge">OUR SOLUTIONS</span>
                        <h2>
                            Complete Steel Solutions
                            <br />
                            <span className="solutions-page-highlight">for Industrial & Commercial Projects</span>
                        </h2>
                        <p>
                            We provide a comprehensive range of steel engineering services
                            tailored to meet the unique needs of every project.
                        </p>
                    </motion.div>

                    {/* ================= SOLUTION GRID ================= */}
                    <div className="solutions-grid">
                        {SOLUTIONS.map((item, index) => (
                            <motion.div
                                className={`solution-card ${item.theme}`}
                                key={item.number}
                                initial={{
                                    opacity: 0,
                                    y: index % 2 === 0 ? 60 : -60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.25 },
                                }}
                            >
                                {/* Image */}
                                <motion.div
                                    className="solution-image"
                                    whileHover="hover"
                                >
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        variants={{
                                            hover: {
                                                scale: 1.06,
                                                transition: { duration: 0.5 },
                                            },
                                        }}
                                    />

                                    <motion.div
                                        className="number-circle"
                                        initial={{ scale: 0, rotate: -45 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.12 + 0.25,
                                            type: "spring",
                                        }}
                                    >
                                        {item.number}
                                    </motion.div>

                                    <div className="image-corner" />
                                </motion.div>

                                {/* Content */}
                                <div className="solution-content">
                                    <motion.h3
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.12 + 0.15,
                                        }}
                                    >
                                        {item.title}
                                    </motion.h3>

                                    <motion.div
                                        className="small-line"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.12 + 0.25,
                                        }}
                                    />

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.12 + 0.3,
                                        }}
                                    >
                                        {item.description}
                                    </motion.p>

                                    <motion.a
                                        className="solution-explore-btn"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.12 + 0.4,
                                        }}
                                        whileHover={{ x: 6 }}
                                        onClick={() => handleExplore(item.slug)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {item.link}
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}